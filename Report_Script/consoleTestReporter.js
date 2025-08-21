class CustomReporter {
  constructor() {
    this.passed = 0;
    this.failed = 0;
    this.skipped = 0;
  }

  // Called after each test finishes
  onTestEnd(test, result) {
    if (result.status === "passed") {
      this.passed++;
    } else if (result.status === "failed") {
      this.failed++;
    } else if (result.status === "skipped") {
      this.skipped++;
    }
  }

  // Called once after all tests complete
  onEnd() {
    console.log("----- Test Summary -----");
    console.log(`Passed: ${this.passed}`);
    console.log(`Failed: ${this.failed}`);
    console.log(`Skipped: ${this.skipped}`);
    console.log("------------------------");

    // Optionally, write these stats to a file:
    /*
    const fs = require('fs');
    const summary = {
      passed: this.passed,
      failed: this.failed,
      skipped: this.skipped,
      total: this.passed + this.failed + this.skipped
    };
    fs.writeFileSync('test-summary.json', JSON.stringify(summary, null, 2));
    */
  }
}

module.exports = CustomReporter;
