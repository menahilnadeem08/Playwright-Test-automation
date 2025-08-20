import { BasePage } from "../base/BasePage.js";

/**
 * Description placeholder
 *
 * @export
 * @class DropdownPage
 * @typedef {DropdownPage}
 * @extends {BasePage}
 */
export class DropdownPage extends BasePage {
  constructor(page) {
    super(page);
    this.dropdown = "#dropdown";
  }

  async selectOptionByValue(value) {
    await this.selectOption(this.dropdown, value);
    return await this.page.locator(`${this.dropdown} w:checked`).innerText();
  }
}
