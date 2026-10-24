import React, { useRef, useState } from 'react';
import { profile } from '../../content';
import './contact.css';

function ArrowIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M6 18 18 6M6 6h12v12" /></svg>;
}

function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState('');

  const sendEmail = async (event) => {
    event.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      const { default: emailjs } = await import('@emailjs/browser');
      await emailjs.sendForm('service_59tv4p7', 'template_1tfnfyb', form.current, 'W2IGIMOe7SbN8ovdL');
      form.current?.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-section__inner">
        <div className="contact-layout-grid">
          <div className="contact-intro">
            <span className="contact-eyebrow">LET’S TALK</span>
            <h2 id="contact-title" className="contact-title">Contact me</h2>
            <p className="contact-desc">Have a research opportunity or a project in mind? I’d be happy to hear from you.</p>
            <p className="contact-availability"><span aria-hidden="true" />International internships · Summer 2027</p>
            <svg className="contact-illustration" viewBox="0 0 260 180" fill="none" aria-hidden="true" focusable="false">
              <defs><linearGradient id="contactEnvelope" x1="48" y1="52" x2="220" y2="152" gradientUnits="userSpaceOnUse"><stop stopColor="#382052" /><stop offset="1" stopColor="#170d29" /></linearGradient></defs>
              <circle cx="130" cy="90" r="78" fill="#7c3aed" fillOpacity=".06" />
              <circle cx="130" cy="90" r="63" stroke="#a78bfa" strokeOpacity=".13" />
              <rect x="48" y="50" width="164" height="104" rx="16" fill="url(#contactEnvelope)" stroke="#a78bfa" strokeOpacity=".65" strokeWidth="2" />
              <path d="m50 57 68 48a20 20 0 0 0 24 0l68-48M50 146l54-45m106 45-54-45" stroke="#c4b5fd" strokeOpacity=".7" strokeWidth="2" strokeLinecap="round" />
              <circle cx="205" cy="48" r="22" fill="#26143e" stroke="#a78bfa" strokeOpacity=".6" />
              <path d="m197 48 6 6 10-12" stroke="#d8b4fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              <span className="contact-email__label">Email me directly</span>
              <span className="contact-email__address">{profile.email}<ArrowIcon /></span>
            </a>
            <nav className="contact-socials" aria-label="Social profiles">
              <a className="contact-social" href={profile.linkedin}>LinkedIn <ArrowIcon /></a>
              <a className="contact-social" href={profile.github}>GitHub <ArrowIcon /></a>
            </nav>
          </div>
          <div className="contact-form-card">
            <h3>Send a message</h3>
            <form ref={form} onSubmit={sendEmail} className="contact-form" aria-busy={status === 'sending'}>
              <div className="form-group">
                <label htmlFor="contact-name">Full name</label>
                <input id="contact-name" type="text" name="user_name" autoComplete="name" placeholder="Your name" maxLength={120} required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email address</label>
                <input id="contact-email" type="email" name="user_email" autoComplete="email" placeholder="you@example.com" maxLength={254} required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" placeholder="Tell me a little about your opportunity or idea…" rows={5} maxLength={5000} required />
              </div>
              <button type="submit" className="contact-submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'}<ArrowIcon /></button>
              <div className="contact-status" role="status" aria-live="polite" aria-atomic="true">
                {status === 'success' && <p className="contact-status--success">Thanks! Your message has been sent.</p>}
                {status === 'error' && <p className="contact-status--error">Your message couldn’t be sent. Please try again or <a href={`mailto:${profile.email}`}>email me directly</a>.</p>}
              </div>
            </form>
          </div>
        </div>
        <footer className="contact-footer"><p>Marwane Haddane · Fès, Morocco</p><a href="#home">Back to top <span aria-hidden="true">↑</span></a></footer>
      </div>
    </section>
  );
}

export default Contact;
