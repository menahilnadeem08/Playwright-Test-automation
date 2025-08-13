// pages/internet/DynamicControlsPage.js
import { expect } from '@playwright/test';
import { BasePage } from '../base/BasePage.js';

export class DynamicControlsPage extends BasePage {
  constructor(page) {
    super(page);
    // Store locators directly so expect() works without extra wrapping
    this.enableButton = this.page.locator('button:has-text("Enable")');
    this.disableButton = this.page.locator('button:has-text("Disable")');
    this.inputField = this.page.locator('#input-example input');
  }

  async clickEnable() {
    await this.enableButton.click();
    await expect(this.inputField).toBeEnabled({ timeout: 5000 });
  }

  async clickDisable() {
    await this.disableButton.click();
    await expect(this.inputField).toBeDisabled({ timeout: 5000 });
  }
}
