import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface MobileGalleryCarouselProps {
  items: Array<{ image: string; text: string }>;
}

export function MobileGalleryCarousel({ items }: MobileGalleryCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-4 px-4"
        style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
      >
        {/* Hide scrollbar for all browsers */}
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {items.map((item, idx) => (
          <div
            key={idx}
            className="shrink-0 w-72 h-64 rounded-xl overflow-hidden bg-gray-200 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative h-full w-full group">
              <img
                src={item.image}
                alt={item.text}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold text-sm">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all active:scale-95"
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-5 w-5 text-gray-800" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all active:scale-95"
        aria-label="Scroll right"
      >
        <ChevronRight className="h-5 w-5 text-gray-800" />
      </button>
    </div>
  );
}
