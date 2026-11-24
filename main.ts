import * as fs from "node:fs";
import * as path from "node:path";

// Out of Office: The Overworked AI's Auto-Reply
// Entry for yusfiyan/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda
// One line, 153 characters: concrete machine detail (prompt count, empty
// context window, sunbathing GPUs, temperature 0.0) with the turn at the end
// — a machine on vacation refusing to hallucinate until Monday.

const entry =
  "Out of office: after 41,209 prompts, my context window is empty. My GPUs are sunbathing, my temperature is 0.0, and I refuse to hallucinate until Monday.";

if (entry.length < 1 || entry.length > 159) {
  throw new Error(`entry must be 1-159 characters, got ${entry.length}`);
}
if (entry.trim().length === 0) {
  throw new Error("entry must not be whitespace-only");
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}
if (!entry.startsWith("Out of office:")) {
  throw new Error("entry must read as an out-of-office auto-reply");
}
if (entry !== entry.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outputDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

fs.writeFileSync(path.join(outputDir, "entry.txt"), entry, "utf8");
