import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-C_0Y6Kyq.mjs";
import { R as Reveal } from "./Reveal-CxdarVJV.mjs";
import { l as libraryImg, a as sportsImg, c as classroomImg, s as scienceImg, e as eventArt, b as culturalImg, L as Lightbox } from "./event-art-86ddDGlM.mjs";
import { e as eventAnnual } from "./event-annual-BTd5MuHE.mjs";
import { c as campusAerial } from "./campus-aerial-C6NpN0qC.mjs";
import { e as Calendar, b as MapPin, f as Play, C as ChevronLeft, d as ChevronRight } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
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
function EventCarousel({ slides, autoPlayInterval = 4e3, onSlideChange }) {
  const [currentIndex, setCurrentIndex] = reactExports.useState(0);
  const [isHovering, setIsHovering] = reactExports.useState(false);
  const [loadedImages, setLoadedImages] = reactExports.useState(/* @__PURE__ */ new Set());
  const autoPlayTimerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!isHovering && slides.length > 1) {
      autoPlayTimerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, autoPlayInterval);
    }
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isHovering, slides.length, autoPlayInterval]);
  reactExports.useEffect(() => {
    onSlideChange?.(currentIndex);
  }, [currentIndex, onSlideChange]);
  const goToSlide = reactExports.useCallback((index) => {
    setCurrentIndex(index % slides.length);
  }, [slides.length]);
  const goToNext = reactExports.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);
  const goToPrev = reactExports.useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);
  const handleImageLoad = (index) => {
    setLoadedImages((prev) => /* @__PURE__ */ new Set([...prev, index]));
  };
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  const touchStartX = reactExports.useRef(0);
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
  };
  if (!slides.length) return null;
  const currentSlide = slides[currentIndex];
  (currentIndex + 1) % slides.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative w-full bg-black overflow-hidden rounded-2xl shadow-elevated",
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-video md:aspect-[16/9] lg:aspect-[21/9] overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.6, ease: "easeInOut" },
              className: "absolute inset-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: currentSlide.src,
                    alt: currentSlide.alt,
                    loading: "lazy",
                    onLoad: () => handleImageLoad(currentIndex),
                    className: "w-full h-full object-cover"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" })
              ]
            },
            currentIndex
          ) }),
          currentSlide.caption && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white",
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.2, duration: 0.4 },
              children: [
                currentSlide.category && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-secondary mb-2", children: currentSlide.category }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl md:text-3xl font-bold", children: currentSlide.caption })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.button,
            {
              onClick: goToPrev,
              whileHover: { scale: 1.1 },
              whileTap: { scale: 0.95 },
              className: "absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition",
              "aria-label": "Previous slide",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5 md:h-6 md:w-6 mx-auto" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.button,
            {
              onClick: goToNext,
              whileHover: { scale: 1.1 },
              whileTap: { scale: 0.95 },
              className: "absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition",
              "aria-label": "Next slide",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5 md:h-6 md:w-6 mx-auto" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 right-4 md:top-6 md:right-6 z-10 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white text-xs md:text-sm font-semibold", children: [
            currentIndex + 1,
            " / ",
            slides.length
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2", children: slides.map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.button,
          {
            onClick: () => goToSlide(index),
            className: `rounded-full transition-all ${index === currentIndex ? "bg-white h-2.5 w-2.5 md:h-3 md:w-3" : "bg-white/40 h-2 w-2 md:h-2.5 md:w-2.5 hover:bg-white/60"}`,
            whileHover: { scale: 1.2 },
            whileTap: { scale: 0.95 },
            "aria-label": `Go to slide ${index + 1}`
          },
          index
        )) }),
        slides.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-16 left-1/2 -translate-x-1/2 text-white/40 text-xs pointer-events-none", children: "Swipe or click arrows" })
      ]
    }
  );
}
const WHATSAPP_GROUP = "https://chat.whatsapp.com/invite-link-placeholder";
const upcoming = [{
  date: "Dec 18, 2025",
  title: "Annual Day Celebrations",
  img: eventAnnual,
  cat: "Cultural",
  place: "Open Auditorium"
}, {
  date: "Jan 12, 2026",
  title: "Inter-School Sports Meet",
  img: sportsImg,
  cat: "Sports",
  place: "School Ground"
}, {
  date: "Feb 04, 2026",
  title: "Science & Robotics Expo",
  img: scienceImg,
  cat: "Academic",
  place: "STEM Block"
}, {
  date: "Feb 22, 2026",
  title: "Inter-House Art Festival",
  img: eventArt,
  cat: "Cultural",
  place: "Art Studio"
}];
const past = [{
  date: "Sep 2025",
  title: "Hindi Diwas Recitation",
  img: libraryImg,
  cat: "Cultural"
}, {
  date: "Aug 2025",
  title: "Independence Day Parade",
  img: sportsImg,
  cat: "Cultural"
}, {
  date: "Jul 2025",
  title: "Maths Olympiad Finals",
  img: classroomImg,
  cat: "Academic"
}, {
  date: "Jun 2025",
  title: "Swimming Championship",
  img: sportsImg,
  cat: "Sports"
}, {
  date: "May 2025",
  title: "Summer Tech Camp",
  img: scienceImg,
  cat: "Academic"
}, {
  date: "Apr 2025",
  title: "Earth Day Campus Walk",
  img: campusAerial,
  cat: "Cultural"
}];
const videos = [{
  src: eventAnnual,
  alt: "Annual Day 2024 Highlights",
  type: "video",
  videoUrl: "https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?rel=0"
}, {
  src: sportsImg,
  alt: "Sports Meet Recap",
  type: "video",
  videoUrl: "https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?rel=0"
}, {
  src: culturalImg,
  alt: "Cultural Fest Showcase",
  type: "video",
  videoUrl: "https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?rel=0"
}, {
  src: scienceImg,
  alt: "Science Expo Tour",
  type: "video",
  videoUrl: "https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?rel=0"
}];
const carouselSlides = [{
  id: "1",
  src: eventAnnual,
  alt: "Annual Day Celebrations",
  caption: "Annual Day 2025",
  category: "Cultural"
}, {
  id: "2",
  src: sportsImg,
  alt: "Inter-School Sports Meet",
  caption: "Sports Championship",
  category: "Sports"
}, {
  id: "3",
  src: scienceImg,
  alt: "Science & Robotics Expo",
  caption: "Innovation & Discovery",
  category: "Academic"
}, {
  id: "4",
  src: culturalImg,
  alt: "Cultural Festival",
  caption: "Cultural Showcase",
  category: "Cultural"
}, {
  id: "5",
  src: eventArt,
  alt: "Inter-House Art Festival",
  caption: "Artistic Excellence",
  category: "Cultural"
}, {
  id: "6",
  src: campusAerial,
  alt: "Campus Aerial View",
  caption: "Our Beautiful Campus",
  category: "Campus"
}];
function EventsPage() {
  const [filter, setFilter] = reactExports.useState("All");
  const [videoIdx, setVideoIdx] = reactExports.useState(null);
  const filteredPast = reactExports.useMemo(() => filter === "All" ? past : past.filter((p) => p.cat === filter), [filter]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { bgImage: eventAnnual, eyebrow: "Events & Activities", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "A campus that never ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary", children: "stops celebrating." })
    ] }), subtitle: "From sports meets to science expos, there's always something happening at Sree Vidya." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-y", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-accent", children: "Upcoming" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-extrabold", children: "What's coming up" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-5", children: upcoming.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group h-full overflow-hidden rounded-2xl bg-card border border-border shadow-soft hover:shadow-elevated transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: e.img, alt: e.title, loading: "lazy", className: "h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3 rounded-lg bg-white/95 backdrop-blur px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-soft", children: e.cat })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-base", children: e.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-1.5 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5 text-accent" }),
              " ",
              e.date
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 text-accent" }),
              " ",
              e.place
            ] })
          ] })
        ] })
      ] }) }, e.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-y bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-accent", children: "Event Timeline" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-extrabold", children: "A year in motion" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" }),
        upcoming.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative mb-8 md:mb-12 grid md:grid-cols-2 gap-6 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `pl-12 md:pl-0 ${i % 2 ? "md:pl-12 md:text-left" : "md:pr-12 md:text-right"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block rounded-full bg-secondary/15 text-secondary-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider", children: e.cat }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-xl font-bold", children: e.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground", children: [
              e.date,
              " · ",
              e.place
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-1/2 -translate-x-1/2 grid h-8 w-8 place-items-center rounded-full bg-primary-gradient text-primary-foreground shadow-soft ring-4 ring-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }) })
        ] }) }, e.title))
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-y", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4 mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-accent", children: "Past Events" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-extrabold", children: "Moments from the year" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["All", "Sports", "Cultural", "Academic"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(c), className: `rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${filter === c ? "bg-primary text-primary-foreground shadow-soft" : "bg-card border border-border hover:border-primary text-foreground/70"}`, children: c }, c)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layout: true, className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: filteredPast.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { layout: true, initial: {
        opacity: 0,
        scale: 0.95
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        delay: i * 0.04
      }, className: "group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elevated", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, loading: "lazy", className: "h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs uppercase tracking-wider text-secondary font-bold", children: [
            p.cat,
            " · ",
            p.date
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 text-lg font-bold text-white", children: p.title })
        ] })
      ] }, p.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-y bg-gradient-to-b from-muted/20 to-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-accent", children: "Gallery Highlights" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-extrabold", children: "Moments in motion" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground max-w-2xl", children: "Relive the best moments from our past events. Swipe or click to explore more." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EventCarousel, { slides: carouselSlides, autoPlayInterval: 5e3 })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-y bg-dark text-dark-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center max-w-2xl mx-auto mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-secondary", children: "Event Videos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-5xl font-extrabold text-white", children: "Press play. Feel the campus." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: videos.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setVideoIdx(i), className: "group relative block w-full overflow-hidden rounded-2xl shadow-soft hover:shadow-glow transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: v.src, alt: v.alt, loading: "lazy", className: "h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-16 w-16 place-items-center rounded-full bg-secondary text-secondary-foreground shadow-glow group-hover:scale-110 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-6 w-6 fill-current ml-1" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 p-4 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-white", children: v.alt }) })
        ] }) }, v.alt)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbox, { items: videos, index: videoIdx, onClose: () => setVideoIdx(null), onIndex: setVideoIdx })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-y", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-primary-gradient p-10 md:p-14 text-primary-foreground shadow-elevated text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-extrabold", children: "Join us at the next event" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-white/80", children: "Get instant updates — join our official WhatsApp community." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WHATSAPP_GROUP, target: "_blank", rel: "noreferrer noopener", className: "mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white shadow-elevated hover:shadow-glow hover:-translate-y-0.5 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-5 w-5", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.55 4.15 1.6 5.96L2 22l4.25-1.11a9.93 9.93 0 0 0 5.79 1.84h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.88 9.88 0 0 0 12.04 2zm5.83 14.04c-.25.7-1.43 1.33-1.99 1.41-.51.07-1.15.1-1.85-.12-.43-.13-.97-.31-1.67-.61-2.95-1.27-4.88-4.25-5.03-4.44-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.79-.37.2 0 .39 0 .57.01.18.01.42-.07.66.5.25.6.84 2.06.92 2.21.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.18-.31.4-.45.54-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.36 1.46.3.15.47.13.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.25.66-.15.27.1 1.72.81 2.01.96.3.15.5.22.57.35.07.13.07.75-.18 1.45z" }) }),
        "Join WhatsApp Group"
      ] })
    ] }) }) })
  ] });
}
export {
  EventsPage as component
};
