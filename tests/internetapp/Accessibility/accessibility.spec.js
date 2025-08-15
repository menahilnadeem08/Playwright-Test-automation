import { test, expect } from '@playwright/test';
import { HomePage } from '../../../pages/internet/VisualTesting/homePage.js';
import { CheckboxesPage } from '../../../pages/internet/checkboxesPage.js';
import { DropdownPage } from '../../../pages/internet/dropdownPage.js';
import { StatusCodesPage } from '../../../pages/internet/statusCodesPage.js';
import { runAxeAnalysis } from '../../../utils/axeHelper.js';
import { HerokuLoginPage } from '../../../pages/internet/DataDrivenTesting/LoginPage.js';
import { saveViolations } from '../../../utils/saveVoilations.js';

test.describe('Accessibility Tests - The Internet', () => {



  test('TC01 - Home Page Accessibility', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate('/');
    const results = await runAxeAnalysis(page);
    await saveViolations(results, 'TC01_Home_Page_Accessibility');
    expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
  });
  test('TC-PASS-02 - Status Codes Page Accessibility Check', async ({ page }) => {
    const statusCodesPage = new StatusCodesPage(page);
    await statusCodesPage.navigate('/status_codes');
    const { violations } = await runAxeAnalysis(page);
    await saveViolations(results, 'TC02_Status_Codes_Page_Accessibility');
    expect(violations.length, report).toBe(0);
  });
  test('TC03 - Checkboxes page contrast check', async ({ page }) => {
    const checkboxesPage = new CheckboxesPage(page);
    await checkboxesPage.navigate('/checkboxes');
    const results = await runAxeAnalysis(page, ['wcag21aa']);
    await saveViolations(results, 'TC03_Checkboxes_Page_Accessibility');
    expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
  });
  test('TC04 - Dropdown Page Accessibility', async ({ page }) => {
    const dropdownPage = new DropdownPage(page);
    await dropdownPage.navigate('/dropdown');
    const results = await runAxeAnalysis(page);
    await saveViolations(results, 'TC04_Dropdown_Page_Accessibility');
    expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
  });
  test('TC05 - Login Page has accessible labels', async ({ page }) => {
    const loginPage = new HerokuLoginPage(page);
    await loginPage.navigate('/login');
    const results = await runAxeAnalysis(page, ['wcag2a']);
    await saveViolations(results, 'TC05_Login_Page_Accessibility');
    expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
  });

});
