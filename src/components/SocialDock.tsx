import { Instagram, Youtube, Facebook, MessageCircle } from "lucide-react";

const links = [
  { href: "https://youtube.com", label: "YouTube", Icon: Youtube, color: "bg-red-600" },
  { href: "https://instagram.com", label: "Instagram", Icon: Instagram, color: "bg-gradient-to-br from-pink-500 via-fuchsia-500 to-yellow-400" },
  { href: "https://twitter.com", label: "X (Twitter)", Icon: XIcon, color: "bg-black" },
  { href: "https://wa.me/919876543210", label: "WhatsApp", Icon: MessageCircle, color: "bg-green-500" },
  { href: "https://facebook.com", label: "Facebook", Icon: Facebook, color: "bg-blue-600" },
];

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2H21l-6.52 7.45L22 22h-6.79l-4.74-6.2L4.8 22H2.04l6.98-7.98L2 2h6.92l4.28 5.66L18.244 2Zm-1.19 18h1.88L7.05 4H5.07l11.984 16Z" />
    </svg>
  );
}

export function SocialDock() {
  return (
    <aside
      aria-label="Social media"
      className="fixed left-1.5 sm:left-3 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-1.5 sm:gap-2 rounded-2xl bg-white/90 backdrop-blur p-1.5 sm:p-2 shadow-elevated border border-border"
    >
      {links.map(({ href, label, Icon, color }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className={`group grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-lg sm:rounded-xl text-white transition-all duration-300 hover:scale-110 hover:shadow-glow ${color}`}
        >
          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
        </a>
      ))}
    </aside>
  );
}
