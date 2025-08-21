// custom-html-reporter.js
const fs = require("fs");
const path = require("path");

class CustomHtmlReporter {
  constructor(options = {}) {
    this.results = [];
    this.outputFile =
      options.outputFile || path.join(process.cwd(), "playwright-report.html");
  }

  onBegin(config, suite) {
    console.log(`Starting the run with ${suite.allTests().length} test(s)...`);
  }

  onTestEnd(test, result) {
    this.results.push({
      title: test.title,
      fullTitle: test.titlePath().join(" > "),
      status: result.status,
      duration: result.duration,
      error: result.error ? result.error.message : null,
    });
  }

  onEnd(result) {
    const html = this.generateHtml();
    const path = "reports";

    // Make sure the folder exists
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }

    // Save the file inside reports
    fs.writeFileSync(`${path}/${this.outputFile}`, html, "utf-8");
    console.log(`\n✅ Custom HTML report saved at: ${this.outputFile}`);
  }

  generateHtml() {
    const rows = this.results
      .map(
        (r) => `
        <tr class="${r.status}">
          <td>${r.fullTitle}</td>
          <td>${r.status}</td>
          <td>${r.duration}ms</td>
          <td>${r.error ? r.error : ""}</td>
        </tr>`,
      )
      .join("\n");

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8"/>
        <title>Playwright Test Report</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { color: #333; }
          table { border-collapse: collapse; width: 100%; margin-top: 20px; }
          th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
          th { background: #f4f4f4; }
          tr.passed { background: #e6ffed; }
          tr.failed { background: #ffe6e6; }
          tr.skipped { background: #f9f9f9; color: #999; }
        </style>
      </head>
      <body>
        <h1>Playwright Test Report</h1>
        <p>Total Tests: ${this.results.length}</p>
        <table>
          <thead>
            <tr>
              <th>Test</th>
              <th>Status</th>
              <th>Duration</th>
              <th>Error</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </body>
      </html>
    `;
  }
}

module.exports = CustomHtmlReporter;
