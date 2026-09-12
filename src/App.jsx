import React, { useState, Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Loader from './components/Loader';

// Lazy-loaded sections for high performance
const Hero = lazy(() => import('./sections/Hero'));
const About = lazy(() => import('./sections/About'));
const Services = lazy(() => import('./sections/Services'));
const Products = lazy(() => import('./sections/Products'));
const CaseStudies = lazy(() => import('./sections/CaseStudies'));
const Research = lazy(() => import('./sections/Research'));
const Training = lazy(() => import('./sections/Training'));
const Careers = lazy(() => import('./sections/Careers'));
const Contact = lazy(() => import('./sections/Contact'));

const SectionFallback = () => (
  <div style={{
    width: '100%',
    padding: '128px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#060B18',
  }}>
    <div style={{
      width: 32,
      height: 32,
      borderRadius: '50%',
      border: '2px solid #3B82F6',
      borderTopColor: 'transparent',
      animation: 'spin 1s linear infinite',
    }} />
  </div>
);

/* Gradient divider between sections for premium feel */
const SectionDivider = () => (
  <div className="section-divider" />
);

/* Inner app that can access ThemeContext */
const AppInner = () => {
  const { isDark } = useTheme();
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!loaded && (
          <Loader key="loader" onComplete={() => setLoaded(true)} />
        )}
      </AnimatePresence>

      {loaded && (
        <>
          <Navbar />
          
          <main style={{
            background: isDark ? '#060B18' : '#F0F4FF',
            minHeight: '100vh',
            color: isDark ? '#ffffff' : '#0F172A',
            paddingTop: '76px',
            transition: 'background 0.3s ease, color 0.3s ease',
          }}>
            <Suspense fallback={<SectionFallback />}>
              <Hero />
              
              <SectionDivider />
              <About />
              
              <SectionDivider />
              <Services />
              
              <SectionDivider />
              <Products />
              
              <SectionDivider />
              <CaseStudies />

              <SectionDivider />
              <Research />
              
              <SectionDivider />
              <Training />
              
              <SectionDivider />
              <Careers />
              
              <SectionDivider />
              <Contact />
            </Suspense>
          </main>

          <Footer />
          <FloatingButtons />
        </>
      )}
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}

export default App;
