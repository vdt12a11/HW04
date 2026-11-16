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
