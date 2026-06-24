import Hyperspeed from "../../jsrepo/Hyperspeed";
import React from "react";
import ProfileCard from "../../jsrepo/ProfileCard";
import me from "../../../public/me.webp";
import code from "../../../public/code.png";
import RotatingText from "../../jsrepo/RotatingText";
import "./home.css";

function Home() {
  return (
    <div id="home">
      {/* Ensure the section is the relative parent for all absolute children */}
      <section style={{
        position: 'relative',
        background: '#08030e',
        minHeight: '100vh', // Changed to vh to fill screen
        overflow: 'hidden'
      }}>

        {/* BACKGROUND LAYER: Keep at z-index 0 */}
        <div className="background" style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none' // Ensures clicks go through to the cards
        }}>
          <Hyperspeed />
        </div>

        {/* CONTENT LAYER: Must be z-index 1 or higher */}
        <div className="home-wrapper" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid2">
            {/* Left Column */}
            <div className="left-column">
              <div className="hov">
                <ProfileCard
                  name="Marwane Haddane"
                  title="Cyber Sec Engineer"
                  handle="Marwane-Haddane"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl={me}
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={true}
                  onContactClick={() => window.open('https://www.linkedin.com/in/marwane-haddane/', '_blank')}
                  behindGlowColor="hsla(236, 100%, 70%, 0.6)"
                  iconUrl={code}
                  behindGlowEnabled={true}
                  innerGradient="linear-gradient(145deg,hsla(236, 40%, 45%, 0.55) 0%,hsla(280, 60%, 70%, 0.27) 100%)"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="right-column">
              <div className="hero-line">
                <div className="hov">
                  <span className="hero-static">Hello,</span>
                </div>
                <div className="hov">
                  <span className="hero-rotating-box">
                    <RotatingText
                      texts={['I am Marwane Haddane', 'Cyber Security Student']}
                      splitBy="characters"
                      rotationInterval={4000}
                      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                      initial={{ y: '100%', opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: '-120%', opacity: 0 }}
                      className="hero-rotating-text"
                    />
                  </span>
                </div>
              </div>

              <div className="hero-line" style={{ marginTop: '1rem' }}>
                <div className="hov">
                  <span className="hero-static-sm">Passionate by,</span>
                </div>
                <div className="hov">
                  <span className="hero-rotating-box" style={{ padding: '0.1em 0.4em' }}>
                    <RotatingText
                      texts={['Ethical Hacking', 'Robotics & AI', 'Game & Web Dev']}
                      splitBy="characters"
                      rotationInterval={2500}
                      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                      initial={{ y: '100%', opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: '-120%', opacity: 0 }}
                      className="hero-rotating-text-sm"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER LAYER: Pinned to bottom, z-index 2 */}
        <div className="custom-shape-divider-bottom-1777864161" style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          zIndex: 2,
          lineHeight: 0
        }}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '150px' }}>
            <defs>
              <linearGradient id="dividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#050209', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#10071d', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#050209', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              fill="url(#dividerGradient)"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  );
}

export default Home;