import { test, expect } from '@playwright/test';
import testData from '../data/fr01_registration.json';

/**
 * Kịch bản kiểm thử tự động hoàn chỉnh sau Human Review cho FR-01: Account Registration
 * - Data-Driven 100% từ ../data/fr01_registration.json (12 test cases kế thừa từ HW02).
 * - Tích hợp 3 Assertion Patterns khác nhau:
 *   + Pattern 1 (URL & Navigation Assertion): toHaveURL(/\/login$/) / toHaveURL(/\/register$/)
 *   + Pattern 2 (UI Visibility & Text Assertion): toBeVisible(), toHaveText(), toContainText()
 *   + Pattern 3 (DOM State & HTML5 Constraint Validation Assertion): toHaveJSProperty('validity.valueMissing', true), toBeEnabled(), toHaveCount()
 */
test.describe('FR-01: Account Registration (Data-Driven Suite)', () => {
  for (const tc of testData) {
    test(`${tc.tcId} - ${tc.title}`, async ({ page, browserName }) => {
      await page.goto('/register');

      const heading = page.getByRole('heading', { name: 'Đăng Ký Tài Khoản' });
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
        .filter({ has: page.locator('label', { hasText: /^Mật khẩu$/ }) })
        .locator('input');
      const confirmPasswordInput = page
        .locator('form > div')
        .filter({ has: page.locator('label', { hasText: /Xác nhận mật khẩu/i }) })
        .locator('input');
      const submitButton = page.getByRole('button', { name: 'Đăng Ký' });
      const errorAlert = page.locator('.bg-red-100.text-red-700');

      // [Pattern 2 & Pattern 3]: Kiểm tra tiêu đề form hiển thị và nút Submit sẵn sàng thao tác
      await expect(heading).toHaveText('Đăng Ký Tài Khoản');
      await expect(submitButton).toBeEnabled();

      const uniqueEmail = tc.input.email.replace(
        '{UNIQUE}',
        `${browserName}_${Date.now()}`
      );

      await nameInput.fill(tc.input.name);
      await emailInput.fill(uniqueEmail);
      await passwordInput.fill(tc.input.password);

      // Nếu là ca kiểm thử không khớp Xác nhận mật khẩu (TC_DT_15), kiểm tra sự tồn tại của trường Xác nhận mật khẩu theo đặc tả FR-01
      if (tc.expected.outcome === 'confirm_mismatch') {
        await expect(
          confirmPasswordInput,
          'Đặc tả FR-01 bắt buộc phải có trường Xác nhận mật khẩu trên form Đăng ký'
        ).toBeVisible({ timeout: 2000 });
        await confirmPasswordInput.fill(tc.input.confirmPassword);
      }

      await submitButton.click();

      if (tc.expected.outcome === 'success') {
        // [Pattern 2]: Không được hiển thị thông báo lỗi đỏ khi mật khẩu và dữ liệu hợp lệ
        await expect(
          errorAlert,
          `SUT từ chối mật khẩu hợp lệ "${tc.input.password}" do lỗi Regex trong Register.jsx`
        ).toHaveCount(0);
        // [Pattern 1]: Chuyển hướng sang trang /login sau khi đăng ký thành công
        await expect(page).toHaveURL(/\/login$/);
      } else if (tc.expected.outcome === 'html5_invalid') {
        // [Pattern 1]: Giữ nguyên tại trang /register
        await expect(page).toHaveURL(/\/register$/);
        // [Pattern 3]: Kiểm tra trạng thái HTML5 Constraint Validation API (validity.valueMissing === true)
        const targetField = tc.expected.invalidField === 'name' ? nameInput : emailInput;
        await expect(targetField).toHaveJSProperty('validity.valueMissing', true);
        await expect(errorAlert).toHaveCount(0);
      } else if (tc.expected.outcome === 'error_banner') {
        // [Pattern 1]: Giữ nguyên tại trang /register
        await expect(page).toHaveURL(/\/register$/);
        // [Pattern 2]: Hiển thị hộp thông báo lỗi chứa nội dung mong đợi
        await expect(errorAlert).toBeVisible();
        await expect(errorAlert).toContainText(tc.expected.errorSubstring || '');
      }
    });
  }
});
