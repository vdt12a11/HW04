import { test, expect } from '@playwright/test';
import * as crypto from 'crypto';
import acData from '../data/fr12_access_control.json';

const ADMIN_URL = process.env.ADMIN_URL || 'http://localhost:5174';
const API_BASE = process.env.API_URL || 'http://localhost:3000';
const BACKEND_SECRET = 'super_secret_key_that_should_not_be_here';

/**
 * Hàm tiện ích ký JWT chuẩn HMAC-SHA256 (RFC 7519) dùng cho kiểm thử Access Control & BVA Expiry
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
 * Bản cập nhật lần 1 sau Human Review cho FR-12: Access Control
 * - Sửa lỗi URL: Trỏ đúng vào cổng Web Admin (http://localhost:5174) thay vì '/admin'.
 * - Sửa lỗi Fragile Selector: Thay input[type="email"] (không tồn tại trong App.jsx của Web Admin)
 *   bằng getByPlaceholder('Email') và getByPlaceholder('Password').
 * - Bắt sự kiện native window.alert("Bạn không phải là admin!") qua page.once('dialog', ...) và xóa waitForTimeout.
 */
test.describe('FR-12: Access Control (Data-Driven Suite)', () => {
  for (const tc of acData) {
    test(`${tc.tcId} - ${tc.title}`, async ({ page, request }) => {
      if (tc.mode === 'ui_login' && tc.credentials) {
        await page.goto(ADMIN_URL);
        await page.evaluate(() => localStorage.clear());
        await page.reload();

        let dialogMsg = '';
        page.once('dialog', async (dialog) => {
          dialogMsg = dialog.message();
          await dialog.accept();
        });

        await page.getByPlaceholder('Email').fill(tc.credentials.email);
        await page.getByPlaceholder('Password').fill(tc.credentials.password);
        await page.getByRole('button', { name: 'Login' }).click();

        if (tc.expected.loginSuccess) {
          await expect(page.getByRole('heading', { name: 'EShop Admin' })).toBeVisible();
        } else {
          await expect(page.getByRole('heading', { name: 'Admin Login' })).toBeVisible();
          expect(dialogMsg).toContain(tc.expected.alertMessage);
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
          token = signJwtHs256({ ...(tc.payload || {}), iat: nowSec }, 'wrong_attacker_secret_key');
        } else if (tc.tokenType === 'custom_signed') {
          token = signJwtHs256({ ...(tc.payload || {}), iat: nowSec }, BACKEND_SECRET);
        } else if (tc.tokenType === 'expired_boundary') {
          token = signJwtHs256(
            { id: 1, role: 'admin', iat: nowSec - 60, exp: nowSec + (tc.expOffsetSeconds || -1) },
            BACKEND_SECRET
          );
        }

        const headers: Record<string, string> = {};
        if (token !== null) {
          headers['Authorization'] = `Bearer ${token}`;
        }

        const res = await request.fetch(`${API_BASE}${tc.request.endpoint}`, {
          method: tc.request.method,
          headers,
          data: tc.request.body,
        });

        expect(tc.expected.statusCodes).toContain(res.status());
      }
    });
  }
});
