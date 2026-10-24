export const profile = {
  name: 'Marwane Haddane', email: 'marwanehaddane5@gmail.com', academicEmail: 'marwane.haddane@usmba.ac.ma',
  github: 'https://github.com/Marwane-Haddane', linkedin: 'https://www.linkedin.com/in/marwane-haddane/', site: 'https://marwane-haddane.web.app',
};
export const categories = ['All work', 'Cybersecurity', 'AI & embedded', 'Web & mobile'];
export const projects = [
  {
    slug: 'wesecure', legacyId: 1, title: 'WeSecure', category: 'Cybersecurity', subtitle: 'Security workflows, connected.', status: 'Working prototype', year: '2026',
    description: 'A Flask platform that brings web security checks, AI-assisted phishing classification, and cryptography tools into one workflow.',
    role: 'Creator & full-stack developer', tags: ['Python', 'Flask', 'n8n', 'LLaMA'], image: 'wesecure', alt: 'Actual WeSecure interface with crypto, scan, and email-classifier tools', caption: 'Screenshot from the project repository',
    github: 'https://github.com/Marwane-Haddane/WeSecure',
    problem: 'Security checks often involve disconnected tools. I wanted one interface for exploring web scanning, email triage, and cryptographic operations.',
    built: ['Built the Flask application and SQLite-backed workflows.', 'Connected URL analysis and report generation through n8n.', 'Integrated LLaMA-based email classification and a cryptography sandbox.'],
    relevance: 'Security automation, evaluating AI-assisted triage, and reproducible testing of web systems.',
    limitation: 'An educational prototype. Classifier outputs need human review; accuracy and latency are not independently benchmarked here.',
  },
  {
    slug: 'vart', title: 'VART', category: 'AI & embedded', subtitle: 'From voice to physical action.', status: 'Hardware prototype', year: '2026',
    description: 'An ESP32 console connecting voice commands, sensor telemetry, and physical controls through a Python backend.',
    role: 'Hardware & software developer', tags: ['ESP32', 'FastAPI', 'WebSockets', 'UART'], image: 'vart-console', imageFit: 'contain', alt: 'VART status console screenshot from its GitHub repository', caption: 'Actual console interface from the project repository',
    gallery: ['vart-smart-home', 'vart-hardware', 'vart-voice'], galleryFit: 'contain',
    galleryAlt: ['Smart home hardware model photographed for the VART repository', 'ESP32 and sensor wiring inside the project hardware model', 'VART voice and text interaction panel'],
    github: 'https://github.com/Marwane-Haddane/VART',
    problem: 'A conversational interface needs a reliable path from a spoken instruction to a hardware command, while sensor data flows back to the browser.',
    built: ['Implemented FastAPI WebSockets and a serial gateway.', 'Programmed ESP32 sensor telemetry, RGB outputs, and LCD states.', 'Integrated cloud Whisper transcription and LLaMA command interpretation.'],
    relevance: 'Human–robot interaction, embedded communication, and the boundary between AI decisions and physical control.',
    limitation: 'The current voice pipeline uses cloud inference. Fully offline operation and a wireless mesh remain future work.',
  },
  {
    slug: 'memoria', legacyId: 7, title: 'Memoria', category: 'AI & embedded', subtitle: 'A companion at the edge.', status: 'Prototype + live website', year: '2025–2026',
    description: 'A team-built assistive AI prototype combining local LLM interaction, computer vision, and a React monitoring interface.',
    role: 'Full-stack & embedded development', tags: ['Ollama', 'OpenCV', 'React', 'Firebase'], image: 'memoria', alt: 'Screenshot of the deployed Memoria website and monitoring-interface preview', caption: 'Capture of the deployed project website',
    live: 'https://memoria-9eac1.web.app/', github: 'https://github.com/Marwane-Haddane/memoria',
    problem: 'Explore how a local AI companion and a remote interface could support caregivers and people living with memory difficulties.',
    built: ['Contributed Python, OpenCV, and local Ollama integration.', 'Built the React interface and Firebase data integration.', 'Worked across embedded software and the web experience with the project team.'],
    relevance: 'Assistive interfaces, local inference on constrained devices, and connected sensing.',
    limitation: 'A demonstration prototype, not a clinically validated medical device. Local inference does not by itself guarantee end-to-end privacy.',
  },
  {
    slug: 'mysoil', title: 'MySoil / Turbati', category: 'Web & mobile', subtitle: 'Agriculture, in the farmer’s language.', status: 'Mobile prototype', year: '2026',
    description: 'A Flutter app exploring parcel mapping, agricultural data, and an assistant designed for Moroccan Darija.',
    role: 'Mobile developer & system designer', tags: ['Flutter', 'Riverpod', 'Maps', 'LLMs'], image: 'mysoil-showcase', imageFit: 'contain', alt: 'Presentation collage of MySoil’s dashboard, satellite parcel map, and agricultural marketplace', caption: 'Presentation composed from real Android app screens',
    gallery: ['mysoil-dashboard', 'mysoil-map', 'mysoil-market'], galleryFit: 'contain',
    galleryAlt: ['Original MySoil Android dashboard screenshot', 'Original MySoil satellite parcel map screenshot', 'Original MySoil agricultural marketplace screenshot'],
    problem: 'Agricultural software needs to make mapping and field information understandable on a phone, in languages farmers use.',
    built: ['Built multilingual Flutter screens with Riverpod state management.', 'Implemented parcel tracing and agricultural information views.', 'Integrated a conversational assistant tailored to Darija.'],
    relevance: 'Multilingual human–computer interaction, mobile mapping, and accessible AI interfaces.',
    limitation: 'A development prototype. Satellite-data coverage, advice quality, and real-world farming outcomes need further evaluation.',
  },
  {
    slug: 'rihla', title: 'RIHLA', category: 'Web & mobile', subtitle: 'A little closer to Morocco.', status: 'Android prototype', year: '2026',
    description: 'A Moroccan travel guide with cultural discovery, trip planning, and native Mapbox navigation.',
    role: 'Mobile developer', tags: ['Flutter', 'Mapbox', 'Dart', 'TTS'], image: 'rihla-showcase', imageFit: 'contain', alt: 'Presentation collage of RIHLA’s discovery, trip planning, and native map screens', caption: 'Presentation composed from real Android app screens',
    gallery: ['rihla-explore', 'rihla-trip', 'rihla-map'], galleryFit: 'contain',
    galleryAlt: ['Original RIHLA Android discovery screenshot', 'Original RIHLA saved itinerary screenshot', 'Original RIHLA native map route screenshot'],
    problem: 'Bring cultural discovery and practical navigation into one mobile experience for exploring Morocco.',
    built: ['Built the Flutter discovery and trip-planning screens.', 'Integrated native Mapbox maps and navigation.', 'Produced an Android prototype and recorded device verification.'],
    relevance: 'Location-aware interfaces, mobile systems integration, and cultural information design.',
    limitation: 'An Android prototype. Broad field testing and production distribution are still future steps.',
  },
  {
    slug: 'barasalfa', title: 'BaraSalfa', category: 'Web & mobile', subtitle: 'A social game, across screens.', status: 'Live web + mobile prototype', year: '2026',
    description: 'A Moroccan social-deduction game with a browser edition and a Flutter prototype for shared rooms and voice play.',
    role: 'Web & mobile developer', tags: ['React', 'Flutter', 'Firebase', 'Agora'], image: 'barasalfa', alt: 'Screenshot of the deployed BaraSalfa browser game', caption: 'Capture of the deployed web edition',
    live: 'https://bara-salfa-by-marwane.web.app/',
    problem: 'Adapt a social party game to both in-person and online play while keeping the room and player experience clear.',
    built: ['Built the React browser edition and game interface.', 'Developed Flutter lobby and game-state flows.', 'Integrated Firebase room synchronization and Agora voice rooms in the mobile prototype.'],
    relevance: 'Real-time state synchronization, cross-platform interaction, and multiplayer user experience.',
    limitation: 'The website is deployed; the mobile edition remains a prototype. Public deployment does not establish production-scale usage.',
  },
  {
    slug: 'la-belle-maison', title: 'La Belle Maison', category: 'Web & mobile', subtitle: 'Craftsmanship, on the web.', status: 'Live website', year: '2026',
    description: 'A responsive furniture storefront presenting an artisan’s work, product collections, and custom-order enquiries.',
    role: 'Frontend developer', tags: ['React', 'Vite', 'GSAP', 'Firebase'], image: 'furniture', alt: 'Screenshot of the actual La Belle Maison furniture storefront', caption: 'Capture of the deployed storefront', live: 'https://labelle-maison.web.app/',
    problem: 'Help visitors discover furniture collections and turn a reference or an idea into an enquiry for custom work.',
    built: ['Built responsive product and collection interfaces.', 'Implemented prerendered pages and storefront navigation.', 'Connected enquiry flows and deployed the site on Firebase Hosting.'],
    relevance: 'Frontend performance, information architecture, and accessible product discovery.',
    limitation: 'A catalogue and enquiry experience. Online payment and order fulfilment are not presented as verified features.',
  },
  {
    slug: 'robogenius', title: 'RoboGenius', category: 'Web & mobile', subtitle: 'A home for a robotics community.', status: 'Live website', year: '2026',
    description: 'The engineering club’s web platform for projects, events, a robotics catalogue, and certificate verification.',
    role: 'Full-stack developer', tags: ['Next.js', 'TypeScript', 'React', 'Tailwind'], image: 'robogenius', alt: 'Screenshot of the deployed RoboGenius engineering-club website', caption: 'Capture of the deployed club website',
    live: 'https://robogenius.vercel.app/', github: 'https://github.com/Robo-Genius/Robogenius_website',
    problem: 'Give a student engineering community one place to showcase projects, share activities, and make resources easier to find.',
    built: ['Developed the Next.js club platform and responsive pages.', 'Worked on the robotics catalogue and 3D model presentation.', 'Implemented certificate-verification and club content flows.'],
    relevance: 'Community software, full-stack delivery, and interactive technical communication.',
    limitation: 'A club platform. Store listings do not imply a verified payment or inventory-management system.',
  },
];
export const credentials = [
  { title: 'Google Cybersecurity Professional Certificate', href: 'https://www.credly.com/badges/0a29ef8f-3456-49f6-9efd-95d20de84e39/public_url' },
  { title: 'Harvard CS50x', href: 'https://certificates.cs50.io/9b8fa55f-f037-4ffe-95af-85d90b1bb996.pdf' },
];
export function findProject(path) {
  if (!/^\/project\//.test(path)) return undefined;
  const id = path.replace(/\/$/, '').split('/')[2];
  return projects.find(project => project.slug === id || (project.legacyId !== undefined && String(project.legacyId) === id));
}
