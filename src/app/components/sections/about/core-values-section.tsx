"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const coreValues = [
  {
    title: "Christ Is The Reason",
    description: "Jesus is why we gather. His life and teaching shape how we live, love, and create.",
    bgImage: "/images/CLC01121.jpg",
  },
  {
    title: "We Choose Everyone",
    description: "We see people before differences. We stand for all — even those who don't think, speak, or act like us.",
    bgImage: "/images/CLC00761.jpg",
  },
  {
    title: "Relate & Be Relevant",
    description: "Being \"set apart\" doesn't mean being out of touch. We speak in a language people understand.",
    bgImage: "/images/CLC00493.jpg",
  },
  {
    title: "Created To Create",
    description: "We reflect our Creator through creativity. Every act of creating is our partnership with God.",
    bgImage: "/images/CLC00497.jpg",
  },
  {
    title: "Generous By Choice",
    description: "We give because we get to, not because we have to. Jesus lived a life that was always about others.",
    bgImage: "/images/CLC01156.jpg",
  },
  {
    title: "Be Transformed, Not Just Inspired",
    description: "We don't gather just to feel God, but to be changed by Him.",
    bgImage: "/images/CLC00221.jpg",
  },
  {
    title: "Connected & Relational",
    description: "We don't do religion. We do relationship — with God and with people. We listen, we move, we grow.",
    bgImage: "/images/CLC00944.jpg",
  },
];

export function CoreValuesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Drag to scroll — EXACTLY like reference
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    scrollRef.current.style.cursor = "grabbing";
    const startX = e.pageX - scrollRef.current.offsetLeft;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      const x = e.pageX - scrollRef.current!.offsetLeft;
      const walk = (x - startX) * 3; // ← same speed as reference
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

  // Wheel scroll — EXACTLY like reference
  const handleWheel = (e: React.WheelEvent) => {
    if (!scrollRef.current) return;
    const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
    if (isHorizontal) {
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaX * 3;
    }
    // Vertical → normal page scroll
  };

  // Small initial offset (kept your preference, reference uses middle but yours doesn't loop)
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 100;
    }
  }, []);

  return (
    <section id="CoreValues" className="bg-black py-24 px-8 overflow-hidden">
      <div className="max-w-8xl mx-auto">
        {/* Animated Heading — your original motion kept */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-accent uppercase tracking-[0.3em] text-sm font-serif block"
            style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
          >
            Core Values
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground mt-6 leading-none tracking-tight"
            style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
          >
            What We Stand For
          </motion.h2>
        </div>

        {/* Horizontal Scroll Container — motion & feel matches reference exactly */}
        <div
          ref={scrollRef}
          className="overflow-x-auto hide-scrollbar cursor-grab select-none"
          style={{
            scrollBehavior: "auto",
            overscrollBehaviorX: "contain", // ← prevents page jump
          }}
          onMouseDown={handleMouseDown}
          onWheel={handleWheel}
        >
          <div className="flex gap-12 py-8"> {/* gap-12 like reference */}
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="flex-shrink-0 w-[320px] sm:w-[380px] md:w-[460px] lg:w-[540px] group" // sizes adjusted to match reference
              >
                <div
                  className="relative overflow-hidden rounded-2xl bg-transparent shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:-translate-y-3"
                  style={{
                    backgroundImage: `url(${value.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Height adjusted to match reference feel */}
                  <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-9 lg:p-10">
                    <div className="space-y-5">
                      <h3
                        className="text-3xl lg:text-4xl font-black text-gray-200 leading-none"
                        style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
                      >
                        {value.title}
                      </h3>
                      <p
                        className="text-base lg:text-lg font-medium text-gray-600 uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
                      >
                        {value.description}
                      </p>
                    </div>
                  </div>

                  {/* Optional subtle top accent line (kept from your design) */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-transparent opacity-80" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}