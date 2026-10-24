import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaGlobe, FaEnvelope, FaFileAlt, FaArrowLeft } from 'react-icons/fa';
import './project.css';
import { getOptimizedCloudinaryUrl } from '../../utils/cloudinary';

function ProjectDetail({ project }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const images = (project.images || [project.image]).map(img => getOptimizedCloudinaryUrl(img, 1000));
  const hasMultipleImages = images.length > 1;

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      background: 'radial-gradient(ellipse at top center, #1a0b2e 0%, #050209 50%, #000000 100%)',
      color: '#fff',
    }}>
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .detail-animate {
          animation: heroFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .detail-animate-delay-1 { animation-delay: 0.1s; opacity: 0; }
        .detail-animate-delay-2 { animation-delay: 0.2s; opacity: 0; }
        .detail-animate-delay-3 { animation-delay: 0.3s; opacity: 0; }
        .detail-animate-delay-4 { animation-delay: 0.4s; opacity: 0; }
      `}</style>

      {/* ─── Sticky Top Bar ─── */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        background: 'rgba(5, 2, 9, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(124, 58, 237, 0.15)',
      }}>
        <div style={{
          maxWidth: '1300px',
          margin: '0 auto',
          padding: '0.9rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <button
            onClick={() => window.location.assign('/#projects')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'none',
              border: 'none',
              color: '#a78bfa',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = '#a78bfa'}
          >
            <FaArrowLeft size={14} />
            Back to Portfolio
          </button>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(167, 139, 250, 0.5)',
          }}>
            {project.type === 'certif' ? 'Certification' : 'Project'} Detail
          </span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section style={{
        maxWidth: '1300px',
        margin: '0 auto',
        padding: '4rem 2rem 2rem',
      }}>
        <div className="detail-animate" style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.2rem' }}>
            <span style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#a78bfa',
              background: 'rgba(124, 58, 237, 0.15)',
              border: '1px solid rgba(124, 58, 237, 0.3)',
              padding: '0.35em 0.9em',
              borderRadius: '999px',
            }}>
              {project.type === 'certif' ? 'Certification' : 'Project'}
            </span>
            <span style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#94a3b8',
              background: 'rgba(148, 163, 184, 0.08)',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              padding: '0.35em 0.9em',
              borderRadius: '999px',
            }}>
              {project.domain === 'cyber' ? 'Cybersecurity' : project.domain === 'ai' ? 'AI & ML' : 'Development'}
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            margin: '0 0 1.2rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #d4bfff 50%, #7c3aed 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            {project.title}
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: 'rgba(255, 255, 255, 0.6)',
            lineHeight: 1.7,
            maxWidth: '700px',
            margin: 0,
          }}>
            {project.desc}
          </p>
        </div>
      </section>

      {/* ─── Hero Image ─── */}
      <section className="detail-animate detail-animate-delay-1" style={{
        maxWidth: '1300px',
        margin: '0 auto',
        padding: '0 2rem 3rem',
      }}>
        <div style={{
          width: '100%',
          aspectRatio: '16 / 7',
          borderRadius: '20px',
          overflow: 'hidden',
          border: '1px solid rgba(124, 58, 237, 0.2)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(124, 58, 237, 0.08)',
        }}>
          <img
            src={images[0]}
            alt={project.alt || project.title}
            loading="eager"
            fetchPriority="high"
            width="1000"
            height="437"
            style={{
              width: '100%',
              height: '100%',
              objectFit: project.imageFit || (project.portrait ? 'contain' : 'cover'),
              display: 'block',
            }}
          />
        </div>
      </section>

      {/* ─── Main Content Grid ─── */}
      <section className="detail-animate detail-animate-delay-2" style={{
        maxWidth: '1300px',
        margin: '0 auto',
        padding: '0 2rem 4rem',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '3rem',
      }}>
        {/* Gallery */}
        {hasMultipleImages && (
          <div>
            <h3 style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#7c3aed',
              marginBottom: '1rem',
            }}>
              Screenshots
            </h3>
            <div
              className="detail-gallery"
              style={{
                display: 'flex',
                gap: '1rem',
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                scrollBehavior: 'smooth',
                paddingBottom: '0.75rem',
              }}
            >
              {images.map((imgUrl, idx) => (
                <div
                  key={idx}
                  style={{
                    flexShrink: 0,
                    width: 'min(100%, 560px)',
                    aspectRatio: '16 / 10',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid rgba(124, 58, 237, 0.2)',
                    background: 'rgba(124, 58, 237, 0.03)',
                    scrollSnapAlign: 'start',
                    position: 'relative',
                  }}
                >
                  <img
                    src={imgUrl}
                    alt={idx === 0 ? (project.alt || project.title) : (project.galleryAlt?.[idx - 1] || `${project.title} screenshot ${idx + 1}`)}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: project.galleryFit || 'cover',
                      display: 'block',
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '8px',
                    background: 'rgba(0, 0, 0, 0.65)',
                    backdropFilter: 'blur(8px)',
                    padding: '2px 8px',
                    borderRadius: '6px',
                    fontSize: '0.65rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    border: '1px solid rgba(124, 58, 237, 0.1)',
                  }}>
                    {idx + 1} / {images.length}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Two-column: Description + Sidebar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem',
        }}
          className="detail-two-col"
        >
          <style>{`
            @media (min-width: 1024px) {
              .detail-two-col {
                grid-template-columns: 3fr 2fr !important;
              }
            }
          `}</style>

          {/* Description */}
          <div className="detail-animate detail-animate-delay-3">
            <h3 style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#7c3aed',
              marginBottom: '1rem',
            }}>
              About This {project.type === 'certif' ? 'Certification' : 'Project'}
            </h3>
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.65)',
              background: 'rgba(124, 58, 237, 0.03)',
              border: '1px solid rgba(124, 58, 237, 0.1)',
              borderRadius: '16px',
              padding: '1.8rem',
              margin: 0,
            }}>
              {project.longDesc || project.desc}
            </p>
          </div>

          {/* Sidebar: Resources + Contact */}
          <div className="detail-animate detail-animate-delay-4" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Resources */}
            <div style={{
              background: 'rgba(18, 10, 36, 0.6)',
              border: '1px solid rgba(124, 58, 237, 0.2)',
              borderRadius: '16px',
              padding: '1.5rem',
            }}>
              <h4 style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#a78bfa',
                marginBottom: '1rem',
                paddingBottom: '0.6rem',
                borderBottom: '1px solid rgba(124, 58, 237, 0.15)',
              }}>
                Resources
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      background: 'rgba(124, 58, 237, 0.06)',
                      border: '1px solid rgba(124, 58, 237, 0.1)',
                      borderRadius: '12px',
                      color: '#fff',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(124, 58, 237, 0.15)';
                      e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.35)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(124, 58, 237, 0.06)';
                      e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.1)';
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <FaGithub style={{ color: '#a78bfa', fontSize: '1.1rem' }} />
                      Code Repository
                    </span>
                    <span style={{ fontSize: '0.7rem', color: '#a78bfa' }}>GitHub →</span>
                  </a>
                )}

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      background: 'rgba(124, 58, 237, 0.06)',
                      border: '1px solid rgba(124, 58, 237, 0.1)',
                      borderRadius: '12px',
                      color: '#fff',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(124, 58, 237, 0.15)';
                      e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.35)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(124, 58, 237, 0.06)';
                      e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.1)';
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      {project.type === 'certif' ? (
                        <FaFileAlt style={{ color: '#a78bfa', fontSize: '1.1rem' }} />
                      ) : (
                        <FaGlobe style={{ color: '#a78bfa', fontSize: '1.1rem' }} />
                      )}
                      {project.type === 'certif' ? 'View Certificate' : 'Live Demo'}
                    </span>
                    <span style={{ fontSize: '0.7rem', color: '#a78bfa' }}>Visit →</span>
                  </a>
                )}

                {!project.github && !project.link && (
                  <div style={{
                    textAlign: 'center',
                    color: 'rgba(255,255,255,0.3)',
                    fontSize: '0.75rem',
                    padding: '1rem',
                    border: '1px dashed rgba(124, 58, 237, 0.15)',
                    borderRadius: '12px',
                  }}>
                    No public links available
                  </div>
                )}
              </div>
            </div>

            {/* Contact */}
            <div style={{
              background: 'rgba(18, 10, 36, 0.6)',
              border: '1px solid rgba(124, 58, 237, 0.2)',
              borderRadius: '16px',
              padding: '1.5rem',
            }}>
              <h4 style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#a78bfa',
                marginBottom: '0.6rem',
                paddingBottom: '0.6rem',
                borderBottom: '1px solid rgba(124, 58, 237, 0.15)',
              }}>
                Get In Touch
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', lineHeight: 1.6, marginBottom: '0.8rem' }}>
                Interested in this project? Contact me directly:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <ContactLink
                  href="https://linkedin.com/in/marwane-haddane"
                  icon={<FaLinkedin style={{ color: '#0ea5e9', fontSize: '1.1rem' }} />}
                  label="LinkedIn"
                  value="marwane-haddane"
                />
                <ContactLink
                  href="mailto:marwanehaddane5@gmail.com"
                  icon={<FaEnvelope style={{ color: '#f87171', fontSize: '1.1rem' }} />}
                  label="Email"
                  value="marwanehaddane5@gmail.com"
                />
                <ContactLink
                  href="https://wa.me/212649946554"
                  icon={<FaWhatsapp style={{ color: '#22c55e', fontSize: '1.1rem' }} />}
                  label="WhatsApp / Phone"
                  value="+212 649-946554"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactLink({ href, icon, label, value }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.65rem 0.8rem',
        borderRadius: '10px',
        border: '1px solid transparent',
        color: 'rgba(255, 255, 255, 0.7)',
        textDecoration: 'none',
        fontSize: '0.85rem',
        transition: 'all 0.2s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'rgba(124, 58, 237, 0.08)';
        e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.2)';
        e.currentTarget.style.color = '#fff';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.borderColor = 'transparent';
        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
      }}
    >
      {icon}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)' }}>
          {label}
        </span>
        <span style={{ fontWeight: 500 }}>{value}</span>
      </div>
    </a>
  );
}

export default ProjectDetail;
