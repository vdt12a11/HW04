import type { FullConfig, FullResult, Reporter } from '@playwright/test/reporter';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Custom Reporter tự động đóng dấu (stamp) thông tin:
 * "Run by: 23120397 | ISO Timestamp: <YYYY-MM-DDTHH:mm:ss.sssZ>"
 * trực tiếp vào <title>, Header và Footer của file playwright-report/index.html
 * ngay sau khi Playwright HTML Reporter sinh báo cáo.
 */
class StudentStampReporter implements Reporter {
  private outputFolder: string = 'playwright-report';

  onBegin(config: FullConfig): void {
    const htmlReporter = config.reporter.find((r) => r[0].includes('html'));
    if (htmlReporter && htmlReporter[1] && htmlReporter[1].outputFolder) {
      this.outputFolder = htmlReporter[1].outputFolder;
    }
  }

  async onEnd(_result: FullResult): Promise<void> {
    const studentId = process.env.STUDENT_ID || '23120397';
    const timestamp = process.env.RUN_TIMESTAMP || new Date().toISOString();
    const reportPath = path.resolve(process.cwd(), this.outputFolder, 'index.html');

    if (!fs.existsSync(reportPath)) {
      return;
    }

    let html = fs.readFileSync(reportPath, 'utf-8');
    const stampText = `Run by: ${studentId} | Executed at (ISO): ${timestamp} | Student: Văn Đức Tuấn (HW04 - Automation Testing)`;

    // 1. Đảm bảo thẻ <title> luôn chứa "Run by: 23120397" và ISO Timestamp
    if (html.includes('<title>')) {
      html = html.replace(
        /<title>.*?<\/title>/i,
        `<title>Run by: ${studentId} | ${timestamp} - Playwright Test Report</title>`
      );
    }

    // 2. Chèn thanh Header & Footer cố định hiển thị rõ "Run by: 23120397" và ISO Timestamp
    const bannerMarkup = `
<!-- HW04-STUDENT-STAMP -->
<div id="hw04-student-header" style="background:#0f172a;color:#38bdf8;padding:10px 20px;font-family:monospace,sans-serif;font-size:14px;font-weight:bold;border-bottom:2px solid #0284c7;display:flex;justify-content:space-between;align-items:center;z-index:99999;">
  <span>Run by: ${studentId} (Văn Đức Tuấn) — HW04 Automation Testing</span>
  <span>ISO Timestamp: ${timestamp}</span>
</div>
`;
    const footerMarkup = `
<div id="hw04-student-footer" style="background:#0f172a;color:#94a3b8;padding:6px 20px;font-family:monospace,sans-serif;font-size:12px;border-top:1px solid #334155;text-align:center;">
  ${stampText}
</div>
`;

    if (!html.includes('<!-- HW04-STUDENT-STAMP -->')) {
      html = html.replace(/<body([^>]*)>/i, `<body$1>${bannerMarkup}`);
      html = html.replace(/<\/body>/i, `${footerMarkup}</body>`);
      fs.writeFileSync(reportPath, html, 'utf-8');
    }
  }
}

export default StudentStampReporter;
