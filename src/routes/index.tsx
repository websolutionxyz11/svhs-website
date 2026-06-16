import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight, BookOpen, FlaskConical, Globe2, Heart,
  Quote, Sparkles, Star, Trophy, ChevronRight, ChevronLeft, Calendar,
} from "lucide-react";
import { useEffect, useState } from "react";

import heroImg from "../assets/hero-campus.jpg";
import principalImg from "../assets/principal.jpg";
import classroomImg from "../assets/classroom.jpg";
import sportsImg from "../assets/sports.jpg";
import culturalImg from "../assets/cultural.jpg";
import scienceImg from "../assets/science-lab.jpg";
import libraryImg from "../assets/library.jpg";
import topper1 from "../assets/topper-1.jpg";
import topper2 from "../assets/topper-2.jpg";
import topper3 from "../assets/topper-3.jpg";
import eventAnnual from "../assets/event-annual.jpg";
import eventArt from "../assets/event-art.jpg";
import resultCard from "../assets/resultcard.jpeg";

import { Counter } from "../components/Counter";
import { Reveal } from "../components/Reveal";
import { Lightbox, type LightboxItem } from "../components/Lightbox";
import { AdmissionPopup } from "../components/AdmissionPopup";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sree Vidya High School — Nurturing Minds, Shaping Futures" },
      { name: "description", content: "A premium K-10 school in Hyderabad blending academic excellence, sports, arts, and values. Admissions for 2026–27 are open." },
      { property: "og:title", content: "Sree Vidya High School" },
      { property: "og:description", content: "Premium K-10 school in Hyderabad. Admissions Open 2026–27." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const stats = [
  { value: 2400, suffix: "+", label: "Active Students" },
  { value: 98, suffix: "%", label: "Board Results" },
  { value: 140, suffix: "+", label: "Expert Faculty" },
  { value: 27, suffix: "", label: "Years of Legacy" },
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
  { src: classroomImg, alt: "Collaborative classroom" },
  { src: scienceImg, alt: "Science lab" },
  { src: sportsImg, alt: "Sports day" },
  { src: culturalImg, alt: "Cultural festival" },
  { src: libraryImg, alt: "Reading hall" },
  { src: eventArt, alt: "Art exhibition" },
];

const testimonials = [
  { name: "Aarav Mehta", role: "Class 10 · Topper 2024", quote: "Teachers here don't just teach — they ignite. I walked in nervous and walked out a confident learner ready for anything." },
  { name: "Priya Sharma", role: "Parent of Aanya, Grade 6", quote: "The growth in my daughter — academically and emotionally — has been remarkable. Sree Vidya feels like a second home." },
  { name: "Rohan Krishnan", role: "Alumnus, Batch of 2019", quote: "From debate club to IIT — every step was shaped by mentors who genuinely cared. Forever grateful." },
];

const upcomingEvents = [
  { date: "Dec 18", title: "Annual Day Celebrations", img: eventAnnual, tag: "Cultural" },
  { date: "Jan 12", title: "Inter-School Sports Meet", img: sportsImg, tag: "Sports" },
  { date: "Feb 04", title: "Science & Robotics Expo", img: scienceImg, tag: "Academic" },
];

const teachers = [
  { img: principalImg, name: "Dr. Ramesh Iyer", subject: "Principal", exp: "Ph.D · 25 yrs experience" },
  { img: topper1, name: "Mrs. Anjali Verma", subject: "Mathematics", exp: "M.Sc · 15 yrs experience" },
  { img: topper2, name: "Ms. Priya Nair", subject: "English Literature", exp: "M.A · 12 yrs experience" },
  { img: topper3, name: "Mr. Karthik Rao", subject: "Physics", exp: "M.Sc · 18 yrs experience" },
  { img: principalImg, name: "Mrs. Lakshmi Devi", subject: "Biology", exp: "M.Sc · 14 yrs experience" },
  { img: topper1, name: "Mr. Suresh Kumar", subject: "Chemistry", exp: "M.Sc · 16 yrs experience" },
  { img: topper2, name: "Ms. Neha Sharma", subject: "Computer Science", exp: "M.Tech · 10 yrs experience" },
  { img: topper3, name: "Mr. Arjun Reddy", subject: "Social Studies", exp: "M.A · 13 yrs experience" },
];

const heroSlides = [
 
  {
    img: heroImg,
    badge: "Admissions Open · 2026–27",
    title: <>Where curious minds <span className="bg-gold-gradient bg-clip-text text-transparent">become tomorrow's</span> changemakers.</>,
    sub: "Sree Vidya High School blends rigorous academics, creative arts and competitive sports in a campus designed for joyful, lifelong learning."
  },
  {
    img: classroomImg,
    badge: "Holistic Learning",
    title: <>Shaping students through <span className="bg-gold-gradient bg-clip-text text-transparent">all-round development.</span></>,
    sub: "We focus on academics, discipline, creativity, and values to build confident and responsible individuals."
  },
  {
    img: sportsImg,
    badge: "Sports Academy",
    title: <>Champions are built on <span className="bg-gold-gradient bg-clip-text text-transparent">our fields</span> and courts.</>,
    sub: "From cricket to athletics, our certified coaches nurture state and national level champions."
  },
  {
    img: scienceImg,
    badge: "STEM & Robotics",
    title: <>Modern labs where <span className="bg-gold-gradient bg-clip-text text-transparent">ideas come alive.</span></>,
    sub: "Hands-on science, robotics and computer labs that prepare students for the world of tomorrow."
  },
  {
    img: resultCard,
    badge: "",
    title: <> <span className="bg-gold-gradient bg-clip-text text-transparent"></span></>,
    sub: ""
  }

];

function HomePage() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);
  const items: LightboxItem[] = galleryPreview.map((g) => ({ src: g.src, alt: g.alt }));

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const next = () => setSlide((s) => (s + 1) % heroSlides.length);
  const prev = () => setSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length);
  const current = heroSlides[slide];

  return (
    <>
      <AdmissionPopup />

      {/* HERO — FULL IMAGE CAROUSEL */}
      <section className="relative overflow-hidden h-[100svh] min-h-[400px] max-h-[500px] mt-15">
        {/* Full-bleed background image carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={current.img}
              alt={current.badge}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay for text readability */}
       {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-primary/20" /> */}
        {/* Content */}
        <div className="container-x relative h-full flex items-center text-primary-foreground pt-24 pb-20">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                  <Star className="h-3 w-3 fill-secondary" /> {current.badge}
                </span>
                <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.05] text-balance drop-shadow-lg">
                  {current.title}
                </h1>
                <p className="mt-6 max-w-2xl text-base md:text-lg text-white/90 drop-shadow">
                  {current.sub}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex flex-wrap gap-3">
              {/* <Link to="/admissions" className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-bold text-secondary-foreground shadow-elevated hover:shadow-glow hover:-translate-y-0.5 transition-all">
                Apply for 2026–27 <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition">
                Explore Campus
              </Link> */}
            </div>

            {/* Slide dots */}
            {/* <div className="mt-10 flex items-center gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${i === slide ? "w-12 bg-secondary" : "w-5 bg-white/30 hover:bg-white/60"}`}
                />
              ))}
            </div> */}
          </div>
        </div>

        {/* Carousel arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/15 backdrop-blur border border-white/30 text-white hover:bg-white/30 hover:scale-110 transition-all shadow-elevated"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/15 backdrop-blur border border-white/30 text-white hover:bg-white/30 hover:scale-110 transition-all shadow-elevated"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </section>


      {/* STATS */}
      <section className="relative -mt-12 md:mt-10 z-10">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 rounded-3xl bg-card shadow-elevated p-6 md:p-10 border border-border">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="text-center">
                <div className="text-3xl md:text-5xl font-extrabold text-primary">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs md:text-sm uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src={classroomImg} alt="Smart classroom" loading="lazy" width={1280} height={896} className="rounded-2xl shadow-soft aspect-[4/5] object-cover" />
              <img src={libraryImg} alt="Library" loading="lazy" width={1280} height={896} className="rounded-2xl shadow-soft aspect-[4/5] object-cover mt-10" />
            </div>
            <div className="absolute -bottom-6 -right-2 sm:right-8 rounded-2xl bg-primary-gradient text-primary-foreground p-5 shadow-elevated w-56">
              <div className="text-3xl font-extrabold"><Counter to={27} /></div>
              <div className="text-xs uppercase tracking-wider opacity-80">Years of Trust</div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">About the School</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-balance">A school that feels like a community.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Since 1998, Sree Vidya High School has been a launchpad for young minds in Hyderabad.
                Our 8-acre green campus, low student–teacher ratio and integrated arts-sports-academic
                philosophy nurture confident, kind and capable learners.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {["CBSE Affiliated", "8-Acre Green Campus", "1:18 Student–Teacher Ratio", "Smart Classrooms"].map((p) => (
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
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Latest Events</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">What's happening on campus.</h2>
            </Reveal>
            <Link to="/events" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
              View all events <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08}>
                <article className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-soft hover:shadow-elevated transition-all">
                  <div className="aspect-[5/3] overflow-hidden">
                    <img src={e.img} alt={e.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="absolute top-4 left-4 rounded-xl bg-white/95 backdrop-blur px-3 py-2 text-center shadow-soft">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{e.date.split(" ")[0]}</div>
                    <div className="text-lg font-extrabold text-primary leading-none">{e.date.split(" ")[1]}</div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent">{e.tag}</span>
                    <h3 className="mt-3 text-lg font-bold">{e.title}</h3>
                    <Link to="/events" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                      Details <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section-y bg-dark text-dark-foreground">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Gallery</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white">Moments that define us.</h2>
            </Reveal>
            <Link to="/gallery" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:gap-3 transition-all">
              Open full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryPreview.map((g, i) => (
              <Reveal key={g.alt} delay={i * 0.05}>
                <button
                  onClick={() => setLightbox(i)}
                  className={`relative block w-full overflow-hidden rounded-2xl group ${i === 0 ? "md:row-span-2 md:col-span-1" : ""}`}
                >
                  <img src={g.src} alt={g.alt} loading="lazy" className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${i === 0 ? "h-full aspect-square md:aspect-[3/5]" : "aspect-square"}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition" />
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <p className="text-xs text-white/80 uppercase tracking-wider">Click to view</p>
                    <p className="text-sm font-bold text-white">{g.alt}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
        <Lightbox items={items} index={lightbox} onClose={() => setLightbox(null)} onIndex={setLightbox} />
      </section>

      {/* PRINCIPAL MESSAGE */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 bg-gold-gradient rounded-3xl opacity-30 blur-2xl" />
              <img src={principalImg} alt="Principal Dr. Ramesh Iyer" loading="lazy" width={800} height={1024} className="relative rounded-3xl shadow-elevated object-cover aspect-[4/5] w-full" />
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
                <div className="font-bold text-lg">Dr. Ramesh Iyer</div>
                <div className="text-sm text-muted-foreground">Principal · M.Ed, Ph.D in Education</div>
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
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
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
            ))}
          </div>
        </div>
      </section>

      {/* TOPPERS / ACHIEVEMENTS PREVIEW */}
      <section className="section-y">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Achievements</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Meet our class of stars.</h2>
            <p className="mt-4 text-muted-foreground">Stories of grit, growth and grades that speak for themselves.</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: topper1, name: "Aarav Mehta", score: "98.6%", subj: "All India CBSE Rank 27" },
              { img: topper2, name: "Sara Iqbal", score: "97.8%", subj: "State Topper · Sciences" },
              { img: topper3, name: "Vikram Rao", score: "Gold", subj: "National Robotics Championship" },
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <article className="group relative overflow-hidden rounded-3xl bg-dark text-dark-foreground shadow-soft hover:shadow-elevated transition-all">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={t.img} alt={t.name} loading="lazy" width={600} height={800} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-xs uppercase tracking-[0.2em] text-secondary font-bold">{t.subj}</div>
                    <div className="mt-1 text-2xl font-extrabold">{t.name}</div>
                    <div className="mt-1 text-3xl font-extrabold bg-gold-gradient bg-clip-text text-transparent">{t.score}</div>
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

      {/* TEACHERS - horizontal scroll */}
      <section className="section-y bg-muted/40 overflow-hidden">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Our Faculty</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Meet our brilliant teachers.</h2>
            <p className="mt-4 text-muted-foreground">Mentors who shape minds and inspire lifelong learners.</p>
          </Reveal>
        </div>
        <div className="relative group">
          <div className="flex gap-6 animate-h-scroll group-hover:[animation-play-state:paused] w-max px-6">
            {[...teachers, ...teachers].map((t, i) => (
              <article key={i} className="w-64 shrink-0 rounded-2xl bg-card border border-border shadow-soft overflow-hidden hover:shadow-elevated hover:-translate-y-1 transition">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={t.img} alt={t.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="text-xs uppercase tracking-wider text-accent font-bold">{t.subject}</div>
                  <h3 className="mt-1 font-bold text-lg">{t.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{t.exp}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
