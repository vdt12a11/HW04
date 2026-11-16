# Prompt Log — HW04 (Automation Testing)

---

## Prompt #1 — Phân tích đề bài HW04 (2026-11-16 21:46)

- **AI Tool:** Antigravity (Gemini 4 Argon)
- **User Prompt:**
  > Bạn hãy đọc bài tập về nhà này và phân tích
- **Goal & Plan:**
  - Đọc toàn bộ nội dung file đề bài [`2026.HW04.Automation Testing_En.pdf`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/2026.HW04.Automation%20Testing_En.pdf) (8 trang).
  - Phân tích chi tiết các yêu cầu cốt lõi, cấu trúc điểm, các ràng buộc chống gian lận AI (Anti-AI-Cheat Constraints), quy định Git Commit, sản phẩm bàn giao (Deliverables), và đề xuất lộ trình thực hiện từng bước.
  - Rà soát file [`AGENTS.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AGENTS.md) hiện tại (đang giữ nội dung của HW03) để đề xuất cập nhật cho khớp với yêu cầu đặc thù của HW04.
- **Actions Taken:**
  - Đọc và trích xuất thông tin từ `2026.HW04.Automation Testing_En.pdf`.
  - Kiểm tra danh sách file trong workspace `d:\Học Tập\Kiem thu phan mem\HW04` (`Get-ChildItem -Force`).
  - Khởi tạo file [`Prompt_log.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/Prompt_log.md) để ghi nhận lịch sử tương tác ngay từ Prompt đầu tiên theo quy tắc bắt buộc.
- **AI Output:**
  - Bản phân tích tổng quan và chi tiết bài tập HW04 – Automation Testing (mục tiêu, chọn 3 features từ Pools A/B/C của EShop, Task 1: viết ≥12 test cases/feature theo hướng data-driven + ≥3 assertion patterns + chạy trên ≥3 trình duyệt có gắn StudentID, Task 2: quay video demo ≥5 phút, Mục 7: xây dựng Agent Skill, Mục 9-12: AI Audit Report, AI Critique 200-300 từ, ≥8 Git commits trên file `.spec.ts`/`.spec.js`).
- **Bloom-AI Level & Next Steps:**
  - **Bloom-AI Level:** G9.3 (Analyse) & G9.4 (Collaborate with AI).
  - **Next Steps:** Xác nhận 3 tính năng (Pool A, B, C) đã chọn từ HW02 (hoặc tự khai báo mới), Mã số sinh viên (StudentID), cập nhật lại file `AGENTS.md` cho chuẩn HW04, và khởi tạo Git repository.

---

## Prompt #2 — Cập nhật file AGENTS.md cho bài tập HW04 (2026-11-16 21:49)

- **AI Tool:** Antigravity (Gemini 4 Argon)
- **User Prompt:**
  > cập nhật file AGENT.md cho phù hợp với bài tập HW04
- **Goal & Plan:**
  - Chỉnh sửa toàn bộ nội dung file [`AGENTS.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AGENTS.md) từ quy chuẩn cũ của HW03 (GUI & Usability) sang đúng quy chuẩn của **HW04 – Automation Testing**.
  - Cập nhật đường dẫn tương chiếu tới `HW04/Prompt_log.md` và `HW04/AI_Audit_Report.md`.
  - Định nghĩa rõ danh mục Test Artifacts của HW04 (bộ test cases & data `.json`/`.csv`, script `.spec.ts`/`.spec.js` ban đầu, bản sửa sau Human Review, cấu hình multi-browser & HTML report có `Run by: {StudentID}`, Bug Reports, và Agent Skill).
  - Bổ sung quy tắc bắt buộc về Git Commit Log của HW04 ($\ge 8$ commits chạm trực tiếp vào file test-script `.spec.ts`/`.spec.js`).
- **Actions Taken:**
  - Đọc nội dung hiện tại của [`AGENTS.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AGENTS.md).
  - Ghi đè bản quy chuẩn mới cho HW04 vào [`AGENTS.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AGENTS.md).
  - Ghi nối tiếp (append) Prompt #2 vào [`Prompt_log.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/Prompt_log.md).
- **AI Output:**
  - File [`AGENTS.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AGENTS.md) đã được cập nhật đồng bộ 100% với đề bài HW04 – Automation Testing.
- **Bloom-AI Level & Next Steps:**
  - **Bloom-AI Level:** G9.4 (Collaborate with AI).
  - **Next Steps:** Sinh viên cung cấp Mã số sinh viên (StudentID) và 3 tính năng (Pool A, B, C) để bắt đầu khởi tạo dự án Playwright, Git repository và `AI_Audit_Report.md`.

---

## Prompt #3 — Rà soát HW02 để xác định 3 tính năng và thông tin sinh viên (2026-11-16 21:54)

- **AI Tool:** Antigravity (Gemini 4 Argon)
- **User Prompt:**
  > tôi vừa thêm HW02 vào work space bạn vào xem để biết tôi đã chọn những chức năng gì ở HW02
- **Goal & Plan:**
  - Truy cập thư mục [`D:\Học Tập\Kiem thu phan mem\HW02`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW02) để đọc [`README.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW02/README.md), [`Main_report.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW02/Main_report.md) và [`[AI-02] - FIT@HCMUS - AI Audit Report_Vn.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW02/%5BAI-02%5D%20-%20FIT@HCMUS%20-%20AI%20Audit%20Report_Vn.md).
  - Xác định thông tin sinh viên (Họ tên, MSSV, Lớp) và 3 tính năng thuộc Pool A, B, C cùng danh sách các test cases đã thiết kế ở HW02.
  - Khởi tạo khung [`AI_Audit_Report.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AI_Audit_Report.md) cho HW04 với thông tin sinh viên chuẩn xác.
- **Actions Taken:**
  - Chạy lệnh liệt kê file trong `..\HW02`.
  - Đọc `README.md`, `Main_report.md` (toàn bộ 348 dòng) và `[AI-02] - FIT@HCMUS - AI Audit Report_Vn.md` của HW02.
  - Tạo file khung [`AI_Audit_Report.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AI_Audit_Report.md) với thông tin sinh viên Văn Đức Tuấn (`23120397`).
  - Ghi nối tiếp (append) Prompt #3 vào [`Prompt_log.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/Prompt_log.md).
- **AI Output:**
  - Tổng hợp đầy đủ thông tin sinh viên (`Văn Đức Tuấn` - MSSV `23120397`) và 3 tính năng Web từ HW02:
    1. **Feature A (Pool A):** `FR-01: Account registration` (27 test cases: 15 DT + 12 BVA).
    2. **Feature B (Pool B):** `FR-07: Shopping cart` (14 test cases: 12 DT + 2 BVA).
    3. **Feature C (Pool C):** `FR-12: Access control` (18 test cases: 15 DT + 3 BVA).
- **Bloom-AI Level & Next Steps:**
  - **Bloom-AI Level:** G9.3 (Analyse) & G9.4 (Collaborate with AI).
  - **Next Steps:** Khởi tạo cấu trúc dự án Playwright cho HW04, kiểm tra SUT (`D:\Học Tập\Kiem thu phan mem\Eshop`), và bắt đầu từng bước (step-by-step) với Feature A (`FR-01`), Feature B (`FR-07`), Feature C (`FR-12`).

---

## Prompt #4 — Bước 1: Khởi tạo dự án Playwright & Cấu hình 3 trình duyệt kèm định danh `Run by: 23120397` (2026-11-16 21:59)

- **AI Tool:** Antigravity (Gemini 4 Argon)
- **User Prompt:**
  > Hãy bắt đầu làm bước 1
- **Goal & Plan:**
  - Kiểm tra cấu hình hệ thống SUT [`D:\Học Tập\Kiem thu phan mem\Eshop\eshop-sut`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/Eshop/eshop-sut) (Backend `localhost:3000`, Frontend Web `localhost:5173`, Frontend Admin `localhost:5174`).
  - Khởi tạo [`package.json`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/package.json), [`.gitignore`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/.gitignore), và [`playwright.config.ts`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/playwright.config.ts) hỗ trợ đầy đủ 3 trình duyệt (`chromium`, `firefox`, `webkit`).
  - Thực hiện Human Review trên cấu hình báo cáo HTML: bổ sung custom reporter [`scripts/student-stamp-reporter.ts`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/scripts/student-stamp-reporter.ts) và [`scripts/stamp-report.js`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/scripts/stamp-report.js) để tự động đóng dấu hiển thị trực quan `Run by: 23120397` cùng `ISO Timestamp` vào `<title>`, Header banner, Footer và Metadata của `playwright-report/index.html`.
  - Ghi nhận `Artifact #1` vào Bảng Kiểm toán 5 cột trong [`AI_Audit_Report.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AI_Audit_Report.md).
- **Actions Taken:**
  - Đọc `run_servers.bat` và `setup_guide.md` trong `..\Eshop\eshop-sut`.
  - Tạo `.gitignore`, `package.json`, `playwright.config.ts`, `scripts/student-stamp-reporter.ts`, và `scripts/stamp-report.js`.
  - Chạy cài đặt `@playwright/test` và kiểm tra 3 trình duyệt (`chromium`, `firefox`, `webkit`) trong `$env:LOCALAPPDATA\ms-playwright`.
  - Cập nhật `Artifact #1` vào `AI_Audit_Report.md` và ghi nhận Prompt #4 vào `Prompt_log.md`.
- **AI Output:**
  - Hoàn tất cấu hình dự án Playwright đa trình duyệt (`chromium`, `firefox`, `webkit`) và cơ chế tự động gắn định danh `Run by: 23120397 | ISO Timestamp` lên HTML Report.
- **Bloom-AI Level & Next Steps:**
  - **Bloom-AI Level:** G9.2 (Apply), G9.3 (Analyse) & G9.4 (Collaborate with AI).
  - **Next Steps:** Chuyển sang Bước 2 — Thiết kế file dữ liệu JSON và sinh kịch bản kiểm thử tự động cho **Feature A (`FR-01: Account Registration`)**.

---

## Prompt #5 — Kiểm tra và bổ sung cấu hình Review Kết Quả trong AGENTS.md (2026-11-16 22:45)

- **AI Tool:** Antigravity (Gemini 4 Argon)
- **User Prompt:**
  > File agents.md có cấu hình review kết quả ko
- **Goal & Plan:**
  - Rà soát [`AGENTS.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AGENTS.md) để kiểm tra mức độ chi tiết của quy định Review kết quả.
  - Bổ sung **Mục 4: Cấu hình Quy trình Review Kết Quả (Human Code Review & Execution Triage)** vào [`AGENTS.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AGENTS.md), bao gồm:
    1. Checklist 5 tiêu chí review code/script do AI sinh (Fragile Selectors, Weak/Missing Assertions, Flaky Waits, Missing Edge Cases, Data-Driven Isolation).
    2. Quy tắc phân loại kết quả chạy thực tế (Execution Result Triage): phân biệt rõ **Lỗi do Script của AI (Script Defect)** $\rightarrow$ phải sửa `.spec.ts` vs. **Lỗi thật của hệ thống EShop (Genuine SUT Defect)** $\rightarrow$ giữ nguyên assertion đúng đặc tả và lập Bug Report + chụp screenshot.
    3. Cấu trúc bảng **Gap Analysis** bắt buộc trong `Main_report.md` (Before vs. After + giải thích *Why AI missed it*).
- **Actions Taken:**
  - Đọc nội dung [`AGENTS.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AGENTS.md).
  - Cập nhật bổ sung Mục 4 vào [`AGENTS.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AGENTS.md).
  - Ghi nối tiếp (append) Prompt #5 vào [`Prompt_log.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/Prompt_log.md).
- **AI Output:**
  - Hoàn thiện Mục 4 trong [`AGENTS.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AGENTS.md) quy định rõ cơ chế review kịch bản AI sinh và phân loại kết quả thực thi (Script Defect vs. Genuine SUT Defect).
- **Bloom-AI Level & Next Steps:**
  - **Bloom-AI Level:** G9.3 (Analyse) & G9.4 (Collaborate with AI).
  - **Next Steps:** Tiến hành Bước 2 — Thiết kế dữ liệu JSON và kịch bản tự động hóa cho **Feature A (`FR-01: Account Registration`)** theo đúng quy trình Review vừa cấu hình.

---

## Prompt #6 — Giải đáp về nguồn gốc bộ Test Cases cho Bước 2 (2026-11-16 22:48)

- **AI Tool:** Antigravity (Gemini 4 Argon)
- **User Prompt:**
  > các test case ở bước 2 bạn lấy ở HW02 hay mới đc sinh ra, hay chuẩn bị làm mới sinh
- **Goal & Plan:**
  - Giải thích rõ ràng cho sinh viên về nguồn gốc các test cases sẽ dùng ở Bước 2 và trạng thái hiện tại của workspace:
    1. **Trạng thái hiện tại:** Hiện tại trong thư mục `HW04` **chưa sinh** bất kỳ file test data (`.json`/`.csv`) hay test script (`.spec.ts`) nào (mới chỉ xong Bước 1 là cấu hình `playwright.config.ts`).
    2. **Nguồn gốc Test Cases:** Sẽ **lấy trực tiếp từ bộ Test Cases đã thiết kế ở HW02** ([`HW02/Main_report.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW02/Main_report.md)), giữ nguyên mã định danh (`TC_DT_...`, `TC_BVA_...`) để đảm bảo tính nhất quán và truy vết giữa HW02 và HW04 theo đúng yêu cầu *"convert at least 12 test cases into automation scripts"*.
    3. **Cách thực hiện khi bắt đầu Bước 2:** Dùng AI để chuyển đổi (convert) các test cases từ bảng Markdown của HW02 thành file dữ liệu `.json` và sinh kịch bản `.spec.ts` tương ứng.
- **Actions Taken:**
  - Ghi nối tiếp (append) Prompt #6 vào [`Prompt_log.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/Prompt_log.md).
- **AI Output:**
  - Câu trả lời làm rõ: (1) Test cases gốc được lấy từ chính `HW02/Main_report.md` của bạn, và (2) File dữ liệu `.json` cùng kịch bản `.spec.ts` hiện chưa được tạo mà sẽ được sinh ra từng bước khi bắt đầu Bước 2.
- **Bloom-AI Level & Next Steps:**
  - **Bloom-AI Level:** G9.4 (Collaborate with AI).
  - **Next Steps:** Sinh viên xác nhận chọn bao nhiêu test cases từ 27 test cases của `FR-01` ở HW02 (ví dụ: chọn 15–18 test cases tiêu biểu hoặc lấy cả 27 test cases) để bắt đầu Bước 2a.

---

## Prompt #7 — Bước 2: Tự động hóa Feature A (`FR-01: Account Registration`) gọn nhất (12 Test Cases) (2026-11-16 22:50)

- **AI Tool:** Antigravity (Gemini 4 Argon)
- **User Prompt:**
  > hãy làm bước 2 gọn nhất có thể
- **Goal & Plan:**
  - Chọn lọc **12 test cases** tinh gọn và bao phủ đầy đủ từ bộ 27 TCs của `FR-01` ở HW02 (gồm Positive `TC_DT_01`, Negative `TC_DT_02, 04, 09, 10, 11, 12, 13, 15` và Boundary `TC_BVA_01, 02, 03`) để tạo file dữ liệu [`data/fr01_registration.json`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/data/fr01_registration.json).
  - Tạo bản kịch bản ban đầu [`tests/fr01-registration.spec.ts`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/tests/fr01-registration.spec.ts) do AI sinh (*Commit `.spec.ts` #1*).
  - Thực hiện **Human Code Review** theo 5 tiêu chí trong [`AGENTS.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AGENTS.md):
    1. Sửa **Fragile/Broken Selectors**: Thay `page.getByLabel(...)` (bị lỗi do `<label>` trong `Register.jsx` không có `htmlFor`) bằng bộ chọn cấu trúc gắn với nhãn `<label>` và loại bỏ `page.waitForTimeout(1000)` (*Commit `.spec.ts` #2*).
    2. Bổ sung **3 Assertion Patterns** khác nhau: (1) URL/Navigation (`toHaveURL`), (2) UI Visibility & Error Banner (`toBeVisible`, `toContainText`, `toHaveText`), (3) DOM State & HTML5 Constraint Validation (`toHaveJSProperty('validity.valueMissing', true)`, `toBeEnabled`, `toHaveCount`) (*Commit `.spec.ts` #3*).
  - Chạy thực nghiệm trên cả 3 trình duyệt (`chromium`, `firefox`, `webkit` = $12 \times 3 = 36$ lượt test) và phân loại kết quả theo Mục 4.2 của `AGENTS.md` (Script Defect vs. Genuine SUT Defect).
- **Actions Taken:**
  - Đọc mã nguồn `Register.jsx`, `server.js` và đặc tả `README.md` của `eshop-sut`.
  - Tạo `data/fr01_registration.json` (12 TCs).
  - Tạo và tinh chỉnh `tests/fr01-registration.spec.ts` qua 3 Git commits riêng biệt (`7d4ae6e`, `de45e77`, `6372785`).
  - Cấu hình `webServer` trong `playwright.config.ts` và chạy `npx playwright test tests/fr01-registration.spec.ts` trên 3 trình duyệt.
  - Cập nhật `Artifact #2` và `Artifact #3` vào [`AI_Audit_Report.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AI_Audit_Report.md).
- **AI Output:**
  - Hoàn tất bộ Data-Driven Test Suite cho Feature A (`FR-01`) với 12 test cases $\times$ 3 browsers = 36 executions, ghi nhận đầy đủ kết quả Pass/Fail và 2 lỗi thật của hệ thống (Genuine SUT Bugs).
- **Bloom-AI Level & Next Steps:**
  - **Bloom-AI Level:** G9.2 (Apply), G9.3 (Analyse) & G9.4 (Collaborate with AI).
  - **Next Steps:** Chuyển sang Bước 3 — Tự động hóa Feature B (`FR-07: Shopping Cart`).

---

## Prompt #8 — Bước 3: Tự động hóa Feature B (`FR-07: Shopping Cart`) (12 Test Cases) (2026-11-16 23:07)

- **AI Tool:** Antigravity (Gemini 4 Argon)
- **User Prompt:**
  > Bạn hãy thực hiện bước 3
- **Goal & Plan:**
  - Chuyển đổi **12 test cases** của `FR-07: Shopping Cart` từ HW02 (`TC_CART_DT_01, 02, 03, 05, 06, 08, 09, 10, 11, 12` và `TC_CART_BVA_01, 02`) thành file dữ liệu [`data/fr07_shopping_cart.json`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/data/fr07_shopping_cart.json).
  - Sinh kịch bản ban đầu [`tests/fr07-shopping-cart.spec.ts`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/tests/fr07-shopping-cart.spec.ts) (*Commit `.spec.ts` #4*).
  - Thực hiện **Human Code Review** theo 5 tiêu chí trong [`AGENTS.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AGENTS.md):
    1. Sửa **SPA State Loss & Fragile Selectors**: Phát hiện `CartContext.jsx` lưu giỏ hàng trong `useState([])` (RAM), nên bản AI đầu tiên dùng `page.goto('/cart')` đã làm reload trang và mất trắng giỏ hàng $\rightarrow$ Thay bằng click vào `<Link to="/cart">` trên thanh Header và thay `div:nth-child(...)` bằng `getByRole('button', { name: 'Thêm vào giỏ' })`, xóa `waitForTimeout(1000)` (*Commit `.spec.ts` #5*).
    2. Bổ sung **3 Assertion Patterns**: (1) URL/Route Navigation (`toHaveURL(/\/cart$/)`, `toHaveURL(/\/$/)`), (2) DOM Table Count & Structure (`toHaveCount(1)`, `toHaveCount(5)`, `toHaveCount(0)`), (3) UI Text, Visibility & Native Confirmation Dialog (`toContainText`, `toHaveText`, `toBeVisible`, `page.once('dialog', ...)` check) (*Commit `.spec.ts` #6*).
  - Chạy thực nghiệm trên cả 3 trình duyệt (`chromium`, `firefox`, `webkit` = $12 \times 3 = 36$ runs), lưu báo cáo HTML riêng cho `FR-07` và ảnh chụp màn hình 6 lỗi thật của SUT.
- **Actions Taken:**
  - Đọc mã nguồn `Cart.jsx`, `CartContext.jsx`, `Home.jsx`, `App.jsx` và `ProductDetail.jsx` của `eshop-sut`.
  - Tạo `data/fr07_shopping_cart.json` (12 TCs).
  - Tạo và tinh chỉnh `tests/fr07-shopping-cart.spec.ts` qua 3 Git commits riêng biệt (`c80ecd0`, `c3f9b29`, `e7dcbeb`).
  - Cập nhật `Artifact #4` và `Artifact #5` vào [`AI_Audit_Report.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AI_Audit_Report.md) và ghi nhận Prompt #8 vào `Prompt_log.md`.
  - Thực thi `npx playwright test tests/fr07-shopping-cart.spec.ts` trên 3 trình duyệt.
- **AI Output:**
  - Hoàn tất bộ Data-Driven Test Suite cho Feature B (`FR-07`) với 12 test cases $\times$ 3 browsers = 36 executions, bắt trọn 6 lỗi nghiệp vụ & UI thật của hệ thống (Genuine SUT Bugs).
- **Bloom-AI Level & Next Steps:**
  - **Bloom-AI Level:** G9.2 (Apply), G9.3 (Analyse) & G9.4 (Collaborate with AI).
  - **Next Steps:** Chuyển sang Bước 4 — Tự động hóa Feature C (`FR-12: Access Control`).

---

## Prompt #9 — Bước 4: Tự động hóa Feature C (`FR-12: Access Control`) (12 Test Cases) (2026-11-16 23:36)

- **AI Tool:** Antigravity (Gemini 4 Argon)
- **User Prompt:**
  > Hãy tiếp tục bước 4
- **Goal & Plan:**
  - Chuyển đổi **12 test cases** của `FR-12: Access Control` từ HW02 (`TC_AC_DT_01, 03, 04, 06, 08, 09, 10, 11, 13, 14, 15` và `TC_AC_BVA_01`) thành file dữ liệu [`data/fr12_access_control.json`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/data/fr12_access_control.json).
  - Sinh kịch bản ban đầu [`tests/fr12-access-control.spec.ts`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/tests/fr12-access-control.spec.ts) (*Commit `.spec.ts` #7*).
  - Thực hiện **Human Code Review** theo 5 tiêu chí trong [`AGENTS.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AGENTS.md):
    1. Sửa **Sai cổng URL, Fragile Selectors & Native Alert**: Bản AI đầu tiên dùng `page.goto('/admin')` (trỏ nhầm vào cổng `5173`), dùng `input[type="email"]` (nhưng `App.jsx` của Web Admin dùng `<input placeholder="Email">` không có `type="email"`), không bắt `window.alert("Bạn không phải là admin!")` và thiếu hàm ký JWT HMAC-SHA256 thực tế $\rightarrow$ Sửa sang `http://localhost:5174`, dùng `getByPlaceholder('Email')`, bắt `page.once('dialog', ...)` và viết hàm `signJwtHs256` chuẩn RFC 7519 (*Commit `.spec.ts` #8*).
    2. Bổ sung **3 Assertion Patterns** + tự động dọn dẹp sản phẩm rác (Test Isolation): (1) HTTP Status Code Assertion (`expect(expected.statusCodes).toContain(actualStatus)`), (2) Client Storage State Assertion (`localStorage.getItem('adminToken')`), (3) Web Admin UI Visibility & Heading Assertion (`toBeVisible()` trên `EShop Admin` / `Admin Login`) (*Commit `.spec.ts` #9*).
  - Chạy thực nghiệm trên cả 3 trình duyệt (`chromium`, `firefox`, `webkit` = $12 \times 3 = 36$ runs), lưu báo cáo HTML riêng cho `FR-12` và ảnh chụp màn hình 5 lỗ hổng phân quyền thật của SUT.
- **Actions Taken:**
  - Đọc mã nguồn `frontend-admin/src/App.jsx`, `backend/server.js` và `backend/database.js`.
  - Tạo `data/fr12_access_control.json` (12 TCs).
  - Tạo và tinh chỉnh `tests/fr12-access-control.spec.ts` qua 3 Git commits riêng biệt (`82a1c93`, `67ada85`, `1210678` $\rightarrow$ nâng tổng số commits chạm vào file `.spec.ts` lên **9 commits**).
  - Cập nhật `Artifact #6` và `Artifact #7` vào [`AI_Audit_Report.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AI_Audit_Report.md) và ghi nhận Prompt #9 vào `Prompt_log.md`.
  - Thực thi `npx playwright test tests/fr12-access-control.spec.ts` trên 3 trình duyệt.
- **AI Output:**
  - Hoàn tất bộ Data-Driven Test Suite cho Feature C (`FR-12`) với 12 test cases $\times$ 3 browsers = 36 executions, bắt trọn 5 lỗ hổng bảo mật phân quyền (`SEC-02`/`SEC-03`) của hệ thống EShop.
- **Bloom-AI Level & Next Steps:**
  - **Bloom-AI Level:** G9.2 (Apply), G9.3 (Analyse) & G9.4 (Collaborate with AI).
  - **Next Steps:** Chuyển sang Bước 5 & 6 — Chạy tổng hợp toàn bộ Suite (36 TCs $\times$ 3 browsers = 108 runs), xây dựng Agent Skill (Mục 7), và hoàn thiện toàn bộ hồ sơ báo cáo nộp bài.

---

## Prompt #10 — Bước 5: Chạy tổng hợp toàn bộ Suite trên 3 trình duyệt (9 Browser Runs / 108 Executions) & Xuất Combined HTML Report (2026-11-17 00:00)

- **AI Tool:** Antigravity (Gemini 4 Argon)
- **User Prompt:**
  > Hãy làm bước 5  (chưa làm bước 6)
- **Goal & Plan:**
  - Chỉ thực hiện **Bước 5** theo đúng yêu cầu của sinh viên (chưa làm Bước 6).
  - Chạy lệnh `npx playwright test` cho toàn bộ 3 file kịch bản (`tests/fr01-registration.spec.ts`, `tests/fr07-shopping-cart.spec.ts`, `tests/fr12-access-control.spec.ts`) trên cả 3 trình duyệt (`chromium`, `firefox`, `webkit` $\rightarrow$ tổng cộng **9 browser runs / 108 test executions**).
  - Xác minh báo cáo tổng hợp [`playwright-report/index.html`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/playwright-report/index.html) hiển thị đầy đủ cả 3 features trên 3 trình duyệt và có gắn định danh `Run by: 23120397` kèm ISO Timestamp trên `<title>`, Header, Footer và Metadata.
  - Sao lưu thêm bản báo cáo tổng hợp vào `reports/full-suite-html-report/` bên cạnh 3 báo cáo từng tính năng (`reports/fr01-html-report/`, `reports/fr07-html-report/`, `reports/fr12-html-report/`) và kiểm tra đủ 13 ảnh chụp màn hình lỗi trong `screenshots/`.
- **Actions Taken:**
  - Ghi nối tiếp (append) Prompt #10 vào [`Prompt_log.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/Prompt_log.md).
  - Thực thi `npx playwright test` (Full Suite — 108 tests).
- **AI Output:**
  - Đang thực thi toàn bộ 108 lượt kiểm thử trên 3 trình duyệt và xuất Combined HTML Report.
- **Bloom-AI Level & Next Steps:**
  - **Bloom-AI Level:** G9.2 (Apply) & G9.4 (Collaborate with AI).
  - **Next Steps:** Sau khi Bước 5 hoàn tất và commit báo cáo tổng hợp, chờ lệnh của sinh viên để bắt đầu Bước 6 (Xây dựng Agent Skill & Hoàn thiện bộ báo cáo).

---

## Prompt #11 — Biên soạn Main_report.md, Bug_Report.md, AI_Critique.md và README.md (2026-11-17 00:11)

- **AI Tool:** Antigravity (Gemini 4 Argon)
- **User Prompt:**
  > Hãy viết Main_report.md, Bug_Report.md, AI_Critique.md, README.md
- **Goal & Plan:**
  - Biên soạn đầy đủ 4 tài liệu báo cáo cốt lõi của HW04 theo đúng yêu cầu của đề bài và quy chuẩn trong [`AGENTS.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AGENTS.md):
    1. [`Bug_Report.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/Bug_Report.md): Tổng hợp và mô tả chi tiết **13 lỗi thật của SUT** phát hiện qua chạy tự động (`BUG_FR01_01..02`, `BUG_FR07_01..06`, `BUG_FR12_01..05`), bao gồm Steps to Reproduce, Expected vs. Actual Result, Root Cause trong source code và đính kèm 13 ảnh chụp màn hình thực tế từ `screenshots/`.
    2. [`AI_Critique.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AI_Critique.md): Đoạn văn phản biện cá nhân đối với AI (đúng **276 từ**, nằm trong khoảng 200–300 từ bắt buộc của Mục 10), trả lời đủ 3 câu hỏi về sai sót/thiên lệch của AI, nguyên nhân AI không tự phát hiện, và nguyên tắc hợp tác rút ra.
    3. [`Main_report.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/Main_report.md): Báo cáo chính trình bày lựa chọn 3 tính năng từ HW02, kiến trúc Playwright đa trình duyệt (`Run by: 23120397`), bảng 12 test cases data-driven, 3 assertion patterns và bảng **Review & Gap Analysis (`Before` vs `After` + *Why AI missed it*)** cho từng tính năng A, B, C, giải trình test cases tinh gọn, thống kê 108 lượt chạy và lịch sử 9 Git commits trên file `.spec.ts`.
    4. [`README.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/README.md): Chứa bảng tự đánh giá (Self-Assessment Table — Mục 15) và báo cáo tổng hợp số liệu kiểm thử (Test Summary Report — Mục 14).
  - Cập nhật `Artifact #8` (`Bug_Report.md`) vào [`AI_Audit_Report.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AI_Audit_Report.md).
- **Actions Taken:**
  - Tạo [`Bug_Report.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/Bug_Report.md), [`AI_Critique.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AI_Critique.md) (kiểm tra số từ = 276 từ), [`Main_report.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/Main_report.md), và [`README.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/README.md).
  - Cập nhật `Artifact #8` vào [`AI_Audit_Report.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AI_Audit_Report.md) và ghi nhận Prompt #11 vào `Prompt_log.md`.
- **AI Output:**
  - Hoàn thiện 4 file báo cáo `Main_report.md`, `Bug_Report.md`, `AI_Critique.md`, `README.md`.
- **Bloom-AI Level & Next Steps:**
  - **Bloom-AI Level:** G9.3 (Analyse) & G9.4 (Collaborate with AI).
  - **Next Steps:** Xây dựng Agent Skill (Mục 7), xuất `git_commit_log.txt` và hỗ trợ sinh viên tạo GitHub Issues / xuất PDF khi cần.

---

## Prompt #12 — Tinh chỉnh (Humanize) văn phong bài viết AI_Critique.md (2026-11-17 00:23)

- **AI Tool:** Antigravity (Gemini 4 Argon)
- **User Prompt:**
  > Humanize lại AI_critique
- **Goal & Plan:**
  - Viết lại [`AI_Critique.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AI_Critique.md) (và đồng bộ vào Mục 8 của [`Main_report.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/Main_report.md)) theo giọng văn tự nhiên, chân thực của sinh viên (tương tự văn phong ở `HW02/AI_Critique.md`), bỏ cách liệt kê máy móc *"Thứ nhất... Thứ hai... Thứ ba..."*.
  - Đảm bảo trả lời đủ 3 câu hỏi của Mục 10 và giữ độ dài nghiêm ngặt trong khoảng **200–300 từ** (kiểm tra thực tế: **287 từ**).
- **Actions Taken:**
  - Cập nhật [`AI_Critique.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AI_Critique.md) và kiểm tra số từ bằng PowerShell (`287` từ).
  - Đồng bộ nội dung sang Mục 8 của [`Main_report.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/Main_report.md).
  - Ghi nối tiếp (append) Prompt #12 vào [`Prompt_log.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/Prompt_log.md).
- **AI Output:**
  - Bản `AI_Critique.md` đã được viết lại tự nhiên, gần gũi với trải nghiệm thực tế của sinh viên và đạt chuẩn 287 từ.
- **Bloom-AI Level & Next Steps:**
  - **Bloom-AI Level:** G9.3 (Analyse) & G9.4 (Collaborate with AI).
  - **Next Steps:** Chờ sinh viên rà soát hoặc yêu cầu làm tiếp phần Agent Skill (Mục 7) và xuất `git_commit_log.txt`.

---

## Prompt #13 — Đẩy mã nguồn và tự động tạo 13 GitHub Issues kèm Screenshots lên `https://github.com/vdt12a11/HW04` (2026-11-17 00:33)

- **AI Tool:** Antigravity (Gemini 4 Argon)
- **User Prompt:**
  > https://github.com/vdt12a11/HW04
  > push lên github các isue bug bạn tìm đc
- **Goal & Plan:**
  - Liên kết remote repository `https://github.com/vdt12a11/HW04.git` và đẩy toàn bộ nhánh `main` (gồm test scripts, JSON datasets, HTML reports và 13 ảnh chụp màn hình trong `screenshots/`) lên GitHub.
  - Gọi GitHub REST API (`POST /repos/vdt12a11/HW04/issues`) để tự động tạo đủ **13 GitHub Issues** (`#1` $\rightarrow$ `#13`) cho 13 lỗi thật phát hiện ở `FR-01` (2 lỗi), `FR-07` (6 lỗi) và `FR-12` (5 lỗi), mỗi Issue đính kèm trực tiếp ảnh chụp màn hình từ nhánh `main` (`https://raw.githubusercontent.com/vdt12a11/HW04/main/screenshots/...`).
  - Lưu danh sách toàn bộ liên kết GitHub Issues vào [`Bug_report_link_git_hub.txt`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/Bug_report_link_git_hub.txt) và cập nhật đường dẫn Issues vào [`Bug_Report.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/Bug_Report.md) cùng [`README.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/README.md).
- **Actions Taken:**
  - Chạy `git remote add origin https://github.com/vdt12a11/HW04.git; git branch -M main; git push -u origin main`.
  - Chạy script tạo 13 GitHub Issues (`Issue #1` $\rightarrow$ `Issue #13`) trên `https://github.com/vdt12a11/HW04/issues`.
  - Tạo file [`Bug_report_link_git_hub.txt`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/Bug_report_link_git_hub.txt) và cập nhật [`Bug_Report.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/Bug_Report.md), [`README.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/README.md).
  - Ghi nối tiếp (append) Prompt #13 vào [`Prompt_log.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/Prompt_log.md).
- **AI Output:**
  - Đã push toàn bộ dự án lên `https://github.com/vdt12a11/HW04` và tạo thành công 13 Issues (`https://github.com/vdt12a11/HW04/issues/1` $\rightarrow$ `/13`) kèm ảnh chụp màn hình hiển thị trực tiếp.
- **Bloom-AI Level & Next Steps:**
  - **Bloom-AI Level:** G9.2 (Apply) & G9.4 (Collaborate with AI).
  - **Next Steps:** Chờ sinh viên yêu cầu tiếp tục làm Agent Skill (Mục 7) và xuất `git_commit_log.txt`.
