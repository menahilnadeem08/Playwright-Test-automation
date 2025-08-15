import AxeBuilder from '@axe-core/playwright';

/**
 * Runs Axe accessibility analysis on the given page
 * and returns a detailed, readable report.
 *
 * @param {import('@playwright/test').Page} page
 * @returns {Promise<{violations: any[], report: string}>}
 */
export async function runAxeAnalysis(page) {
  const results = await new AxeBuilder({ page }).analyze();

  // Create custom readable report
  let report = '';
  if (results.violations.length === 0) {
    report = '✅ No accessibility violations found.\n';
  } else {
    report += `⚠️ Found ${results.violations.length} accessibility violation(s):\n\n`;

    results.violations.forEach((violation, index) => {
      report += `Violation ${index + 1}:\n`;
      report += `  Rule: ${violation.id}\n`;
      report += `  Impact: ${violation.impact}\n`;
      report += `  Description: ${violation.description}\n`;
      report += `  Help: ${violation.help} (${violation.helpUrl})\n`;
      report += `  Affected Elements:\n`;
      violation.nodes.forEach((node, nodeIndex) => {
        report += `    ${nodeIndex + 1}. Selector: ${node.target.join(', ')}\n`;
        if (node.failureSummary) {
          report += `       Failure Summary: ${node.failureSummary}\n`;
        }
      });
      report += '\n';
    });
  }

  return { violations: results.violations, report };
}
