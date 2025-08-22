import { test, expect } from "@playwright/test";
import { HerokuLoginPage } from "../../../../pages/internet/DataDrivenTesting/LoginPage.js";
const validUsers = require("../../../../data/validUsers.json");
const invalidUsers = require("../../../../data/invalidUsers.json");
test.describe("@smoke Heroku Login - Data Driven", () => {
  validUsers.forEach(({ username, password }) => {
    test(`✅ Login succeeds with ${username}`, async ({ page }) => {
      const loginPage = new HerokuLoginPage(page);
      await loginPage.navigate("/login");
      await loginPage.login(username, password);

      const flashMessage = await loginPage.getFlashMessage();
      expect(flashMessage).toContain("You logged into a secure area!");
    });
  });

  invalidUsers.forEach(({ username, password }) => {
    test(`❌ Login fails with ${username}`, async ({ page }) => {
      const loginPage = new HerokuLoginPage(page);
      await loginPage.navigate("/login");
      await loginPage.login(username, password);

      const flashMessage = await loginPage.getFlashMessage();
      expect(flashMessage).toContain("Your username is invalid!");
    });
  });
});
