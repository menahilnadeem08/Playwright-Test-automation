const { test, expect } = require('@playwright/test');
const { BasicAuthPage } = require('../../../pages/internet/BasicAuthPage.js');
const creds = require('../../../data/credentials.json');

test.describe('Basic Auth - The Internet', () => {
  test('should access basic auth page using context httpCredentials', async ({ browser, playwright }) => {
    const context = await browser.newContext({
      httpCredentials: {
        username: creds.basicAuth.username,
        password: creds.basicAuth.password
      }
    });

    const page = await context.newPage();
    const basicAuthPage = new BasicAuthPage(page);
    await basicAuthPage.navigate('/basic_auth');

    await basicAuthPage.waitForSelector('div.example');
    const text = await basicAuthPage.getContentText();
    expect(text).toContain('Congratulations');
    await context.close();
  });
});
