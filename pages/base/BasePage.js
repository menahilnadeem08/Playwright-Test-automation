/**
 * Description placeholder
 *
 * @export
 * @class BasePage
 * @typedef {BasePage}
 */
export class BasePage {
  constructor(page) {
    this.page = page;
  }
  async navigate(url) {
    await this.page.goto(url, {
      timeout: 600000,
      waitUntil: "domcontentloaded",
    });
  }
  async hideDynamic(...selectors) {
    for (const s of selectors) {
      const locator = this.page.locator(s);
      await locator.evaluateAll((els) => {
        els.forEach((el) => {
          el.style.visibility = "hidden";
          el.style.animation = "none";
        });
      });
    }
  }

  async click(locator) {
    await this.page.locator(locator).click();
  }
  async type(locator, text) {
    const target =
      typeof locator === "string" ? this.page.locator(locator) : locator;
    await target.fill(text);
  }

  async getText(locator) {
    return await this.page.locator(locator).innerText();
  }

  async hover(locator) {
    await this.page.locator(locator).hover();
  }

  async selectOption(locator, value) {
    await this.page.locator(locator).selectOption(value);
  }
  async waitForSelector(selector, opts = {}) {
    const { state = "visible", timeout } = opts;
    const locator =
      typeof selector === "string" ? this.page.locator(selector) : selector;
    await locator.first().waitFor({ state, timeout });
  }

  async getText(selector) {
    return await this.page.textContent(selector);
  }
}
