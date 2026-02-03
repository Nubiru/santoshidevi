import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const SOURCE_DIR = '.development/images';
const OUTPUT_DIR = 'public/images';

async function optimizeImages() {
  // Ensure output directory exists
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  // Process Yoga Arcoíris cover (already webp, just resize for web)
  console.log('Processing: yoga-arcoiris.webp');
  await sharp(`${SOURCE_DIR}/IMG_20250908_105624_235.webp`)
    .resize(400, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(`${OUTPUT_DIR}/yoga-arcoiris.webp`);

  // Process community photo (4.3MB -> optimized webp)
  console.log('Processing: community.webp');
  await sharp(`${SOURCE_DIR}/IMG_20251004_160005.jpg`)
    .resize(800, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`${OUTPUT_DIR}/community.webp`);

  console.log('Images optimized successfully!');

  // Show file sizes
  const files = await fs.readdir(OUTPUT_DIR);
  for (const file of files) {
    if (file.endsWith('.webp') || file.endsWith('.jpg') || file.endsWith('.png')) {
      const stats = await fs.stat(`${OUTPUT_DIR}/${file}`);
      console.log(`  ${file}: ${(stats.size / 1024).toFixed(1)} KB`);
    }
  }
}

optimizeImages().catch(console.error);
