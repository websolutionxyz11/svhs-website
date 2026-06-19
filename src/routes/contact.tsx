import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import campusAerial from "../assets/campus-aerial.jpg";

const WHATSAPP_NUMBER = "919876543210";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Sree Vidya High School" },
      { name: "description", content: "Get in touch with Sree Vidya High School. Address, phone, email, map and quick enquiry form." },
      { property: "og:title", content: "Contact — Sree Vidya High School" },
      { property: "og:description", content: "Visit us, call or send us a message." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const subject = String(data.get("subject") || "General enquiry");
    const message = String(data.get("message") || "");
    const text =
      `*New Enquiry — Sree Vidya High School*%0A%0A` +
      `*Name:* ${encodeURIComponent(name)}%0A` +
      `*Email:* ${encodeURIComponent(email)}%0A` +
      `*Phone:* ${encodeURIComponent(phone)}%0A` +
      `*Subject:* ${encodeURIComponent(subject)}%0A%0A` +
      `${encodeURIComponent(message)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 4500);
  };

  return (
    <>
      <PageHero
        bgImage={campusAerial}
        eyebrow="Get in touch"
        title={<>We'd love to <span className="text-secondary">hear from you.</span></>}
        subtitle="Questions about admissions, a campus tour, or just curious? Drop us a line."
      />


      <section className="section-y">
        <div className="container-x grid lg:grid-cols-5 gap-6 md:gap-10">
          {/* Info */}
          <Reveal className="lg:col-span-2 space-y-4">
            {[
              { icon: MapPin, t: "Visit", v: "10-73, nearby NTR Colony, Penumuru, Penumur, Andhra Pradesh 517126" },
              { icon: Phone, t: "Call", v: "+91 98765 43210 · +91 40 4012 3456" },
              { icon: Mail, t: "Email", v: "hello@sreevidya.edu.in" },
              { icon: Clock, t: "Hours", v: "Mon – Sat · 8:30 AM – 4:30 PM" },
            ].map((c) => (
              <div key={c.t} className="flex gap-3 sm:gap-4 rounded-2xl bg-card border border-border p-4 sm:p-5 shadow-soft hover:shadow-elevated transition">
                <div className="grid h-10 w-10 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-xl bg-primary-gradient text-primary-foreground">
                  <c.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">{c.t}</div>
                  <div className="mt-1 text-sm sm:text-base font-semibold break-words">{c.v}</div>
                </div>
              </div>
            ))}
            <div className="rounded-2xl bg-dark text-dark-foreground p-5 sm:p-6 shadow-soft">
              <div className="text-xs uppercase tracking-wider text-white/60">Follow us</div>
              <div className="mt-3 flex gap-3">
                {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                  <a key={i} href="#" aria-label="Social" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-secondary hover:text-secondary-foreground transition">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <form onSubmit={onSubmit} className="relative rounded-3xl bg-card border border-border shadow-elevated p-5 sm:p-7 md:p-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-primary">Send us a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">Your enquiry will open in WhatsApp for instant delivery.</p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field label="Full name" name="name" placeholder="Aanya Sharma" required />
                <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
                <Field label="Phone" name="phone" type="tel" placeholder="+91 98765 43210" />
                <Field label="Subject" name="subject" placeholder="Admission enquiry" />
              </div>

              <div className="mt-4">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us a bit about your child and what you'd like to know…"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition"
                />
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white shadow-soft hover:shadow-elevated hover:-translate-y-0.5 transition"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.55 4.15 1.6 5.96L2 22l4.25-1.11a9.93 9.93 0 0 0 5.79 1.84h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.88 9.88 0 0 0 12.04 2z"/></svg>
                Send via WhatsApp
              </button>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 flex items-start gap-2 rounded-xl bg-accent/15 text-accent px-4 py-3 text-sm font-semibold"
                >
                  <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" /> Opening WhatsApp with your message…
                </motion.div>
              )}
            </form>
          </Reveal>
        </div>
      </section>


      <section className="pb-20">
        <div className="container-x">
          <Reveal>
            <div className="rounded-3xl overflow-hidden shadow-elevated aspect-[16/9] bg-muted border border-border">
              <iframe
                title="Sree Vidya campus map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6712.181488636178!2d79.18795416090748!3d13.36621824528602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb2a77fce821097%3A0x110e18b5796eb877!2sSri%20Vidya%20School%20Play%20Ground%2C%20Penumur!5e1!3m2!1sen!2sin!4v1781836458596!5m2!1sen!2sin"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
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
