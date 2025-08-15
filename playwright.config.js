// @ts-check
import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import { config as apps } from './config/apps.config.js';

// Load the .env file based on ENV value, default to dev
dotenv.config({ path: `.env.${process.env.ENV || 'dev'}` });

const APP = process.env.APP || 'theInternet';
const ENV = process.env.ENV || 'dev';
const baseURL = apps[APP][ENV]?.baseURL;

if (!baseURL) {
  throw new Error(`No baseURL found for APP="${APP}" ENV="${ENV}"`);
}

module.exports = defineConfig({
  testDir: APP === 'opencart' ? './tests/opencart' : './tests/internetapp',
  timeout: 60 * 1000, // 60 seconds per test
  retries: 1, // Retry failed tests 0 times
  reporter: [
    ['list'],
    ['./customReporter.js'],
    ['html'],
  ],
  use: {

    headless: process.env.HEADLESS === 'true',
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10 * 1000, // Max time for each Playwright action
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    baseURL,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36',
    expect: {
      timeout: 5000,
      toMatchSnapshot: { maxDiffPixelRatio: 0.02 }
    },
    fullyParallel: true,
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
    {
      name: 'smoke',
      testMatch: /.*\.smoke\.spec\.js/,
    },
    {
      name: 'regression',
      testMatch: /.*\.regression\.spec\.js/,
    },
    {
      name: 'full',
      testMatch: /.*\.spec\.js/,
    },
  ],
});
