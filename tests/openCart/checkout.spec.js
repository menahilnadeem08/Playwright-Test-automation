const { test, expect } = require('@playwright/test');
const ProductPage = require('../../pages/opencart/ProductPage');
const CartPage = require('../../pages/opencart/CartPage');

test.describe.only('OpenCart Shopping Cart & Checkout', () => {
  test('Add product to cart and complete checkout simulation', async ({ page }) => {
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    // Step 1: Add product to cart
    await productPage.navigate('https://demo.opencart.com/');
    await productPage.searchProduct('MacBook');
    await productPage.openProductDetails(0);
    await page.click('#button-cart');

    // Step 2: Go to cart and modify quantity
    await cartPage.openCart();
    await cartPage.modifyQuantity(0, 2); // Example: set quantity to 2

    // Step 3: Checkout simulation (Guest Checkout)
    await page.click('a[href*="checkout"]');
    await page.check('input[name="account"][value="guest"]'); // Guest checkout
    await page.click('#button-account');

    // Fill billing details
    await page.fill('#input-payment-firstname', 'John');
    await page.fill('#input-payment-lastname', 'Doe');
    await page.fill('#input-payment-email', 'john.doe@example.com');
    await page.fill('#input-payment-telephone', '1234567890');
    await page.fill('#input-payment-address-1', '123 Street');
    await page.fill('#input-payment-city', 'City');
    await page.fill('#input-payment-postcode', '12345');
    await page.selectOption('#input-payment-country', '223'); // Example country ID
    await page.selectOption('#input-payment-zone', '3633');   // Example zone ID
    await page.click('#button-guest');

    // Continue through shipping & payment (simulation)
    await page.click('#button-shipping-method');
    await page.check('input[name="agree"][type="checkbox"]'); // Agree to terms
    await page.click('#button-payment-method');

    // Verify order confirmation
    const success = await page.locator('h1').textContent();
    expect(success).toContain('Your order has been placed!');
  });
});
