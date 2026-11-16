import { test, expect } from '@playwright/test';
import cartData from '../data/fr07_shopping_cart.json';

/**
 * Bản cập nhật lần 1 sau Human Review cho FR-07: Shopping Cart
 * - Khắc phục lỗi mất trạng thái React SPA (CartContext lưu trong useState):
 *   Thay page.goto('/cart') bằng thao tác click vào Link 'Giỏ hàng' trên thanh điều hướng Header.
 * - Thay thế fragile selector (div:nth-child) bằng getByRole('button', { name: 'Thêm vào giỏ' }).
 * - Loại bỏ hoàn toàn lệnh chờ cứng page.waitForTimeout(1000).
 */
test.describe('FR-07: Shopping Cart (Data-Driven Suite)', () => {
  for (const tc of cartData) {
    test(`${tc.tcId} - ${tc.title}`, async ({ page }) => {
      await page.goto('/');

      const addToCartButtons = page.getByRole('button', { name: 'Thêm vào giỏ' });
      await expect(addToCartButtons.first()).toBeVisible();

      for (const idx of tc.setup.addProductsIndices) {
        await addToCartButtons.nth(idx).click();
      }

      // Điều hướng SPA qua React Router Link để bảo toàn state trong CartContext
      await page.locator('header nav').getByRole('link', { name: 'Giỏ hàng' }).click();
      await expect(page).toHaveURL(/\/cart$/);
    });
  }
});
