import { BasePage } from '../base/BasePage.js';

/**
 * Description placeholder
 *
 * @export
 * @class SecureFileDownloadPage
 * @typedef {SecureFileDownloadPage}
 * @extends {BasePage}
 */
export class SecureFileDownloadPage extends BasePage {
  constructor(page) {
    super(page);
    this.downloadLink = 'a[href*="download"]'; 
  }


  getDownloadLocatorByName(filename) {
    return `a:has-text("${filename}")`;
  }

  async clickDownloadAndWaitForFile(filename) {
    const linkSelector = this.getDownloadLocatorByName(filename);
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.page.click(linkSelector)
    ]);
    return download;
  }
}

