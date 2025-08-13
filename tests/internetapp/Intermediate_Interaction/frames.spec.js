import { test, expect } from '@playwright/test';
import { FramesPage } from '../../../pages/internet/FramesPage.js';

test.skip('Type inside iframe', async ({ page }) => {
  const framesPage = new FramesPage(page);
  await framesPage.navigate('/iframe');

  await framesPage.typeInIFrame('Playwright Test');
  expect(await framesPage.getIFrameText()).toBe('Playwright Test');
});
