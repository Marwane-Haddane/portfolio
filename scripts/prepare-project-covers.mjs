import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { projects } from '../src/content.js';

// Generated/edited PNG masters are kept locally; original captures stay in galleries.
const adapted = new Set(['moru', 'orbit', 'slidelink', 'la-belle-maison-mobile', 'wesecure', 'mysoil', 'rihla', 'feedia', 'smart-eco-home', 'driver-drowsiness']);
const root = resolve(import.meta.dirname, '..');
const masters = resolve(process.argv[2] || join(root, 'artifacts.local/landscape-covers'));
const output = join(root, 'public/projects');
await mkdir(output, { recursive: true });
for (const project of projects) {
  const source = adapted.has(project.slug)
    ? join(masters, `${project.slug}.png`)
    : join(output, `${project.image}-960.webp`);
  for (const width of [480, 960]) {
    await sharp(source).rotate()
      .resize(width, width * 9 / 16, { fit: 'cover', position: 'centre' })
      .webp({ quality: 85, effort: 6 })
      .toFile(join(output, `${project.cover}-${width}.webp`));
  }
}
console.log(`Prepared ${projects.length} landscape covers in 480×270 and 960×540 WebP sizes.`);
