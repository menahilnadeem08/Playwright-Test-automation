// check comments
import fs from "fs";
import path from "path";
async function saveViolations(results, testName) {
  if (results.violations.length > 0) {
    const dir = path.join(process.cwd(), "reports", "accessibility");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const filePath = path.join(dir, `${testName.replace(/\s+/g, "_")}.json`);
    fs.writeFileSync(filePath, JSON.stringify(results, null, 2));
    console.log(`Accessibility report saved: ${filePath}`);
  }
}
module.exports = { saveViolations };
