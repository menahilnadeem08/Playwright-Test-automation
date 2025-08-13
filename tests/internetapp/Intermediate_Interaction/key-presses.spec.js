import { test, expect } from '@playwright/test';
import { KeyPressesPage } from '../../../pages/internet/KeyPressesPage.js';

test('Keyboard key press', async ({ page }) => {
  const keysPage = new KeyPressesPage(page);
  await keysPage.navigate('/key_presses');

  await keysPage.pressKey('A');
  expect(await keysPage.getResult()).toContain('You entered: A');
});
