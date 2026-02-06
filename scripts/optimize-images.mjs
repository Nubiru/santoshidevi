import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const SOURCE_DIR = '.development/images';
const OUTPUT_DIR = 'public/images';

async function optimizeImages() {
  // Ensure output directory exists
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  console.log('=== Optimizing Santoshi Devi Images ===\n');

  // ========================================
  // VERO - Personal photos for Hero & About
  // ========================================
  const veroDir = `${SOURCE_DIR}/Vero -20260203T021520Z-3-001/Vero /`;

  // Portrait for Hero section (with pink shawl, friendly smile)
  console.log('Processing: vero-hero.webp');
  await sharp(`${veroDir}IMG_20251019_102524.jpg`)
    .resize(600, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(`${OUTPUT_DIR}/vero-hero.webp`);

  // Meditation pose for About section
  console.log('Processing: vero-meditation.webp');
  await sharp(`${veroDir}20240610_155326.jpg`)
    .resize(500, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(`${OUTPUT_DIR}/vero-meditation.webp`);

  // Nature/tree pose for About section
  console.log('Processing: vero-nature.webp');
  await sharp(`${veroDir}20240225_191421.jpg`)
    .resize(500, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(`${OUTPUT_DIR}/vero-nature.webp`);

  // Additional Vero photos
  console.log('Processing: vero-teaching.webp');
  await sharp(`${veroDir}20210406_165016.jpg`)
    .resize(500, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(`${OUTPUT_DIR}/vero-teaching.webp`);

  // ========================================
  // CLASSES - Studio & group class photos
  // ========================================
  const clasesDir = `${SOURCE_DIR}/Clases -20260203T021611Z-3-001/Clases /`;

  // Studio class with Santoshi Devi logo visible (great branding!)
  console.log('Processing: clase-estudio.webp');
  await sharp(`${clasesDir}IMG_20241106_101930.jpg`)
    .resize(800, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`${OUTPUT_DIR}/clase-estudio.webp`);

  // Child's pose class
  console.log('Processing: clase-childs-pose.webp');
  await sharp(`${clasesDir}IMG_20240924_170529.jpg`)
    .resize(800, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`${OUTPUT_DIR}/clase-childs-pose.webp`);

  // More class photos for variety
  console.log('Processing: clase-studio-2.webp');
  await sharp(`${clasesDir}IMG_20240801_152509.jpg`)
    .resize(800, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`${OUTPUT_DIR}/clase-studio-2.webp`);

  console.log('Processing: clase-studio-3.webp');
  await sharp(`${clasesDir}IMG_20241031_165221.jpg`)
    .resize(800, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`${OUTPUT_DIR}/clase-studio-3.webp`);

  // Online class screenshot
  console.log('Processing: clase-online.webp');
  await sharp(`${clasesDir}Screenshot_20210803-205740_Meet.jpg`)
    .resize(600, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`${OUTPUT_DIR}/clase-online.webp`);

  // Outdoor/nature class
  console.log('Processing: clase-outdoor.webp');
  await sharp(`${clasesDir}20210310_084416.jpg`)
    .resize(800, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`${OUTPUT_DIR}/clase-outdoor.webp`);

  // ========================================
  // YOGA EN DUPLAS - Partner yoga photos
  // ========================================
  const duplasDir = `${SOURCE_DIR}/Yoga en duplas -20260203T021440Z-3-001/Yoga en duplas /`;

  console.log('Processing: yoga-duplas-1.webp');
  await sharp(`${duplasDir}IMG_20250422_200313.jpg`)
    .resize(600, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`${OUTPUT_DIR}/yoga-duplas-1.webp`);

  console.log('Processing: yoga-duplas-2.webp');
  await sharp(`${duplasDir}IMG_20250423_161341.jpg`)
    .resize(600, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`${OUTPUT_DIR}/yoga-duplas-2.webp`);

  // ========================================
  // NEW VERO - Transparent PNGs + sky background
  // ========================================
  const newVeroDir = `.development/new/Vero -20260206T141216Z-1-001/Vero /`;

  // Vero meditation cutout (transparent bg)
  console.log('Processing: vero-cutout-meditation.webp');
  await sharp(`${newVeroDir}1_20260203_110256_0000.png`)
    .resize(500, null, { withoutEnlargement: true })
    .webp({ quality: 90 })
    .toFile(`${OUTPUT_DIR}/vero-cutout-meditation.webp`);

  // Vero portrait cutout (transparent bg - pink shawl)
  console.log('Processing: vero-cutout-portrait.webp');
  await sharp(`${newVeroDir}2_20260203_110256_0001.png`)
    .resize(500, null, { withoutEnlargement: true })
    .webp({ quality: 90 })
    .toFile(`${OUTPUT_DIR}/vero-cutout-portrait.webp`);

  // Vero with sky background
  console.log('Processing: vero-sky.webp');
  await sharp(`${newVeroDir}3_20260203_110256_0002.png`)
    .resize(500, null, { withoutEnlargement: true })
    .webp({ quality: 90 })
    .toFile(`${OUTPUT_DIR}/vero-sky.webp`);

  // ========================================
  // EBOOK LOGOS
  // ========================================
  const ebookDir = `.development/new/Logos ebook -20260206T141056Z-1-001/Logos ebook /`;

  console.log('Processing: logo-yoga-arcoiris.webp');
  await sharp(`${ebookDir}logo yoga arcoiris_.png`)
    .resize(400, null, { withoutEnlargement: true })
    .webp({ quality: 90 })
    .toFile(`${OUTPUT_DIR}/logo-yoga-arcoiris.webp`);

  console.log('Processing: logo-ciclo-femenino.webp');
  await sharp(`${ebookDir}logo Sintoniza con tu ciclo_.jpg`)
    .resize(400, null, { withoutEnlargement: true })
    .webp({ quality: 90 })
    .toFile(`${OUTPUT_DIR}/logo-ciclo-femenino.webp`);

  // ========================================
  // NEW - RETIRO Y CEREMONIAS
  // ========================================
  const ceremoniaDir = `.development/new/Retiro y ceremonias -20260206T163120Z-1-001/Retiro y ceremonias /`;

  // Outdoor yoga retreat in nature - stunning sunlight
  console.log('Processing: retiro-outdoor.webp');
  await sharp(`${ceremoniaDir}IMG_20250511_121839.jpg`)
    .resize(800, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`${OUTPUT_DIR}/retiro-outdoor.webp`);

  // Ceremony altar with candles and sacred objects
  console.log('Processing: ceremonia-altar.webp');
  await sharp(`${ceremoniaDir}IMG_20250614_151401.jpg`)
    .resize(800, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`${OUTPUT_DIR}/ceremonia-altar.webp`);

  // Women's circle - group photo with altar
  console.log('Processing: ceremonia-circulo.webp');
  await sharp(`${ceremoniaDir}IMG_20250614_164804.jpg`)
    .resize(800, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`${OUTPUT_DIR}/ceremonia-circulo.webp`);

  // Women's ceremony activity from above
  console.log('Processing: ceremonia-actividad.webp');
  await sharp(`${ceremoniaDir}IMG_20250614_161242.jpg`)
    .resize(800, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`${OUTPUT_DIR}/ceremonia-actividad.webp`);

  // ========================================
  // NEW - YOGA PARA DEPORTISTAS
  // ========================================
  const deportistasDir = `.development/new/Yoga para deportistas -20260206T163101Z-1-001/Yoga para deportistas /`;

  // Kids stretching on soccer field
  console.log('Processing: deportistas-cancha.webp');
  await sharp(`${deportistasDir}IMG_20251109_114725.jpg`)
    .resize(800, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`${OUTPUT_DIR}/deportistas-cancha.webp`);

  // Women's football team group photo
  console.log('Processing: deportistas-equipo.webp');
  await sharp(`${deportistasDir}IMG-20240927-WA0090.jpg`)
    .resize(800, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`${OUTPUT_DIR}/deportistas-equipo.webp`);

  // ========================================
  // NEW - YOGA EN DUPLAS (additional)
  // ========================================
  const newDuplasDir = `.development/new/Yoga en duplas -20260206T163147Z-1-001/Yoga en duplas /`;

  // Partner yoga backbend - beautiful pose
  console.log('Processing: yoga-duplas-3.webp');
  await sharp(`${newDuplasDir}20190720_143031.jpg`)
    .resize(600, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`${OUTPUT_DIR}/yoga-duplas-3.webp`);

  // ========================================
  // EXISTING IMAGES - Keep these
  // ========================================

  // Yoga Arcoíris cover
  console.log('Processing: yoga-arcoiris.webp');
  await sharp(`${SOURCE_DIR}/IMG_20250908_105624_235.webp`)
    .resize(400, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(`${OUTPUT_DIR}/yoga-arcoiris.webp`);

  // Community photo
  console.log('Processing: community.webp');
  await sharp(`${SOURCE_DIR}/IMG_20251004_160005.jpg`)
    .resize(800, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`${OUTPUT_DIR}/community.webp`);

  console.log('\n=== Optimization Complete ===\n');

  // Show file sizes
  const files = await fs.readdir(OUTPUT_DIR);
  let totalSize = 0;
  for (const file of files.sort()) {
    if (file.endsWith('.webp') || file.endsWith('.jpg') || file.endsWith('.png')) {
      const stats = await fs.stat(`${OUTPUT_DIR}/${file}`);
      totalSize += stats.size;
      console.log(`  ${file}: ${(stats.size / 1024).toFixed(1)} KB`);
    }
  }
  console.log(`\n  TOTAL: ${(totalSize / 1024).toFixed(1)} KB`);
}

optimizeImages().catch(console.error);
