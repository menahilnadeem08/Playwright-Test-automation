// pages/youtube/YouTubeUploadPage.js
import { BasePage } from "../base/BasePage";

export class YouTubeUploadPage extends BasePage {
  constructor(page) {
    super(page);

    // Selectors
    this.fileInput = 'input[type="file"]';
    this.titleBox = this.page.getByRole("textbox", { name: /title/i });
    this.checksComplete = "text=Checks complete";
    this.notForKidsRadio =
      'tp-yt-paper-radio-button[name="VIDEO_MADE_FOR_KIDS_MFK"]';
    this.nextButton = "#next-button > ytcp-button-shape > button";
    this.visibilityRadios = {
      Public: this.page.getByRole("radio", { name: "Public" }),
      Private: this.page.getByRole("radio", { name: "Private" }),
      Unlisted: this.page.getByRole("radio", { name: "Unlisted" }),
    };
    this.doneButton = "#done-button > ytcp-button-shape > button";
    //this.doneButton = 'button:has-text("Done"), button:has-text("Publish")';
    this.videoLink = 'ytcp-video-info a[href*="youtu.be"]';
  }

  async getVideoLink() {
    const linkLocator = this.page.locator(this.videoLink);
    await linkLocator.waitFor({ state: "visible", timeout: 10000 });
    return await linkLocator.getAttribute("href");
  }

  async setVisibility(option) {
    const radio = this.visibilityRadios[option];
    if (!radio) {
      throw new Error(
        `Invalid visibility option: ${option}. Use 'Public', 'Private', or 'Unlisted'.`,
      );
    }
    await radio.waitFor({ state: "visible" });
    await radio.check();
  }
  async uploadFile(filePath) {
    const fileInput = this.page.locator(this.fileInput);
    await fileInput.waitFor({ state: "attached", timeout: 15000 });
    await fileInput.setInputFiles(filePath);
  }

  async setTitle(titleText) {
    await this.waitForSelector(this.titleBox);
    await this.type(this.titleBox, titleText);
  }

  async waitForChecks() {
    await this.waitForSelector(this.checksComplete, { timeout: 5 * 60 * 1000 });
  }

  async markNotForKids() {
    await this.click(this.notForKidsRadio);
  }

  async clickNext(times = 1) {
    for (let i = 0; i < times; i++) {
      await this.waitForSelector(this.nextButton);
      await this.click(this.nextButton);
      await this.page.waitForTimeout(1500);
    }
  }

  async setPrivate() {
    await this.waitForSelector(this.privateRadio);
    await this.click(this.privateRadio);
  }

  async publish() {
    await this.waitForSelector(this.doneButton);
    await this.click(this.doneButton);
  }
}
