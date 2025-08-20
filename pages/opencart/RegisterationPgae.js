// check comments
import { BasePage } from "../base/BasePage.js";

/**
 * Description placeholder
 *
 * @class RegistrationPage
 * @typedef {RegistrationPage}
 * @extends {BasePage}
 */
class RegistrationPage extends BasePage {
  constructor(page) {
    super(page);
    this.firstNameInput = "#input-firstname";
    this.lastNameInput = "#input-lastname";
    this.emailInput = "#input-email";
    this.telephoneInput = "#input-telephone";
    this.passwordInput = "#input-password";
    this.confirmPasswordInput = "#input-confirm";
    this.privacyPolicyCheckbox = 'input[name="agree"]';
    this.continueButton = 'input[type="submit"][value="Continue"]';
    this.successMessage = ".alert-success";
  }

  async registerUser(user) {
    await this.page.waitForLoadState("domcontentloaded");
    (await this.page.waitForSelector("text=My Account", { timeout: 600000 }),
      await this.page.waitForSelector("text=Verifying you are human", {
        state: "hidden",
        timeout: 600000,
      }));
    await this.type(this.firstNameInput, user.firstName);
    await this.type(this.lastNameInput, user.lastName);
    await this.type(this.emailInput, user.email);
    await this.type(this.telephoneInput, user.telephone);
    await this.type(this.passwordInput, user.password);
    await this.type(this.confirmPasswordInput, user.password);
    await this.page.check(this.privacyPolicyCheckbox);
    await this.click(this.continueButton);
  }

  async isRegistrationSuccessful() {
    return this.isVisible(this.successMessage);
  }
}

module.exports = RegistrationPage;
