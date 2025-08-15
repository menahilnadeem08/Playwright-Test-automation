import { BasePage } from '../base/BasePage.js';

/**
 * Description placeholder
 *
 * @export
 * @class DragAndDropPage
 * @typedef {DragAndDropPage}
 * @extends {BasePage}
 */
export class DragAndDropPage extends BasePage {
  constructor(page) {
    super(page);
    this.columnA = '#column-a';
    this.columnB = '#column-b';
  }

  async dragAtoB() {
    await this.page.dragAndDrop(this.columnA, this.columnB);
  }

  async getColumnText(column) {
    return this.getText(column);
  }
}
