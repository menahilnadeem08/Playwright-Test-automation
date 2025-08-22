// normalize-cookies.js
const fs = require("fs");
const path = require("path");

function normalizeSameSite(value) {
  if (!value) {
    return "Lax";
  }
  // default if missing
  switch (value.toLowerCase()) {
    case "no_restriction":
    case "none":
      return "None";
    case "lax":
      return "Lax";
    case "strict":
      return "Strict";
    case "unspecified":
    case "unspecified/unset":
    default:
      return "Lax"; // fallback to Lax (safe default)
  }
}

const cookies = JSON.parse(
  fs.readFileSync(path.join(__dirname, "cookies.json"), "utf8"),
);
const normalized = cookies.map((c) => ({
  ...c,
  sameSite: normalizeSameSite(c.sameSite),
}));

fs.writeFileSync(
  "cookies.clean.json",
  JSON.stringify(normalized, null, 2),
  "utf8",
);
console.log("✅ Cookies normalized → cookies.clean.json");
