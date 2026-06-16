import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Trophy, Medal, BookOpen, Star, ArrowRight } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { Counter } from "../components/Counter";
import { Lightbox, type LightboxItem } from "../components/Lightbox";

import topper1 from "../assets/topper-1.jpg";
import topper2 from "../assets/topper-2.jpg";
import topper3 from "../assets/topper-3.jpg";
import sportsImg from "../assets/sports.jpg";
import scienceImg from "../assets/science-lab.jpg";
import culturalImg from "../assets/cultural.jpg";
import classroomImg from "../assets/classroom.jpg";
import libraryImg from "../assets/library.jpg";
import eventArt from "../assets/event-art.jpg";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements & Awards | Sree Vidya High School" },
      { name: "description", content: "Academic, sports and cultural achievements of Sree Vidya students, from CBSE toppers to national-level winners." },
      { property: "og:title", content: "Achievements — Sree Vidya High School" },
      { property: "og:description", content: "Toppers, medalists and award-winners across academics, sports and the arts." },
      { property: "og:url", content: "/achievements" },
    ],
    links: [{ rel: "canonical", href: "/achievements" }],
  }),
  component: AchievementsPage,
});

const academic = [
  { icon: BookOpen, title: "CBSE Board Excellence", desc: "98.6% school average in Grade 10 boards, with 47 students above 95%." },
  { icon: Award, title: "Math Olympiad", desc: "12 students qualified for IMO Regional Round in 2024." },
  { icon: Star, title: "Science Talent Search", desc: "5 NTSE scholars in the last three batches." },
];

const sports = [
  { icon: Trophy, title: "State Cricket Champions", desc: "U-17 state champions for two consecutive years." },
  { icon: Medal, title: "National Swimming", desc: "3 silver and 2 bronze at the SGFI Nationals 2024." },
  { icon: Trophy, title: "Athletics Meet", desc: "Overall winners at the District Athletics Championship 2025." },
];

const awards = [
  "Best School in Academics — Times Education Awards 2024",
  "Innovative Teaching Award — CBSE 2023",
  "Green School Certification — TERI",
  "Cleanest Campus Award — Hyderabad Municipal Corp.",
  "ISA Award — British Council 2022",
  "Excellence in Sports — SGFI 2024",
];

const toppers = [
  { img: topper1, name: "Aarav Mehta", score: "98.6%", subj: "All India CBSE Rank 27" },
  { img: topper2, name: "Sara Iqbal", score: "97.8%", subj: "State Topper · Sciences" },
  { img: topper3, name: "Vikram Rao", score: "Gold", subj: "National Robotics Champ" },
];

const certificates: LightboxItem[] = [
  { src: classroomImg, alt: "Best Academic Performance 2024" },
  { src: sportsImg, alt: "Sports Excellence Trophy" },
  { src: scienceImg, alt: "STEM Innovation Award" },
  { src: culturalImg, alt: "Cultural Heritage Recognition" },
  { src: libraryImg, alt: "Reading Champion School" },
  { src: eventArt, alt: "Creative Arts Award" },
];

const chartData = [
  { y: "2019", p: 89 },
  { y: "2020", p: 92 },
  { y: "2021", p: 90 },
  { y: "2022", p: 94 },
  { y: "2023", p: 96 },
  { y: "2024", p: 98 },
  { y: "2025", p: 99 },
];

function LineChart() {
  const width = 800;
  const height = 360;
  const padding = { top: 50, right: 30, bottom: 56, left: 56 };
  const graphWidth = width - padding.left - padding.right;
  const graphHeight = height - padding.top - padding.bottom;

  // Use a min so the line sits in the upper portion of the chart for visual clarity
  const minY = 80;
  const xScale = (i: number) => padding.left + (i / (chartData.length - 1)) * graphWidth;
  const yScale = (p: number) => padding.top + graphHeight - ((p - minY) / (100 - minY)) * graphHeight;

  const points = chartData.map((d, i) => `${xScale(i)},${yScale(d.p)}`).join(" ");
  const gridVals = [80, 85, 90, 95, 100];

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-[260px] sm:h-[320px] md:h-[380px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="areaFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>

        {gridVals.map((val) => (
          <g key={val}>
            <line
              x1={padding.left}
              y1={yScale(val)}
              x2={width - padding.right}
              y2={yScale(val)}
              stroke="currentColor"
              strokeOpacity={0.12}
              strokeDasharray="4 4"
            />
            <text x={padding.left - 12} y={yScale(val) + 5} textAnchor="end" className="text-[14px] sm:text-[12px] fill-muted-foreground font-semibold">
              {val}%
            </text>
          </g>
        ))}

        <line x1={padding.left} y1={padding.top + graphHeight} x2={width - padding.right} y2={padding.top + graphHeight} stroke="currentColor" strokeOpacity={0.2} />

        <motion.polygon
          points={`${padding.left},${padding.top + graphHeight} ${points} ${width - padding.right},${padding.top + graphHeight}`}
          fill="url(#areaFill)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <motion.polyline
          points={points}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {chartData.map((d, i) => (
          <motion.g
            key={d.y}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
          >
            <circle cx={xScale(i)} cy={yScale(d.p)} r={8} fill="hsl(var(--primary))" />
            <circle cx={xScale(i)} cy={yScale(d.p)} r={3.5} fill="hsl(var(--background))" />
            <text x={xScale(i)} y={yScale(d.p) - 18} textAnchor="middle" className="text-[15px] sm:text-[13px] font-extrabold fill-primary">
              {d.p}%
            </text>
            <text x={xScale(i)} y={height - 14} textAnchor="middle" className="text-[15px] sm:text-[13px] font-bold fill-muted-foreground">
              {d.y}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

function AchievementsPage() {
  const [lb, setLb] = useState<number | null>(null);

  return (
    <>
      <PageHero
        bgImage={topper1}
        eyebrow="Our Achievements"
        title={<>Excellence is a <span className="text-secondary">habit here.</span></>}
        subtitle="From classrooms to courts, our students keep raising the bar."
      />

      {/* Stats */}
      <section className="py-10 md:py-14">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { v: 98, s: "%", l: "Board Avg" },
            { v: 142, s: "+", l: "Medals 2024" },
            { v: 27, s: "", l: "State Toppers" },
            { v: 9, s: "", l: "National Awards" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div className="rounded-2xl bg-card border border-border p-6 md:p-8 text-center shadow-soft">
                <div className="text-4xl md:text-5xl font-extrabold text-primary">
                  <Counter to={s.v} suffix={s.s} />
                </div>
                <div className="mt-2 text-xs md:text-sm uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Academic */}
      <section className="py-10 md:py-14 bg-muted/40">
        <div className="container-x">
          <Reveal className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Academic</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Mastery over marks</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {academic.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-card border border-border p-7 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-gradient text-primary-foreground shadow-soft">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-bold text-lg">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sports */}
      <section className="py-10 md:py-14">
        <div className="container-x">
          <Reveal className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Sports</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">On the field & podium</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {sports.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-card border border-border p-7 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-gradient text-secondary-foreground shadow-soft">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-bold text-lg">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-10 md:py-14 bg-muted/40">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Awards & Recognition</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">A wall of honours</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {awards.map((a, i) => (
              <Reveal key={a} delay={i * 0.05}>
                <div className="flex items-start gap-3 rounded-xl bg-card border border-border p-5 shadow-soft hover:border-secondary transition">
                  <Trophy className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <span className="text-sm font-medium">{a}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Toppers */}
      <section className="py-10 md:py-14">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Toppers</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Stars of 2024–25</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {toppers.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <article className="group relative overflow-hidden rounded-3xl bg-dark text-dark-foreground shadow-soft hover:shadow-elevated transition">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={t.img} alt={t.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-xs uppercase tracking-[0.2em] text-secondary font-bold">{t.subj}</div>
                    <div className="mt-1 text-2xl font-extrabold">{t.name}</div>
                    <div className="mt-1 text-3xl font-extrabold bg-gold-gradient bg-clip-text text-transparent">{t.score}</div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* YEAR-WISE RESULTS LINE GRAPH */}
      <section className="py-10 md:py-14 bg-muted/40">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Year-wise Results</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">A decade of growth</h2>
            <p className="mt-4 text-muted-foreground">Grade 10 board pass percentage across the years.</p>
          </Reveal>
          <Reveal>
            <div className="rounded-3xl bg-card border border-border shadow-elevated p-6 md:p-10">
              <LineChart />
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
                <span>Y-axis: Pass percentage (0–100%)</span>
                <span className="inline-flex items-center gap-2">
                  <span className="inline-block h-1.5 w-6 rounded bg-primary" /> CBSE Grade 10 Results
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-10 md:py-14">

        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Certificates</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Recognitions on display</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((c, i) => (
              <Reveal key={c.alt} delay={i * 0.04}>
                <button
                  onClick={() => setLb(i)}
                  className="group relative block w-full overflow-hidden rounded-2xl shadow-soft hover:shadow-elevated transition"
                >
                  <img src={c.src} alt={c.alt} loading="lazy" className="aspect-[4/3] w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-left">
                    <p className="text-sm font-semibold text-white">{c.alt}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
          <Lightbox items={certificates} index={lb} onClose={() => setLb(null)} onIndex={setLb} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-14">
        <div className="container-x">
          <div className="rounded-3xl bg-hero-gradient p-10 md:p-14 text-primary-foreground shadow-elevated text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Want your child's name here next year?</h2>
            <a href="/admissions" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-bold text-secondary-foreground hover:shadow-glow hover:-translate-y-0.5 transition">
              Explore Admissions <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
