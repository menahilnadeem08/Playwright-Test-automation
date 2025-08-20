// check comments
import { BasePage } from "../base/BasePage.js";

/**
 * Description placeholder
 *
 * @export
 * @class DynamicLoadingPage
 * @typedef {DynamicLoadingPage}
 * @extends {BasePage}
 */
export class DynamicLoadingPage extends BasePage {
  constructor(page) {
    super(page);
    this.startButton = "button";
    this.finishText = "#finish h4";
  }

  async loadExample1() {
    await this.navigate("/dynamic_loading/1");
    await this.click(this.startButton);
    await this.page.locator(this.finishText).waitFor({ state: "visible" });
    return this.getText(this.finishText);
  }

  async loadExample2() {
    await this.navigate("/dynamic_loading/2");
    await this.click(this.startButton);
    await this.page.locator(this.finishText).waitFor({ state: "visible" });
    return this.getText(this.finishText);
  }
}
