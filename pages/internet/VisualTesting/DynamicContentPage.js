// check comments

const { BasePage } = require("../../base/BasePage");

/**
 * Description placeholder
 *
 * @class DynamicContentPage
 * @typedef {DynamicContentPage}
 * @extends {BasePage}
 */
class DynamicContentPage extends BasePage {
  constructor(page) {
    super(page);
    this.images = "#content .row img";
    this.textBlocks = "#content .row .large-10";
  }
}

module.exports = { DynamicContentPage };
