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

// Helper to generate avatar URLs (replace with real images in production)


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
        // Ease-out cubic
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
    <span ref={ref} className="stat-number text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
      {formatted}
      {suffix}
    </span>
  );
};

/** A single statistic card with icon, label, and animated counter */
const StatCard: React.FC<{ stat: Statistic; index: number }> = ({ stat, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const variants = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.08, ease: "easeOut" as const }}
      className="stat-card glass-card rounded-2xl p-6 md:p-7 text-center flex flex-col items-center"
      role="article"
      aria-label={`${stat.label}: ${stat.value}${stat.suffix || ''}`}
    >
      <div className="text-3xl md:text-4xl mb-2" aria-hidden="true">
        {stat.icon}
      </div>
      <div className="mb-1">
        <AnimatedCounter value={Number(stat.value)} suffix={stat.suffix || ''} />
      </div>
      <p className="text-sm md:text-base font-medium text-slate-500 tracking-wide">{stat.label}</p>
    </motion.div>
  );
};

/** A single student card for the marquee */
const StudentCard: React.FC<{ student: Student }> = ({ student }) => {
  // Fallback badge text for top performers — adjust as needed
  const badgeText = student.isTopper ? 'STATE TOPPER · SCIENCES' : '';

  return (
  <div
  className="student-card"
  style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.28), rgba(0,0,0,0.48)), url(${student.photo})` }}
>
      <div className="student-card-content">
        {badgeText && <div className="card-badge">{badgeText}</div>}
        <div className="student-name" title={student.name}>{student.name}</div>
        <div className="student-percentage">{student.percentage}</div>
      </div>
    </div>
  );
};

/** Infinite marquee of student achievements */
const StudentMarquee: React.FC<{ students: Student[] }> = ({ students }) => {
  // Duplicate for seamless loop
  const doubled = useMemo(() => [...students, ...students], [students]);

  return (
    <div className="marquee-wrapper w-full overflow-hidden relative py-2">
      <div className="marquee-track" role="list" aria-label="Student achievements marquee">
        {doubled.map((student, idx) => (
          <StudentCard key={`${student.id}-${idx}`} student={student} />
        ))}
      </div>
    </div>
  );
};

/** Download PDF card with CTA button */
const DownloadCard: React.FC = () => {
  const handleDownload = useCallback(() => {
  const link = document.createElement('a');
  link.href = '/public/SriVidyaSchool.pdf'; // must be in `public/assets/`, not `src/assets/`
  link.download = 'SriVidyaSchool.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}, []);


  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glass-card rounded-3xl p-8 md:p-10 text-center max-w-2xl mx-auto"
      role="region"
      aria-label="Download results"
    >
      <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
        📄 Download Complete SSC 2026 Results
      </h3>
      <p className="text-sm md:text-base text-slate-500 mb-6 max-w-md mx-auto">
        Download the official SSC 2026 result sheet published by Sree Vidya High School.
      </p>
      <button
        onClick={handleDownload}
        className="download-btn"
        aria-label="Download SSC 2026 results PDF"
        type="button"
      >
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
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: 'linear-gradient(170deg, #fdfcfa 0%, #f8f4ee 100%)' }}
      aria-labelledby="results-heading"
    >
      {/* Decorative shapes */}
      <div className="bg-shape-1" aria-hidden="true" />
      <div className="bg-shape-2" aria-hidden="true" />
      <div className="bg-shape-3" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-12 md:mb-16">
          {/* Badge */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-amber-200/60 shadow-sm mb-4"
          >
            <span aria-hidden="true">🎉</span>
            SSC 2026 Results Declared
          </motion.div>

          {/* Heading */}
          <motion.h1
            id="results-heading"
            variants={headerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.06 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-800 tracking-tight leading-[1.1] mb-3"
          >
            Outstanding <span className="text-amber-500">SSC 2026</span> Results
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={headerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto"
          >
            Congratulations to our students for their exceptional performance in the SSC 2026 examinations.
          </motion.p>
        </div>

        {/* ── Statistics Grid ── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-14 md:mb-18"
          role="list"
          aria-label="Results statistics"
        >
          {STATISTICS.map((stat, idx) => (
            <StatCard key={stat.id} stat={stat} index={idx} />
          ))}
        </div>

        {/* ── Student Marquee ── */}
        <div className="mb-14 md:mb-18">
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="text-lg md:text-xl font-bold text-slate-700 flex items-center gap-2">
              <span aria-hidden="true">🌟</span>
              Top Achievers
            </h2>
            <span className="text-xs text-slate-400 hidden sm:inline">
              <span aria-hidden="true">⏸</span> Hover to pause
            </span>
          </div>
          <StudentMarquee students={STUDENTS} />
          <p className="text-xs text-slate-400 text-center mt-3 sm:hidden">
            <span aria-hidden="true">⏸</span> Tap or hover to pause
          </p>
        </div>

        {/* ── Download Card ── */}
        <DownloadCard />
      </div>

      {/* ── Inline styles for glassmorphism & marquee ── */}
      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(12px) saturate(1.2);
          -webkit-backdrop-filter: blur(12px) saturate(1.2);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.02);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .glass-card:hover {
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.10), 0 4px 16px rgba(0, 0, 0, 0.04);
        }
        .stat-card {
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease;
        }
        .stat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 56px rgba(0, 0, 0, 0.10), 0 4px 12px rgba(0, 0, 0, 0.04);
        }
        .marquee-track {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: marqueeScroll 32s linear infinite;
          will-change: transform;
        }
        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .student-card {
          flex: 0 0 auto;
          width: 220px;
          height: 320px;
          background-size: cover;
          background-position: center;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(2,6,23,0.18);
          transition: transform 0.28s ease, box-shadow 0.28s ease;
          display: flex;
          align-items: flex-end;
          color: white;
          position: relative;
        }
        .student-card:hover { transform: translateY(-6px) scale(1.02); }

        .student-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.55) 100%);
          pointer-events: none;
        }

        .student-card-content {
          position: relative;
          padding: 1rem;
          width: 100%;
          z-index: 2;
        }

        .card-badge {
          display: inline-block;
          background: rgba(0,0,0,0.45);
          color: #ffdca3;
          font-size: 11px;
          font-weight: 700;
          padding: 6px 10px;
          border-radius: 999px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 0.6rem;
        }

        .student-name {
          font-size: 1.05rem;
          font-weight: 800;
          line-height: 1.05;
          margin-bottom: 0.35rem;
          text-shadow: 0 6px 20px rgba(0,0,0,0.45);
        }

        .student-percentage {
          font-size: 2.1rem;
          font-weight: 900;
          color: #ffd166;
          text-shadow: 0 6px 20px rgba(0,0,0,0.5);
        }
        .student-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #f59e0b;
          padding: 2px;
          background: white;
          margin: 0 auto 0.5rem;
          display: block;
        }
        .topper-badge {
          background: linear-gradient(135deg, #f59e0b, #d97706);
          color: white;
          font-size: 0.6rem;
          font-weight: 700;
          padding: 0.15rem 0.7rem;
          border-radius: 999px;
          display: inline-block;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          margin-top: 0.3rem;
        }
        .download-btn {
          background: linear-gradient(135deg, #16a34a, #15803d);
          color: white;
          border: none;
          padding: 0.9rem 2.6rem;
          border-radius: 999px;
          font-weight: 600;
          font-size: 1.05rem;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          box-shadow: 0 4px 20px rgba(22, 163, 74, 0.30);
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
          cursor: pointer;
        }
        .download-btn:hover {
          transform: scale(1.03);
          box-shadow: 0 8px 36px rgba(22, 163, 74, 0.40);
        }
        .download-btn:active {
          transform: scale(0.96);
        }
        @media (max-width: 640px) {
          .student-card { width: 130px; height: 190px; padding: 0.75rem 0.5rem; }
          .student-name { font-size: 0.8rem; }
          .student-percentage { font-size: 1.3rem; }
          .card-badge { font-size: 9px; padding: 4px 8px; margin-bottom: 0.4rem; }
          .student-avatar { width: 44px; height: 44px; }
          .marquee-track { gap: 0.75rem; animation-duration: 24s; }
          .download-btn { padding: 0.75rem 1.8rem; font-size: 0.95rem; width: 100%; justify-content: center; }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .student-card { width: 170px; height: 250px; }
          .student-name { font-size: 0.95rem; }
          .student-percentage { font-size: 1.7rem; }
          .marquee-track { gap: 1.25rem; animation-duration: 30s; }
        }
        .bg-shape-1 {
          position: absolute;
          top: -12%;
          right: -6%;
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .bg-shape-2 {
          position: absolute;
          bottom: -10%;
          left: -8%;
          width: 420px;
          height: 420px;
          background: radial-gradient(circle, rgba(22, 163, 74, 0.06) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .bg-shape-3 {
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(245, 158, 11, 0.03) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .stat-number {
          font-variant-numeric: tabular-nums;
          letter-spacing: -0.02em;
        }
      `}</style>
    </section>
  );
};

export default SSCResultsSection;