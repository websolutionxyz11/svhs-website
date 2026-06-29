import { Link } from "@tanstack/react-router";
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import logo from "../assets/logo.png";
export function Footer() {
  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-xl  text-secondary-foreground">
              {/* <GraduationCap className="h-5 w-5" /> */}
              <img src={logo} alt="logo" className="h-8 w-8"/>

            </div>
            <div>
              <div className="font-display font-extrabold text-lg">Sree Vidya</div>
              <div className="text-[11px] tracking-[0.18em] uppercase text-white/60">High School</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Nurturing curious minds and compassionate hearts since 1998. Building tomorrow's
            leaders through holistic, value-based education.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/5 hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {[
              { to: "/", label: "Home" },
              { to: "/admissions", label: "Admissions" },
              { to: "/events", label: "Events" },
              { to: "/achievements", label: "Achievements" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-secondary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Programmes</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>Primary (Grades 1–5)</li>
            <li>Middle School (6–8)</li>
            <li>High School (9–10)</li>
            <li>Sports Academy</li>
            <li>Co-curricular Clubs</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-secondary shrink-0" />10-88 vidya nagar colony, pakala road, penumur, Chittoor, Andhra pradesh - 517126</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-secondary shrink-0" /> +91 9441595469, 9652425469</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-secondary shrink-0" /> hello@sreevidya.edu.in</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Sree Vidya High School. All rights reserved.</p>
          <p>Crafted with care for curious learners.</p>
        </div>
      </div>
    </footer>
  );
}
