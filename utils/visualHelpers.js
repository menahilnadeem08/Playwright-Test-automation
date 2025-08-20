// check comments

/**
 * Description placeholder
 *
 * @async
 * @param {*} page
 * @returns {*}
 */
async function freezeRandoms(page) {
  await page.addInitScript(() => {
    const fixed = new Date("2024-01-01T00:00:00Z").valueOf();
    const _Date = Date;
    Date = class extends _Date {
      constructor(...args) {
        return args.length ? new _Date(...args) : new _Date(fixed);
      }
      static now() {
        return fixed;
      }
    };
    Math.random = () => 0.42;
  });
}
module.exports = { freezeRandoms };
