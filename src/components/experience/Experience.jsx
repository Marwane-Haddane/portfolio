import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaCode, FaServer, FaLaptopCode } from 'react-icons/fa';
import './experience.css';
import TextPressure from '../../jsrepo/TextPressure';

const experiences = [
  {
    title: 'Open to Internship',
    company_name: 'Available for Opportunities',
    icon: <img src="https://res.cloudinary.com/dnye0gigw/image/upload/v1778035272/ENSAFES_logo20230124155030_v3flsn.png" alt="internship" />,
    iconBg: "#ffffff",
    date: '2026 - Now',
    points: [
      'Seeking a Cybersecurity or AI internship from June to September 2026.',
      'Ready to apply offensive security skills and AI/ML knowledge to real-world challenges.',
      'Open to remote, hybrid, or on-site positions.',
    ],
  },
  {
    title: '1st Year Cyber Security Engineering',
    company_name: 'ENSA Fès',
    icon: <img src="https://res.cloudinary.com/dnye0gigw/image/upload/v1778035272/ENSAFES_logo20230124155030_v3flsn.png" alt="ENSA Fès" />,
    iconBg: "#ffffff",
    date: '2025 - 2026',
    points: [
      'Vice-President @ RoboGenius',
      'Leading 50+ engineers across 4 technical teams in robotics and AI projects.',
      'Participated in multiple CTF (Capture The Flag) competitions and hackathons.',
    ],
  },
  {
    title: 'Preparatory Cycle',
    company_name: 'ENSA Fès',
    icon: <img src="https://res.cloudinary.com/dnye0gigw/image/upload/v1778035272/ENSAFES_logo20230124155030_v3flsn.png" alt="ENSA Fès" />,
    iconBg: "#ffffff",
    date: '2024 - 2025',
    points: [
      'Mecatronic Chief @ RoboGenius',
      '1st Prize winner at GDG OpportunAI (Casablanca, 2025).',
      '3rd Prize winner at the IEEE Competition (ENSA, 2024).',
      'Completed 160+ volunteer hours with the Ministry of Youth.',
    ],
  }
];

function Experience() {
  return (
    <section className="experience-section" id="experience" style={{ padding: '10rem 2rem 4rem' }}>
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
        <VerticalTimeline animate={true}>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ background: '#1d1836', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid #232631' }}
              date={experience.date}
              dateClassName="timeline-date-text"
              iconStyle={{ background: experience.iconBg, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              icon={experience.icon}
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
      </div>
    </section>
  );
}

export default Experience;
