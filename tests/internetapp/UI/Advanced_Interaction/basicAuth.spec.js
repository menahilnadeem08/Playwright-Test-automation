import { test, expect } from "@playwright/test";
import { BasicAuthPage } from "../../../../pages/internet/basicAuthpage.js";
import creds from "../../../../data/credentials.json";

test.describe("Basic Auth - The Internet", () => {
  test("should access basic auth page using context httpCredentials", async ({
    browser,
  }) => {
    // Create a browser context with credentials
    const context = await browser.newContext({
      httpCredentials: {
        username: creds.basicAuth.username,
        password: creds.basicAuth.password,
      },
    });

    const page = await context.newPage();
    const basicAuthPage = new BasicAuthPage(page);
    await basicAuthPage.navigate("/basic_auth");

    // ✅ Use Playwright's auto-waiting locator instead of waitForSelector
    const contentLocator = page.locator("div.example");
    await expect(contentLocator).toBeVisible();

    // ✅ Assert that the page contains the success text
    const text = await basicAuthPage.getContentText();
    expect(text).toContain("Congratulations");

    await context.close();
  });
});
