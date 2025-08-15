const { BasePage } = require('../../base/BasePage');

/**
 * Description placeholder
 *
 * @class HomePage
 * @typedef {HomePage}
 * @extends {BasePage}
 */
class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.heading ='h1';
    this.examples = '#content ul li a';
  }

  async clickExample(name) {
    await this.page.getByRole('link', { name }).click();
  }
}

module.exports = { HomePage };
