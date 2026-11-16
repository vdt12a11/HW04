import { defineConfig, devices } from '@playwright/test';

const STUDENT_ID = '23120397';
const STUDENT_NAME = 'Văn Đức Tuấn';
const RUN_TIMESTAMP = process.env.RUN_TIMESTAMP || new Date().toISOString();

// Lưu lại vào biến môi trường để các reporter và test script dùng chung đúng 1 ISO timestamp
process.env.RUN_TIMESTAMP = RUN_TIMESTAMP;
process.env.STUDENT_ID = STUDENT_ID;

export default defineConfig({
  testDir: './tests',
  /* Chạy tuần tự trên từng trình duyệt để tránh xung đột dữ liệu SQLite của EShop Backend */
  fullyParallel: false,
  workers: 1,
  forbidOnly: !!process.env.CI,
  retries: 0,
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },

  /* Metadata chính thức của báo cáo kiểm thử */
  metadata: {
    'Run by': `Run by: ${STUDENT_ID}`,
    'Student ID': STUDENT_ID,
    'Student Name': STUDENT_NAME,
    'ISO Timestamp': RUN_TIMESTAMP,
    'SUT': 'EShop Web & Admin (FR-01, FR-07, FR-12)',
  },

  /* Cấu hình Reporter: Console list + Playwright HTML Reporter + Custom Stamp Reporter */
  reporter: [
    ['list'],
    [
      'html',
      {
        outputFolder: process.env.PLAYWRIGHT_HTML_REPORT || 'playwright-report',
        open: 'never',
        title: `Run by: ${STUDENT_ID} | ISO Timestamp: ${RUN_TIMESTAMP}`,
      },
    ],
    ['./scripts/student-stamp-reporter.ts'],
  ],

  use: {
    baseURL: process.env.WEB_URL || 'http://localhost:5173',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 10 * 1000,
    navigationTimeout: 15 * 1000,
  },

  /* Tự động khởi chạy (hoặc tái sử dụng) 3 server của EShop SUT khi chạy test */
  webServer: [
    {
      command: 'node server.js',
      cwd: '../Eshop/eshop-sut/backend',
      url: 'http://localhost:3000/health',
      reuseExistingServer: true,
      timeout: 15 * 1000,
    },
    {
      command: 'npm run dev -- --port 5173',
      cwd: '../Eshop/eshop-sut/frontend-web',
      url: 'http://localhost:5173',
      reuseExistingServer: true,
      timeout: 30 * 1000,
    },
    {
      command: 'npm run dev -- --port 5174',
      cwd: '../Eshop/eshop-sut/frontend-admin',
      url: 'http://localhost:5174',
      reuseExistingServer: true,
      timeout: 30 * 1000,
    },
  ],

  /* Cấu hình chạy đủ 3 trình duyệt bắt buộc: Chromium, Firefox, WebKit */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
