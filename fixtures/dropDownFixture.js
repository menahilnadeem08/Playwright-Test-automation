import base from '@playwright/test';
import { DropdownPage } from '../pages/internet/DropdownPage.js';

/**
 * Description placeholder
 *
 * @type {*}
 */
export const test = base.extend({
  dropdownPage: async ({ page }, use) => {
    const dropdownPage = new DropdownPage(page);
    await dropdownPage.navigate('/dropdown'); // auto navigation
    await use(dropdownPage);
  }
});

export const expect = base.expect;
