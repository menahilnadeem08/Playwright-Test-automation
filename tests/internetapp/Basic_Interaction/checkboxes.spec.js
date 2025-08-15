import { test, expect } from '../../../fixtures/checkBox.js';

test('Verify checkbox state changes and persistence', async ({ checkboxesPage }) => {
  const initialState = await checkboxesPage.isFirstCheckboxChecked();
  
  await checkboxesPage.toggleFirstCheckbox();
  const newState = await checkboxesPage.isFirstCheckboxChecked();

  expect(newState).not.toBe(initialState);
});
