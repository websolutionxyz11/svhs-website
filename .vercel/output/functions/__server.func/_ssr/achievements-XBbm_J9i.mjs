import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-C_0Y6Kyq.mjs";
import { R as Reveal } from "./Reveal-CxdarVJV.mjs";
import { C as Counter } from "./Counter-CDcPYBF6.mjs";
import { c as classroomImg, a as sportsImg, s as scienceImg, b as culturalImg, l as libraryImg, e as eventArt, L as Lightbox } from "./event-art-86ddDGlM.mjs";
import { t as topper1, a as topper2, b as topper3 } from "./topper-3-Cu7jmzUB.mjs";
import { B as BookOpen, k as Award, m as Star, n as Trophy, o as Medal, A as ArrowRight } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const academic = [{
  icon: BookOpen,
  title: "CBSE Board Excellence",
  desc: "98.6% school average in Grade 10 boards, with 47 students above 95%."
}, {
  icon: Award,
  title: "Math Olympiad",
  desc: "12 students qualified for IMO Regional Round in 2024."
}, {
  icon: Star,
  title: "Science Talent Search",
  desc: "5 NTSE scholars in the last three batches."
}];
const sports = [{
  icon: Trophy,
  title: "State Cricket Champions",
  desc: "U-17 state champions for two consecutive years."
}, {
  icon: Medal,
  title: "National Swimming",
  desc: "3 silver and 2 bronze at the SGFI Nationals 2024."
}, {
  icon: Trophy,
  title: "Athletics Meet",
  desc: "Overall winners at the District Athletics Championship 2025."
}];
const awards = ["Best School in Academics — Times Education Awards 2024", "Innovative Teaching Award — CBSE 2023", "Green School Certification — TERI", "Cleanest Campus Award — Hyderabad Municipal Corp.", "ISA Award — British Council 2022", "Excellence in Sports — SGFI 2024"];
const toppers = [{
  img: topper1,
  name: "Aarav Mehta",
  score: "98.6%",
  subj: "All India CBSE Rank 27"
}, {
  img: topper2,
  name: "Sara Iqbal",
  score: "97.8%",
  subj: "State Topper · Sciences"
}, {
  img: topper3,
  name: "Vikram Rao",
  score: "Gold",
  subj: "National Robotics Champ"
}];
const certificates = [{
  src: classroomImg,
  alt: "Best Academic Performance 2024"
}, {
  src: sportsImg,
  alt: "Sports Excellence Trophy"
}, {
  src: scienceImg,
  alt: "STEM Innovation Award"
}, {
  src: culturalImg,
  alt: "Cultural Heritage Recognition"
}, {
  src: libraryImg,
  alt: "Reading Champion School"
}, {
  src: eventArt,
  alt: "Creative Arts Award"
}];
const chartData = [{
  y: "2019",
  p: 89
}, {
  y: "2020",
  p: 92
}, {
  y: "2021",
  p: 90
}, {
  y: "2022",
  p: 94
}, {
  y: "2023",
  p: 96
}, {
  y: "2024",
  p: 98
}, {
  y: "2025",
  p: 99
}];
function LineChart() {
  const width = 800;
  const height = 360;
  const padding = {
    top: 50,
    right: 30,
    bottom: 56,
    left: 56
  };
  const graphWidth = width - padding.left - padding.right;
  const graphHeight = height - padding.top - padding.bottom;
  const minY = 80;
  const xScale = (i) => padding.left + i / (chartData.length - 1) * graphWidth;
  const yScale = (p) => padding.top + graphHeight - (p - minY) / (100 - minY) * graphHeight;
  const points = chartData.map((d, i) => `${xScale(i)},${yScale(d.p)}`).join(" ");
  const gridVals = [80, 85, 90, 95, 100];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: `0 0 ${width} ${height}`, className: "w-full h-[260px] sm:h-[320px] md:h-[380px]", preserveAspectRatio: "xMidYMid meet", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "areaFill", x1: "0", x2: "0", y1: "0", y2: "1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "hsl(var(--primary))", stopOpacity: "0.35" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "hsl(var(--primary))", stopOpacity: "0" })
    ] }) }),
    gridVals.map((val) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: padding.left, y1: yScale(val), x2: width - padding.right, y2: yScale(val), stroke: "currentColor", strokeOpacity: 0.12, strokeDasharray: "4 4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: padding.left - 12, y: yScale(val) + 5, textAnchor: "end", className: "text-[14px] sm:text-[12px] fill-muted-foreground font-semibold", children: [
        val,
        "%"
      ] })
    ] }, val)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: padding.left, y1: padding.top + graphHeight, x2: width - padding.right, y2: padding.top + graphHeight, stroke: "currentColor", strokeOpacity: 0.2 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.polygon, { points: `${padding.left},${padding.top + graphHeight} ${points} ${width - padding.right},${padding.top + graphHeight}`, fill: "url(#areaFill)", initial: {
      opacity: 0
    }, whileInView: {
      opacity: 1
    }, viewport: {
      once: true,
      amount: 0.3
    }, transition: {
      duration: 0.8,
      delay: 0.2
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.polyline, { points, fill: "none", stroke: "hsl(var(--primary))", strokeWidth: 4, strokeLinecap: "round", strokeLinejoin: "round", initial: {
      opacity: 0
    }, whileInView: {
      opacity: 1
    }, viewport: {
      once: true,
      amount: 0.3
    }, transition: {
      duration: 0.6,
      ease: "easeOut"
    } }),
    chartData.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.g, { initial: {
      opacity: 0,
      scale: 0
    }, whileInView: {
      opacity: 1,
      scale: 1
    }, viewport: {
      once: true,
      amount: 0.4
    }, transition: {
      duration: 0.4,
      delay: 0.6 + i * 0.08
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: xScale(i), cy: yScale(d.p), r: 8, fill: "hsl(var(--primary))" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: xScale(i), cy: yScale(d.p), r: 3.5, fill: "hsl(var(--background))" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: xScale(i), y: yScale(d.p) - 18, textAnchor: "middle", className: "text-[15px] sm:text-[13px] font-extrabold fill-primary", children: [
        d.p,
        "%"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: xScale(i), y: height - 14, textAnchor: "middle", className: "text-[15px] sm:text-[13px] font-bold fill-muted-foreground", children: d.y })
    ] }, d.y))
  ] }) });
}
function AchievementsPage() {
  const [lb, setLb] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { bgImage: topper1, eyebrow: "Our Achievements", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Excellence is a ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary", children: "habit here." })
    ] }), subtitle: "From classrooms to courts, our students keep raising the bar." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 md:py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6", children: [{
      v: 98,
      s: "%",
      l: "Board Avg"
    }, {
      v: 142,
      s: "+",
      l: "Medals 2024"
    }, {
      v: 27,
      s: "",
      l: "State Toppers"
    }, {
      v: 9,
      s: "",
      l: "National Awards"
    }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border p-6 md:p-8 text-center shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl md:text-5xl font-extrabold text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.v, suffix: s.s }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs md:text-sm uppercase tracking-wider text-muted-foreground", children: s.l })
    ] }) }, s.l)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 md:py-14 bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-accent", children: "Academic" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-extrabold", children: "Mastery over marks" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-5", children: academic.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full rounded-2xl bg-card border border-border p-7 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-xl bg-primary-gradient text-primary-foreground shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(a.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-bold text-lg", children: a.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: a.desc })
      ] }) }, a.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 md:py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-accent", children: "Sports" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-extrabold", children: "On the field & podium" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-5", children: sports.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full rounded-2xl bg-card border border-border p-7 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-xl bg-gold-gradient text-secondary-foreground shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(a.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-bold text-lg", children: a.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: a.desc })
      ] }) }, a.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 md:py-14 bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-accent", children: "Awards & Recognition" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-extrabold", children: "A wall of honours" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: awards.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 rounded-xl bg-card border border-border p-5 shadow-soft hover:border-secondary transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-5 w-5 text-secondary mt-0.5 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: a })
      ] }) }, a)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 md:py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-accent", children: "Toppers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-extrabold", children: "Stars of 2024–25" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: toppers.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative overflow-hidden rounded-3xl bg-dark text-dark-foreground shadow-soft hover:shadow-elevated transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.img, alt: t.name, loading: "lazy", className: "h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-secondary font-bold", children: t.subj }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-2xl font-extrabold", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-3xl font-extrabold bg-gold-gradient bg-clip-text text-transparent", children: t.score })
        ] })
      ] }) }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 md:py-14 bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-accent", children: "Year-wise Results" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-extrabold", children: "A decade of growth" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Grade 10 board pass percentage across the years." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-card border border-border shadow-elevated p-6 md:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LineChart, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Y-axis: Pass percentage (0–100%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-1.5 w-6 rounded bg-primary" }),
            " CBSE Grade 10 Results"
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 md:py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-accent", children: "Certificates" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-extrabold", children: "Recognitions on display" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: certificates.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.04, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setLb(i), className: "group relative block w-full overflow-hidden rounded-2xl shadow-soft hover:shadow-elevated transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.src, alt: c.alt, loading: "lazy", className: "aspect-[4/3] w-full object-cover group-hover:scale-110 transition-transform duration-700" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-4 right-4 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-white", children: c.alt }) })
      ] }) }, c.alt)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbox, { items: certificates, index: lb, onClose: () => setLb(null), onIndex: setLb })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 md:py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-hero-gradient p-10 md:p-14 text-primary-foreground shadow-elevated text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-extrabold", children: "Want your child's name here next year?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/admissions", className: "mt-6 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-bold text-secondary-foreground hover:shadow-glow hover:-translate-y-0.5 transition", children: [
        "Explore Admissions ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }) }) })
  ] });
}
export {
  AchievementsPage as component
};
