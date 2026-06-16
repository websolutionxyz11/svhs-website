import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { d as ChevronRight } from "../_libs/lucide-react.mjs";
function PageHero({ eyebrow, title, subtitle, crumb, bgImage }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden text-primary-foreground pt-36 pb-20 md:pt-44 md:pb-28", children: [
    bgImage ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: bgImage,
          alt: "",
          "aria-hidden": true,
          className: "absolute inset-0 h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-accent/60" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-hero-gradient" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 opacity-30 pointer-events-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -left-20 h-72 w-72 rounded-full bg-secondary/40 blur-3xl animate-blob" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-20 right-0 h-80 w-80 rounded-full bg-accent/40 blur-3xl animate-blob", style: { animationDelay: "3s" } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.nav,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          className: "flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/80 mb-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-secondary", children: "Home" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary", children: crumb ?? eyebrow })
          ]
        }
      ),
      eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.span,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0, transition: { delay: 0.1 } },
          className: "inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-secondary border border-white/20 backdrop-blur",
          children: eyebrow
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h1,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0, transition: { delay: 0.2 } },
          className: "mt-6 max-w-3xl text-4xl md:text-6xl font-extrabold leading-[1.05] text-balance drop-shadow-lg",
          children: title
        }
      ),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0, transition: { delay: 0.3 } },
          className: "mt-5 max-w-2xl text-base md:text-lg text-white/90",
          children: subtitle
        }
      )
    ] })
  ] });
}
export {
  PageHero as P
};
