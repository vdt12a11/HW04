import { test, expect } from '@playwright/test';
import cartData from '../data/fr07_shopping_cart.json';

/**
 * Bản sinh ban đầu bởi AI (Before Human Review) cho FR-07: Shopping Cart
 * - Các lỗi của AI sẽ được phát hiện và sửa ở bước Human Review:
 *   1. SPA State Loss: Dùng page.goto('/cart') sau khi thêm hàng làm reload toàn bộ React SPA, xóa sạch useState([]) trong CartContext.
 *   2. Fragile Selectors: Dùng CSS phụ thuộc vị trí div.grid > div:nth-child(...) button.
 *   3. Flaky Waits: Dùng page.waitForTimeout(1000).
 */
test.describe('FR-07: Shopping Cart (Data-Driven Suite)', () => {
  for (const tc of cartData) {
    test(`${tc.tcId} - ${tc.title}`, async ({ page }) => {
      await page.goto('/');
      await page.waitForTimeout(1000);

      for (const idx of tc.setup.addProductsIndices) {
        await page
          .locator(`div.grid > div:nth-child(${idx + 1}) button`)
          .click();
      }

      // Lỗi AI: page.goto('/cart') làm mất toàn bộ state giỏ hàng trong bộ nhớ React!
      await page.goto('/cart');
      await page.waitForTimeout(1000);

      await expect(page.locator('h2')).toBeVisible();
    });
  }
});
