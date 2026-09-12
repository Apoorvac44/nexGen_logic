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
  { title: 'Embedded Systems', icon: FiCpu, gradient: 'linear-gradient(135deg, #1e3a5f, #0f172a)' },
  { title: 'IoT Solutions', icon: FiGlobe, gradient: 'linear-gradient(135deg, #312e81, #0f172a)' },
  { title: 'Software Development', icon: FiLayers, gradient: 'linear-gradient(135deg, #164e63, #0f172a)' },
  { title: 'Innovation Lab', icon: FiZap, gradient: 'linear-gradient(135deg, #134e4a, #0f172a)' },
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
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                marginBottom: 24,
              }}
            >
              Innovating Today for a <br />
              <span className="gradient-text-blue" style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
                Smarter Tomorrow
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
              NexGen Logic Innovations is an emerging technology startup specializing in Embedded Systems, IoT Solutions, and Intelligent Software. We turn ideas into reliable, scalable and impactful products.
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
      <div style={{ background: isDark ? '#0A1128' : '#EFF4FF', padding: '64px 0', borderTop: isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.06)', borderBottom: isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.06)', transition: 'background 0.3s ease' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem', fontWeight: 700, marginBottom: 4, color: isDark ? '#fff' : '#0F172A' }}>
              Our Core Values
            </h3>
            <div style={{ width: 48, height: 3, background: 'linear-gradient(90deg, #3B82F6, #06B6D4)', margin: '0 auto', borderRadius: 2 }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6 }}
                  className={isDark ? 'glass' : 'white-card'}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: val.bg, color: val.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 16,
                  }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: isDark ? '#fff' : '#0F172A', marginBottom: 8 }}>
                    {val.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: isDark ? 'rgba(255,255,255,0.6)' : '#64748B', lineHeight: 1.7 }}>
                    {val.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div style={{ background: isDark ? '#060B18' : '#F8FAFC', padding: '80px 0', transition: 'background 0.3s ease' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'center' }} className="what-we-do-grid">
            
            {/* Left */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} className="what-we-do-text">
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, marginBottom: 20, color: isDark ? '#fff' : '#0F172A' }}>
                What We Do
              </h2>
              <p style={{ color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(15,23,42,0.65)', fontSize: '1rem', lineHeight: 1.8, marginBottom: 32 }}>
                From concept to deployment, we provide end-to-end solutions in embedded software, IoT products, web & mobile applications, and technical training. Our goal is to help businesses and individuals innovate, integrate and grow in the digital era.
              </p>
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); handleScroll('services'); }}
                className="btn-nxg inline-flex"
              >
                <span>Read More</span>
                <FiArrowRight size={16} />
              </a>
            </div>

            {/* Right Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }} className="what-we-do-cards">
              {whatWeDoItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    onClick={() => handleScroll('services')}
                    style={{
                      position: 'relative',
                      borderRadius: 20,
                      padding: 24,
                      height: 180,
                      background: item.gradient,
                      border: '1px solid rgba(255,255,255,0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.35s ease',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                    }}
                    className="whatwedo-card"
                  >
                    <div style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: 'rgba(255,255,255,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#22D3EE', transition: 'transform 0.3s ease',
                    }}>
                      <Icon size={22} />
                    </div>
                    <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#fff', transition: 'color 0.3s ease' }}>
                      {item.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

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
