const { test, expect } = require('@playwright/test');
const ProductPage = require('../../pages/opencart/ProductPage');

test.describe.parallel('OpenCart Product Search & Browse', () => {
  test('Search existing product and verify results', async ({ page }) => {
    const productPage = new ProductPage(page);

    await productPage.navigate('https://demo.opencart.com/');
    await productPage.searchProduct('MacBook');

    expect(await productPage.isProductListVisible()).toBeTruthy();

    const productNames = await productPage.getProductNames();
    expect(productNames.some(name => name.includes('MacBook'))).toBeTruthy();

    await productPage.openProductDetails(0);
    expect(await page.locator('h1').textContent()).toContain('MacBook');
  });

  test('Apply category filter and check products', async ({ page }) => {
    const productPage = new ProductPage(page);

    await productPage.navigate('https://demo.opencart.com/');
    await productPage.applyCategoryFilter('Desktops');

    expect(await productPage.isProductListVisible()).toBeTruthy();
  });
});
