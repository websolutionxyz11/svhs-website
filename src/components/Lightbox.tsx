import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

export interface LightboxItem {
  src: string;
  alt: string;
  type?: "image" | "video";
  videoUrl?: string;
}

interface Props {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
}

export function Lightbox({ items, index, onClose, onIndex }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (index === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((index + 1) % items.length);
      if (e.key === "ArrowLeft") onIndex((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onClose, onIndex]);

  const item = index !== null ? items[index] : null;

  return (
    <AnimatePresence>
      {item && index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 pb-24 md:pb-4"
          onClick={onClose}
        >
          <button
            className="absolute top-4 right-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white hover:bg-secondary hover:text-secondary-foreground transition"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          {/* Desktop side arrows */}
          <button
            className="hidden md:grid absolute left-4 md:left-8 h-12 w-12 place-items-center rounded-full bg-white/15 text-white hover:bg-secondary hover:text-secondary-foreground transition"
            onClick={(e) => { e.stopPropagation(); onIndex((index - 1 + items.length) % items.length); }}
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            className="hidden md:grid absolute right-4 md:right-8 h-12 w-12 place-items-center rounded-full bg-white/15 text-white hover:bg-secondary hover:text-secondary-foreground transition"
            onClick={(e) => { e.stopPropagation(); onIndex((index + 1) % items.length); }}
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <motion.div
            key={index}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[75vh] md:max-h-[85vh]"
          >
            {item.type === "video" && item.videoUrl ? (
              <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-elevated">
                <iframe
                  src={item.videoUrl}
                  title={item.alt}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full max-h-[70vh] md:max-h-[80vh] object-contain rounded-2xl mx-auto"
              />
            )}
            <p className="text-center text-white/80 mt-3 text-xs md:text-sm">
              {item.alt} · {index + 1} / {items.length}
            </p>
          </motion.div>
          {/* Mobile bottom controls */}
          <div
            className="md:hidden fixed inset-x-0 bottom-4 z-10 flex items-center justify-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => onIndex((index - 1 + items.length) % items.length)}
              aria-label="Previous"
              className="grid h-14 w-14 place-items-center rounded-full bg-white text-primary shadow-elevated active:scale-95 transition"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={onClose}
              className="rounded-full bg-secondary text-secondary-foreground px-5 h-12 text-sm font-bold shadow-elevated"
            >
              Close
            </button>
            <button
              onClick={() => onIndex((index + 1) % items.length)}
              aria-label="Next"
              className="grid h-14 w-14 place-items-center rounded-full bg-white text-primary shadow-elevated active:scale-95 transition"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </motion.div>

      )}
    </AnimatePresence>
  );
}
