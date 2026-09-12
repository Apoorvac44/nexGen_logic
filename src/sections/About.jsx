import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiHeart } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const timeline = [
  { year: '2024', event: 'Founded', desc: 'NEXGEN LOGIC INNOVATIONS was established with a vision to build breakthrough IoT systems.' },
  { year: '2024', event: 'Startup India Recognition', desc: 'Recognized by Startup India for engineering innovation in hardware and cloud layers.' },
  { year: '2025', event: 'Edge AI & Secure IoT', desc: 'Initiated deep research into on-device TinyML models and hardware root of trust protocols.' },
];

const coreValues = [
  { icon: '🔬', title: 'Innovation First', desc: 'Always questioning and designing custom protocols.' },
  { icon: '⚡', title: 'Speed & Quality', desc: 'Rapid prototyping coupled with robust architecture.' },
  { icon: '🤝', title: 'Collaboration', desc: 'Winning together with clients and developers.' },
  { icon: '🔐', title: 'Trust & Security', desc: 'Hardware-level encryption and secure codebases.' },
  { icon: '🌱', title: 'Sustainability', desc: 'Eco-conscious design parameters in hardware.' },
  { icon: '📚', title: 'Continuous Growth', desc: 'Research-driven environment for mentorship.' },
];

const missionVisionValues = [
  {
    icon: FiTarget,
    title: 'Our Mission',
    color: '#6366F1',
    bg: 'rgba(99, 102, 241, 0.1)',
    desc: 'To design and deliver cutting-edge IoT devices, embedded systems, and intelligent cloud solutions that solve real-world problems with precision and innovation.',
  },
  {
    icon: FiEye,
    title: 'Our Vision',
    color: '#06B6D4',
    bg: 'rgba(6, 182, 212, 0.1)',
    desc: 'To be a globally recognized leader in IoT and semiconductor innovation, shaping the future of connected, intelligent, and secure digital ecosystems.',
  },
  {
    icon: FiHeart,
    title: 'Core Values',
    color: '#10B981',
    bg: 'rgba(16, 185, 129, 0.1)',
    desc: 'Built on trust, innovation, speed, and collaboration — we are committed to engineering excellence and empowering the next generation of technology leaders.',
  },
];

const About = () => {
  const { isDark } = useTheme();

  return (
    <section id="about" className="section-padding" style={{ background: isDark ? 'var(--primary)' : 'var(--bg-light)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="section-label section-label-cyan">Who We Are</span>
          <h2 className="section-title" style={{ color: isDark ? '#fff' : 'var(--primary)' }}>
            Pioneering the Future of <span className="gradient-text">Smart Technology</span>
          </h2>
          <p className="section-subtitle" style={{ color: isDark ? 'rgba(255, 255, 255, 0.65)' : 'rgba(6, 11, 24, 0.7)' }}>
            NEXGEN LOGIC INNOVATIONS is an IoT and embedded systems startup focused on designing electronic devices, IoT hardware prototypes, embedded software, cloud platforms, and intelligent automation solutions.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ marginBottom: 96 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: isDark ? '#fff' : 'var(--primary)', marginBottom: 8 }}>
              Our Journey
            </h3>
            <div style={{ width: 48, height: 3, background: 'linear-gradient(90deg, #6366F1, #06B6D4)', margin: '0 auto', borderRadius: 2 }} />
          </div>

          <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute', left: 24, top: 0, bottom: 0, width: 2,
              background: 'linear-gradient(to bottom, #6366F1, #06B6D4, transparent)',
            }} className="timeline-line" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              {timeline.map((item, idx) => (
                <div key={idx} style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
                  {/* Circle */}
                  <div style={{
                    position: 'absolute', left: 24, top: 8,
                    width: 16, height: 16, borderRadius: '50%',
                    background: '#06B6D4', border: '4px solid #0F172A',
                    transform: 'translateX(-50%)', zIndex: 20,
                    boxShadow: '0 0 12px rgba(6,182,212,0.8)',
                  }} />

                  <div style={{ paddingLeft: 52, width: '100%' }}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.15 }}
                      className={isDark ? 'glass' : 'glass-light'}
                      style={{ padding: 24, borderRadius: 20 }}
                    >
                      <span style={{
                        display: 'inline-block', fontSize: '0.7rem', fontWeight: 700,
                        padding: '4px 10px', borderRadius: 100,
                        background: 'rgba(99,102,241,0.12)', color: '#A5B4FC',
                        marginBottom: 12,
                      }}>
                        {item.year}
                      </span>
                      <h4 style={{
                        fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1rem',
                        color: isDark ? '#fff' : 'var(--primary)', marginBottom: 8,
                      }}>
                        {item.event}
                      </h4>
                      <p style={{ fontSize: '0.8rem', lineHeight: 1.7, color: isDark ? 'rgba(255,255,255,0.55)' : 'rgba(6,11,24,0.65)' }}>
                        {item.desc}
                      </p>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 32, marginBottom: 96 }}>
          {missionVisionValues.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className={isDark ? 'premium-card' : 'premium-card-light'}
              style={{ padding: 32, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: item.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20,
              }}>
                <item.icon size={22} style={{ color: item.color }} />
              </div>
              <h3 style={{
                fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.2rem',
                color: isDark ? '#fff' : 'var(--primary)', marginBottom: 12,
              }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(6,11,24,0.65)' }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* What Drives Us */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h3 style={{
            fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem', fontWeight: 700,
            color: isDark ? '#fff' : 'var(--primary)', marginBottom: 8,
          }}>
            What Drives Us
          </h3>
          <div style={{ width: 48, height: 3, background: 'linear-gradient(90deg, #6366F1, #06B6D4)', margin: '0 auto', borderRadius: 2 }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 20 }}>
          {coreValues.map((val, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -5 }}
              className={isDark ? 'glass' : 'glass-light'}
              style={{
                padding: 20, borderRadius: 20, textAlign: 'center',
                border: isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.06)',
              }}
            >
              <div style={{ fontSize: '1.75rem', marginBottom: 12 }}>{val.icon}</div>
              <h4 style={{
                fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
                fontFamily: 'Poppins, sans-serif',
                color: isDark ? '#fff' : 'var(--primary)', marginBottom: 8,
              }}>
                {val.title}
              </h4>
              <p style={{ fontSize: '0.65rem', lineHeight: 1.6, color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(6,11,24,0.6)' }}>
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
