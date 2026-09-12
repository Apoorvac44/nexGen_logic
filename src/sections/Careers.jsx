import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiArrowRight, FiCheck, FiBriefcase, FiUsers, FiAward, FiBookOpen, FiZap, FiCode,
  FiCpu, FiRadio, FiSmile, FiTrendingUp, FiHeart, FiX, FiSend, FiClock, FiMapPin
} from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const jobCategories = ['All', 'Software Development', 'Embedded Systems', 'IoT', 'Hardware', 'Design', 'Marketing'];

const jobsData = [
  {
    id: 'emb-dev',
    title: 'Embedded Software Engineer',
    category: 'Embedded Systems',
    type: 'Full-Time',
    location: 'Ankola, Karnataka (On-site)',
    exp: '2-5 Years',
    skills: 'C / C++ / Linux',
    desc: 'Work on embedded firmware development, device drivers, and performance optimization for IoT products.',
    icon: FiCode
  },
  {
    id: 'fullstack-dev',
    title: 'Full Stack Developer',
    category: 'Software Development',
    type: 'Full-Time',
    location: 'Ankola, Karnataka (Hybrid)',
    exp: '2-4 Years',
    skills: 'MERN Stack',
    desc: 'Build scalable web applications and APIs using modern technologies and frameworks.',
    icon: FiCode
  },
  {
    id: 'iot-eng',
    title: 'IoT Solutions Engineer',
    category: 'IoT',
    type: 'Full-Time',
    location: 'Ankola, Karnataka (On-site)',
    exp: '3-5 Years',
    skills: 'IoT / MQTT / AWS',
    desc: 'Design and develop IoT solutions, integrate sensors, connectivity and cloud platforms.',
    icon: FiCpu
  },
  {
    id: 'uiux-des',
    title: 'UI/UX Designer',
    category: 'Design',
    type: 'Full-Time',
    location: 'Ankola, Karnataka (Hybrid)',
    exp: '1-3 Years',
    skills: 'Figma / Adobe XD',
    desc: 'Create intuitive user experiences and beautiful interfaces for web and mobile applications.',
    icon: FiZap
  }
];

const internRoles = [
  { title: 'Embedded Systems Intern', mode: 'On-site', duration: '2-6 Months' },
  { title: 'IoT Development Intern', mode: 'On-site / Remote', duration: '3-6 Months' },
  { title: 'Web Development Intern', mode: 'Remote', duration: '3-6 Months' },
  { title: 'UI/UX Design Intern', mode: 'Remote', duration: '3-6 Months' }
];

const Careers = () => {
  const { isDark } = useTheme();
  const [activeJobCategory, setActiveJobCategory] = useState('All');
  const [selectedJob, setSelectedJob] = useState(null);

  const filteredJobs = jobsData.filter((j) => {
    if (activeJobCategory === 'All') return true;
    return j.category === activeJobCategory;
  });

  const handleScrollToOpenings = () => {
    const el = document.getElementById('openings');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="careers" style={{
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
              <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#38BDF8', marginBottom: 12 }}>
                CAREERS AT NXG
              </div>
              <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                Build Your Career.<br />
                <span style={{ color: '#38BDF8' }}>Shape the Future.</span>
              </h1>
              <p style={{ color: '#94A3B8', fontSize: '1.02rem', lineHeight: 1.7, maxWidth: 520, marginBottom: 28 }}>
                Join NexGen Logic Innovations and work on cutting-edge technologies that impact millions. Learn, grow and innovate with a passionate team.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
                <button onClick={handleScrollToOpenings} className="btn-nxg" style={{ padding: '13px 28px', fontSize: '0.9rem' }}>
                  <span>View Openings</span>
                  <FiArrowRight size={16} />
                </button>
                <button
                  onClick={handleScrollToContact}
                  style={{
                    padding: '13px 26px', borderRadius: 100, fontSize: '0.9rem', fontWeight: 600,
                    background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)',
                    cursor: 'pointer'
                  }}
                >
                  Apply for Internship
                </button>
              </div>
            </div>

            {/* Right Photo/Graphic */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                position: 'relative', width: '100%', maxWidth: 520, height: 320,
                borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(56,189,248,0.25)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.6)', background: 'linear-gradient(135deg, #0A1428, #030712)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24
              }}>
                <img
                  src="/images/indian_career_hiring.jpg"
                  alt="Join NexGen Logic - Indian Engineering Team Hiring"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', borderRadius: 12 }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/indian_tech_team.jpg';
                    e.target.style.objectFit = 'cover';
                  }}
                />
                <div style={{ position: 'absolute', bottom: 16, left: 16, background: 'rgba(10,15,30,0.85)', backdropFilter: 'blur(8px)', padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(56,189,248,0.25)', fontSize: '0.78rem', color: '#38BDF8', fontWeight: 700 }}>
                  Building India's Next Tech Leaders
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* ----------------------------------------------------
          2. STATS BANNER
         ---------------------------------------------------- */}
      <div style={{ padding: '40px 0 60px' }}>
        <div className="container">
          <div style={{
            background: isDark ? 'linear-gradient(135deg, #060E20, #091738)' : 'linear-gradient(135deg, #0F172A, #1E293B)',
            borderRadius: 20, padding: '28px 36px', color: '#FFFFFF',
            border: isDark ? '1px solid rgba(56,189,248,0.2)' : '1px solid rgba(255,255,255,0.1)',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 20, boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
          }}>
            {[
              { icon: FiUsers, number: '50+', label: 'Team Members' },
              { icon: FiAward, number: '6+', label: 'Years of Innovation' },
              { icon: FiBriefcase, number: '20+', label: 'Open Positions' },
              { icon: FiBookOpen, number: '30+', label: 'Interns Mentored' },
              { icon: FiZap, number: '100+', label: 'Projects Delivered' }
            ].map((st, i) => {
              const Icon = st.icon;
              return (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(29,97,231,0.25)', color: '#38BDF8', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
                    <Icon size={20} />
                  </div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', lineHeight: 1, marginBottom: 4 }}>{st.number}</div>
                  <div style={{ fontSize: '0.76rem', color: '#94A3B8', fontWeight: 500 }}>{st.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>


      {/* ----------------------------------------------------
          3. MAIN CONTENT: OPENINGS & INTERNSHIP SPLIT
         ---------------------------------------------------- */}
      <div id="openings" style={{ paddingBottom: 72 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 36, alignItems: 'start', color: isDark ? '#FFFFFF' : '#0F172A' }}>
            
            {/* LEFT COLUMN: Current Openings */}
            <div style={{ flex: '2 1 540px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: isDark ? '#38BDF8' : '#1D61E7', marginBottom: 6 }}>
                CURRENT OPENINGS
              </div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.75rem', fontWeight: 800, color: isDark ? '#F1F5F9' : '#0F172A', marginBottom: 8 }}>
                Explore Career Opportunities
              </h2>
              <p style={{ color: isDark ? '#94A3B8' : '#64748B', fontSize: '0.88rem', marginBottom: 24, lineHeight: 1.6 }}>
                We are always looking for talented and passionate individuals to join our team and help us build innovative solutions.
              </p>

              {/* Filter Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                {jobCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveJobCategory(cat)}
                    style={{
                      padding: '7px 18px', borderRadius: 100, fontSize: '0.8rem', fontWeight: 600,
                      cursor: 'pointer', border: '1px solid',
                      background: activeJobCategory === cat ? '#1D61E7' : (isDark ? 'rgba(255,255,255,0.07)' : '#FFFFFF'),
                      borderColor: activeJobCategory === cat ? '#1D61E7' : (isDark ? 'rgba(255,255,255,0.15)' : '#E2E8F0'),
                      color: activeJobCategory === cat ? '#FFFFFF' : (isDark ? '#94A3B8' : '#475569'),
                      boxShadow: activeJobCategory === cat ? '0 4px 12px rgba(29,97,231,0.4)' : (isDark ? 'none' : '0 2px 6px rgba(0,0,0,0.04)')
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Job Listing Cards Stack */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28 }}>
                {filteredJobs.map((j) => {
                  const JobIcon = j.icon;
                  return (
                    <div
                      key={j.id}
                      style={{
                        background: isDark ? 'rgba(255,255,255,0.04)' : '#FFFFFF', borderRadius: 16, padding: 20,
                        color: isDark ? '#F1F5F9' : '#0F172A',
                        boxShadow: isDark ? '0 8px 30px rgba(0,0,0,0.3)' : '0 6px 20px rgba(0,0,0,0.05)',
                        border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #E2E8F0',
                        display: 'flex', gap: 16, alignItems: 'flex-start',
                        backdropFilter: 'blur(8px)', transition: 'border-color 0.2s'
                      }}
                    >
                      <div style={{
                        width: 44, height: 44, borderRadius: 12,
                        background: isDark ? 'rgba(56,189,248,0.15)' : '#EFF6FF',
                        color: isDark ? '#38BDF8' : '#1D61E7',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        border: isDark ? '1px solid rgba(56,189,248,0.25)' : '1px solid #DBEAFE'
                      }}>
                        <JobIcon size={22} />
                      </div>

                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: 4 }}>
                          <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: isDark ? '#F1F5F9' : '#0F172A' }}>
                            {j.title}
                          </h3>
                          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                            <span style={{ background: isDark ? 'rgba(255,255,255,0.1)' : '#F1F5F9', color: isDark ? '#CBD5E1' : '#475569', fontSize: '0.72rem', fontWeight: 600, padding: '3px 9px', borderRadius: 6 }}>
                              {j.exp}
                            </span>
                            <span style={{ background: isDark ? 'rgba(56,189,248,0.15)' : '#EFF6FF', color: isDark ? '#38BDF8' : '#1D61E7', fontSize: '0.72rem', fontWeight: 700, padding: '3px 9px', borderRadius: 6 }}>
                              {j.skills}
                            </span>
                          </div>
                        </div>

                        <div style={{ fontSize: '0.78rem', marginBottom: 8, fontWeight: 500, color: isDark ? '#7B8FAB' : '#64748B' }}>
                          {j.type} • {j.location}
                        </div>

                        <p style={{ fontSize: '0.82rem', color: isDark ? '#94A3B8' : '#64748B', lineHeight: 1.5, marginBottom: 12 }}>
                          {j.desc}
                        </p>

                        <button
                          onClick={() => setSelectedJob(j)}
                          style={{
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                            fontSize: '0.82rem', fontWeight: 700, color: isDark ? '#38BDF8' : '#1D61E7',
                            background: 'none', border: 'none', cursor: 'pointer', padding: 0
                          }}
                        >
                          <span>View Details</span>
                          <FiArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button onClick={handleScrollToContact} className="btn-nxg" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>
                <span>View All Openings</span>
                <FiArrowRight size={15} />
              </button>
            </div>

            {/* RIGHT COLUMN: Internship Program */}
            <div style={{
              flex: '1 1 320px',
              background: isDark ? 'linear-gradient(135deg, rgba(14,22,45,0.95), rgba(8,14,30,0.98))' : '#FFFFFF',
              borderRadius: 20, padding: 24, color: isDark ? '#F1F5F9' : '#0F172A',
              border: isDark ? '1px solid rgba(56,189,248,0.2)' : '1px solid #E2E8F0',
              boxShadow: isDark ? '0 8px 40px rgba(0,0,0,0.4)' : '0 8px 24px rgba(0,0,0,0.05)',
              backdropFilter: 'blur(12px)'
            }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: isDark ? '#38BDF8' : '#1D61E7', marginBottom: 6 }}>
                INTERNSHIP PROGRAM
              </div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.4rem', fontWeight: 800, color: isDark ? '#F1F5F9' : '#0F172A', marginBottom: 8 }}>
                Kickstart Your Career
              </h2>
              <p style={{ color: isDark ? '#94A3B8' : '#64748B', fontSize: '0.82rem', lineHeight: 1.5, marginBottom: 16 }}>
                Learn from experts, work on real-world projects, and gain hands-on experience.
              </p>

              {/* 4 Checkmark Bullets */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 20 }}>
                {[
                  'Real-time Projects',
                  'Mentorship by Experts',
                  'Certificate of Completion',
                  'Performance Based Opportunity'
                ].map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.75rem', color: isDark ? '#CBD5E1' : '#475569', fontWeight: 600 }}>
                    <FiCheck style={{ color: isDark ? '#38BDF8' : '#1D61E7', flexShrink: 0 }} size={14} />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* Lab Photo */}
              <div style={{ width: '100%', height: 160, borderRadius: 12, overflow: 'hidden', marginBottom: 20, border: isDark ? '1px solid rgba(56,189,248,0.2)' : '1px solid #E2E8F0' }}>
                <img src="/images/indian_students_lab.jpg" alt="Indian Engineering Students Training Lab" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                  onError={(e) => { e.target.onerror = null; e.target.src = '/images/indian_classroom.jpg'; }} />
              </div>

              {/* Intern Roles Stack */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
                {internRoles.map((r, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #E2E8F0', paddingBottom: 10 }}>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: isDark ? '#E2E8F0' : '#0F172A' }}>{r.title}</div>
                      <div style={{ fontSize: '0.72rem', color: isDark ? '#64748B' : '#64748B' }}>{r.mode} • {r.duration}</div>
                    </div>
                    <button
                      onClick={handleScrollToContact}
                      style={{ fontSize: '0.78rem', fontWeight: 700, color: isDark ? '#38BDF8' : '#1D61E7', background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                      Apply Now &rarr;
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={handleScrollToContact}
                style={{
                  width: '100%', padding: '12px 0', borderRadius: 100, fontSize: '0.85rem',
                  fontWeight: 700, background: '#1D61E7', color: '#fff', border: 'none', cursor: 'pointer'
                }}
              >
                View All Internships &rarr;
              </button>
            </div>

          </div>
        </div>
      </div>


      {/* ----------------------------------------------------
          4. WHY JOIN NXG?
         ---------------------------------------------------- */}
      <div style={{
        background: isDark ? 'linear-gradient(180deg, #0A0F1E 0%, #0D1526 100%)' : '#F8FAFC',
        padding: '70px 0', color: isDark ? '#FFFFFF' : '#0F172A',
        borderTop: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid #E2E8F0'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: isDark ? '#38BDF8' : '#1D61E7', marginBottom: 8 }}>
              WHY JOIN NXG?
            </div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', fontWeight: 800, color: isDark ? '#F1F5F9' : '#0F172A' }}>
              Grow. Innovate. Make an Impact.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
            {[
              { icon: FiZap, title: 'Innovative Work', desc: 'Work on cutting-edge technologies and solve real-world problems.' },
              { icon: FiTrendingUp, title: 'Career Growth', desc: 'Continuous learning and growth opportunities to advance your career.' },
              { icon: FiUsers, title: 'Collaborative Culture', desc: 'Be part of a supportive and inclusive team that values your ideas.' },
              { icon: FiAward, title: 'Recognition', desc: 'Your contributions are recognized and celebrated at every step.' },
              { icon: FiSmile, title: 'Work-Life Balance', desc: 'Flexible work environment that helps you achieve your best.' },
              { icon: FiHeart, title: 'Make an Impact', desc: 'Build solutions that empower businesses and improve lives.' }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} style={{
                  background: isDark ? 'rgba(255,255,255,0.04)' : '#FFFFFF', padding: 22, borderRadius: 16,
                  border: isDark ? '1px solid rgba(56,189,248,0.12)' : '1px solid #E2E8F0', textAlign: 'center',
                  boxShadow: isDark ? 'none' : '0 4px 16px rgba(0,0,0,0.04)',
                  backdropFilter: 'blur(8px)', transition: 'transform 0.2s, border-color 0.2s'
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: isDark ? 'rgba(56,189,248,0.12)' : '#EFF6FF',
                    color: isDark ? '#38BDF8' : '#1D61E7',
                    border: isDark ? '1px solid rgba(56,189,248,0.25)' : '1px solid #DBEAFE',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px'
                  }}>
                    <Icon size={20} />
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: isDark ? '#F1F5F9' : '#0F172A', marginBottom: 6 }}>{item.title}</div>
                  <div style={{ fontSize: '0.76rem', color: isDark ? '#94A3B8' : '#64748B', lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>


      {/* ----------------------------------------------------
          5. RESUME SUBMISSION CTA
         ---------------------------------------------------- */}
      <div style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{
            background: isDark ? 'linear-gradient(135deg, #091738, #030712)' : 'linear-gradient(135deg, #0F172A, #1E293B)',
            borderRadius: 20, padding: '36px 44px', color: '#FFFFFF',
            border: isDark ? '1px solid rgba(56,189,248,0.25)' : '1px solid rgba(255,255,255,0.1)',
            display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24,
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <div style={{
                width: 54, height: 54, borderRadius: '50%', background: 'rgba(29,97,231,0.25)',
                color: '#38BDF8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
              }}>
                <FiSend size={24} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: 800, color: '#F8FAFC', marginBottom: 4 }}>
                  Don't see the right role?
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.88rem' }}>
                  We are always looking for talented people.
                </p>
              </div>
            </div>

            <button onClick={handleScrollToContact} className="btn-nxg" style={{ padding: '13px 28px', fontSize: '0.9rem' }}>
              <span>Send Your Resume</span>
              <FiArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Careers;
