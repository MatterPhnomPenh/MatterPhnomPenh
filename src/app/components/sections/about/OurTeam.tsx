

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useAnimation,
} from "framer-motion";
import GeometricLoader from "./GeometricLoader";

export default function OurTeam() {
  const ref = useRef(null);
  const signatureRef = useRef(null);
  const backgroundTextRef = useRef(null);
  const textContentRef = useRef(null);

  // Remove { once: true } to allow animations to replay
  const isInView = useInView(ref, { margin: "-100px" });
  const backgroundInView = useInView(backgroundTextRef, { margin: "-50px" });
  const textInView = useInView(textContentRef, { margin: "-50px" });

  // Controls for animations
  const signatureControls = useAnimation();
  const backgroundControls = useAnimation();
  const textControls = useAnimation();
  const imageControls = useAnimation();

  // Scroll progress for the entire section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Transform values based on scroll progress
  const opacityTransform = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.3]
  );
  
  const scaleTransform = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.9, 1, 1, 0.9]
  );
  
  const yTransform = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);

  // Background text animation
  useEffect(() => {
    if (backgroundInView) {
      backgroundControls.start({
        opacity: 1,
        y: -80,
        transition: { duration: 0.7 }
      });
    } else {
      // Reset when out of view
      backgroundControls.start({
        opacity: 0,
        y: 20,
        transition: { duration: 0.3 }
      });
    }
  }, [backgroundInView, backgroundControls]);

  // Text content animation
  useEffect(() => {
    if (textInView) {
      textControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: 0.2 }
      });
    } else {
      // Reset when out of view
      textControls.start({
        opacity: 0,
        y: 20,
        transition: { duration: 0.3 }
      });
    }
  }, [textInView, textControls]);

  // Image and signature animation
  useEffect(() => {
    if (isInView) {
      imageControls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.7, delay: 0.1 }
      });
      
      signatureControls.start({
        pathLength: 1,
        opacity: 1,
        transition: { duration: 2, ease: "easeInOut" },
      });
    } else {
      // Reset when out of view
      imageControls.start({
        opacity: 0,
        scale: 0.9,
        transition: { duration: 0.3 }
      });
      
      signatureControls.start({
        pathLength: 0,
        opacity: 0,
        transition: { duration: 0.3 }
      });
    }
  }, [isInView, imageControls, signatureControls]);

  return (
    <section
      id="pastor-section"
      ref={ref}
      className="relative w-full min-h-screen bg-black flex flex-col items-center justify-between overflow-hidden py-24"
    >
      {/* Giant "Pastor" background text */}
      <motion.h1
        ref={backgroundTextRef}
        animate={backgroundControls}
        className="absolute z-0 top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[50vw] sm:text-[15vw] font-extrabold font-sans text-white/5 leading-none text-center pointer-events-none select-none"
      >
        Pastor
      </motion.h1>
      <GeometricLoader />

      {/* Main Content */}
      <motion.div 
        className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-center justify-center flex-1 px-4"
        style={{
          opacity: opacityTransform,
          scale: scaleTransform,
          y: yTransform
        }}
      >
        {/* Image + Signature Container */}
        <div className="relative z-10 flex items-center justify-center w-full max-w-4xl mb-12">
          <motion.div 
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            animate={imageControls}
          >
            <Image
              src="/images/DSC04772.jpg"
              alt="Our Pastor"
              width={600}
              height={800}
              className="object-cover w-full h-auto max-h-[70vh]"
              priority
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Signature - Centered at bottom */}
            <motion.div
              ref={signatureRef}
              animate={signatureControls}
              className="absolute inset-x-0 bottom-8 z-20 flex justify-center pointer-events-none"
            >
              <div className="px-10 py-6">
                <svg
                  width="320"
                  height="120"
                  viewBox="0 0 320 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-2xl"
                >
                  <motion.path
                    d="M20,60 C60,20 100,90 140,60 C180,20 220,90 260,60 C290,30 310,80 310,60"
                    stroke="white"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={signatureControls}
                  />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Text Description */}
        <motion.div
          ref={textContentRef}
          animate={textControls}
          className="relative z-10 text-center max-w-3xl"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Meet Our Pastor
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
            Our pastor is a dedicated leader who guides our congregation with
            wisdom, compassion, and unwavering faith. With years of experience
            in ministry, they inspire us to grow spiritually and serve our
            community.
          </p>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            Join us in celebrating the heart and vision that define our church
            family and discover the transformative power of faithful
            leadership.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}