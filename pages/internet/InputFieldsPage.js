import { BasePage } from '../base/BasePage.js';

export class InputFieldsPage extends BasePage {
  constructor(page) {
    super(page);
    this.inputField = 'input[type="number"]';
  }

  async enterValue(value) {
    await this.type(this.inputField, value.toString());
    return await this.page.locator(this.inputField).inputValue();
  }
}
