import { BasePage } from '../base/BasePage.js';

export class ContextMenuPage extends BasePage {
  constructor(page) {
    super(page);
    this.hotspot = '#hot-spot';
  }

  async rightClickHotspot() {
    this.page.once('dialog', async dialog => await dialog.accept());
    await this.page.click(this.hotspot, { button: 'right' });
  }
}
