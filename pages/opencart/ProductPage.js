// check comments
import { BasePage } from "../base/BasePage.js";

class ProductPage extends BasePage {
  constructor(page) {
    super(page);
    this.searchInput = 'input[name="search"]';
    this.searchButton = 'button[class*="btn-default"][type="button"]';
    this.productList = ".product-layout";
    this.productTitle = ".caption h4 a";
    this.filterCategory = "#input-category"; // Example selector
    this.filterButton = "#button-search"; // Apply filters
  }

  async searchProduct(productName) {
    await this.type(this.searchInput, productName);
    await this.click(this.searchButton);
  }

  async applyCategoryFilter(categoryName) {
    await this.page.selectOption(this.filterCategory, { label: categoryName });
    await this.click(this.filterButton);
  }

  async openProductDetails(index = 0) {
    await this.page.locator(this.productTitle).nth(index).click();
  }

  async getProductNames() {
    return this.page.locator(this.productTitle).allTextContents();
  }

  async isProductListVisible() {
    return this.isVisible(this.productList);
  }
}

module.exports = ProductPage;
