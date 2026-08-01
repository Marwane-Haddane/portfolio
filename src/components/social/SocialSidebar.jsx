import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './SocialSidebar.css';

const SocialSidebar = () => {
  return (
    <nav className="social-sidebar" aria-label="Social links">
      <a href="https://github.com/Marwane-Haddane" target="_blank" rel="noopener noreferrer" className="social-link github" aria-label="GitHub Profile">
        <FaGithub aria-hidden="true" />
        <span className="social-tooltip">GitHub</span>
      </a>
      <a href="https://linkedin.com/in/marwane-haddane" target="_blank" rel="noopener noreferrer" className="social-link linkedin" aria-label="LinkedIn Profile">
        <FaLinkedin aria-hidden="true" />
        <span className="social-tooltip">LinkedIn</span>
      </a>
      <a href="https://wa.me/212649946554" target="_blank" rel="noopener noreferrer" className="social-link whatsapp" aria-label="WhatsApp Contact">
        <FaWhatsapp aria-hidden="true" />
        <span className="social-tooltip">WhatsApp</span>
      </a>
      <div className="social-line"></div>
    </nav>
  );
};

export default SocialSidebar;
