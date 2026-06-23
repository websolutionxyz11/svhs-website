import sharp from "sharp";
import { readdirSync } from "fs";
import path from "path";

const SRC_DIR = "./src/assets";
const files = readdirSync(SRC_DIR).filter((f) => /\.(jpg|jpeg|png)$/i.test(f));

for (const file of files) {
  const inputPath = path.join(SRC_DIR, file);
  const baseWebp = file.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  const outputPath = path.join(SRC_DIR, baseWebp);

  await sharp(inputPath)
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(outputPath);

  console.log(`✔ ${file} → ${path.basename(outputPath)}`);

  // Produce a 1200px hero-sized variant for large hero images (detect by name)
  if (/hero[-_]?campus/i.test(file)) {
    const output1200 = path.join(SRC_DIR, file.replace(/\.(jpg|jpeg|png)$/i, "-1200.webp"));
    await sharp(inputPath)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(output1200);
    console.log(`✔ ${file} → ${path.basename(output1200)}`);
  }
}

console.log("Done. Now update your imports to use the .webp files.");