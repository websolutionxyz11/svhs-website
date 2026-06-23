import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { X, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

import heroImg from "../assets/hero-campus.webp";

export function AdmissionPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("svhs_admission_popup");
    if (seen) return;
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem("svhs_admission_popup", "1");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={close}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-elevated"
          >
            {/* Banner image */}
            <div className="relative h-44 md:h-52 overflow-hidden">
              <img
                src={heroImg}
                alt="Sree Vidya High School campus"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider shadow-elevated">
                <Sparkles className="h-3 w-3" /> Limited Seats
              </span>
              <button
                onClick={close}
                aria-label="Close popup"
                className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/95 text-foreground hover:bg-white hover:scale-110 transition-all shadow-soft"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="px-7 py-8 text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary leading-tight">
                Admissions Open for the
                <br />
                Session 2026–2027
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Join Sree Vidya High School — where academic excellence meets
                holistic growth. Apply now before seats fill up!
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/admissions"
                  onClick={close}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-elevated hover:bg-primary-light hover:-translate-y-0.5 transition-all"
                >
                  Click for Admission
                </Link>
                <button
                  onClick={close}
                  className="text-xs font-semibold text-muted-foreground hover:text-foreground transition"
                >
                  Maybe later
                </button>
              </div>

              <div className="mt-5 flex items-center justify-center gap-4 text-[11px] uppercase tracking-wider text-muted-foreground">
                <span>✓ CBSE Affiliated</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                <span>✓ 98% Results</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                <span>✓ K–10</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
