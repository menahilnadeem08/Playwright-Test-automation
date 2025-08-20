import { test, expect } from "@playwright/test";
import { HerokuLoginPage } from "../../../../pages/internet/DataDrivenTesting/LoginPage.js";
import loginData from "../../../../data/herokuLogin.json";

test.describe("@smoke Heroku Login - Data Driven", () => {
  loginData.forEach(({ username, password, expected }) => {
    test(`Login test with ${username}`, async ({ page }) => {
      const loginPage = new HerokuLoginPage(page);
      await loginPage.navigate("/login");
      await loginPage.login(username, password);

      const flashMessage = await loginPage.getFlashMessage();
      if (expected === "success") {
        expect(flashMessage).toContain("You logged into a secure area!");
      } else {
        expect(flashMessage).toContain("Your username is invalid!");
      }
    });
  });
});
