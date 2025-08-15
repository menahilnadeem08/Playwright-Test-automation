const { test, expect } = require('@playwright/test');

test('API status check for Herokuapp', async ({ request }) => {
  const response = await request.get('https://the-internet.herokuapp.com/');
  expect(response.status()).toBe(200);
});
