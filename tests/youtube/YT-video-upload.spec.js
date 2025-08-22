// auth-setup.spec.js
const { test, expect } = require("@playwright/test");
const fs = require("fs");
const path = require("path");
const {
  YouTubeUploadPage,
} = require("../../pages/youtube/YouTubeUploadPage.js");

test.beforeEach(async ({ context }) => {
  // Load YouTube cookies from saved file
  const cookies = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "../../store_cookies/cookies.clean.json"),
      "utf8",
    ),
  );
  await context.addCookies(cookies);
});

test("Upload short video and verify playback", async ({ page }) => {
  const uploadPage = new YouTubeUploadPage(page);

  const videoFile = path.resolve(__dirname, "../../videos/short_video.mp4");

  // Upload flow
  await uploadPage.navigate("/upload");
  await uploadPage.uploadFile(videoFile);
  await uploadPage.setTitle("My Automation Test Video");
  await uploadPage.waitForChecks();

  // Capture video link before finishing
  const videoUrl = await uploadPage.getVideoLink();

  await uploadPage.markNotForKids();
  await uploadPage.clickNext(3);
  await uploadPage.setVisibility("Private");
  await uploadPage.publish();

  // ✅ Navigate in SAME tab to the video URL
  await page.goto(videoUrl, { waitUntil: "domcontentloaded" });

  // Verify video player is visible
  const player = page.locator("video");
  await expect(player).toBeVisible();

  // Verify playback starts
  const isPlaying = await page.evaluate(() => {
    const video = document.querySelector("video");
    return new Promise((resolve) => {
      video.play().then(() => {
        setTimeout(() => resolve(!video.paused), 1000);
      });
    });
  });

  expect(isPlaying).toBeTruthy();
});

test("Upload long video and verify playback", async ({ page }) => {
  const uploadPage = new YouTubeUploadPage(page);

  const videoFile = path.resolve(__dirname, "../../videos/long_video.mp4");

  // Upload flow
  await uploadPage.navigate("/upload");
  await uploadPage.uploadFile(videoFile);
  await uploadPage.setTitle("My Automation Test Video");
  await uploadPage.waitForChecks();

  // Capture video link before finishing
  const videoUrl = await uploadPage.getVideoLink();

  await uploadPage.markNotForKids();
  await uploadPage.clickNext(3);
  await uploadPage.setVisibility("Private");
  await uploadPage.publish();

  // ✅ Navigate in SAME tab to the video URL
  await page.goto(videoUrl, { waitUntil: "domcontentloaded" });

  // Verify video player is visible
  const player = page.locator("video");
  await expect(player).toBeVisible();

  // Verify playback starts
  const isPlaying = await page.evaluate(() => {
    const video = document.querySelector("video");
    return new Promise((resolve) => {
      video.play().then(() => {
        setTimeout(() => resolve(!video.paused), 1000);
      });
    });
  });

  expect(isPlaying).toBeTruthy();
});
