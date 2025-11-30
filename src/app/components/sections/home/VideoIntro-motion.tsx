

"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageIntro({ onEnd }: { onEnd: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onEnd();
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [onEnd]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background Image Container with Zoom Animation */}
      <motion.div
        className="relative w-full h-full"
        initial={{ 
          scale: 2, // Zoomed in to show bottom-left portion
          x: "0%", // Shift to show bottom-left (rightward shift)
          y: "-25%", // Shift to show bottom-left (upward shift)
        }}
        animate={{ 
          scale: 1, // Zoom out to full image
          x: "0%", // Center the image
          y: "0%", // Center the image
        }}
        transition={{ 
          duration: 3, // 3 seconds for zoom out
          delay: 2, // Wait 2 seconds before starting zoom
          ease: "easeOut" 
        }}
      >
        <Image
          className="object-cover"
          src="/images/ORS_Hoklin.jpg"
          alt="Background"
          fill
          priority
        />
      </motion.div>

      {/* Big M - Centered */}
      <motion.div
        className="absolute text-white text-9xl font-bold z-10"
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.3, opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        M
      </motion.div>
    </motion.div>
  );
}