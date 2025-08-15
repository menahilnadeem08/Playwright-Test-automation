import { BasePage } from '../base/BasePage.js';

/**
 * Description placeholder
 *
 * @export
 * @class BasicAuthPage
 * @typedef {BasicAuthPage}
 * @extends {BasePage}
 */
export class BasicAuthPage extends BasePage {
  constructor(page) {
    super(page);
    this.contentSelector = 'div.example'; 
  }


  async getContentText() {
    await this.waitForSelector(this.contentSelector);
    return this.getText(this.contentSelector);
  }
}

