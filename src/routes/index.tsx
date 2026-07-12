import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight, BookOpen, FlaskConical, Globe2, Heart,
  Quote, Sparkles, Star, Trophy, ChevronRight, ChevronLeft, Calendar,
} from "lucide-react";
import { useEffect, useState, lazy, Suspense, useMemo } from "react";


import { Users, GraduationCap, Award, TrendingUp } from "lucide-react";

const STAT_ICONS = [Users, GraduationCap, Award, TrendingUp];
import heroImgWebp from "../assets/campus-aerial.webp";
import heroImgAvif from "../assets/campus-aerial.avif";
import { useIsMobile } from "../hooks/use-mobile";
import principalImgWebp from "../assets/principal.webp";
import principalImgAvif from "../assets/principal.avif";
import classroomImgWebp from "../assets/classroom.webp";
import schoolEntrancWebp from "../assets/School_Entrance.webp";
import schoolEntrancAvif from "../assets/School_Entrance.avif";
import yogaClips from "../assets/events/yoga.webp";
import yogaClipsAvif from "../assets/events/yoga.webp";
import culturalImgWebp from "../assets/cultural.webp";
import culturalImgAvif from "../assets/cultural.avif";
import scienceImgWebp from "../assets/events/trip.webp";
import scienceImgAvif from "../assets/events/trip.webp";
import libraryImgWebp from "../assets/library.webp";
import libraryImgAvif from "../assets/library.avif";
import topper1 from "../assets/topper-1.webp";
import topper2 from "../assets/topper-2.webp";
import topper3 from "../assets/topper-3.webp";
import eventAnnualWebp from "../assets/events/event4.webp";
import eventAnnualAvif from "../assets/events/event4.webp";
import eventArtWebp from "../assets/event-art.webp";
import eventArtAvif from "../assets/event-art.avif";
import resultCard from "../assets/resultcard.webp";
import founderImg from "@/assets/principal.webp";
import vicePresidentImg from "@/assets/sports.webp";
import headmaster from "@/assets/teachers/HeadMaster.webp";
import schoolbannerWebp from "../assets/schoolBanner.webp";
import schoolbannerAvif from "../assets/schoolBanner.avif";
import AccadamicIncharge from "../assets/teachers/AccadamicIncharge.webp";
import krishnasai from "../assets/teachers/KrishnaSai.webp";
import studentImg from "../assets/studentFlag.webp";

import poster1 from "../assets/10th_Students/Poster1.webp";
import poster2 from "../assets/10th_Students/Poster2.webp";

import buss from "../assets/school_buss.webp";
import schoolviewWebp from "../assets/school_view.webp";
import schoolviewAvif from "../assets/school_view.avif";
import game1Webp from "../assets/game1.webp";
import game1Avif from "../assets/game1.avif";
import game2Webp from "../assets/game2.webp";
import game2Avif from "../assets/game2.avif";
import { ResponsivePicture } from "../components/ResponsivePicture";

import { Counter } from "../components/Counter";
import { Reveal } from "../components/Reveal";
import { Lightbox, type LightboxItem } from "../components/Lightbox";
import { Radar } from "../components/Radar";
import { AdmissionPopup } from "../components/AdmissionPopup";
import { ResultsPopup } from "../components/Resultspopup";
import { SSCResultsSection as SSCResults } from "../components/SSCResultsSection";

// Lazy load heavy components
const FacultyMasonryGallery = lazy(() => import("../components/FacultyMasonryGallery").then(m => ({ default: m.default })));
const CircularGallery = lazy(() => import("@/components/CircularGallery.tsx"));
const MobileGalleryCarousel = lazy(() => import("../components/MobileGalleryCarousel").then(m => ({ default: m.default })));
const SplashCursor = lazy(() => import("../components/SplashCursor"));

export const Route = createFileRoute("/")({
  head: () => ({
  meta: [
   
    {
      title:
        "Sree Vidya High School Penumur | Best School in Penumur Chittoor | Admissions Open",
    },

 
    {
      name: "description",
      content:
        "Sree Vidya High School in Penumur is one of the best and top-rated schools in Chittoor district. We provide quality education from LKG to 10th class with experienced teachers, modern facilities, and excellent results. Admissions open for 2026-27.",
    },

   
    {
      name: "keywords",
      content:
        "Sree Vidya High School, Sree Vidya High School Penumur, best school in Penumur, top school in Penumur Chittoor, SVHS Penumur",
    },

    { name: "author", content: "Sree Vidya High School" },

   
    {
      property: "og:title",
      content:
        "Sree Vidya High School Penumur | Best School in Chittoor",
    },
    {
      property: "og:description",
      content:
        "Top-rated school in Penumur offering quality education, modern facilities, and holistic development. Admissions open.",
    },
    {
      property: "og:url",
      content: "https://svhs-website.vercel.app/",
    },
    {
      property: "og:type",
      content: "website",
    },

    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Sree Vidya High School Penumur",
    },
    {
      name: "twitter:description",
      content:
        "Best school in Penumur with quality education and modern facilities.",
    },
  ],

 
  links: [
    {
      rel: "canonical",
      href: "https://svhs-website.vercel.app/",
    },
    {
      rel: "icon",
      href: "/favicon.ico",
      type: "image/x-icon",
    },
    {
      rel: "shortcut icon",
      href: "/favicon.ico",
      type: "image/x-icon",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "512x512",
      href: "/favicon.png",
    },
  ],
}),
component: HomePage,
});

const stats = [
  { value: 500, suffix: "+", label: "Active Students" },
  { value: 98, suffix: "%", label: "Board Results" },
  { value: 50, suffix: "+", label: "Expert Faculty" },
  { value: 22, suffix: "", label: "Years of Legacy" },
];

const features = [
  { icon: BookOpen, title: "Holistic Curriculum", desc: "Concept-first learning that goes far beyond textbooks, blending theory with real-world application." },
  { icon: FlaskConical, title: "Modern Labs", desc: "Fully-equipped science, robotics & computer labs that fuel curiosity and hands-on discovery." },
  { icon: Trophy, title: "Sports Academy", desc: "Cricket, athletics, basketball, swimming and yoga led by certified coaches and ex-state players." },
  { icon: Globe2, title: "Global Outlook", desc: "International exchange programmes, MUNs and Olympiads that open doors to the world." },
  { icon: Heart, title: "Value Education", desc: "Mindfulness, empathy and leadership woven into every classroom and corridor." },
  { icon: Sparkles, title: "Creative Arts", desc: "Music, theatre, dance and visual arts taught with the same rigour as academics." },
];

const galleryPreview = [
  { src: schoolviewWebp, avif: schoolviewAvif, alt: "school view" },
  { src: yogaClips, avif: yogaClipsAvif, alt: "Sports day" },
  { src: buss, avif: undefined, alt: "bus" },
  { src: culturalImgWebp, avif: culturalImgAvif, alt: "Cultural festival" },
  { src: libraryImgWebp, avif: libraryImgAvif, alt: "Reading hall" },
  { src: game1Webp, avif: game1Avif, alt: "Games" },
  { src: eventArtWebp, avif: eventArtAvif, alt: "Art exhibition" },
  { src: schoolEntrancWebp, avif: schoolEntrancAvif, alt: "school entrance" },
];

const testimonials = [
  { name: "Aarav Mehta", role: "Class 10 · Topper 2024", quote: "Teachers here don't just teach — they ignite. I walked in nervous and walked out a confident learner ready for anything." },
  { name: "Priya Sharma", role: "Parent of Aanya, Grade 6", quote: "The growth in my daughter — academically and emotionally — has been remarkable. Sree Vidya feels like a second home." },
  { name: "Rohan Krishnan", role: "Alumnus, Batch of 2019", quote: "From debate club to IIT — every step was shaped by mentors who genuinely cared. Forever grateful." },
];

const upcomingEvents = [
  { date: "Dec 18", title: "Annual Day Celebrations", img: eventAnnualWebp, avif: eventAnnualAvif, tag: "Cultural" },
  { date: "Jan 12", title: "Inter-School Sports Meet", img: yogaClips, avif: yogaClipsAvif, tag: "Sports" },
  { date: "Feb 04", title: "Science & Robotics Expo", img: scienceImgWebp, avif: scienceImgAvif, tag: "Academic" },
];

const teachers = [
  { img: principalImgWebp, avif: principalImgAvif, alt: "Dr. Ramesh Iyer", name: "Dr. Ramesh Iyer", subject: "Principal", exp: "Ph.D · 25 yrs experience" },
  { img: topper1, name: "Mrs. Anjali Verma", subject: "Mathematics", exp: "M.Sc · 15 yrs experience" },
  { img: topper2, name: "Ms. Priya Nair", subject: "English Literature", exp: "M.A · 12 yrs experience" },
  { img: topper3, name: "Mr. Karthik Rao", subject: "Physics", exp: "M.Sc · 18 yrs experience" },
  { img: principalImgWebp, avif: principalImgAvif, alt: "Mrs. Lakshmi Devi", name: "Mrs. Lakshmi Devi", subject: "Biology", exp: "M.Sc · 14 yrs experience" },
  { img: topper1, name: "Mr. Suresh Kumar", subject: "Chemistry", exp: "M.Sc · 16 yrs experience" },
  { img: topper2, name: "Ms. Neha Sharma", subject: "Computer Science", exp: "M.Tech · 10 yrs experience" },
  { img: topper3, name: "Mr. Arjun Reddy", subject: "Social Studies", exp: "M.A · 13 yrs experience" },
  { img: topper3, name: "Mr. Arjun Reddy", subject: "Social Studies", exp: "M.A · 13 yrs experience" },
  { img: topper3, name: "Mr. Arjun Reddy", subject: "Social Studies", exp: "M.A · 13 yrs experience" },
  { img: topper3, name: "Mr. Arjun Reddy", subject: "Social Studies", exp: "M.A · 13 yrs experience" },
  { img: topper3, name: "Mr. Arjun Reddy", subject: "Social Studies", exp: "M.A · 13 yrs experience" },



];

const heroSlides = [
  {
    webp: heroImgWebp,
    avif: heroImgAvif,
    badge: "Admissions Open · 2026–27",
    title: <>Welcome to <span className="bg-gold-gradient bg-clip-text text-transparent">Sree Vidya High School</span> <span className="text-xm">
  Inspiring Young Minds for a Brighter Tomorrow.
</span></>,
    sub: "Sree Vidya High School blends rigorous academics, creative arts and competitive sports in a campus designed for joyful, lifelong learning."
  },
];

function HomePage() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const [eventSlide, setEventSlide] = useState(0);
  const items: LightboxItem[] = galleryPreview.map((g) => ({ src: g.src, alt: g.alt }));

  // Memoize gallery items to avoid re-creating arrays on each render
  const galleryItems = useMemo(() => galleryPreview.map((g) => ({ image: g.src, text: g.alt })), []);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  // Auto-scroll events carousel
  useEffect(() => {
    const t = setInterval(() => setEventSlide((s) => (s + 1) % upcomingEvents.length), 5000);
    return () => clearInterval(t);
  }, []);

  const next = () => setSlide((s) => (s + 1) % heroSlides.length);
  const prev = () => setSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length);
  const current = heroSlides[slide];
  const isMobile = useIsMobile();

  const nextTestimonial = () => setTestimonialSlide((s) => (s + 1) % testimonials.length);
  const prevTestimonial = () => setTestimonialSlide((s) => (s - 1 + testimonials.length) % testimonials.length);

  const nextEvent = () => setEventSlide((s) => (s + 1) % upcomingEvents.length);
  const prevEvent = () => setEventSlide((s) => (s - 1 + upcomingEvents.length) % upcomingEvents.length);

  return (
    <>
      <Suspense fallback={null}>
        {!isMobile && <SplashCursor />}
      </Suspense>
      {/* <AdmissionPopup /> */}
      <ResultsPopup/>
      {/* School Banner — sits directly below the navbar */}
<section className="w-full bg-gradient-to-r from-[#0B1A3D] via-[#142a5c] to-[#0B1A3D] py-3 sm:py-4 mt-26">
  <div className="w-full px-0">
   <ResponsivePicture
  src={schoolbannerWebp}
  alt="Sri Vidya High School — Right choice for Bright Future, 22nd Year, Vidyanagar, Penumuru"
  sources={[
    { type: "image/avif", srcSet: schoolbannerAvif },
    { type: "image/webp", srcSet: schoolbannerWebp },
  ]}
  className="block w-full h-[110px] md:h-[160px] lg:h-[200px] object-cover"
/>
  </div>
</section>
<section className="w-full h-[220px] md:h-[320px] lg:h-[420px] object-cover py-0">
  <div className="items-center h-full">
    <Reveal delay={0.15}>
      <Radar />
    </Reveal>
  </div>
</section>

{/* STATS — dark glass strip, floats over hero bottom edge */}
<section className="relative -mt-10 sm:-mt-14 lg:-mt-20 z-20 px-4">
  <div className="mx-auto max-w-5xl">
    <div className="relative overflow-hidden rounded-[28px] bg-[#0B1A3D] px-4 py-7 shadow-[0_25px_60px_rgba(11,26,61,0.35)] sm:px-8 sm:py-8 md:px-10">
      
      {/* Decorative glow accents */}
      <div className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative grid grid-cols-2 gap-y-6 md:flex md:items-stretch md:divide-x md:divide-white/10">
        {stats.map((s, i) => {
          const icons = [Users, GraduationCap, Award, TrendingUp];
          const Icon = icons[i % icons.length];
          return (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className="group flex flex-col items-center justify-center px-3 text-center md:flex-1 md:px-6"
            >
              <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10 sm:h-12 sm:w-12">
                <Icon className="h-4 w-4 text-cyan-400 sm:h-5 sm:w-5" strokeWidth={2.25} />
              </div>

              <div className="text-2xl font-black tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>

              <div className="mt-1.5 max-w-[120px] text-[10px] font-bold uppercase tracking-widest text-white/50 transition-colors duration-300 group-hover:text-white/80 sm:max-w-none sm:text-xs">
                {s.label}
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </div>
</section>
{/* SSCResult section */}

{/* <SSCResults /> */}  {/*This is some other feature to showcase the results */}

        
{/* POSTER PRESENTATION SECTION */}
      <section className="py-10 md:py-14 bg-gradient-to-b from-muted/40 to-background">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Achievement Gallery</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Our Success Stories</h2>
            <p className="mt-4 text-muted-foreground">Celebrating excellence and achievements of our 10th class batch</p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Poster 1 */}
            <Reveal delay={0.1}>
              <div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-3xl shadow-elevated hover:shadow-glow transition-all"
              >
                <div className="relative overflow-hidden ">
                  {/* Image */}
                  <div className="relative aspect-[9/12] overflow-hidden">
                    <img
                      src={poster1}
                      alt="Achievement Poster 1"
                      loading="lazy"
                      className="h-full w-full object-cover "
                    />
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-lg font-bold">Excellence in Academics</h3>
                      <p className="text-sm text-white/80 mt-1">Celebrating our top performers</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Poster 2 */}
            <Reveal delay={0.2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group relative overflow-hidden rounded-3xl shadow-elevated hover:shadow-glow transition-all"
              >
                <div className="relative overflow-hidden bg-card rounded-3xl">
                  {/* Image */}
                  <div className="relative aspect-[9/12] overflow-hidden">
                    <img
                      src={poster2}
                      alt="Achievement Poster 2"
                      loading="lazy"
                      className="h-full w-full object-cover "
                    />
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-lg font-bold">Class of 2026</h3>
                      <p className="text-sm text-white/80 mt-1">Making us proud</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>

          {/* Stats banner below posters */}
          <Reveal delay={0.3} className="mt-12">
            <div className="rounded-3xl bg-primary-gradient p-8 md:p-10 text-primary-foreground shadow-elevated">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl md:text-5xl font-extrabold text-secondary">100%</div>
                  <p className="mt-2 text-sm font-semibold text-primary-foreground/80">Board Pass Rate</p>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-extrabold text-secondary">96%</div>
                  <p className="mt-2 text-sm font-semibold text-primary-foreground/80">Avg. Marks</p>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-extrabold text-secondary">559</div>
                  <p className="mt-2 text-sm font-semibold text-primary-foreground/80">State Top Score</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>



      {/* ABOUT */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal className="relative">
            <div className="grid grid-cols-2 gap-4">
              <ResponsivePicture
                src={schoolEntrancWebp}
                alt="Smart classroom"
                sources={[
                  { type: "image/avif", srcSet: schoolEntrancAvif },
                  { type: "image/webp", srcSet: schoolEntrancWebp },
                ]}
                loading="lazy"
                width={1280}
                height={896}
                className="rounded-2xl shadow-soft aspect-[4/5] object-cover"
              />
              <ResponsivePicture
                src={studentImg}
                alt="Library"
                
                loading="lazy"
                width={1280}
                height={896}
                className="rounded-2xl shadow-soft aspect-[4/5] object-cover mt-10"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 sm:right-8 rounded-2xl bg-primary-gradient text-primary-foreground p-5 shadow-elevated w-56">
              <div className="text-3xl font-extrabold"><Counter to={22} /></div>
              <div className="text-xs uppercase tracking-wider opacity-80">Years of Trust</div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">About the School</span>
<h4 className="mt-3 text-xl md:text-3xl font-extrabold text-balance">
  <span className=" text-primary text-10">A school that feels like a community </span>Best School in Penumur - Sree Vidya High School
</h4>            </Reveal>
            <Reveal delay={0.1}>
           
              <p>
                Since 2002, Sree Vidya High School is one of the best schools in Penumur, Chittoor.
We provide quality education from LKG to 10th class with experienced
teachers, modern facilities, and excellent academic results.
                </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {["Recognised by Govt. of A.P", "3-Acre Green Campus", "1:18 Student–Teacher Ratio", "Smart Classrooms"].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm font-medium">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-accent/15 text-accent">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.3}>
              <Link to="/admissions" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-light transition">
                Discover Admissions <ChevronRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-y bg-muted/40">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Why Sree Vidya</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-balance">Built for the learners of tomorrow.</h2>
            <p className="mt-4 text-muted-foreground">Six pillars that make every day on campus extraordinary.</p>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="group h-full rounded-2xl bg-card p-7 border border-border shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-gradient text-primary-foreground shadow-soft group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS PREVIEW */}
      <section className="section-y">
        <div className="container-x mb-8">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Latest Events</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">What's happening on campus.</h2>
          </Reveal>
        </div>

        {/* Full-width carousel */}
        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw]">
          {/* Events Carousel Strip */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${eventSlide * 100}%)` }}
            >
              {upcomingEvents.map((e, i) => (
                <div key={e.title} className="w-full flex-shrink-0 relative h-80 md:h-96">
                  <ResponsivePicture
                    src={e.img}
                    alt={e.title}
                    sources={e.avif ? [
                      { type: "image/avif", srcSet: e.avif },
                      { type: "image/webp", srcSet: e.img },
                    ] : undefined}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
                    {/* Date Badge */}
                    <div className="flex justify-between items-start">
                      <div className="rounded-xl bg-white/95 backdrop-blur px-4 py-2 text-center shadow-soft">
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{e.date.split(" ")[0]}</div>
                        <div className="text-xl font-extrabold text-primary leading-none">{e.date.split(" ")[1]}</div>
                      </div>
                      <span className="inline-block rounded-full bg-accent/90 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-white">{e.tag}</span>
                    </div>

                    {/* Title at bottom */}
                    <div className="text-white">
                      <h3 className="text-2xl md:text-3xl font-bold">{e.title}</h3>
                      <Link to="/events" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-white hover:text-accent transition-all">
                        View Details <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevEvent}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 hover:bg-white/40 transition backdrop-blur-sm"
            aria-label="Previous event"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextEvent}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 hover:bg-white/40 transition backdrop-blur-sm"
            aria-label="Next event"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6 px-4">
            {upcomingEvents.map((_, i) => (
              <button
                key={i}
                onClick={() => setEventSlide(i)}
                className={`h-2 rounded-full transition-all ${
                  i === eventSlide
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to event ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section-y bg-dark text-dark-foreground">
  <div className="container-x">
    <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
      <Reveal>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Gallery</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white">Moments that define us.</h2>
      </Reveal>
      <Link to="/gallery" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:gap-3 transition-all">
        Open full gallery <ArrowRight className="h-4 w-4" />
      </Link>
    </div>

    <Suspense fallback={<div style={{ height: "400px", background: "rgba(0,0,0,0.1)", borderRadius: "8px" }} />}>
      {isMobile ? (
        <MobileGalleryCarousel items={galleryItems} />
      ) : (
        <div style={{ height: "400px", position: "relative" }}>
          <CircularGallery
            items={galleryItems}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      )}
    </Suspense>
  </div>
</section>

      {/* PRINCIPAL MESSAGE */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 bg-gold-gradient rounded-3xl opacity-30 blur-2xl" />
              <ResponsivePicture
                src={principalImgWebp}
                alt="Principal Dr. Ramesh Iyer"
                sources={[
                  { type: "image/avif", srcSet: principalImgAvif },
                  { type: "image/webp", srcSet: principalImgWebp },
                ]}
                loading="lazy"
                width={800}
                height={1024}
                className="relative rounded-3xl shadow-elevated object-cover aspect-[4/5] w-full"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Principal's Message</span>
              <Quote className="mt-4 h-10 w-10 text-secondary" />
              <p className="mt-4 text-xl md:text-2xl font-display font-semibold leading-snug text-balance">
                "At Sree Vidya, we don't measure children by what they remember.
                We measure them by what they wonder about, what they create, and how
                kindly they treat the world around them."
              </p>
              <div className="mt-6">
                <div className="font-bold text-lg">Dr. E. Jayachandra Reddy</div>
                <div className="text-sm text-muted-foreground">Correspondent M.Sc., M.Phil, B.Ed., Ph.Din Education</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-y bg-muted/40">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Voices of Vidya</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Stories from our community.</h2>
          </Reveal>

          {/* Carousel Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Testimonials Carousel */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${testimonialSlide * 100}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div key={t.name} className="w-full flex-shrink-0 px-4">
                    <Reveal>
                      <div className="h-full rounded-2xl bg-card border border-border p-7 shadow-soft hover:shadow-elevated transition">
                        <div className="flex gap-1 text-secondary">
                          {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                        </div>
                        <p className="mt-4 text-foreground/80 leading-relaxed">"{t.quote}"</p>
                        <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                          <div className="grid h-11 w-11 place-items-center rounded-full bg-primary-gradient text-primary-foreground font-bold">
                            {t.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold text-sm">{t.name}</div>
                            <div className="text-xs text-muted-foreground">{t.role}</div>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 z-10 p-2 rounded-full hover:bg-muted transition"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 z-10 p-2 rounded-full hover:bg-muted transition"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialSlide(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === testimonialSlide
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

     {/* LEADERSHIP TEAM */}
<section className="section-y">
  <div className="container-x">
    <Reveal className="text-center max-w-2xl mx-auto mb-12">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
        Leadership
      </span>

      <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">
        Meet Our Leadership Team
      </h2>

      <p className="mt-4 text-muted-foreground">
        Dedicated leaders committed to academic excellence, discipline, and
        shaping the future of every student.
      </p>
    </Reveal>

    <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
      {[

        {
          img: krishnasai,
          name: "E. krishnasai",
          qualification: "B.E",
          role: "Admin",
          phone: "9652425469",
        },
        {
          img: principalImgWebp,
          name: "Dr.E.Jaya Chandra Reddy",
          qualification: "M.Sc., M.Phil., B.Ed., Ph.D",
          role: "Founder",
          phone: "9441595469",
        },
        
      ].map((member, i) => (
        <Reveal key={member.name} delay={i * 0.08}>
          <article className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-accent/40">
              <img
                src={member.img}
                alt={member.name}
                loading="lazy"
                width={96}
                height={96}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0">
              <div className="text-[11px] font-bold uppercase tracking-wider text-accent">
                {member.role}
              </div>
              <h3 className="mt-1 text-lg font-bold leading-tight truncate">
                {member.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {member.qualification}
              </p>
              <a
                href={`tel:+91${member.phone.replace(/\s/g, "")}`}
                className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-accent transition"
              >
                📞 {member.phone}
              </a>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="section-y">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-10 md:p-16 text-primary-foreground shadow-elevated">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-secondary/40 blur-3xl animate-blob" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-accent/40 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
            <div className="relative grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                  <Calendar className="h-3 w-3" /> Admissions Open
                </span>
                <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-balance">Begin your child's journey at Sree Vidya.</h2>
                <p className="mt-4 text-white/80 max-w-xl">Applications for 2026–27 close on March 31, 2026. Limited seats per grade.</p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end flex-wrap gap-3">
                <Link to="/admissions" className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-bold text-secondary-foreground shadow-elevated hover:shadow-glow hover:-translate-y-0.5 transition">
                  Apply Now <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition">
                  Visit Campus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div style={{ minHeight: "400px", background: "rgba(0,0,0,0.05)" }} />}>
        <FacultyMasonryGallery />
      </Suspense>

    </>
  );
}
