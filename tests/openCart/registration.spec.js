const { test, expect } = require('@playwright/test');
const RegistrationPage = require('../../pages/opencart/RegisterationPgae.js');
const users = require('../../data/testData.json');

test.describe('OpenCart Registration Flow', () => {
    test('Register new user successfully', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);

        await registrationPage.navigate('https://demo.opencart.com/index.php?route=account/register');

        // Use unique user from testData or generate dynamically
        const user = users.validUser;

        await registrationPage.registerUser(user);
        expect(await registrationPage.isRegistrationSuccessful()).toBeTruthy();
    });
});
