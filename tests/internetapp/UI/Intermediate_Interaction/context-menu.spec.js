// check comments
import { test, expect } from "@playwright/test";
import { ContextMenuPage } from "../../../../pages/internet/ContextMenuPage.js";

test("@regression Right click context menu", async ({ page }) => {
  const contextMenu = new ContextMenuPage(page);
  await contextMenu.navigate("/context_menu");

  page.once("dialog", async (dialog) => {
    expect(dialog.message()).toContain("You selected a context menu");
    await dialog.dismiss();
  });

  await contextMenu.rightClickHotspot();
});
