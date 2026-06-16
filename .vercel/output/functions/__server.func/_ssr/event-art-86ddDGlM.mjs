import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { X, C as ChevronLeft, d as ChevronRight } from "../_libs/lucide-react.mjs";
function Lightbox({ items, index, onClose, onIndex }) {
  reactExports.useEffect(() => {
    const onKey = (e) => {
      if (index === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((index + 1) % items.length);
      if (e.key === "ArrowLeft") onIndex((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onClose, onIndex]);
  const item = index !== null ? items[index] : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: item && index !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 pb-24 md:pb-4",
      onClick: onClose,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "absolute top-4 right-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white hover:bg-secondary hover:text-secondary-foreground transition",
            onClick: onClose,
            "aria-label": "Close",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "hidden md:grid absolute left-4 md:left-8 h-12 w-12 place-items-center rounded-full bg-white/15 text-white hover:bg-secondary hover:text-secondary-foreground transition",
            onClick: (e) => {
              e.stopPropagation();
              onIndex((index - 1 + items.length) % items.length);
            },
            "aria-label": "Previous",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-6 w-6" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "hidden md:grid absolute right-4 md:right-8 h-12 w-12 place-items-center rounded-full bg-white/15 text-white hover:bg-secondary hover:text-secondary-foreground transition",
            onClick: (e) => {
              e.stopPropagation();
              onIndex((index + 1) % items.length);
            },
            "aria-label": "Next",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-6 w-6" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { scale: 0.95, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.95, opacity: 0 },
            onClick: (e) => e.stopPropagation(),
            className: "relative max-w-5xl w-full max-h-[75vh] md:max-h-[85vh]",
            children: [
              item.type === "video" && item.videoUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video bg-black rounded-2xl overflow-hidden shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "iframe",
                {
                  src: item.videoUrl,
                  title: item.alt,
                  className: "w-full h-full",
                  allow: "autoplay; encrypted-media",
                  allowFullScreen: true
                }
              ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: item.src,
                  alt: item.alt,
                  className: "w-full h-full max-h-[70vh] md:max-h-[80vh] object-contain rounded-2xl mx-auto"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-white/80 mt-3 text-xs md:text-sm", children: [
                item.alt,
                " · ",
                index + 1,
                " / ",
                items.length
              ] })
            ]
          },
          index
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "md:hidden fixed inset-x-0 bottom-4 z-10 flex items-center justify-center gap-4",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => onIndex((index - 1 + items.length) % items.length),
                  "aria-label": "Previous",
                  className: "grid h-14 w-14 place-items-center rounded-full bg-white text-primary shadow-elevated active:scale-95 transition",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-6 w-6" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onClose,
                  className: "rounded-full bg-secondary text-secondary-foreground px-5 h-12 text-sm font-bold shadow-elevated",
                  children: "Close"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => onIndex((index + 1) % items.length),
                  "aria-label": "Next",
                  className: "grid h-14 w-14 place-items-center rounded-full bg-white text-primary shadow-elevated active:scale-95 transition",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-6 w-6" })
                }
              )
            ]
          }
        )
      ]
    }
  ) });
}
const classroomImg = "/assets/classroom-CCF84ZWz.jpg";
const scienceImg = "/assets/science-lab-I5fwF8rb.jpg";
const libraryImg = "/assets/library-DLfg3kh4.jpg";
const sportsImg = "/assets/sports-KV6c1RZW.jpg";
const culturalImg = "/assets/cultural-CTXaPyND.jpg";
const eventArt = "/assets/event-art-D4QVEBDK.jpg";
export {
  Lightbox as L,
  sportsImg as a,
  culturalImg as b,
  classroomImg as c,
  eventArt as e,
  libraryImg as l,
  scienceImg as s
};
