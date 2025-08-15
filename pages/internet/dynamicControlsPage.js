import { BasePage } from '../base/BasePage.js';
import { logInfo } from '../../utils/logger.js';
import { retryAction } from '../../utils/retryUtils.js';
import { waitForVisible, waitForEnabled, waitForDetached } from '../../utils/waitUtils.js';

export class DynamicControlsPage extends BasePage {
  constructor(page) {
    super(page);
    this.checkbox = '#checkbox';
    this.removeButton = 'button:text("Remove")';
    this.addButton = 'button:text("Add")';
    this.inputField = 'input[type="text"]';
    this.enableButton = 'button:text("Enable")';
    this.disableButton = 'button:text("Disable")';
  }

  async navigateToPage() {
    logInfo('Navigating to Dynamic Controls page');
    await super.navigate('/dynamic_controls');
  }

  async removeCheckbox() {
    logInfo('Removing checkbox...');
    await retryAction(async () => {
      await super.click(this.removeButton);
      await waitForDetached(this.page.locator(this.checkbox));
    });
  }

  async addCheckbox() {
    logInfo('Adding checkbox...');
    await retryAction(async () => {
      await super.click(this.addButton);
      await waitForVisible(this.page.locator(this.checkbox));
    });
  }

  async enableInput() {
    logInfo('Enabling input...');
    await retryAction(async () => {
      await super.click(this.enableButton);
      await waitForEnabled(this.page.locator(this.inputField));
    });
  }

  async disableInput() {
    logInfo('Disabling input...');
    await retryAction(async () => {
      await super.click(this.disableButton);
      await waitForVisible(this.page.locator(this.inputField)); // still visible, but disabled
    });
  }

  async typeInInput(text) {
    logInfo(`Typing "${text}" in input`);
    await super.type(this.inputField, text);
  }

  async getInputText() {
    return await super.getText(this.inputField);
  }
  async enableInput() {
  logInfo('Enabling input...');
  await retryAction(async () => {
    await super.click(this.enableButton);
    await waitForEnabled(this.page.locator(this.inputField));
  });
}

}