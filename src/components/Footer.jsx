import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiGlobe, FiFacebook, FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const linkStyle = {
    color: '#94A3B8', fontSize: '0.875rem',
    textDecoration: 'none', transition: 'color 0.2s',
    cursor: 'pointer',
  };

  return (
    <footer style={{
      background: isDark ? '#040813' : '#1E293B',
      color: '#fff',
      paddingTop: 64, paddingBottom: 32,
      borderTop: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(255,255,255,0.1)',
      fontFamily: 'Inter, sans-serif',
      transition: 'background 0.3s ease',
    }}>
      <div className="container">
        
        {/* Top Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 40,
          marginBottom: 48,
        }}>
          
          {/* Column 1: Logo & About */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{
              height: 48,
              padding: '4px 12px',
              backgroundColor: '#FFFFFF',
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}>
              <img 
                src="/images/logo.png" 
                alt="NEXGEN LOGIC INNOVATIONS" 
                style={{ height: 38, width: 'auto', objectFit: 'contain' }} 
              />
            </div>

            <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: 24, maxWidth: 320 }}>
              We help envision and execute your end-to-end transformational speed and at scale.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {[
                { icon: FiFacebook, href: 'https://facebook.com' },
                { icon: FiLinkedin, href: 'https://linkedin.com' },
                { icon: FiInstagram, href: 'https://instagram.com' },
                { icon: FiYoutube, href: 'https://youtube.com' },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: 36, height: 36, borderRadius: '50%',
                      background: 'rgba(37,99,235,0.12)', color: '#60A5FA',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      textDecoration: 'none', transition: 'all 0.25s ease',
                    }}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Us', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Products', href: '#products' },
                { label: 'Projects', href: '#projects' },
                { label: 'Training', href: '#training' },
                { label: 'Careers', href: '#careers' },
                { label: 'Contact Us', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    style={linkStyle}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Embedded Systems',
                'IoT Solutions',
                'PCB Design',
                'Mobile App Development',
                'Web Development',
                'Technical Training',
              ].map((serv) => (
                <li key={serv}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }}
                    style={linkStyle}
                  >
                    {serv}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>
              Contact Info
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <FiMapPin size={16} style={{ color: '#60A5FA', flexShrink: 0, marginTop: 3 }} />
                <span style={{ lineHeight: 1.5 }}>Ankola, Uttara Kannada, Karnataka, India - 581314</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <FiPhone size={16} style={{ color: '#60A5FA', flexShrink: 0 }} />
                <a href="tel:+919739444449" style={{ color: 'inherit', textDecoration: 'none' }}>+91 97394 44449</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <FiMail size={16} style={{ color: '#60A5FA', flexShrink: 0 }} />
                <a href="mailto:info@nexgenlogic.in" style={{ color: 'inherit', textDecoration: 'none' }}>info@nexgenlogic.in</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <FiGlobe size={16} style={{ color: '#60A5FA', flexShrink: 0 }} />
                <a href="https://www.nexgenlogic.in" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>www.nexgenlogic.in</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div style={{
          paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', flexWrap: 'wrap', alignItems: 'center',
          justifyContent: 'space-between', gap: 16,
          fontSize: '0.8rem', color: '#64748B',
        }}>
          <p>© 2024 NexGen Logic Innovations. All Rights Reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }} style={{ color: '#64748B', textDecoration: 'none', transition: 'color 0.2s' }}>
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }} style={{ color: '#64748B', textDecoration: 'none', transition: 'color 0.2s' }}>
              Terms & Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
