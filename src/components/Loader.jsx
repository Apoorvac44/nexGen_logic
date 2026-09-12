import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2600);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #060B18 0%, #0D1526 50%, #060B18 100%)' }}
    >
      {/* Atmosphere Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-72 h-72 rounded-full opacity-25 filter blur-[40px] pulse-glow"
          style={{ background: 'radial-gradient(circle, #6366F1, transparent)' }}
        />
      </div>

      {/* Main Logo & Loader */}
      <div className="relative flex flex-col items-center gap-6 z-10">
        <div className="relative">
          {/* Outer Ring */}
          <motion.div
            className="loader-ring"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
          />
          {/* Inner Ring */}
          <motion.div
            className="absolute inset-2.5 rounded-full"
            style={{ border: '2.5px solid transparent', borderBottomColor: '#06B6D4', borderLeftColor: '#10B981' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
          />
          {/* Center Hub */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3.5 h-3.5 rounded-full" style={{ background: 'linear-gradient(135deg, #6366F1, #06B6D4)' }} />
          </div>
        </div>

        {/* Company Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center"
        >
          <h1
            className="font-bold text-2xl tracking-[0.22em] mb-1.5"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <span className="gradient-text">NEXGEN</span>
            <span className="text-white"> LOGIC</span>
          </h1>
          <p className="text-[10px] tracking-[0.35em] text-cyan-400 font-bold uppercase">Innovations</p>
        </motion.div>

        {/* Loading Progress Bar */}
        <motion.div
          className="relative w-44 h-1 rounded-full overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        >
          <motion.div
            className="absolute top-0 left-0 h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #6366F1, #06B6D4, #10B981)' }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.1, ease: 'easeInOut' }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 0.6, duration: 1.8, repeat: 0 }}
          className="text-[10px] text-indigo-300 tracking-[0.25em] uppercase font-bold"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Connecting Edge...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
