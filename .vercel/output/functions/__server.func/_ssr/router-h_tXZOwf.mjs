import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { G as GraduationCap, X, M as Menu, Y as Youtube, I as Instagram, a as MessageCircle, F as Facebook, T as Twitter, b as MapPin, P as Phone, c as Mail } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-CW-MPFmj.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const links$1 = [
  { to: "/", label: "Home" },
  { to: "/admissions", label: "Admissions" },
  { to: "/events", label: "Events" },
  { to: "/achievements", label: "Achievements" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-lg border-b border-border ${scrolled ? "shadow-soft" : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x flex h-16 md:h-20 items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 shrink-0 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-xl bg-primary-gradient text-primary-foreground shadow-soft group-hover:rotate-6 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-extrabold text-primary text-base md:text-lg", children: "Sree Vidya" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-muted-foreground", children: "High School" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-1", children: links$1.map((l) => {
            const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: l.to,
                className: `relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${active ? "text-primary" : "text-foreground/70 hover:text-primary"}`,
                children: [
                  l.label,
                  active && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-secondary" })
                ]
              },
              l.to
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/admissions",
                className: "hidden sm:inline-flex items-center justify-center rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-secondary-foreground shadow-soft hover:shadow-glow transition-all hover:-translate-y-0.5",
                children: "Apply Now"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                "aria-label": "Toggle menu",
                onClick: () => setOpen((o) => !o),
                className: "lg:hidden grid h-10 w-10 place-items-center rounded-lg border border-border bg-background",
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-border bg-background/95 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "container-x py-4 flex flex-col gap-1", children: [
          links$1.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              className: "px-3 py-3 rounded-lg text-sm font-medium text-foreground/80 hover:bg-muted hover:text-primary",
              children: l.label
            },
            l.to
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/admissions",
              className: "mt-2 inline-flex justify-center rounded-full bg-gold-gradient px-5 py-3 text-sm font-semibold text-secondary-foreground",
              children: "Apply Now"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary text-primary-foreground overflow-hidden border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex whitespace-nowrap animate-marquee py-2 text-xs md:text-sm font-semibold tracking-wide", children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mx-8 inline-flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary", children: "★" }),
          "Admissions Open 2026–27 — Apply Now",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary", children: "★" }),
          "Limited Seats Per Grade"
        ] }, i)) }) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-dark text-dark-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-xl bg-gold-gradient text-secondary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-extrabold text-lg", children: "Sree Vidya" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.18em] uppercase text-white/60", children: "High School" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-white/70 leading-relaxed", children: "Nurturing curious minds and compassionate hearts since 1998. Building tomorrow's leaders through holistic, value-based education." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex gap-3", children: [Facebook, Instagram, Youtube, Twitter].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            "aria-label": "Social",
            className: "grid h-9 w-9 place-items-center rounded-full bg-white/5 hover:bg-secondary hover:text-secondary-foreground transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-white", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2 text-sm text-white/70", children: [
          { to: "/", label: "Home" },
          { to: "/admissions", label: "Admissions" },
          { to: "/events", label: "Events" },
          { to: "/achievements", label: "Achievements" },
          { to: "/gallery", label: "Gallery" },
          { to: "/contact", label: "Contact" }
        ].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, className: "hover:text-secondary transition-colors", children: l.label }) }, l.to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-white", children: "Programmes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm text-white/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Primary (Grades 1–5)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Middle School (6–8)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "High School (9–10)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Sports Academy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Co-curricular Clubs" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-white", children: "Reach Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-3 text-sm text-white/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 mt-0.5 text-secondary shrink-0" }),
            " 24-A Vidya Marg, Hyderabad, Telangana 500032"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 mt-0.5 text-secondary shrink-0" }),
            " +91 98765 43210"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 mt-0.5 text-secondary shrink-0" }),
            " hello@sreevidya.edu.in"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-white/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Sree Vidya High School. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Crafted with care for curious learners." })
    ] }) })
  ] });
}
function PageLoader() {
  const [show, setShow] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.5, ease: "easeInOut" },
      className: "fixed inset-0 z-[100] grid place-items-center bg-hero-gradient",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-6 text-primary-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { scale: 0, rotate: -180 },
            animate: { scale: 1, rotate: 0 },
            transition: { type: "spring", stiffness: 160, damping: 14 },
            className: "grid h-20 w-20 place-items-center rounded-2xl bg-gold-gradient text-secondary-foreground shadow-elevated",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-10 w-10" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.2 },
            className: "text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl md:text-2xl font-extrabold tracking-wide", children: "Sree Vidya High School" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs uppercase tracking-[0.3em] text-white/70", children: "Nurturing Minds · Shaping Futures" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-1 w-48 overflow-hidden rounded-full bg-white/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { x: "-100%" },
            animate: { x: "100%" },
            transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
            className: "absolute inset-y-0 w-1/2 bg-gold-gradient rounded-full"
          }
        ) })
      ] })
    }
  ) });
}
const links = [
  { href: "https://youtube.com", label: "YouTube", Icon: Youtube, color: "bg-red-600" },
  { href: "https://instagram.com", label: "Instagram", Icon: Instagram, color: "bg-gradient-to-br from-pink-500 via-fuchsia-500 to-yellow-400" },
  { href: "https://twitter.com", label: "X (Twitter)", Icon: XIcon, color: "bg-black" },
  { href: "https://wa.me/919876543210", label: "WhatsApp", Icon: MessageCircle, color: "bg-green-500" },
  { href: "https://facebook.com", label: "Facebook", Icon: Facebook, color: "bg-blue-600" }
];
function XIcon({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className, fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18.244 2H21l-6.52 7.45L22 22h-6.79l-4.74-6.2L4.8 22H2.04l6.98-7.98L2 2h6.92l4.28 5.66L18.244 2Zm-1.19 18h1.88L7.05 4H5.07l11.984 16Z" }) });
}
function SocialDock() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "aside",
    {
      "aria-label": "Social media",
      className: "fixed left-1.5 sm:left-3 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-1.5 sm:gap-2 rounded-2xl bg-white/90 backdrop-blur p-1.5 sm:p-2 shadow-elevated border border-border",
      children: links.map(({ href, label, Icon, color }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": label,
          title: label,
          className: `group grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-lg sm:rounded-xl text-white transition-all duration-300 hover:scale-110 hover:shadow-glow ${color}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 sm:h-5 sm:w-5" })
        },
        label
      ))
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-extrabold text-primary", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center justify-center rounded-full bg-primary-gradient px-6 py-3 text-sm font-semibold text-primary-foreground", children: "Back home" }) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong. Try refreshing or head home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "rounded-full border border-input bg-background px-5 py-2.5 text-sm font-semibold", children: "Go home" })
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1E3A8A" },
      { title: "Sree Vidya High School — Nurturing Minds, Shaping Futures" },
      { name: "description", content: "Sree Vidya High School offers premium K-10 education with a holistic curriculum, modern facilities, and a passionate faculty. Admissions for 2026–27 are open." },
      { name: "keywords", content: "Sree Vidya High School, best school in chittoor, best school in penumur, admissions 2026, K-10 education, holistic learning" },
      { name: "author", content: "Sree Vidya High School" },
      { property: "og:title", content: "Sree Vidya High School — Nurturing Minds, Shaping Futures" },
      { property: "og:description", content: "Sree Vidya High School offers premium K-10 education with a holistic curriculum, modern facilities, and a passionate faculty. Admissions for 2026–27 are open." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Sree Vidya High School" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sree Vidya High School — Nurturing Minds, Shaping Futures" },
      { name: "twitter:description", content: "Sree Vidya High School offers premium K-10 education with a holistic curriculum, modern facilities, and a passionate faculty. Admissions for 2026–27 are open." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c5310019-76f1-4076-9a18-b698c138125e/id-preview-84ea35bd--73ee91ef-90c0-4be5-9819-dde11d45d2a7.lovable.app-1781512216022.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c5310019-76f1-4076-9a18-b698c138125e/id-preview-84ea35bd--73ee91ef-90c0-4be5-9819-dde11d45d2a7.lovable.app-1781512216022.png" },
      { name: "google-site-verification", content: "XnIPD4-dVbKrFITvXXbqURHoJ1B8k6B6dB0iqdNiV-Q" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Sree Vidya High School",
          url: "/",
          logo: "/favicon.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "24-A Vidya Marg",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            postalCode: "500032",
            addressCountry: "IN"
          },
          telephone: "+91-98765-43210",
          email: "hello@sreevidya.edu.in"
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageLoader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SocialDock, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const BASE_URL = "";
const entries = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/admissions", priority: "0.9", changefreq: "monthly" },
  { path: "/events", priority: "0.8", changefreq: "weekly" },
  { path: "/achievements", priority: "0.8", changefreq: "monthly" },
  { path: "/gallery", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.7", changefreq: "yearly" }
];
const Route$6 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...entries.map(
            (e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
          ),
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$5 = () => import("./gallery-Dk4niJ0z.mjs");
const Route$5 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery | Sree Vidya High School"
    }, {
      name: "description",
      content: "Explore campus moments — classrooms, events, sports and cultural performances at Sree Vidya High School."
    }, {
      property: "og:title",
      content: "Gallery — Sree Vidya High School"
    }, {
      property: "og:description",
      content: "Photos and videos from across the campus."
    }, {
      property: "og:url",
      content: "/gallery"
    }],
    links: [{
      rel: "canonical",
      href: "/gallery"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./events-CtWDXW55.mjs");
const Route$4 = createFileRoute("/events")({
  head: () => ({
    meta: [{
      title: "Events & Activities | Sree Vidya High School"
    }, {
      name: "description",
      content: "Upcoming and past events at Sree Vidya — sports meets, cultural festivals, academic competitions and more."
    }, {
      property: "og:title",
      content: "Events — Sree Vidya High School"
    }, {
      property: "og:description",
      content: "Highlights from sports, cultural and academic events on campus."
    }, {
      property: "og:url",
      content: "/events"
    }],
    links: [{
      rel: "canonical",
      href: "/events"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./contact-sUne8LWK.mjs");
const Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Us | Sree Vidya High School"
    }, {
      name: "description",
      content: "Get in touch with Sree Vidya High School. Address, phone, email, map and quick enquiry form."
    }, {
      property: "og:title",
      content: "Contact — Sree Vidya High School"
    }, {
      property: "og:description",
      content: "Visit us, call or send us a message."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./admissions-DaUnLdZ3.mjs");
const Route$2 = createFileRoute("/admissions")({
  head: () => ({
    meta: [{
      title: "Admissions 2026–27 | Sree Vidya High School"
    }, {
      name: "description",
      content: "Apply for K-10 admissions at Sree Vidya High School for the 2026–27 academic year. Eligibility, fees, documents and FAQs."
    }, {
      property: "og:title",
      content: "Admissions 2026–27 — Sree Vidya High School"
    }, {
      property: "og:description",
      content: "Limited seats. Apply early for the 2026–27 academic year."
    }, {
      property: "og:url",
      content: "/admissions"
    }],
    links: [{
      rel: "canonical",
      href: "/admissions"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./achievements-XBbm_J9i.mjs");
const Route$1 = createFileRoute("/achievements")({
  head: () => ({
    meta: [{
      title: "Achievements & Awards | Sree Vidya High School"
    }, {
      name: "description",
      content: "Academic, sports and cultural achievements of Sree Vidya students, from CBSE toppers to national-level winners."
    }, {
      property: "og:title",
      content: "Achievements — Sree Vidya High School"
    }, {
      property: "og:description",
      content: "Toppers, medalists and award-winners across academics, sports and the arts."
    }, {
      property: "og:url",
      content: "/achievements"
    }],
    links: [{
      rel: "canonical",
      href: "/achievements"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-cQU7ZCTA.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Sree Vidya High School — Nurturing Minds, Shaping Futures"
    }, {
      name: "description",
      content: "A premium K-10 school in Hyderabad blending academic excellence, sports, arts, and values. Admissions for 2026–27 are open."
    }, {
      property: "og:title",
      content: "Sree Vidya High School"
    }, {
      property: "og:description",
      content: "Premium K-10 school in Hyderabad. Admissions Open 2026–27."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$6.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$7
});
const GalleryRoute = Route$5.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$7
});
const EventsRoute = Route$4.update({
  id: "/events",
  path: "/events",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const AdmissionsRoute = Route$2.update({
  id: "/admissions",
  path: "/admissions",
  getParentRoute: () => Route$7
});
const AchievementsRoute = Route$1.update({
  id: "/achievements",
  path: "/achievements",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AchievementsRoute,
  AdmissionsRoute,
  ContactRoute,
  EventsRoute,
  GalleryRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
