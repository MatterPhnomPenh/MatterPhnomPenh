"use client";
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

interface Slide {
  id: number;
  title: string;
  image: string;
}

export default function InitiativesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const slides: Slide[] = [
    { id: 1, title: "GATHERING", image: "/images/DSC05286.jpg" },
    { id: 2, title: "CAMP", image: "/images/DSC05193.jpg" },
    { id: 3, title: "FOUNDATION", image: "/images/foundation.jpg" },
    { id: 4, title: "NIGHT", image: "/images/DSC04836.jpg" },
  ];

  // ── Drag to scroll (slightly faster) ─────────────────────
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 3; // ← faster dragging
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // ── TOUCHPAD HORIZONTAL SCROLL: FAST, SMOOTH & MOMENTUM ─────
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isScrolling = false;
    let velocity = 0;
    let frameId: number;

    const handleWheel = (e: WheelEvent) => {
      // Only react to horizontal-dominant touchpad gestures
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();

        // Fast & responsive multiplier (feels native)
        const speed = 3.5;
        velocity = e.deltaX * speed;

        if (!isScrolling) {
          isScrolling = true;
          const animate = () => {
            if (Math.abs(velocity) > 0.5) {
              container.scrollLeft += velocity;
              velocity *= 0.95; // friction → smooth deceleration
              frameId = requestAnimationFrame(animate);
            } else {
              isScrolling = false;
              cancelAnimationFrame(frameId);
            }
          };
          animate();
        }
      }
      // Vertical scroll → let page handle normally (no preventDefault)
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section className="bg-black py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center mb-12">
          <h2 className="lg:text-7xl text-5xl font-bold text-white">
            Initiatives
          </h2>
        </div>

        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ scrollBehavior: "smooth" }} // keeps snap on drag release
        >
          {/* Add symmetric padding using ::before and ::after */}
          <div className="flex gap-8 py-4 px-4"> {/* ← symmetric padding */}
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="flex-shrink-0 w-[calc(100vw-6rem)] sm:w-[calc(50vw-4rem)] lg:w-[calc((100%/3.5)-2rem)]"
              >
                <div className="relative h-[450px] rounded-lg overflow-hidden shadow-sm bg-gray-100 group">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 28vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority={slide.id <= 3}
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white text-center px-4">
                      {slide.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}