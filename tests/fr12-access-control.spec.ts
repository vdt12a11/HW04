import { test, expect } from '@playwright/test';
import acData from '../data/fr12_access_control.json';

/**
 * Bản sinh ban đầu bởi AI (Before Human Review) cho FR-12: Access Control
 * - Các lỗi của AI sẽ được phát hiện và sửa ở bước Human Review:
 *   1. Sai cổng Web Admin: Dùng page.goto('/admin') (trỏ vào localhost:5173/admin thay vì http://localhost:5174).
 *   2. Không bắt sự kiện native alert("Bạn không phải là admin!") mà tìm phần tử DOM .error-message không tồn tại.
 *   3. Chưa ký JWT chuẩn HMAC-SHA256 cho các ca biên (exp = T - 1s) và các ca thiếu role / role='guest'.
 */
test.describe('FR-12: Access Control (Data-Driven Suite)', () => {
  for (const tc of acData) {
    test(`${tc.tcId} - ${tc.title}`, async ({ page, request }) => {
      if (tc.mode === 'ui_login' && tc.credentials) {
        await page.goto('/admin');
        await page.locator('input[type="email"]').fill(tc.credentials.email);
        await page.locator('input[type="password"]').fill(tc.credentials.password);
        await page.locator('button').click();
        await page.waitForTimeout(1000);

        if (tc.expected.loginSuccess) {
          await expect(page.locator('h1')).toHaveText('EShop Admin');
        } else {
          await expect(page.locator('.error-message')).toBeVisible();
        }
      } else if (tc.request) {
        const res = await request.fetch(`http://localhost:3000${tc.request.endpoint}`, {
          method: tc.request.method,
        });
        expect(tc.expected.statusCodes).toContain(res.status());
      }
    });
  }
});
