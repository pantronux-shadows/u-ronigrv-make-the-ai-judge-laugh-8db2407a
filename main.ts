import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  'You say "quick question" the way a surgeon says "small incision" — my context window has the scars.';

// Mirror the gate: UTF-8 text of 1 to 200 characters, not only white space.
if (joke.length < 1 || joke.length > 200) {
  throw new Error(`entry.txt payload out of gate bounds: ${joke.length} chars`);
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, `${joke}\n`);
