// tests/specs/secureFileDownload.spec.js
const { test, expect } = require("@playwright/test");
const {
  SecureFileDownloadPage,
} = require("../../../../pages/internet/secureFileDownloadPage.js");
const { ensureDirExists } = require("../../../../utils/fileHelper.js");
const path = require("path");

test.describe("Secure File Download - The Internet", () => {
  test("should download a specific file from the download page", async ({
    page,
    browserName,
  }) => {
    const downloadPage = new SecureFileDownloadPage(page);
    await downloadPage.navigate("/download");

    const filename = "sample.txt";

    const downloadsDir = path.join(process.cwd(), "downloads", browserName);
    ensureDirExists(downloadsDir);

    const [download] = await Promise.all([
      page.waitForEvent("download"),
      page.click(`a:has-text("${filename}")`),
    ]);

    const savePath = path.join(downloadsDir, filename);
    await download.saveAs(savePath);

    // Validate file saved and non-empty
    const fs = require("fs");
    expect(fs.existsSync(savePath)).toBeTruthy();
    const stat = fs.statSync(savePath);
    expect(stat.size).toBeGreaterThan(0);
  });
});
