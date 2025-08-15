import { BasePage } from '../base/BasePage.js';

/**
 * Description placeholder
 *
 * @export
 * @class CheckboxesPage
 * @typedef {CheckboxesPage}
 * @extends {BasePage}
 */
export class CheckboxesPage extends BasePage {
  constructor(page) {
    super(page);
    this.checkbox1 = '#checkboxes input:nth-of-type(1)';
    this.checkbox2 = '#checkboxes input:nth-of-type(2)';
  }

  async toggleFirstCheckbox() {
    await this.click(this.checkbox1);
  }

  async toggleSecondCheckbox() {
    await this.click(this.checkbox2);
  }

  async isFirstCheckboxChecked() {
    return await this.page.locator(this.checkbox1).isChecked();
  }

  async isSecondCheckboxChecked() {
    return await this.page.locator(this.checkbox2).isChecked();
  }
}
