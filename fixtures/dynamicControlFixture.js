import base from '@playwright/test';
import { DynamicControlsPage } from '../pages/internet/dynamicControlsPage';

/**
 * Description placeholder
 *
 * @type {*}
 */
export const test = base.extend({
  dynamicControlsPage: async ({ page }, use) => {
    const dynamicControls = new DynamicControlsPage(page);
    await dynamicControls.navigate('/dynamic_controls'); 
    await use(dynamicControls);
  }
});

export const expect = base.expect;
