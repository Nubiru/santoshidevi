import sharp from 'sharp';
import { promises as fs } from 'fs';

const DEV_DIR = '.development';
const SOURCE_DIR = '.development/images';
const NEW_DIR = '.development/new';
const OUTPUT_DIR = 'public/images';

const veroDir = `${SOURCE_DIR}/Vero -20260203T021520Z-3-001/Vero /`;
const clasesDir = `${SOURCE_DIR}/Clases -20260203T021611Z-3-001/Clases /`;
const duplasDir = `${SOURCE_DIR}/Yoga en duplas -20260203T021440Z-3-001/Yoga en duplas /`;
const newVeroDir = `${NEW_DIR}/Vero -20260206T141216Z-1-001/Vero /`;
const ebookDir = `${NEW_DIR}/Logos ebook -20260206T141056Z-1-001/Logos ebook /`;
const ceremoniaDir = `${NEW_DIR}/Retiro y ceremonias -20260206T163120Z-1-001/Retiro y ceremonias /`;
const deportistasDir = `${NEW_DIR}/Yoga para deportistas -20260206T163101Z-1-001/Yoga para deportistas /`;
const newDuplasDir = `${NEW_DIR}/Yoga en duplas -20260206T163147Z-1-001/Yoga en duplas /`;

// Images the site currently references. Only these are written to public/images.
// Note: logo-nav.webp and logo-large.webp are hand-made brand assets, not
// generated here — don't delete them expecting this script to bring them back.
//
// `extract` (optional) crops the source before resizing, via sharp's extract().
// `trim` (optional) strips uniform/transparent border padding first.
const SITE_IMAGES = [
  // Brand logo. The source is a 1024x1024 canvas whose artwork is only 576x567 —
  // ~45% of the height is transparent padding, which pushed the hero CTA below
  // the fold on mobile. Trim it so CSS height == visible logo height.
  { src: `${NEW_DIR}/logo sin fondo .png`, out: 'logo-large.webp', width: 576, quality: 90, trim: true },
  // Hero portrait — Vero's profile photo (moon phases, lavender palette)
  { src: `${DEV_DIR}/foto perfil .png`, out: 'vero-hero.webp', width: 600, quality: 85 },
  // Ebook covers. The Yoga Arcoíris file is a screenshot taken from a scrolling
  // document and includes the top sliver of the following page; rows 958+ are
  // that bleed-through, so crop to 958 before resizing.
  {
    src: `${DEV_DIR}/tapa yoga arcoiris_.jpg`,
    out: 'tapa-yoga-arcoiris.webp',
    width: 600,
    quality: 85,
    extract: { left: 0, top: 0, width: 1002, height: 958 }
  },
  { src: `${DEV_DIR}/tapa ebook sintoniza_.png`, out: 'tapa-ciclo-femenino.webp', width: 600, quality: 85 }
];

// Source photos available but not used on the site today. Their previously
// generated .webp files were moved to .development/unused-images/.
// To bring one back, move its entry up into SITE_IMAGES and re-run.
const ARCHIVED_IMAGES = [
  // Vero
  { src: `${veroDir}IMG_20251019_102524.jpg`, out: 'vero-hero-old.webp', width: 600, quality: 85 },
  { src: `${veroDir}20240610_155326.jpg`, out: 'vero-meditation.webp', width: 500, quality: 85 },
  { src: `${veroDir}20240225_191421.jpg`, out: 'vero-nature.webp', width: 500, quality: 85 },
  { src: `${veroDir}20210406_165016.jpg`, out: 'vero-teaching.webp', width: 500, quality: 85 },
  { src: `${newVeroDir}1_20260203_110256_0000.png`, out: 'vero-cutout-meditation.webp', width: 500, quality: 90 },
  { src: `${newVeroDir}2_20260203_110256_0001.png`, out: 'vero-cutout-portrait.webp', width: 500, quality: 90 },
  { src: `${newVeroDir}3_20260203_110256_0002.png`, out: 'vero-sky.webp', width: 500, quality: 90 },
  // Clases (studio class below shows the Santoshi Devi logo — good for branding)
  { src: `${clasesDir}IMG_20241106_101930.jpg`, out: 'clase-estudio.webp', width: 800, quality: 80 },
  { src: `${clasesDir}IMG_20240924_170529.jpg`, out: 'clase-childs-pose.webp', width: 800, quality: 80 },
  { src: `${clasesDir}IMG_20240801_152509.jpg`, out: 'clase-studio-2.webp', width: 800, quality: 80 },
  { src: `${clasesDir}IMG_20241031_165221.jpg`, out: 'clase-studio-3.webp', width: 800, quality: 80 },
  { src: `${clasesDir}Screenshot_20210803-205740_Meet.jpg`, out: 'clase-online.webp', width: 600, quality: 80 },
  { src: `${clasesDir}20210310_084416.jpg`, out: 'clase-outdoor.webp', width: 800, quality: 80 },
  // Yoga en duplas
  { src: `${duplasDir}IMG_20250422_200313.jpg`, out: 'yoga-duplas-1.webp', width: 600, quality: 80 },
  { src: `${duplasDir}IMG_20250423_161341.jpg`, out: 'yoga-duplas-2.webp', width: 600, quality: 80 },
  { src: `${newDuplasDir}20190720_143031.jpg`, out: 'yoga-duplas-3.webp', width: 600, quality: 80 },
  // Retiro y ceremonias
  { src: `${ceremoniaDir}IMG_20250511_121839.jpg`, out: 'retiro-outdoor.webp', width: 800, quality: 80 },
  { src: `${ceremoniaDir}IMG_20250614_151401.jpg`, out: 'ceremonia-altar.webp', width: 800, quality: 80 },
  { src: `${ceremoniaDir}IMG_20250614_164804.jpg`, out: 'ceremonia-circulo.webp', width: 800, quality: 80 },
  { src: `${ceremoniaDir}IMG_20250614_161242.jpg`, out: 'ceremonia-actividad.webp', width: 800, quality: 80 },
  // Yoga para deportistas
  { src: `${deportistasDir}IMG_20251109_114725.jpg`, out: 'deportistas-cancha.webp', width: 800, quality: 80 },
  { src: `${deportistasDir}IMG-20240927-WA0090.jpg`, out: 'deportistas-equipo.webp', width: 800, quality: 80 },
  // Varios
  { src: `${SOURCE_DIR}/IMG_20250908_105624_235.webp`, out: 'yoga-arcoiris.webp', width: 400, quality: 85 },
  { src: `${SOURCE_DIR}/IMG_20251004_160005.jpg`, out: 'community.webp', width: 800, quality: 80 },
  // Superseded ebook logos, replaced by the full covers in SITE_IMAGES
  { src: `${ebookDir}logo yoga arcoiris_.png`, out: 'logo-yoga-arcoiris.webp', width: 400, quality: 90 },
  { src: `${ebookDir}logo Sintoniza con tu ciclo_.jpg`, out: 'logo-ciclo-femenino.webp', width: 400, quality: 90 }
];

async function optimizeImages() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  console.log('=== Optimizing Santoshi Devi Images ===\n');

  for (const { src, out, width, quality, extract, trim } of SITE_IMAGES) {
    console.log(`Processing: ${out}`);
    const pipeline = sharp(src);
    if (extract) pipeline.extract(extract);
    if (trim) pipeline.trim({ threshold: 10 });
    await pipeline
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality })
      .toFile(`${OUTPUT_DIR}/${out}`);
  }

  console.log(
    `\n=== Done. ${ARCHIVED_IMAGES.length} archived sources skipped (see ARCHIVED_IMAGES) ===\n`
  );

  const files = await fs.readdir(OUTPUT_DIR);
  let totalSize = 0;
  for (const file of files.sort()) {
    if (/\.(webp|jpg|png)$/.test(file)) {
      const stats = await fs.stat(`${OUTPUT_DIR}/${file}`);
      totalSize += stats.size;
      console.log(`  ${file}: ${(stats.size / 1024).toFixed(1)} KB`);
    }
  }
  console.log(`\n  TOTAL: ${(totalSize / 1024).toFixed(1)} KB`);
}

optimizeImages().catch(console.error);
