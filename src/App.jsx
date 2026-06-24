import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Project from './components/project/Project';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import SocialSidebar from './components/social/SocialSidebar';

const ProjectDetail = React.lazy(() => import('./components/project/ProjectDetail'));

/* ── Main portfolio page ─────────────────────────────────── */
function MainPage() {
  return (
    <>
      <Nav />
      <SocialSidebar />
      <Home />
      <About />
      <Project />
      <Experience />
      <Contact />
    </>
  );
}

/* ── Project detail page wrapper ─────────────────────────── */
import { useParams, Navigate } from 'react-router-dom';
import { projectsData } from './components/project/Project';

function ProjectPage() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id, 10));

  if (!project) return <Navigate to="/" replace />;

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
      <ProjectDetail project={project} />
    </Suspense>
  );
}

/* ── App ─────────────────────────────────────────────────── */
function App() {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        {/* Fallback: any unknown URL goes home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
