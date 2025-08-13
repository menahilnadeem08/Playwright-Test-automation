import { BasePage } from '../base/BasePage.js';
class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.cartButton = '#cart-total';
    this.checkoutButton = 'a[href*="checkout"]';
    this.cartRows = '.table-responsive tbody tr';
    this.quantityInput = 'input[name*="quantity"]';
    this.updateButton = 'button[data-original-title="Update"]';
    this.removeButton = 'button[data-original-title="Remove"]';
    this.successMessage = '.alert-success';
  }

  async openCart() {
    await this.click(this.cartButton);
    await this.click(this.checkoutButton);
  }

  async modifyQuantity(rowIndex, quantity) {
    const row = this.page.locator(this.cartRows).nth(rowIndex);
    await row.locator(this.quantityInput).fill(quantity.toString());
    await row.locator(this.updateButton).click();
  }

  async removeProduct(rowIndex) {
    const row = this.page.locator(this.cartRows).nth(rowIndex);
    await row.locator(this.removeButton).click();
  }

  async getCartProducts() {
    return this.page.locator(`${this.cartRows} td:nth-child(2)`).allTextContents();
  }
}

module.exports = CartPage;
