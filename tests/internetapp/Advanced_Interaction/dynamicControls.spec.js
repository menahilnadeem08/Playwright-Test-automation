import { test, expect } from '../../../fixtures/dynamicControlFixture.js';

test.describe('Dynamic Controls', () => {
  test('Enable and disable input', async ({ dynamicControlsPage }) => {
    await dynamicControlsPage.clickEnable();
    await expect(dynamicControlsPage.inputField).toBeEnabled();

    await dynamicControlsPage.clickDisable();
    await expect(dynamicControlsPage.inputField).toBeDisabled();
  });
});
