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
        className="fixed top-0 left-0 right-0 z-[900]"
        style={{
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
        <div className="container flex items-center justify-between" style={{ height: '76px' }}>
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className="flex items-center gap-3 text-decoration-none group"
          >
            <div className="h-11 px-3 py-1 bg-white rounded-xl shadow-sm border border-slate-200/80 flex items-center justify-center transition-transform group-hover:scale-[1.02]">
              <img 
                src="/images/logo.png" 
                alt="NEXGEN LOGIC INNOVATIONS" 
                className="h-9 w-auto object-contain" 
              />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link); }}
                  className="relative text-xs font-semibold tracking-wide transition-colors py-1.5"
                  style={{
                    fontFamily: 'Inter, sans-serif',
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
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#1D61E7] rounded-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
              style={{
                background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                color: isDark ? '#cbd5e1' : '#475569',
              }}
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            {/* Get in Touch CTA (Desktop only to prevent header crowding on mobile) */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              className="btn-nxg hidden xl:inline-flex"
            >
              <span>Get in Touch</span>
              <FiArrowRight size={15} />
            </a>

          </div>
        </div>
      </motion.nav>

      {/* ── Radial Arc FAB Navigation (Mobile only) ── */}
      <RadialArcNav
        navLinks={navLinks}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isDark={isDark}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </>
  );
};

/* Radial Arc: fan-out semicircle nav */
const COLORS = [
  '#3B82F6','#06B6D4','#6366F1','#10B981',
  '#F59E0B','#8B5CF6','#EF4444','#EC4899',
];

const RadialArcNav = ({ navLinks, activeSection, scrollToSection, isDark, menuOpen, setMenuOpen }) => {
  const RADIUS = 105;   // px from center of FAB to center of each icon
  const FAB_SIZE = 58;  // px

  // 8 items fanned across 170° arc centred at top (90° = straight up)
  // Angles go from 180+5 to 360-5 (left to right, above the button)
  const total = navLinks.length;
  const startAngle = 190;  // degrees (slightly past left)
  const endAngle   = 350;  // degrees (slightly before right)
  const step = (endAngle - startAngle) / (total - 1);

  const getPos = (index) => {
    const angleDeg = startAngle + index * step;
    const rad = (angleDeg * Math.PI) / 180;
    return {
      x: Math.cos(rad) * RADIUS,
      y: Math.sin(rad) * RADIUS,
    };
  };

  const activeLink = navLinks.find(l => l.href.replace('#','') === activeSection) || navLinks[0];
  const ActiveIcon = activeLink.icon;

  return (
    <div
      className="xl:hidden"
      style={{
        position: 'fixed',
        bottom: 28,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        width: FAB_SIZE,
        height: FAB_SIZE,
      }}
    >
      {/* Backdrop blur overlay when open */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: -1,
              background: isDark
                ? 'rgba(3, 6, 18, 0.6)'
                : 'rgba(15, 23, 42, 0.25)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
            }}
          />
        )}
      </AnimatePresence>

      {/* Arc nav items */}
      <AnimatePresence>
        {menuOpen && navLinks.map((item, idx) => {
          const { x, y } = getPos(idx);
          const sid = item.href.replace('#','');
          const isAct = activeSection === sid;
          const Icon = item.icon;
          const color = COLORS[idx % COLORS.length];

          return (
            <motion.div
              key={sid}
              initial={{ opacity: 0, x: 0, y: 0, scale: 0.3 }}
              animate={{ opacity: 1, x, y: -y, scale: 1 }}
              exit={{ opacity: 0, x: 0, y: 0, scale: 0.3 }}
              transition={{
                type: 'spring',
                stiffness: 380,
                damping: 22,
                delay: idx * 0.04,
              }}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                marginLeft: -24,
                marginTop: -24,
                zIndex: 10,
              }}
            >
              {/* Tooltip label */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: idx * 0.04 + 0.12 }}
                style={{
                  position: 'absolute',
                  bottom: 52,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  whiteSpace: 'nowrap',
                  background: isDark ? 'rgba(15,23,42,0.95)' : 'rgba(255,255,255,0.97)',
                  color: isDark ? '#E2E8F0' : '#0F172A',
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  padding: '3px 8px',
                  borderRadius: 99,
                  border: `1px solid ${color}44`,
                  boxShadow: `0 4px 12px ${color}33`,
                  pointerEvents: 'none',
                }}
              >
                {item.label}
              </motion.div>

              {/* Icon button */}
              <button
                onClick={() => { scrollToSection(sid); setMenuOpen(false); }}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: isAct
                    ? color
                    : isDark
                    ? 'rgba(15,23,42,0.9)'
                    : 'rgba(255,255,255,0.97)',
                  color: isAct ? '#fff' : color,
                  boxShadow: isAct
                    ? `0 0 0 3px ${color}55, 0 8px 24px ${color}66`
                    : `0 4px 16px rgba(0,0,0,0.25), 0 0 0 1.5px ${color}33`,
                  transition: 'box-shadow 0.2s, background 0.2s',
                }}
              >
                <Icon size={20} />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* FAB trigger button */}
      <motion.button
        whileTap={{ scale: 0.88 }}
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          width: FAB_SIZE,
          height: FAB_SIZE,
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 20,
          background: menuOpen
            ? 'linear-gradient(135deg, #EF4444, #DC2626)'
            : 'linear-gradient(135deg, #2563EB, #0891B2)',
          boxShadow: menuOpen
            ? '0 0 0 8px rgba(239,68,68,0.15), 0 12px 32px rgba(239,68,68,0.5)'
            : '0 0 0 8px rgba(37,99,235,0.15), 0 12px 32px rgba(37,99,235,0.55)',
          transition: 'background 0.35s, box-shadow 0.35s',
        }}
      >
        {/* Pulse ring */}
        {!menuOpen && (
          <motion.span
            animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '2px solid rgba(37,99,235,0.5)',
              pointerEvents: 'none',
            }}
          />
        )}

        {/* Icon */}
        <motion.div
          animate={{ rotate: menuOpen ? 45 : 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {menuOpen ? (
            <FiX size={24} color="#fff" />
          ) : (
            <ActiveIcon size={22} color="#fff" />
          )}
        </motion.div>
      </motion.button>
    </div>
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

