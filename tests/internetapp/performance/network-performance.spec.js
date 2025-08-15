const { test, expect } = require('@playwright/test');
import { LoadPage } from '../../../pages/internet/LoadPage.js';

test('No slow requests (>500ms) on Dynamic Loading page', async ({ page }) => {
  let slowRequests = [];
  const loadPage = new LoadPage(page);

  page.on('requestfinished', async req => {
    const res = await req.response();
    const timing = res.timing();
    const duration = timing.responseEnd - timing.requestStart;

    if (duration > 500) {
      slowRequests.push({ url: req.url(), duration });
    }
  });

  await loadPage.navigate('/dynamic_loading');
  console.log('Slow requests:', slowRequests);
  expect(slowRequests.length).toBe(0);
});