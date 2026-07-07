import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';



import student_2620106310 from "../assets/10th_Students/2620106310.webp";
import student_2620106314 from "../assets/10th_Students/2620106314.webp";
import student_2620106320 from "../assets/10th_Students/2620106320.webp";
import student_2620106328 from "../assets/10th_Students/2620106328.webp";
import student_2620106330 from "../assets/10th_Students/2620106330.webp";
import student_2620106332 from "../assets/10th_Students/2620106332.webp";
import student_2620106398 from "../assets/10th_Students/2620106398.webp";
import student_2620106400 from "../assets/10th_Students/2620106400.webp";



// ─── Types ────────────────────────────────────────────────────────────────

type Statistic = {
  id: number;
  label: string;
  value: string;
  icon: string;
  suffix?: string;
};

type Student = {
  id: number;
  name: string;
  rollNumber: string;
  marks: string;
  percentage: string;
  photo: string;
  isTopper?: boolean;
  medal?: 'gold' | 'silver' | 'bronze';
};

// ─── Data ──────────────────────────────────────────────────────────────────

const STATISTICS: Statistic[] = [
  { id: 1, label: 'Overall Pass Percentage', value: '100', icon: '🎯', suffix: '%' },
  { id: 2, label: 'Total Students Appeared', value: '186', icon: '👨‍🎓' },
  { id: 3, label: 'Secured High Distinctions', value: '142', icon: '⭐' },
  { id: 4, label: 'Academic Excellence', value: '98.6', icon: '🏆', suffix: '%' },
  { id: 5, label: 'Scored Above Five-Hundred', value: '4', icon: '🏅', suffix: '+' },
];

const STUDENTS: Student[] = [
  {
    id: 1,
    name: "G. Vekanth Reddy",
    rollNumber: "H.T. 2620106398",
    marks: "559/600",
    percentage: "93.2%",
    photo: student_2620106398,
    isTopper: true,
    medal: "gold",
  },
  {
    id: 2,
    name: "G. Lakshmi Prasad",
    rollNumber: "H.T. 2620106330",
    marks: "552/600",
    percentage: "92.0%",
    photo: student_2620106330,
    medal: "silver",
  },
  {
    id: 3,
    name: "K. Pream Kumar",
    rollNumber: "H.T. 2620106332",
    marks: "547/600",
    percentage: "91.2%",
    photo: student_2620106332,
    medal: "bronze",
  },
  {
    id: 4,
    name: "M. Arun Kumar",
    rollNumber: "H.T. 2620106320",
    marks: "521/600",
    percentage: "86.8%",
    photo: student_2620106320,
  },
  {
    id: 5,
    name: "S. Bharath",
    rollNumber: "H.T. 2620106400",
    marks: "495/600",
    percentage: "82.5%",
    photo: student_2620106400,
  },
  {
    id: 6,
    name: "K. Charan Reddy",
    rollNumber: "H.T. 2620106310",
    marks: "470/600",
    percentage: "78.3%",
    photo: student_2620106310,
  },
  {
    id: 7,
    name: "G. Pavithra",
    rollNumber: "H.T. 2620106328",
    marks: "463/600",
    percentage: "77.2%",
    photo: student_2620106328,
  },
  {
    id: 8,
    name: "T. Bhavya Sree",
    rollNumber: "H.T. 2620106314",
    marks: "451/600",
    percentage: "75.2%",
    photo: student_2620106314,
  },
];

// ─── Subcomponents ────────────────────────────────────────────────────────

/** Animated counter that counts up when in view */
const AnimatedCounter: React.FC<{ value: number; suffix?: string; duration?: number }> = ({
  value,
  suffix = '',
  duration = 1.2,
}) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      const start = performance.now();
      const target = Number(value);
      const step = (now: number) => {
        const elapsed = (now - start) / (duration * 1000);
        const progress = Math.min(elapsed, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = eased * target;
        setDisplay(current);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setDisplay(target);
        }
      };
      requestAnimationFrame(step);
    }
  }, [inView, value, duration]);

  const formatted = Number.isInteger(display) ? display : display.toFixed(1);
  return (
    <span ref={ref} className="stat-number">
      {formatted}
      {suffix}
    </span>
  );
};

/** A single statistic pill */
const StatCard: React.FC<{ stat: Statistic; index: number }> = ({ stat, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.1 + index * 0.08, ease: "easeOut" as const }}
      className="stat-pill"
      role="article"
      aria-label={`${stat.label}: ${stat.value}${stat.suffix || ''}`}
    >
      <span className="stat-icon" aria-hidden="true">{stat.icon}</span>
      <div className="stat-text">
        <AnimatedCounter value={Number(stat.value)} suffix={stat.suffix || ''} />
        <p className="stat-label">{stat.label}</p>
      </div>
    </motion.div>
  );
};

/** A single topper photo card, styled like a certificate/banner headshot */
const TopperCard: React.FC<{ student: Student; index: number }> = ({ student, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  const medalEmoji =
    student.medal === 'gold' ? '🥇' : student.medal === 'silver' ? '🥈' : student.medal === 'bronze' ? '🥉' : null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.06 * index, ease: "easeOut" as const }}
      className={`topper-card medal-${student.medal || 'none'}`}
    >
      <div className="topper-photo-frame">
        <img src={student.photo} alt={student.name} loading="lazy" />
        {medalEmoji && <span className="medal-badge" aria-hidden="true">{medalEmoji}</span>}
      </div>
      <p className="topper-name">{student.name}</p>
      <p className="topper-percentage">{student.percentage}</p>
    </motion.div>
  );
};

/** Download PDF card with CTA button */
const DownloadCard: React.FC = () => {
  const handleDownload = useCallback(() => {
    const link = document.createElement('a');
    link.href = '/public/SriVidyaSchool.pdf';
    link.download = 'SriVidyaSchool.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="download-card"
    >
      <p className="download-title">Download the complete SSC 2026 result sheet</p>
      <button onClick={handleDownload} className="download-btn" type="button" aria-label="Download SSC 2026 results PDF">
        <span aria-hidden="true">📄</span>
        Download Result PDF
      </button>
    </motion.div>
  );
};

// ─── Main Section Component ──────────────────────────────────────────────

export const SSCResultsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const headerVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={sectionRef}
      className="results-banner"
      aria-labelledby="results-heading"
    >
      {/* Confetti / stars background */}
      <div className="confetti" aria-hidden="true">
        {['⭐','✦','⭐','✦','⭐','✦','⭐','✦','⭐','✦','⭐','✦'].map((s, i) => (
          <span key={i} className={`confetti-star star-${i}`}>{s}</span>
        ))}
      </div>

      <div className="banner-inner">
        {/* ── Header: logo + school name ── */}
        <div className="banner-header">
         
          <div className="school-titles">
            <h1 className="school-name">Sree Vidya High School</h1>
            <p className="school-sub">Celebrating Academic Excellence</p>
          </div>
        </div>

        {/* ── Ribbon ── */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="ribbon-wrap"
        >
          <span className="ribbon">SSC 2026 Results Declared</span>
        </motion.div>

        {/* ── Trophy heading ── */}
        <motion.div
          id="results-heading"
          variants={headerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.08 }}
          className="trophy-heading"
        >
          <span className="trophy" aria-hidden="true">🏆</span>
          <div className="trophy-heading-text">
            <p className="eyebrow">SSC 2026 Board Result</p>
            <h2 className="school-toppers">School Toppers</h2>
          </div>
          <span className="trophy" aria-hidden="true">🏆</span>
        </motion.div>

        {/* ── 100% badge ── */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.12 }}
          className="pass-badge"
        >
          <span>100%</span>
          Results
        </motion.div>

        {/* ── Toppers row ── */}
        <div className="toppers-row" role="list" aria-label="Top performing students">
          {STUDENTS.map((student, idx) => (
            <TopperCard key={student.id} student={student} index={idx} />
          ))}
        </div>

        {/* ── Closing message ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="closing-message"
        >
          The Management, Principal &amp; Staff of Sree Vidya High School congratulate all
          the students for their success.
        </motion.p>

        {/* ── Statistics strip ── */}
        <div className="stats-strip" role="list" aria-label="Results statistics">
          {STATISTICS.map((stat, idx) => (
            <StatCard key={stat.id} stat={stat} index={idx} />
          ))}
        </div>

        {/* ── Download card ── */}
        <DownloadCard />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Poppins:wght@400;500;600;700&family=Dancing+Script:wght@600&display=swap');

        .results-banner {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 3rem 1.25rem 4rem;
          background: linear-gradient(180deg, #FFFCF5 0%, #FDF6E7 100%);
          font-family: 'Poppins', sans-serif;
        }

        .confetti {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .confetti-star {
          position: absolute;
          font-size: 1.4rem;
          color: #F2C14E;
          opacity: 0.35;
        }
        .star-0 { top: 6%; left: 4%; }
        .star-1 { top: 14%; left: 92%; font-size: 1rem; }
        .star-2 { top: 30%; left: 2%; font-size: 1rem; }
        .star-3 { top: 42%; left: 96%; }
        .star-4 { top: 60%; left: 3%; }
        .star-5 { top: 70%; left: 94%; font-size: 1rem; }
        .star-6 { top: 85%; left: 6%; font-size: 1rem; }
        .star-7 { top: 90%; left: 90%; }
        .star-8 { top: 4%; left: 45%; font-size: 0.9rem; }
        .star-9 { top: 96%; left: 50%; font-size: 0.9rem; }
        .star-10 { top: 20%; left: 60%; font-size: 0.8rem; }
        .star-11 { top: 50%; left: 20%; font-size: 0.8rem; }

        .banner-inner {
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }

        .banner-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.9rem;
          margin-bottom: 1.5rem;
        }
        .school-badge {
          width: 56px;
          height: 56px;
          flex-shrink: 0;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #D4A017, #8B6508);
          color: #FFFBF0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Playfair Display', serif;
          font-weight: 800;
          font-size: 1.1rem;
          border: 3px solid #FFF6DC;
          box-shadow: 0 4px 14px rgba(139, 101, 8, 0.28);
        }
        .school-titles { text-align: left; }
        .school-name {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: clamp(1.4rem, 3vw, 2.1rem);
          color: #2A2118;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .school-sub {
          font-size: 0.85rem;
          color: #8A7A5C;
          margin: 0.15rem 0 0;
          font-weight: 500;
        }

        .ribbon-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 1.75rem;
        }
        .ribbon {
          display: inline-block;
          background: linear-gradient(135deg, #9F1D35, #7A1229);
          color: #FDEFCE;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.04em;
          padding: 0.7rem 3rem;
          clip-path: polygon(0% 0%, 100% 0%, 93% 50%, 100% 100%, 0% 100%, 7% 50%);
          box-shadow: 0 6px 18px rgba(122, 18, 41, 0.3);
        }

        .trophy-heading {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(0.75rem, 4vw, 2.5rem);
          margin-bottom: 1.25rem;
        }
        .trophy {
          font-size: clamp(2rem, 5vw, 3rem);
          filter: drop-shadow(0 4px 8px rgba(180, 130, 20, 0.35));
        }
        .eyebrow {
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #9F1D35;
          margin: 0 0 0.25rem;
        }
        .school-toppers {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: clamp(2rem, 5vw, 3.2rem);
          color: #2A2118;
          margin: 0;
          line-height: 1;
        }

        .pass-badge {
          width: 96px;
          height: 96px;
          margin: 0 auto 2.5rem;
          border-radius: 50%;
          background: radial-gradient(circle at 32% 28%, #FFE49B, #D4A017 70%);
          border: 3px dashed #9F1D35;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #5A2A0C;
          transform: rotate(-8deg);
          box-shadow: 0 8px 20px rgba(180, 130, 20, 0.28);
        }
        .pass-badge span {
          font-size: 1.35rem;
          font-weight: 900;
          line-height: 1;
        }

        .toppers-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.25rem 1rem;
          margin-bottom: 2.5rem;
        }
        .topper-card {
          width: 148px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .topper-photo-frame {
          position: relative;
          width: 128px;
          height: 128px;
          border-radius: 12px;
          overflow: hidden;
          border: 4px solid #E7DCC2;
          background: #EFE7D2;
          box-shadow: 0 6px 16px rgba(42, 33, 24, 0.14);
        }
        .medal-gold .topper-photo-frame { border-color: #D4A017; box-shadow: 0 8px 22px rgba(212, 160, 23, 0.4); }
        .medal-silver .topper-photo-frame { border-color: #A8A8A8; box-shadow: 0 8px 22px rgba(140, 140, 140, 0.32); }
        .medal-bronze .topper-photo-frame { border-color: #B0703A; box-shadow: 0 8px 22px rgba(176, 112, 58, 0.32); }
        .topper-photo-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .medal-badge {
          position: absolute;
          top: -6px;
          right: -6px;
          font-size: 1.4rem;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
        }
        .topper-name {
          margin: 0.6rem 0 0.15rem;
          font-weight: 700;
          font-size: 0.85rem;
          color: #2A2118;
          line-height: 1.2;
        }
        .topper-percentage {
          margin: 0;
          font-weight: 900;
          font-size: 1.3rem;
          color: #9F1D35;
        }
        .medal-gold .topper-percentage { color: #B8860B; }

        .closing-message {
          font-family: 'Dancing Script', cursive;
          font-size: clamp(1.15rem, 2.4vw, 1.5rem);
          color: #5A4A30;
          max-width: 640px;
          margin: 0 auto 2.75rem;
          line-height: 1.5;
        }

        .stats-strip {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 0.85rem;
          margin-bottom: 2.5rem;
        }
        .stat-pill {
          background: #FFFFFF;
          border: 1px solid #EDE1C4;
          border-radius: 14px;
          padding: 0.9rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.7rem;
          text-align: left;
          box-shadow: 0 3px 10px rgba(42, 33, 24, 0.05);
        }
        .stat-icon { font-size: 1.5rem; flex-shrink: 0; }
        .stat-number {
          font-weight: 800;
          font-size: 1.25rem;
          color: #2A2118;
          font-variant-numeric: tabular-nums;
        }
        .stat-label {
          margin: 0.1rem 0 0;
          font-size: 0.72rem;
          font-weight: 600;
          color: #8A7A5C;
          letter-spacing: 0.01em;
        }

        .download-card {
          background: #FFFFFF;
          border: 1px solid #EDE1C4;
          border-radius: 20px;
          padding: 1.75rem 1.5rem;
          max-width: 460px;
          margin: 0 auto;
          box-shadow: 0 8px 26px rgba(42, 33, 24, 0.06);
        }
        .download-title {
          font-weight: 600;
          font-size: 0.95rem;
          color: #4A3D28;
          margin: 0 0 1rem;
        }
        .download-btn {
          background: linear-gradient(135deg, #D4A017, #9F1D35);
          color: #FFFBF0;
          border: none;
          padding: 0.8rem 2.2rem;
          border-radius: 999px;
          font-weight: 700;
          font-size: 0.95rem;
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          box-shadow: 0 6px 18px rgba(159, 29, 53, 0.28);
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .download-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(159, 29, 53, 0.36); }
        .download-btn:active { transform: scale(0.97); }

        @media (max-width: 640px) {
          .results-banner { padding: 2.25rem 1rem 3rem; }
          .school-titles { text-align: center; }
          .topper-card { width: 104px; }
          .topper-photo-frame { width: 92px; height: 92px; border-width: 3px; }
          .topper-percentage { font-size: 1.05rem; }
          .toppers-row { gap: 1rem 0.65rem; }
          .ribbon { padding: 0.6rem 2rem; font-size: 0.82rem; }
        }
      `}</style>
    </section>
  );
};

export default SSCResultsSection;