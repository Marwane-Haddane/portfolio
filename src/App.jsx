import React, { Suspense } from 'react';
import { Routes, Route, useParams, Navigate } from 'react-router-dom';
import './App.css';

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
function MainPage() {
  return (
    <>
      <Nav />
      <SocialSidebar />
      <main>
        <Home />
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Project />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
    </>
  );
}

/* ── Project detail page wrapper ─────────────────────────── */
function ProjectPage() {
  const { id } = useParams();

  // Dynamically import projectsData to avoid pulling it into the initial bundle
  const [project, setProject] = React.useState(undefined);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    import('./components/project/Project').then((mod) => {
      const found = mod.projectsData.find((p) => p.id === parseInt(id, 10));
      setProject(found || null);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
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
    );
  }

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
      <main>
        <ProjectDetail project={project} />
      </main>
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
