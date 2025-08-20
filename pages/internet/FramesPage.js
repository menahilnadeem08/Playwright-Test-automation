// check comments
import { BasePage } from "../base/BasePage.js";

/**
 * Description placeholder
 *
 * @export
 * @class FramesPage
 * @typedef {FramesPage}
 * @extends {BasePage}
 */
export class FramesPage extends BasePage {
  constructor(page) {
    super(page);
    this.iframeLocator = "#mce_0_ifr";
    this.textArea = "body#tinymce p";
  }

  async typeInIFrame(text) {
    const frame = await this.page.frameLocator(this.iframeLocator);
    await frame.locator(this.textArea).fill("");
    await frame.locator(this.textArea).type(text);
  }

  async getIFrameText() {
    const frame = await this.page.frameLocator(this.iframeLocator);
    return frame.locator(this.textArea).innerText();
  }
}
