import { BasePage } from "../base/BasePage.js";

/**
 * Description placeholder
 *
 * @class StatusCodesPage
 * @typedef {StatusCodesPage}
 * @extends {BasePage}
 */
class StatusCodesPage extends BasePage {
  constructor(page) {
    super(page);
    this.statusLink = (code) => this.page.locator(`a:has-text("${code}")`);
  }

  async clickStatusCode(code) {
    await this.statusLink(code).click();
  }
}

module.exports = { StatusCodesPage };
