// check comments
import { BasePage } from "../base/BasePage.js";

/**
 * Description placeholder
 *
 * @export
 * @class KeyPressesPage
 * @typedef {KeyPressesPage}
 * @extends {BasePage}
 */
export class KeyPressesPage extends BasePage {
  constructor(page) {
    super(page);
    this.inputField = "#target";
    this.result = "#result";
  }

  async pressKey(key) {
    await this.page.press(this.inputField, key);
  }

  async getResult() {
    return this.getText(this.result);
  }
}
