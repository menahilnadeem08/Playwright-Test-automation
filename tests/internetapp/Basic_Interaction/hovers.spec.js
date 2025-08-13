import { test, expect } from '@playwright/test';
import { HoversPage } from '../../../pages/internet/HoversPage.js';

test('Hover over image and verify tooltip', async ({ page }) => {
  const hoversPage = new HoversPage(page);
  await hoversPage.navigate('/hovers');

  const text = await hoversPage.hoverFirstImage();
  expect(text).toContain('name: user1');
});
