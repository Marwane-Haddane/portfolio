import React, { Suspense } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import './App.css';
import { projectsData } from './project-data';
import DeferredSection from './components/DeferredSection';

// Above-the-fold components: loaded eagerly (Nav + Home are immediately visible)
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import SocialSidebar from './components/social/SocialSidebar';

// Below-the-fold components: lazy-loaded (user must scroll to see them)
const About = React.lazy(() => import('./components/about/About'));
const Project = React.lazy(() => import('./components/project/Project'));
const Experience = React.lazy(() => import('./components/experience/Experience'));
const Contact = React.lazy(() => import('./components/contact/Contact'));
const ProjectDetail = React.lazy(() => import('./components/project/ProjectDetail'));
const loadAbout = () => import('./components/about/About');
const loadProjects = () => import('./components/project/Project');
const loadExperience = () => import('./components/experience/Experience');
const loadContact = () => import('./components/contact/Contact');

/* Minimal loading fallback — matches the dark theme */
const SectionFallback = () => (
  <div style={{
    minHeight: '40vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
  }}>
    <div style={{
      width: '32px',
      height: '32px',
      border: '3px solid rgba(124, 58, 237, 0.2)',
      borderTopColor: '#7c3aed',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite',
    }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

/* ── Main portfolio page ─────────────────────────────────── */
function MainPage({ sections }) {
  return (
    <>
      <Nav />
      <SocialSidebar />
      <main>
        <Home />
        <DeferredSection html={sections?.about} load={loadAbout}>
          <About />
        </DeferredSection>
        <DeferredSection html={sections?.projects} load={loadProjects}>
          <Project />
        </DeferredSection>
        <DeferredSection html={sections?.experience} load={loadExperience}>
          <Experience />
        </DeferredSection>
        <DeferredSection html={sections?.contact} load={loadContact}>
          <Contact />
        </DeferredSection>
      </main>
    </>
  );
}

/* ── Project detail page wrapper ─────────────────────────── */
function ProjectPage() {
  const { id } = useParams();

  const project = projectsData.find(item => String(item.id) === id);
  if (!project) return <NotFound />;

  return (
    <Suspense fallback={
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: '#050209',
        color: '#a78bfa',
        fontSize: '1rem',
        fontWeight: 600,
        letterSpacing: '0.05em',
      }}>
        Loading…
      </div>
    }>
      <main>
        <ProjectDetail project={project} />
      </main>
    </Suspense>
  );
}

function NotFound() {
  return <main style={{ minHeight: '100vh', display: 'grid', placeContent: 'center', textAlign: 'center', color: '#fff' }}><h1>Page not found</h1><a href="/" style={{ color: '#a78bfa' }}>Back to Portfolio</a></main>;
}

/* ── App ─────────────────────────────────────────────────── */
function App({ sections }) {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Routes>
        <Route path="/" element={<MainPage sections={sections} />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        {/* Fallback: any unknown URL goes home */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
