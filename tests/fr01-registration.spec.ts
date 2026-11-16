import { test, expect } from '@playwright/test';
import testData from '../data/fr01_registration.json';

/**
 * Bản cập nhật lần 1 sau Human Review (Fix Selectors & Flaky Waits):
 * - Thay thế page.getByLabel(...) (bị lỗi do <label> trong Register.jsx thiếu thuộc tính htmlFor)
 *   bằng bộ chọn ngữ nghĩa bền vững gắn với khối chứa label tương ứng.
 * - Loại bỏ hoàn toàn page.waitForTimeout(1000) (hard sleep).
 * - Cô lập dữ liệu email động theo tên trình duyệt (browserName) và timestamp.
 */
test.describe('FR-01: Account Registration (Data-Driven Suite)', () => {
  for (const tc of testData) {
    test(`${tc.tcId} - ${tc.title}`, async ({ page, browserName }) => {
      await page.goto('/register');

      const nameInput = page
        .locator('form > div')
        .filter({ has: page.locator('label', { hasText: 'Họ Tên' }) })
        .locator('input');
      const emailInput = page
        .locator('form > div')
        .filter({ has: page.locator('label', { hasText: 'Email' }) })
        .locator('input');
      const passwordInput = page
        .locator('form > div')
        .filter({ has: page.locator('label', { hasText: 'Mật khẩu' }) })
        .locator('input');
      const submitButton = page.getByRole('button', { name: 'Đăng Ký' });

      const uniqueEmail = tc.input.email.replace(
        '{UNIQUE}',
        `${browserName}_${Date.now()}`
      );

      await nameInput.fill(tc.input.name);
      await emailInput.fill(uniqueEmail);
      await passwordInput.fill(tc.input.password);

      await submitButton.click();

      if (tc.expected.outcome === 'success') {
        await expect(page).toHaveURL(/\/login$/);
      } else {
        await expect(page).toHaveURL(/\/register$/);
      }
    });
  }
});
