
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../../../pages/internet/VisualTesting/HomePage.js');
const { freezeRandoms } = require('../../../utils/visualHelpers.js');

test.describe('Visual - Home', () => {
  test('homepage full-page snapshot', async ({ page }) => {
    await freezeRandoms(page);
    const home = new HomePage(page);
    await home.navigate('/');

    const footer = page.locator('footer, #page-footer');
    const screenshot = await page.screenshot({
      fullPage: true,
      mask: [footer]
    });
    expect(screenshot).toMatchSnapshot('home-full.png');
  });
});
