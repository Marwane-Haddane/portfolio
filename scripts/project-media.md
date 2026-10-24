# Project image provenance

The existing portfolio layout is retained. Cover assets use fresh filenames so visitors do not keep a cached version of the previous images.

## VART

Source: https://github.com/Marwane-Haddane/vart/tree/main/images

- Cover: `the stat of the robot connected or not.JPG`, an actual web-console screenshot.
- Gallery: `project1.jpeg`, `project2.jpg`, and the voice/text interaction panel from the repository.
- The robot pictured in the console is its interface avatar; this does not claim a completed physical robot body.
- The checked code implements FastAPI/WebSockets, serial telemetry, keypad authentication, LED/LCD commands, and Groq-based Whisper/LLaMA inference. The offline RAG, MCP integration, and ESP-NOW mesh described in the README are not presented as completed capabilities.

## App collages

Mode: built-in `image_gen` tool, compositing from original screenshots. These are presentation graphics. The unmodified app captures remain in each project gallery.

Final website assets:

- `public/projects/rihla-showcase-480.webp` and `rihla-showcase-960.webp`
- `public/projects/mysoil-showcase-480.webp` and `mysoil-showcase-960.webp`

High-resolution generation outputs were also copied to `artifacts.local/generated-project-media/`. `scripts/update-project-media.mjs` compresses these outputs and the original gallery images for the website.

### RIHLA prompt

Use case: compositing. Asset type: landscape portfolio project cover, 16:9. Create an elegant presentation collage of the actual RIHLA travel app using the three supplied screenshots as the screen contents. Image 1 is Explore, image 2 is My Trip, image 3 is the actual map route. Keep their original UI, wording, photographs, icons, colours, data and layout intact; do not invent app features or redesign any screen. Show three separate upright smartphone-like panels with very thin dark emerald rounded frames, a larger center Explore panel and slightly smaller My Trip and full-screen Map panels to either side. All three panels completely visible, fronts almost flat to camera so UI is legible, minimal overlap. Warm ivory background matching the app, a faint restrained emerald glow and soft natural shadows. No extra text, slogans, badges or decorations outside the screenshots, no people or hands. The only modification inside screenshots may be removal of operating-system status or navigation bars. Keep everything in the central 74% of image height with generous top and bottom margins, so a 16:7 website crop does not cut any screen. Polished, calm, professional; the real app screens should be the focus.

Inputs: `android-explore.png`, `android-trip.png`, `android-map-native.png` from the RIHLA Android artifacts.

### MySoil prompt

Use case: compositing. Asset type: landscape portfolio project cover, 16:9. Create an elegant presentation collage of the actual MySoil agricultural app using the supplied screenshots as unchanged screen contents. Image 1 is the weather/farm dashboard, image 2 is the satellite parcel map, image 3 is the agricultural marketplace. Preserve their original UI, exact French wording, icons, values, satellite imagery and layout; do not invent features or redesign the interface. Remove only the Android operating-system notification/status strip and the black system navigation bar, retaining the app's own bottom navigation. Show three upright smartphone-like panels with very thin dark green rounded frames: larger center dashboard and slightly smaller satellite map and marketplace to either side. Panels completely visible, almost flat to camera so UI is legible, minimal overlap. Pale sage/ivory studio background, restrained green glow and soft natural shadows. No text, slogans, badges, plants or objects outside the screenshots, no people or hands. Keep the panels within the central 74% of image height with generous top and bottom margins so a 16:7 website crop does not cut them. Polished, calm, professional portfolio graphic, with these real app screens as the focus.

Inputs: `test_device_home.png`, `test_device_carte_live.png`, `test_device_souk_live.png` from the MySoil Flutter project.
