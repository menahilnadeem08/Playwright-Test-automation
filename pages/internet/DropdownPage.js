import { BasePage } from '../base/BasePage.js';

export class DropdownPage extends BasePage {
  constructor(page) {
    super(page);
    this.dropdown = '#dropdown';
  }

  async selectOptionByValue(value) {
    await this.selectOption(this.dropdown, value);
    return await this.page.locator(`${this.dropdown} option:checked`).innerText();
  }
}
