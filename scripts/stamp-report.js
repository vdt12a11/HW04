const fs = require('fs');
const path = require('path');

const studentId = process.env.STUDENT_ID || '23120397';
const timestamp = process.env.RUN_TIMESTAMP || new Date().toISOString();
const outputFolder = process.env.PLAYWRIGHT_HTML_REPORT || 'playwright-report';
const reportPath = path.resolve(process.cwd(), outputFolder, 'index.html');

if (fs.existsSync(reportPath)) {
  let html = fs.readFileSync(reportPath, 'utf-8');
  if (!html.includes('<!-- HW04-STUDENT-STAMP -->')) {
    const bannerMarkup = `
<!-- HW04-STUDENT-STAMP -->
<div id="hw04-student-header" style="background:#0f172a;color:#38bdf8;padding:10px 20px;font-family:monospace,sans-serif;font-size:14px;font-weight:bold;border-bottom:2px solid #0284c7;display:flex;justify-content:space-between;align-items:center;z-index:99999;">
  <span>Run by: ${studentId} (Văn Đức Tuấn) — HW04 Automation Testing</span>
  <span>ISO Timestamp: ${timestamp}</span>
</div>`;
    html = html.replace(/<body([^>]*)>/i, `<body$1>${bannerMarkup}`);
    fs.writeFileSync(reportPath, html, 'utf-8');
  }
  console.log(`[HW04 Stamp] HTML Report verified at ${reportPath} -> Run by: ${studentId} | ${timestamp}`);
}
