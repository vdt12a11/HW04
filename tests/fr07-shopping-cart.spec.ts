import { test, expect } from '@playwright/test';
import cartData from '../data/fr07_shopping_cart.json';

/**
 * Kịch bản kiểm thử tự động hoàn chỉnh sau Human Review cho FR-07: Shopping Cart
 * - Data-Driven 100% từ ../data/fr07_shopping_cart.json (12 test cases kế thừa từ HW02).
 * - Tích hợp 3 Assertion Patterns khác nhau:
 *   + Pattern 1 (URL & Route Navigation Assertion): toHaveURL(/\/cart$/), toHaveURL(/\/$/)
 *   + Pattern 2 (DOM Structure & Count Assertion): toHaveCount(1), toHaveCount(5), toHaveCount(0)
 *   + Pattern 3 (UI Text, Visibility & Dialog Event Assertion): toContainText(), toHaveText(), toBeVisible(), dialog event check
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

      // Điều hướng SPA qua React Router Link để giữ nguyên state giỏ hàng
      await page.locator('header nav').getByRole('link', { name: 'Giỏ hàng' }).click();

      // [Pattern 1]: Kiểm tra URL điều hướng đến /cart
      await expect(page).toHaveURL(/\/cart$/);

      const cartTable = page.locator('table');
      const cartRows = page.locator('table tbody tr');
      const tableHeaders = page.locator('table thead th');

      switch (tc.action) {
        case 'verify_single_item_added': {
          // [Pattern 2]: Kiểm tra số cột tiêu đề = 5 và số dòng sản phẩm = 1
          await expect(tableHeaders).toHaveCount(5);
          await expect(cartRows).toHaveCount(tc.expected.rowCount!);

          // [Pattern 3]: Kiểm tra số lượng = 1 và định dạng tiền tệ có ký hiệu '₫'
          const firstRowCells = cartRows.first().locator('td');
          await expect(firstRowCells.nth(1)).toContainText(tc.expected.currencySymbol!);
          await expect(firstRowCells.nth(2)).toHaveText(String(tc.expected.quantity));
          await expect(firstRowCells.nth(3)).toContainText(tc.expected.currencySymbol!);
          break;
        }

        case 'verify_duplicate_merged': {
          // [Pattern 2]: Đặc tả FR-07 yêu cầu thêm trùng sản phẩm chỉ giữ 1 dòng duy nhất
          await expect(
            cartRows,
            'BUG_FR07_01: Thêm cùng một sản phẩm tạo thành 2 dòng thay vì gộp số lượng trên 1 dòng'
          ).toHaveCount(tc.expected.rowCount!);
          // [Pattern 3]: Số lượng trên dòng phải tăng lên 2
          await expect(cartRows.first().locator('td').nth(2)).toHaveText(
            String(tc.expected.quantity)
          );
          break;
        }

        case 'click_plus_button': {
          // [Pattern 2]: Đảm bảo đang có 1 dòng trong bảng
          await expect(cartRows).toHaveCount(1);
          const qtyCell = cartRows.first().locator('td').nth(2);
          const plusBtn = qtyCell.getByRole('button', { name: '+' });

          // [Pattern 3]: Kiểm tra nút '+' tồn tại và bấm tăng số lượng lên 2
          await expect(
            plusBtn,
            'BUG_FR07_02: Cột Số lượng trong bảng giỏ hàng thiếu nút [+] để tăng số lượng'
          ).toBeVisible({ timeout: 2000 });
          await plusBtn.click();
          await expect(qtyCell).toHaveText(String(tc.expected.quantityAfter));
          break;
        }

        case 'click_minus_at_min_boundary':
        case 'click_minus_from_two_to_one': {
          const qtyCell = cartRows.first().locator('td').nth(2);
          const minusBtn = qtyCell.getByRole('button', { name: '-' });

          // [Pattern 3]: Kiểm tra nút '-' tồn tại tại cột Số lượng
          await expect(
            minusBtn,
            'BUG_FR07_02: Cột Số lượng trong bảng giỏ hàng thiếu nút [-] để giảm số lượng'
          ).toBeVisible({ timeout: 2000 });
          await minusBtn.click();
          await expect(qtyCell).toHaveText(String(tc.expected.quantityAfter));
          break;
        }

        case 'verify_delete_confirm_dialog': {
          await expect(cartRows).toHaveCount(1);
          let dialogTriggered = false;
          page.once('dialog', async (dialog) => {
            dialogTriggered = true;
            await dialog.dismiss();
          });

          await cartRows.first().getByRole('button', { name: 'Xóa' }).click();

          // [Pattern 3]: Đặc tả FR-07 bắt buộc phải có Confirmation Dialog trước khi xóa
          const confirmModal = page.getByRole('dialog');
          const hasConfirmUI = dialogTriggered || (await confirmModal.count()) > 0;
          expect(
            hasConfirmUI,
            'BUG_FR07_03: Bấm nút Xóa sản phẩm xóa thẳng khỏi giỏ hàng mà không hiển thị Confirmation Dialog'
          ).toBe(true);
          break;
        }

        case 'delete_first_of_two_items': {
          // [Pattern 2]: Trước khi xóa có 2 dòng, sau khi xóa còn 1 dòng
          await expect(cartRows).toHaveCount(tc.expected.rowCountBefore!);
          const secondItemName = await cartRows.nth(1).locator('td').first().innerText();

          page.once('dialog', async (dialog) => await dialog.accept());
          await cartRows.first().getByRole('button', { name: 'Xóa' }).click();

          await expect(cartRows).toHaveCount(tc.expected.rowCountAfter!);
          // [Pattern 3]: Dòng còn lại đúng là sản phẩm thứ 2
          await expect(cartRows.first().locator('td').first()).toHaveText(secondItemName);
          break;
        }

        case 'verify_empty_state_with_illustration': {
          // [Pattern 2]: Khi giỏ trống không hiển thị bảng dữ liệu
          await expect(cartTable).toHaveCount(0);
          // [Pattern 3]: Hiển thị thông báo giỏ trống VÀ hình minh họa (img hoặc svg)
          await expect(page.getByRole('heading', { name: tc.expected.emptyMessage })).toBeVisible();
          const illustration = page.locator('main img, main svg');
          await expect(
            illustration.first(),
            'BUG_FR07_04: Giao diện Empty State khi giỏ hàng trống thiếu hình minh họa (img/svg)'
          ).toBeVisible({ timeout: 2000 });
          break;
        }

        case 'click_continue_shopping': {
          // [Pattern 2 & Pattern 3]: Kiểm tra nút 'Tiếp tục mua sắm' hiển thị khi giỏ trống
          await expect(cartTable).toHaveCount(0);
          const continueLink = page.getByRole('link', { name: tc.expected.buttonLabel });
          await expect(continueLink).toBeVisible();
          await continueLink.click();

          // [Pattern 1]: Điều hướng thành công về trang chủ '/'
          await expect(page).toHaveURL(/\/$/);
          break;
        }

        case 'verify_total_label': {
          await expect(cartRows).toHaveCount(1);
          const totalSection = page.locator('div.text-xl.font-bold');
          // [Pattern 3]: Kiểm tra nhãn tổng tiền bắt buộc là "Tổng cộng:"
          await expect(
            totalSection,
            'BUG_FR07_05: Nhãn tổng tiền hiển thị "Tổng tạm tính:" thay vì "Tổng cộng:" theo đặc tả FR-07'
          ).toContainText(tc.expected.requiredTotalLabel!);
          break;
        }

        case 'verify_table_headers_and_continue_btn': {
          await expect(tableHeaders).toHaveCount(5);
          // [Pattern 3]: Kiểm tra tiêu đề cột thứ 2 là 'Đơn giá' và nút quay về là 'Tiếp tục mua sắm'
          await expect(
            tableHeaders.nth(1),
            'BUG_FR07_06: Tiêu đề cột thứ 2 ghi là "Giá" thay vì "Đơn giá" và nút quay về ghi "← Mua tiếp" thay vì "Tiếp tục mua sắm"'
          ).toHaveText(tc.expected.requiredPriceHeader!);
          await expect(
            page.locator('main').getByRole('link', { name: tc.expected.requiredContinueLabel })
          ).toBeVisible();
          break;
        }

        case 'delete_last_item_to_empty_state': {
          // [Pattern 2]: Giỏ có 1 dòng -> bấm Xóa -> bảng biến mất (count = 0)
          await expect(cartRows).toHaveCount(tc.expected.rowCountBefore!);
          page.once('dialog', async (dialog) => await dialog.accept());
          await cartRows.first().getByRole('button', { name: 'Xóa' }).click();

          await expect(cartTable).toHaveCount(tc.expected.rowCountAfter!);
          // [Pattern 3]: Xuất hiện thông báo Empty State
          await expect(page.getByRole('heading', { name: tc.expected.emptyMessage })).toBeVisible();
          break;
        }
      }
    });
  }
});
