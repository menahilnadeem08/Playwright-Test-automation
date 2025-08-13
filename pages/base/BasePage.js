export class BasePage {
  constructor(page) {
    this.page = page;
  }
async navigate(url) {
  await this.page.goto(url, {
    timeout: 600000,
    waitUntil: 'domcontentloaded'  
  });
}


  async click(locator) {
    await this.page.locator(locator).click();
  }

  async type(locator, text) {
    await this.page.locator(locator).fill(text);
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
  async waitForSelector(selector) {
    await this.page.waitForSelector(selector);
  }

  async getText(selector) {
    return await this.page.textContent(selector);
  }

}
