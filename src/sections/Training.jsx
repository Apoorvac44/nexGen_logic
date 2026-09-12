import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiArrowRight, FiCheck, FiBookOpen, FiAward, FiUsers, FiClock, FiDownload,
  FiZap, FiCpu, FiCode, FiLayers, FiCheckCircle, FiSmile, FiTrendingUp,
  FiX, FiChevronLeft, FiChevronRight, FiMessageSquare
} from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const courseCategories = ['All Courses', 'Embedded Systems', 'IoT', 'Software', 'Hardware', 'Short Term'];

const coursesData = [
  {
    id: 'emb-sys',
    title: 'Embedded Systems Development',
    category: 'Embedded Systems',
    desc: 'Learn Embedded C, Microcontrollers, Drivers, RTOS and build real-world embedded applications.',
    duration: '3-6 Months',
    level: 'Beginner to Advanced',
    image: '/images/course_embedded.png'
  },
  {
    id: 'iot-cloud',
    title: 'IoT Development with Cloud',
    category: 'IoT',
    desc: 'Learn IoT concepts, sensors, connectivity, cloud platforms and build smart IoT solutions.',
    duration: '3 Months',
    level: 'Beginner to Advanced',
    image: '/images/course_iot.png'
  },
  {
    id: 'fullstack-web',
    title: 'Full Stack Web Development',
    category: 'Software',
    desc: 'Master modern web technologies and build responsive websites and web applications.',
    duration: '4-6 Months',
    level: 'Beginner to Advanced',
    image: '/images/course_webdev.png'
  },
  {
    id: 'pcb-design',
    title: 'PCB Design Training',
    category: 'Hardware',
    desc: 'Learn schematic capture, PCB layout, 3D modeling and manufacturing process with expert guidance.',
    duration: '1-2 Months',
    level: 'Beginner',
    image: '/images/course_pcb.png'
  },
  {
    id: 'python-prog',
    title: 'Python Programming for Beginners',
    category: 'Short Term',
    desc: 'Start your coding journey with Python and build strong programming fundamentals.',
    duration: '2 Months',
    level: 'Beginner',
    image: '/images/course_embedded.png'
  }
];

const Training = () => {
  const { isDark } = useTheme();
  const [activeCourseCategory, setActiveCourseCategory] = useState('All Courses');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filteredCourses = coursesData.filter((c) => {
    if (activeCourseCategory === 'All Courses') return true;
    return c.category === activeCourseCategory;
  });

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="training" style={{
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
                <span style={{ color: '#38BDF8', fontWeight: 600 }}>Training</span>
              </div>

              <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                Learn Today.<br />
                <span style={{ color: '#38BDF8' }}>Lead Tomorrow.</span>
              </h1>

              <p style={{ color: '#94A3B8', fontSize: '1.02rem', lineHeight: 1.7, maxWidth: 520, marginBottom: 28 }}>
                Industry-focused training programs in Embedded Systems, IoT, and Software Development to help you build real-world skills and accelerate your career.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
                <button onClick={handleScrollToContact} className="btn-nxg" style={{ padding: '13px 28px', fontSize: '0.9rem' }}>
                  <span>Explore Courses</span>
                  <FiArrowRight size={16} />
                </button>
                <button
                  onClick={handleScrollToContact}
                  style={{
                    padding: '13px 24px', borderRadius: 100, fontSize: '0.9rem', fontWeight: 600,
                    background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8
                  }}
                >
                  <FiDownload size={16} />
                  <span>Download Brochure</span>
                </button>
              </div>
            </div>

            {/* Right Graphic/Photo */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                position: 'relative', width: '100%', maxWidth: 520, height: 320,
                borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(56,189,248,0.25)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.6)', background: 'linear-gradient(135deg, #0A1428, #030712)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24
              }}>
                <img
                  src="/images/indian_students_lab.jpg"
                  alt="Indian Engineering Students in NexGen Logic Training Lab"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: 12 }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/indian_classroom.jpg';
                    e.target.style.objectFit = 'cover';
                  }}
                />
                <div style={{ position: 'absolute', bottom: 16, left: 16, background: 'rgba(10,15,30,0.85)', backdropFilter: 'blur(8px)', padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(56,189,248,0.25)', fontSize: '0.78rem', color: '#38BDF8', fontWeight: 700 }}>
                  Hands-On Embedded & IoT Labs
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* ----------------------------------------------------
          2. HIGHLIGHT BAR
         ---------------------------------------------------- */}
      <div style={{
        background: isDark ? 'rgba(13,21,38,0.8)' : '#FFFFFF',
        padding: '24px 0',
        borderBottom: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid #E2E8F0',
        boxShadow: isDark ? 'none' : '0 4px 12px rgba(0,0,0,0.03)',
        backdropFilter: 'blur(10px)'
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16 }}>
            {[
              { icon: FiUsers, title: 'Expert Mentors', desc: 'Learn from industry professionals.' },
              { icon: FiCpu, title: 'Hands-on Learning', desc: 'Work on real-world projects and tools.' },
              { icon: FiAward, title: 'Certification', desc: 'Industry-recognized certificate.' },
              { icon: FiLayers, title: 'Well Equipped Labs', desc: 'Advanced hardware & software labs.' },
              { icon: FiCheckCircle, title: 'Placement Support', desc: 'Resume guidance & interview prep.' },
              { icon: FiClock, title: 'Flexible Batches', desc: 'Weekday, Weekend & Online options.' }
            ].map((h, i) => {
              const Icon = h.icon;
              return (
                <div key={i} style={{ textAlign: 'center', color: isDark ? '#F1F5F9' : '#0F172A' }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%', background: isDark ? 'rgba(56,189,248,0.12)' : '#EFF6FF',
                    color: isDark ? '#38BDF8' : '#1D61E7', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 8px', border: isDark ? '1px solid rgba(56,189,248,0.25)' : '1px solid #DBEAFE'
                  }}>
                    <Icon size={18} />
                  </div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 800, color: isDark ? '#E2E8F0' : '#0F172A', marginBottom: 2 }}>{h.title}</div>
                  <div style={{ fontSize: '0.7rem', color: isDark ? '#64748B' : '#64748B', lineHeight: 1.3 }}>{h.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>


      {/* ----------------------------------------------------
          3. POPULAR COURSES GRID
         ---------------------------------------------------- */}
      <div style={{ padding: '72px 0 80px', background: isDark ? '#0D1526' : '#F8FAFC' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: isDark ? '#38BDF8' : '#1D61E7', marginBottom: 8 }}>
              OUR TRAINING PROGRAMS
            </div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', fontWeight: 800, color: isDark ? '#F1F5F9' : '#0F172A' }}>
              Explore Our Popular Courses
            </h2>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 44 }}>
            {courseCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCourseCategory(cat)}
                style={{
                  padding: '9px 20px', borderRadius: 100, fontSize: '0.85rem', fontWeight: 600,
                  cursor: 'pointer', transition: 'all 0.25s ease', border: '1px solid',
                  background: activeCourseCategory === cat ? '#1D61E7' : (isDark ? 'rgba(255,255,255,0.07)' : '#FFFFFF'),
                  borderColor: activeCourseCategory === cat ? '#1D61E7' : (isDark ? 'rgba(255,255,255,0.15)' : '#E2E8F0'),
                  color: activeCourseCategory === cat ? '#FFFFFF' : (isDark ? '#94A3B8' : '#475569'),
                  boxShadow: activeCourseCategory === cat ? '0 4px 14px rgba(29,97,231,0.45)' : (isDark ? 'none' : '0 2px 6px rgba(0,0,0,0.04)')
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 5 Courses Grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(285px, 1fr))',
            gap: 24, marginBottom: 40
          }}>
            {filteredCourses.map((c) => (
              <div
                key={c.id}
                style={{
                  background: isDark ? 'rgba(255,255,255,0.04)' : '#FFFFFF', borderRadius: 20, padding: 22,
                  color: isDark ? '#F1F5F9' : '#0F172A',
                  boxShadow: isDark ? '0 8px 30px rgba(0,0,0,0.3)' : '0 6px 20px rgba(0,0,0,0.05)', display: 'flex',
                  flexDirection: 'column', justifyContent: 'space-between', border: isDark ? '1px solid rgba(56,189,248,0.15)' : '1px solid #E2E8F0',
                  backdropFilter: 'blur(8px)', transition: 'transform 0.2s, border-color 0.2s'
                }}
              >
                <div>
                  <div style={{
                    width: '100%', height: 160, borderRadius: 12, background: isDark ? '#0F172A' : '#F1F5F9',
                    overflow: 'hidden', marginBottom: 16, border: isDark ? 'none' : '1px solid #E2E8F0'
                  }}>
                    <img src={c.image} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => { e.target.onerror = null; e.target.src = '/images/hero_nxg_chip.png'; }} />
                  </div>

                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: isDark ? '#38BDF8' : '#1D61E7', marginBottom: 6 }}>
                    {c.title}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: isDark ? '#94A3B8' : '#64748B', lineHeight: 1.55, marginBottom: 14, minHeight: 48 }}>
                    {c.desc}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', gap: 12, fontSize: '0.73rem', color: isDark ? '#7B8FAB' : '#64748B', fontWeight: 600, marginBottom: 14 }}>
                    <span>{c.duration}</span>
                    <span>•</span>
                    <span>{c.level}</span>
                  </div>

                  <button
                    onClick={() => setSelectedCourse(c)}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      fontSize: '0.84rem', fontWeight: 700, color: isDark ? '#38BDF8' : '#1D61E7',
                      background: 'none', border: 'none', cursor: 'pointer', padding: 0
                    }}
                  >
                    <span>View Details</span>
                    <FiArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <button onClick={handleScrollToContact} className="btn-nxg" style={{ padding: '12px 28px', fontSize: '0.88rem' }}>
              <span>View All Courses</span>
              <FiArrowRight size={16} />
            </button>
          </div>


          {/* ----------------------------------------------------
              4. TRAINING STATS BANNER
             ---------------------------------------------------- */}
          <div style={{
            background: isDark ? 'linear-gradient(135deg, #060E20, #091738)' : 'linear-gradient(135deg, #0F172A, #1E293B)',
            borderRadius: 20, padding: '32px 40px', color: '#FFFFFF',
            border: isDark ? '1px solid rgba(56,189,248,0.2)' : '1px solid rgba(255,255,255,0.1)',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 20, marginBottom: 72, boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
          }}>
            {[
              { icon: FiUsers, number: '500+', label: 'Students Trained' },
              { icon: FiBookOpen, number: '50+', label: 'Training Batches' },
              { icon: FiAward, number: '20+', label: 'Expert Trainers' },
              { icon: FiTrendingUp, number: '95%', label: 'Success Rate' },
              { icon: FiCheckCircle, number: '100+', label: 'Projects Completed' }
            ].map((st, i) => {
              const Icon = st.icon;
              return (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'rgba(29,97,231,0.25)', color: '#38BDF8', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
                    <Icon size={20} />
                  </div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', lineHeight: 1, marginBottom: 4 }}>{st.number}</div>
                  <div style={{ fontSize: '0.76rem', color: '#94A3B8', fontWeight: 500 }}>{st.label}</div>
                </div>
              );
            })}
          </div>


          {/* ----------------------------------------------------
              5. WHY CHOOSE OUR TRAINING & PROCESS
             ---------------------------------------------------- */}
          <div style={{ marginBottom: 72 }}>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: isDark ? '#38BDF8' : '#1D61E7', marginBottom: 8 }}>
                WHY CHOOSE OUR TRAINING?
              </div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', fontWeight: 800, color: isDark ? '#F1F5F9' : '#0F172A' }}>
                Build Skills. Build Future.
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 72 }}>
              {[
                { icon: FiBookOpen, title: 'Industry Relevant Curriculum', desc: 'Updated content aligned with current industry standards.' },
                { icon: FiCpu, title: 'Practical Approach', desc: 'Hands-on labs, real-time projects & case studies.' },
                { icon: FiUsers, title: 'Career Guidance', desc: 'Mentorship, career counseling and placement assistance.' },
                { icon: FiZap, title: 'Affordable Fees', desc: 'Quality training with reasonable fee structures.' },
                { icon: FiSmile, title: 'Lifelong Support', desc: 'Continuous support even after course completion.' }
              ].map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} style={{
                    background: isDark ? 'rgba(255,255,255,0.04)' : '#FFFFFF',
                    padding: 20, borderRadius: 16, color: isDark ? '#F1F5F9' : '#0F172A',
                    textAlign: 'center', border: isDark ? '1px solid rgba(56,189,248,0.12)' : '1px solid #E2E8F0',
                    boxShadow: isDark ? '0 6px 18px rgba(0,0,0,0.2)' : '0 6px 16px rgba(0,0,0,0.04)'
                  }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: '50%',
                      background: isDark ? 'rgba(56,189,248,0.12)' : '#EFF6FF',
                      color: isDark ? '#38BDF8' : '#1D61E7',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px',
                      border: isDark ? '1px solid rgba(56,189,248,0.25)' : '1px solid #DBEAFE'
                    }}>
                      <Icon size={20} />
                    </div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 800, color: isDark ? '#F1F5F9' : '#0F172A', marginBottom: 4 }}>{f.title}</div>
                    <div style={{ fontSize: '0.74rem', color: isDark ? '#94A3B8' : '#64748B', lineHeight: 1.4 }}>{f.desc}</div>
                  </div>
                );
              })}
            </div>

            {/* Training Process Grid */}
            <div style={{ textAlign: 'center', marginBottom: 36 }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: isDark ? '#38BDF8' : '#1D61E7', marginBottom: 8 }}>
                OUR TRAINING PROCESS
              </div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', fontWeight: 800, color: isDark ? '#F1F5F9' : '#0F172A' }}>
                From Learning to Success
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 16 }}>
              {[
                { step: '01', title: 'Learn', desc: 'Understand concepts with expert guidance.' },
                { step: '02', title: 'Practice', desc: 'Hands-on lab work and assignments.' },
                { step: '03', title: 'Build', desc: 'Work on real-world projects.' },
                { step: '04', title: 'Evaluate', desc: 'Assessments, reviews and feedback.' },
                { step: '05', title: 'Certify', desc: 'Get certified and showcase skills.' },
                { step: '06', title: 'Succeed', desc: 'Get career support and achieve goals.' }
              ].map((p, i) => (
                <div key={i} style={{
                  background: isDark ? 'rgba(255,255,255,0.04)' : '#FFFFFF',
                  padding: 18, borderRadius: 14, color: isDark ? '#F1F5F9' : '#0F172A',
                  textAlign: 'center', border: isDark ? '1px solid rgba(56,189,248,0.12)' : '1px solid #E2E8F0',
                  boxShadow: isDark ? '0 6px 16px rgba(0,0,0,0.2)' : '0 6px 14px rgba(0,0,0,0.04)'
                }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: isDark ? '#38BDF8' : '#1D61E7', marginBottom: 2 }}>{p.step}</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: isDark ? '#F1F5F9' : '#0F172A', marginBottom: 4 }}>{p.title}</div>
                  <div style={{ fontSize: '0.73rem', color: isDark ? '#94A3B8' : '#64748B' }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </div>


          {/* ----------------------------------------------------
              6. STUDENT TESTIMONIAL & ENROLLMENT CTA
             ---------------------------------------------------- */}
          <div style={{
            background: isDark ? 'linear-gradient(135deg, #091738, #030712)' : 'linear-gradient(135deg, #0F172A, #1E293B)',
            borderRadius: 24, padding: 36, color: '#FFFFFF',
            border: isDark ? '1px solid rgba(56,189,248,0.25)' : '1px solid rgba(255,255,255,0.1)',
            marginBottom: 48, boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
          }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#38BDF8', marginBottom: 12 }}>
              What Our Students Say
            </div>
            <p style={{ fontSize: '1.05rem', color: '#E2E8F0', fontStyle: 'italic', lineHeight: 1.6, maxWidth: 700, marginBottom: 20 }}>
              "NXG training helped me gain practical knowledge and confidence. The hands-on experience and mentorship were outstanding!"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#1D61E7', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>
                RM
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#fff' }}>Rahul M.</div>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Embedded Systems Engineer</div>
              </div>
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #1D61E7, #0284C7)',
            borderRadius: 20, padding: '36px 44px', color: '#FFFFFF',
            display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24,
            boxShadow: '0 20px 40px rgba(29,97,231,0.3)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <div style={{ width: 54, height: 54, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <FaGraduationCap size={28} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: 800, color: '#fff', marginBottom: 4 }}>
                  Ready to Start Your Learning Journey?
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.88rem' }}>
                  Join thousands of learners who are building successful careers with NXG Training.
                </p>
              </div>
            </div>

            <button onClick={handleScrollToContact} style={{ padding: '13px 28px', borderRadius: 100, background: '#fff', color: '#1D61E7', fontWeight: 800, fontSize: '0.9rem', border: 'none', cursor: 'pointer' }}>
              Enroll Now &rarr;
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Training;
