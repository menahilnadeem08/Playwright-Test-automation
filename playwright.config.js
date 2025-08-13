// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // Folder containing your test files
  timeout: 60 * 1000, // 60 seconds per test
  retries: 0, // Retry failed tests 0 times
  // reporter: [
  //   ['list',],
  //   ['./customReporter.js']
  //  ],
    reporter: [
    ['html'],
   ],
  use: {
    headless: true, // Set to false to see the browser
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10 * 1000, // Max time for each Playwright action
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://the-internet.herokuapp.com', 
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36',

  },

  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'WebKit',
      use: { browserName: 'webkit' },
    },
  ],
});
