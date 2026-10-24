import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root');
const sectionNames = ['about', 'projects', 'experience', 'contact'];
const sectionNodes = [...document.querySelectorAll('[data-deferred-section]')];
const sections = sectionNodes.length ? Object.fromEntries(sectionNames.map((name, index) => [name, sectionNodes[index].innerHTML])) : undefined;
const app = (
  <StrictMode>
    <BrowserRouter>
      <App sections={sections} />
    </BrowserRouter>
  </StrictMode>
);
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
