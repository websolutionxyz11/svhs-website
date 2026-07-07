import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useIsMobile } from "../hooks/use-mobile";
import { ResponsivePicture } from "./ResponsivePicture";

import resultBanner from "../assets/resultbanner.webp";
import resultBannerAvif from "../assets/resultbanner.avif";

export function ResultsPopup() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const seen = sessionStorage.getItem("svhs_results_popup");
    if (seen) return;
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem("svhs_results_popup", "1");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center p-4"
          initial={isMobile ? undefined : { opacity: 0 }}
          animate={isMobile ? undefined : { opacity: 1 }}
          exit={isMobile ? undefined : { opacity: 0 }}
        >
          <div
            className={`absolute inset-0 bg-black/70 ${isMobile ? "" : "backdrop-blur-sm"}`}
            onClick={close}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
            className="relative w-full max-w-lg overflow-hidden rounded-none bg-white shadow-elevated"
          >
            <button
              onClick={close}
              aria-label="Close popup"
              className="absolute top-3 right-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/95 text-foreground hover:bg-white hover:scale-110 transition-all shadow-soft"
            >
              <X className="h-4 w-4" />
            </button>

            <ResponsivePicture
              src={resultBanner}
              alt="NEET Results 2025"
              sources={[
                { type: "image/avif", srcSet: resultBannerAvif },
                { type: "image/webp", srcSet: resultBanner },
              ]}
              width={600}
              height={400}
              loading="lazy"
              className="block h-auto w-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}