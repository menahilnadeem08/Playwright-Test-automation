
/**
 * Description placeholder
 *
 * @type {*}
 */
const { request } = require('@playwright/test');

async function getStatusCode(url) {
  const apiContext = await request.newContext();
  const response = await apiContext.get(url);
  return response.status();
}

module.exports = { getStatusCode };