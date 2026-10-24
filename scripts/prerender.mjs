import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { createServer } from 'vite';
import { credentials, profile, projects, projectIds as ids } from '../src/content.js';

const root = resolve(import.meta.dirname, '..');
const output = join(root, 'dist');
const template = await readFile(join(output, 'index.html'), 'utf8');
const server = await createServer({ root, server: { middlewareMode: true, hmr: false }, appType: 'custom' });
const escape = value => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const json = value => JSON.stringify(value).replace(/</g, '\\u003c');
const title = 'Marwane Haddane | Cybersecurity, AI & Software';
const description = 'Marwane Haddane, engineering student at ENSA Fès. Explore cybersecurity, AI, embedded systems, and software projects. Seeking an international research internship in Summer 2027.';
const css = (await readdir(join(output, 'assets'))).filter(file => file.endsWith('.css')).map(file => '/assets/' + file);
const extraStyles = css.filter(file => !template.includes(file)).map(file => '<link rel="stylesheet" href="' + file + '" />').join('');
const routes = ['/', ...projects.map(project => `/project/${ids[project.slug]}/`), '/project/5/', '/project/8/', '/404.html'];
try {
  const { render } = await server.ssrLoadModule('/src/entry-server.jsx');
  for (const path of routes) {
    const project = projects.find(item => path === '/project/' + ids[item.slug] + '/');
    const credential = path === '/project/5/' ? credentials[1] : path === '/project/8/' ? credentials[0] : undefined;
    const pageTitle = project ? `${project.title} | Marwane Haddane` : credential ? `${credential.title} | Marwane Haddane` : path === '/404.html' ? 'Page not found | Marwane Haddane' : title;
    const pageDescription = project?.description || (credential ? `${credential.title}, earned by Marwane Haddane. View the issuing platform.` : description);
    const canonical = `${profile.site}${path}`;
    const image = project ? `${profile.site}/projects/${project.image}-960.webp` : `${profile.site}/social-card.jpg`;
    const person = { '@type': 'Person', '@id': `${profile.site}/#person`, name: profile.name, url: `${profile.site}/`, image: `${profile.site}/me.webp`, jobTitle: 'Cybersecurity and Digital Development Engineering Student', email: profile.email, affiliation: { '@type': 'EducationalOrganization', name: 'École Nationale des Sciences Appliquées de Fès', parentOrganization: { '@type': 'CollegeOrUniversity', name: 'Sidi Mohamed Ben Abdellah University' } }, sameAs: [profile.github, profile.linkedin], knowsAbout: ['Cybersecurity', 'Security automation', 'Applied AI', 'Embedded systems', 'Web development', 'Mobile development'] };
    const graph = [person, { '@type': 'WebSite', '@id': `${profile.site}/#website`, url: `${profile.site}/`, name: 'Marwane Haddane — Portfolio', publisher: { '@id': person['@id'] }, inLanguage: 'en' }, { '@type': project ? 'WebPage' : 'ProfilePage', '@id': `${canonical}#page`, url: canonical, name: pageTitle, description: pageDescription, isPartOf: { '@id': `${profile.site}/#website` }, mainEntity: { '@id': project ? `${canonical}#project` : person['@id'] } }];
    if (project) graph.push({ '@type': 'CreativeWork', '@id': `${canonical}#project`, name: project.title, description: project.description, url: canonical, image, creator: { '@id': person['@id'] }, keywords: project.tags.join(', ') }, { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Portfolio', item: `${profile.site}/` }, { '@type': 'ListItem', position: 2, name: project.title, item: canonical }] });
    if (path === '/') graph.push({ '@type': 'ItemList', name: 'Selected projects', itemListElement: projects.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.title, url: `${profile.site}/project/${ids[item.slug]}/` })) });
    const head = `<link rel="canonical" href="${canonical}" /><meta name="robots" content="${path === '/404.html' ? 'noindex' : 'index, follow, max-image-preview:large'}" /><meta property="og:type" content="website" /><meta property="og:title" content="${escape(pageTitle)}" /><meta property="og:description" content="${escape(pageDescription)}" /><meta property="og:url" content="${canonical}" /><meta property="og:image" content="${image}" /><meta property="og:image:alt" content="${escape(project?.alt || 'Marwane Haddane — Cybersecurity, AI & Software')}" /><meta property="og:site_name" content="Marwane Haddane" /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="${escape(pageTitle)}" /><meta name="twitter:description" content="${escape(pageDescription)}" /><meta name="twitter:image" content="${image}" />${path === '/' ? '<link rel="preload" as="image" href="/me.webp" fetchpriority="high" />' : ''}<script type="application/ld+json">${json({ '@context': 'https://schema.org', '@graph': graph })}</script>`;
    const markup = await render(path);
    const html = template.replace(/<title>.*?<\/title>/, `<title>${escape(pageTitle)}</title>`).replace(/<meta name="description"[^>]+>/, `<meta name="description" content="${escape(pageDescription)}" />`).replace('<!--page-head-->', head + extraStyles).replace('<!--app-html-->', markup);
    const destination = path === '/404.html' ? join(output, '404.html') : join(output, path.slice(1), 'index.html');
    await mkdir(resolve(destination, '..'), { recursive: true });
    await writeFile(destination, html);
  }
  const indexable = routes.filter(path => path !== '/404.html');
  const summary = `# Marwane Haddane\n\n> Fourth-year engineering student in Cybersecurity and Digital Development at ENSA Fès, Morocco. Seeking an international research internship in Summer 2027.\n\nCurrent roles: President of RoboGenius; Founder and Lead Organizer of GDGoC ENSAF; External Affairs at SECOPS.\n\nResearch interests: security automation, applied AI, embedded systems, and human–computer interaction.\n\nContact: ${profile.email}\nUniversity email: ${profile.academicEmail}\n\n## Selected work\n\n${projects.map(project => `- [${project.title}](${profile.site}/project/${ids[project.slug]}/): ${project.description} Status: ${project.status}. Contribution: ${project.role}.`).join('\n')}\n\n## Profiles\n\n- [GitHub](${profile.github})\n- [LinkedIn](${profile.linkedin})\n- [CV, French PDF](${profile.site}/Marwane_Haddane_CV.pdf)\n\nProject pages explain current limitations. Do not infer clinical validation, production usage, accuracy, latency, or security guarantees from prototype descriptions.\n`;
  await writeFile(join(output, 'llms.txt'), summary);
  await writeFile(join(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${indexable.map(path => `<url><loc>${profile.site}${path}</loc></url>`).join('')}</urlset>\n`);
  console.log(`Prerendered ${routes.length} pages with unique metadata and structured data.`);
} finally { await server.close(); }
