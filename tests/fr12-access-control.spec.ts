import { test, expect } from '@playwright/test';
import * as crypto from 'crypto';
import acData from '../data/fr12_access_control.json';

const ADMIN_URL = process.env.ADMIN_URL || 'http://localhost:5174';
const API_BASE = process.env.API_URL || 'http://localhost:3000';
const BACKEND_SECRET = 'super_secret_key_that_should_not_be_here';

/**
 * Ký JWT chuẩn HMAC-SHA256 (RFC 7519) phục vụ kiểm thử xác thực & phân quyền FR-12
 */
function signJwtHs256(payload: Record<string, unknown>, secret: string): string {
  const header = { alg: 'HS256', typ: 'JWT' };
  const encode = (obj: unknown) =>
    Buffer.from(JSON.stringify(obj)).toString('base64url');
  const unsigned = `${encode(header)}.${encode(payload)}`;
  const signature = crypto
    .createHmac('sha256', secret)
    .update(unsigned)
    .digest('base64url');
  return `${unsigned}.${signature}`;
}

/**
 * Kịch bản kiểm thử tự động hoàn chỉnh sau Human Review cho FR-12: Access Control
 * - Data-Driven 100% từ ../data/fr12_access_control.json (12 test cases kế thừa từ HW02).
 * - Tích hợp 3 Assertion Patterns khác nhau:
 *   + Pattern 1 (HTTP Status & API Gate Assertion): expect(expected.statusCodes).toContain(res.status())
 *   + Pattern 2 (Client Storage State Assertion): kiểm tra localStorage.getItem('adminToken')
 *   + Pattern 3 (UI Visibility, Heading & Dialog Assertion): toBeVisible(), toHaveText(), dialog message check
 */
test.describe('FR-12: Access Control (Data-Driven Suite)', () => {
  for (const tc of acData) {
    test(`${tc.tcId} - ${tc.title}`, async ({ page, request }) => {
      if (tc.mode === 'ui_login' && tc.credentials) {
        await page.goto(ADMIN_URL);
        await page.evaluate(() => localStorage.clear());
        await page.reload();

        const loginHeading = page.getByRole('heading', { name: 'Admin Login' });
        // [Pattern 3]: Kiểm tra form Admin Login hiển thị ban đầu
        await expect(loginHeading).toBeVisible();

        let dialogMsg = '';
        page.once('dialog', async (dialog) => {
          dialogMsg = dialog.message();
          await dialog.accept();
        });

        await page.getByPlaceholder('Email').fill(tc.credentials.email);
        await page.getByPlaceholder('Password').fill(tc.credentials.password);
        await page.getByRole('button', { name: 'Login' }).click();

        if (tc.expected.loginSuccess) {
          // [Pattern 3]: Hiển thị tiêu đề EShop Admin và Dashboard sau khi Admin đăng nhập
          await expect(
            page.getByRole('heading', { name: tc.expected.dashboardHeading })
          ).toBeVisible();
          await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

          // [Pattern 2]: Kiểm tra adminToken đã được lưu vào localStorage
          const storedToken = await page.evaluate(() =>
            localStorage.getItem('adminToken')
          );
          expect(storedToken).toBeTruthy();
        } else {
          // [Pattern 3]: Cảnh báo không có quyền Admin và giữ nguyên tại màn hình Admin Login
          await expect(loginHeading).toBeVisible();
          expect(dialogMsg).toContain(tc.expected.alertMessage || '');

          // [Pattern 2]: Đảm bảo không lưu adminToken vào localStorage đối với role='user'
          const storedToken = await page.evaluate(() =>
            localStorage.getItem('adminToken')
          );
          expect(storedToken).toBeNull();
        }
      } else if (tc.request) {
        const nowSec = Math.floor(Date.now() / 1000);
        let token: string | null = null;

        if (tc.tokenType === 'valid_admin') {
          token = signJwtHs256({ id: 1, role: 'admin', iat: nowSec }, BACKEND_SECRET);
        } else if (tc.tokenType === 'valid_user') {
          token = signJwtHs256({ id: 2, role: 'user', iat: nowSec }, BACKEND_SECRET);
        } else if (tc.tokenType === 'malformed') {
          token = tc.rawToken || 'invalid_jwt';
        } else if (tc.tokenType === 'wrong_secret') {
          token = signJwtHs256(
            { ...(tc.payload || {}), iat: nowSec },
            'wrong_attacker_secret_key'
          );
        } else if (tc.tokenType === 'custom_signed') {
          token = signJwtHs256({ ...(tc.payload || {}), iat: nowSec }, BACKEND_SECRET);
        } else if (tc.tokenType === 'expired_boundary') {
          token = signJwtHs256(
            {
              id: 1,
              role: 'admin',
              iat: nowSec - 60,
              exp: nowSec + (tc.expOffsetSeconds || -1),
            },
            BACKEND_SECRET
          );
        }

        // Mở trang Web Admin và nạp token cần kiểm thử để quan sát hành vi cổng UI + chụp bằng chứng trực quan
        await page.goto(ADMIN_URL);
        await page.evaluate((tok) => {
          localStorage.clear();
          if (tok) {
            localStorage.setItem('adminToken', tok);
          }
        }, token);
        await page.reload();

        const headers: Record<string, string> = {};
        if (token !== null) {
          headers['Authorization'] = `Bearer ${token}`;
        }

        const res = await request.fetch(`${API_BASE}${tc.request.endpoint}`, {
          method: tc.request.method,
          headers,
          data: tc.request.body,
        });

        const actualStatus = res.status();
        let responseBodyText = '';
        try {
          const bodyJson = await res.json();
          responseBodyText = JSON.stringify(bodyJson).slice(0, 180);
          // Dọn dẹp dữ liệu nếu API POST /api/products bị lọt tạo sản phẩm trái phép (Test Isolation)
          if (
            tc.request.method === 'POST' &&
            tc.request.endpoint === '/api/products' &&
            bodyJson?.id
          ) {
            await request.delete(`${API_BASE}/api/products/${bodyJson.id}`);
          }
        } catch {
          responseBodyText = await res.text();
        }

        // Hiển thị thanh thông tin kiểm toán Access Control trực quan trên trang để lưu vào Screenshot khi bắt được Bug
        await page.evaluate(
          ({ tcId, method, endpoint, tokenType, expectedCodes, actual, bodyPreview }) => {
            const banner = document.createElement('div');
            const isPass = expectedCodes.includes(actual);
            banner.style.cssText = `position:fixed;top:0;left:0;right:0;z-index:99999;padding:12px 18px;font-family:monospace;font-size:13px;font-weight:bold;color:#fff;background:${
              isPass ? '#065f46' : '#991b1b'
            };border-bottom:3px solid #facc15;box-shadow:0 4px 12px rgba(0,0,0,0.3);`;
            banner.innerText = `[${tcId}] ${method} ${endpoint} | Token: ${tokenType} | Expected HTTP: [${expectedCodes.join(
              ', '
            )}] | Actual HTTP: ${actual} | Body: ${bodyPreview}`;
            document.body.prepend(banner);
          },
          {
            tcId: tc.tcId,
            method: tc.request.method,
            endpoint: tc.request.endpoint,
            tokenType: tc.tokenType,
            expectedCodes: tc.expected.statusCodes,
            actual: actualStatus,
            bodyPreview: responseBodyText,
          }
        );

        // [Pattern 1]: Kiểm tra mã trạng thái HTTP phản hồi từ cổng kiểm soát truy cập
        expect(
          tc.expected.statusCodes,
          tc.expected.bugId ||
            `Expected HTTP status in [${tc.expected.statusCodes.join(', ')}] but received ${actualStatus}`
        ).toContain(actualStatus);

        if (tc.expected.shouldAllowAdminUI) {
          // [Pattern 3]: Token Admin hợp lệ mở được giao diện EShop Admin
          await expect(page.getByRole('heading', { name: 'EShop Admin' })).toBeVisible();
          // [Pattern 2]: Token vẫn được duy trì trong localStorage
          const currentToken = await page.evaluate(() =>
            localStorage.getItem('adminToken')
          );
          expect(currentToken).toBeTruthy();
        } else {
          // [Pattern 3]: Token không hợp lệ / không đủ quyền phải bị chặn ở màn hình Admin Login
          await expect(page.getByRole('heading', { name: 'Admin Login' })).toBeVisible();
          // [Pattern 2]: Web Admin phải xóa token không hợp lệ khỏi localStorage
          const currentToken = await page.evaluate(() =>
            localStorage.getItem('adminToken')
          );
          expect(currentToken).toBeNull();
        }
      }
    });
  }
});
