// check comments
import { BasePage } from "../base/BasePage.js";

/**
 * Description placeholder
 *
 * @export
 * @class HoversPage
 * @typedef {HoversPage}
 * @extends {BasePage}
 */
export class HoversPage extends BasePage {
  constructor(page) {
    super(page);
    this.figure = ".figure:nth-of-type(1)";
    this.caption = ".figure:nth-of-type(1) .figcaption h5";
  }

  async hoverFirstImage() {
    await this.hover(this.figure);
    return await this.getText(this.caption);
  }
}
