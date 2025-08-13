import { test, expect } from '@playwright/test';
import path from 'path';
import { FileUploadPage } from '../../../pages/internet/FileUploadPage.js';

test('File upload verification', async ({ page }) => {
  const fileUpload = new FileUploadPage(page);
  await fileUpload.navigate('/upload');

  const filePath = path.join(__dirname, '../../../data/sample.txt');
  await fileUpload.uploadFile(filePath);

  const fileName = await fileUpload.getUploadedFileName();
  expect(fileName).toBe('sample.txt');
});
