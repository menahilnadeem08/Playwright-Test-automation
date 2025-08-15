import { BasePage } from '../base/BasePage.js';

/**
 * Description placeholder
 *
 * @class performancePage
 * @typedef {performancePage}
 * @extends {BasePage}
 */
class performancePage extends BasePage {
    constructor(page) {
        super(page);
        this.heading = page.locator('h1');
        this.examples = page.locator('#content a');
    }
}
module.exports = { performancePage };
