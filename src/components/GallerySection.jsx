import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal"; // adjust path to your existing Reveal component
import CircularGallery from "@/components/CircularGallery/CircularGallery"; // adjust path to where you place the component

// galleryPreview items should look like: { src: "/img/1.jpg", alt: "Some caption" }
export default function GallerySection({ galleryPreview }) {
  return (
    <section className="section-y bg-dark text-dark-foreground">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Gallery
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white">
              Moments that define us.
            </h2>
          </Reveal>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:gap-3 transition-all"
          >
            Open full gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div style={{ height: "400px", position: "relative" }}>
          <CircularGallery
            items={galleryPreview.map((g) => ({ image: g.src, text: g.alt }))}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </div>
    </section>
  );
}
