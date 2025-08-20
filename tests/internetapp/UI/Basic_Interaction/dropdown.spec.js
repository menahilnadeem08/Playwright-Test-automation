// check comments
import { test, expect } from "../../../../fixtures/dropDownFixture.js";

test("Select single option from dropdown", async ({ dropdownPage }) => {
  const selected = await dropdownPage.selectOptionByValue("1");
  expect(selected).toBe("Option 1");
});
