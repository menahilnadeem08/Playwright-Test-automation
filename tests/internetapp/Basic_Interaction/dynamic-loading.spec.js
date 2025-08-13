import { test, expect } from '@playwright/test';
import { DynamicLoadingPage } from '../../../pages/internet/DynamicLoadingPage.js';

test.describe('Dynamic Loading', () => {
  test('Test 1: Hidden Element', async ({ page }) => {
    const dynamicPage = new DynamicLoadingPage(page);
    const text = await dynamicPage.loadExample1();
    expect(text).toBe('Hello World!');
  });

  test('Test 2: Element Rendered After Load', async ({ page }) => {
    const dynamicPage = new DynamicLoadingPage(page);
    const text = await dynamicPage.loadExample2();
    expect(text).toBe('Hello World!');
  });
});
