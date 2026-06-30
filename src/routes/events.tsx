import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ChevronDown, ChevronUp, Flag, MapPin, Play } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { Lightbox, type LightboxItem } from "../components/Lightbox";
import { EventCarousel, type CarouselSlide } from "../components/EventCarousel";

import sportsImg from "../assets/sports.webp";
import culturalImg from "../assets/cultural.webp";
import scienceImg from "../assets/science-lab.webp";
import eventAnnual from "../assets/eventImg.webp";
import eventImg from "../assets/eventImg.webp";
import eventArt from "../assets/event-art.webp";

import event1Img from "../assets/events/event1.webp";
import event2Img from "../assets/events/event2.webp";
import event3Img from "../assets/events/event3.webp";
import event4Img from "../assets/events/event4.webp";

import sciencedayImg from "../assets/events/scienceday.webp";
import scienceday2Img from "../assets/events/scienceday2.webp";
import scienceday3Img from "../assets/events/scienceday3.webp";
import singingeventImg from "../assets/events/singingevent.webp";
import studyHoursImg from "../assets/events/studyHours.webp";
import tripImg from "../assets/events/trip.webp";
import yogaGhImg from "../assets/events/yoga-gh.webp";
import yogaImg from "../assets/events/yoga.webp";
import yogaAtSchoolImg from "../assets/events/yogaAtSchool.webp";
import yogameetImg from "../assets/events/yogameet.webp";
import yogaPenumurImg from "../assets/events/YogaPenumur.webp";
import studentAchivement from "../assets/events/student-achivment.webp";
import CulturalImg from "../assets/events/Culturals.webp";
import FlagImage from "../assets/events/flag-img.webp";


import libraryImg from "../assets/library.webp";
import classroomImg from "../assets/classroom.webp";
import campusAerial from "../assets/campus-aerial.webp"

const WHATSAPP_GROUP = "https://chat.whatsapp.com/invite-link-placeholder";


export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Activities | Sree Vidya High School" },
      { name: "description", content: "Upcoming and past events at Sree Vidya — sports meets, cultural festivals, academic competitions and more." },
      { property: "og:title", content: "Events — Sree Vidya High School" },
      { property: "og:description", content: "Highlights from sports, cultural and academic events on campus." },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

type Cat = "All" | "Sports" | "Cultural" | "Academic";

const upcoming = [
  { date: "Month  of March", title: "Annual Day Celebrations", img: eventAnnual, cat: "Cultural", place: "Open Auditorium" },
  { date: "Month of January ", title: "Inter-School Sports Meet", img: sportsImg, cat: "Sports", place: "School Ground" },
  { date: "Month of February", title: "Science & Robotics Expo", img: scienceImg, cat: "Academic", place: "STEM Block" },
  { date: "Month of November", title: "Inter-House Art Festival", img: eventArt, cat: "Cultural", place: "Art Studio" },
] as const;

const past = [
 
  {
    date: "Jan 2025",
    title: "Annual Day Celebration",
    img: event1Img,
    cat: "Cultural",
  },
 
  {
    date: "August 29",
    title: "Telugu Bhasha Dinotsavam",
    img: event3Img,
    cat: "Academic",
  },
  {
    date: "Apr 2025",
    title: "Ugadi Celebration",
    img: event4Img,
    cat: "Cultural",
  },
  {
    date: "Jun 2025",
    title: "Team Connect",
    img: event2Img,
    cat: "Cultural",
  },
  {
    date: "Jul 2025",
    title: "Van Mahotsav Tree Plantation",
    img: campusAerial,
    cat: "Environmental",
  },
  {
    date: "Aug 2025",
    title: "Independence Day Celebrations",
    img: sportsImg,
    cat: "National",
  },
  {
    date: "Sep 2025",
    title: "Teachers' Day Celebration",
    img: libraryImg,
    cat: "School Event",
  },
  
  {
    date: "Nov 2025",
    title: "Children's Day Celebrations",
    img: scienceImg,
    cat: "School Event",
  },
  {
  date: "Jan 2025",
  title: "National Science Day Celebration",
  img: sciencedayImg,
  cat: "Academic",
},
 {
  date: "Jan 2026",
  title: "Certification",
  img: studentAchivement,
  cat: "Academic",
},
{
  date: "Feb 2025",
  title: "Science Experiment Workshop",
  img: scienceday2Img,
  cat: "Academic",
},
{
  date: "Mar 2025",
  title: "Science Exhibition",
  img: scienceday3Img,
  cat: "Academic",
},
{
  date: "Apr 2025",
  title: "Singing Competition",
  img: singingeventImg,
  cat: "Cultural",
},
{
  date: "May 2025",
  title: "Focused Study Hours",
  img: studyHoursImg,
  cat: "Academic",
},
{
  date: "Jun 2025",
  title: "Educational Trip",
  img: tripImg,
  cat: "Academic",
},
{
  date: "Jun 2025",
  title: "International Yoga Day",
  img: yogaGhImg,
  cat: "Health",
},
{
  date: "Jul 2025",
  title: "Morning Yoga Session",
  img: yogaImg,
  cat: "Health",
},
{
  date: "Aug 2025",
  title: "meditation at School",
  img: yogaAtSchoolImg,
  cat: "Sports",
},
{
  date: "jan 2026",
  title: "Culturals",
  img: CulturalImg,
  cat: "Cultural",
},
{
  date: "Sep 2025",
  title: "Inter-School Yoga Meet",
  img: yogameetImg,
  cat: "Sports",
},
{
  date: "Oct 2025",
  title: "Penumur Yoga Championship",
  img: yogaPenumurImg,
  cat: "Sports",
},

] as const;

const videos: LightboxItem[] = [
  { src: eventAnnual, alt: "Annual Day 2024 Highlights", type: "video", videoUrl: "https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?rel=0" },
  { src: sportsImg, alt: "Sports Meet Recap", type: "video", videoUrl: "https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?rel=0" },
  { src: culturalImg, alt: "Cultural Fest Showcase", type: "video", videoUrl: "https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?rel=0" },
  { src: scienceImg, alt: "Science Expo Tour", type: "video", videoUrl: "https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?rel=0" },
];

const carouselSlides: CarouselSlide[] = [
  { id: "1", src: event1Img, alt: "Annual Day Celebrations", caption: "Annual Day 2025", category: "Cultural" },
  { id: "2", src: yogaPenumurImg, alt: "Penumur Yoga Championship", caption: "Penumur Yoga Championship", category: "Sports" },
  { id: "3", src: studyHoursImg, alt: "School Study Hours", caption: "School Study Hours", category: "Academic" },
  { id: "4", src: event2Img, alt: "Cultural Festival", caption: "Cultural Showcase", category: "Cultural" },
  { id: "5", src: eventArt, alt: "Inter-House Art Festival", caption: "Artistic Excellence", category: "Cultural" },
  { id: "6", src: campusAerial, alt: "Campus Aerial View", caption: "Our Beautiful Campus", category: "Campus" },
];

function EventsPage() {
  const [filter, setFilter] = useState<Cat>("All");
  const [showAll, setShowAll] = useState(false);
  const [videoIdx, setVideoIdx] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  const filteredPast = useMemo(
    () => (filter === "All" ? past : past.filter((p) => p.cat === filter)),
    [filter]
  );

  const visiblePast = useMemo(
    () => (showAll ? filteredPast : filteredPast.slice(0, 6)),
    [filteredPast, showAll]
  );

  const showToggle = filteredPast.length > 6;

  const handleFilterChange = (category: Cat) => {
    setFilter(category);
    setShowAll(false);
  };

  const handleToggle = () => {
    if (showAll) {
      galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setShowAll((prev) => !prev);
  };

  return (
    <>
      <PageHero
        bgImage={eventImg}
        eyebrow="Events & Activities"
        title={<>A campus that never <span className="text-secondary">stops celebrating.</span></>}
        subtitle="From sports meets to science expos, there's always something happening at Sree Vidya."
      />

      {/* Upcoming */}
      <section className="section-y">
        <div className="container-x">
          <Reveal className="mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Upcoming</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">What's coming up</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {upcoming.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.06}>
                <article className="group h-full overflow-hidden rounded-2xl bg-card border border-border shadow-soft hover:shadow-elevated transition-all">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={e.img} alt={e.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-3 left-3 rounded-lg bg-white/95 backdrop-blur px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-soft">
                      {e.cat}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-base">{e.title}</h3>
                    <div className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5 text-accent" /> {e.date}</div>
                      <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-accent" /> {e.place}</div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

         {/* Event Carousel - Past Events Highlights */}
      <section className="section-y bg-gradient-to-b from-muted/20 to-background">
        <div className="container-x">
          <Reveal className="mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Gallery Highlights</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Moments in motion</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl">Relive the best moments from our past events. Swipe or click to explore more.</p>
          </Reveal>
          <EventCarousel slides={carouselSlides} autoPlayInterval={5000} />
        </div>
      </section>

      {/* Timeline */}
      <section className="section-y bg-blue-100">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Event Timeline</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">A year in motion</h2>
          </Reveal>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" />
            {upcoming.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.1}>
                <div className={`relative mb-8 md:mb-12 grid md:grid-cols-2 gap-6 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pl-12 md:text-left" : "md:pr-12 md:text-right"}`}>
                    <div className="inline-block rounded-full bg-secondary/15 text-secondary-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider">{e.cat}</div>
                    <h3 className="mt-2 text-xl font-bold">{e.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{e.date} · {e.place}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 grid h-8 w-8 place-items-center rounded-full bg-primary-gradient text-primary-foreground shadow-soft ring-4 ring-background">
                    <Calendar className="h-4 w-4" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Past with filters */}
      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Past Events</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Moments from the year</h2>
            </Reveal>
            <div className="flex flex-wrap gap-2">
              {(["All", "Sports", "Cultural", "Academic"] as Cat[]).map((c) => (
                <button
                  key={c}
                  onClick={() => handleFilterChange(c)}
                  className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                    filter === c ? "bg-primary text-primary-foreground shadow-soft" : "bg-card border border-border hover:border-primary text-foreground/70"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div ref={galleryRef}>
            <motion.div
              layout
              className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
            >
              {visiblePast.map((p, i) => (
                <motion.article
                  key={p.title}
                  layout
                  initial={{ opacity: 0, y: 30, rotate: -2 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.04, type: 'spring', stiffness: 300 }}
                  className="break-inside-avoid group relative shadow-lg hover:shadow-2xl transition-shadow duration-500"
                  style={{ transform: `rotate(${i % 2 === 0 ? 1 : -1}deg)` }}
                >
                  <div className="relative overflow-hidden bg-black/5">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ aspectRatio: '1/0.5' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <div className="text-xs uppercase tracking-wider text-secondary font-bold">
                        {p.cat} · {p.date}
                      </div>
                      <h3 className="mt-1 text-lg font-bold leading-tight">{p.title}</h3>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
            {showToggle && (
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={handleToggle}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-elevated focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  {showAll ? "Show Less" : "View More"}
                  {showAll ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Event Carousel - Past Events Highlights */}
  

      {/* Videos */}
     <section className="relative h-screen overflow-hidden">
  <img
  src={FlagImage}
  alt="Sree Vidya High School Event"
  className="absolute inset-0 w-full h-full object-cover"
/>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content */}
  <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
    <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
      Event Videos
    </span>

    <h2 className="mt-4 text-4xl md:text-6xl font-extrabold text-white">
     Visit Our YouTube Channel. Feel the campus.
    </h2>

    <p className="mt-4 max-w-2xl text-lg text-white/80">
Explore the vibrant moments, celebrations, achievements, and unforgettable memories of Sree Vidya High School. Watch our latest event videos on YouTube.    </p>
  </div>
</section>

      {/* CTA */}
      <section className="section-y">
        <div className="container-x">
          <div className="rounded-3xl bg-primary-gradient p-10 md:p-14 text-primary-foreground shadow-elevated text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Join us at the next event</h2>
            <p className="mt-3 text-white/80">Get instant updates — join our official WhatsApp community.</p>
            <a
              href={WHATSAPP_GROUP}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white shadow-elevated hover:shadow-glow hover:-translate-y-0.5 transition"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.55 4.15 1.6 5.96L2 22l4.25-1.11a9.93 9.93 0 0 0 5.79 1.84h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.88 9.88 0 0 0 12.04 2zm5.83 14.04c-.25.7-1.43 1.33-1.99 1.41-.51.07-1.15.1-1.85-.12-.43-.13-.97-.31-1.67-.61-2.95-1.27-4.88-4.25-5.03-4.44-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.79-.37.2 0 .39 0 .57.01.18.01.42-.07.66.5.25.6.84 2.06.92 2.21.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.18-.31.4-.45.54-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.36 1.46.3.15.47.13.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.25.66-.15.27.1 1.72.81 2.01.96.3.15.5.22.57.35.07.13.07.75-.18 1.45z"/></svg>
              Join WhatsApp Group
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
