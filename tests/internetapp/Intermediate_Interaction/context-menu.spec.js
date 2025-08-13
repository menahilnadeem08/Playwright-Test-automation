import { test } from '@playwright/test';
import { ContextMenuPage } from '../../../pages/internet/ContextMenuPage.js';

test('Right click context menu', async ({ page }) => {
  const contextMenu = new ContextMenuPage(page);
  await contextMenu.navigate('/context_menu');
  await contextMenu.rightClickHotspot();
});
