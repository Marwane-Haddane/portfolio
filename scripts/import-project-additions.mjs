import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { resolve, join } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const originals = resolve(process.argv[2] || join(root, 'artifacts.local/project-additions-2026-10-26'));
const fleetScreens = resolve(process.argv[3] || 'C:/1Project/code_interst/ai/calude cli + mcp/hacktober/HACKTOBER/docs/readme/screens');
const sources = {
  'fleetsense-inspector': join(fleetScreens, 'inspector-t07.jpg'),
  'fleetsense-map': join(fleetScreens, 'fleet-map.jpg'),
  'fleetsense-fuel': join(fleetScreens, 'inspector-t12.jpg'),
  'feedia-home': join(originals, 'feedia-home.png'),
  'feedia-plan': join(originals, 'feedia-plan.png'),
  'feedia-voice': join(originals, 'feedia-voice.png'),
  'smart-home-hardware': join(originals, 'smart-home-hardware.jpeg'),
  'smart-home-dashboard': join(originals, 'smart-home-dashboard.jpeg'),
};
const output = join(root, 'public/projects');
await mkdir(output, { recursive: true });
for (const [name, source] of Object.entries(sources)) {
  await sharp(source).rotate()
    .resize({ width: 960, height: 1800, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 84, effort: 6 })
    .toFile(join(output, name + '-960.webp'));
}
console.log('Prepared eight original project captures for the galleries.');
