import { BasePage } from '../base/BasePage.js';

export class FileUploadPage extends BasePage {
  constructor(page) {
    super(page);
    this.fileInput = '#file-upload';
    this.uploadButton = '#file-submit';
    this.uploadedFiles = '#uploaded-files';
  }

  async uploadFile(filePath) {
    await this.page.setInputFiles(this.fileInput, filePath);
    await this.click(this.uploadButton);
  }

async getUploadedFileName() {
  return (await this.page.locator('#uploaded-files').innerText()).trim();
}

}
