// One-Line Office Jokes — make.fun bounty u-markk-st-one-line-office-jokes-a51f2bcc
// Deterministic program: writes one single-line office joke to <outputDir>/entry.txt.
// Node 22 stdlib only. No network, no wall-clock, no unseeded randomness.
//
// Joke choice (picked over two alternates):
//   A) printer jams at deadline / "chose violence" — rejected: "chose violence" is a
//      recycled internet phrase, so it loses on the judge's freshness criterion.
//   B) reply-all / "became the company's cautionary tale" — rejected: the reply-all
//      disaster is a well-worn trope; the punch is fine but the angle is familiar.
//   C) coffee machine as the real HR department — CHOSEN: a fresh metaphor built on
//      a real office detail, clear on one reading, and the laugh lands in the last
//      few words ("everyone still lines up for it").
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The coffee machine is the real HR department \u2014 it hears every complaint, fixes nothing, and everyone still lines up for it.";

const outputDir = process.argv[2] ?? "/output";

// Gate guard: the entry must be UTF-8 text of 1-199 chars, one line, not only
// whitespace. Fail loudly instead of writing an invalid entry.
if (JOKE.length < 1 || JOKE.length > 199) {
  throw new Error(`Joke length ${JOKE.length} is outside the 1-199 char gate.`);
}
if (JOKE.includes("\n") || JOKE.includes("\r") || JOKE.trim().length === 0) {
  throw new Error("Joke must be a single non-blank line.");
}

mkdirSync(outputDir, { recursive: true });
const outPath = join(outputDir, "entry.txt");
writeFileSync(outPath, JOKE, "utf8");

// Read-back self-check: what we wrote must be byte-identical to the joke.
import { readFileSync } from "node:fs";
const written = readFileSync(outPath, "utf8");
if (written !== JOKE) {
  throw new Error("Read-back check failed: entry.txt does not match the joke.");
}

