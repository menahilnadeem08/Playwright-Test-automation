import { test, expect } from '@playwright/test';
import { DynamicLoadingPage } from '../../../pages/internet/DynamicLoadingPage.js';

test.describe('Dynamic Loading', () => {
  test('1: Hidden Element', async ({ page }) => {
    const dynamicPage = new DynamicLoadingPage(page);
    const text = await dynamicPage.loadExample1();
    expect(text).toBe('Hello World!');
  });

  test('2: Element Rendered After Load', async ({ page }) => {
    const dynamicPage = new DynamicLoadingPage(page);
    const text = await dynamicPage.loadExample2();
    expect(text).toBe('Hello World!');
  });
});
