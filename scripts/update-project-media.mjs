import sharp from 'sharp';
import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const [rihlaCollage, mysoilCollage] = process.argv.slice(2);
if (!rihlaCollage || !mysoilCollage) throw new Error('Provide the generated RIHLA and MySoil image paths.');
const sources = {
  'vart-console': resolve(root, 'artifacts.local/vart-github/the stat of the robot connected or not.JPG'),
  'vart-smart-home': resolve(root, 'artifacts.local/vart-github/project1.jpeg'),
  'vart-hardware': resolve(root, 'artifacts.local/vart-github/project2.jpg'),
  'vart-voice': resolve(root, 'artifacts.local/vart-github/the part of the engagement by voice or txt with the robot.JPG'),
  'rihla-showcase': rihlaCollage,
  'mysoil-showcase': mysoilCollage,
  'rihla-explore': 'C:/1Project/code_interst/ai/calude cli + mcp/travel application/rihla-mobile/artifacts/android-explore.png',
  'rihla-trip': 'C:/1Project/code_interst/ai/calude cli + mcp/travel application/rihla-mobile/artifacts/android-trip.png',
  'rihla-map': 'C:/1Project/code_interst/ai/calude cli + mcp/travel application/rihla-mobile/artifacts/android-map-native.png',
  'mysoil-dashboard': 'C:/1Project/agritech/mysoil_flutter/test_device_home.png',
  'mysoil-map': 'C:/1Project/agritech/mysoil_flutter/test_device_carte_live.png',
  'mysoil-market': 'C:/1Project/agritech/mysoil_flutter/test_device_souk_live.png',
};
await mkdir(resolve(root, 'artifacts.local/generated-project-media'), {recursive:true});
await copyFile(rihlaCollage, resolve(root, 'artifacts.local/generated-project-media/rihla-showcase.png'));
await copyFile(mysoilCollage, resolve(root, 'artifacts.local/generated-project-media/mysoil-showcase.png'));
for (const [name, source] of Object.entries(sources)) {
  const widths = name.endsWith('showcase') || name === 'vart-console' ? [480, 960] : [960];
  for (const width of widths) {
    const info = await sharp(source).rotate().resize({width, height:1600, fit:'inside', withoutEnlargement:true}).webp({quality:82}).toFile(resolve(root, `public/projects/${name}-${width}.webp`));
    console.log(`${name}-${width}.webp: ${info.width}×${info.height}, ${Math.round(info.size / 1024)} KB`);
  }
}
await writeFile(resolve(root, 'artifacts.local/project-media-sources.json'), JSON.stringify(sources, null, 2));
