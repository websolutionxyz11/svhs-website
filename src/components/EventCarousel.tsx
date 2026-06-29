'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface CarouselSlide {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category?: string;
}

interface EventCarouselProps {
  slides: CarouselSlide[];
  autoPlayInterval?: number;
  onSlideChange?: (index: number) => void;
}

export function EventCarousel({ slides, autoPlayInterval = 4000, onSlideChange }: EventCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play effect
  useEffect(() => {
    if (!isHovering && slides.length > 1) {
      autoPlayTimerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, autoPlayInterval);
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isHovering, slides.length, autoPlayInterval]);

  // Notify parent of slide change
  useEffect(() => {
    onSlideChange?.(currentIndex);
  }, [currentIndex, onSlideChange]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index % slides.length);
  }, [slides.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set([...prev, index]));
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  // Touch/swipe support
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
  };

  if (!slides.length) return null;

  const currentSlide = slides[currentIndex];
  const nextIndex = (currentIndex + 1) % slides.length;

  return (
    <div
      className="relative w-full bg-black overflow-hidden rounded-2xl shadow-elevated"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main carousel container */}
      <div className="relative aspect-video md:aspect-[16/9] lg:aspect-[21/9] overflow-hidden">
        {/* Current slide */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={currentSlide.src}
              alt={currentSlide.alt}
              loading="lazy"
              decoding="async"
              width={1280}
              height={720}
              onLoad={() => handleImageLoad(currentIndex)}
              className="w-full h-full object-cover"
            />
            {/* Optional dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Caption overlay (bottom-left) */}
        {currentSlide.caption && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {currentSlide.category && (
              <div className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">
                {currentSlide.category}
              </div>
            )}
            <h3 className="text-xl md:text-3xl font-bold">{currentSlide.caption}</h3>
          </motion.div>
        )}

        {/* Left arrow */}
        <motion.button
          onClick={goToPrev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 mx-auto" />
        </motion.button>

        {/* Right arrow */}
        <motion.button
          onClick={goToNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6 mx-auto" />
        </motion.button>

        {/* Slide counter (top-right) */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white text-xs md:text-sm font-semibold">
          {currentIndex + 1} / {slides.length}
        </div>
      </div>

      {/* Dot indicators (bottom center) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white h-2.5 w-2.5 md:h-3 md:w-3'
                : 'bg-white/40 h-2 w-2 md:h-2.5 md:w-2.5 hover:bg-white/60'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile-friendly touch indicator (on first load) */}
      {slides.length > 1 && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white/40 text-xs pointer-events-none">
          Swipe or click arrows
        </div>
      )}
    </div>
  );
}
