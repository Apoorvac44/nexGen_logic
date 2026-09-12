import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMail, FiPhone, FiMapPin, FiGlobe, FiSend, FiCheck, FiFacebook, FiLinkedin, FiInstagram, FiYoutube 
} from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const socialLinks = [
  { icon: FiFacebook, href: 'https://facebook.com' },
  { icon: FiLinkedin, href: 'https://linkedin.com' },
  { icon: FiInstagram, href: 'https://instagram.com' },
  { icon: FiYoutube, href: 'https://youtube.com' },
];

const Contact = () => {
  const { isDark } = useTheme();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    }, 1200);
  };

  const contactInfoStyle = {
    display: 'flex', alignItems: 'flex-start', gap: 16,
  };

  const iconBoxStyle = {
    width: 48, height: 48, borderRadius: 14,
    background: 'rgba(37,99,235,0.12)', color: '#22D3EE',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0, marginTop: 2,
  };

  const labelStyle = {
    fontWeight: 700, fontSize: '0.7rem', textTransform: 'uppercase',
    letterSpacing: '0.08em', color: '#94A3B8', marginBottom: 4,
  };

  const inputStyle = {
    width: '100%', padding: '14px 16px', borderRadius: 14,
    border: '1px solid #E2E8F0', fontSize: '0.9rem',
    outline: 'none', color: '#0F172A', transition: 'all 0.2s',
    fontFamily: 'Inter, sans-serif',
  };

  const formLabelStyle = {
    display: 'block', fontSize: '0.75rem', fontWeight: 700,
    color: '#475569', textTransform: 'uppercase', marginBottom: 8,
    fontFamily: 'Inter, sans-serif',
  };

  return (
    <section id="contact" style={{ padding: '96px 0', background: isDark ? '#060B18' : '#F0F4FF', color: isDark ? '#fff' : '#0F172A', position: 'relative', overflow: 'hidden', transition: 'background 0.3s ease, color 0.3s ease' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 64px' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, marginBottom: 16, color: isDark ? '#fff' : '#0F172A' }}>
            Get in Touch
          </h2>
          <p style={{ color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(15,23,42,0.65)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            We'd love to hear from you. Let's start a conversation!
          </p>
        </div>

        {/* 2-Column Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 40, alignItems: 'start', marginBottom: 64 }} className="contact-grid">
          
          {/* Left: Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }} className="contact-info">
            
            <div style={contactInfoStyle}>
              <div style={iconBoxStyle}><FiMapPin size={22} /></div>
              <div>
                <h4 style={labelStyle}>Location</h4>
                <p style={{ fontSize: '0.95rem', fontWeight: 600, color: isDark ? 'rgba(255,255,255,0.85)' : 'rgba(15,23,42,0.85)', lineHeight: 1.6 }}>
                  Ankola, Uttara Kannada, <br />
                  Karnataka, India - 581314
                </p>
              </div>
            </div>

            <div style={contactInfoStyle}>
              <div style={iconBoxStyle}><FiPhone size={22} /></div>
              <div>
                <h4 style={labelStyle}>Phone</h4>
                <a href="tel:+919739444449" style={{ fontSize: '0.95rem', fontWeight: 600, color: isDark ? 'rgba(255,255,255,0.85)' : 'rgba(15,23,42,0.85)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  +91 97394 44449
                </a>
              </div>
            </div>

            <div style={contactInfoStyle}>
              <div style={iconBoxStyle}><FiMail size={22} /></div>
              <div>
                <h4 style={labelStyle}>Email</h4>
                <a href="mailto:info@nexgenlogic.in" style={{ fontSize: '0.95rem', fontWeight: 600, color: isDark ? 'rgba(255,255,255,0.85)' : 'rgba(15,23,42,0.85)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  info@nexgenlogic.in
                </a>
              </div>
            </div>

            <div style={contactInfoStyle}>
              <div style={iconBoxStyle}><FiGlobe size={22} /></div>
              <div>
                <h4 style={labelStyle}>Website</h4>
                <a href="https://www.nexgenlogic.in" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.95rem', fontWeight: 600, color: isDark ? 'rgba(255,255,255,0.85)' : 'rgba(15,23,42,0.85)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  www.nexgenlogic.in
                </a>
              </div>
            </div>

            {/* Social */}
            <div style={{ paddingTop: 8 }}>
              <h4 style={labelStyle}>Follow Us</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 8 }}>
                {socialLinks.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={idx}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: 40, height: 40, borderRadius: 12,
                        background: isDark ? '#0F172A' : '#E8EEFF', border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(29,97,231,0.15)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: isDark ? 'rgba(255,255,255,0.6)' : '#1D61E7', textDecoration: 'none',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Form Card */}
          <div className="contact-form-col">
            <div className="white-card" style={{ padding: '40px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <label style={formLabelStyle}>Your Name</label>
                  <input
                    type="text" name="name" value={form.name} onChange={handleChange}
                    required placeholder="Enter your name" style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor='#1D61E7'; e.target.style.boxShadow='0 0 0 3px rgba(29,97,231,0.1)'; }}
                    onBlur={(e) => { e.target.style.borderColor='#E2E8F0'; e.target.style.boxShadow='none'; }}
                  />
                </div>
                <div>
                  <label style={formLabelStyle}>Your Email</label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    required placeholder="Enter your email" style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor='#1D61E7'; e.target.style.boxShadow='0 0 0 3px rgba(29,97,231,0.1)'; }}
                    onBlur={(e) => { e.target.style.borderColor='#E2E8F0'; e.target.style.boxShadow='none'; }}
                  />
                </div>
                <div>
                  <label style={formLabelStyle}>Subject</label>
                  <input
                    type="text" name="subject" value={form.subject} onChange={handleChange}
                    placeholder="Subject line" style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor='#1D61E7'; e.target.style.boxShadow='0 0 0 3px rgba(29,97,231,0.1)'; }}
                    onBlur={(e) => { e.target.style.borderColor='#E2E8F0'; e.target.style.boxShadow='none'; }}
                  />
                </div>
                <div>
                  <label style={formLabelStyle}>Your Message</label>
                  <textarea
                    rows={4} name="message" value={form.message} onChange={handleChange}
                    required placeholder="Write your message..."
                    style={{ ...inputStyle, resize: 'none' }}
                    onFocus={(e) => { e.target.style.borderColor='#1D61E7'; e.target.style.boxShadow='0 0 0 3px rgba(29,97,231,0.1)'; }}
                    onBlur={(e) => { e.target.style.borderColor='#E2E8F0'; e.target.style.boxShadow='none'; }}
                  />
                </div>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      style={{
                        padding: 16, background: '#ECFDF5', color: '#059669',
                        borderRadius: 14, fontWeight: 600, fontSize: '0.875rem',
                        display: 'flex', alignItems: 'center', gap: 8,
                      }}
                    >
                      <FiCheck size={18} />
                      <span>Thank you! Your message has been sent successfully.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-nxg"
                  style={{ width: '100%', justifyContent: 'center', padding: '16px 0', fontSize: '0.95rem' }}
                >
                  {status === 'sending' ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div style={{
          borderRadius: 24, overflow: 'hidden',
          border: '1px solid rgba(59,130,246,0.2)',
          boxShadow: '0 16px 48px rgba(0,0,0,0.25)',
          height: 320, position: 'relative',
        }}>
          <iframe
            title="NexGen Logic Innovations Location Map Ankola"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7799.7506050028375!2d74.29685!3d14.6706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe9c9af03a1e87%3A0x2d95f81b9d75a65!2sAnkola%2C%20Karnataka%20581314!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'contrast(1.05)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>

      {/* Responsive */}
      <style>{`
        @media (min-width: 1024px) {
          .contact-grid { grid-template-columns: 5fr 7fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
