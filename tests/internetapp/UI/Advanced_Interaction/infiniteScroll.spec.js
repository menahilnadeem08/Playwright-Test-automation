import { test, expect } from "@playwright/test";
import { InfiniteScrollPage } from "../../../../pages/internet/infiniteScrollPage.js";
test.describe("Infinite Scroll Tests", () => {
  test("Load more content when scrolling", async ({ page }) => {
    const infiniteScroll = new InfiniteScrollPage(page);
    await infiniteScroll.navigate("/infinite_scroll");

    const initialCount = await infiniteScroll.getParagraphCount();

    await infiniteScroll.scrollToBottom();
    await infiniteScroll.waitForMoreParagraphs(initialCount);

    const newCount = await infiniteScroll.getParagraphCount();

    expect(newCount).toBeGreaterThan(initialCount);
  });
});
