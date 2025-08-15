import { BasePage } from '../base/BasePage.js';

/**
 * Description placeholder
 *
 * @export
 * @class InfiniteScrollPage
 * @typedef {InfiniteScrollPage}
 * @extends {BasePage}
 */
export class InfiniteScrollPage extends BasePage {
  constructor(page) {
    super(page);
    this.paragraphSelector = '.jscroll-added';
  }

  async getParagraphCount() {
    return await this.page.locator(this.paragraphSelector).count();
  }

  async scrollToBottom() {
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }

async waitForMoreParagraphs(previousCount) {
  for (let i = 0; i < 5; i++) {
    await this.scrollToBottom();
    await this.page.waitForTimeout(2000); // give time to load
    const currentCount = await this.getParagraphCount();
    if (currentCount > previousCount) {return;}
  }
  throw new Error('No more paragraphs loaded');
}

}
