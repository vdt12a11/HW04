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
