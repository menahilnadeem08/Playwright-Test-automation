import base from '@playwright/test';
import { CheckboxesPage } from '../pages/internet/CheckboxesPage.js';

/**
 * Description placeholder
 *
 * @type {*}
 */
export const test = base.extend({
  checkboxesPage: async ({ page }, use) => {
    const checkboxesPage = new CheckboxesPage(page);
    await checkboxesPage.navigate('/checkboxes');
    await use(checkboxesPage); 
  }
});

export const expect = base.expect;
