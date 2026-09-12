import React from 'react';
import { motion } from 'framer-motion';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.12,
    }
  })
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.1 }
  })
};

const zoomInVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }
  })
};

const slideLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }
  })
};

const slideRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }
  })
};

const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    }
  }
};

export const FadeUp = ({ children, delay = 0, className = '', once = true }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once, margin: '-50px' }}
    custom={delay / 0.12}
    variants={fadeUpVariants}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeIn = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-50px' }}
    custom={delay / 0.1}
    variants={fadeInVariants}
    className={className}
  >
    {children}
  </motion.div>
);

export const ZoomIn = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-50px' }}
    custom={delay / 0.1}
    variants={zoomInVariants}
    className={className}
  >
    {children}
  </motion.div>
);

export const SlideLeft = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-50px' }}
    custom={delay / 0.1}
    variants={slideLeftVariants}
    className={className}
  >
    {children}
  </motion.div>
);

export const SlideRight = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-50px' }}
    custom={delay / 0.1}
    variants={slideRightVariants}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ children, className = '' }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-50px' }}
    variants={staggerContainerVariants}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = '' }) => (
  <motion.div variants={fadeUpVariants} className={className}>
    {children}
  </motion.div>
);

export { fadeUpVariants, fadeInVariants, zoomInVariants, staggerContainerVariants };
