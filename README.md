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

The build produces the homepage, 16 project pages, two certificate pages, and a custom 404. It also generates `dist/sitemap.xml` and `dist/llms.txt`. Verification checks rendered content, unique routes, headings, canonical URLs, structured data, and local asset links. The original Hyperspeed component has four existing React Compiler warnings; lint has no errors.

## Updating projects

Edit `src/content.js`; assign each project a stable numeric route in `projectIds`. The grid, detail pages, sitemap, and structured data share this catalogue. Preserve existing route IDs.

Project images live in `public/projects/`. All 16 covers have exact 16:9 WebP versions (480×270 and 960×540), selected responsively by the browser. Nine covers adapt source imagery into landscape using image generation; six retain existing landscape screenshots. Driver Drowsiness Detection uses a clearly labelled concept illustration. These presentation edits introduce no additional app features. The unmodified screenshots remain in the galleries at their natural proportions. Moru design references, preview modes, and test captures are identified in visible detail-page captions.

`scripts/project-context-media.json` records the selected images and their source paths relative to the supplied context folder. To regenerate those compressed copies:

```sh
node scripts/import-project-context-media.mjs "PATH_TO/24-10 project gpt plus"
```

See `scripts/project-media.md` for earlier VART and app-collage provenance. `scripts/project-additions-2026-10-26.json` records sources and prompts for FleetSense, Feedia, Driver Drowsiness Detection, and Smart Eco Home; `scripts/import-project-additions.mjs` compresses their original gallery captures.

The current covers supersede the earlier phone-frame collages. See `scripts/landscape-cover-prompts.json` for the built-in image generation prompts and sources. To re-export the covers from saved PNG masters named by project slug:

```sh
node scripts/prepare-project-covers.mjs "PATH_TO/landscape-covers"
```

## Hosting

Firebase Hosting serves `dist/` for project `marwane-haddane`. Deploy only when requested:

```sh
firebase deploy --only hosting --project marwane-haddane
```

Local captures, audit reports, Firebase caches, and environment files are excluded from Git. The portfolio uses EmailJS for the contact form; tests should not send real email.
