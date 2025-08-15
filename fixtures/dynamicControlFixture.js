import base from '@playwright/test';
import { DynamicControlsPage } from '../pages/internet/dynamicControlsPage.js';

/**
 * Dynamic Controls fixture
 */
export const test = base.extend({
  dynamicControlsPage: async ({ page }, use) => {
    const dynamicControls = new DynamicControlsPage(page);
    await dynamicControls.navigateToPage();
    await use(dynamicControls);
  }
});

export const expect = base.expect;
