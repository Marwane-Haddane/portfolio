# Marwane Haddane — Portfolio

Personal portfolio for cybersecurity, AI, desktop, embedded, and mobile projects. Built with React and Vite, with prerendered project pages for search engines and link previews.

## Local development

```sh
npm ci
npm run dev
```

## Production checks

```sh
npm run build
npm run verify
npm run lint
npm run preview -- --host 127.0.0.1 --port 4178
```

The build produces the homepage, 12 project pages, two certificate pages, and a custom 404. It also generates `dist/sitemap.xml` and `dist/llms.txt`. Verification checks rendered content, unique routes, headings, canonical URLs, structured data, and local asset links. The original Hyperspeed component has four existing React Compiler warnings; lint has no errors.

## Updating projects

Edit `src/content.js`; assign each project a stable numeric route in `projectIds`. The grid, detail pages, sitemap, and structured data share this catalogue. Preserve existing route IDs.

Project images live in `public/projects/`. Covers have 480px and 960px WebP versions; supporting gallery images load lazily. The October 24 additions use selected supplied screenshots, not newly generated UI. Moru design references, preview modes, and test captures are identified in image descriptions and visible detail-page captions.

`scripts/project-context-media.json` records the selected images and their source paths relative to the supplied context folder. To regenerate those compressed copies:

```sh
node scripts/import-project-context-media.mjs "PATH_TO/24-10 project gpt plus"
```

See `scripts/project-media.md` for earlier VART and app-collage provenance.

## Hosting

Firebase Hosting serves `dist/` for project `marwane-haddane`. Deploy only when requested:

```sh
firebase deploy --only hosting --project marwane-haddane
```

Local captures, audit reports, Firebase caches, and environment files are excluded from Git. The portfolio uses EmailJS for the contact form; tests should not send real email.
