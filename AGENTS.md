# Quy định và Hướng dẫn dành cho AI Agent (HW04 - Automation Testing)

Tài liệu này định nghĩa các quy tắc bắt buộc mà AI Agent phải tuân thủ trong suốt quá trình đồng hành cùng sinh viên thực hiện bài tập **HW04 – Automation Testing**.

---

## 📌 1. QUY TẮC BẮT BUỘC: GHI PROMPT LOG & AI AUDIT REPORT

Theo mục **2 (Guiding Principles)**, mục **9 (AI Audit Report)** của đề bài HW04 và biểu mẫu quy chuẩn `[AI-02] - FIT@HCMUS`:

### A. Ghi Prompt Log sau MỖI LẦN PROMPT vào [`Prompt_log.md`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW04/Prompt_log.md)
Mỗi tương tác prompt của người dùng phải được lưu ngay lập tức (append, không ghi đè) theo cấu trúc:
- **AI Tool:** Antigravity (Gemini 4 Argon / Google DeepMind)
- **User Prompt:** Nguyên văn prompt.
- **Goal & Plan:** Mục tiêu và kế hoạch xử lý.
- **Actions Taken:** Các công cụ, file và lệnh đã chạy.
- **AI Output:** Tóm tắt kết quả trả về.
- **Bloom-AI Level & Next Steps:** Đánh giá cấp độ Bloom-AI (`G9.2 Apply`, `G9.3 Analyse`, `G9.4 Collaborate`) và bước tiếp theo.

### B. TỰ ĐỘNG GHI / CẬP NHẬT VÀO [`AI_Audit_Report.md`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW04/AI_Audit_Report.md) KHI CÓ ARTIFACT KIỂM THỬ THỰC TẾ
Chỉ những **sản phẩm kiểm thử cụ thể (Test Artifacts)** mới được ghi vào Bảng Kiểm toán 5 cột trong [`AI_Audit_Report.md`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW04/AI_Audit_Report.md), bao gồm:
- Thiết kế / chọn lọc bộ test cases ($\ge 12$ test cases / tính năng, gồm positive, negative, edge cases) và bộ dữ liệu kiểm thử tách rời (`.json` / `.csv`) cho từng tính năng thuộc Pool A, B, C.
- Kịch bản kiểm thử tự động ban đầu do AI sinh (`.spec.ts` / `.spec.js`) với Playwright hoặc Selenium 4+.
- Bản cập nhật / sửa lỗi kịch bản tự động sau bước **Human Review** (sửa fragile selectors, bổ sung $\ge 3$ assertion patterns, khử flaky waits / hard sleep, bổ sung edge cases).
- Cấu hình chạy đa trình duyệt ($\ge 3$ browsers: Chromium, Firefox, WebKit) và cấu hình xuất HTML Report gắn định danh `"Run by: {StudentID}"` kèm ISO timestamp.
- Báo cáo lỗi phát hiện qua chạy tự động (Bug Reports trong Markdown & GitHub Issues kèm screenshot).
- Xây dựng **Agent Skill** tái sử dụng quy trình kiểm thử tự động (Mục 7).
*(Lưu ý: Các thao tác phân tích đề bài, thiết lập khung sườn tài liệu, file rỗng, lệnh cài đặt thư viện hoặc `git init` KHÔNG được tính là test artifact).*

Mỗi khi sinh hoặc chỉnh sửa một test artifact, Agent **BẮT BUỘC** phải tự động thêm một dòng vào Bảng Kiểm toán 5 cột theo chuẩn FIT@HCMUS:

```markdown
| (1) Prompt + Công cụ | (2) Output AI | (3) Verdict | (4) Lý do (ISTQB / Best Practices Automation) | (5) Bản SV sửa (Human Review & Changes) |
```

- **(1) Prompt + Công cụ:** Đánh số thứ tự `Artifact #k`, ghi rõ Tool, Ngày giờ và dán nguyên văn Prompt (không paraphrase).
- **(2) Output AI:** Tóm tắt chính xác kết quả đầu ra mà AI sinh ra (hoặc trích dẫn vị trí/file `.spec.ts`, `.json`, `.csv`).
- **(3) Verdict:** Gán nhãn `VALID` / `INVALID` / `INCOMPLETE`.
- **(4) Lý do:** Nêu rõ căn cứ kỹ thuật (dẫn chiếu chuẩn ISTQB, nguyên lý Data-Driven Testing, Page Object / Locator Best Practices, Web-First Assertions, hoặc hạn chế của AI như dùng CSS/XPath dễ gãy, thiếu auto-wait, thiếu kiểm tra trạng thái sau thao tác).
- **(5) Bản SV sửa:** Ghi nhận những phần sinh viên đã rà soát, bổ sung, sửa chữa hoặc loại bỏ (đánh dấu thay đổi giữa bản AI sinh và bản đã fix).

---

## 📌 2. QUY TẮC BẮT BUỘC: QUẢN LÝ PHIÊN BẢN VỚI GIT COMMIT LOG

Theo mục **12 (Git Commit Log)** của đề bài HW04:
> *"Maintain a public GitHub repository with a meaningful history: at least 8 commits. Only commits that change test-script files (`.spec.js`, `.spec.ts`, or equivalent) count toward the 8-commit minimum; commits touching only the README, PDF, or other non-test documents do not count. Provide the Git commit log in a text-based file format."*

- **Tối thiểu 8 Commits chạm vào file Test Script (`.spec.ts` / `.spec.js`):**
  - Agent phải chia nhỏ quá trình phát triển và tinh chỉnh từng tính năng (Feature A, Feature B, Feature C) thành các bước commit riêng biệt có chạm vào file `.spec.ts` / `.spec.js` (ví dụ: khởi tạo script ban đầu do AI sinh cho từng feature $\rightarrow$重构 sang data-driven & thêm $\ge 3$ assertion patterns $\rightarrow$ sửa lỗi fragile selectors / flaky waits sau Human Review $\rightarrow$ tinh chỉnh chạy multi-browser).
  - Tuyệt đối không gộp toàn bộ các file `.spec.ts` vào 1–2 commit duy nhất.
- **Tự động Git Commit:** Mỗi khi hoàn tất một bước kỹ thuật hoặc cập nhật tài liệu, Agent thực hiện lệnh `git add` và `git commit` với Semantic Commit Message rõ ràng (ví dụ: `feat(pool-a): generate initial playwright spec for FR-02 login`, `fix(pool-a): replace fragile selectors and add 3 assertion patterns in login.spec.ts`).
- **Đồng bộ Git Log:** Xuất lịch sử commit ra file text (`git_commit_log.txt`) để nộp kèm trong gói `.zip`.

---

## 🎯 3. NGUYÊN TẮC THỰC HIỆN BÀI TẬP HW04

1. **AI-First theo từng bước (Step-by-Step) & Human Review:**
   - Không dùng 1 prompt chung chung sinh toàn bộ code. Dẫn dắt từng bước: xác định test cases & test data (`.json`/`.csv`) $\rightarrow$ sinh script ban đầu $\rightarrow$ chạy thử & phân tích lỗi $\rightarrow$ Human Review & sửa lỗi (fragile selectors, weak assertions, flaky waits, missing edge cases).
   - Lưu vết rõ sự khác biệt giữa bản AI sinh ban đầu và bản đã qua Human Review để phục vụ cả **Main Report (Gap Analysis)** lẫn **Task 2 (Demo Video thuyết minh ít nhất 1 lỗi đã fix)**.
2. **Đảm bảo Đầy đủ Yêu cầu Kỹ thuật Task 1:**
   - **3 Features Web** từ **Pools A, B, C** (giữ nguyên từ HW02 hoặc tự khai báo rõ lý do nếu chưa có HW02; không dùng Pool D).
   - **$\ge 12$ test cases / feature** ($\ge 36$ test cases toàn bộ suite), kết hợp positive, negative và edge cases.
   - **Data-Driven 100%:** Dữ liệu kiểm thử phải đọc từ file `.csv` hoặc `.json` riêng biệt (không hardcode inline array/object trong script).
   - **$\ge 3$ Assertion Patterns khác nhau** trong mỗi script (ví dụ: URL/navigation assertion, UI visibility/text/toast assertion, form validity/attribute/count/state assertion).
   - **$\ge 3$ Browsers (`Chromium`, `Firefox`, `WebKit`):** Chạy đủ $3 \times 3 = 9$ browser runs.
3. **Không bịa đặt dữ liệu (Anti-AI-Cheat Constraints - Mục 11):**
   - **HTML Reports** phải là kết quả chạy thật, hiển thị rõ `"Run by: {StudentID}"` kèm theo **ISO timestamp** trên tiêu đề, header, footer hoặc metadata.
   - **Demo Video ($\ge 5$ phút, tiếng Việt, YouTube Unlisted)** do chính sinh viên quay, có thuyết minh giọng thật và xác thực bằng face-cam hoặc terminal chạy lệnh `whoami` và `hostname`.
   - **Bug Reports & GitHub Issues:** Mọi lỗi thật phát hiện khi chạy test phải có ảnh chụp màn hình (screenshot) thực tế đính kèm trên GitHub Issues và trong báo cáo Markdown.
4. **Xây dựng Agent Skill (Mục 7 - 10 điểm):**
   - Đóng gói quy trình kiểm thử tự động (data-driven, multi-browser, custom HTML report metadata, review & maintenance) thành một Agent Skill hoàn chỉnh (`SKILL.md` + scripts/templates nếu cần) để tái sử dụng.
5. **Quy định về phần AI Critique (Mục 10 đề bài - 200–300 từ):**
   - Phản biện cá nhân 200–300 từ trả lời đủ 3 câu hỏi: (1) AI đã sai, thiên lệch hoặc thiếu sót ở đâu? (2) Tại sao AI không tự phát hiện được vấn đề đó? (3) Nguyên tắc hợp tác với AI nào đã được rút ra qua bài tập này?
6. **Bảo toàn dữ liệu Log:**
   - Không được overwrite các bản ghi trong [`Prompt_log.md`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW04/Prompt_log.md) và [`AI_Audit_Report.md`](file:///d:/Học%20Tập/Kiem%20thu%20phan%20mem/HW04/AI_Audit_Report.md) trước đó; luôn ghi nối tiếp (append) để lưu giữ toàn bộ tiến trình.
