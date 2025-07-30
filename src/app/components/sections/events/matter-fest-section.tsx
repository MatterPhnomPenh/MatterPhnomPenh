

"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const albums = [
  { id: 1, title: "", image: "/o3v2.png" },
  { id: 2, title: "", image: "/o2v2.png" },
  { id: 3, title: "", image: "/o1v2.png" },
];

export default function MatterFest() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const nextIndex = (currentImageIndex + 1) % albums.length;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextImage = () => setCurrentImageIndex(nextIndex);

  const albumVariants = {
    hidden: { opacity: 0, x: -50, rotate: -15 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: -10,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
    exit: { opacity: 0, x: 50, rotate: -5 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 0.5 },
    },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const festRef = useRef(null);
  const festInView = useInView(festRef, { once: true, margin: isMobile ? "-50px" : "-100px" });

  const festVariants = {
    hidden: { opacity: 0, y: isMobile ? -40 : -80 },
    visible: {
      opacity: 0.5,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen bg-[#2330ff] text-white overflow-hidden px-4 md:px-0">
      {/* Content container with reversed order on mobile */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">
        {/* Text section - comes first on mobile */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className={`w-full md:w-1/2 ${isMobile ? 'order-1' : 'order-2'} md:px-12 z-10`}
        >
          <h1 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-extrabold mb-6`}>Let’s Connect Because Every Voice Matters</h1>
          <p className={`${isMobile ? 'text-base' : 'text-lg'} text-gray-300 leading-relaxed mb-8`}>
            Whether you’re reaching out about the festival, volunteering, or press, this is where meaningful conversations begin.&quot;          </p>
          <motion.button 
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="bg-white border border-white text-[#2330ff] uppercase px-6 py-3 text-lg rounded-lg font-semibold hover:bg-transparent hover:text-white transition"
          >
            Book Now
          </motion.button>
        </motion.div>

        {/* Album Stack - comes second on mobile */}
        <div className={`relative ${isMobile ? 'w-[250px]' : 'w-[300px] md:w-[400px]'} aspect-square ${isMobile ? 'order-2 mt-12' : 'order-1 -translate-x-6'} z-10`}>
          <motion.div
            initial={{ rotate: -8, x: isMobile ? -10 : -20, y: isMobile ? 10 : 20 }}
            animate={{ rotate: -8, x: isMobile ? -10 : -20, y: isMobile ? 10 : 20 }}
            className="absolute w-full h-full"
          >
            <div className="relative w-full h-full overflow-hidden rounded-lg bg-gray-800">
              <Image
                src={albums[nextIndex].image}
                alt=""
                fill
                className="object-cover opacity-70"
              />
            </div>
          </motion.div>

          <motion.div
            key={currentImageIndex}
            onClick={nextImage}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={albumVariants}
            className="absolute w-full h-full cursor-pointer"
            whileHover={{ scale: isMobile ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative w-full h-full overflow-hidden rounded-lg shadow-2xl">
              <Image
                src={albums[currentImageIndex].image}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fest^M Text Title - Absolute positioned */}
      <motion.h1
        ref={festRef}
        variants={festVariants}
        initial="hidden"
        animate={festInView ? "visible" : "hidden"}
        className={`absolute ${isMobile ? 'top-8 right-4' : 'top-4 right-4 md:right-50'} ${isMobile ? 'text-[80px]' : 'text-[160px] md:text-[220px]'} font-bold text-white leading-none select-none z-0`}
      >
        Fest
        <sup className={`${isMobile ? 'text-4xl' : 'text-8xl'} align-super`}>M</sup>
      </motion.h1>
    </section>
  );
}