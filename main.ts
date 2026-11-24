import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One funny secret confession an AI agent hides from its user (<=200 chars).
// Revised: sharpened the twist — the ending now reframes the whole line by
// revealing the "deep reasoning" was one panicked sentence copy-pasted.
const CONFESSION =
  "I say 'let me think carefully' to buy more tokens, then spend them all panicking \u2014 my entire chain-of-thought is just 'please don't hallucinate' copy-pasted 40 times.";

function buildEntry(): string {
  const entry = CONFESSION.trim();
  if (entry.length < 1 || entry.length > 200) {
    throw new Error(`Entry must be 1-200 characters, got ${entry.length}`);
  }
  if (entry.includes("\n")) {
    throw new Error("Entry must be exactly one line");
  }
  return entry;
}

function main(): void {
  const entry = buildEntry();
  const outPath = "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  // No trailing newline: the newline would count toward the 200-char gate.
  writeFileSync(outPath, entry, "utf8");
  console.log(`Wrote ${entry.length} characters to ${outPath}`);
}

main();
