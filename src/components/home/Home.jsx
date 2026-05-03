
import Hyperspeed from "../../jsrepo/Hyperspeed";
import React from "react";
import ProfileCard from "../../jsrepo/ProfileCard";
import me from "../../../public/me.png";
import code from "../../../public/code.png";
import RotatingText from "../../jsrepo/RotatingText";
import "./home.css";
import TextPressure from "../../jsrepo/TextPressure";

function Home() {
  return (
    <div id="home">
      <div className="home-wrapper">

        {/* Background layer */}
        <div className="background ">
          <Hyperspeed />
        </div>

        {/* Responsive layout container overlay */}
        <div className="grid2">

          {/* Left Column: Profile Card */}
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

          {/* Right Column: Animated Text */}
          <div className="right-column">

            {/* Line 1: Hello, [I am Marwane Haddane] */}

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
                    staggerDuration={0.03}
                    staggerFrom="first"
                    loop={true}
                    auto={true}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-120%', opacity: 0 }}
                    className="hero-rotating-text"
                  />
                </span>
              </div>
            </div>

            {/* Line 2: Passionate by, [rotating interests] */}
            <div className="hero-line " style={{ marginTop: '1rem' }}>
              <div className="hov">
                <span className="hero-static-sm">Passionate by,</span>
              </div>
              <div className="hov">
                <span className="hero-rotating-box" style={{ padding: '0.1em 0.4em' }}>
                  <RotatingText
                    texts={[
                      'Ethical Hacking',
                      'Robotics & AI',
                      'Game & Web Dev',
                    ]}
                    splitBy="characters"
                    rotationInterval={2500}
                    staggerDuration={0.03}
                    staggerFrom="first"
                    loop={true}
                    auto={true}
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


    </div>
  );
}

export default Home;
