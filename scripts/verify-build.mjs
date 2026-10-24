import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { join } from 'node:path';
import { projects, projectIds as ids } from '../src/content.js';
const output = join(import.meta.dirname, '../dist');
assert.equal(new Set(projects.map(project => ids[project.slug])).size, projects.length, 'Project routes are unique');
for (const project of projects) assert(Number.isInteger(ids[project.slug]), `${project.title}: valid project route`);
const pages = ['/', ...projects.map(project => `/project/${ids[project.slug]}/`), '/project/5/', '/project/8/'];
for (const path of pages) {
  const html = await readFile(join(output, path, 'index.html'), 'utf8');
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${path}: one main heading`);
  assert(!html.includes('<!--app-html-->'), `${path}: rendered content`);
  assert(html.includes(`rel="canonical" href="https://marwane-haddane.web.app${path}"`), `${path}: correct canonical`);
  const data = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
  assert(data['@graph'].length >= 3, `${path}: structured data`);
  for (const match of html.matchAll(/(?:src|href)="(\/[^"#?]*)/g)) {
    const url = match[1];
    if (url === '/') continue;
    await access(join(output, url.endsWith('/') ? `${url}index.html` : url));
  }
}
const home = await readFile(join(output, 'index.html'), 'utf8');
for (const project of projects) assert(home.includes(project.title), `Home includes ${project.title}`);
assert(home.includes('Summer 2027'));
assert(home.includes('President of RoboGenius'));
assert(!home.includes('AI hub'));
assert((await readFile(join(output, '404.html'), 'utf8')).includes('content="noindex"'));
console.log(`Verified ${pages.length} prerendered pages, headings, metadata, structured data, and all local links/assets.`);
