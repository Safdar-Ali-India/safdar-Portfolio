/**
 * Resize About-page photos for /public/about (max width 1400px, JPEG q=85).
 *
 * 1. Copy your originals into: public/about/_incoming/
 *    Use EXACTLY these filenames (as delivered from WhatsApp / Instagram export):
 *      WhatsApp_Image_2026-05-04_at_12_02_24_AM.jpeg
 *      WhatsApp_Image_2026-05-04_at_12_02_43_AM.jpeg
 *      WhatsApp_Image_2026-05-04_at_12_33_37_AM.jpeg
 *      630084748_18379388308094567_1452903650315863191_n.jpg
 *      588646671_18296824948285790_9058279683534514786_n.jpeg
 *      652867251_18039106370561338_7048112563094137513_n.jpeg
 *
 * 2. From repo root (safdar-Portfolio): node scripts/optimize-about-images.mjs
 *
 * Outputs overwrite: public/about/photo-*.jpg
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const incoming = path.join(root, "public", "about", "_incoming");
const outDir = path.join(root, "public", "about");

const jobs = [
  ["WhatsApp_Image_2026-05-04_at_12_02_24_AM.jpeg", "photo-hero-desk-wide.jpg"],
  ["WhatsApp_Image_2026-05-04_at_12_02_43_AM.jpeg", "photo-cafe-laptop.jpg"],
  ["WhatsApp_Image_2026-05-04_at_12_33_37_AM.jpeg", "photo-cricket-action.jpg"],
  ["630084748_18379388308094567_1452903650315863191_n.jpg", "photo-biryani-bengaluru.jpg"],
  ["588646671_18296824948285790_9058279683534514786_n.jpeg", "photo-coorg-hills-you.jpg"],
  ["652867251_18039106370561338_7048112563094137513_n.jpeg", "photo-coorg-food.jpg"],
];

async function main() {
  if (!fs.existsSync(incoming)) {
    fs.mkdirSync(incoming, { recursive: true });
  }

  let ok = 0;
  for (const [srcName, destName] of jobs) {
    const srcPath = path.join(incoming, srcName);
    const destPath = path.join(outDir, destName);
    if (!fs.existsSync(srcPath)) {
      console.warn(`[skip] missing: ${path.relative(root, srcPath)}`);
      continue;
    }
    await sharp(srcPath)
      .rotate()
      .resize({ width: 1400, withoutEnlargement: true })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(destPath);
    console.log(`[ok] ${destName}`);
    ok += 1;
  }
  if (ok === 0) {
    console.error(
      "\nNo inputs found. Copy the 6 originals into public/about/_incoming/ with the exact names above, then re-run.\n"
    );
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
