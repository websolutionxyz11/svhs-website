import sharp from "sharp";
import { readdirSync } from "fs";
import path from "path";

const SRC_DIR = "./src/assets";
const files = readdirSync(SRC_DIR).filter((f) => /\.(jpg|jpeg|png)$/i.test(f));

for (const file of files) {
  const inputPath = path.join(SRC_DIR, file);
  const outputPath = path.join(
    SRC_DIR,
    file.replace(/\.(jpg|jpeg|png)$/i, ".webp")
  );

  await sharp(inputPath)
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(outputPath);

  console.log(`✔ ${file} → ${path.basename(outputPath)}`);
}

console.log("Done. Now update your imports to use the .webp files.");