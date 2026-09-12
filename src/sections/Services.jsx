import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCpu, FiWifi, FiLayers, FiSmartphone, FiGlobe, FiCode, FiBookOpen, FiHelpCircle, FiArrowRight 
} from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const servicesData = [
  {
    icon: FiCpu,
    title: 'Embedded Systems Development',
    desc: 'Custom firmware, device drivers, MCU/DSP, and low-level software development.',
  },
  {
    icon: FiWifi,
    title: 'IoT Solutions',
    desc: 'End-to-end IoT product development with cloud integration and analytics.',
  },
  {
    icon: FiLayers,
    title: 'PCB Design',
    desc: 'Schematic, PCB layout, prototyping and product development support.',
  },
  {
    icon: FiSmartphone,
    title: 'Mobile App Development',
    desc: 'Cross-platform mobile applications for Android and iOS.',
  },
  {
    icon: FiGlobe,
    title: 'Web Development',
    desc: 'Modern, responsive and high-performance websites and web applications.',
  },
  {
    icon: FiCode,
    title: 'Software Development',
    desc: 'Scalable software solutions using latest technologies and best practices.',
  },
  {
    icon: FiBookOpen,
    title: 'Technical Training',
    desc: 'Industry-oriented training programs, internships and hands-on workshops.',
  },
  {
    icon: FiHelpCircle,
    title: 'Consulting',
    desc: 'We help you plan, design and implement the right technology solutions.',
  },
];

const Services = () => {
  const { isDark } = useTheme();

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" style={{ padding: '96px 0', background: isDark ? '#060B18' : '#F8FAFC', color: isDark ? '#fff' : '#0F172A', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 64px' }}>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            fontWeight: 800,
            marginBottom: 16,
            color: isDark ? '#fff' : '#0F172A'
          }}>
            Our Services
          </h2>
          <p style={{ color: isDark ? 'rgba(255,255,255,0.6)' : '#64748B', fontSize: '1.05rem', lineHeight: 1.8 }}>
            We deliver smart, reliable and scalable solutions customized to your business needs.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 24,
          marginBottom: 80,
        }}>
          {servicesData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="white-card"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', minHeight: 220 }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: 'rgba(29, 97, 231, 0.08)', color: '#1D61E7',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                }}>
                  <Icon size={24} />
                </div>
                <h3 style={{
                  fontFamily: 'Poppins, sans-serif', fontWeight: 700,
                  fontSize: '1.1rem', color: '#0F172A', marginBottom: 10, lineHeight: 1.35,
                }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(30, 58, 95, 0.9), #0B132B, rgba(15, 23, 42, 0.95))',
          border: '1px solid rgba(59, 130, 246, 0.25)',
          borderRadius: 24,
          padding: '40px 48px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        }}>
          <div>
            <h3 style={{
              fontFamily: 'Poppins, sans-serif', fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', color: '#fff', marginBottom: 8,
            }}>
              Have a Project in Mind?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
              Let's build something great together.
            </p>
          </div>
          <button
            onClick={handleScrollToContact}
            className="btn-nxg"
            style={{ padding: '14px 32px', fontSize: '0.95rem' }}
          >
            <span>Get in Touch</span>
            <FiArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;
