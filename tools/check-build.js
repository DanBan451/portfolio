#!/usr/bin/env node
// Pre-deploy guard: refuses to publish a build that contains things that must
// stay private. Runs automatically via `npm run deploy` (predeploy).
//
//   - any path containing "reference" (the gitignored private folder)
//   - the strings listed in FORBIDDEN_TEXT inside any text asset
//   - JPEGs that still carry EXIF metadata (GPS, device, timestamps)
const fs = require("fs");
const path = require("path");

const BUILD = path.join(__dirname, "..", "build");
// Add anything here that must never appear in the published site.
const FORBIDDEN_TEXT = [
  /\(907\)\s*687-7403/, // old personal phone number
  /346-652-4563/, // current personal phone number
  /DemoPortfolio!/, // demo-account password pattern
  /AIza[0-9A-Za-z_-]{30,}/, // Google/Firebase API keys
  /sk-[A-Za-z0-9]{20,}/, // OpenAI/Anthropic-style secret keys
  /AKIA[0-9A-Z]{16}/, // AWS access key ids
];
const TEXT_EXT = new Set([".html", ".js", ".css", ".json", ".txt", ".map", ".svg", ".xml", ".webmanifest"]);

const problems = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const rel = path.relative(BUILD, full);
    if (/reference/i.test(rel)) problems.push(`private folder leaked into build: ${rel}`);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    const ext = path.extname(entry.name).toLowerCase();
    if (TEXT_EXT.has(ext)) {
      const text = fs.readFileSync(full, "utf8");
      for (const re of FORBIDDEN_TEXT) {
        if (re.test(text)) problems.push(`forbidden text ${re} in ${rel}`);
      }
    } else if (ext === ".jpg" || ext === ".jpeg") {
      if (hasExif(fs.readFileSync(full))) problems.push(`JPEG still has EXIF metadata: ${rel}`);
    }
  }
}

// True if the JPEG has an APP1 "Exif" segment.
function hasExif(buf) {
  if (buf[0] !== 0xff || buf[1] !== 0xd8) return false;
  let i = 2;
  while (i + 4 <= buf.length && buf[i] === 0xff) {
    const marker = buf[i + 1];
    if (marker === 0xda) break; // start of scan: no more headers
    const len = buf.readUInt16BE(i + 2);
    if (marker === 0xe1 && buf.slice(i + 4, i + 8).toString("ascii") === "Exif") return true;
    i += 2 + len;
  }
  return false;
}

if (!fs.existsSync(BUILD)) {
  console.error("check-build: no build/ directory; run `npm run build` first");
  process.exit(1);
}
walk(BUILD);
if (problems.length) {
  console.error("check-build: refusing to deploy:\n  " + problems.join("\n  "));
  process.exit(1);
}
console.log("check-build: ok (no private folder, forbidden text, or EXIF in build/)");
