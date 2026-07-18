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

// Events folder images
import culturalsWebp from "../assets/events/Culturals.webp";
import event1Webp from "../assets/events/event1.webp";
import event2Webp from "../assets/events/event2.webp";
import event3Webp from "../assets/events/event3.webp";
import event4Webp from "../assets/events/event4.webp";
import flagImgWebp from "../assets/events/flag-img.webp";
import sciencedayWebp from "../assets/events/scienceday.webp";
import scienceday2Webp from "../assets/events/scienceday2.webp";
import scienceday3Webp from "../assets/events/scienceday3.webp";
import singingeventWebp from "../assets/events/singingevent.webp";
import studentachivmentWebp from "../assets/events/student-achivment.webp";
import studyHoursWebp from "../assets/events/studyHours.webp";
import tripWebp from "../assets/events/trip.webp";
import yogaghWebp from "../assets/events/yoga-gh.webp";
import yogaWebp from "../assets/events/yoga.webp";
import yogaAtSchoolWebp from "../assets/events/yogaAtSchool.webp";
import yogameetWebp from "../assets/events/yogameet.webp";
import YogaPenumurWebp from "../assets/events/YogaPenumur.webp";





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
  
  // Events
  { src: culturalsWebp, alt: "Cultural program" },
  { src: event1Webp, alt: "School event 1" },
  { src: event2Webp, alt: "School event 2" },
  { src: event3Webp, alt: "School event 3" },
  { src: event4Webp, alt: "School event 4" },
  { src: flagImgWebp, alt: "Flag ceremony" },
  { src: sciencedayWebp, alt: "Science day celebration" },
  { src: scienceday2Webp, alt: "Science day event 2" },
  { src: scienceday3Webp, alt: "Science day event 3" },
  { src: singingeventWebp, alt: "Singing event" },
  { src: studentachivmentWebp, alt: "Student achievement" },
  { src: studyHoursWebp, alt: "Study hours" },
  { src: tripWebp, alt: "School trip" },
  { src: yogaghWebp, alt: "Yoga session" },
  { src: yogaWebp, alt: "Yoga practice" },
  { src: yogaAtSchoolWebp, alt: "Yoga at school" },
  { src: yogameetWebp, alt: "Yoga meet" },
  { src: YogaPenumurWebp, alt: "Yoga Penumur" },
  

  
  
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

          <div className="relative w-full overflow-hidden bg-black/20 shadow-2xl">
            <div className="hidden md:block h-[70vh] min-h-[420px]">
              <DomeGallery
                images={domeImages}
                grayscale={false}
                fit={0.48}
                minRadius={500}
                maxRadius={760}
              />
            </div>

            <div className="space-y-4 p-3 md:hidden">
              {domeImages.map((image) => (
                <div key={image.alt} className="overflow-hidden rounded-[2rem] border border-white/10 bg-black">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="block h-auto w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
