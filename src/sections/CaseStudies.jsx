import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiArrowRight, FiCheck, FiCpu, FiGlobe, FiLayers, FiShield, FiTrendingUp, FiTarget,
  FiUserCheck, FiUsers, FiAward, FiSearch, FiLayout, FiCode, FiSend, FiHeadphones,
  FiZap, FiRadio, FiActivity, FiGrid
} from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const categories = [
  'All Projects',
  'IoT Solutions',
  'Embedded Systems',
  'Industrial Automation',
  'Software Solutions',
  'Research & Development'
];

const projectsData = [
  {
    id: 'nxg-edgecloud-project',
    title: 'NXG EdgeCloud',
    subtitle: 'AI-Powered Portable Edge Cloud',
    category: 'Embedded Systems',
    desc: 'Smart portable device for secure storage, file sharing, and edge analytics designed for Indian tech ecosystems.',
    featured: true,
    tags: ['IoT', 'Edge Computing', 'Make in India'],
    image: '/images/product_neo_edgecloud.png'
  },
  {
    id: 'smart-agri',
    title: 'Smart AgTech Monitor',
    subtitle: 'IoT Soil & Crop Intelligence for Indian Farmers',
    category: 'IoT Solutions',
    desc: 'Real-time soil, weather, and crop health telemetry optimizing irrigation for Indian agricultural landscapes.',
    featured: true,
    tags: ['IoT', 'AgriTech', 'Telemetry'],
    image: '/images/indian_farmer_iot.jpg'
  },
  {
    id: 'industrial-auto',
    title: 'Smart Factory Automation',
    subtitle: 'IIoT Monitoring for Manufacturing Plants',
    category: 'Industrial Automation',
    desc: 'Custom industrial automation and telemetry to reduce downtime and boost productivity in manufacturing.',
    featured: false,
    tags: ['Automation', 'IIoT', 'Hardware'],
    image: '/images/indian_factory_automation.jpg'
  },
  {
    id: 'vehicle-tracking',
    title: 'Fleet Tracking & GPS',
    subtitle: 'Real-Time Indian Logistics Telemetry',
    category: 'IoT Solutions',
    desc: 'GPS-enabled telemetry, geo-fencing, and driver analytics for supply chain and logistics across India.',
    featured: false,
    tags: ['IoT', 'GPS Telemetry', 'Logistics'],
    image: '/images/indian_vehicle_tracking.jpg'
  },
  {
    id: 'smart-home',
    title: 'NexGen Smart Living',
    subtitle: 'Energy-Efficient IoT Automation',
    category: 'IoT Solutions',
    desc: 'Intelligent app-controlled energy management, climate control, and smart security for modern homes.',
    featured: false,
    tags: ['IoT', 'Smart Home', 'Energy Efficiency'],
    image: '/images/indian_smart_home.jpg'
  },
  {
    id: 'embedded-devkit-proj',
    title: 'NXG Micro-Silicon DevKit',
    subtitle: 'Custom RISC-V Hardware Platform',
    category: 'Embedded Systems',
    desc: 'Indigenous development board designed for rapid prototyping of IoT sensors and embedded control systems.',
    featured: false,
    tags: ['Embedded', 'Semiconductor', 'RISC-V'],
    image: '/images/hero_nxg_chip.png'
  },
  {
    id: 'health-wearable',
    title: 'Smart Health Monitoring',
    subtitle: 'Vital Monitoring Wearable Device',
    category: 'IoT Solutions',
    desc: 'Wearable bio-sensor band sending continuous heart rate, SpO2, and temperature telemetry to cloud portals.',
    featured: false,
    tags: ['IoT', 'MedTech', 'Wearable'],
    image: '/images/indian_health_tech.jpg'
  },
  {
    id: 'iot-dashboard',
    title: 'Enterprise IIoT Suite',
    subtitle: 'Cloud Analytics & Control Dashboard',
    category: 'Software Solutions',
    desc: 'Scalable cloud telemetry dashboard delivering real-time visualization and predictive insights for heavy machinery.',
    featured: false,
    tags: ['Cloud Software', 'IIoT', 'Analytics'],
    image: '/images/course_iot.png'
  }
];

const CaseStudies = () => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const filteredProjects = projectsData.filter((p) => {
    if (activeCategory === 'All Projects') return true;
    return p.category === activeCategory;
  });

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" style={{
      background: isDark ? '#0A0F1E' : '#F8FAFC',
      color: isDark ? '#F8FAFC' : '#0F172A',
      position: 'relative', overflow: 'hidden'
    }}>
      
      {/* ----------------------------------------------------
          1. HERO HEADER SECTION
         ---------------------------------------------------- */}
      <div style={{
        background: isDark ? 'linear-gradient(135deg, #060B18, #0D1B3E)' : 'linear-gradient(135deg, #0F172A, #1E293B)',
        color: '#FFFFFF',
        borderBottom: isDark ? '1px solid rgba(56,189,248,0.15)' : '1px solid rgba(255,255,255,0.1)',
        paddingTop: 72, paddingBottom: 72,
        position: 'relative'
      }}>
        {/* Background Ambient Glow */}
        <div style={{
          position: 'absolute', top: '-20%', left: '30%', width: '400px', height: '400px',
          background: isDark ? 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(29,97,231,0.2) 0%, transparent 70%)',
          filter: 'blur(50px)', pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 40, alignItems: 'center' }}>
            
            {/* Left Header Info */}
            <div>
              {/* Breadcrumb */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.85rem', color: '#94A3B8', marginBottom: 16, fontWeight: 500 }}>
                <a href="#home" style={{ color: '#94A3B8', textDecoration: 'none' }}>Home</a>
                <span style={{ fontSize: '0.75rem', color: '#475569' }}>&gt;</span>
                <span style={{ color: '#38BDF8', fontWeight: 600 }}>Projects</span>
              </div>

              {/* Title & Tagline */}
              <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 8, color: '#FFFFFF' }}>
                Our <span style={{ color: '#38BDF8' }}>Projects</span>
              </h1>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#38BDF8', marginBottom: 16 }}>
                Indigenous Engineering. Real-World Impact.
              </div>

              {/* Description */}
              <p style={{ color: '#94A3B8', fontSize: '1.02rem', lineHeight: 1.7, maxWidth: 540, marginBottom: 28 }}>
                Explore our portfolio of cutting-edge IoT, Embedded Microchips, and Software engineering projects built for Indian industries, smart farming, and next-gen hardware innovation.
              </p>

              {/* 4 Feature Pills */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, maxWidth: 500 }}>
                {[
                  { icon: FiCpu, text: 'Indigenous Tech' },
                  { icon: FiShield, text: 'Reliable & Secure' },
                  { icon: FiTrendingUp, text: 'Scalable IIoT' },
                  { icon: FiTarget, text: 'Proven Impact' }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      background: 'rgba(255,255,255,0.06)', padding: '10px 14px', borderRadius: 100,
                      border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)'
                    }}>
                      <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(56,189,248,0.2)', color: '#38BDF8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon size={15} />
                      </div>
                      <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#E2E8F0' }}>{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Graphic: Microchip Processor */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: 460 }}>
                <div style={{
                  position: 'absolute', inset: -15, background: 'radial-gradient(circle, rgba(56,189,248,0.25) 0%, transparent 70%)',
                  borderRadius: 24, filter: 'blur(25px)', zIndex: 0
                }} />
                <div style={{
                  borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(56,189,248,0.3)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)', position: 'relative', zIndex: 1,
                  background: 'linear-gradient(135deg, #0A1428, #030712)', padding: 24,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                }}>
                  <img
                    src="/images/indian_team_office.jpg"
                    alt="NexGen Logic Indian Engineering Team"
                    style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: 12, filter: isDark ? 'brightness(0.9)' : 'none' }}
                    onError={(e) => { e.target.onerror = null; e.target.src = '/images/hero_nxg_chip.png'; e.target.style.objectFit = 'contain'; }}
                  />
                  <div style={{
                    width: '100%', padding: '12px 18px', background: 'rgba(10,15,30,0.85)', backdropFilter: 'blur(8px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 12, marginTop: 12
                  }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#38BDF8' }}>Make in India Microchip Innovation</span>
                    <span style={{ fontSize: '0.72rem', background: 'rgba(56,189,248,0.15)', color: '#38BDF8', padding: '2px 8px', borderRadius: 100, fontWeight: 700 }}>50+ Deployments</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* ----------------------------------------------------
          2. FILTER & PROJECTS GRID
         ---------------------------------------------------- */}
      <div style={{ padding: '72px 0 80px', background: isDark ? '#0A0F1E' : '#F8FAFC' }}>
        <div className="container">

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 48 }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '9px 22px', borderRadius: 100, fontSize: '0.875rem', fontWeight: 600,
                  cursor: 'pointer', transition: 'all 0.25s ease',
                  border: activeCategory === cat ? (isDark ? '1px solid #38BDF8' : '1px solid #1D61E7') : (isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #E2E8F0'),
                  background: activeCategory === cat ? '#1D61E7' : (isDark ? 'rgba(255,255,255,0.04)' : '#FFFFFF'),
                  color: activeCategory === cat ? '#FFFFFF' : (isDark ? '#94A3B8' : '#475569'),
                  boxShadow: activeCategory === cat ? '0 4px 20px rgba(56,189,248,0.35)' : (isDark ? 'none' : '0 2px 6px rgba(0,0,0,0.04)'),
                  backdropFilter: 'blur(8px)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(285px, 1fr))',
            gap: 24,
            marginBottom: 72
          }}>
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: isDark ? 'rgba(255,255,255,0.04)' : '#FFFFFF',
                  borderRadius: 20, padding: 22,
                  backdropFilter: 'blur(8px)',
                  border: isDark ? '1px solid rgba(56,189,248,0.15)' : '1px solid #E2E8F0',
                  boxShadow: isDark ? '0 10px 30px rgba(0,0,0,0.3)' : '0 10px 25px rgba(0,0,0,0.05)',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  position: 'relative', overflow: 'hidden'
                }}
              >
                <div>
                  {/* Card Thumbnail Container */}
                  <div style={{
                    width: '100%', height: 170, borderRadius: 14,
                    background: isDark ? '#0D1526' : '#F1F5F9',
                    overflow: 'hidden', marginBottom: 16, position: 'relative',
                    border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #E2E8F0'
                  }}>
                    {proj.featured && (
                      <span style={{
                        position: 'absolute', top: 10, left: 10, zIndex: 2,
                        background: '#1D61E7', color: '#fff', fontSize: '0.68rem',
                        fontWeight: 700, padding: '3px 9px', borderRadius: 100, textTransform: 'uppercase',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                      }}>
                        Featured
                      </span>
                    )}
                    <img
                      src={proj.image}
                      alt={proj.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/hero_nxg_chip.png';
                        e.target.style.objectFit = 'contain';
                      }}
                    />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: isDark ? '#38BDF8' : '#1D61E7', marginBottom: 4 }}>
                    {proj.title}
                  </h3>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: isDark ? '#E2E8F0' : '#0F172A', marginBottom: 10 }}>
                    {proj.subtitle}
                  </div>
                  <p style={{ fontSize: '0.84rem', color: isDark ? '#94A3B8' : '#64748B', lineHeight: 1.6, marginBottom: 16, minHeight: 48 }}>
                    {proj.desc}
                  </p>
                </div>

                <div>
                  {/* View Case Study Trigger */}
                  <button
                    onClick={handleScrollToContact}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      fontSize: '0.84rem', fontWeight: 700, color: isDark ? '#38BDF8' : '#1D61E7',
                      background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0', marginBottom: 14,
                      transition: 'color 0.2s ease'
                    }}
                  >
                    <span>View Case Details</span>
                    <FiArrowRight size={14} />
                  </button>

                  {/* Tech Tags at Bottom */}
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {proj.tags.map((t, idx) => (
                      <span key={idx} style={{
                        background: isDark ? 'rgba(56,189,248,0.1)' : '#EFF6FF',
                        color: isDark ? '#38BDF8' : '#1D61E7',
                        fontSize: '0.7rem', fontWeight: 600, padding: '3px 9px', borderRadius: 6,
                        border: isDark ? '1px solid rgba(56,189,248,0.2)' : '1px solid #DBEAFE'
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>


          {/* ----------------------------------------------------
              3. STATS BANNER
             ---------------------------------------------------- */}
          <div style={{
            background: isDark ? 'linear-gradient(135deg, #060E20, #091738)' : 'linear-gradient(135deg, #0F172A, #1E293B)',
            borderRadius: 20, padding: '36px 40px', color: '#FFFFFF',
            border: isDark ? '1px solid rgba(56,189,248,0.25)' : '1px solid rgba(255,255,255,0.1)',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 24, marginBottom: 72, boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
          }}>
            {[
              { icon: FiLayers, number: '50+', label: 'Projects Completed' },
              { icon: FiUserCheck, number: '30+', label: 'Enterprise Clients' },
              { icon: FiAward, number: '6+', label: 'Years Experience' },
              { icon: FiUsers, number: '15+', label: 'Core Engineers' },
              { icon: FiGlobe, number: '10+', label: 'Industries Empowered' }
            ].map((st, i) => {
              const Icon = st.icon;
              return (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(56,189,248,0.15)', color: '#38BDF8', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px' }}>
                    <Icon size={22} />
                  </div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1, marginBottom: 4 }}>{st.number}</div>
                  <div style={{ fontSize: '0.78rem', color: '#94A3B8', fontWeight: 500 }}>{st.label}</div>
                </div>
              );
            })}
          </div>


          {/* ----------------------------------------------------
              4. OUR APPROACH / PROCESS WORKFLOW
             ---------------------------------------------------- */}
          <div style={{ marginBottom: 72 }}>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: isDark ? '#38BDF8' : '#1D61E7', marginBottom: 8 }}>
                OUR APPROACH
              </div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: isDark ? '#FFFFFF' : '#0F172A' }}>
                From Concept to Field Deployment
              </h2>
            </div>

            {/* 6 Step Process Cards */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: 20
            }}>
              {[
                { step: '01', icon: FiSearch, title: 'Discover', desc: 'Understanding technical needs & constraints.' },
                { step: '02', icon: FiLayout, title: 'Architect', desc: 'Hardware, firmware, & cloud architecture.' },
                { step: '03', icon: FiCode, title: 'Design & PCB', desc: 'Schematics, PCB layout, & firmware design.' },
                { step: '04', icon: FiCpu, title: 'Develop', desc: 'Prototyping, testing, and system calibration.' },
                { step: '05', icon: FiSend, title: 'Deploy', desc: 'Field installation & cloud integration.' },
                { step: '06', icon: FiHeadphones, title: 'Sustenance', desc: '24/7 telemetry monitoring & updates.' }
              ].map((pr, idx) => {
                const StepIcon = pr.icon;
                return (
                  <div key={idx} style={{
                    background: isDark ? 'rgba(255,255,255,0.04)' : '#FFFFFF',
                    padding: 22, borderRadius: 16,
                    color: isDark ? '#FFFFFF' : '#0F172A', textAlign: 'center',
                    border: isDark ? '1px solid rgba(56,189,248,0.15)' : '1px solid #E2E8F0',
                    backdropFilter: 'blur(8px)', boxShadow: isDark ? '0 8px 24px rgba(0,0,0,0.2)' : '0 6px 18px rgba(0,0,0,0.04)'
                  }}>
                    <div style={{
                      width: 46, height: 46, borderRadius: '50%',
                      background: isDark ? 'rgba(56,189,248,0.12)' : '#EFF6FF',
                      color: isDark ? '#38BDF8' : '#1D61E7',
                      border: isDark ? '1px solid rgba(56,189,248,0.25)' : '1px solid #DBEAFE',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px'
                    }}>
                      <StepIcon size={20} />
                    </div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: isDark ? '#38BDF8' : '#1D61E7', letterSpacing: '0.05em', marginBottom: 2 }}>STEP {pr.step}</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 800, color: isDark ? '#F8FAFC' : '#0F172A', marginBottom: 6 }}>{pr.title}</div>
                    <div style={{ fontSize: '0.75rem', color: isDark ? '#94A3B8' : '#64748B', lineHeight: 1.5 }}>{pr.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>


          {/* ----------------------------------------------------
              5. CTA BANNER
             ---------------------------------------------------- */}
          <div style={{
            background: isDark ? 'linear-gradient(135deg, #091738, #030712)' : 'linear-gradient(135deg, #0F172A, #1E293B)',
            borderRadius: 20, padding: '36px 44px', color: '#FFFFFF',
            border: isDark ? '1px solid rgba(56,189,248,0.3)' : '1px solid rgba(255,255,255,0.1)',
            display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24,
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <div style={{
                width: 54, height: 54, borderRadius: '50%', background: 'rgba(56,189,248,0.18)',
                color: '#38BDF8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
              }}>
                <FiZap size={26} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: 800, color: '#F8FAFC', marginBottom: 4 }}>
                  Have an IoT or Embedded project in mind?
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.88rem' }}>
                  Partner with our engineering team to build custom hardware and IoT solutions.
                </p>
              </div>
            </div>

            <button onClick={handleScrollToContact} className="btn-nxg" style={{ padding: '13px 28px', fontSize: '0.9rem' }}>
              <span>Get In Touch</span>
              <FiArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};

export default CaseStudies;
