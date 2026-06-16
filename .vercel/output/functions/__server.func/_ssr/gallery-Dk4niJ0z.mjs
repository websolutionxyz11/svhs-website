import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as classroomImg, s as scienceImg, l as libraryImg, a as sportsImg, b as culturalImg, e as eventArt, L as Lightbox } from "./event-art-86ddDGlM.mjs";
import { c as campusAerial } from "./campus-aerial-C6NpN0qC.mjs";
import { e as eventAnnual } from "./event-annual-BTd5MuHE.mjs";
import { h as heroImg } from "./hero-campus-CpSzjXd4.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const items = [{
  src: heroImg,
  alt: "Front facade",
  cat: "Campus",
  tall: true
}, {
  src: classroomImg,
  alt: "Smart classroom",
  cat: "Campus"
}, {
  src: scienceImg,
  alt: "Science lab in action",
  cat: "Campus"
}, {
  src: libraryImg,
  alt: "Library reading hall",
  cat: "Campus"
}, {
  src: campusAerial,
  alt: "Aerial campus view",
  cat: "Campus",
  tall: true
}, {
  src: sportsImg,
  alt: "Sports day finals",
  cat: "Sports"
}, {
  src: culturalImg,
  alt: "Cultural dance",
  cat: "Cultural",
  tall: true
}, {
  src: eventAnnual,
  alt: "Annual day stage",
  cat: "Events"
}, {
  src: eventArt,
  alt: "Art exhibition",
  cat: "Cultural"
}];
function GalleryPage() {
  const [filter, setFilter] = reactExports.useState("All");
  const [lbIndex, setLbIndex] = reactExports.useState(null);
  const filtered = reactExports.useMemo(() => filter === "All" ? items : items.filter((i) => i.cat === filter), [filter]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[70vh] md:h-[85vh] w-full overflow-hidden bg-dark", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("video", { className: "absolute inset-0 h-full w-full object-cover", src: "https://assets.mixkit.co/videos/4429/4429-720.mp4", poster: campusAerial, autoPlay: true, muted: true, loop: true, playsInline: true, preload: "metadata" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 h-full container-x flex flex-col items-center justify-center text-center text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary/20 border border-secondary/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-secondary", children: "Campus Film" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 text-4xl md:text-6xl font-extrabold drop-shadow-2xl text-balance max-w-3xl", children: [
          "Step inside ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary", children: "Sree Vidya." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xl text-white/80", children: "An immersive look at our 8-acre campus, classrooms, labs and student life — in motion." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-y bg-dark text-dark-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 justify-center mb-10", children: ["All", "Campus", "Events", "Sports", "Cultural"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(c), className: `rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition ${filter === c ? "bg-secondary text-secondary-foreground shadow-glow" : "bg-white/5 text-white/70 hover:text-white border border-white/10"}`, children: c }, c)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, exit: {
        opacity: 0
      }, transition: {
        duration: 0.35,
        ease: "easeOut"
      }, className: "columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4", children: filtered.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setLbIndex(filtered.indexOf(it)), className: "group relative block w-full overflow-hidden rounded-2xl break-inside-avoid shadow-soft hover:shadow-glow transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.src, alt: it.alt, loading: "lazy", className: `w-full object-cover transition-transform duration-700 group-hover:scale-110 ${it.tall ? "aspect-[3/4]" : "aspect-[4/3]"}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 group-hover:opacity-100 transition" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-4 text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.2em] text-secondary font-bold", children: it.cat }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-bold text-white", children: it.alt })
        ] })
      ] }, it.alt)) }, filter) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbox, { items: filtered, index: lbIndex, onClose: () => setLbIndex(null), onIndex: setLbIndex })
    ] }) })
  ] });
}
export {
  GalleryPage as component
};
