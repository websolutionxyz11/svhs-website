import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { h as heroImg } from "./hero-campus-CpSzjXd4.mjs";
import { c as classroomImg, s as scienceImg, a as sportsImg, b as culturalImg, l as libraryImg, e as eventArt, L as Lightbox } from "./event-art-86ddDGlM.mjs";
import { t as topper1, a as topper2, b as topper3 } from "./topper-3-Cu7jmzUB.mjs";
import { e as eventAnnual } from "./event-annual-BTd5MuHE.mjs";
import { C as Counter } from "./Counter-CDcPYBF6.mjs";
import { R as Reveal } from "./Reveal-CxdarVJV.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { m as Star, A as ArrowRight, C as ChevronLeft, d as ChevronRight, B as BookOpen, p as FlaskConical, n as Trophy, E as Earth, H as Heart, q as Sparkles, Q as Quote, e as Calendar, X } from "../_libs/lucide-react.mjs";
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
const principalImg = "/assets/principal-BI8nX6Xt.jpg";
function AdmissionPopup() {
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const seen = sessionStorage.getItem("svhs_admission_popup");
    if (seen) return;
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
  }, []);
  const close = () => {
    setOpen(false);
    sessionStorage.setItem("svhs_admission_popup", "1");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "fixed inset-0 z-[100] grid place-items-center p-4",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 bg-black/70 backdrop-blur-sm",
            onClick: close
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.85, y: 30 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: { opacity: 0, scale: 0.9, y: 20 },
            transition: { type: "spring", damping: 22, stiffness: 260 },
            className: "relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-elevated",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-44 md:h-52 overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: heroImg,
                    alt: "Sree Vidya High School campus",
                    className: "h-full w-full object-cover"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider shadow-elevated", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
                  " Limited Seats"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: close,
                    "aria-label": "Close popup",
                    className: "absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/95 text-foreground hover:bg-white hover:scale-110 transition-all shadow-soft",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-7 py-8 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl md:text-3xl font-extrabold text-primary leading-tight", children: [
                  "Admissions Open for the",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Session 2026–2027"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Join Sree Vidya High School — where academic excellence meets holistic growth. Apply now before seats fill up!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-col sm:flex-row items-center justify-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/admissions",
                      onClick: close,
                      className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-elevated hover:bg-primary-light hover:-translate-y-0.5 transition-all",
                      children: "Click for Admission"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: close,
                      className: "text-xs font-semibold text-muted-foreground hover:text-foreground transition",
                      children: "Maybe later"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center justify-center gap-4 text-[11px] uppercase tracking-wider text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✓ CBSE Affiliated" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-muted-foreground/40" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✓ 98% Results" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-muted-foreground/40" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✓ K–10" })
                ] })
              ] })
            ]
          }
        )
      ]
    }
  ) });
}
const stats = [{
  value: 2400,
  suffix: "+",
  label: "Active Students"
}, {
  value: 98,
  suffix: "%",
  label: "Board Results"
}, {
  value: 140,
  suffix: "+",
  label: "Expert Faculty"
}, {
  value: 27,
  suffix: "",
  label: "Years of Legacy"
}];
const features = [{
  icon: BookOpen,
  title: "Holistic Curriculum",
  desc: "Concept-first learning that goes far beyond textbooks, blending theory with real-world application."
}, {
  icon: FlaskConical,
  title: "Modern Labs",
  desc: "Fully-equipped science, robotics & computer labs that fuel curiosity and hands-on discovery."
}, {
  icon: Trophy,
  title: "Sports Academy",
  desc: "Cricket, athletics, basketball, swimming and yoga led by certified coaches and ex-state players."
}, {
  icon: Earth,
  title: "Global Outlook",
  desc: "International exchange programmes, MUNs and Olympiads that open doors to the world."
}, {
  icon: Heart,
  title: "Value Education",
  desc: "Mindfulness, empathy and leadership woven into every classroom and corridor."
}, {
  icon: Sparkles,
  title: "Creative Arts",
  desc: "Music, theatre, dance and visual arts taught with the same rigour as academics."
}];
const galleryPreview = [{
  src: classroomImg,
  alt: "Collaborative classroom"
}, {
  src: scienceImg,
  alt: "Science lab"
}, {
  src: sportsImg,
  alt: "Sports day"
}, {
  src: culturalImg,
  alt: "Cultural festival"
}, {
  src: libraryImg,
  alt: "Reading hall"
}, {
  src: eventArt,
  alt: "Art exhibition"
}];
const testimonials = [{
  name: "Aarav Mehta",
  role: "Class 10 · Topper 2024",
  quote: "Teachers here don't just teach — they ignite. I walked in nervous and walked out a confident learner ready for anything."
}, {
  name: "Priya Sharma",
  role: "Parent of Aanya, Grade 6",
  quote: "The growth in my daughter — academically and emotionally — has been remarkable. Sree Vidya feels like a second home."
}, {
  name: "Rohan Krishnan",
  role: "Alumnus, Batch of 2019",
  quote: "From debate club to IIT — every step was shaped by mentors who genuinely cared. Forever grateful."
}];
const upcomingEvents = [{
  date: "Dec 18",
  title: "Annual Day Celebrations",
  img: eventAnnual,
  tag: "Cultural"
}, {
  date: "Jan 12",
  title: "Inter-School Sports Meet",
  img: sportsImg,
  tag: "Sports"
}, {
  date: "Feb 04",
  title: "Science & Robotics Expo",
  img: scienceImg,
  tag: "Academic"
}];
const teachers = [{
  img: principalImg,
  name: "Dr. Ramesh Iyer",
  subject: "Principal",
  exp: "Ph.D · 25 yrs experience"
}, {
  img: topper1,
  name: "Mrs. Anjali Verma",
  subject: "Mathematics",
  exp: "M.Sc · 15 yrs experience"
}, {
  img: topper2,
  name: "Ms. Priya Nair",
  subject: "English Literature",
  exp: "M.A · 12 yrs experience"
}, {
  img: topper3,
  name: "Mr. Karthik Rao",
  subject: "Physics",
  exp: "M.Sc · 18 yrs experience"
}, {
  img: principalImg,
  name: "Mrs. Lakshmi Devi",
  subject: "Biology",
  exp: "M.Sc · 14 yrs experience"
}, {
  img: topper1,
  name: "Mr. Suresh Kumar",
  subject: "Chemistry",
  exp: "M.Sc · 16 yrs experience"
}, {
  img: topper2,
  name: "Ms. Neha Sharma",
  subject: "Computer Science",
  exp: "M.Tech · 10 yrs experience"
}, {
  img: topper3,
  name: "Mr. Arjun Reddy",
  subject: "Social Studies",
  exp: "M.A · 13 yrs experience"
}];
const heroSlides = [{
  img: heroImg,
  badge: "Admissions Open · 2026–27",
  title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Where curious minds ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gold-gradient bg-clip-text text-transparent", children: "become tomorrow's" }),
    " changemakers."
  ] }),
  sub: "Sree Vidya High School blends rigorous academics, creative arts and competitive sports in a campus designed for joyful, lifelong learning."
}, {
  img: classroomImg,
  badge: "Holistic Learning",
  title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Smart classrooms that ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gold-gradient bg-clip-text text-transparent", children: "ignite curiosity" }),
    " every single day."
  ] }),
  sub: "Concept-first teaching, low ratios and personalised mentoring help every learner discover their spark."
}, {
  img: sportsImg,
  badge: "Sports Academy",
  title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Champions are built on ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gold-gradient bg-clip-text text-transparent", children: "our fields" }),
    " and courts."
  ] }),
  sub: "From cricket to athletics, our certified coaches nurture state and national level champions."
}, {
  img: scienceImg,
  badge: "STEM & Robotics",
  title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Modern labs where ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gold-gradient bg-clip-text text-transparent", children: "ideas come alive." })
  ] }),
  sub: "Hands-on science, robotics and computer labs that prepare students for the world of tomorrow."
}];
function HomePage() {
  const [lightbox, setLightbox] = reactExports.useState(null);
  const [slide, setSlide] = reactExports.useState(0);
  const items = galleryPreview.map((g) => ({
    src: g.src,
    alt: g.alt
  }));
  reactExports.useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5e3);
    return () => clearInterval(t);
  }, []);
  const next = () => setSlide((s) => (s + 1) % heroSlides.length);
  const prev = () => setSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length);
  const current = heroSlides[slide];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AdmissionPopup, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden h-[100svh] min-h-[600px] max-h-[900px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        scale: 1.08
      }, animate: {
        opacity: 1,
        scale: 1
      }, exit: {
        opacity: 0,
        scale: 1.02
      }, transition: {
        duration: 1.2,
        ease: "easeOut"
      }, className: "absolute inset-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: current.img, alt: current.badge, className: "h-full w-full object-cover" }) }, slide) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x relative h-full flex items-center text-primary-foreground pt-24 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, exit: {
          opacity: 0,
          y: -20
        }, transition: {
          duration: 0.7,
          ease: "easeOut"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-secondary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3 fill-secondary" }),
            " ",
            current.badge
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.05] text-balance drop-shadow-lg", children: current.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-base md:text-lg text-white/90 drop-shadow", children: current.sub })
        ] }, slide) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admissions", className: "group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-bold text-secondary-foreground shadow-elevated hover:shadow-glow hover:-translate-y-0.5 transition-all", children: [
            "Apply for 2026–27 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition-transform" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/gallery", className: "inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition", children: "Explore Campus" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex items-center gap-2", children: heroSlides.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSlide(i), "aria-label": `Go to slide ${i + 1}`, className: `h-1.5 rounded-full transition-all ${i === slide ? "w-12 bg-secondary" : "w-5 bg-white/30 hover:bg-white/60"}` }, i)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: prev, "aria-label": "Previous slide", className: "absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/15 backdrop-blur border border-white/30 text-white hover:bg-white/30 hover:scale-110 transition-all shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: next, "aria-label": "Next slide", className: "absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/15 backdrop-blur border border-white/30 text-white hover:bg-white/30 hover:scale-110 transition-all shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative -mt-12 md:-mt-16 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 rounded-3xl bg-card shadow-elevated p-6 md:p-10 border border-border", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: i * 0.08, className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl md:text-5xl font-extrabold text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.value, suffix: s.suffix }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs md:text-sm uppercase tracking-wider text-muted-foreground", children: s.label })
    ] }, s.label)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-y", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: classroomImg, alt: "Smart classroom", loading: "lazy", width: 1280, height: 896, className: "rounded-2xl shadow-soft aspect-[4/5] object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: libraryImg, alt: "Library", loading: "lazy", width: 1280, height: 896, className: "rounded-2xl shadow-soft aspect-[4/5] object-cover mt-10" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -right-2 sm:right-8 rounded-2xl bg-primary-gradient text-primary-foreground p-5 shadow-elevated w-56", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-extrabold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: 27 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider opacity-80", children: "Years of Trust" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-accent", children: "About the School" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-extrabold text-balance", children: "A school that feels like a community." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: "Since 1998, Sree Vidya High School has been a launchpad for young minds in Hyderabad. Our 8-acre green campus, low student–teacher ratio and integrated arts-sports-academic philosophy nurture confident, kind and capable learners." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 grid sm:grid-cols-2 gap-3", children: ["CBSE Affiliated", "8-Acre Green Campus", "1:18 Student–Teacher Ratio", "Smart Classrooms"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-6 w-6 place-items-center rounded-full bg-accent/15 text-accent", children: "✓" }),
          p
        ] }, p)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admissions", className: "mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-light transition", children: [
          "Discover Admissions ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-y bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-accent", children: "Why Sree Vidya" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-extrabold text-balance", children: "Built for the learners of tomorrow." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Six pillars that make every day on campus extraordinary." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group h-full rounded-2xl bg-card p-7 border border-border shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-xl bg-primary-gradient text-primary-foreground shadow-soft group-hover:scale-110 group-hover:rotate-3 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-lg font-bold", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: f.desc })
      ] }) }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-y", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-accent", children: "Latest Events" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-extrabold", children: "What's happening on campus." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/events", className: "inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all", children: [
          "View all events ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: upcomingEvents.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative overflow-hidden rounded-2xl bg-card border border-border shadow-soft hover:shadow-elevated transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[5/3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: e.img, alt: e.title, loading: "lazy", className: "h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 left-4 rounded-xl bg-white/95 backdrop-blur px-3 py-2 text-center shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: e.date.split(" ")[0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-extrabold text-primary leading-none", children: e.date.split(" ")[1] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full bg-accent/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent", children: e.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-lg font-bold", children: e.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/events", className: "mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all", children: [
            "Details ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
          ] })
        ] })
      ] }) }, e.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-y bg-dark text-dark-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-secondary", children: "Gallery" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-extrabold text-white", children: "Moments that define us." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/gallery", className: "inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:gap-3 transition-all", children: [
            "Open full gallery ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4", children: galleryPreview.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setLightbox(i), className: `relative block w-full overflow-hidden rounded-2xl group ${i === 0 ? "md:row-span-2 md:col-span-1" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: g.src, alt: g.alt, loading: "lazy", className: `w-full object-cover transition-transform duration-700 group-hover:scale-110 ${i === 0 ? "h-full aspect-square md:aspect-[3/5]" : "aspect-square"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-3 right-3 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/80 uppercase tracking-wider", children: "Click to view" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-white", children: g.alt })
          ] })
        ] }) }, g.alt)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbox, { items, index: lightbox, onClose: () => setLightbox(null), onIndex: setLightbox })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-y", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid lg:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-3 bg-gold-gradient rounded-3xl opacity-30 blur-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: principalImg, alt: "Principal Dr. Ramesh Iyer", loading: "lazy", width: 800, height: 1024, className: "relative rounded-3xl shadow-elevated object-cover aspect-[4/5] w-full" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-accent", children: "Principal's Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "mt-4 h-10 w-10 text-secondary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xl md:text-2xl font-display font-semibold leading-snug text-balance", children: `"At Sree Vidya, we don't measure children by what they remember. We measure them by what they wonder about, what they create, and how kindly they treat the world around them."` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-lg", children: "Dr. Ramesh Iyer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Principal · M.Ed, Ph.D in Education" })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-y bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-accent", children: "Voices of Vidya" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-extrabold", children: "Stories from our community." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full rounded-2xl bg-card border border-border p-7 shadow-soft hover:shadow-elevated transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-secondary", children: [...Array(5)].map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }, j)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-foreground/80 leading-relaxed", children: [
          '"',
          t.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-3 pt-5 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center rounded-full bg-primary-gradient text-primary-foreground font-bold", children: t.name.charAt(0) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-sm", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.role })
          ] })
        ] })
      ] }) }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-y", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-accent", children: "Achievements" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-extrabold", children: "Meet our class of stars." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Stories of grit, growth and grades that speak for themselves." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [{
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
        subj: "National Robotics Championship"
      }].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative overflow-hidden rounded-3xl bg-dark text-dark-foreground shadow-soft hover:shadow-elevated transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.img, alt: t.name, loading: "lazy", width: 600, height: 800, className: "h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-secondary font-bold", children: t.subj }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-2xl font-extrabold", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-3xl font-extrabold bg-gold-gradient bg-clip-text text-transparent", children: t.score })
        ] })
      ] }) }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-y", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-hero-gradient p-10 md:p-16 text-primary-foreground shadow-elevated", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 h-72 w-72 rounded-full bg-secondary/40 blur-3xl animate-blob" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-accent/40 blur-3xl animate-blob", style: {
        animationDelay: "3s"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid lg:grid-cols-12 gap-8 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-secondary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3 w-3" }),
            " Admissions Open"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-3xl md:text-5xl font-extrabold text-balance", children: "Begin your child's journey at Sree Vidya." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/80 max-w-xl", children: "Applications for 2026–27 close on March 31, 2026. Limited seats per grade." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 flex lg:justify-end flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admissions", className: "inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-bold text-secondary-foreground shadow-elevated hover:shadow-glow hover:-translate-y-0.5 transition", children: [
            "Apply Now ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition", children: "Visit Campus" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-y bg-muted/40 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-accent", children: "Our Faculty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-extrabold", children: "Meet our brilliant teachers." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Mentors who shape minds and inspire lifelong learners." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-6 animate-h-scroll group-hover:[animation-play-state:paused] w-max px-6", children: [...teachers, ...teachers].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "w-64 shrink-0 rounded-2xl bg-card border border-border shadow-soft overflow-hidden hover:shadow-elevated hover:-translate-y-1 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.img, alt: t.name, loading: "lazy", className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-accent font-bold", children: t.subject }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-bold text-lg", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: t.exp })
        ] })
      ] }, i)) }) })
    ] })
  ] });
}
export {
  HomePage as component
};
