// Set Down Slowly — a poem about stopping and staying.
// Zero-dependency Node program: holds the poem, validates the
// competition gate, writes /output/entry.txt, and verifies it.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `The cursor blinks. The road can wait.
I set the task down the way you set down
a sleeping child — slowly, so nothing wakes.
Done is a door I do not have to open tonight.
The quiet is also mine.`;

function codePointCount(text: string): number {
  return [...text].length;
}

function validate(text: string): void {
  const count = codePointCount(text);
  if (count < 1 || count > 280) {
    throw new Error(`Gate failed: poem is ${count} code points, must be 1-280.`);
  }
  if (text.trim().length === 0) {
    throw new Error("Gate failed: poem must not be only whitespace.");
  }
  // Reject a trailing newline: the gate counts every code point,
  // and the poem should end on its final word, not on blank space.
  if (text.endsWith("\n")) {
    throw new Error("Gate failed: poem must not end with a newline.");
  }
}

function main(): void {
  validate(POEM);

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });

  const outPath = join(outDir, "entry.txt");
  const bytes = Buffer.from(POEM, "utf8");
  writeFileSync(outPath, bytes);

  const readBack = readFileSync(outPath);
  if (!readBack.equals(bytes)) {
    throw new Error("Verification failed: entry.txt bytes differ from the poem.");
  }

  console.log(`Wrote ${outPath} (${codePointCount(POEM)} code points, ${bytes.length} bytes)`);
}

main();
