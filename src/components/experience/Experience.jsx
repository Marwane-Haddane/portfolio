import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import TextPressure from '../../jsrepo/TextPressure';
import { FaShieldAlt, FaServer } from 'react-icons/fa';
import './experience.css';

// Lazy-load the timeline component and its CSS
const VerticalTimeline = lazy(() =>
  import('react-vertical-timeline-component').then(m => ({ default: m.VerticalTimeline }))
);
const VerticalTimelineElement = lazy(() =>
  import('react-vertical-timeline-component').then(m => ({ default: m.VerticalTimelineElement }))
);

const experiences = [
  {
    title: 'Open to Internship',
    company_name: 'Available for Opportunities',
    iconSrc: 'https://res.cloudinary.com/dnye0gigw/image/upload/v1778035272/ENSAFES_logo20230124155030_v3flsn.png',
    iconAlt: 'internship',
    iconBg: "#ffffff",
    date: '2026 - Now',
    points: [
      'Seeking an international research internship in cybersecurity or AI for Summer 2027.',
      'Ready to apply offensive security skills, container hardening, and AI/ML knowledge to real-world challenges.',
      'Open to remote, hybrid, or on-site positions.',
    ],
  },
  {
    title: 'Cybersecurity Intern – Docker Hardening',
    company_name: 'Ministère de la Transition Numérique et de la Réforme de l\'Administration (MTNRA), Rabat',
    icon: <FaShieldAlt style={{ fontSize: '1.5rem', color: '#a78bfa' }} />,
    iconBg: '#1e1b4b',
    date: 'July 2026',
    points: [
      'Executed a comprehensive CIS Docker Benchmark Level 1 hardening audit covering all 87 controls across host configurations, Docker daemon, and runtime.',
      'Implemented least-privilege principles via Rootless Docker container architecture to secure daemon and runtime attack surfaces.',
      'Simulated container privilege escalation scenarios and authored actionable defensive remediation documentation.',
    ],
  },
  {
    title: 'Cybersecurity Intern – Active Directory Security',
    company_name: 'Centre Hospitalier Universitaire (CHU) Fès',
    icon: <FaServer style={{ fontSize: '1.4rem', color: '#38bdf8' }} />,
    iconBg: '#0f172a',
    date: 'June – July 2026',
    points: [
      'Deployed and hardened Microsoft LAPS across Active Directory environments (GPO configuration, AD schema extension, and fine-grained ACLs).',
      'Mapped attack paths and privilege escalation vectors using BloodHound, analyzing Kerberoasting, AS-REP Roasting, and AD CS vulnerabilities.',
      'Engineered automation scripts to analyze and exploit identified attack paths for defensive remediation.',
    ],
  },
  {
    title: 'Cybersecurity & Digital Development Engineering Student',
    company_name: 'ENSA Fès',
    iconSrc: 'https://res.cloudinary.com/dnye0gigw/image/upload/v1778035272/ENSAFES_logo20230124155030_v3flsn.png',
    iconAlt: 'ENSA Fès',
    iconBg: "#ffffff",
    date: '2025 - 2028 (expected)',
    points: [
      'Fourth-year engineering student; President of RoboGenius (Bureau 26/27).',
      'Founder and Lead Organizer of GDGoC ENSAF; External Affairs at SECOPS.',
      'Participated in multiple CTF (Capture The Flag) competitions and hackathons.',
    ],
  },
  {
    title: 'Preparatory Cycle',
    company_name: 'ENSA Fès',
    iconSrc: 'https://res.cloudinary.com/dnye0gigw/image/upload/v1778035272/ENSAFES_logo20230124155030_v3flsn.png',
    iconAlt: 'ENSA Fès',
    iconBg: "#ffffff",
    date: '2023 - 2025',
    points: [
      'Mecatronic Chief @ RoboGenius',
      '1st Prize winner at GDG OpportunAI (Casablanca, 2025).',
      'Completed 160+ volunteer hours with the Ministry of Youth.',
    ],
  }
];

function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [cssLoaded, setCssLoaded] = useState(false);
  const sectionRef = useRef(null);

  // Lazy-load when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Dynamically import timeline CSS only when needed
  useEffect(() => {
    if (isVisible && !cssLoaded) {
      import('react-vertical-timeline-component/style.min.css').then(() => {
        setCssLoaded(true);
      });
    }
  }, [isVisible, cssLoaded]);

  return (
    <section className="experience-section" id="experience" ref={sectionRef} style={{ padding: '10rem 2rem 4rem' }}>
      <div className="experience-section__header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <TextPressure
          text="Career"
          flex
          alpha
          stroke={false}
          width
          weight={false}
          italic={false}
          textColor="#ffffff"
          strokeColor="#5227FF"
          minFontSize={36}
        />
      </div>

      <div className="timeline-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {isVisible && cssLoaded ? (
          <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
            <VerticalTimeline animate={true}>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={index}
                  contentStyle={{ background: '#1d1836', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid #232631' }}
                  date={experience.date}
                  dateClassName="timeline-date-text"
                  iconStyle={{ background: experience.iconBg, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  icon={experience.icon || <img src={experience.iconSrc} alt={experience.iconAlt} loading="lazy" width="40" height="40" />}
                >
                  <div>
                    <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
                      {experience.title}
                    </h3>
                    <p style={{ color: '#a78bfa', fontSize: '16px', fontWeight: '600', margin: 0, marginTop: '8px' }}>
                      {experience.company_name}
                    </p>
                  </div>

                  <ul style={{ marginTop: '1.5rem', listStyleType: 'disc', paddingLeft: '1rem' }}>
                    {experience.points.map((point, i) => (
                      <li key={`experience-point-${i}`} style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', marginBottom: '0.5rem', paddingLeft: '0.25rem', letterSpacing: '0.02em' }}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </Suspense>
        ) : (
          <div style={{ minHeight: '400px' }} />
        )}
      </div>
    </section>
  );
}

export default Experience;
