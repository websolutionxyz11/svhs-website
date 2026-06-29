import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import logo from "../assets/logo.webp";
import { useIsMobile } from "../hooks/use-mobile";

const links = [
  { to: "/", label: "Home" },
  { to: "/admissions", label: "Admissions" },
  { to: "/events", label: "Events" },
  { to: "/achievements", label: "Achievements" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-white/95 ${isMobile ? "" : "backdrop-blur-lg"} border-b border-border ${
        scrolled && !isMobile ? "shadow-soft" : ""
      }`}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0 group">
          <div className="grid h-10 w-10 place-items-center rounded-xl  text-primary-foreground shadow-soft ">
            {/* <GraduationCap className="h-5 w-5" /> */}
            <img src={logo} alt="school logo" width={40} height={40} fetchPriority="high" loading="eager" className="h-10 w-10" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-extrabold text-primary text-base md:text-lg">
              Sree Vidya
            </div>
            <div className="text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
              High School
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  active ? "text-primary" : "text-foreground/70 hover:text-primary"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-secondary" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
         
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-lg border border-border bg-background"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
          <nav className="container-x py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-3 py-3 rounded-lg text-sm font-medium text-foreground/80 hover:bg-muted hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/admissions"
              className="mt-2 inline-flex justify-center rounded-full bg-gold-gradient px-5 py-3 text-sm font-semibold text-secondary-foreground"
            >
              Apply Now
            </Link>
          </nav>
        </div>
      )}

      {/* Marquee */}
      <div className="bg-primary text-primary-foreground overflow-hidden border-t border-white/10">
        <div className="flex whitespace-nowrap animate-marquee py-2 text-xs md:text-sm font-semibold tracking-wide">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="mx-8 inline-flex items-center gap-3">
              <span className="text-secondary">★</span>
              Admissions Open 2026–27 — Apply Now
              <span className="text-secondary">★</span>
              Limited Seats Per Grade
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
