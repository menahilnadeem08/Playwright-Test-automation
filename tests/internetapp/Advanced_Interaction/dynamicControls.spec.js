import { test, expect } from '@playwright/test';
import { DynamicControlsPage } from '../../../pages/internet/dynamicControlsPage.js';

test.describe('Dynamic Controls', () => {
  test('Enable and disable input', async ({ page }) => {
    const dynamicControls = new DynamicControlsPage(page);
    await dynamicControls.navigate('/dynamic_controls');

    await dynamicControls.clickEnable();
    await expect(dynamicControls.inputField).toBeEnabled();

    await dynamicControls.clickDisable();
    await expect(dynamicControls.inputField).toBeDisabled();
  });
});
