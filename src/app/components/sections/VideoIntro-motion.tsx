"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function VideoIntro({ onEnd }: { onEnd: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      onEnd(); 
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [onEnd]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src="/videos/intro-motion.mp4"
        autoPlay
        muted
        playsInline
      />
    </motion.div>
  );
}
