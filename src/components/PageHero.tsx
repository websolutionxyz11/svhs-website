import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  crumb?: string;
  bgImage?: string;
}

export function PageHero({ eyebrow, title, subtitle, crumb, bgImage }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden text-primary-foreground pt-36 pb-20 md:pt-44 md:pb-28">
      {bgImage ? (
        <>
          <img
            src={bgImage}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0  from-primary/85 via-primary/70 to-accent/60" />
        </>
      ) : (
        <div className="absolute inset-0 bg-hero-gradient" />
      )}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-secondary/40 blur-3xl animate-blob" />
        <div className="absolute top-20 right-0 h-80 w-80 rounded-full bg-accent/40 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
      </div>
      <div className="container-x relative">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/80 mb-6"
        >
          <Link to="/" className="hover:text-secondary">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-secondary">{crumb ?? eyebrow}</span>
        </motion.nav>
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
            className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-secondary border border-white/20 backdrop-blur"
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          className="mt-6 max-w-3xl text-4xl md:text-6xl font-extrabold leading-[1.05] text-balance drop-shadow-lg"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
            className="mt-5 max-w-2xl text-base md:text-lg text-white/90"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
