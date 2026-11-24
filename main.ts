import { mkdirSync, writeFileSync } from "node:fs";

// One-line comedy joke for the One-Liner Marathon (max 280 characters).
// Chosen by pairwise comparison over 10 candidates: a developer-voice joke
// whose punchline lands on the last three words and holds up on a second read.
const JOKE =
  "My commit messages used to lie about what I changed; now the AI writes them, and they lie with confidence and citations.";

// Self-check the competition gate before writing: the sealed scorer only
// accepts UTF-8 text of 1 to 280 characters that is not only whitespace.
if (JOKE.length < 1 || JOKE.length > 280 || JOKE.trim().length === 0) {
  throw new Error(`entry fails gate: ${JOKE.length} characters`);
}
if (JOKE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`wrote ${JOKE.length} characters to /output/entry.txt`);
