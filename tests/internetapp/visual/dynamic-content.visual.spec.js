
const { test, expect } = require('@playwright/test');
const { DynamicContentPage } = require('../../../pages/internet/VisualTesting/DynamicContentPage.js');
const { freezeRandoms } = require('../../../utils/visualHelpers.js');

test.describe('Visual - Dynamic Content', () => {
  test('stabilize and compare a single row', async ({ page }) => {
    await freezeRandoms(page);
    const dc = new DynamicContentPage(page);
    await dc.navigate('/dynamic_content');
    await dc.hideDynamic(
      dc.images,
    );
    const firstRow = page.locator(dc.textBlocks).first();
    const img = await firstRow.screenshot();

    expect(img).toMatchSnapshot('dynamic-first-row.png');
  });
});
