import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, Send, ChevronDown, Download, ArrowRight, Calendar, GraduationCap,
  ClipboardEdit, UploadCloud, Users, Award,
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import campusAerial from "../assets/campus-aerial.webp";



import student_2620106310 from "../assets/10th_Students/2620106310.webp";
import student_2620106314 from "../assets/10th_Students/2620106314.webp";
import student_2620106320 from "../assets/10th_Students/2620106320.webp";


export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions 2026–27 | Sree Vidya High School" },
      { name: "description", content: "Apply for K-10 admissions at Sree Vidya High School for the 2026–27 academic year. Eligibility, fees, documents and FAQs." },
      { property: "og:title", content: "Admissions 2026–27 — Sree Vidya High School" },
      { property: "og:description", content: "Limited seats. Apply early for the 2026–27 academic year." },
      { property: "og:url", content: "/admissions" },
    ],
    links: [
      { rel: "canonical", href: "/admissions" },
      { rel: "preload", href: campusAerial, as: "image" },
    ],
  }),
  component: AdmissionsPage,
});

const eligibility = [
  { grade: "Pre-Primary", age: "3 – 5 years", req: "Age proof, parent interaction" },
  { grade: "Primary (1–5)", age: "6 – 10 years", req: "Previous report card, age proof" },
  { grade: "Middle (6–8)", age: "11 – 13 years", req: "Report card, written assessment" },
  { grade: "High (9–10)", age: "14 – 15 years", req: "Previous results, entrance test" },
];

const steps = [
  { icon: ClipboardEdit, title: "Fill the Form", desc: "Complete the online application with student & guardian details." },
  { icon: UploadCloud, title: "Submit Documents", desc: "Upload age proof, previous report card and photographs." },
  { icon: Users, title: "Interaction / Test", desc: "Friendly grade-appropriate interaction with our counsellors." },
  { icon: Award, title: "Confirmation", desc: "Receive offer letter and pay fees to confirm your seat." },
];


const docs = [
  "Birth certificate (original + copy)",
  "Previous school report card",
  "Transfer Certificate (TC)",
  "Aadhaar card (student & parents)",
  "4 passport-size photographs",
  "Address proof",
  "Caste / category certificate (if applicable)",
  "Medical record / vaccination card",
];

const faqs = [
  { q: "When do admissions for 2026–27 open?", a: "Applications are open from November 2025 and close on March 31, 2026. Early applicants get priority interaction slots." },
  { q: "Is there an entrance test?", a: "Grades 1–5 have a friendly interaction. Grades 6–10 have a grade-appropriate written assessment in English, Math and General Knowledge." },
  { q: "Can mid-year admissions be considered?", a: "Yes, subject to seat availability. Please write to admissions@sreevidya.edu.in for current vacancies." },
  { q: "Do you offer scholarships?", a: "We offer merit-based and need-based scholarships covering 25–100% of tuition. Apply via the scholarship form on the portal." },
  { q: "Is transport available?", a: "Yes, GPS-enabled buses serve 30+ routes across Hyderabad with trained attendants and live tracking for parents." },
  { q: "What languages are offered?", a: "English (primary), Hindi, Telugu and an optional third language — Sanskrit, French or German — from Grade 6." },
];

// Admissions desk WhatsApp number — country code + number, no "+", no spaces, no dashes
const ADMISSIONS_WHATSAPP_NUMBER = "9441595469";

function AdmissionsPage() {
  const [open, setOpen] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  const handleApply = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);

    const student = String(fd.get("student") ?? "").trim();
    const parent = String(fd.get("parent") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const studentClass = String(fd.get("class") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    // Build a clean, readable WhatsApp message using WhatsApp's own
    // formatting syntax (*bold*, _italic_) so it's easy to scan on the
    // admissions team's phone.
    const lines = [
      "*New Admission Inquiry — Sree Vidya High School*",
      "",
      `*Student Name:* ${student}`,
      `*Parent/Guardian:* ${parent}`,
      `*Phone Number:* ${phone}`,
      `*Class Applying For:* ${studentClass}`,
    ];

    if (message) {
      lines.push("", "*Message:*", message);
    }

    lines.push("", "_Submitted via website admissions form_");

    const whatsappText = encodeURIComponent(lines.join("\n"));
    const whatsappUrl = `https://wa.me/${ADMISSIONS_WHATSAPP_NUMBER}?text=${whatsappText}`;

    // Opens WhatsApp (app on mobile, WhatsApp Web on desktop) with the
    // message pre-filled. The parent/staff member taps Send to deliver it —
    // no backend, no Business API approval needed.
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <>
      <PageHero
        bgImage={campusAerial}
        eyebrow="Admissions 2026–27"
        title={<>Begin your child's journey at <span className="text-secondary">Sree Vidya</span>.</>}
        subtitle="A simple, transparent 4-step admission process. We're here to help you every step of the way."
      />

      {/* HIGHLIGHTED ADMISSIONS OPEN BANNER */}
      <section className="relative -mt-12 z-10">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gold-gradient p-6 md:p-8 shadow-elevated">
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
              <div className="relative grid md:grid-cols-[auto_1fr_auto] items-center gap-5">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white/95 text-primary shadow-soft">
                  <Calendar className="h-8 w-8" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-secondary-foreground/80">Admissions Open</div>
                  <h2 className="mt-1 text-2xl md:text-3xl font-extrabold text-secondary-foreground">
                    Apply for Academic Year 2026–27
                  </h2>
                  <p className="mt-1 text-sm text-secondary-foreground/80">
                    Open from <strong>Nov 1, 2025</strong> · Closes <strong>March 31, 2026</strong>
                  </p>
                </div>
                <a href="#apply-form" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-elevated hover:-translate-y-0.5 transition">
                  Apply Now <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>


      {/* Overview */}
      <section className="py-10 md:py-14">
        <div className="container-x grid lg:grid-cols-3 gap-10">
          <Reveal className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-balance">Admission Overview</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Sree Vidya admits students for Pre-Primary through Grade 10. Our admissions philosophy
              is to look beyond marks — for curiosity, character and creative potential. We work
              closely with families to ensure the right fit for each child.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Seats are limited and offered on a first-come, first-evaluated basis. Apply early to
              secure your preferred interaction slot.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-primary-gradient p-8 text-primary-foreground shadow-elevated">
              <GraduationCap className="h-10 w-10 text-secondary" />
              <h3 className="mt-4 text-xl font-bold">Key Dates</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex justify-between border-b border-white/15 pb-2"><span>Applications Open</span><span className="font-bold">Nov 1, 2025</span></li>
                <li className="flex justify-between border-b border-white/15 pb-2"><span>Last Date</span><span className="font-bold">Mar 31, 2026</span></li>
                <li className="flex justify-between border-b border-white/15 pb-2"><span>Interactions</span><span className="font-bold">Dec – Mar</span></li>
                <li className="flex justify-between"><span>Session Begins</span><span className="font-bold">Jun 10, 2026</span></li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-10 md:py-14 bg-muted/40">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Eligibility</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Class-wise requirements</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {eligibility.map((e, i) => (
              <Reveal key={e.grade} delay={i * 0.06}>
                <div className="h-full rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition">
                  <div className="text-xs uppercase tracking-wider text-accent font-bold">{e.grade}</div>
                  <div className="mt-2 text-2xl font-extrabold text-primary">{e.age}</div>
                  <p className="mt-3 text-sm text-muted-foreground">{e.req}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS BANNER — Domination Continues */}
      <section className="py-10 md:py-14">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a1f6b] via-[#0d3aa6] to-[#0a1f6b] p-6 md:p-10 shadow-elevated">
              <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "22px 22px" }} />
              <div className="relative text-center">
                <span className="inline-block rounded-md bg-red-600 px-6 py-2 text-white text-lg md:text-2xl font-extrabold tracking-wide shadow-lg">
                  Domination Continues
                </span>
                <h3 className="mt-4 text-2xl md:text-4xl font-extrabold text-white">
                  Sree Vidya <span className="text-yellow-400">Rules</span> 10<sup>th</sup> Class <span className="text-yellow-400">Top</span> Marks in 2026
                </h3>
              </div>

              <div className="relative mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
                {[
                  { score: 559, of: 600, img: student_2620106310, name: "G. Vekanth Reddy", ht: "2620106310", tag: "AP STATE TOP MARK" },
                  { score: 552, of: 500, img: student_2620106314, name: "G. Lakshmi Prasad", ht: "2620106314", tag: "2nd Topper" },
                  { score: 557, of: 600, img: student_2620106320, name: "K. Pream Kumar", ht: "2620106320", tag: "3rd Topper" },
                ].map((t, i) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    className="relative rounded-2xl bg-[#0a1a55] border border-white/10 p-5 text-center shadow-lg"
                  >
                    <div className="text-6xl md:text-7xl font-extrabold text-yellow-400 leading-none drop-shadow">{t.score}</div>
                    <div className="mx-auto mt-1 h-px w-16 bg-white/60" />
                    <div className="text-white text-lg font-bold mt-1">{t.of}</div>
                    <div className="mt-4 flex items-center justify-center gap-3">
                      <img src={t.img} alt={t.name} loading="lazy" width={56} height={56} className="h-14 w-14 rounded-full object-cover border-2 border-yellow-400" />
                      <div className="rounded-md bg-orange-500 px-3 py-1.5 text-[11px] md:text-xs font-extrabold text-white tracking-wider">
                        {t.tag}
                      </div>
                    </div>
                    <div className="mt-3 text-sm font-bold text-white">{t.name}</div>
                    <div className="text-[11px] text-white/70">HT.No: {t.ht}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process timeline — animated flow */}
      <section className="py-10 md:py-14">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Admission Process</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Four simple steps</h2>
          </Reveal>
          <div className="relative">
            {/* Animated connecting line (desktop) */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-1 rounded-full bg-muted overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
                className="h-full bg-white-100"
              />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.3 + i * 0.25, duration: 0.5 }}
                  className="relative text-center"
                >
                  <div className="relative mx-auto grid h-24 w-24 place-items-center rounded-3xl bg-primary-gradient text-primary-foreground shadow-elevated">
                    <motion.span
                      aria-hidden
                      className="absolute inset-0 rounded-3xl bg-primary/30"
                      animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.4 }}
                    />
                    <s.icon className="relative h-10 w-10" />
                    <div className="absolute -top-2 -right-2 grid h-8 w-8 place-items-center rounded-full bg-gold-gradient text-secondary-foreground text-sm font-extrabold shadow-soft">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="mt-5 font-bold text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="py-10 md:py-14 bg-muted/40">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Fee Structure</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Transparent annual fees</h2>
            <p className="mt-4 text-muted-foreground">All amounts in INR. Sibling and merit scholarships available.</p>
          </Reveal>
          <Reveal>
            <div className="mx-auto max-w-2xl rounded-3xl bg-card border border-border p-8 md:p-10 text-center shadow-elevated">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-primary-gradient text-primary-foreground shadow-soft">
                <Download className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl md:text-2xl font-extrabold">Complete Fee Structure 2026–27</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Grade-wise admission fees, tuition, transport and optional add-ons — in a single downloadable PDF.
              </p>
              <a
                href="/fee-structure.pdf"
                download
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-elevated hover:-translate-y-0.5 transition"
              >
                <Download className="h-4 w-4" /> Download Fee Structure (PDF)
              </a>
              <p className="mt-3 text-xs text-muted-foreground">
                Need a printed copy? <Link to="/contact" className="text-primary font-semibold underline-offset-2 hover:underline">Contact admissions</Link>.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Documents */}
      <section className="py-10 md:py-14">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Documents</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">What to bring along</h2>
            <p className="mt-4 text-muted-foreground">A simple checklist to keep handy when you visit our admissions desk.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-light transition">
              Talk to Admissions <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid sm:grid-cols-2 gap-3">
              {docs.map((d) => (
                <li key={d} className="flex items-start gap-3 rounded-xl bg-card border border-border p-4 shadow-soft">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm">{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 md:py-14 bg-muted/40">
        <div className="container-x max-w-3xl">
          <Reveal className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">FAQ</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Frequently asked questions</h2>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 0.04}>
                  <div className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-semibold text-base md:text-lg">{f.q}</span>
                      <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-180 text-primary" : "text-muted-foreground"}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <p className="px-6 pb-5 text-muted-foreground leading-relaxed">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPLY NOW FORM */}
      <section id="apply-form" className="py-10 md:py-14 bg-muted/40 scroll-mt-24">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Apply Now</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">Start your application</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Fill the short form — it opens WhatsApp with your details ready to send to our
              admissions desk. Our team will reach out within 48 hours to schedule your visit
              and interaction.
            </p>
            <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:border-primary transition">
              <Download className="h-4 w-4" /> Download Prospectus
            </a>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form onSubmit={handleApply} className="rounded-3xl bg-card border border-border p-7 md:p-10 shadow-elevated">
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField label="Student Name" name="student" placeholder="XXXX" required />
                <FormField label="Parent Name" name="parent" placeholder="Mr/Mrs XXXX" required />
                <FormField label="Phone Number" name="phone" type="tel" placeholder="+91 XXXXX" required />
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Class Applying For <span className="text-destructive">*</span>
                  </label>
                  <select required name="class" className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition">
                    <option value="">Select grade</option>
                    <option>Pre-Primary</option>
                    <option>Grade 1</option><option>Grade 2</option><option>Grade 3</option>
                    <option>Grade 4</option><option>Grade 5</option><option>Grade 6</option>
                    <option>Grade 7</option><option>Grade 8</option><option>Grade 9</option>
                    <option>Grade 10</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea name="message" rows={4} placeholder="Anything you'd like us to know…" className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition" />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-bold text-secondary-foreground shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition"
              >
                <Send className="h-4 w-4" /> Send via WhatsApp
              </button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 flex items-start gap-3 rounded-xl bg-accent/15 text-accent px-4 py-3 text-sm font-semibold"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <span>WhatsApp opened with your details — just tap Send to reach our admissions team!</span>
                </motion.div>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function FormField({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}{required && <span className="text-destructive"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition"
      />
    </div>
  );
}