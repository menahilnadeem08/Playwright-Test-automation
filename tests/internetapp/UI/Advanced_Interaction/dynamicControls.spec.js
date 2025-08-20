import { test, expect } from "../../../../fixtures/dynamicControlFixture.js";

test.describe.parallel("Dynamic Controls", () => {
  test("Enable and disable input", async ({ dynamicControlsPage }) => {
    await dynamicControlsPage.enableInput();
    await expect(
      dynamicControlsPage.page.locator(dynamicControlsPage.inputField),
    ).toBeEnabled();

    await dynamicControlsPage.disableInput();
    await expect(
      dynamicControlsPage.page.locator(dynamicControlsPage.inputField),
    ).toBeDisabled();
  });

  test("Remove and add checkbox", async ({ dynamicControlsPage }) => {
    await dynamicControlsPage.removeCheckbox();
    await expect(
      dynamicControlsPage.page.locator(dynamicControlsPage.checkbox),
    ).toHaveCount(0);

    await dynamicControlsPage.addCheckbox();
    await expect(
      dynamicControlsPage.page.locator(dynamicControlsPage.checkbox),
    ).toBeVisible();
  });
});
