import { test, expect } from '@playwright/test';
import { JavaScriptAlertsPage } from '../../../pages/internet/JavaScriptAlertsPage.js';

test('Handle JS Alert', async ({ page }) => {
  const alerts = new JavaScriptAlertsPage(page);
  await alerts.navigate('/javascript_alerts');

  await alerts.triggerAlert();
  expect(await alerts.getResult()).toContain('You successfully clicked an alert');
});

test('Handle JS Confirm accept', async ({ page }) => {
  const alerts = new JavaScriptAlertsPage(page);
  await alerts.navigate('/javascript_alerts');

  await alerts.triggerConfirm(true);
  expect(await alerts.getResult()).toContain('You clicked: Ok');
});

test('Handle JS Prompt with text', async ({ page }) => {
  const alerts = new JavaScriptAlertsPage(page);
  await alerts.navigate('/javascript_alerts');

  await alerts.triggerPrompt('Hello');
  expect(await alerts.getResult()).toContain('You entered: Hello');
});
