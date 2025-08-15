const { test, expect } = require('@playwright/test');
import { LoadPage } from '../../../pages/internet/LoadPage.js';

test('Home page load performance', async ({ page }) => {
  const start = Date.now();
  const loadPage = new LoadPage(page);
  await loadPage.navigate('/');
  const loadTime = Date.now() - start;
  console.log(`Page load time: ${loadTime} ms`);
  expect(loadTime).toBeLessThan(3000);
});
