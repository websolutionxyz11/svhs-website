import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Lightbox, type LightboxItem } from "../components/Lightbox";

import campusAerial from "../assets/campus-aerial.jpg";
import classroomImg from "../assets/classroom.jpg";
import scienceImg from "../assets/science-lab.jpg";
import libraryImg from "../assets/library.jpg";
import sportsImg from "../assets/sports.jpg";
import culturalImg from "../assets/cultural.jpg";
import eventAnnual from "../assets/event-annual.jpg";
import eventArt from "../assets/event-art.jpg";
import heroImg from "../assets/hero-campus.webp";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Sree Vidya High School" },
      { name: "description", content: "Explore campus moments — classrooms, events, sports and cultural performances at Sree Vidya High School." },
      { property: "og:title", content: "Gallery — Sree Vidya High School" },
      { property: "og:description", content: "Photos and videos from across the campus." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

type Cat = "All" | "Campus" | "Events" | "Sports" | "Cultural";

const items: (LightboxItem & { cat: Exclude<Cat, "All">; tall?: boolean })[] = [
  { src: heroImg, alt: "Front facade", cat: "Campus", tall: true },
  { src: classroomImg, alt: "Smart classroom", cat: "Campus" },
  { src: scienceImg, alt: "Science lab in action", cat: "Campus" },
  { src: libraryImg, alt: "Library reading hall", cat: "Campus" },
  { src: campusAerial, alt: "Aerial campus view", cat: "Campus", tall: true },
  { src: sportsImg, alt: "Sports day finals", cat: "Sports" },
  { src: culturalImg, alt: "Cultural dance", cat: "Cultural", tall: true },
  { src: eventAnnual, alt: "Annual day stage", cat: "Events" },
  { src: eventArt, alt: "Art exhibition", cat: "Cultural" },
];

function GalleryPage() {
  const [filter, setFilter] = useState<Cat>("All");
  const [lbIndex, setLbIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? items : items.filter((i) => i.cat === filter)),
    [filter]
  );

  return (
    <>
      {/* FULL-WIDTH BACKGROUND CAMPUS VIDEO */}
      <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden bg-dark">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://assets.mixkit.co/videos/4429/4429-720.mp4"
          poster={campusAerial}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        <div className="relative z-10 h-full container-x flex flex-col items-center justify-center text-center text-white">
          <span className="rounded-full bg-secondary/20 border border-secondary/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            Campus Film
          </span>
          <h2 className="mt-5 text-4xl md:text-6xl font-extrabold drop-shadow-2xl text-balance max-w-3xl">
            Step inside <span className="text-secondary">Sree Vidya.</span>
          </h2>
          <p className="mt-4 max-w-xl text-white/80">
            An immersive look at our 8-acre campus, classrooms, labs and student life — in motion.
          </p>
        </div>
      </section>

      <section className="section-y bg-dark text-dark-foreground">
        <div className="container-x">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {(["All", "Campus", "Events", "Sports", "Cultural"] as Cat[]).map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition ${
                  filter === c ? "bg-secondary text-secondary-foreground shadow-glow" : "bg-white/5 text-white/70 hover:text-white border border-white/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Masonry grid — simple smooth fade */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
            >
              {filtered.map((it) => (
                <button
                  key={it.alt}
                  onClick={() => setLbIndex(filtered.indexOf(it))}
                  className="group relative block w-full overflow-hidden rounded-2xl break-inside-avoid shadow-soft hover:shadow-glow transition"
                >
                  <img
                    src={it.src}
                    alt={it.alt}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${it.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 group-hover:opacity-100 transition" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">{it.cat}</div>
                    <p className="mt-1 text-sm font-bold text-white">{it.alt}</p>
                  </div>
                </button>
              ))}
            </motion.div>
          </AnimatePresence>

          <Lightbox items={filtered} index={lbIndex} onClose={() => setLbIndex(null)} onIndex={setLbIndex} />
        </div>
      </section>
    </>
  );
}
