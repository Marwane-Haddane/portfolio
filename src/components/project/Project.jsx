import React, { useState } from 'react';
import { projectsData, featuredProjects } from '../../project-data';
import FlowingMenu from '../../jsrepo/FlowingMenu';
import LogoLoop from '../../jsrepo/LogoLoop';
import TextPressure from '../../jsrepo/TextPressure';
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
  return (
    <div className="project-card" style={{ animationDelay: `${index * 0.08}s` }}>
      <div className="project-card__image">
        <img src={project.image} alt={project.alt || project.title} loading="lazy" decoding="async" width="600" height="350" style={{ aspectRatio: '16/9', objectFit: project.cardImageFit || project.imageFit || (project.portrait ? 'contain' : 'cover'), objectPosition: project.cardImagePosition || 'center' }} />
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
        <a className="project-card__more" href={`/project/${project.id}/`} aria-label={`Read about ${project.title}`}>more →</a>
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
