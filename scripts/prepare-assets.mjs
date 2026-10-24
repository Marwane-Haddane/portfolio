import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
const root = resolve(import.meta.dirname, '..');
const sources = {
  wesecure: 'C:/1Project/code_interst/certif/cs50/finale/workflow n8n & api/platform.png',
  vart: 'C:/1Project/some robots/prj/assisstant by esp/circuit.png',
  mysoil: 'C:/1Project/agritech/mysoil_flutter/test_device_home.png',
  rihla: 'C:/1Project/code_interst/ai/calude cli + mcp/travel application/rihla-mobile/artifacts/android-explore.png',
  memoria: resolve(root, 'artifacts.local/memoria.jpg'),
  barasalfa: resolve(root, 'artifacts.local/barasalfa.jpg'),
  furniture: resolve(root, 'artifacts.local/furniture.jpg'),
  robogenius: resolve(root, 'artifacts.local/robogenius.jpg'),
};
await mkdir(resolve(root, 'public/projects'), { recursive: true });
for (const [name, path] of Object.entries(sources)) {
  for (const width of [480, 960]) {
    await sharp(path).rotate().resize({ width, height: 1100, fit: 'inside', withoutEnlargement: true }).webp({ quality: 80 }).toFile(resolve(root, `public/projects/${name}-${width}.webp`));
  }
}
await sharp(resolve(root, 'public/me.webp')).resize(620, 760, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).webp({ quality: 84 }).toFile(resolve(root, 'public/portrait.webp'));
const card = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#0d0b12"/><rect x="55" y="55" width="1090" height="520" rx="22" fill="#191222" stroke="#56416a"/><text x="90" y="125" font-family="sans-serif" font-size="22" fill="#c7a7f6">CYBERSECURITY · APPLIED AI · SOFTWARE</text><text x="90" y="252" font-family="sans-serif" font-weight="bold" font-size="76" fill="#f3f0fa">Marwane</text><text x="90" y="343" font-family="sans-serif" font-weight="bold" font-size="76" fill="#f3f0fa">Haddane.</text><text x="90" y="428" font-family="sans-serif" font-size="25" fill="#cfc4dc">Engineering student at ENSA Fès, Morocco</text><text x="90" y="490" font-family="sans-serif" font-size="23" fill="#c7a7f6">Seeking a research internship · Summer 2027</text><text x="90" y="545" font-family="sans-serif" font-size="19" fill="#aaa4b8">marwane-haddane.web.app</text></svg>`;
const portrait = await sharp(resolve(root, 'public/portrait.webp')).resize(390, 510, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
await sharp(Buffer.from(card)).composite([{ input: portrait, left: 760, top: 65 }]).jpeg({ quality: 85 }).toFile(resolve(root, 'public/social-card.jpg'));
await writeFile(resolve(root, 'artifacts.local/asset-sources.json'), JSON.stringify(sources, null, 2));
console.log('Prepared 16 WebP project images, portrait, and social preview.');
