import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-C_0Y6Kyq.mjs";
import { R as Reveal } from "./Reveal-CxdarVJV.mjs";
import { c as campusAerial } from "./campus-aerial-C6NpN0qC.mjs";
import { b as MapPin, P as Phone, c as Mail, g as Clock, F as Facebook, I as Instagram, Y as Youtube, T as Twitter, h as CircleCheck } from "../_libs/lucide-react.mjs";
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
const WHATSAPP_NUMBER = "919876543210";
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const subject = String(data.get("subject") || "General enquiry");
    const message = String(data.get("message") || "");
    const text = `*New Enquiry — Sree Vidya High School*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Subject:* ${encodeURIComponent(subject)}%0A%0A${encodeURIComponent(message)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 4500);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { bgImage: campusAerial, eyebrow: "Get in touch", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "We'd love to ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary", children: "hear from you." })
    ] }), subtitle: "Questions about admissions, a campus tour, or just curious? Drop us a line." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-y", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid lg:grid-cols-5 gap-6 md:gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "lg:col-span-2 space-y-4", children: [
        [{
          icon: MapPin,
          t: "Visit",
          v: "24-A Vidya Marg, Hyderabad, Telangana 500032, India"
        }, {
          icon: Phone,
          t: "Call",
          v: "+91 98765 43210 · +91 40 4012 3456"
        }, {
          icon: Mail,
          t: "Email",
          v: "hello@sreevidya.edu.in"
        }, {
          icon: Clock,
          t: "Hours",
          v: "Mon – Sat · 8:30 AM – 4:30 PM"
        }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 sm:gap-4 rounded-2xl bg-card border border-border p-4 sm:p-5 shadow-soft hover:shadow-elevated transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-xl bg-primary-gradient text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-4 w-4 sm:h-5 sm:w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground", children: c.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm sm:text-base font-semibold break-words", children: c.v })
          ] })
        ] }, c.t)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-dark text-dark-foreground p-5 sm:p-6 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-white/60", children: "Follow us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex gap-3", children: [Facebook, Instagram, Youtube, Twitter].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Social", className: "grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-secondary hover:text-secondary-foreground transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "relative rounded-3xl bg-card border border-border shadow-elevated p-5 sm:p-7 md:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl sm:text-2xl md:text-3xl font-extrabold text-primary", children: "Send us a message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Your enquiry will open in WhatsApp for instant delivery." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", name: "name", placeholder: "Aanya Sharma", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", placeholder: "you@example.com", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone", type: "tel", placeholder: "+91 98765 43210" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Subject", name: "subject", placeholder: "Admission enquiry" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", required: true, rows: 5, placeholder: "Tell us a bit about your child and what you'd like to know…", className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white shadow-soft hover:shadow-elevated hover:-translate-y-0.5 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-4 w-4", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.55 4.15 1.6 5.96L2 22l4.25-1.11a9.93 9.93 0 0 0 5.79 1.84h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.88 9.88 0 0 0 12.04 2z" }) }),
          "Send via WhatsApp"
        ] }),
        sent && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 8
        }, animate: {
          opacity: 1,
          y: 0
        }, className: "mt-5 flex items-start gap-2 rounded-xl bg-accent/15 text-accent px-4 py-3 text-sm font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 mt-0.5 shrink-0" }),
          " Opening WhatsApp with your message…"
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl overflow-hidden shadow-elevated aspect-[16/9] bg-muted border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Sree Vidya campus map", src: "https://www.google.com/maps?q=Hyderabad%20Telangana&output=embed", className: "h-full w-full", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) }) }) }) })
  ] });
}
function Field({
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
  ContactPage as component
};
