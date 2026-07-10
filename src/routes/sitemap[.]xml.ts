import { createFileRoute } from "@tanstack/react-router";

const BASE_URL = "https://svhs-website.vercel.app";

const entries = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/admissions", priority: "0.9", changefreq: "monthly" },
  { path: "/events", priority: "0.8", changefreq: "weekly" },
  { path: "/achievements", priority: "0.8", changefreq: "monthly" },
  { path: "/gallery", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.7", changefreq: "yearly" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries
          .map(
            (e) => `
  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
          )
          .join("");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});