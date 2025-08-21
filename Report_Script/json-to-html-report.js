const fs = require("fs");

/**
 * Description placeholder
 *
 * @type {*}
 * it will convert result json properties to HTML
 */
const data = JSON.parse(fs.readFileSync("results.json", "utf-8"));

const counters = data.aggregate?.counters || {};
const summaries = data.aggregate?.summaries || {};

// Extract HTTP status counts
const statusCounts = Object.entries(counters)
  .filter(([k]) => k.startsWith("http.codes."))
  .map(([k, v]) => ({ code: k.replace("http.codes.", ""), count: v }));

// Extract latency summary
const latency = summaries["http.response_time"] || {};

// Build HTML
const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>Load Test Report</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    h1 { color: #333; }
    table { border-collapse: collapse; width: 100%; margin-bottom: 30px; }
    th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
    th { background: #f4f4f4; }
    .summary { margin-top: 20px; }
  </style>
</head>
<body>
  <h1>HTTP Load Test Report</h1>
  <h2>HTTP Status Codes</h2>
  <table>
    <thead>
      <tr><th>HTTP Code</th><th>Count</th></tr>
    </thead>
    <tbody>
      ${statusCounts
        .map((s) => `<tr><td>${s.code}</td><td>${s.count}</td></tr>`)
        .join("\n")}
    </tbody>
  </table>

  <h2>Summary Metrics</h2>
  <table class="summary">
    <tbody>
      <tr><th>Requests</th><td>${counters["http.requests"] || 0}</td></tr>
      <tr><th>Total Users Created</th><td>${counters["vusers.created"] || 0}</td></tr>
      <tr><th>Users Completed</th><td>${counters["vusers.completed"] || 0}</td></tr>
      <tr><th>Users Failed</th><td>${counters["vusers.failed"] || 0}</td></tr>
      <tr><th>Min Latency (ms)</th><td>${latency.min || 0}</td></tr>
      <tr><th>Median Latency (ms)</th><td>${latency.median || 0}</td></tr>
      <tr><th>P95 Latency (ms)</th><td>${latency.p95 || 0}</td></tr>
      <tr><th>Max Latency (ms)</th><td>${latency.max || 0}</td></tr>
    </tbody>
  </table>
</body>
</html>
`;

// Write file
fs.writeFileSync("reports/jmeter-report.html", html, "utf-8");
console.log("✅ HTML report generated: jmeter-report.html");
