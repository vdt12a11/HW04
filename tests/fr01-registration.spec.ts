import { test, expect } from '@playwright/test';
import testData from '../data/fr01_registration.json';

/**
 * Bản sinh ban đầu bởi AI (Before Human Review) cho FR-01: Account Registration
 * - Nhược điểm sẽ được phát hiện và sửa ở bước Human Review:
 *   1. Fragile/Broken Selectors: Dùng page.getByLabel('Họ Tên') nhưng thẻ <label> trong Register.jsx không có thuộc tính htmlFor.
 *   2. Flaky Waits: Dùng page.waitForTimeout(1000) (hard sleep).
 *   3. Weak Assertions: Chưa kiểm tra HTML5 Constraint Validation (validity.valueMissing) cho các ca để trống.
 */
test.describe('FR-01: Account Registration (Data-Driven Suite)', () => {
  for (const tc of testData) {
    test(`${tc.tcId} - ${tc.title}`, async ({ page }) => {
      await page.goto('/register');

      // Điền thông tin vào form (Fragile selectors ban đầu do AI đoán)
      await page.getByLabel('Họ Tên').fill(tc.input.name);
      await page.getByLabel('Email').fill(tc.input.email);
      await page.getByLabel('Mật khẩu').fill(tc.input.password);

      await page.locator('button[type="submit"]').click();
      await page.waitForTimeout(1000);

      if (tc.expected.outcome === 'success') {
        await expect(page).toHaveURL(/\/login$/);
      } else {
        await expect(page.locator('.bg-red-100')).toBeVisible();
      }
    });
  }
});
