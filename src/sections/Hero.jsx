import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiCpu, FiGlobe, FiLayers, FiShield, FiTrendingUp, FiZap } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import ParticleCanvas from '../components/ParticleCanvas';

const coreValues = [
  {
    icon: FiZap,
    title: 'Innovation',
    desc: 'We embrace new technologies and creative thinking to build smarter solutions.',
    color: '#3B82F6',
    bg: '#EFF6FF',
  },
  {
    icon: FiShield,
    title: 'Quality',
    desc: 'We follow best practices and ensure the highest quality in everything we do.',
    color: '#06B6D4',
    bg: '#ECFEFF',
  },
  {
    icon: FiCheckCircle,
    title: 'Integrity',
    desc: 'We believe in transparency, trust and long-term relationships.',
    color: '#6366F1',
    bg: '#EEF2FF',
  },
  {
    icon: FiTrendingUp,
    title: 'Impact',
    desc: 'We build solutions that create real-world impact and value.',
    color: '#10B981',
    bg: '#ECFDF5',
  },
];

const whatWeDoItems = [
  { title: 'Embedded Systems', icon: FiCpu, color: '#3B82F6', tag: 'Hardware + Firmware', desc: 'PCB design, microcontroller programming & real-time systems' },
  { title: 'IoT Solutions', icon: FiGlobe, color: '#8B5CF6', tag: 'Connected Devices', desc: 'Sensor networks, cloud dashboards & edge computing' },
  { title: 'Software Dev', icon: FiLayers, color: '#06B6D4', tag: 'Web & Mobile', desc: 'Full-stack apps, APIs & cross-platform solutions' },
  { title: 'Innovation Lab', icon: FiZap, color: '#10B981', tag: 'R&D Projects', desc: 'Prototyping, MVPs & cutting-edge experiments' },
];

const stats = [
  { value: '50+', label: 'Projects Completed', color: '#3B82F6' },
  { value: '30+', label: 'Happy Clients', color: '#06B6D4' },
  { value: '6+', label: 'Years of Experience', color: '#6366F1' },
  { value: '1st', label: 'Startup in Uttara Kannada (IoT & Embedded)', color: '#14B8A6' },
];

const Hero = () => {
  const { isDark } = useTheme();

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" style={{ position: 'relative', width: '100%', overflow: 'hidden', background: isDark ? '#060B18' : '#F8FAFC', color: isDark ? '#fff' : '#0F172A' }}>
      {/* Background Effects */}
      <div className="pcb-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.5 }}>
        <ParticleCanvas />
      </div>
      <div style={{ position: 'absolute', top: '20%', right: '20%', width: 500, height: 500, borderRadius: '50%', background: 'rgba(37, 99, 235, 0.12)', filter: 'blur(120px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '25%', left: '20%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(6, 182, 212, 0.08)', filter: 'blur(100px)', pointerEvents: 'none' }} />

      {/* Main Hero Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Content */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }} className="hero-content-col">
            
            {/* About Us Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 16px',
                borderRadius: 100,
                background: 'rgba(29, 97, 231, 0.15)',
                border: '1px solid rgba(59, 130, 246, 0.35)',
                color: '#93C5FD',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: 24,
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22D3EE', animation: 'pulse-glow 2s infinite' }} />
              ABOUT US
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                marginBottom: 24,
              }}
            >
              Engineering the Future,{' '}
              <span className="gradient-text-blue" style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
                One Chip at a Time
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                fontSize: '1.05rem',
                color: isDark ? 'rgba(255,255,255,0.65)' : 'rgba(15,23,42,0.7)',
                marginBottom: 32,
                maxWidth: 640,
                lineHeight: 1.8,
              }}
            >
              From concept to silicon — we design embedded systems, IoT platforms, and intelligent software that power the next wave of innovation. Built in India, engineered for the world.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); handleScroll('about'); }}
                className="btn-nxg inline-flex"
                style={{ padding: '14px 32px', fontSize: '0.95rem' }}
              >
                <span>Our Story</span>
                <FiArrowRight size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right Microchip Graphic */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }} className="hero-image-col">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              style={{ width: '100%', maxWidth: 420, position: 'relative' }}
            >
              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1',
                borderRadius: 24,
                background: 'rgba(15, 23, 42, 0.5)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}>
                <img 
                  src="/images/hero_nxg_chip.png" 
                  alt="NXG Microchip Processor"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 0 35px rgba(6,182,212,0.4))',
                    transition: 'transform 0.7s ease',
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div style={{ display: 'none', width: '100%', height: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <FiCpu size={56} style={{ color: '#22D3EE', marginBottom: 8 }} />
                  <span style={{ fontWeight: 800, fontSize: '1.25rem', color: '#fff', letterSpacing: '0.15em' }}>NXG</span>
                  <span style={{ fontSize: '0.625rem', color: '#22D3EE', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 4 }}>Processor</span>
                </div>

                {/* Floating Badges */}
                <div style={{
                  position: 'absolute', top: 16, left: 16,
                  background: 'rgba(15,23,42,0.9)', border: '1px solid rgba(6,182,212,0.3)',
                  borderRadius: 12, padding: '6px 12px', fontSize: '0.7rem', color: '#22D3EE',
                  fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: 8,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22D3EE', animation: 'pulse-glow 2s infinite' }} />
                  IoT & Embedded
                </div>
                <div style={{
                  position: 'absolute', bottom: 16, right: 16,
                  background: 'rgba(15,23,42,0.9)', border: '1px solid rgba(59,130,246,0.3)',
                  borderRadius: 12, padding: '6px 12px', fontSize: '0.7rem', color: '#60A5FA',
                  fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: 8,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#60A5FA', animation: 'pulse-glow 2.5s infinite' }} />
                  Smart Firmware
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div style={{ background: isDark ? '#0A1128' : '#EFF4FF', padding: '72px 0', borderTop: isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.06)', borderBottom: isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.06)', transition: 'background 0.3s ease' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: 100,
              background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)',
              color: '#60A5FA', fontSize: '0.7rem', fontWeight: 700,
              letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16,
            }}>
              What Drives Us
            </div>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: isDark ? '#fff' : '#0F172A', marginBottom: 12 }}>
              Our Core Values
            </h3>
            <p style={{ fontSize: '0.95rem', color: isDark ? 'rgba(255,255,255,0.5)' : '#64748B', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
              The principles that guide everything we build
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }} className="core-values-grid">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  style={{
                    position: 'relative',
                    borderRadius: 20,
                    padding: '28px 24px',
                    background: isDark
                      ? 'linear-gradient(145deg, rgba(17,24,39,0.9), rgba(13,21,38,0.8))'
                      : '#FFFFFF',
                    border: isDark
                      ? '1px solid rgba(255,255,255,0.06)'
                      : '1px solid rgba(0,0,0,0.06)',
                    overflow: 'hidden',
                    cursor: 'default',
                    transition: 'all 0.35s ease',
                    boxShadow: isDark
                      ? '0 8px 32px rgba(0,0,0,0.3)'
                      : '0 4px 20px rgba(15,23,42,0.06)',
                  }}
                >
                  {/* Colored accent bar at top */}
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 24, right: 24,
                    height: 3,
                    borderRadius: '0 0 3px 3px',
                    background: `linear-gradient(90deg, ${val.color}, ${val.color}88)`,
                  }} />

                  {/* Subtle glow behind icon */}
                  <div style={{
                    position: 'absolute',
                    top: 20, left: 16,
                    width: 60, height: 60,
                    borderRadius: '50%',
                    background: `${val.color}15`,
                    filter: 'blur(20px)',
                    pointerEvents: 'none',
                  }} />

                  {/* Icon */}
                  <div style={{
                    width: 52, height: 52, borderRadius: 16,
                    background: isDark ? `${val.color}18` : val.bg,
                    color: val.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 16,
                    border: `1px solid ${val.color}25`,
                    position: 'relative',
                  }}>
                    <Icon size={24} />
                  </div>

                  {/* Title */}
                  <h4 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700, fontSize: '1.05rem',
                    color: isDark ? '#F1F5F9' : '#0F172A',
                    marginBottom: 8,
                  }}>
                    {val.title}
                  </h4>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.82rem',
                    color: isDark ? 'rgba(255,255,255,0.5)' : '#64748B',
                    lineHeight: 1.65,
                    margin: 0,
                  }}>
                    {val.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Core Values Responsive */}
      <style>{`
        @media (min-width: 768px) {
          .core-values-grid { grid-template-columns: repeat(4, 1fr) !important; gap: 20px !important; }
          .core-values-grid > div { padding: 32px 28px !important; }
        }
      `}</style>

      {/* What We Do Section */}
      <div style={{ background: isDark ? '#060B18' : '#F8FAFC', padding: '80px 0', transition: 'background 0.3s ease' }}>
        <div className="container">
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: 100,
              background: isDark ? 'rgba(139,92,246,0.1)' : 'rgba(139,92,246,0.08)',
              border: '1px solid rgba(139,92,246,0.2)',
              color: '#A78BFA', fontSize: '0.7rem', fontWeight: 700,
              letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16,
            }}>
              Our Expertise
            </div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, marginBottom: 16, color: isDark ? '#fff' : '#0F172A' }}>
              What We Do
            </h2>
            <p style={{ color: isDark ? 'rgba(255,255,255,0.55)' : 'rgba(15,23,42,0.6)', fontSize: '1rem', lineHeight: 1.8, maxWidth: 560, margin: '0 auto 32px' }}>
              End-to-end solutions from firmware to cloud — we build the tech that powers tomorrow.
            </p>
          </div>

          {/* Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }} className="whatwedo-grid">
            {whatWeDoItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  onClick={() => handleScroll('services')}
                  style={{
                    position: 'relative',
                    borderRadius: 20,
                    padding: '24px 20px',
                    background: isDark
                      ? 'linear-gradient(145deg, rgba(17,24,39,0.95), rgba(13,21,38,0.85))'
                      : '#FFFFFF',
                    border: isDark
                      ? '1px solid rgba(255,255,255,0.06)'
                      : '1px solid rgba(0,0,0,0.06)',
                    borderLeft: `3px solid ${item.color}`,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.35s ease',
                    boxShadow: isDark
                      ? '0 8px 32px rgba(0,0,0,0.3)'
                      : '0 4px 20px rgba(15,23,42,0.06)',
                  }}
                >
                  {/* Corner glow */}
                  <div style={{
                    position: 'absolute', top: -20, right: -20,
                    width: 80, height: 80, borderRadius: '50%',
                    background: `${item.color}10`, filter: 'blur(25px)',
                    pointerEvents: 'none',
                  }} />

                  {/* Tag */}
                  <div style={{
                    fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: item.color,
                    marginBottom: 12, fontFamily: 'Inter, sans-serif',
                  }}>
                    {item.tag}
                  </div>

                  {/* Icon + Title row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 14, flexShrink: 0,
                      background: isDark ? `${item.color}15` : `${item.color}10`,
                      color: item.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      border: `1px solid ${item.color}20`,
                    }}>
                      <Icon size={22} />
                    </div>
                    <h4 style={{
                      fontFamily: 'Poppins, sans-serif', fontWeight: 700,
                      fontSize: '1rem',
                      color: isDark ? '#F1F5F9' : '#0F172A',
                      margin: 0,
                    }}>
                      {item.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.78rem',
                    color: isDark ? 'rgba(255,255,255,0.45)' : '#64748B',
                    lineHeight: 1.6, margin: 0,
                  }}>
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); handleScroll('services'); }}
              className="btn-nxg"
              style={{ fontSize: '0.9rem' }}
            >
              <span>Explore Our Services</span>
              <FiArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* What We Do Responsive */}
      <style>{`
        @media (min-width: 768px) {
          .whatwedo-grid { grid-template-columns: repeat(4, 1fr) !important; gap: 20px !important; }
        }
      `}</style>

      {/* Stats Counter */}
      <div style={{ background: isDark ? '#080E21' : '#E8EEFF', padding: '48px 0', borderTop: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(29,97,231,0.1)', transition: 'background 0.3s ease' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32, textAlign: 'center' }}>
            {stats.map((stat, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <span style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 800,
                  color: stat.color,
                  lineHeight: 1.1,
                }}>
                  {stat.value}
                </span>
                <span style={{ fontSize: '0.8rem', color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(15,23,42,0.6)', fontWeight: 500 }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Grid Styles */}
      <style>{`
        @media (min-width: 1024px) {
          .hero-grid { grid-template-columns: 7fr 5fr !important; }
          .what-we-do-grid { grid-template-columns: 5fr 7fr !important; }
        }
        .whatwedo-card:hover {
          border-color: rgba(59,130,246,0.4) !important;
          transform: translateY(-4px);
        }
      `}</style>
    </section>
  );
};

export default Hero;
