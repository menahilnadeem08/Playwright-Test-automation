import { test, expect } from '@playwright/test';
import { DropdownPage } from '../../../pages/internet/DropdownPage.js';

test('Select single option from dropdown', async ({ page }) => {
  const dropdownPage = new DropdownPage(page);
  await dropdownPage.navigate('/dropdown');

  const selected = await dropdownPage.selectOptionByValue('1');
  expect(selected).toBe('Option 1');
});
