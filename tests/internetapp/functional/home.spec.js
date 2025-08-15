const { test, expect } = require('@playwright/test');
const { performancePage } = require('../../../pages/internet/performancePage.js');

test.describe('Home Page', () => {
  test('should load and display list of examples', async ({ page }) => {
    const home = new performancePage(page);
    await home.navigate('/');
    await expect(home.heading).toHaveText('Welcome to the-internet');
    const count = await home.examples.count();
    expect(count).toBeGreaterThan(10);
  });
});
