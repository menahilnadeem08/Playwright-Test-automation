// check comments
import { BasePage } from "../base/BasePage.js";

export class ContextMenuPage extends BasePage {
  constructor(page) {
    super(page);
    this.hotspot = "#hot-spot";
  }

  async rightClickHotspot() {
    // Just perform right-click, do NOT handle dialog here
    await this.page.click(this.hotspot, { button: "right" });
  }
}
