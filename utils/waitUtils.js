
// Wait until visible
export const waitForVisible = async (locator, timeout = 5000) => {
  await locator.waitFor({ state: 'visible', timeout });
};

// Wait until detached
export const waitForDetached = async (locator, timeout = 5000) => {
  await locator.waitFor({ state: 'detached', timeout });
};

// Wait until element is enabled
export const waitForEnabled = async (locator, timeout = 5000) => {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    if (await locator.isEnabled()) return;
    await new Promise(r => setTimeout(r, 100)); // small delay
  }
  throw new Error('Element not enabled after ' + timeout + 'ms');
};
