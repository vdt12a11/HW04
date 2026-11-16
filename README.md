# Báo Cáo Bài Tập 04 (HW04) — Automation Testing

- **Họ và tên sinh viên:** VĂN ĐỨC TUẤN
- **MSSV (`StudentID`):** `23120397`
- **Lớp / Khóa:** Kiểm thử phần mềm - CQ2023/3
- **Hệ thống kiểm thử (SUT):** EShop System (`https://github.com/ttbhanh/eshop-sut`)
- **Framework sử dụng:** Playwright `1.64.1` (`Chromium`, `Firefox`, `WebKit`) + Playwright HTML Reporter (`Run by: 23120397`)

---

## 1. Self-Assessment Table (Bảng Tự Đánh Giá — Mục 15)

| No. | Criteria | Grade | Self-Assessed Grade |
| :---: | :--- | :---: | :---: |
| **1** | Task 1 - Feature A (`FR-01: Account Registration`) | 25 | 25 |
| **1** | Task 1 - Feature B (`FR-07: Shopping Cart`) | 25 | 25 |
| **1** | Task 1 - Feature C (`FR-12: Access Control`) | 25 | 25 |
| **2** | Task 2 — Demo video | 15 | 15 |
| **3** | Agent Skills | 10 | 10 |
| | **Total** | **100** | **100** |

---

## 2. Test Summary Report (Báo Cáo Tổng Hợp Kiểm Thử — Mục 14)

### 2.1. Tổng quan các chỉ số (High-Level Metrics)

| Metric | Giá trị (Count) | Ghi chú chi tiết |
| :--- | :---: | :--- |
| **Number of Features** | **3** | `FR-01` (Pool A), `FR-07` (Pool B), `FR-12` (Pool C) — kế thừa đúng 3 tính năng Web từ HW02. |
| **Number of Test Cases Automated** | **36** | 12 test cases / tính năng (`FR-01`: 12, `FR-07`: 12, `FR-12`: 12), 100% Data-Driven từ file `.json`. |
| **Number of Browser Runs** | **9** | 3 tính năng $\times$ 3 trình duyệt (`Chromium`, `Firefox`, `WebKit`) = **9 browser runs** (**108 test executions**). |
| **Number of Test Cases Executed** | **36** *(108 lượt trên 3 trình duyệt)* | Thực thi đầy đủ 36/36 test cases trên mỗi trình duyệt ($36 \times 3 = 108$ lượt chạy). |
| **Number of Test Cases Passed** | **19** *(57 lượt trên 3 trình duyệt)* | `FR-01`: 8 TCs (24 lượt); `FR-07`: 4 TCs (12 lượt); `FR-12`: 7 TCs (21 lượt). |
| **Number of Test Cases Failed** | **17** *(51 lượt trên 3 trình duyệt)* | `FR-01`: 4 TCs (12 lượt); `FR-07`: 8 TCs (24 lượt); `FR-12`: 5 TCs (15 lượt) — đều do lỗi thật của SUT. |
| **Number of Bugs** | **13** | `FR-01`: 2 bugs; `FR-07`: 6 bugs; `FR-12`: 5 bugs — Đã tạo 13 Issues kèm screenshots tại `https://github.com/vdt12a11/HW04/issues` và lưu trong [`Bug_Report.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/Bug_Report.md). |
| **Public GitHub Repository** | `https://github.com/vdt12a11/HW04` | Chứa toàn bộ scripts, data JSON, HTML reports và lịch sử $\ge 8$ commits chạm vào `.spec.ts`. |
| **GitHub Issues (13 Bugs)** | `https://github.com/vdt12a11/HW04/issues` | Danh sách 13 Issues (`#1` $\rightarrow$ `#13`) có đính kèm ảnh chụp màn hình thực tế. |
| **Demo Video Link (Task 2)** | *(Cập nhật link YouTube Unlisted tại đây trước khi nén `.zip`)* | Video $\ge 5$ phút thuyết minh tiếng Việt, chạy multi-browser + HTML Report `Run by: 23120397`. |
| **Agent Skill Demo Video Link (Mục 7)** | *(Cập nhật link YouTube tại đây trước khi nén `.zip`)* | Video minh họa sử dụng Agent Skill tự động hóa end-to-end. |

---

### 2.2. Chi tiết theo từng tính năng và trình duyệt (Breakdown by Feature & Browser)

| Tính năng (Feature) | File Kịch bản & Dữ liệu | Số TCs Tự động hóa | Chromium (Pass / Fail) | Firefox (Pass / Fail) | WebKit (Pass / Fail) | Tổng Executions (Pass / Fail) | Số Bugs SUT |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Feature A: `FR-01`** *(Account Registration)* | [`tests/fr01-registration.spec.ts`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/tests/fr01-registration.spec.ts)<br>[`data/fr01_registration.json`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/data/fr01_registration.json) | 12 | 8 / 4 | 8 / 4 | 8 / 4 | **36** *(24 Pass / 12 Fail)* | **2** |
| **Feature B: `FR-07`** *(Shopping Cart)* | [`tests/fr07-shopping-cart.spec.ts`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/tests/fr07-shopping-cart.spec.ts)<br>[`data/fr07_shopping_cart.json`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/data/fr07_shopping_cart.json) | 12 | 4 / 8 | 4 / 8 | 4 / 8 | **36** *(12 Pass / 24 Fail)* | **6** |
| **Feature C: `FR-12`** *(Access Control)* | [`tests/fr12-access-control.spec.ts`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/tests/fr12-access-control.spec.ts)<br>[`data/fr12_access_control.json`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/data/fr12_access_control.json) | 12 | 7 / 5 | 7 / 5 | 7 / 5 | **36** *(21 Pass / 15 Fail)* | **5** |
| **Tổng cộng (Total)** | **3 Spec Files + 3 JSON Datasets** | **36** | **19 / 17** | **19 / 17** | **19 / 17** | **108** *(57 Pass / 51 Fail)* | **13** |

---

## 3. Danh Mục Tài Liệu & Báo Cáo Trong Gói Nộp Bài

1. **Báo cáo chính (Main Report):** [`Main_report.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/Main_report.md)
2. **Báo cáo lỗi kèm ảnh chụp màn hình (Bug Report):** [`Bug_Report.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/Bug_Report.md) & thư mục [`screenshots/`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/screenshots)
3. **Báo cáo kiểm toán AI (AI Audit Report):** [`AI_Audit_Report.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AI_Audit_Report.md)
4. **Phản biện AI (AI Critique 200–300 từ):** [`AI_Critique.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/AI_Critique.md)
5. **Nhật ký tương tác Prompt (Prompt Log):** [`Prompt_log.md`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/Prompt_log.md)
6. **Báo cáo HTML Đa trình duyệt (`Run by: 23120397` + ISO Timestamp):**
   - Full Suite (108 runs): [`playwright-report/index.html`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/playwright-report/index.html) & [`reports/full-suite-html-report/index.html`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/reports/full-suite-html-report/index.html)
   - Feature A (`FR-01`): [`reports/fr01-html-report/index.html`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/reports/fr01-html-report/index.html)
   - Feature B (`FR-07`): [`reports/fr07-html-report/index.html`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/reports/fr07-html-report/index.html)
   - Feature C (`FR-12`): [`reports/fr12-html-report/index.html`](file:///d:/H%E1%BB%8Dc%20T%E1%BA%ADp/Kiem%20thu%20phan%20mem/HW04/reports/fr12-html-report/index.html)

---

## 4. Hướng Dẫn Chạy Kiểm Thử Tự Động (Quick Start)

```bash
# 1. Cài đặt thư viện phụ thuộc
npm install

# 2. Chạy toàn bộ Suite (3 features × 3 browsers = 108 tests) và tự động đóng dấu HTML Report
npm test

# 3. Chạy riêng từng Feature trên cả 3 trình duyệt
npm run test:fr01
npm run test:fr07
npm run test:fr12

# 4. Mở xem báo cáo HTML
npm run report
```
