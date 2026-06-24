import React, { useState, useRef, useEffect } from 'react';
import { GridScan } from '../../jsrepo/GridScan';
import emailjs from '@emailjs/browser';
import Lottie from 'lottie-react';
import './contact.css';

function Contact() {
    const [webcamEnabled, setWebcamEnabled] = useState(false);
    const videoRef = useRef(null);
    const form = useRef();
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'
    const [lottieData, setLottieData] = useState(null);

    useEffect(() => {
        fetch('/contact.json')
            .then(response => response.json())
            .then(data => setLottieData(data))
            .catch(err => console.error("Error loading lottie animation:", err));
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // template_1tfnfyb, service_59tv4p7, W2IGIMOe7SbN8ovdL
        emailjs
            .sendForm(
                'service_59tv4p7',
                'template_1tfnfyb',
                form.current,
                'W2IGIMOe7SbN8ovdL'
            )
            .then(
                () => {
                    setStatus('success');
                    form.current.reset();
                    setTimeout(() => setStatus(''), 5000);
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    setStatus('error');
                    setTimeout(() => setStatus(''), 5000);
                }
            );
    };


    const inputStyle = {
        background: 'rgba(30, 20, 60, 0.5)',
        border: '1px solid rgba(124, 58, 237, 0.2)',
        borderRadius: '12px',
        padding: '1rem',
        color: '#fff',
        fontSize: '1rem',
        outline: 'none',
        width: '100%',
        boxSizing: 'border-box'
    };

    return (
        <section className="contact-section" id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Shape Divider */}
            <div className="custom-shape-divider-top-1777860127" style={{
                position: 'absolute', top: 0, left: 0, width: '100%', overflow: 'hidden', lineHeight: 0, transform: 'rotate(180deg)', zIndex: 2
            }}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ position: 'relative', display: 'block', width: 'calc(100% + 1.3px)', height: '151px' }}>
                    <defs>
                        <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: '#050209', stopOpacity: 1 }} />
                            <stop offset="50%" style={{ stopColor: '#10071d', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#050209', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" style={{ fill: 'url(#myGradient)' }}></path>
                </svg>
            </div>

            {/* GridScan Background limited to Contact section */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '150%', inset: 0, pointerEvents: 'none' }}>
                <GridScan
                    enableWebcam={webcamEnabled}
                    showPreview={webcamEnabled}
                    externalVideoRef={videoRef}
                    sensitivity={0.55}
                    lineThickness={1}
                    linesColor="#2F293A"
                    gridScale={0.1}
                    scanColor="#FF9FFC"
                    scanOpacity={0.4}
                    enablePost={true}
                    bloomIntensity={0.6}
                    chromaticAberration={0.002}
                    noiseIntensity={0.01}
                />
            </div>

            <div className="contact-section__inner" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column' }}>




                <div className="contact-layout-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', width: '100%', alignItems: 'flex-end' }}>
                    {/* Left: Form */}
                    <div style={{
                        background: 'rgba(20, 10, 40, 0.95)',
                        borderRadius: '24px',
                        border: '1px solid rgba(124, 58, 237, 0.3)',
                        backdropFilter: 'blur(10px)',
                        height: 'auto',
                        width: '90%',
                        maxWidth: '600px',
                        padding: '3rem', // This adds the breathing room inside the card
                        margin: '2rem auto', // Centers the card on the page
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                        opacity: webcamEnabled ? 0.2 : 1,
                        transition: 'opacity 0.5s ease'
                    }}>

                        <div style={{ textAlign: 'left', width: '100%', marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#fff', margin: '0', letterSpacing: '-0.02em' }}>
                                Contact me
                            </h2>
                        </div>

                        <div style={{ width: '100%' }}>
                            <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                                {/* Form Group 1 */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <label style={{ color: '#fff', fontSize: '1rem', fontWeight: '500' }}>Nom, prénom</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        placeholder="Quel est votre nom, prénom?"
                                        required
                                        style={inputStyle}
                                    />
                                </div>

                                {/* Form Group 2 */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <label style={{ color: '#fff', fontSize: '1rem', fontWeight: '500' }}>Adresse e-mail</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        placeholder="Quelle est votre adresse e-mail?"
                                        required
                                        style={inputStyle}
                                    />
                                </div>

                                {/* Form Group 3 */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <label style={{ color: '#fff', fontSize: '1rem', fontWeight: '500' }}>Message</label>
                                    <textarea
                                        name="message"
                                        placeholder="Que voulez-vous dire?"
                                        rows="5"
                                        required
                                        style={inputStyle}
                                    ></textarea>
                                </div>

                                <div style={{ marginTop: '1rem' }}>
                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        style={{
                                            background: 'rgba(124, 58, 237, 0.1)',
                                            border: '1px solid rgba(124, 58, 237, 0.5)',
                                            padding: '1rem 2.5rem',
                                            borderRadius: '12px',
                                            color: '#fff',
                                            fontSize: '1.1rem',
                                            fontWeight: '700',
                                            cursor: 'pointer',
                                            transition: '0.3s',
                                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                                        }}
                                    >
                                        {status === 'sending' ? 'En cours...' : 'Envoyer'}
                                    </button>
                                </div>

                                {status === 'success' && <p style={{ color: '#4ade80', marginTop: '1rem' }}><b>Message envoyé avec succès!</b></p>}
                                {status === 'error' && <p style={{ color: '#f87171', marginTop: '1rem' }}><b>Erreur lors de l'envoi.</b></p>}
                            </form>
                        </div>
                    </div>
                    {/* Right: Lottie & Instructions */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem', marginTop: '2rem' }}>
                        {lottieData && <Lottie animationData={lottieData} loop={true} style={{ width: '100%', maxWidth: '1200px', marginBottom: '1.5rem', opacity: webcamEnabled ? 0.2 : 1, transition: 'opacity 0.5s ease' }} />}

                        <div style={{
                            textAlign: 'left', marginBottom: '2.5rem', background: 'rgba(20, 10, 40, 0.95)',
                            borderRadius: '24px',
                            border: '1px solid rgba(124, 58, 237, 0.3)',
                            backdropFilter: 'blur(10px)',
                            height: 'auto',
                            width: '90%',
                            maxWidth: '600px',
                            padding: '3rem', // This adds the breathing room inside the card
                            margin: '2rem auto', // Centers the card on the page
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                        }}>
                            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>Interactive Background</h3>
                            {webcamEnabled ? (
                                <div style={{ marginBottom: '2rem' }}>
                                    <p style={{ color: '#4ade80', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1rem', fontWeight: 'bold' }}>
                                        Move your head to control the background!
                                    </p>
                                    <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(124, 58, 237, 0.4)', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', width: '100%', height: '220px' }}>
                                        <video ref={videoRef} muted playsInline autoPlay style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)' }} />
                                    </div>
                                </div>
                            ) : (
                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                                    You can control the dynamic background using your face! Turn on Game Mode, grant camera access, and move your head to interact with the environment.
                                </p>
                            )}
                            <button
                                type="button"
                                onClick={() => setWebcamEnabled(!webcamEnabled)}
                                className="webcam-toggle-btn"
                                style={{
                                    background: webcamEnabled ? 'rgba(124, 58, 237, 0.3)' : '#7c3aed',
                                    color: '#fff',
                                    border: '1px solid #7c3aed',
                                    boxShadow: webcamEnabled ? 'none' : '0 0 20px rgba(124, 58, 237, 0.4)'
                                }}
                            >
                                {webcamEnabled ? 'Disable Game Mode' : 'Enable Game Mode'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}

export default Contact;