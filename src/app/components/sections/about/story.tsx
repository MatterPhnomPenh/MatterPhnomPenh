
// File: components/Stories.tsx (Aggressive fix: Earlier exit start, deeper Y-push, + Layer3 opacity fade for zero-visibility guarantee)
// Adjusted Layer3 opacity fade to start later (at 90% progress) to avoid transparency while still visible during upward slide
"use client";
import { useScroll, useTransform, useSpring, easeOut, easeInOut } from "framer-motion";
import { useRef, forwardRef } from "react";
import Layer1 from "./ourstory/layer1";
import Layer2 from "./ourstory/layer2";
import Layer3 from "./ourstory/layer3";


interface Card {
  id: number;
  number: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface CustomHidden {
  initial: { rotate?: number; x?: number; y?: number };
}

interface CustomVisible {
  target: { rotate?: number; x?: number; y?: number };
  duration: number;
  delay?: number;
}

const Stories = forwardRef<HTMLElement>(({}, ref) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({ 
    target: scrollRef,
    offset: ["start end", "end end"] 
  });
  
  // Enhanced spring config (unchanged, still smooth)
  const springConfig = {
    stiffness: 80,
    damping: 25,
    mass: 1,
    restDelta: 0.001,
    restSpeed: 0.001
  };

  // Layer3 Y: Super-aggressive - enters 10%, dwells to 70%, exits hard over last 30% (starts earlier for quicker clear)
  const topSectionYRaw = useTransform(
    scrollYProgress, 
    [0, 0.1, 0.7, 1],
    [window.innerHeight, 0, 0, -1.5 * window.innerHeight]  // Use numbers instead of strings for MotionValue<number>
  );
  const topSectionY = useSpring(topSectionYRaw, springConfig);

  // FIXED: Layer3 opacity fade-out starts later (at 90% progress) - stays opaque during dwell and most of exit slide, fades only when already off-screen (~ -100vh Y)
  // This prevents seeing Layer3 become transparent while it's still partially visible during the upward movement
  const layer3OpacityRaw = useTransform(
    scrollYProgress,
    [0.1, 0.9, 1],
    [1, 1, 0]  // Stays fully opaque until 90%, then quick fade to 0 over last 10%
  );
  const layer3Opacity = useSpring(layer3OpacityRaw, springConfig);

  // Layer2 fade: Adjusted to sync (in at 10%, out at 70%)
  const layer2OpacityRaw = useTransform(
    scrollYProgress,
    [0.1, 0.7],
    [1, 0],
    { ease: easeInOut }
  );
  const layer2Opacity = useSpring(layer2OpacityRaw, springConfig);

  const cards: Card[] = [
    {
      id: 1,
      number: "01",
      title: "EXECUTIVE SEARCH",
      icon: null,
      description: "Helping clients identify experienced operators who can level them up.",
    },
    {
      id: 2,
      number: "02",
      title: "NEXT-GEN SEARCH",
      icon: null,
      description: "Identifying emerging leaders and builders for startups & scale-ups.",
    },
    {
      id: 3,
      number: "03",
      title: "COACHING",
      icon: null,
      description: "Proven advisors and mentors who can accelerate early stage startup growth.",
    },
    {
      id: 4,
      number: "04",
      title: "TALENT STRATEGY CONSULTING",
      icon: null,
      description: "Working with client leaders to shape and align strategy to their unique culture.",
    },
  ];

  const cardRotates = [-5, 1, -3, 6];

  const itemVariants = {
    hidden: (custom: CustomHidden) => ({
      opacity: 0,
      rotate: custom.initial?.rotate || 0,
      x: custom.initial?.x || 0,
      y: custom.initial?.y || 0,
    }),
    visible: (custom: CustomVisible) => ({
      opacity: 1,
      rotate: custom.target?.rotate || 0,
      x: custom.target?.x || 0,
      y: custom.target?.y || 0,
      transition: {
        duration: custom.duration || 0.8,
        delay: custom.delay || 0,
        ease: easeOut
      },
    }),
  };

  return (
    <>
      <section ref={ref} id="moving-forward-scroll" className="w-full relative bg-transparent">
        
        <div className="h-screen sticky top-0 overflow-hidden relative px-6 md:px-10">
          
          <Layer1 />

          <Layer2 
            layer2Opacity={layer2Opacity}
            cards={cards}
            cardRotates={cardRotates}
            itemVariants={itemVariants}
          />

          {/* Pass opacity to Layer3 for fade-out */}
          <Layer3 topSectionY={topSectionY} layer3Opacity={layer3Opacity} />
        </div>

        <div ref={scrollRef} className="h-[120vh]" />

        <div className="min-h-screen flex items-center justify-center px-6 md:px-10 py-20">
        </div>
      </section>
    </>
  );
});

Stories.displayName = "Stories";

export default Stories;