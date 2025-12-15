'use client';

import { motion } from 'framer-motion';

export default function GeometricLoader() {
  // Animation Transition Configurations
  const pulseTransition = {
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut" as const,
    repeatType: "reverse" as const
  };

  const spinTransition = {
    duration: 20,
    repeat: Infinity,
    ease: "linear" as const
  };

  const glitchTransition = {
    duration: 1.2,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: [0.1, 1, 0.57, 1] as [number, number, number, number], // Custom bezier for a "snappy" mechanical feel
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-transparent">
      <div className="relative w-full max-w-3xl aspect-video">
        <svg
          viewBox="0 0 600 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* --- GROUP 1: The Starburst (Left) --- */}
          <g transform="translate(100, 150)">
            <motion.g animate={{ rotate: 360 }} transition={spinTransition}>
              {[...Array(12)].map((_, i) => (
                <motion.line
                  key={i}
                  x1="0"
                  y1="-60"
                  x2="0"
                  y2="60"
                  stroke="white"
                  strokeWidth="1.5"
                  // Rotate each line to form the star
                  transform={`rotate(${i * 15})`} 
                  // Add a subtle length pulse
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ ...pulseTransition, delay: i * 0.1 }}
                />
              ))}
            </motion.g>
          </g>

          {/* --- GROUP 2: Concentric Circles (Center) --- */}
          <g transform="translate(300, 150)">
            {/* Outer Circle */}
            <motion.circle
              cx="0"
              cy="0"
              r="50"
              stroke="white"
              strokeWidth="1"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ ...pulseTransition, delay: 0 }}
            />
            {/* Middle Circle */}
            <motion.circle
              cx="0"
              cy="0"
              r="35"
              stroke="white"
              strokeWidth="1.5"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ ...pulseTransition, delay: 0.1 }}
            />
            {/* Inner Circle (Filled or thick stroke) */}
            <motion.circle
              cx="0"
              cy="0"
              r="20"
              stroke="white"
              strokeWidth="2"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 0.9, 1] }} // Inverse scale for contrast
              transition={{ ...pulseTransition, delay: 0.2 }}
            />
          </g>

          {/* --- GROUP 3: Glitch Rectangles (Right) --- */}
          <g transform="translate(500, 150)">
            {/* Rectangle 1 */}
            <motion.rect
              x="-40"
              y="-30"
              width="20"
              height="30"
              fill="white"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: [1, 2.5, 1] }}
              style={{ originY: 0.5 }} // Scale from center
              transition={{ ...glitchTransition, delay: 0 }}
            />
            {/* Rectangle 2 */}
            <motion.rect
              x="-10"
              y="-10"
              width="20"
              height="30"
              fill="white"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: [1, 1.8, 1] }}
              style={{ originY: 0.5 }}
              transition={{ ...glitchTransition, delay: 0.2 }}
            />
            {/* Rectangle 3 */}
            <motion.rect
              x="20"
              y="10"
              width="20"
              height="30"
              fill="white"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: [1, 2.2, 1] }}
              style={{ originY: 0.5 }}
              transition={{ ...glitchTransition, delay: 0.4 }}
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

