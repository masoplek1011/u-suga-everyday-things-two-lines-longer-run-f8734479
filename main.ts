import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Two-line explanation of a toaster for a 10-year-old.
// Line 1: one vivid sentence built on a single analogy (a metal mouth).
// Line 2: one sentence saying what the analogy maps and what it leaves out.
const ENTRY =
  "A toaster is a hungry metal box that clamps a slice of bread between two red-hot cheeks.\n" +
  "The two glowing sides are the cheeks, but the picture leaves out the lever you push down, the timer that pops the bread up, and the crumbs piling underneath.\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
