import React from 'react';
import { motion } from 'framer-motion';
import { HiChip } from 'react-icons/hi';
import { FiShield, FiShare2 } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const researchAreas = [
  {
    icon: HiChip,
    title: 'Edge AI',
    tagline: 'Intelligence at the Edge',
    color: '#6366F1',
    description: 'Bringing machine learning models and inference directly to resource-constrained microcontrollers and SoCs without relying on external cloud dependencies.',
    topics: [
      { label: 'On-device Inference', detail: 'Running specialized ML models directly on ARM Cortex-M/A and RISC-V architectures.' },
      { label: 'Model Quantization', detail: 'Minimizing parameter precision and model size to deploy within limited SRAM/Flash footprints.' },
      { label: 'Streaming Analytics', detail: 'Real-time classification, signal processing, and anomaly detection at the edge sensor level.' },
    ],
  },
  {
    icon: FiShield,
    title: 'Secure IoT',
    tagline: 'Security by Design',
    color: '#06B6D4',
    description: 'Securing IoT ecosystems from hardware fabrication root of trust components to cloud communication endpoints.',
    topics: [
      { label: 'TPM & Secure Element', detail: 'Hardware cryptographic key generation, storage, and authentication engines.' },
      { label: 'Hardware Root of Trust', detail: 'Immutable boot sequences and cryptographic firmware validation signatures.' },
      { label: 'mTLS & Secure Tunneling', detail: 'Encrypted bidirectional communication channels using hardware-accelerated certificates.' },
    ],
  },
  {
    icon: FiShare2,
    title: 'Interoperability',
    tagline: 'Connected Ecosystems',
    color: '#10B981',
    description: 'Enabling seamless machine-to-machine integrations using modern open-source networking standards and robust API contracts.',
    topics: [
      { label: 'MQTT & Matter', detail: 'Lightweight publish-subscribe telemetry and standardized unified smart device interfaces.' },
      { label: 'OPC-UA Core Integration', detail: 'Securing industrial communication protocols for legacy machine sensor telemetry.' },
      { label: 'Modern REST & Websockets', detail: 'Instant telemetry syncing between edge gateway controllers and React dashboard panels.' },
    ],
  },
];

const Research = () => {
  const { isDark } = useTheme();

  return (
    <section id="research" className="section-padding" style={{ background: isDark ? 'var(--primary)' : 'var(--bg-light)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="section-label section-label-cyan">Research & Innovation</span>
          <h2 className="section-title" style={{ color: isDark ? '#fff' : 'var(--primary)' }}>
            Pushing the Boundaries of <span className="gradient-text">Technology</span>
          </h2>
          <p className="section-subtitle" style={{ color: isDark ? 'rgba(255, 255, 255, 0.65)' : 'rgba(6, 11, 24, 0.7)' }}>
            Developing deep-tech solutions inside our Ankola R&D lab to optimize speed, security, and battery parameters.
          </p>
        </div>

        {/* Research Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 32 }}>
          {researchAreas.map((area, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={isDark ? 'premium-card' : 'premium-card-light'}
              style={{
                padding: 32,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                position: 'relative',
                overflow: 'hidden',
                background: isDark
                  ? `linear-gradient(135deg, ${area.color}18, ${area.color}08)`
                  : '#FFFFFF',
                border: `1px solid ${isDark ? `${area.color}30` : 'rgba(0,0,0,0.07)'}`,
              }}
            >
              {/* Top color accent */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${area.color}, transparent)`,
              }} />

              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: `${area.color}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <area.icon size={22} style={{ color: area.color }} />
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.1rem',
                    lineHeight: 1.3, color: isDark ? '#fff' : 'var(--primary)',
                  }}>
                    {area.title}
                  </h3>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: area.color }}>
                    {area.tagline}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p style={{
                fontSize: '0.875rem', lineHeight: 1.7, marginBottom: 24, fontWeight: 500,
                color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(6,11,24,0.65)',
              }}>
                {area.description}
              </p>

              {/* Topics */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
                {area.topics.map((topic, tidx) => (
                  <div
                    key={tidx}
                    style={{
                      padding: 14, borderRadius: 14,
                      background: isDark ? 'rgba(0,0,0,0.2)' : 'rgba(99,102,241,0.04)',
                      border: isDark ? '1px solid rgba(255,255,255,0.03)' : '1px solid rgba(99,102,241,0.06)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: area.color }} />
                      <p style={{
                        fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
                        letterSpacing: '0.06em', color: isDark ? '#fff' : 'var(--primary)',
                      }}>
                        {topic.label}
                      </p>
                    </div>
                    <p style={{ fontSize: '0.72rem', lineHeight: 1.6, color: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(6,11,24,0.55)' }}>
                      {topic.detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Collaboration Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            marginTop: 64, borderRadius: 24, padding: '48px', textAlign: 'center',
            position: 'relative', overflow: 'hidden',
            background: isDark
              ? 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(6,182,212,0.06))'
              : '#FFFFFF',
            border: `1px solid ${isDark ? 'rgba(99,102,241,0.2)' : 'rgba(0,0,0,0.07)'}`,
            boxShadow: !isDark ? '0 15px 40px rgba(99,102,241,0.08)' : undefined,
          }}
        >
          <h3 style={{
            fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 700, marginBottom: 16,
            color: isDark ? '#fff' : 'var(--primary)',
          }}>
            Interested in Technology Collaboration?
          </h3>
          <p style={{
            fontSize: '0.9rem', marginBottom: 32, maxWidth: 520, margin: '0 auto 32px',
            lineHeight: 1.7, fontWeight: 500,
            color: isDark ? 'rgba(255,255,255,0.65)' : 'rgba(6,11,24,0.7)',
          }}>
            We partner with academic engineering institutions, tech labs, and hardware startups to co-develop smart systems.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Partner With Us
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Research;
