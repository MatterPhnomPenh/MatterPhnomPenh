// app/components/slideshow.tsx
"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    title: "CHRIST IS THE REASON",
    href: "/christ-the-reason",
    backgroundColor: "bg-blue-900",
    textColor: "text-white"
  },
  {
    id: 2,
    title: "WE CHOOSE",
    href: "/we-choose",
    backgroundColor: "bg-green-800",
    textColor: "text-white"
  },
  {
    id: 3,
    title: "EVERYONE. RELATE & BE RELEVANT.",
    href: "/everyone",
    backgroundColor: "bg-purple-900",
    textColor: "text-white"
  },
  {
    id: 4,
    title: "CREATED TO CREATE",
    href: "/created-to-create",
    backgroundColor: "bg-orange-800",
    textColor: "text-white"
  },
  {
    id: 5,
    title: "GENEROUS BY CHOICE",
    href: "/generous",
    backgroundColor: "bg-red-800",
    textColor: "text-white"
  },
  {
    id: 6,
    title: "BE TRANSFORMED, NOT JUST INSPIRED",
    href: "/transformed",
    backgroundColor: "bg-indigo-900",
    textColor: "text-white"
  },
  {
    id: 7,
    title: "CONNECTED & RELATIONAL",
    href: "/connected",
    backgroundColor: "bg-teal-800",
    textColor: "text-white"
  }
];

const AUTOPLAY_INTERVAL = 4000; // 4 seconds

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  // Auto-play logic
  useEffect(() => {
    if (isPaused || isHovering) return;

    const interval = setInterval(nextSlide, AUTOPLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [isPaused, isHovering, nextSlide]);

  const currentSlideData = SLIDES[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Main Slideshow */}
      <div
        className="relative w-full h-full"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlideData.id}
            className={`w-full h-full flex items-center justify-center ${currentSlideData.backgroundColor} ${currentSlideData.textColor}`}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Link 
              href={currentSlideData.href}
              className="text-center px-8 cursor-pointer"
            >
              <motion.h2
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {currentSlideData.title}
              </motion.h2>
              <motion.p
                className="mt-6 text-lg md:text-xl opacity-90"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Click to learn more
              </motion.p>
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={togglePause}
          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg transition-all duration-200 backdrop-blur-sm"
          aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
        >
          {isPaused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        {!isPaused && !isHovering && (
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-white/80"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: "linear" }}
            key={currentSlide}
          />
        )}
      </div>

      {/* Slide Previews */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex space-x-4 overflow-x-auto max-w-full px-4 py-2">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
              index === currentSlide 
                ? 'ring-2 ring-white scale-110' 
                : 'opacity-70 hover:opacity-100 hover:scale-105'
            }`}
          >
            <div 
              className={`w-full h-full ${slide.backgroundColor} flex items-center justify-center`}
            >
              <span className="text-white text-xs font-bold px-1 text-center">
                {slide.title.split(' ')[0]}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// Link component for navigation
function Link({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}