
"use client";
import { useRef, useEffect } from 'react';
import Image from 'next/image';

interface Slide {
  id: number;
  title: string;
  image: string;
  subtitle: string;
}

export default function InitiativesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const slides: Slide[] = [
    { id: 1, title: "GATHERING", image: "/images/DSC05286.jpg", subtitle: "Happens every Sunday at 4pm" },
    { id: 2, title: "CAMP", image: "/images/DSC05193.jpg", subtitle: "Once a year, we intentionally create a space" },
    { id: 3, title: "FOUNDATION", image: "/images/foundation.jpg", subtitle: "Once a year, we go to the province to serve the people" },
    { id: 4, title: "NIGHT", image: "/images/DSC04836.jpg", subtitle: "Learn and explore in faith is rooted in the Bible" },
  ];

  // Drag to scroll — super fast & smooth
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    scrollRef.current.style.cursor = "grabbing";
    const startX = e.pageX - scrollRef.current.offsetLeft;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      const x = e.pageX - scrollRef.current!.offsetLeft;
      const walk = (x - startX) * 3; // ← your favorite speed
      scrollRef.current!.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      scrollRef.current!.style.cursor = "grab";
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Wheel scroll — FAST, no page jump
  const handleWheel = (e: React.WheelEvent) => {
    if (!scrollRef.current) return;
    const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);

    if (isHorizontal) {
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaX * 3;
    }
    // Vertical scroll → let page scroll normally
  };

  // Start in the middle for infinite effect
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 3;
    }
  }, []);

  return (
    <section className="bg-black py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            Initiatives
          </h2>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="overflow-x-auto hide-scrollbar cursor-grab select-none"
          style={{
            scrollBehavior: "auto",
            overscrollBehaviorX: "contain",   // ← PREVENTS PAGE JUMP
          }}
          onMouseDown={handleMouseDown}
          onWheel={handleWheel}

        >
          <div className="flex gap-12 py-8">
            {slides.map((slide, idx) => (
              <div
                key={`${slide.id}-${idx}`}
                className="flex-shrink-0 w-[320px] sm:w-[380px] md:w-[460px] lg:w-[540px] group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-transparent shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:-translate-y-3">
                  {/* Image */}
                  <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      sizes="(max-width: 640px) 320px, (max-width: 768px) 380px, (max-width: 1024px) 460px, 540px"
                      className="object-cover transition-transform duration-700 "
                      priority={idx < 8}
                      quality={92}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 md:p-9 lg:p-10 bg-transparent space-y-5">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <h3 className="text-3xl lg:text-4xl font-black text-gray-200 leading-none">
                          {slide.title}
                        </h3>
                        {/* <p className="text-xl lg:text-xl font-bold text-gray-700 mt-3">
                          {slide.subtitle}
                        </p> */}
                      </div>
                    </div>
                    <p className="text-base lg:text-lg font-medium text-gray-600 uppercase tracking-wider">
                      Matter Phnom Penh • You Matter Here
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}


