import { createFileRoute } from "@tanstack/react-router";
import DomeGallery from "../components/DomeGallery";

import campusAerialWebp from "../assets/campus-aerial.webp";
import classroomImgWebp from "../assets/classroom.webp";
import scienceImgWebp from "../assets/science-lab.webp";
import libraryImgWebp from "../assets/library.webp";
import sportsImgWebp from "../assets/sports.webp";
import culturalImgWebp from "../assets/cultural.webp";
import eventAnnualWebp from "../assets/event-annual.webp";
import eventArtWebp from "../assets/event-art.webp";
import heroImgWebp from "../assets/hero-campus.webp";

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

const domeImages = [
  { src: heroImgWebp, alt: "Front facade" },
  { src: classroomImgWebp, alt: "Smart classroom" },
  { src: scienceImgWebp, alt: "Science lab in action" },
  { src: libraryImgWebp, alt: "Library reading hall" },
  { src: campusAerialWebp, alt: "Aerial campus view" },
  { src: sportsImgWebp, alt: "Sports day finals" },
  { src: culturalImgWebp, alt: "Cultural dance" },
  { src: eventAnnualWebp, alt: "Annual day stage" },
  { src: eventArtWebp, alt: "Art exhibition" },
];

function GalleryPage() {
  return (
    <>
      <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden bg-dark">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://www.pexels.com/download/video/12724037/"
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
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
              Immersive Gallery
            </p>
            <h3 className="mt-2 text-3xl font-bold text-white">Explore campus memories in motion</h3>
            <p className="mx-auto mt-3 max-w-2xl text-white/70">
              Drag the dome to rotate through school moments, then tap any tile to open it in full color.
            </p>
          </div>

          <div className="relative w-full h-[70vh] min-h-[420px] overflow-hidden  bg-black/20 shadow-2xl">
  <DomeGallery
    images={domeImages}
    grayscale={false}
    fit={0.48}
    minRadius={500}
    maxRadius={760}
  />
</div>
        </div>
      </section>
    </>
  );
}
