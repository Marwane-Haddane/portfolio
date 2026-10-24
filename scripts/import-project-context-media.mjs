import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const sourceRoot = process.argv[2];
if (!sourceRoot) throw new Error('Pass the path to the dated project-context folder.');
const root = resolve(import.meta.dirname, '..');
const images = {
  'moru-desktop': ['MORU-PROJECT-GUIDE/images/01-desktop-design.png', 'Supplied desktop design reference'],
  'moru-waiting': ['MORU-PROJECT-GUIDE/images/03-waiting-for-answer.png', 'Supplied waiting-state design reference'],
  'orbit-pointer': ['Orbit-Project-Guide/images/02-pointer-current-preview.png', 'Implemented controller in Preview mode'],
  'orbit-tools': ['Orbit-Project-Guide/images/05-tools-current-preview.png', 'Implemented tools in Preview mode'],
  'slidelink-desktop': ['SlideLink-Project-Guide/Photos/Windows/03-paired-sharing-demo.png', 'Native Windows capture against test server'],
  'slidelink-trackpad': ['SlideLink-Project-Guide/Photos/Android/03-trackpad-with-screen-demo.png', 'Native Android emulator capture in demo session'],
  'slidelink-slides': ['SlideLink-Project-Guide/Photos/Android/04-slides.png', 'Native Android emulator capture in demo session'],
  'furniture-mobile-home': ['La Belle Maison Furniture App/mobile-app-reference/images/phone-home-final-readable-banner.png', 'Actual Android phone capture'],
  'furniture-mobile-collection': ['La Belle Maison Furniture App/mobile-app-reference/images/phone-collection-final.png', 'Actual Android phone capture'],
  'furniture-mobile-assistant': ['La Belle Maison Furniture App/mobile-app-reference/images/phone-assistant-english-final.png', 'Actual Android phone capture'],
  'barasalfa-app-home': ['Bara Salfa/ui/app-screen-previews/01-home.png', 'Flutter UI preview'],
};
const covers = new Set(['moru-desktop', 'orbit-pointer', 'slidelink-desktop', 'furniture-mobile-home']);
await mkdir(resolve(root, 'public/projects'), { recursive: true });
for (const [name, [file]] of Object.entries(images)) {
  for (const width of covers.has(name) ? [480, 960] : [960]) {
    const info = await sharp(resolve(sourceRoot, file)).rotate().resize({ width, height: 1800, fit: 'inside', withoutEnlargement: true }).webp({ quality: 80 }).toFile(resolve(root, `public/projects/${name}-${width}.webp`));
    console.log(`${name}-${width}.webp: ${info.width}×${info.height}, ${Math.round(info.size / 1024)} KB`);
  }
}
await writeFile(resolve(root, 'scripts/project-context-media.json'), JSON.stringify({ date: '2026-10-24', sourceFolder: '24-10 project gpt plus', images }, null, 2) + '\n');
