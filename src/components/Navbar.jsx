import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMenu, FiX, FiSun, FiMoon, FiArrowRight, FiChevronRight,
  FiHome, FiInfo, FiGrid, FiBox, FiFolder, FiBookOpen, FiBriefcase, FiMail,
  FiPhone, FiMapPin, FiMessageSquare, FiLinkedin, FiFacebook, FiInstagram, FiYoutube
} from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'Home', href: '#home', icon: FiHome, subtitle: 'Startup Vision & Overview' },
  { label: 'About Us', href: '#about', icon: FiInfo, subtitle: 'Semiconductor & IoT Startup' },
  { label: 'Services', href: '#services', icon: FiGrid, subtitle: 'Embedded, Cloud & Hardware' },
  { label: 'Products', href: '#products', icon: FiBox, subtitle: 'IoT Edge Devices & OS' },
  { label: 'Projects', href: '#projects', icon: FiFolder, subtitle: 'Industrial Case Studies' },
  { label: 'Training', href: '#training', icon: FiBookOpen, subtitle: 'Hands-on Skill Courses' },
  { label: 'Careers', href: '#careers', icon: FiBriefcase, subtitle: 'Jobs & Internships' },
  { label: 'Contact Us', href: '#contact', icon: FiMail, subtitle: 'Reach Out To Us' },
];

const SECTION_IDS = ['home', 'about', 'services', 'products', 'projects', 'research', 'training', 'careers', 'contact'];
const NAVBAR_HEIGHT = 80;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const activeSectionRef = useRef('home');

  // ── Scroll spy ──
  useEffect(() => {
    const detectSection = () => {
      setScrolled(window.scrollY > 20);

      // If near the very bottom of the page, activate contact
      const scrollBottom = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      if (docHeight - scrollBottom < 120) {
        if (activeSectionRef.current !== 'contact') {
          activeSectionRef.current = 'contact';
          setActiveSection('contact');
        }
        return;
      }

      // If at the very top, activate home
      if (window.scrollY < 50) {
        if (activeSectionRef.current !== 'home') {
          activeSectionRef.current = 'home';
          setActiveSection('home');
        }
        return;
      }

      // Walk sections from bottom to top, find section matching header position
      let found = null;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= NAVBAR_HEIGHT + 60) {
            found = SECTION_IDS[i];
            break;
          }
        }
      }

      if (found && found !== activeSectionRef.current) {
        activeSectionRef.current = found;
        setActiveSection(found);
      }
    };

    window.addEventListener('scroll', detectSection, { passive: true });
    detectSection();
    return () => window.removeEventListener('scroll', detectSection);
  }, []);

  // ── Smooth scroll to section ──
  const scrollToSection = useCallback((sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }
  }, []);

  const handleNavClick = useCallback((link) => {
    setMenuOpen(false);
    const targetId = link.href.replace('#', '');
    scrollToSection(targetId);
  }, [scrollToSection]);

  return (
    <>
      <ScrollProgressBar />

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          background: scrolled
            ? isDark
              ? 'rgba(6, 11, 24, 0.94)'
              : 'rgba(255, 255, 255, 0.94)'
            : isDark ? 'rgba(6, 11, 24, 0.85)' : 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled
            ? isDark
              ? '1px solid rgba(255,255,255,0.08)'
              : '1px solid rgba(0,0,0,0.08)'
            : isDark ? '1px solid rgba(255,255,255,0.04)' : '1px solid rgba(0,0,0,0.02)',
          transition: 'all 0.3s ease',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}
          >
            <div style={{
              height: 44, padding: '4px 12px',
              background: '#fff', borderRadius: 12,
              boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
              border: '1px solid rgba(226,232,240,0.8)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <img 
                src="/images/logo.png" 
                alt="NEXGEN LOGIC INNOVATIONS" 
                style={{ height: 36, width: 'auto', objectFit: 'contain' }}
              />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="desktop-nav-links" style={{ display: 'none', alignItems: 'center', gap: 24 }}>
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link); }}
                  style={{
                    position: 'relative',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    letterSpacing: '0.03em',
                    padding: '6px 0',
                    textDecoration: 'none',
                    fontFamily: 'Inter, sans-serif',
                    transition: 'color 0.25s',
                    color: isActive
                      ? '#1D61E7'
                      : isDark
                      ? 'rgba(255, 255, 255, 0.75)'
                      : 'rgba(15, 23, 42, 0.75)',
                  }}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      style={{
                        position: 'absolute',
                        bottom: -1, left: 0, right: 0,
                        height: 2,
                        background: '#1D61E7',
                        borderRadius: 1,
                      }}
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                width: 40, height: 40, borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: 'none', cursor: 'pointer',
                background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                color: isDark ? '#cbd5e1' : '#475569',
                transition: 'all 0.2s',
              }}
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            {/* Get in Touch CTA - Desktop */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              className="btn-nxg desktop-cta-btn"
              style={{ display: 'none' }}
            >
              <span>Get in Touch</span>
              <FiArrowRight size={15} />
            </a>

            {/* Hamburger - Mobile */}
            <button
              className="mobile-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                display: 'flex',
                width: 40, height: 40, borderRadius: 12,
                alignItems: 'center', justifyContent: 'center',
                border: 'none', cursor: 'pointer',
                background: menuOpen ? '#1D61E7' : isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                color: menuOpen ? '#fff' : isDark ? '#cbd5e1' : '#475569',
                transition: 'all 0.2s',
              }}
            >
              {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Fullscreen Drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="mobile-drawer-overlay"
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 899,
                background: isDark ? 'rgba(3,6,18,0.5)' : 'rgba(15,23,42,0.2)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
              }}
            />
            {/* Drawer */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="mobile-drawer-panel"
              style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 901,
                background: isDark ? '#0D1526' : '#FFFFFF',
                borderTop: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)',
                borderRadius: '24px 24px 0 0',
                padding: '16px 0 32px',
                maxHeight: '70vh',
                overflowY: 'auto',
              }}
            >
              {/* Drag indicator */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                <div style={{ width: 40, height: 4, borderRadius: 2, background: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)' }} />
              </div>

              {/* Nav Items */}
              <div style={{ padding: '0 20px' }}>
                {navLinks.map((item) => {
                  const sid = item.href.replace('#','');
                  const isAct = activeSection === sid;
                  const Icon = item.icon;
                  return (
                    <button
                      key={sid}
                      onClick={() => { scrollToSection(sid); setMenuOpen(false); }}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 16,
                        padding: '14px 16px',
                        marginBottom: 4,
                        borderRadius: 16,
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.2s',
                        background: isAct
                          ? isDark ? 'rgba(29,97,231,0.12)' : 'rgba(29,97,231,0.06)'
                          : 'transparent',
                        color: isDark ? '#fff' : '#0F172A',
                      }}
                    >
                      <div style={{
                        width: 44, height: 44, borderRadius: 14,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                        background: isAct ? '#1D61E7' : isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
                        color: isAct ? '#fff' : isDark ? '#94A3B8' : '#64748B',
                        transition: 'all 0.2s',
                      }}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <div style={{
                          fontSize: '0.92rem',
                          fontWeight: isAct ? 700 : 600,
                          color: isAct ? '#1D61E7' : isDark ? '#E2E8F0' : '#1E293B',
                          fontFamily: 'Inter, sans-serif',
                        }}>
                          {item.label}
                        </div>
                        <div style={{
                          fontSize: '0.72rem',
                          color: isDark ? 'rgba(255,255,255,0.4)' : '#94A3B8',
                          marginTop: 2,
                        }}>
                          {item.subtitle}
                        </div>
                      </div>
                      {isAct && (
                        <div style={{
                          marginLeft: 'auto', width: 8, height: 8,
                          borderRadius: '50%', background: '#1D61E7', flexShrink: 0,
                        }} />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Contact CTA */}
              <div style={{ padding: '16px 20px 0' }}>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollToSection('contact'); setMenuOpen(false); }}
                  className="btn-nxg"
                  style={{ width: '100%', justifyContent: 'center', padding: '14px 0', fontSize: '0.92rem' }}
                >
                  <span>Get in Touch</span>
                  <FiArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Responsive CSS */}
      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav-links { display: flex !important; }
          .desktop-cta-btn { display: inline-flex !important; }
          .mobile-hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
};

const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress}%` }}
    />
  );
};

export default Navbar;
