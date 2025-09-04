


"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const images = [
  {
    src: "/images/DSC04836.jpg",
    alt: "movingforward 1",
    delay: 0,
  },
  {
    src: "/images/DSC04917.jpg",
    alt: "movingforward 2",
    delay: 0.5,
  },
  {
    src: "/images/DSC05193.jpg",
    alt: "movingforward 3",
    delay: 0.7,
  },
];

export default function MovingForward() {
  return (
    <section id="moving-forward" className="bg-transparent w-full px-6 md:px-10 py-20 md:py-32">
      <div className="mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left - Animated Images */}
        <div className="space-y-6">
          {images.map((img, idx) => (
            <AnimatedImage
              key={idx}
              src={img.src}
              alt={img.alt}
              index={idx}
              total={images.length}
              baseDelay={img.delay}
            />
          ))}
        </div>

        {/* Right - Static Content */}
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl uppercase text-[#2330ff] mb-6 font-san font-bold">
            Moving Forward, Together
          </h2>
          <div className="space-y-4 text-gray-900 text-base md:text-lg leading-relaxed font-light">
            <p>Welcome to Matter — a space where every story, every voice, and every moment matters.</p>
            <p>We’re not defined by walls or buildings, but by the love we share, the faith we live, and the community we build.</p>
            <p>As we gather through events, creativity, and conversations about Jesus, we believe something beautiful is unfolding.</p>
            <p>This isn’t just a website — it’s a movement of belonging, purpose, and connection.</p>
            <p>Come be a part of what God is doing through us — together.</p>
            <p>Let us know how you’d like to connect by filling out the survey below.</p>
          </div>
          <div className="mt-8 space-y-4">
                <Link
                  href="https://t.me/matterphnompenh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full border border-gray-900 px-6 py-3 text-gray-900 text-sm font-san uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-all"
                >
                  Support Us
                </Link>
                <Link
                  href="https://t.me/phnompenhmatters" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full border border-[#2330ff] px-6 py-3 bg-[#2330ff] text-white text-sm font-san uppercase tracking-wider hover:bg-white hover:text-[#2330ff] transition-all"
                >
                  Stay Connected
                </Link>
              </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedImage({
  src,
  alt,
  index,
  total,
  baseDelay,
}: {
  src: string;
  alt: string;
  index: number;
  total: number;
  baseDelay: number;
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  // Track last scroll position to detect scroll direction
  const lastScrollY = useRef(0);
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");

  useEffect(() => {
    function onScroll() {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection("up");
      }
      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      // Calculate delay based on scroll direction
      // If scrolling down, delay is baseDelay
      // If scrolling up, reverse the delay order (last image has 0 delay)
      const delay = scrollDirection === "down"
        ? baseDelay
        : // reverse delay: last image has 0 delay, first has max delay
          (total - 1 - index) * 0.5;

      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1.5,
          delay,
          ease: "easeOut",
        },
      });
    } else {
      controls.start({
        x: -200,
        opacity: 0,
        transition: {
          duration: 1,
          ease: "easeIn",
        },
      });
    }
  }, [inView, controls, scrollDirection, index, baseDelay, total]);

  return (
    <motion.div
      ref={ref}
      initial={{ x: -200, opacity: 0 }}
      animate={controls}
      className="relative w-full h-64 md:h-[220px] rounded overflow-hidden shadow"
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </motion.div>
  );
}


