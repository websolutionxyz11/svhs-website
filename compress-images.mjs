import sharp from "sharp";
import { readdirSync, statSync } from "fs";
import path from "path";

const SRC_DIR = "./src/assets";

function collectImageFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return collectImageFiles(fullPath);
    }
    return /\.(jpg|jpeg|png)$/i.test(entry.name) ? [fullPath] : [];
  });
}

const files = collectImageFiles(SRC_DIR);

for (const inputPath of files) {
  const relativePath = path.relative(SRC_DIR, inputPath);
  const dir = path.dirname(inputPath);
  const basename = path.basename(inputPath, path.extname(inputPath));
  const webpOutput = path.join(dir, `${basename}.webp`);
  const avifOutput = path.join(dir, `${basename}.avif`);

  const transformer = sharp(inputPath).resize({ width: 1920, withoutEnlargement: true });

  await transformer.clone().webp({ quality: 75 }).toFile(webpOutput);
  console.log(`✔ ${relativePath} → ${path.relative(SRC_DIR, webpOutput)}`);

  await transformer.clone().avif({ quality: 60 }).toFile(avifOutput);
  console.log(`✔ ${relativePath} → ${path.relative(SRC_DIR, avifOutput)}`);

  if (/hero[-_]?campus/i.test(basename)) {
    const output1200Webp = path.join(dir, `${basename}-1200.webp`);
    await sharp(inputPath)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(output1200Webp);
    console.log(`✔ ${relativePath} → ${path.relative(SRC_DIR, output1200Webp)}`);
  }
}

console.log("Done. Optimized images are available as .webp and .avif variants.");