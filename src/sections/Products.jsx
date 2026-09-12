import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiArrowRight, FiCheck, FiCpu, FiHardDrive, FiServer, FiWifi, FiX, FiShield,
  FiSmartphone, FiHeart, FiActivity, FiTrendingUp, FiRadio, FiBarChart2, FiGrid,
  FiSliders, FiCode, FiTool, FiEye, FiVolume2, FiMapPin, FiClock, FiZap, FiHeadphones,
  FiSmile, FiAward, FiDownload, FiShoppingCart, FiChevronLeft, FiChevronRight, FiUsers, FiLayers, FiLock
} from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const categories = ['All Products', 'Edge Devices', 'IoT Solutions', 'Smart Storage', 'Accessories'];

const productsData = [
  {
    id: 'nxg-edgecloud',
    title: 'NXG EdgeCloud',
    category: 'Edge Devices',
    subCategory: 'AI-Powered Portable Edge Cloud',
    image: '/images/product_neo_edgecloud.png',
    desc: 'Your personal edge cloud for secure storage, file sharing, multi-device access and intelligent data management – anytime, anywhere.',
    featured: true,
    badges: ['Offline-First', 'Secure & Private', 'AI-Powered', 'Multi-User'],
    featuresMatrix: [
      { icon: FiCpu, text: 'AI Intelligence' },
      { icon: FiSmartphone, text: 'Multi-Device Access' },
      { icon: FiWifi, text: 'Offline-First' },
      { icon: FiHardDrive, text: 'Expandable Storage' }
    ],
    featuresList: [
      { title: 'Storage Virtualization', desc: 'Combine multiple drives into a unified, intelligent storage pool.' },
      { title: 'AI File Management', desc: 'Auto-organize, remove duplicates and find files using natural language.' },
      { title: 'Seamless Streaming', desc: 'Stream 4K videos, music and more to multiple devices simultaneously.' },
      { title: 'Secure Access Control', desc: 'Role-based access, user management and encrypted data transmission.' },
      { title: 'Expandable & Portable', desc: 'Compact, lightweight design with expandable storage options.' }
    ],
    specs: [
      { label: 'Processor', value: 'Quad-Core ARM Cortex-A55' },
      { label: 'RAM', value: '8GB LPDDR4' },
      { label: 'Storage Support', value: 'USB 3.0, USB-C, SD Card, SSD, NVMe' },
      { label: 'Wireless', value: 'Wi-Fi 6 (802.11ax) + Bluetooth 5.2' },
      { label: 'Battery', value: '10000mAh (Up to 8 Hours)' },
      { label: 'Operating System', value: 'NXG Edge OS (Linux Based)' },
      { label: 'Max Users', value: 'Up to 16 Devices' },
      { label: 'Dimensions', value: '110mm x 75mm x 24mm' },
      { label: 'Weight', value: '210g' }
    ],
    useCases: [
      { icon: FiUsers, title: 'Content Creators', desc: 'Transfer, store and stream large files on the go.' },
      { icon: FiSmile, title: 'Digital Families', desc: 'Centralized storage and secure access for everyone.' },
      { icon: FiBarChart2, title: 'Media & Production', desc: 'Share and stream files across teams effortlessly.' },
      { icon: FiAward, title: 'Education & Training', desc: 'Offline content sharing made simple in classrooms.' },
      { icon: FiMapPin, title: 'Travel & Outdoor', desc: 'Reliable data access wherever you are.' },
      { icon: FiShield, title: 'Business & Enterprise', desc: 'Secure data management for teams and offices.' }
    ]
  },
  {
    id: 'nxg-share',
    title: 'NXG Share',
    category: 'Smart Storage',
    subCategory: 'Smart Wireless Storage Device',
    image: '/images/product_neo_share.png',
    desc: 'Seamless file sharing across multiple devices with built-in Wi-Fi. No internet, no hassle – share instantly.',
    featured: false,
    badges: ['Wireless', 'Cross-Platform', 'High-Speed', 'Zero-Cloud'],
    featuresMatrix: [
      { icon: FiWifi, text: 'Wireless Sharing' },
      { icon: FiLayers, text: 'Multi-OS Support' },
      { icon: FiZap, text: 'High Speed Transfer' },
      { icon: FiShield, text: 'Secure Access' }
    ],
    featuresList: [
      { title: 'Cross-Platform Sync', desc: 'Wirelessly sync between iOS, Android, Windows, and macOS.' },
      { title: 'Zero Cloud Dependency', desc: 'Keep all data local for max privacy and ultra-fast transfers.' }
    ],
    specs: [
      { label: 'Wireless', value: 'Dual-Band Wi-Fi 5 (802.11ac)' },
      { label: 'Interface', value: 'USB-C 3.2 Gen 1, SD Slot' }
    ],
    useCases: [
      { icon: FiUsers, title: 'Photographers', desc: 'Instant photo offloading without a laptop.' }
    ]
  },
  {
    id: 'nxg-health-monitor',
    title: 'NXG Health Monitor',
    category: 'IoT Solutions',
    subCategory: 'IoT Health Monitoring Wearable',
    image: '/images/product_neo_edgecloud.png',
    desc: 'Real-time health tracking and alerts to help you live a healthier and smarter life.',
    featured: false,
    badges: ['Biometric', 'Real-Time Alerts', 'Long Battery', 'IP68 Water Resistant'],
    featuresMatrix: [
      { icon: FiHeart, text: 'Heart Rate' },
      { icon: FiActivity, text: 'SpO2 Monitor' },
      { icon: FiTrendingUp, text: 'Activity Tracking' },
      { icon: FiZap, text: 'Long Battery Life' }
    ],
    featuresList: [
      { title: 'Continuous ECG & SpO2', desc: 'Medical-grade optical sensors for vital tracking.' }
    ],
    specs: [
      { label: 'Display', value: '1.4" AMOLED Touch Screen' },
      { label: 'Battery', value: '14 Days Typical Usage' }
    ],
    useCases: [
      { icon: FiHeart, title: 'Elderly Care', desc: 'Remote health monitoring and fall detection.' }
    ]
  },
  {
    id: 'nxg-iot-controller',
    title: 'NXG IoT Controller',
    category: 'Edge Devices',
    subCategory: 'Industrial IoT Automation Controller',
    image: '/images/hero_nxg_chip.png',
    desc: 'Smart automation controller for industrial applications with remote monitoring, data logging and edge intelligence.',
    featured: false,
    badges: ['Modbus/RS485', 'DIN Rail Mount', 'MQTT/HTTP', 'Isolated I/O'],
    featuresMatrix: [
      { icon: FiRadio, text: 'Remote Monitoring' },
      { icon: FiBarChart2, text: 'Edge Analytics' },
      { icon: FiGrid, text: 'Multiple Protocols' },
      { icon: FiShield, text: 'Industrial Grade' }
    ],
    featuresList: [
      { title: 'Multi-Protocol Relay', desc: 'Bridge legacy PLCs with modern IoT cloud platforms.' }
    ],
    specs: [
      { label: 'Processor', value: 'Dual-Core ESP32-S3' },
      { label: 'Mounting', value: 'Standard 35mm DIN Rail' }
    ],
    useCases: [
      { icon: FiGrid, title: 'Smart Factories', desc: 'Automate machine telemetry and predictive maintenance.' }
    ]
  },
  {
    id: 'nxg-devkit',
    title: 'NXG DevKit',
    category: 'Edge Devices',
    subCategory: 'Embedded Development Kit',
    image: '/images/hero_nxg_chip.png',
    desc: 'Feature-rich development kit for engineers and innovators to build, test and prototype embedded solutions.',
    featured: false,
    badges: ['ARM Cortex-M4', 'Rich Peripherals', 'Open-Source SDK', 'Rapid Prototype'],
    sendText: 'Powerful MCU',
    featuresMatrix: [
      { icon: FiCpu, text: 'Powerful MCU' },
      { icon: FiSliders, text: 'Rich Interfaces' },
      { icon: FiCode, text: 'Open Source Support' },
      { icon: FiTool, text: 'Easy Prototyping' }
    ],
    featuresList: [
      { title: 'Plug & Play Expansion', desc: 'Compatible with standard shield boards and modules.' }
    ],
    specs: [
      { label: 'MCU', value: 'STM32F4 / ESP32-WROOM' }
    ],
    useCases: [
      { icon: FiCode, title: 'R&D Labs', desc: 'Accelerate hardware proof-of-concept development.' }
    ]
  },
  {
    id: 'nxg-smartcam',
    title: 'NXG Smart Cam',
    category: 'IoT Solutions',
    subCategory: 'AI-Powered IoT Camera',
    image: '/images/product_neo_edgecloud.png',
    desc: 'Intelligent security camera with AI detection, night vision and cloud/edge recording capabilities.',
    featured: false,
    badges: ['1080p HD', 'AI Human Detect', 'IR Night Vision', '2-Way Audio'],
    featuresMatrix: [
      { icon: FiEye, text: 'AI Detection' },
      { icon: FiLock, text: 'Night Vision' },
      { icon: FiVolume2, text: 'Two-way Audio' },
      { icon: FiServer, text: 'Cloud & Local Storage' }
    ],
    featuresList: [
      { title: 'Edge Object Recognition', desc: 'Detect humans, vehicles, and pets directly on device.' }
    ],
    specs: [
      { label: 'Resolution', value: '1080p @ 30fps Full HD' }
    ],
    useCases: [
      { icon: FiShield, title: 'Home & Office', desc: 'Secure perimeter monitoring.' }
    ]
  },
  {
    id: 'nxg-trackpro',
    title: 'NXG TrackPro',
    category: 'IoT Solutions',
    subCategory: 'GPS Vehicle Tracking Device',
    image: '/images/product_neo_share.png',
    desc: 'Real-time GPS tracking with geo-fencing, alerts and detailed journey analytics.',
    featured: false,
    badges: ['4G LTE + GPS', 'Geo-Fencing', 'Anti-Theft Alert', 'OBD-II Plug'],
    featuresMatrix: [
      { icon: FiMapPin, text: 'Real-time Tracking' },
      { icon: FiShield, text: 'Geo-fencing' },
      { icon: FiClock, text: 'History Playback' },
      { icon: FiZap, text: 'Tamper Alert' }
    ],
    featuresList: [
      { title: 'Fleet Telematics', desc: 'Monitor fuel level, speed alerts, and route history.' }
    ],
    specs: [
      { label: 'Positioning', value: 'GPS + GLONASS + Beidou' }
    ],
    useCases: [
      { icon: FiMapPin, title: 'Fleet Managers', desc: 'Optimize delivery routes.' }
    ]
  },
  {
    id: 'nxg-audiocast',
    title: 'NXG AudioCast',
    category: 'Accessories',
    subCategory: 'Wireless Audio Streaming Hub',
    image: '/images/product_neo_edgecloud.png',
    desc: 'Stream high-quality audio to multiple speakers simultaneously over Wi-Fi.',
    featured: false,
    badges: ['24-bit/192kHz', 'Multi-Room', 'AirPlay 2 / DLNA', 'Aux / Optical'],
    featuresMatrix: [
      { icon: FiHeadphones, text: 'Multi-room Audio' },
      { icon: FiVolume2, text: 'High Fidelity Sound' },
      { icon: FiSliders, text: 'Easy Setup' },
      { icon: FiWifi, text: 'Wide Compatibility' }
    ],
    featuresList: [
      { title: 'Hi-Fi DAC', desc: 'Lossless audio streaming across home or venue.' }
    ],
    specs: [
      { label: 'Audio Quality', value: '24-bit / 192kHz HD Audio' }
    ],
    useCases: [
      { icon: FiHeadphones, title: 'Audiophiles', desc: 'Upgrade speakers into wireless zones.' }
    ]
  }
];

const Products = () => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalThumbIndex, setModalThumbIndex] = useState(0);

  const filteredProducts = productsData.filter((p) => {
    if (activeCategory === 'All Products') return true;
    return p.category === activeCategory;
  });

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" style={{
      background: isDark ? '#0A0F1E' : '#F8FAFC',
      color: isDark ? '#FFFFFF' : '#0F172A',
      position: 'relative', overflow: 'hidden'
    }}>
      
      {/* ----------------------------------------------------
          1. HERO HEADER SECTION
         ---------------------------------------------------- */}
      <div style={{
        background: isDark ? 'linear-gradient(135deg, #060B18, #0B132B)' : 'linear-gradient(135deg, #0F172A, #1E293B)',
        color: '#FFFFFF',
        borderBottom: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(255,255,255,0.1)',
        paddingTop: 64, paddingBottom: 64
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 40, alignItems: 'center' }}>
            
            {/* Left Content */}
            <div>
              {/* Breadcrumb */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.85rem', color: '#94A3B8', marginBottom: 16, fontWeight: 500 }}>
                <a href="#home" style={{ color: '#94A3B8', textDecoration: 'none' }}>Home</a>
                <span style={{ fontSize: '0.75rem', color: '#475569' }}>&gt;</span>
                <span style={{ color: '#38BDF8', fontWeight: 600 }}>Products</span>
              </div>

              {/* Page Title */}
              <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 20 }}>
                Our <span style={{ color: '#38BDF8' }}>Products</span>
              </h1>

              {/* Subtitle */}
              <p style={{ color: '#94A3B8', fontSize: '1.02rem', lineHeight: 1.7, maxWidth: 540, marginBottom: 28 }}>
                Innovative, reliable and intelligent products engineered to simplify your life and empower your world. Designed with cutting-edge technology and built for performance.
              </p>

              {/* Highlights pills below paragraph */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(29,97,231,0.2)', border: '1px solid rgba(56,189,248,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8' }}>
                    <FiCpu size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F8FAFC' }}>Innovative Designs</div>
                    <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>Built for the Future</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(29,97,231,0.2)', border: '1px solid rgba(56,189,248,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8' }}>
                    <FiShield size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F8FAFC' }}>Tested for Reliability</div>
                    <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>Made to Perform</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Graphic: Microchip visual */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: 440 }}>
                <div style={{
                  position: 'absolute', inset: -20, background: 'radial-gradient(circle, rgba(29,97,231,0.35) 0%, transparent 70%)',
                  borderRadius: '50%', filter: 'blur(30px)', zIndex: 0
                }} />
                <img
                  src="/images/hero_nxg_chip.png"
                  alt="NXG Microchip Visual"
                  style={{ width: '100%', height: 'auto', objectFit: 'contain', position: 'relative', zIndex: 1, filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.5))' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* ----------------------------------------------------
          2. FILTER & PRODUCTS GRID
         ---------------------------------------------------- */}
      <div style={{ padding: '72px 0 80px', background: isDark ? '#0D1526' : '#F8FAFC' }}>
        <div className="container">
          
          {/* Section Sub-header */}
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: isDark ? '#38BDF8' : '#1D61E7', marginBottom: 8 }}>
              EXPLORE OUR INNOVATIVE RANGE
            </div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: isDark ? '#F1F5F9' : '#0F172A' }}>
              Products That Power Innovation
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 48 }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '9px 22px', borderRadius: 100, fontSize: '0.875rem', fontWeight: 600,
                  cursor: 'pointer', transition: 'all 0.25s ease', border: '1px solid',
                  background: activeCategory === cat ? '#1D61E7' : (isDark ? 'rgba(255,255,255,0.07)' : '#FFFFFF'),
                  borderColor: activeCategory === cat ? '#1D61E7' : (isDark ? 'rgba(255,255,255,0.15)' : '#E2E8F0'),
                  color: activeCategory === cat ? '#FFFFFF' : (isDark ? '#94A3B8' : '#475569'),
                  boxShadow: activeCategory === cat ? '0 4px 14px rgba(29,97,231,0.45)' : (isDark ? 'none' : '0 2px 6px rgba(0,0,0,0.04)')
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 8 Products 4-Column Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(285px, 1fr))',
            gap: 24,
            marginBottom: 72
          }}>
            {filteredProducts.map((prod) => (
              <motion.div
                key={prod.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: isDark ? 'rgba(255,255,255,0.04)' : '#FFFFFF',
                  borderRadius: 20,
                  padding: 22,
                  boxShadow: isDark ? '0 8px 30px rgba(0,0,0,0.3)' : '0 6px 20px rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: isDark ? '1px solid rgba(56,189,248,0.15)' : '1px solid #E2E8F0',
                  backdropFilter: 'blur(8px)',
                  position: 'relative',
                  transition: 'transform 0.2s, border-color 0.2s'
                }}
              >
                <div>
                  {/* Image Container */}
                  <div style={{
                    width: '100%', height: 170, borderRadius: 14,
                    background: isDark ? 'linear-gradient(135deg, #0A1428, #030712)' : '#F1F5F9',
                    overflow: 'hidden', marginBottom: 18, position: 'relative',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: isDark ? '1px solid rgba(0,0,0,0.08)' : '1px solid #E2E8F0'
                  }}>
                    {prod.featured && (
                      <span style={{
                        position: 'absolute', top: 10, left: 10, zIndex: 2,
                        background: '#1D61E7', color: '#fff', fontSize: '0.68rem',
                        fontWeight: 700, padding: '4px 10px', borderRadius: 100, textTransform: 'uppercase',
                        letterSpacing: '0.04em'
                      }}>
                        Featured
                      </span>
                    )}

                    <img
                      src={prod.image}
                      alt={prod.title}
                      style={{ width: '85%', height: '85%', objectFit: 'contain' }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{
                      display: 'none', width: '100%', height: '100%',
                      background: 'linear-gradient(135deg, #0F172A, #060B18)',
                      flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 12
                    }}>
                      <FiServer size={38} style={{ color: '#38BDF8', marginBottom: 6 }} />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.15rem', color: isDark ? '#38BDF8' : '#1D61E7', marginBottom: 3 }}>
                    {prod.title}
                  </h3>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: isDark ? '#CBD5E1' : '#0F172A', marginBottom: 10 }}>
                    {prod.subCategory}
                  </div>
                  <p style={{ fontSize: '0.83rem', color: isDark ? '#94A3B8' : '#64748B', lineHeight: 1.6, marginBottom: 18, minHeight: 52 }}>
                    {prod.desc}
                  </p>

                  {/* 2x2 Feature Matrix Icons */}
                  <div style={{
                    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 10px',
                    background: isDark ? 'rgba(56,189,248,0.06)' : '#EFF6FF',
                    padding: '12px 14px', borderRadius: 12, marginBottom: 18,
                    border: isDark ? '1px solid rgba(56,189,248,0.15)' : '1px solid #DBEAFE'
                  }}>
                    {prod.ibfkMatrix ? prod.ibfkMatrix : prod.featuresMatrix.map((item, idx) => {
                      const MatrixIcon = item.icon;
                      return (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.74rem', color: isDark ? '#CBD5E1' : '#475569', fontWeight: 600, lineHeight: 1.25 }}>
                          <MatrixIcon size={14} style={{ color: isDark ? '#38BDF8' : '#1D61E7', flexShrink: 0 }} />
                          <span style={{ overflow: 'hidden', wordBreak: 'break-word' }}>{item.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* View Details Link */}
                <button
                  onClick={() => { setSelectedProduct(prod); setModalThumbIndex(0); }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontSize: '0.85rem', fontWeight: 700, color: isDark ? '#38BDF8' : '#1D61E7',
                    background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0'
                  }}
                >
                  <span>View Details</span>
                  <FiArrowRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>


          {/* ----------------------------------------------------
              3. WHY CHOOSE NXG PRODUCTS SECTION
             ---------------------------------------------------- */}
          <div style={{
            background: isDark ? 'rgba(255,255,255,0.04)' : '#FFFFFF',
            borderRadius: 24, padding: '48px 40px', color: isDark ? '#F1F5F9' : '#0F172A',
            marginBottom: 60, boxShadow: isDark ? '0 10px 40px rgba(0,0,0,0.3)' : '0 6px 24px rgba(0,0,0,0.05)',
            border: isDark ? '1px solid rgba(56,189,248,0.2)' : '1px solid #E2E8F0',
            backdropFilter: 'blur(12px)'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: isDark ? '#38BDF8' : '#1D61E7', marginBottom: 8 }}>
                  WHY CHOOSE NXG PRODUCTS?
                </div>
                <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: isDark ? '#F1F5F9' : '#0F172A', lineHeight: 1.25, marginBottom: 14 }}>
                  Built for Performance.<br />Designed for You.
                </h2>
                <p style={{ color: isDark ? '#94A3B8' : '#64748B', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: 24, maxWidth: 460 }}>
                  Our products combine innovation, reliability and intelligent design to deliver exceptional experiences for individuals and businesses.
                </p>
                <button onClick={() => setActiveCategory('All Products')} className="btn-nxg" style={{ padding: '12px 26px', fontSize: '0.88rem' }}>
                  <span>Explore All Products</span>
                  <FiArrowRight size={15} />
                </button>
              </div>

              {/* 5 Feature Columns */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 16 }}>
                {[
                  { icon: FiZap, title: 'Innovation Driven', desc: 'Future-ready tech.' },
                  { icon: FiShield, title: 'Reliable & Secure', desc: 'Tested for max safety.' },
                  { icon: FiSmile, title: 'Easy to Use', desc: 'Seamless experience.' },
                  { icon: FiTrendingUp, title: 'Scalable Solutions', desc: 'Grows with your needs.' },
                  { icon: FiAward, title: 'Made in India', desc: 'Engineered for global.' }
                ].map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div key={i} style={{ textAlign: 'center', padding: 8 }}>
                      <div style={{
                        width: 50, height: 50, borderRadius: '50%',
                        background: isDark ? 'rgba(56,189,248,0.12)' : '#EFF6FF',
                        border: isDark ? '1px solid rgba(56,189,248,0.25)' : '1px solid #DBEAFE',
                        color: isDark ? '#38BDF8' : '#1D61E7',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px'
                      }}>
                        <Icon size={22} />
                      </div>
                      <div style={{ fontSize: '0.84rem', fontWeight: 700, color: isDark ? '#F1F5F9' : '#0F172A', marginBottom: 4 }}>{f.title}</div>
                      <div style={{ fontSize: '0.73rem', color: isDark ? '#94A3B8' : '#64748B' }}>{f.desc}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>


          {/* ----------------------------------------------------
              4. CUSTOM PRODUCT CTA BANNER
             ---------------------------------------------------- */}
          <div style={{
            background: isDark ? 'linear-gradient(135deg, #091738, #030712)' : 'linear-gradient(135deg, #0F172A, #1E293B)',
            borderRadius: 20, padding: '36px 44px', color: '#FFFFFF',
            border: isDark ? '1px solid rgba(56,189,248,0.25)' : '1px solid rgba(255,255,255,0.1)',
            display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24,
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <div style={{
                width: 80, height: 60, borderRadius: 12, background: 'rgba(29,97,231,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(56,189,248,0.3)', flexShrink: 0
              }}>
                <img src="/images/product_neo_edgecloud.png" alt="Device" style={{ width: '80%', height: '80%', objectFit: 'contain' }}
                  onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: 800, color: '#F8FAFC', marginBottom: 4 }}>
                  Have a custom product idea?
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.88rem' }}>
                  We can build it for you. Let's bring your vision to life.
                </p>
              </div>
            </div>

            <button onClick={handleScrollToContact} className="btn-nxg" style={{ padding: '13px 28px', fontSize: '0.9rem' }}>
              <span>Let's Build Together</span>
              <FiArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>


      {/* ====================================================
          5. COMPREHENSIVE PRODUCT DETAIL MODAL (Screenshot #5)
         ==================================================== */}
      <AnimatePresence>
        {selectedProduct && (
          <div
            style={{
              position: 'fixed', inset: 0, zIndex: 1000,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '20px 16px', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)',
              overflowY: 'auto'
            }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#FFFFFF', color: '#0F172A', borderRadius: 24,
                maxWidth: 980, width: '100%', maxHeight: '90vh', overflowY: 'auto',
                boxShadow: '0 30px 80px rgba(0,0,0,0.4)', position: 'relative', overflow: 'hidden'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                style={{
                  position: 'absolute', top: 20, right: 20, zIndex: 10,
                  width: 38, height: 38, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)', border: 'none',
                  color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
              >
                <FiX size={20} />
              </button>

              {/* A. Dark Hero Section inside Modal */}
              <div style={{
                background: 'linear-gradient(135deg, #060B18, #0B132B)', color: '#fff',
                padding: '40px 36px 30px'
              }}>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginBottom: 12 }}>
                  Home &gt; Products &gt; <span style={{ color: '#38BDF8', fontWeight: 600 }}>{selectedProduct.title}</span>
                </div>

                <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 6 }}>
                  {selectedProduct.title.split(' ')[0]} <span style={{ color: '#38BDF8' }}>{selectedProduct.title.split(' ').slice(1).join(' ')}</span>
                </h2>

                <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#E2E8F0', marginBottom: 12 }}>
                  {selectedProduct.subCategory}
                </div>

                <p style={{ color: '#94A3B8', fontSize: '0.92rem', maxWidth: 620, lineHeight: 1.6, marginBottom: 20 }}>
                  {selectedProduct.desc}
                </p>

                {/* Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                  {selectedProduct.badges.map((b, idx) => (
                    <span key={idx} style={{
                      padding: '4px 14px', borderRadius: 100, fontSize: '0.75rem', fontWeight: 600,
                      background: 'rgba(29,97,231,0.25)', color: '#38BDF8', border: '1px solid rgba(56,189,248,0.3)'
                    }}>
                      {b}
                    </span>
                  ))}
                </div>

                {/* Modal Hero CTAs */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                  <button
                    onClick={() => { setSelectedProduct(null); handleScrollToContact(); }}
                    className="btn-nxg"
                    style={{ padding: '12px 28px', fontSize: '0.88rem' }}
                  >
                    <span>Enquire Now</span>
                    <FiArrowRight size={16} />
                  </button>
                  <button
                    style={{
                      padding: '12px 24px', borderRadius: 100, fontSize: '0.88rem', fontWeight: 600,
                      background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)',
                      cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8
                    }}
                  >
                    <FiDownload size={16} />
                    <span>Download Datasheet</span>
                  </button>
                </div>
              </div>

              {/* B. Highlight Bar (5 Feature Icons - White Background matching Screenshot #5) */}
              <div style={{
                background: '#FFFFFF', padding: '20px 32px', color: '#0F172A',
                borderBottom: '1px solid #E2E8F0',
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 16
              }}>
                {[
                  { icon: FiHardDrive, label: 'Multiple Storage', sub: 'USB, SD Card, SSD' },
                  { icon: FiWifi, label: 'Wireless Hotspot', sub: 'Wi-Fi 6 & Bluetooth 5.2' },
                  { icon: FiCpu, label: 'AI Intelligence', sub: 'Smart Search & Org' },
                  { icon: FiUsers, label: 'Multi-User Access', sub: 'Connect up to 16 devices' },
                  { icon: FiShield, label: 'Secure & Private', sub: 'End-to-End Encryption' }
                ].map((h, i) => {
                  const Icon = h.icon;
                  return (
                    <div key={i} style={{ textAlign: 'center' }}>
                      <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#EFF6FF', color: '#1D61E7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 6px' }}>
                        <Icon size={18} />
                      </div>
                      <div style={{ fontSize: '0.78rem', fontWeight: 700 }}>{h.label}</div>
                      <div style={{ fontSize: '0.68rem', color: '#64748B' }}>{h.sub}</div>
                    </div>
                  );
                })}
              </div>

              {/* C. 3-Column Layout: Powerful Features | Center Gallery | Key Specs */}
              <div style={{ padding: '36px 32px', background: '#F8FAFC', color: '#0F172A' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 24, alignItems: 'start' }}>
                  
                  {/* Powerful Features */}
                  <div>
                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.1rem', marginBottom: 16, color: '#0F172A' }}>
                      Powerful Features
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {selectedProduct.featuresList.map((f, i) => (
                        <div key={i} style={{ display: 'flex', gap: 12 }}>
                          <div style={{ width: 28, height: 28, borderRadius: 8, background: '#EFF6FF', color: '#1D61E7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                            <FiCheck size={16} />
                          </div>
                          <div>
                            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A' }}>{f.title}</div>
                            <div style={{ fontSize: '0.78rem', color: '#64748B', lineHeight: 1.5 }}>{f.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Center Main Product Photo & Thumbnail Selector */}
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '100%', height: 230, borderRadius: 16, background: '#0F172A',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
                      marginBottom: 12, border: '1px solid #E2E8F0', padding: 12
                    }}>
                      <img src={selectedProduct.image} alt={selectedProduct.title} style={{ width: '90%', height: '90%', objectFit: 'contain' }} />
                    </div>

                    {/* Thumbnail gallery navigation */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                      <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748B' }}><FiChevronLeft size={18} /></button>
                      {[0, 1, 2, 3].map((idx) => (
                        <div
                          key={idx}
                          onClick={() => setModalThumbIndex(idx)}
                          style={{
                            width: 52, height: 42, borderRadius: 8, background: '#0F172A',
                            border: modalThumbIndex === idx ? '2px solid #1D61E7' : '1px solid #CBD5E1',
                            cursor: 'pointer', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'
                          }}
                        >
                          <img src={selectedProduct.image} alt="thumb" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                        </div>
                      ))}
                      <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748B' }}><FiChevronRight size={18} /></button>
                    </div>
                  </div>

                  {/* Key Specifications Column */}
                  <div style={{ background: '#EFF6FF', padding: 20, borderRadius: 16, border: '1px solid #DBEAFE' }}>
                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.1rem', marginBottom: 14, color: '#0F172A' }}>
                      Key Specifications
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {selectedProduct.specs.map((s, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: 12, fontSize: '0.78rem', borderBottom: '1px solid #DBEAFE', paddingBottom: 6 }}>
                          <span style={{ color: '#64748B', fontWeight: 500 }}>{s.label}</span>
                          <span style={{ color: '#0F172A', fontWeight: 700, textAlign: 'right' }}>{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* D. Built For Every Need (6 Grid Boxes) */}
                {selectedProduct.useCases && (
                  <div style={{ marginTop: 40 }}>
                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#0F172A', textAlign: 'center', marginBottom: 20 }}>
                      Built For Every Need
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12 }}>
                      {selectedProduct.useCases.map((uc, i) => {
                        const UcIcon = uc.icon;
                        return (
                          <div key={i} style={{ background: '#FFFFFF', padding: 14, borderRadius: 12, border: '1px solid #E2E8F0', textAlign: 'center' }}>
                            <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#EFF6FF', color: '#1D61E7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
                              <UcIcon size={18} />
                            </div>
                            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0F172A', marginBottom: 4 }}>{uc.title}</div>
                            <div style={{ fontSize: '0.7rem', color: '#64748B' }}>{uc.desc}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

              </div>

              {/* E. Modal Bottom Blue CTA Banner */}
              <div style={{
                background: 'linear-gradient(135deg, #091738, #030712)', padding: '28px 36px', color: '#fff',
                display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <img src={selectedProduct.image} alt="device" style={{ width: 50, height: 50, objectFit: 'contain' }} />
                  <div>
                    <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#fff' }}>
                      Ready to Experience the Power of {selectedProduct.title}?
                    </h4>
                    <p style={{ color: '#94A3B8', fontSize: '0.8rem' }}>Take control of your data. Anytime. Anywhere.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                    onClick={() => { setSelectedProduct(null); handleScrollToContact(); }}
                    className="btn-nxg"
                    style={{ padding: '10px 22px', fontSize: '0.85rem' }}
                  >
                    <span>Buy Now</span>
                    <FiShoppingCart size={15} />
                  </button>
                  <button
                    onClick={() => { setSelectedProduct(null); handleScrollToContact(); }}
                    style={{
                      padding: '10px 20px', borderRadius: 100, fontSize: '0.85rem', fontWeight: 600,
                      background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)',
                      cursor: 'pointer'
                    }}
                  >
                    Enquire Now &rarr;
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Products;
