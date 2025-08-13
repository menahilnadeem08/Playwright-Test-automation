import { test, expect } from '@playwright/test';
import { InputFieldsPage } from '../../../pages/internet/InputFieldsPage.js';

test('Enter various data types in input field', async ({ page }) => {
  const inputPage = new InputFieldsPage(page);
  await inputPage.navigate('/inputs');

  const entered = await inputPage.enterValue(12345);
  expect(entered).toBe('12345');
});
