import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './SocialSidebar.css';

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <a href="https://github.com/Marwane-Haddane" target="_blank" rel="noopener noreferrer" className="social-link github">
        <FaGithub />
        <span className="social-tooltip">GitHub</span>
      </a>
      <a href="https://linkedin.com/in/marwane-haddane" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
        <FaLinkedin />
        <span className="social-tooltip">LinkedIn</span>
      </a>
      <a href="https://wa.me/212649946554" target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
        <FaWhatsapp />
        <span className="social-tooltip">WhatsApp</span>
      </a>
      <div className="social-line"></div>
    </div>
  );
};

export default SocialSidebar;
