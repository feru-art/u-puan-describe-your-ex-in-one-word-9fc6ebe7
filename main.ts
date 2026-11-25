// Describe Your Ex in One Word — entry program (final).
// Writes exactly one word to /output/entry.txt.
// Winning word (local head-to-head 4-0 vs V1-V5, 7-0 vs anchors): "Extra".
// The verdict: a background character who was never the lead — and,
// in the slang sense, too much drama on top of it. One word, two
// readings, no caption needed.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Extra";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
