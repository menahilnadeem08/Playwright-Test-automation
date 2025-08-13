import { BasePage } from '../base/BasePage.js';

export class KeyPressesPage extends BasePage {
  constructor(page) {
    super(page);
    this.inputField = '#target';
    this.result = '#result';
  }

  async pressKey(key) {
    await this.page.press(this.inputField, key);
  }

  async getResult() {
    return this.getText(this.result);
  }
}
