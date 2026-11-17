# BÁO CÁO BÀI TẬP VỀ NHÀ HW04 — KIỂM THỬ TỰ ĐỘNG (AUTOMATION TESTING)

- **Họ và tên sinh viên:** VĂN ĐỨC TUẤN
- **Mã số sinh viên (`StudentID`):** `23120397`
- **Lớp / Khóa:** Kiểm thử phần mềm - CQ2023/3
- **Hệ thống kiểm thử (SUT):** EShop Demo Application (`https://github.com/ttbhanh/eshop-sut`)
- **Công cụ & Framework:** Playwright `1.64.1` (TypeScript) + Playwright HTML Reporter + Custom Student Stamp Reporter (`Run by: 23120397`)
- **Công cụ AI hỗ trợ:** Antigravity (Gemini 4 Argon) — Cấp độ Bloom-AI: **G9.2 (Apply)**, **G9.3 (Analyse)**, **G9.4 (Collaborate with AI)**

---

## 1. Lựa Chọn Tính Năng Kiểm Thử Tự Động (Feature Selection — Mục 5)

Tuân thủ Mục 5 của đề bài HW04 (*"Automate the same three (3) web features you selected in HW02 — one each from Pools A, B, and C. The Pool D (mobile) feature is not used in this homework"*), bài báo cáo giữ nguyên **3 tính năng Web** đã thiết kế ở **HW02**:

| Phân hệ (Pool) | Mã & Tên Tính năng | Phạm vi Kiểm thử Tự động (In-Scope) | Số Test Cases Tự động hóa |
| :--- | :--- | :--- | :---: |
| **Pool A** *(Auth, Categories, Products)* | **`FR-01`: Đăng ký tài khoản (Account Registration)** | Giao diện `/register` (`http://localhost:5173/register`) và API `POST /api/register`: kiểm tra các trường Họ Tên, Email, độ mạnh Mật khẩu ($\ge 8$ ký tự, chữ hoa, chữ thường, số, ký tự đặc biệt), Xác nhận mật khẩu và điều hướng `/login`. | **12 TCs** *(36 runs trên 3 browsers)* |
| **Pool B** *(Shopping Cart & Checkout)* | **`FR-07`: Giỏ hàng (Shopping Cart)** | Giao diện `/` và `/cart` (`http://localhost:5173/cart`): thêm sản phẩm mới, thêm trùng sản phẩm (gộp số lượng), nút tăng/giảm số lượng `+`/`-` tại biên $Q=1, Q=2$, hộp thoại xác nhận trước khi xóa, Empty State (thông báo + hình minh họa), điều hướng và quy chuẩn nhãn UI (`Đơn giá`, `Tổng cộng`, `Tiếp tục mua sắm`). | **12 TCs** *(36 runs trên 3 browsers)* |
| **Pool C** *(Web Admin)* | **`FR-12`: Kiểm soát truy cập (Access Control)** | Cổng đăng nhập Web Admin (`http://localhost:5174`) và nhóm Admin APIs (`http://localhost:3000/api/admin/*`, `POST /api/products`): kiểm tra xác thực JWT (`SEC-02`), phân quyền vai trò `role = 'admin'` (`SEC-03`), và biên thời gian hết hạn token (`exp = T - 1s`). | **12 TCs** *(36 runs trên 3 browsers)* |
| **Pool D** *(Mobile App)* | *`FR-20`: Mobile App* | *Không áp dụng trong HW04 theo đúng quy định tại Mục 5 của đề bài.* | *N/A* |
| **Tổng cộng** | **3 Features Web** | **Data-Driven 100% (`.json`) + $\ge 3$ Assertion Patterns / script** | **36 TCs (108 runs)** |

---

## 2. Kiến Trúc Tự Động Hóa & Cấu Hình Đa Trình Duyệt (Multi-Browser Architecture)

### 2.1. Cấu trúc Thư mục Dự án
```text
HW04/
├── data/
│   ├── fr01_registration.json       # Bộ dữ liệu 12 TCs của Feature A (FR-01)
│   ├── fr07_shopping_cart.json      # Bộ dữ liệu 12 TCs của Feature B (FR-07)
│   └── fr12_access_control.json     # Bộ dữ liệu 12 TCs của Feature C (FR-12)
├── tests/
│   ├── fr01-registration.spec.ts    # Kịch bản Playwright cho FR-01
│   ├── fr07-shopping-cart.spec.ts   # Kịch bản Playwright cho FR-07
│   └── fr12-access-control.spec.ts  # Kịch bản Playwright cho FR-12
├── scripts/
│   ├── student-stamp-reporter.ts    # Custom Reporter đóng dấu "Run by: 23120397" + ISO Timestamp
│   └── stamp-report.js              # CLI dự phòng xác thực dấu sinh viên trên HTML Report
├── reports/
│   ├── full-suite-html-report/      # HTML Report tổng hợp cả 3 features × 3 browsers (108 runs)
│   ├── fr01-html-report/            # HTML Report riêng cho Feature A (36 runs)
│   ├── fr07-html-report/            # HTML Report riêng cho Feature B (36 runs)
│   └── fr12-html-report/            # HTML Report riêng cho Feature C (36 runs)
├── screenshots/                     # Ảnh chụp màn hình 13 lỗi thật của SUT (fr01/, fr07/, fr12/)
├── playwright.config.ts             # Cấu hình 3 trình duyệt (Chromium, Firefox, WebKit) & WebServer
├── Main_report.md                   # Báo cáo chính (kèm Gap Analysis)
├── Bug_Report.md                    # Báo cáo chi tiết 13 lỗi phát hiện kèm screenshots
├── AI_Audit_Report.md               # Báo cáo kiểm toán AI theo mẫu 5 cột [AI-02] FIT@HCMUS
├── AI_Critique.md                   # Bài phản biện AI (200–300 từ)
├── Prompt_log.md                    # Nhật ký toàn bộ các phiên tương tác Prompt
└── README.md                        # Bảng tự đánh giá & Tổng hợp số liệu kiểm thử
```

### 2.2. Đảm bảo Ràng buộc Chống Gian lận (Anti-AI-Cheat Constraints — Mục 11)
Trong file [`playwright.config.ts`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/playwright.config.ts) và [`scripts/student-stamp-reporter.ts`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/scripts/student-stamp-reporter.ts):
1. **Chạy thật trên 3 trình duyệt độc lập (`Chromium`, `Firefox`, `WebKit`):** Mỗi tính năng chạy trên cả 3 trình duyệt ($3 \times 3 = 9$ browser runs, tổng cộng $36 \times 3 = 108$ test executions).
2. **Đóng dấu định danh `"Run by: 23120397"` kèm ISO Timestamp:** Mọi báo cáo HTML được sinh ra đều tự động hiển thị dòng chữ **`Run by: 23120397 (Văn Đức Tuấn) — HW04 Automation Testing | ISO Timestamp: 2026-11-16T17:00:53.196Z`** trên thẻ `<title>`, thanh Header cố định phía trên cùng, thanh Footer và phần Metadata của báo cáo.

---

## 3. Task 1 — Feature A: `FR-01` Đăng Ký Tài Khoản (Account Registration)

### 3.1. Bộ Dữ liệu Kiểm thử Data-Driven ([`data/fr01_registration.json`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/data/fr01_registration.json))
Bộ 12 test cases được chuyển đổi từ bảng thiết kế Domain Testing (EP) và Boundary Value Analysis (BVA) của HW02:

| Mã TC | Phân loại | Dữ liệu Đầu vào (`name` / `email` / `password` / `confirmPassword`) | Kết quả Mong đợi theo Đặc tả `FR-01` | Kết quả Thực tế (3 Browsers) |
| :---: | :---: | :--- | :--- | :---: |
| **TC_DT_01** | Positive | `"Nguyen Van A"` / `"newuser_dt01_{UNIQUE}@eshop.com"` / `"Aa1@$!%*?&"` / `"Aa1@$!%*?&"` | Đăng ký thành công, chuyển hướng `/login` | ❌ **FAILED** (`BUG_FR01_01`) |
| **TC_DT_02** | Negative | `""` (Rỗng) / `"user_dt02@eshop.com"` / `"Eshop@2026"` / `"Eshop@2026"` | Chặn submit bởi HTML5 `required` (`validity.valueMissing = true`) | ✅ **PASSED** |
| **TC_DT_04** | Negative | `"Tran Thi B"` / `""` (Rỗng) / `"Eshop@2026"` / `"Eshop@2026"` | Chặn submit bởi HTML5 `required` (`validity.valueMissing = true`) | ✅ **PASSED** |
| **TC_DT_09** | Negative | `"Le Van C"` / `"user_dt09@eshop.com"` / `"Esh@1"` (5 ký tự) / `"Esh@1"` | Báo lỗi `.bg-red-100` (`"Mật khẩu quá yếu"`), giữ ở `/register` | ✅ **PASSED** |
| **TC_DT_10** | Negative | `"Le Van C"` / `"user_dt10@eshop.com"` / `"eshop@2026"` (thiếu hoa) / `"eshop@2026"` | Báo lỗi `.bg-red-100` (`"Mật khẩu quá yếu"`), giữ ở `/register` | ✅ **PASSED** |
| **TC_DT_11** | Negative | `"Le Van C"` / `"user_dt11@eshop.com"` / `"ESHOP@2026"` (thiếu thường) / `"ESHOP@2026"` | Báo lỗi `.bg-red-100` (`"Mật khẩu quá yếu"`), giữ ở `/register` | ✅ **PASSED** |
| **TC_DT_12** | Negative | `"Le Van C"` / `"user_dt12@eshop.com"` / `"Eshop@admin"` (thiếu số) / `"Eshop@admin"` | Báo lỗi `.bg-red-100` (`"Mật khẩu quá yếu"`), giữ ở `/register` | ✅ **PASSED** |
| **TC_DT_13** | Negative | `"Le Van C"` / `"user_dt13@eshop.com"` / `"Eshop2026a"` (thiếu ký tự ĐB) / `"Eshop2026a"` | Báo lỗi `.bg-red-100` (`"Mật khẩu quá yếu"`), giữ ở `/register` | ✅ **PASSED** |
| **TC_DT_15** | Negative | `"Pham Van D"` / `"user_dt15@eshop.com"` / `"Eshop@2026"` / `"Eshop@2027"` (không khớp) | Có ô nhập `Xác nhận mật khẩu` và báo lỗi không khớp | ❌ **FAILED** (`BUG_FR01_02`) |
| **TC_BVA_01** | Boundary | `"Nguyen Van A"` / `"bva_01@eshop.com"` / `"Esh@123"` ($LB-1 = 7$ ký tự) / `"Esh@123"` | Báo lỗi `.bg-red-100` (`"Mật khẩu quá yếu"`), giữ ở `/register` | ✅ **PASSED** |
| **TC_BVA_02** | Boundary | `"Nguyen Van A"` / `"bva_02_{UNIQUE}@eshop.com"` / `"Esho@123"` ($LB = 8$ ký tự) / `"Esho@123"` | Đăng ký thành công, chuyển hướng `/login` | ❌ **FAILED** (`BUG_FR01_01`) |
| **TC_BVA_03** | Boundary | `"Nguyen Van A"` / `"bva_03_{UNIQUE}@eshop.com"` / `"Eshop@123"` ($LB+1 = 9$ ký tự) / `"Eshop@123"` | Đăng ký thành công, chuyển hướng `/login` | ❌ **FAILED** (`BUG_FR01_01`) |

### 3.2. Ba (03) Mẫu Khẳng định (Assertion Patterns) áp dụng trong [`tests/fr01-registration.spec.ts`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/tests/fr01-registration.spec.ts)
1. **Pattern 1 — URL & Route Navigation Assertion:** `await expect(page).toHaveURL(/\/login$/)` (ca hợp lệ) và `await expect(page).toHaveURL(/\/register$/)` (ca không hợp lệ).
2. **Pattern 2 — UI Visibility & Error Banner Text Assertion:** `await expect(heading).toHaveText('Đăng Ký Tài Khoản')`, `await expect(errorAlert).toBeVisible()`, `await expect(errorAlert).toContainText('Mật khẩu quá yếu')`.
3. **Pattern 3 — DOM State & HTML5 Constraint Validation Assertion:** `await expect(targetField).toHaveJSProperty('validity.valueMissing', true)`, `await expect(submitButton).toBeEnabled()`, `await expect(errorAlert).toHaveCount(0)`.

### 3.3. Bảng Review & Gap Analysis cho Feature A (`FR-01`)

| Mã Gap | Phân loại Lỗi của AI | Code AI sinh ban đầu (Before — Commit `7d4ae6e`) | Nguyên nhân AI mắc lỗi (Why AI missed it) | Bản đã sửa sau Human Review (After — Commits `de45e77`, `6372785`) |
| :---: | :--- | :--- | :--- | :--- |
| **GAP_FR01_01** | **Broken / Fragile Selectors** | `await page.getByLabel('Họ Tên').fill(tc.input.name);` | AI giả định mọi thẻ `<label>` trong React đều có thuộc tính `htmlFor` liên kết với `<input>`. Trong `Register.jsx`, `<label>Họ Tên</label>` và `<input>` là 2 thẻ anh em độc lập nên `getByLabel()` bị timeout 100%. | Dùng bộ chọn cấu trúc gắn với nhãn: `page.locator('form > div').filter({ has: page.locator('label', { hasText: 'Họ Tên' }) }).locator('input')`. |
| **GAP_FR01_02** | **Weak Assertion / HTML5 Native Validation** | `await expect(page.locator('.bg-red-100')).toBeVisible();` cho mọi ca Negative | Ở `TC_DT_02` (rỗng Họ tên) và `TC_DT_04` (rỗng Email), trình duyệt chặn sự kiện `onSubmit` bằng thuộc tính HTML5 `required` nên hộp `.bg-red-100` không xuất hiện, gây False Negative. | Bổ sung kiểm tra thuộc tính DOM `await expect(targetField).toHaveJSProperty('validity.valueMissing', true)` và `await expect(errorAlert).toHaveCount(0)`. |
| **GAP_FR01_03** | **Flaky Wait & Data Collision** | Dùng `await page.waitForTimeout(1000);` và email tĩnh `"newuser_dt01@eshop.com"` | AI có thói quen dùng lệnh ngủ cứng (`waitForTimeout`) và không tính đến việc chạy lặp trên 3 trình duyệt sẽ làm trùng email trong SQLite. | Xóa hoàn toàn `waitForTimeout(1000)` và thay `{UNIQUE}` trong email bằng `${browserName}_${Date.now()}`. |

---

## 4. Task 1 — Feature B: `FR-07` Giỏ Hàng (Shopping Cart)

### 4.1. Bộ Dữ liệu Kiểm thử Data-Driven ([`data/fr07_shopping_cart.json`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/data/fr07_shopping_cart.json))
Bộ 12 test cases được chuyển đổi từ bảng thiết kế của `FR-07` ở HW02:

| Mã TC | Phân loại | Tiền điều kiện & Thao tác (`setup` & `action`) | Kết quả Mong đợi theo Đặc tả `FR-07` | Kết quả Thực tế (3 Browsers) |
| :---: | :---: | :--- | :--- | :---: |
| **TC_CART_DT_01** | Positive | Thêm 1 SP (`[0]`) vào giỏ trống, mở `/cart` | Bảng có 5 cột, 1 dòng sản phẩm, `Số lượng = 1`, giá có ký hiệu `₫` | ✅ **PASSED** |
| **TC_CART_DT_02** | Positive | Thêm cùng 1 SP 2 lần (`[0, 0]`), mở `/cart` | Bảng giữ đúng **1 dòng** duy nhất, `Số lượng = 2` | ❌ **FAILED** (`BUG_FR07_01`) |
| **TC_CART_DT_03** | Positive | Thêm 1 SP (`[0]`), bấm nút `+` tại cột Số lượng | Nút `+` hiển thị và tăng số lượng từ `1` lên `2` | ❌ **FAILED** (`BUG_FR07_02`) |
| **TC_CART_DT_05** | Boundary | Thêm 1 SP (`[0]`, $Q=1$), bấm nút `-` tại biên dưới | Nút `-` hiển thị và giữ nguyên $Q = 1$ (không giảm về 0) | ❌ **FAILED** (`BUG_FR07_02`) |
| **TC_CART_DT_06** | Negative | Thêm 1 SP (`[0]`), bấm nút `"Xóa"` | Bắt buộc xuất hiện Confirmation Dialog trước khi xóa | ❌ **FAILED** (`BUG_FR07_03`) |
| **TC_CART_DT_08** | Positive | Thêm 2 SP khác nhau (`[0, 1]`), xóa SP đầu tiên | Số dòng giảm từ `2` xuống `1`, dòng còn lại đúng là SP thứ 2 | ✅ **PASSED** |
| **TC_CART_DT_09** | Edge | Giỏ hàng trống (`[]`), mở `/cart` | Hiển thị thông báo `"Giỏ hàng của bạn đang trống"` **kèm hình minh họa** (`img`/`svg`) | ❌ **FAILED** (`BUG_FR07_04`) |
| **TC_CART_DT_10** | Positive | Tại `/cart` khi giỏ trống, bấm `"Tiếp tục mua sắm"` | Điều hướng thành công về trang chủ `/` | ✅ **PASSED** |
| **TC_CART_DT_11** | Negative | Thêm 1 SP (`[0]`), kiểm tra nhãn tổng tiền cuối bảng | Nhãn hiển thị chính xác là `"Tổng cộng:"` (không phải `"Tổng tạm tính:"`) | ❌ **FAILED** (`BUG_FR07_05`) |
| **TC_CART_DT_12** | Negative | Thêm 1 SP (`[0]`), kiểm tra tiêu đề cột 2 & nút quay về | Cột 2 ghi `"Đơn giá"` (không phải `"Giá"`), nút ghi `"Tiếp tục mua sắm"` | ❌ **FAILED** (`BUG_FR07_06`) |
| **TC_CART_BVA_01** | Boundary | Giỏ có SP với $Q = 2$, bấm nút `-` 1 lần | Số lượng giảm từ $Q = 2$ về đúng biên $LB = 1$ | ❌ **FAILED** (`BUG_FR07_02`) |
| **TC_CART_BVA_02** | Boundary | Giỏ có 1 SP (`Count = 1`), bấm `"Xóa"` sản phẩm cuối cùng | Bảng biến mất (`count = 0`) và chuyển sang giao diện Empty State | ✅ **PASSED** |

### 4.2. Ba (03) Mẫu Khẳng định (Assertion Patterns) áp dụng trong [`tests/fr07-shopping-cart.spec.ts`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/tests/fr07-shopping-cart.spec.ts)
1. **Pattern 1 — URL & Route Navigation Assertion:** `await expect(page).toHaveURL(/\/cart$/)` và `await expect(page).toHaveURL(/\/$/)`.
2. **Pattern 2 — DOM Table Count & Structure Assertion:** `await expect(tableHeaders).toHaveCount(5)`, `await expect(cartRows).toHaveCount(1)`, `await expect(cartTable).toHaveCount(0)`.
3. **Pattern 3 — UI Text, Visibility & Native Dialog Event Assertion:** `await expect(cell).toContainText('₫')`, `await expect(totalSection).toContainText('Tổng cộng:')`, `await expect(plusBtn).toBeVisible()`, và kiểm tra biến cờ `dialogTriggered` từ `page.once('dialog', ...)`.

### 4.3. Bảng Review & Gap Analysis cho Feature B (`FR-07`)

| Mã Gap | Phân loại Lỗi của AI | Code AI sinh ban đầu (Before — Commit `c80ecd0`) | Nguyên nhân AI mắc lỗi (Why AI missed it) | Bản đã sửa sau Human Review (After — Commits `c3f9b29`, `e7dcbeb`) |
| :---: | :--- | :--- | :--- | :--- |
| **GAP_FR07_01** | **SPA State Loss (Mất trạng thái giỏ hàng)** | `await page.goto('/cart');` sau khi bấm thêm sản phẩm ở `/` | AI không phân tích `CartContext.jsx` nên không biết mảng `cart` chỉ lưu trong bộ nhớ React (`useState([])`) chứ không lưu vào `localStorage`. Gọi `page.goto('/cart')` gây tải lại trang và xóa sạch giỏ hàng! | Điều hướng nội bộ qua React Router Link trên thanh Header: `await page.locator('header nav').getByRole('link', { name: 'Giỏ hàng' }).click();`. |
| **GAP_FR07_02** | **Fragile Positional Selector & Hard Sleep** | `await page.waitForTimeout(1000);`<br>`await page.locator('div.grid > div:nth-child(1) button').click();` | AI dùng bộ chọn phụ thuộc cứng vào cấu trúc lưới CSS và dùng `waitForTimeout(1000)` thay vì chờ danh sách sản phẩm render xong. | Dùng `const addToCartButtons = page.getByRole('button', { name: 'Thêm vào giỏ' }); await expect(addToCartButtons.first()).toBeVisible();`. |
| **GAP_FR07_03** | **Missing Dialog Event Listener** | Không có listener `page.once('dialog', ...)` khi bấm nút `"Xóa"` | AI quên rằng hộp thoại xác nhận trên Web có thể là native `window.confirm` hoặc custom modal `role="dialog"`. | Đăng ký `page.once('dialog', ...)` trước khi click `"Xóa"` kết hợp kiểm tra `page.getByRole('dialog')`. |

---

## 5. Task 1 — Feature C: `FR-12` Kiểm Soát Truy Cập (Access Control)

### 5.1. Bộ Dữ liệu Kiểm thử Data-Driven ([`data/fr12_access_control.json`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/data/fr12_access_control.json))
Bộ 12 test cases được chuyển đổi từ bảng thiết kế của `FR-12` ở HW02:

| Mã TC | Phân loại | Loại Token / Thông tin Xác thực | Tài nguyên Đích (`target_resource`) | Kết quả Mong đợi (`FR-12`) | Kết quả Thực tế (3 Browsers) |
| :---: | :---: | :--- | :--- | :--- | :---: |
| **TC_AC_DT_01** | Positive | Valid Admin JWT (`role='admin'`) | `GET /api/admin/users` + Web Admin UI | `200 OK`, mở khóa `EShop Admin` | ✅ **PASSED** |
| **TC_AC_DT_03** | Positive | Login UI: `admin@eshop.com` / `Admin123!` | Cổng Web Admin (`http://localhost:5174`) | Lưu `adminToken`, hiển thị `Dashboard` | ✅ **PASSED** |
| **TC_AC_DT_04** | Negative | Không gửi Header `Authorization` (`none`) | `GET /api/admin/orders` | `401 Unauthorized`, chặn ở `Admin Login` | ✅ **PASSED** |
| **TC_AC_DT_06** | Negative | Token sai định dạng (`invalid_jwt_token_12345`) | `POST /api/admin/import-products` | `401`/`403`, xóa token khỏi `localStorage` | ✅ **PASSED** |
| **TC_AC_DT_08** | Negative | Token ký sai Secret Key (`wrong_secret`) | `POST /api/admin/coupons` | `401`/`403`, chặn truy cập | ✅ **PASSED** |
| **TC_AC_DT_09** | Negative | Valid User JWT (`role='user'`) | `GET /api/admin/users` | **`403 Forbidden`**, cấm xem danh sách user | ❌ **FAILED** (`BUG_FR12_01`) |
| **TC_AC_DT_10** | Negative | Valid User JWT (`role='user'`) | `PUT /api/admin/orders/99999/status` | **`403 Forbidden`**, chặn ở middleware | ❌ **FAILED** (`BUG_FR12_02`) |
| **TC_AC_DT_11** | Negative | Valid User JWT (`role='user'`) | `POST /api/products` | **`403 Forbidden`**, cấm thêm sản phẩm | ❌ **FAILED** (`BUG_FR12_03`) |
| **TC_AC_DT_13** | Edge | JWT hợp lệ nhưng thiếu trường `role` (`{id: 1}`) | `GET /api/admin/orders` | **`403 Forbidden`**, từ chối do thiếu `role` | ❌ **FAILED** (`BUG_FR12_04`) |
| **TC_AC_DT_14** | Edge | JWT hợp lệ mang vai trò lạ (`role='guest'`) | `GET /api/admin/users` | **`403 Forbidden`**, từ chối do khác `admin` | ❌ **FAILED** (`BUG_FR12_05`) |
| **TC_AC_DT_15** | Negative | Login UI: `test@eshop.com` / `Test1234!` (`user`) | Cổng Web Admin (`http://localhost:5174`) | Alert `"Bạn không phải là admin!"`, `adminToken = null` | ✅ **PASSED** |
| **TC_AC_BVA_01** | Boundary | Admin JWT hết hạn tại biên `exp = T - 1s` | `GET /api/admin/orders` | `401`/`403`, tự động xóa `adminToken` | ✅ **PASSED** |

### 5.2. Ba (03) Mẫu Khẳng định (Assertion Patterns) áp dụng trong [`tests/fr12-access-control.spec.ts`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/tests/fr12-access-control.spec.ts)
1. **Pattern 1 — HTTP Status & API Gate Assertion:** `expect(tc.expected.statusCodes).toContain(actualStatus)`.
2. **Pattern 2 — Browser LocalStorage State Assertion:** `const storedToken = await page.evaluate(() => localStorage.getItem('adminToken')); expect(storedToken).toBeTruthy() / toBeNull()`.
3. **Pattern 3 — Web Admin UI Visibility & Alert Dialog Assertion:** `await expect(page.getByRole('heading', { name: 'EShop Admin' })).toBeVisible()`, `await expect(page.getByRole('heading', { name: 'Admin Login' })).toBeVisible()`, và `expect(dialogMsg).toContain('Bạn không phải là admin!')`.

### 5.3. Bảng Review & Gap Analysis cho Feature C (`FR-12`)

| Mã Gap | Phân loại Lỗi của AI | Code AI sinh ban đầu (Before — Commit `82a1c93`) | Nguyên nhân AI mắc lỗi (Why AI missed it) | Bản đã sửa sau Human Review (After — Commits `67ada85`, `1210678`) |
| :---: | :--- | :--- | :--- | :--- |
| **GAP_FR12_01** | **Wrong Target URL & Broken Input Selector** | `await page.goto('/admin');`<br>`await page.locator('input[type="email"]').fill(...)` | AI đoán Web Admin nằm ở route `/admin` của cổng `5173` và đoán ô Email có `type="email"`. Thực tế Web Admin chạy ở cổng `5174` và ô Email chỉ có `placeholder="Email"`. | Sửa thành `await page.goto('http://localhost:5174')` và dùng `page.getByPlaceholder('Email')`, `page.getByPlaceholder('Password')`. |
| **GAP_FR12_02** | **Unhandled Native Alert (`window.alert`)** | `await expect(page.locator('.error-message')).toBeVisible();` | Trong `frontend-admin/src/App.jsx` (dòng 66), khi `role !== 'admin'`, ứng dụng gọi hàm `alert("Bạn không phải là admin!")` chứ không render thẻ `.error-message`. | Bắt sự kiện `page.once('dialog', ...)` để kiểm tra nội dung cảnh báo và kiểm tra `localStorage.getItem('adminToken') === null`. |
| **GAP_FR12_03** | **Missing Cryptographic JWT Signing & DB Cleanup** | Không ký HMAC-SHA256 cho token kiểm thử và không xóa sản phẩm rác sau `POST /api/products` | AI truyền token tĩnh nên không kiểm thử được biên `exp = T - 1s` (`TC_AC_BVA_01`) hay payload thiếu `role` (`TC_AC_DT_13`). Ngoài ra, khi `TC_AC_DT_11` lọt qua lỗi bảo mật, sản phẩm rác làm lệch dữ liệu của hệ thống. | Viết hàm `signJwtHs256()` bằng module `crypto` chuẩn RFC 7519 và tự động gọi `DELETE /api/products/${bodyJson.id}` ngay khi phát hiện API cho tạo sản phẩm trái phép. |

---

## 6. Ghi Nhận về Các Test Cases Không Tự Động Hóa / Tinh Gọn từ HW02

- **Tỷ lệ tự động hóa trên tập 36 Test Cases đã chọn:** **100% (36 / 36 test cases)** đều được tự động hóa hoàn toàn và thực thi end-to-end trên cả 3 trình duyệt (`Chromium`, `Firefox`, `WebKit` = 108 executions).
- **Lý do tinh gọn một số test cases còn lại từ HW02:**
  1. **Tính năng `FR-20` (Pool D — Mobile App, 5 TCs ở HW02):** Không tự động hóa trong bài tập này vì Mục 5 của đề bài HW04 quy định rõ chỉ tự động hóa 3 tính năng Web thuộc Pools A, B, C (*"The Pool D (mobile) feature is not used in this homework, because here you automate the web frontend"*).
  2. **Các ca biên thành phần mật khẩu tương đương trong `FR-01` và các ca trùng cơ chế middleware trong `FR-12`:** Do `Register.jsx` dùng chung một biểu thức chính quy duy nhất tại client và `server.js` dùng chung một hàm `authenticateToken` duy nhất, việc chọn **12 test cases đại diện / mỗi tính năng** (tổng cộng 36 test cases) đã bao phủ 100% các lớp tương đương cốt lõi, các điểm biên BVA và phát hiện trọn vẹn **13 lỗi thật của SUT** mà không sinh thêm các lượt chạy trùng lặp.

---

## 7. Tổng Hợp Kết Quả Thực Thi Đa Trình Duyệt & Danh Sách 13 Bugs

### 7.1. Thống kê Kết quả Chạy trên 3 Trình duyệt (`9 Browser Runs = 108 Executions`)

| Tính năng | Trình duyệt | Số TCs Thiết kế & Tự động hóa | Số TCs Executed | Passed | Failed (do Bug SUT) | Số Bugs Phát hiện |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Feature A (`FR-01`)** | `Chromium` / `Firefox` / `WebKit` | 12 | $12 \times 3 = 36$ | $8 \times 3 = 24$ | $4 \times 3 = 12$ | **2** (`BUG_FR01_01..02`) |
| **Feature B (`FR-07`)** | `Chromium` / `Firefox` / `WebKit` | 12 | $12 \times 3 = 36$ | $4 \times 3 = 12$ | $8 \times 3 = 24$ | **6** (`BUG_FR07_01..06`) |
| **Feature C (`FR-12`)** | `Chromium` / `Firefox` / `WebKit` | 12 | $12 \times 3 = 36$ | $7 \times 3 = 21$ | $5 \times 3 = 15$ | **5** (`BUG_FR12_01..05`) |
| **Toàn bộ Suite** | **9 Browser Runs** | **36** | **108** | **57** | **51** | **13 Bugs** |

*(Chi tiết từng lỗi, các bước tái hiện, nguyên nhân gốc rễ trong mã nguồn và toàn bộ 13 ảnh chụp màn hình được trình bày đầy đủ trong tài liệu [`Bug_Report.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/Bug_Report.md)).*

---

## 8. Phản Biện AI (AI Critique — 200–300 Words, Mục 10)

AI có thể giúp hỗ trợ ta chuyển đổi các test case từ HW02 sang file dữ liệu JSON và dựng khung code Playwright ban đầu rất nhanh. Tuy nhiên, khi đem code AI sinh ra chạy thử trên hệ thống EShop thì phát sinh khá nhiều chỗ sai và thiếu sót mà chúng phải tự sửa lại. Ví dụ như ở chức năng đăng ký `FR-01`, AI cứ mặc định dùng `page.getByLabel()` để điền form vì nghĩ trang web nào cũng gắn `htmlFor` chuẩn cho thẻ `<label>`, dẫn đến lúc chạy thật bị lỗi không tìm thấy ô nhập. Ngoài ra, ở các test case bỏ trống trường Họ tên hoặc Email, trình duyệt chặn submit ngay bằng thuộc tính `required` của HTML5 chứ chưa hiện thông báo lỗi màu đỏ, nhưng AI lại chỉ viết lệnh kiểm tra thẻ báo lỗi đó nên kết quả test bị sai. Tương tự ở giỏ hàng `FR-07`, AI dùng lệnh `page.goto('/cart')` làm trang web tải lại từ đầu và mất sạch các món hàng đang lưu tạm trong `useState` của React, cộng thêm việc AI rất hay chèn `waitForTimeout(1000)` một cách máy móc. Lý do AI không tự nhận ra các vấn đề này là vì nó chỉ đoán và sinh code dựa theo các mẫu quen thuộc lúc huấn luyện, chứ không tự chạy thử trên DOM thực tế hay kiểm tra cách ứng dụng lưu trạng thái. Bài học lớn nhất mình rút ra khi làm việc cùng AI là phải đi từng bước nhỏ, luôn mở giao diện thật lên kiểm tra lại selector và luồng chạy, đồng thời phải phân biệt rõ đâu là lỗi do script AI viết sai và đâu là bug thật của hệ thống.

---

## 9. Lịch Sử Git Commits Chạm Vào File Test Script (`.spec.ts` — Mục 12)

Đề bài yêu cầu tối thiểu **8 commits chạm trực tiếp vào file test-script (`.spec.ts`)**. Dự án đã thực hiện **9 commits riêng biệt trên các file `.spec.ts`** theo đúng tiến trình *AI Generation $\rightarrow$ Human Review Fix Selectors/Waits $\rightarrow$ Refactor 3 Assertion Patterns*:

| STT | Commit Hash | File Test Script Thay Đổi | Thông điệp Commit (Semantic Commit Message) |
| :---: | :---: | :--- | :--- |
| **1** | `7d4ae6e` | `tests/fr01-registration.spec.ts` | `feat(fr01): add data-driven JSON dataset (12 TCs) and initial AI-generated spec for FR-01` |
| **2** | `de45e77` | `tests/fr01-registration.spec.ts` | `fix(fr01): replace broken getByLabel selectors, remove waitForTimeout, and isolate email per browser` |
| **3** | `6372785` | `tests/fr01-registration.spec.ts` | `refactor(fr01): add 3 distinct assertion patterns (URL, UI error banner, HTML5 validity/DOM state)` |
| **4** | `c80ecd0` | `tests/fr07-shopping-cart.spec.ts` | `feat(fr07): add data-driven JSON dataset (12 TCs) and initial AI-generated spec for FR-07` |
| **5** | `c3f9b29` | `tests/fr07-shopping-cart.spec.ts` | `fix(fr07): use SPA header navigation to preserve CartContext state and remove flaky waits` |
| **6** | `e7dcbeb` | `tests/fr07-shopping-cart.spec.ts` | `refactor(fr07): implement 3 distinct assertion patterns (URL, DOM count, UI text/dialog) across 12 TCs` |
| **7** | `82a1c93` | `tests/fr12-access-control.spec.ts` | `feat(fr12): add data-driven JSON dataset (12 TCs) and initial AI-generated spec for FR-12` |
| **8** | `67ada85` | `tests/fr12-access-control.spec.ts` | `fix(fr12): fix Web Admin port 5174, placeholder selectors, native alert dialog, and HS256 JWT signing` |
| **9** | `1210678` | `tests/fr12-access-control.spec.ts` | `refactor(fr12): add 3 assertion patterns (HTTP status, localStorage token state, Admin UI visibility) and visual audit overlay` |
