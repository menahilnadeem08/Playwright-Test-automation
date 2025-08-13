import { test, expect } from '@playwright/test';
import { CheckboxesPage } from '../../../pages/internet/CheckboxesPage.js';

test('Verify checkbox state changes and persistence', async ({ page }) => {
  const checkboxesPage = new CheckboxesPage(page);
  await checkboxesPage.navigate('/checkboxes');
  

  const initialState = await checkboxesPage.isFirstCheckboxChecked();
  await checkboxesPage.toggleFirstCheckbox();
  const newState = await checkboxesPage.isFirstCheckboxChecked();

  expect(newState).not.toBe(initialState);
});
