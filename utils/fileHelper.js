// check comments
/**
 * Description placeholder
 *
 * @type {*}
 */
const fs = require("fs");

function ensureDirExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

module.exports = { ensureDirExists };
