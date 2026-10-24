import React from 'react';
import MagicBento from '../../jsrepo/MagicBento';
import TextPressure from '../../jsrepo/TextPressure';
import ScrambledText from '../../jsrepo/ScrambledText';

function About() {
  return (
    <section id="about" aria-label="About Me" style={{ position: 'relative', padding: '6rem 0 4rem', width: '100%' }}>

      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 2rem' }}>
        <h2 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          Who I Am — About Marwane Haddane
        </h2>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <TextPressure
            text="Who I Am?"
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

          <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '0 0 2rem 0', maxWidth: '800px' }}>
            <ScrambledText
              radius={100}
              duration={1.2}
              speed={0.5}
              scrambleChars=".:"
              style={{ margin: 0, textAlign: 'left', lineHeight: '1.6', fontSize: '1.1rem' }}
            >
              Fourth-year Cybersecurity and Digital Development student at ENSA Fès.<br />
              I build security tools, AI prototypes, and web and mobile applications.<br />
              President of RoboGenius and Founder of GDGoC ENSAF.<br />
              Seeking an international research internship in cybersecurity or AI for Summer 2027.
            </ScrambledText>
          </div>

          <a
            href='/Marwane_Haddane_CV.pdf'
            download
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 2rem',
              background: 'rgba(124, 58, 237, 0.2)',
              border: '1px solid #7c3aed',
              borderRadius: '50px',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 15px rgba(124, 58, 237, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#7c3aed';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(124, 58, 237, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(124, 58, 237, 0.2)';
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(124, 58, 237, 0.3)';
            }}
          >
            Curriculum Vitae
          </a>
        </div>

        <MagicBento
          textAutoHide={false}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </div>
    </section>
  );
}

export default About;
