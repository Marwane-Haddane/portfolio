import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FlowingMenu from '../../jsrepo/FlowingMenu';
import LogoLoop from '../../jsrepo/LogoLoop';
import TextPressure from '../../jsrepo/TextPressure';
import { getOptimizedCloudinaryUrl } from '../../utils/cloudinary';
import {
  SiKalilinux, SiWireshark, SiLinux,
  SiPython, SiJupyter, SiOpenai,
  SiReact, SiTailwindcss, SiMetasploit, SiBurpsuite, SiHuggingface, SiLangchain, SiFirebase, SiFlask
} from 'react-icons/si';
import './project.css';

// Logos for LogoLoop
const cyberLogos = [
  { node: <SiKalilinux />, title: "Kali Linux" },
  { node: <SiWireshark />, title: "Wireshark" },
  { node: <SiMetasploit />, title: "Metasploit" },
  { node: <SiBurpsuite />, title: "Burp Suite" },
  { node: <SiLinux />, title: "Linux" },

];



const aiLogos = [
  { node: <SiPython />, title: "Python" },
  { node: <SiHuggingface />, title: "Hugging Face" },
  { node: <SiOpenai />, title: "OpenAI" },
  { node: <SiJupyter />, title: "Jupyter" },
  { node: <SiLangchain />, title: "LangChain" },
];



const devLogos = [
  { node: <SiReact />, title: "React" },
  { node: <SiTailwindcss />, title: "Tailwind" },
  { node: <SiFlask />, title: "Flask" },
  { node: <SiFirebase />, title: "Firebase" },
];

const skillRows = [
  { key: 'cyber', label: 'CYBER', logos: cyberLogos, direction: 'right' },
  { key: 'ai', label: 'AI', logos: aiLogos, direction: 'left' },
  { key: 'dev', label: 'DEV', logos: devLogos, direction: 'right' },
];

const featuredProjects = [
  {
    link: '#',
    text: 'WeSecure Platform',
    hoverImage: getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1778030287/platform_eup0ed.png', 600),
    texts: ['n8n for URL scaning', 'email phishing detection', 'Cryptography algorithms'],
    images: [
      getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1778030287/workflow_cm4quo.png', 600),
      getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1778030287/platform_eup0ed.png', 600),
      getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1778030286/mail_example_u6yr8h.png', 600)
    ]
  },
  {
    link: '#',
    text: 'Memoria',
    hoverImage: getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1778030929/memoria_nvopnk.jpg', 600),
    texts: ['Robot assisstant by AI', 'Platform for monitoring patient  ', 'Cloud Based Application'],
    images: [
      getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1778030927/dashboard_tiuy5q.png', 600),
      getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1778030932/Hero_aj5lbx.png', 600),
      getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1778030929/about_lc27v2.png', 600)
    ]
  },
  {
    link: '#',
    text: 'Ai hub (still working on it)',
    hoverImage: getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1778032270/A_futuristic_and_sleek_UI_UX_202605060250_kwmgdh.jpg', 600),
    texts: ['ML projects', 'Chatbots', 'OpenCV'],
    images: [
      getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1778032270/A_futuristic_and_sleek_UI_UX_202605060250_kwmgdh.jpg', 600),
      getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1778032270/A_futuristic_and_sleek_UI_UX_202605060250_kwmgdh.jpg', 600),
      getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1778032270/A_futuristic_and_sleek_UI_UX_202605060250_kwmgdh.jpg', 600)
    ]
  }
];

export const projectsData = [
  { 
    id: 1, 
    title: 'WeSecure Platform', 
    desc: 'Cybersecurity platform with vulnerability scanning and threat monitoring.', 
    longDesc: 'A comprehensive, multi-layered cybersecurity automation platform. Built with n8n for real-time automated workflow orchestration and URL scanning. Integrates machine learning models for detecting email phishing attempts, and robust cryptographic algorithms to ensure data confidentiality and integrity. The dashboard provides a unified view of active threats and system vulnerability metrics.',
    domain: 'cyber', 
    type: 'project', 
    image: getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1778030287/platform_eup0ed.png', 600), 
    link: null, 
    github: 'https://github.com/Marwane-Haddane/WeSecure.git',
    images: [
      getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1778030287/workflow_cm4quo.png', 800), 
      getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1778030287/platform_eup0ed.png', 800), 
      getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1778030286/mail_example_u6yr8h.png', 800)
    ]
  },
  { 
    id: 4, 
    title: 'AI hub (still working on it)', 
    desc: 'Platform for AI projects, ML projects, Chatbots and OpenCV.', 
    longDesc: 'A futuristic hub acting as a playground for AI applications and experimental models. Features a suite of custom natural language chatbots, predictive ML modeling pages, and real-time computer vision showcases leveraging OpenCV. Integrated with Hugging Face transformers and OpenAI APIs, with interactive dashboards to test models on custom datasets.',
    domain: 'ai', 
    type: 'project', 
    image: getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1778032270/A_futuristic_and_sleek_UI_UX_202605060250_kwmgdh.jpg', 600), 
    link: null, 
    github: null,
    images: [
      getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1778032270/A_futuristic_and_sleek_UI_UX_202605060250_kwmgdh.jpg', 800)
    ]
  },
  { 
    id: 5, 
    title: 'CS50x', 
    desc: 'Harvard CS50x certification, with full documentation.', 
    longDesc: 'Complete documentation and problem set solutions for Harvard University\'s CS50x (Introduction to Computer Science). The course builds a strong foundation in algorithmic thinking, data structures, memory management, and software design principles. Spans low-level programming in C, database management with SQL, web development with Flask, and scripting in Python.',
    domain: 'ai', 
    type: 'certif', 
    image: getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1778031663/CS50x_mbz8os.png', 600), 
    link: 'https://certificates.cs50.io/9b8fa55f-f037-4ffe-95af-85d90b1bb996.pdf', 
    github: 'https://github.com/Marwane-Haddane/cs50.git',
    images: [
      getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1778031663/CS50x_mbz8os.png', 800)
    ]
  },
  { 
    id: 7, 
    title: 'Memoria', 
    desc: 'Robot assistant by AI, Platform for monitoring Alzheimer patients and sharing info with doctors in real time.', 
    longDesc: 'A comprehensive cloud-based monitoring platform integrated with a physical robot assistant for patients suffering from Alzheimer\'s disease. The patient\'s status, location, and daily activities are collected and synced to a secure cloud platform in real-time, allowing family members and medical doctors to check the patient\'s status from a personalized web dashboard.',
    domain: 'ai', 
    type: 'project', 
    image: getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1778030932/Hero_aj5lbx.png', 600), 
    link: 'https://memoria-9eac1.web.app/', 
    github: 'https://github.com/Marwane-Haddane/memoria.git',
    images: [
      getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1778030927/dashboard_tiuy5q.png', 800), 
      getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1778030932/Hero_aj5lbx.png', 800), 
      getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1778030929/about_lc27v2.png', 800)
    ]
  },
  {
    id: 8,
    title: 'Google Cybersecurity Professional Certificate',
    desc: 'Professional credential in Cybersecurity from Google covering networks, linux, python, and incident detection.',
    longDesc: 'Completed the Google Cybersecurity Professional Certificate program. This intensive training covers key concepts in defensive cybersecurity including system vulnerabilities, threat detection (SIEM tools like Chronicle and Splunk), network protocol analysis (using Wireshark), scripting with Python, security operations with Linux, and standard incident response protocols.',
    domain: 'cyber',
    type: 'certif',
    image: getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1782276549/google-cybersecurity-professional-certificate-v-2_wxsbfw.png', 600),
    link: 'https://www.credly.com/badges/0a29ef8f-3456-49f6-9efd-95d20de84e39/public_url',
    github: null,
    images: [
      getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1782276695/Google_Cybersecurity-1_kk39zx.png', 800),
      getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1782276729/1781312599193_fqtneh.png', 800),
      getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1782276549/unnamed_cgj8zd.png', 800)
    ]
  }
];

const domainFilters = [
  { key: 'all', label: 'All Projects' },
  { key: 'cyber', label: 'Cybersecurity' },
  { key: 'ai', label: 'AI & ML' },
  { key: 'dev', label: 'Development' },
];

const typeFilters = [
  { key: 'all', label: 'All' },
  { key: 'certif', label: 'Certifications' },
  { key: 'project', label: 'Projects' },
];

function ProjectCard({ project, index }) {
  const navigate = useNavigate();
  return (
    <div className="project-card" style={{ animationDelay: `${index * 0.08}s` }}>
      <div className="project-card__image">
        <img src={project.image} alt={project.title} loading="lazy" width="600" height="350" style={{ aspectRatio: '16/9', objectFit: 'cover' }} />
        <div className="project-card__overlay">
          <div className="project-card__links">
            {project.link && <a href={project.link} className="project-card__link" aria-label="Live demo">🔗</a>}
            {project.github && <a href={project.github} className="project-card__link" aria-label="GitHub">⟨/⟩</a>}
          </div>
        </div>
      </div>
      <div className="project-card__info">
        <div className="project-card__badge">{project.type === 'certif' ? ' Certification' : ' Project'}</div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.desc}</p>
        <span className="project-card__more" onClick={() => navigate(`/project/${project.id}`)}>more →</span>
      </div>
    </div>
  );
}

function SkillRow({ label, logos, direction }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="skill-row"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`skill-row__label ${hovered ? 'skill-row__label--visible' : ''}`}>
        {label}
      </div>
      <LogoLoop
        logos={logos}
        speed={60}
        direction={direction}
        logoHeight={55}
        gap={60}
        hoverSpeed={0}
        scaleOnHover={true}
        fadeOut={true}
        fadeOutColor="#08030e"
      />
    </div>
  );
}

function Project() {
  const [domainFilter, setDomainFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const filtered = projectsData.filter(p => {
    const domainOk = domainFilter === 'all' || p.domain === domainFilter;
    const typeOk = typeFilter === 'all' || p.type === typeFilter;
    return domainOk && typeOk;
  });

  return (
    <section className="project-section" id="skills">
      {/* ─── Skills ─── */}
      <div className="project-section__header" >
        <TextPressure
          text="   Skills   "
          flex
          alpha={false}
          stroke={false}
          width
          weight
          italic={false}
          textColor="#ffffff"
          strokeColor="#5227FF"
          minFontSize={36}
        />
      </div>

      <div className="skills-loop-wrap">
        {skillRows.map(row => (
          <SkillRow key={row.key} label={row.label} logos={row.logos} direction={row.direction} />
        ))}
      </div>

      <div className="section-spacer--lg" />

      {/* ─── Featured Projects ─── */}
      <div className="project-section__header" id="projects">
        <TextPressure
          text="Featured Projects"
          flex
          alpha
          stroke={false}
          width
          weight
          italic={false}
          textColor="#ffffff"
          strokeColor="#5227FF"
          minFontSize={36}
        />
      </div>

      <div className="featured-projects-wrap">
        <FlowingMenu
          items={featuredProjects}
          speed={15}
          textColor="#ffffff"
          bgColor="transparent"
          marqueeBgColor="#7c3aed"
          marqueeTextColor="#ffffff"
          borderColor="rgba(124, 58, 237, 0.3)"
        />
      </div>

      <div className="section-spacer--lg" />

      {/* ─── Portfolio Grid ─── */}
      <div className="project-section__header">
        <TextPressure
          text="My Projects"
          flex
          alpha={false}
          stroke={false}
          width
          weight
          italic={false}
          textColor="#ffffff"
          strokeColor="#5227FF"
          minFontSize={36}
        />
      </div>

      <div className="project-filters">
        <div className="project-filters__sidebar">
          {domainFilters.map(f => (
            <button
              key={f.key}
              className={`filter-btn ${domainFilter === f.key ? 'filter-btn--active' : ''}`}
              onClick={() => setDomainFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="project-filters__content">
          <div className="type-filters">
            {typeFilters.map(f => (
              <button
                key={f.key}
                className={`type-btn ${typeFilter === f.key ? 'type-btn--active' : ''}`}
                onClick={() => setTypeFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="project-grid" key={`${domainFilter}-${typeFilter}`}>
            {filtered.length > 0 ? (
              filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)
            ) : (
              <div className="project-empty">No items found for this filter.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;