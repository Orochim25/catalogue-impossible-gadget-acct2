import { createHash } from "node:crypto";
import { copyFileSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const info = statSync(source);
if (info.size > 1048576) {
  throw new Error(`entry.png is ${info.size} bytes, over the 1048576 byte limit`);
}

const bytes = readFileSync(source);
if (bytes.length !== info.size) {
  throw new Error("entry.png changed while reading");
}
if (bytes.subarray(0, 8).toString("hex") !== "89504e470d0a1a0a") {
  throw new Error("entry.png is not a PNG file");
}
const sha = createHash("sha256").update(bytes).digest("hex");
const dest = join(outDir, "entry.png");
copyFileSync(source, dest);
const written = statSync(dest);
if (written.size !== info.size) {
  throw new Error(`output size mismatch: ${written.size} != ${info.size}`);
}
console.log(`copied entry.png (${info.size} bytes) sha256=${sha} -> ${dest}`);
