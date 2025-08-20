// check comments
import { BasePage } from "../base/BasePage.js";

/**
 * Description placeholder
 *
 * @export
 * @class JavaScriptAlertsPage
 * @typedef {JavaScriptAlertsPage}
 * @extends {BasePage}
 */
export class JavaScriptAlertsPage extends BasePage {
  constructor(page) {
    super(page);
    this.jsAlertButton = "text=Click for JS Alert";
    this.jsConfirmButton = "text=Click for JS Confirm";
    this.jsPromptButton = "text=Click for JS Prompt";
    this.result = "#result";
  }

  async triggerAlert() {
    this.page.once("dialog", async (dialog) => await dialog.accept());
    await this.click(this.jsAlertButton);
  }

  async triggerConfirm(accept = true) {
    this.page.once("dialog", async (dialog) => {
      accept ? await dialog.accept() : await dialog.dismiss();
    });
    await this.click(this.jsConfirmButton);
  }

  async triggerPrompt(text = "") {
    this.page.once("dialog", async (dialog) => {
      await dialog.accept(text);
    });
    await this.click(this.jsPromptButton);
  }

  async getResult() {
    return this.getText(this.result);
  }
}
