import React from 'react'
import FloatingLines from '../../jsrepo/FloatingLines';
import './hero.css';
import TextPressure from '../../jsrepo/TextPressure';
import CardSwap, { Card } from '../../jsrepo/CardSwap';

function Hero() {
    return (
        <section className="hero-wrapper" id="hero">
            <div className="background-hero">
                <FloatingLines
                    enabledWaves={["top", "middle", "bottom"]}
                    lineCount={5}
                    lineDistance={5}
                    bendRadius={5}
                    bendStrength={-0.5}
                    interactive={true}
                    parallax={true}
                />
            </div>

            {/* Overlay sits above background */}
            <div className="hero-overlay">

                {/* Left column */}
                <div className="hero-left sm:mt-30 lg:mt-0">
                    <div style={{ position: 'relative', height: '300px' }}>
                        <TextPressure
                            text="Welecome "
                            flex
                            alpha={false}
                            stroke={false}
                            width={false}
                            weight
                            italic={true}
                            textColor="#ffffff"
                            strokeColor="#5227FF"
                            minFontSize={36}
                        />
                    </div>
                </div>

                {/* Right column */}
                <div className="hero-right -mt-20 sm:mb-30 mx-40 md:mr-20 ">
                    <div style={{ height: '600px', position: 'relative', width: '100%' }}>
                        <CardSwap
                            cardDistance={60}
                            verticalDistance={70}
                            delay={5000}
                            pauseOnHover={false}
                        >
                            <Card>
                                <div className="hov" style={{ height: '100%', padding: '20px', background: 'linear-gradient(135deg, #1a0533, #5227FF)', borderRadius: '20px' }}>
                                    <h3>Card 1</h3>
                                    <p>Your content here</p>
                                </div>
                            </Card>
                            <Card>
                                <div className="hov" style={{ height: '100%', padding: '20px', background: 'linear-gradient(135deg, #5227FF, #7B5BFF)', borderRadius: '20px' }}>
                                    <h3>Card 2</h3>
                                    <p>Your content here</p>
                                </div>
                            </Card>
                            <Card>
                                <div className="hov" style={{ height: '100%', padding: '20px', background: 'linear-gradient(135deg, #d6006c, #ff3399)', borderRadius: '20px' }}>
                                    <h3>Card 3</h3>
                                    <p>Your content here</p>
                                </div>
                            </Card>
                        </CardSwap>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Hero