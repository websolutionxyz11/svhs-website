import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHero } from "./PageHero-C_0Y6Kyq.mjs";
import { R as Reveal } from "./Reveal-CxdarVJV.mjs";
import { c as campusAerial } from "./campus-aerial-C6NpN0qC.mjs";
import { t as topper1, a as topper2, b as topper3 } from "./topper-3-Cu7jmzUB.mjs";
import { e as Calendar, A as ArrowRight, G as GraduationCap, i as ClipboardPen, j as CloudUpload, U as Users, k as Award, D as Download, h as CircleCheck, l as ChevronDown, S as Send } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
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
const eligibility = [{
  grade: "Pre-Primary",
  age: "3 – 5 years",
  req: "Age proof, parent interaction"
}, {
  grade: "Primary (1–5)",
  age: "6 – 10 years",
  req: "Previous report card, age proof"
}, {
  grade: "Middle (6–8)",
  age: "11 – 13 years",
  req: "Report card, written assessment"
}, {
  grade: "High (9–10)",
  age: "14 – 15 years",
  req: "Previous results, entrance test"
}];
const steps = [{
  icon: ClipboardPen,
  title: "Fill the Form",
  desc: "Complete the online application with student & guardian details."
}, {
  icon: CloudUpload,
  title: "Submit Documents",
  desc: "Upload age proof, previous report card and photographs."
}, {
  icon: Users,
  title: "Interaction / Test",
  desc: "Friendly grade-appropriate interaction with our counsellors."
}, {
  icon: Award,
  title: "Confirmation",
  desc: "Receive offer letter and pay fees to confirm your seat."
}];
const docs = ["Birth certificate (original + copy)", "Previous school report card", "Transfer Certificate (TC)", "Aadhaar card (student & parents)", "4 passport-size photographs", "Address proof", "Caste / category certificate (if applicable)", "Medical record / vaccination card"];
const faqs = [{
  q: "When do admissions for 2026–27 open?",
  a: "Applications are open from November 2025 and close on March 31, 2026. Early applicants get priority interaction slots."
}, {
  q: "Is there an entrance test?",
  a: "Grades 1–5 have a friendly interaction. Grades 6–10 have a grade-appropriate written assessment in English, Math and General Knowledge."
}, {
  q: "Can mid-year admissions be considered?",
  a: "Yes, subject to seat availability. Please write to admissions@sreevidya.edu.in for current vacancies."
}, {
  q: "Do you offer scholarships?",
  a: "We offer merit-based and need-based scholarships covering 25–100% of tuition. Apply via the scholarship form on the portal."
}, {
  q: "Is transport available?",
  a: "Yes, GPS-enabled buses serve 30+ routes across Hyderabad with trained attendants and live tracking for parents."
}, {
  q: "What languages are offered?",
  a: "English (primary), Hindi, Telugu and an optional third language — Sanskrit, French or German — from Grade 6."
}];
function AdmissionsPage() {
  const [open, setOpen] = reactExports.useState(0);
  const [submitted, setSubmitted] = reactExports.useState(false);
  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const fd = new FormData(form);
    const gformUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf-TpRUnZEeeYYhuUn0nea97q9s9MQVdUyZ7_Gr-N_rRx_Ikg/formResponse";
    const payload = new FormData();
    payload.append("entry.1266593493", String(fd.get("student") ?? ""));
    payload.append("entry.1120022751", String(fd.get("parent") ?? ""));
    payload.append("entry.1199405799", String(fd.get("phone") ?? ""));
    payload.append("entry.538301213", String(fd.get("class") ?? ""));
    payload.append("entry.1929131956", String(fd.get("message") ?? ""));
    fetch(gformUrl, {
      method: "POST",
      mode: "no-cors",
      body: payload
    }).catch(() => {
    });
    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 6e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { bgImage: campusAerial, eyebrow: "Admissions 2026–27", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Begin your child's journey at ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary", children: "Sree Vidya" }),
      "."
    ] }), subtitle: "A simple, transparent 4-step admission process. We're here to help you every step of the way." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative -mt-12 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-gold-gradient p-6 md:p-8 shadow-elevated", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/20 blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid md:grid-cols-[auto_1fr_auto] items-center gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-16 w-16 place-items-center rounded-2xl bg-white/95 text-primary shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-8 w-8" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-[0.2em] text-secondary-foreground/80", children: "Admissions Open" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-1 text-2xl md:text-3xl font-extrabold text-secondary-foreground", children: "Apply for Academic Year 2026–27" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-secondary-foreground/80", children: [
            "Open from ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Nov 1, 2025" }),
            " · Closes ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "March 31, 2026" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#apply-form", className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-elevated hover:-translate-y-0.5 transition", children: [
          "Apply Now ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 md:py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid lg:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-extrabold text-balance", children: "Admission Overview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: "Sree Vidya admits students for Pre-Primary through Grade 10. Our admissions philosophy is to look beyond marks — for curiosity, character and creative potential. We work closely with families to ensure the right fit for each child." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "Seats are limited and offered on a first-come, first-evaluated basis. Apply early to secure your preferred interaction slot." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-primary-gradient p-8 text-primary-foreground shadow-elevated", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-10 w-10 text-secondary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-bold", children: "Key Dates" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between border-b border-white/15 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Applications Open" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "Nov 1, 2025" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between border-b border-white/15 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Last Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "Mar 31, 2026" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between border-b border-white/15 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Interactions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "Dec – Mar" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Session Begins" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "Jun 10, 2026" })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 md:py-14 bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center max-w-2xl mx-auto mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-accent", children: "Eligibility" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-extrabold", children: "Class-wise requirements" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: eligibility.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-accent font-bold", children: e.grade }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-2xl font-extrabold text-primary", children: e.age }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: e.req })
      ] }) }, e.grade)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 md:py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a1f6b] via-[#0d3aa6] to-[#0a1f6b] p-6 md:p-10 shadow-elevated", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.07]", style: {
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "22px 22px"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-md bg-red-600 px-6 py-2 text-white text-lg md:text-2xl font-extrabold tracking-wide shadow-lg", children: "Domination Continues..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mt-4 text-2xl md:text-4xl font-extrabold text-white", children: [
          "Sree Vidya ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-400", children: "Rules" }),
          " 10",
          /* @__PURE__ */ jsxRuntimeExports.jsx("sup", { children: "th" }),
          " Class ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-400", children: "Top" }),
          " Marks in 2026"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6", children: [{
        score: 599,
        of: 600,
        img: topper1,
        name: "K Gyaneswari",
        ht: "2604113149",
        tag: "AP STATE TOP MARK"
      }, {
        score: 499,
        of: 500,
        img: topper2,
        name: "B Tarunya",
        ht: "18132288",
        tag: "ALL INDIA CBSE TOP MARK"
      }, {
        score: 597,
        of: 600,
        img: topper3,
        name: "K Vrithika Krishna",
        ht: "2631103849",
        tag: "TG STATE TOP MARK"
      }].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        amount: 0.3
      }, transition: {
        delay: i * 0.12,
        duration: 0.5
      }, className: "relative rounded-2xl bg-[#0a1a55] border border-white/10 p-5 text-center shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl md:text-7xl font-extrabold text-yellow-400 leading-none drop-shadow", children: t.score }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-1 h-px w-16 bg-white/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white text-lg font-bold mt-1", children: t.of }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.img, alt: t.name, className: "h-14 w-14 rounded-full object-cover border-2 border-yellow-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md bg-orange-500 px-3 py-1.5 text-[11px] md:text-xs font-extrabold text-white tracking-wider", children: t.tag })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-sm font-bold text-white", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-white/70", children: [
          "HT.No: ",
          t.ht
        ] })
      ] }, t.name)) })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 md:py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-accent", children: "Admission Process" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-extrabold", children: "Four simple steps" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-1 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          width: 0
        }, whileInView: {
          width: "100%"
        }, viewport: {
          once: true,
          amount: 0.4
        }, transition: {
          duration: 1.6,
          ease: "easeInOut"
        }, className: "h-full bg-gradient-to-r from-primary via-secondary to-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-8", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 24
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true,
          amount: 0.3
        }, transition: {
          delay: 0.3 + i * 0.25,
          duration: 0.5
        }, className: "relative text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid h-24 w-24 place-items-center rounded-3xl bg-primary-gradient text-primary-foreground shadow-elevated", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { "aria-hidden": true, className: "absolute inset-0 rounded-3xl bg-primary/30", animate: {
              scale: [1, 1.25, 1],
              opacity: [0.5, 0, 0.5]
            }, transition: {
              duration: 2.2,
              repeat: Infinity,
              delay: i * 0.4
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "relative h-10 w-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-2 -right-2 grid h-8 w-8 place-items-center rounded-full bg-gold-gradient text-secondary-foreground text-sm font-extrabold shadow-soft", children: i + 1 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-bold text-lg", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.desc })
        ] }, s.title)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 md:py-14 bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center max-w-2xl mx-auto mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-accent", children: "Fee Structure" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-extrabold", children: "Transparent annual fees" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "All amounts in INR. Sibling and merit scholarships available." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl rounded-3xl bg-card border border-border p-8 md:p-10 text-center shadow-elevated", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-primary-gradient text-primary-foreground shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-xl md:text-2xl font-extrabold", children: "Complete Fee Structure 2026–27" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Grade-wise admission fees, tuition, transport and optional add-ons — in a single downloadable PDF." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/fee-structure.pdf", download: true, className: "mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-elevated hover:-translate-y-0.5 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
          " Download Fee Structure (PDF)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-xs text-muted-foreground", children: [
          "Need a printed copy? ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "text-primary font-semibold underline-offset-2 hover:underline", children: "Contact admissions" }),
          "."
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 md:py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid lg:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-accent", children: "Documents" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-4xl font-extrabold", children: "What to bring along" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "A simple checklist to keep handy when you visit our admissions desk." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-light transition", children: [
          "Talk to Admissions ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid sm:grid-cols-2 gap-3", children: docs.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 rounded-xl bg-card border border-border p-4 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-accent mt-0.5 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: d })
      ] }, d)) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 md:py-14 bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-accent", children: "FAQ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-extrabold", children: "Frequently asked questions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: faqs.map((f, i) => {
        const isOpen = open === i;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.04, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card shadow-soft overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(isOpen ? null : i), className: "w-full flex items-center justify-between gap-4 px-6 py-5 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-base md:text-lg", children: f.q }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-180 text-primary" : "text-muted-foreground"}` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            height: 0,
            opacity: 0
          }, animate: {
            height: "auto",
            opacity: 1
          }, exit: {
            height: 0,
            opacity: 0
          }, transition: {
            duration: 0.25
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-6 pb-5 text-muted-foreground leading-relaxed", children: f.a }) }) })
        ] }) }, f.q);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "apply-form", className: "py-10 md:py-14 bg-muted/40 scroll-mt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid lg:grid-cols-5 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-accent", children: "Apply Now" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-4xl font-extrabold", children: "Start your application" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "Fill the short form and our admissions team will reach out within 48 hours to schedule your visit and interaction." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:border-primary transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
          " Download Prospectus"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleApply, className: "rounded-3xl bg-card border border-border p-7 md:p-10 shadow-elevated", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Student Name", name: "student", placeholder: "Aanya Sharma", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Parent Name", name: "parent", placeholder: "Mr/Mrs Sharma", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Phone Number", name: "phone", type: "tel", placeholder: "+91 98765 43210", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: [
              "Class Applying For ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, name: "class", className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select grade" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Pre-Primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Grade 1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Grade 2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Grade 3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Grade 4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Grade 5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Grade 6" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Grade 7" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Grade 8" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Grade 9" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Grade 10" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", rows: 4, placeholder: "Anything you'd like us to know…", className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "mt-6 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-bold text-secondary-foreground shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
          " Submit Application"
        ] }),
        submitted && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 8
        }, animate: {
          opacity: 1,
          y: 0
        }, className: "mt-5 flex items-start gap-3 rounded-xl bg-accent/15 text-accent px-4 py-3 text-sm font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Thank you! Your application has been received. We'll be in touch within 48 hours." })
        ] })
      ] }) })
    ] }) })
  ] });
}
function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: name, className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: [
      label,
      required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: " *" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: name, name, type, required, placeholder, className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition" })
  ] });
}
export {
  AdmissionsPage as component
};
