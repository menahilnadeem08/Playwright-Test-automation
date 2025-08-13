import { test, expect } from '@playwright/test';
import { DragAndDropPage } from '../../../pages/internet/DragAndDropPage.js';

test('Drag and drop columns', async ({ page }) => {
  const dragDrop = new DragAndDropPage(page);
  await dragDrop.navigate('/drag_and_drop');

  await dragDrop.dragAtoB();

  const textA = await dragDrop.getColumnText(dragDrop.columnA);
  expect(textA).toBe('B');
});
