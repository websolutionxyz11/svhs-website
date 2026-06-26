import { Link } from "@tanstack/react-router";

export function SocialDock() {
  return (
    <aside
      aria-label="Admissions"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40"
    >
      <Link
        to="/admissions#apply-form"
        aria-label="Admissions Open — apply now"
        title="Admissions Open"
        className="relative flex flex-col items-center justify-center gap-0.5 rounded-l-2xl bg-green-600 px-2.5 py-4 sm:px-3 sm:py-5 text-white shadow-elevated border border-white/20 animate-admissions-blink hover:px-3.5 hover:sm:px-4 transition-[padding] duration-300"
      >
        {/* Pulsing glow ring behind the button, anchored to the screen edge */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-l-2xl bg-green-500 blur-md animate-admissions-glow -z-10"
        />

        <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider leading-tight text-center [writing-mode:vertical-rl] rotate-180">
          Admissions Open
        </span>
      </Link>

      <style>{`
        @keyframes admissions-blink {
          0%, 100% { background-color: rgb(22 163 74); } /* green-600 */
          50% { background-color: rgb(74 222 128); }     /* green-400, brighter */
        }
        @keyframes admissions-glow {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        .animate-admissions-blink {
          animation: admissions-blink 1.4s ease-in-out infinite;
        }
        .animate-admissions-glow {
          animation: admissions-glow 1.4s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-admissions-blink,
          .animate-admissions-glow {
            animation: none;
          }
        }
      `}</style>
    </aside>
  );
}