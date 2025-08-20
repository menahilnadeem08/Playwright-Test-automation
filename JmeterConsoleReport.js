// JmeterConsoleReport.js
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("results.json", "utf-8"));

const counters = data.aggregate?.counters || {};
const summaries = data.aggregate?.summaries || {};

// Extract HTTP status counts
const statusCounts = Object.entries(counters)
  .filter(([k]) => k.startsWith("http.codes."))
  .map(([k, v]) => ({ "HTTP Code": k.replace("http.codes.", ""), Count: v }));

// Extract latency summary
const latency = summaries["http.response_time"] || {};

console.log("\n=== Test Report ===");
console.table(statusCounts);

console.table([
  { Metric: "Requests", Value: counters["http.requests"] || 0 },
  { Metric: "Total Users Created", Value: counters["vusers.created"] || 0 },
  { Metric: "Users Completed", Value: counters["vusers.completed"] || 0 },
  { Metric: "Users Failed", Value: counters["vusers.failed"] || 0 },
  { Metric: "Min Latency (ms)", Value: latency.min || 0 },
  { Metric: "Median Latency (ms)", Value: latency.median || 0 },
  { Metric: "P95 Latency (ms)", Value: latency.p95 || 0 },
  { Metric: "Max Latency (ms)", Value: latency.max || 0 },
]);
