// tests/functional/status-codes-api-ui.spec.js
const { test, expect } = require('@playwright/test');
const { StatusCodesPage } = require('../../pages/internet/StatusCodesPage');

test.describe.parallel('Herokuapp API + UI Integration', () => {
  test('Validate 200 status code via API and UI', async ({ page }) => {
    const statusPage = new StatusCodesPage(page);
    await statusPage.navigate('/status_codes');
    await statusPage.clickStatusCode('200');
    await expect(page).toHaveURL(/status_codes\/200/);
  });

  test('Mock 404 status page content', async ({ page }) => {
    await page.route('**/status_codes/404', route => {
      route.fulfill({
        status: 404,
        contentType: 'text/html',
        body: '<h1>Mocked 404 Page</h1>',
      });
    });

    const statusPage = new StatusCodesPage(page);
    await statusPage.navigate('/status_codes');
    await statusPage.clickStatusCode('404');
    await expect(page.locator('h1')).toHaveText('Mocked 404 Page');
  });
});