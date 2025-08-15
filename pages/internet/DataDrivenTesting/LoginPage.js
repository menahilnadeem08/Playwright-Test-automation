import { BasePage } from "../../base/BasePage";

export class HerokuLoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = '#username';
    this.passwordInput = '#password';
    this.loginButton = 'button[type="submit"]';
    this.flashMessage = '#flash';
  }


  async login(username, password) {
    await this.type(this.usernameInput, username);
    await this.type(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async getFlashMessage() {
    return await this.getText(this.flashMessage);
  }
}
