// 'use client';

// import { motion } from 'framer-motion';

// export default function GeometricLoader() {
//   // Animation Transition Configurations
//   const pulseTransition = {
//     duration: 1.5,
//     repeat: Infinity,
//     ease: "easeInOut" as const,
//     repeatType: "reverse" as const
//   };

//   const spinTransition = {
//     duration: 20,
//     repeat: Infinity,
//     ease: "linear" as const
//   };

//   const glitchTransition = {
//     duration: 1.2,
//     repeat: Infinity,
//     repeatType: "reverse" as const,
//     ease: [0.1, 1, 0.57, 1] as [number, number, number, number], // Custom bezier for a "snappy" mechanical feel
//   };

//   return (
//     <div className="flex items-center justify-center w-full h-screen bg-transparent">
//       <div className="relative w-full max-w-3xl aspect-video">
//         <svg
//           viewBox="0 0 600 300"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-full h-full"
//         >
//           {/* --- GROUP 1: The Starburst (Left) --- */}
//           <g transform="translate(100, 150)">
//             <motion.g animate={{ rotate: 360 }} transition={spinTransition}>
//               {[...Array(12)].map((_, i) => (
//                 <motion.line
//                   key={i}
//                   x1="0"
//                   y1="-60"
//                   x2="0"
//                   y2="60"
//                   stroke="white"
//                   strokeWidth="1.5"
//                   // Rotate each line to form the star
//                   transform={`rotate(${i * 15})`} 
//                   // Add a subtle length pulse
//                   initial={{ opacity: 0.8 }}
//                   animate={{ opacity: [0.5, 1, 0.5] }}
//                   transition={{ ...pulseTransition, delay: i * 0.1 }}
//                 />
//               ))}
//             </motion.g>
//           </g>

//           {/* --- GROUP 2: Concentric Circles (Center) --- */}
//           <g transform="translate(300, 150)">
//             {/* Outer Circle */}
//             <motion.circle
//               cx="0"
//               cy="0"
//               r="50"
//               stroke="white"
//               strokeWidth="1"
//               initial={{ scale: 1, opacity: 0.5 }}
//               animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
//               transition={{ ...pulseTransition, delay: 0 }}
//             />
//             {/* Middle Circle */}
//             <motion.circle
//               cx="0"
//               cy="0"
//               r="35"
//               stroke="white"
//               strokeWidth="1.5"
//               initial={{ scale: 1 }}
//               animate={{ scale: [1, 1.15, 1] }}
//               transition={{ ...pulseTransition, delay: 0.1 }}
//             />
//             {/* Inner Circle (Filled or thick stroke) */}
//             <motion.circle
//               cx="0"
//               cy="0"
//               r="20"
//               stroke="white"
//               strokeWidth="2"
//               initial={{ scale: 1 }}
//               animate={{ scale: [1, 0.9, 1] }} // Inverse scale for contrast
//               transition={{ ...pulseTransition, delay: 0.2 }}
//             />
//           </g>

//           {/* --- GROUP 3: Glitch Rectangles (Right) --- */}
//           <g transform="translate(500, 150)">
//             {/* Rectangle 1 */}
//             <motion.rect
//               x="-40"
//               y="-30"
//               width="20"
//               height="30"
//               fill="white"
//               initial={{ scaleY: 1 }}
//               animate={{ scaleY: [1, 2.5, 1] }}
//               style={{ originY: 0.5 }} // Scale from center
//               transition={{ ...glitchTransition, delay: 0 }}
//             />
//             {/* Rectangle 2 */}
//             <motion.rect
//               x="-10"
//               y="-10"
//               width="20"
//               height="30"
//               fill="white"
//               initial={{ scaleY: 1 }}
//               animate={{ scaleY: [1, 1.8, 1] }}
//               style={{ originY: 0.5 }}
//               transition={{ ...glitchTransition, delay: 0.2 }}
//             />
//             {/* Rectangle 3 */}
//             <motion.rect
//               x="20"
//               y="10"
//               width="20"
//               height="30"
//               fill="white"
//               initial={{ scaleY: 1 }}
//               animate={{ scaleY: [1, 2.2, 1] }}
//               style={{ originY: 0.5 }}
//               transition={{ ...glitchTransition, delay: 0.4 }}
//             />
//           </g>
//         </svg>
//       </div>
//     </div>
//   );
// }

'use client';

import { motion } from 'framer-motion';

export default function GeometricLoader() {
  // 1. Internal Pulse (The individual shapes changing)
  const pulseTransition = {
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut",
    repeatType: "reverse"
  };

  const glitchTransition = {
    duration: 1.2,
    repeat: Infinity,
    repeatType: "reverse",
    ease: [0.1, 1, 0.57, 1],
  };

  // 2. Floating/Drifting Animation (Up, Down, Left, Right + Tilt)
  // We use a function to generate slightly different timings for each group
  const floatAnimation = (duration) => ({
    y: [-10, 10, -5, 5, -10], // Up and down
    x: [-5, 5, -2, 2, -5],    // Left and Right
    rotate: [-5, 5, -3, 3, -5], // Slight rotation tilt
    transition: {
      duration: duration,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    }
  });

  return (
    <div className="flex items-center justify-center w-full h-screen bg-black">
      <div className="relative w-full max-w-3xl aspect-video">
        <svg
          viewBox="0 0 600 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* COORDINATE UPDATES:
            Left Group: x=220 (Previously 100)
            Center Group: x=300 (Remains center)
            Right Group: x=380 (Previously 500)
            They are now clustered tightly.
          */}

          {/* --- GROUP 1: The Starburst (Left) --- */}
          <motion.g 
            transform="translate(220, 150)"
            animate={floatAnimation(6)} // Floating Duration 6s
          >
            <motion.g 
              animate={{ rotate: 360 }} 
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(12)].map((_, i) => (
                <motion.line
                  key={i}
                  x1="0"
                  y1="-50"
                  x2="0"
                  y2="50"
                  stroke="white"
                  strokeWidth="1.5"
                  transform={`rotate(${i * 15})`} 
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ ...pulseTransition, delay: i * 0.1 }}
                />
              ))}
            </motion.g>
          </motion.g>

          {/* --- GROUP 2: Concentric Circles (Center) --- */}
          <motion.g 
            transform="translate(300, 150)"
            animate={floatAnimation(7)} // Floating Duration 7s (Desynced)
          >
            {/* Outer Circle */}
            <motion.circle
              cx="0"
              cy="0"
              r="45"
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
              r="30"
              stroke="white"
              strokeWidth="1.5"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ ...pulseTransition, delay: 0.1 }}
            />
            {/* Inner Circle */}
            <motion.circle
              cx="0"
              cy="0"
              r="15"
              stroke="white"
              strokeWidth="2"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 0.9, 1] }}
              transition={{ ...pulseTransition, delay: 0.2 }}
            />
          </motion.g>

          {/* --- GROUP 3: Glitch Rectangles (Right) --- */}
          <motion.g 
            transform="translate(380, 150)"
            animate={floatAnimation(5)} // Floating Duration 5s (Faster)
          >
            {/* Rectangle 1 */}
            <motion.rect
              x="-15"
              y="-25"
              width="15"
              height="25"
              fill="white"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: [1, 2.5, 1] }}
              style={{ originY: 0.5 }} 
              transition={{ ...glitchTransition, delay: 0 }}
            />
            {/* Rectangle 2 */}
            <motion.rect
              x="5"
              y="-10"
              width="15"
              height="25"
              fill="white"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: [1, 1.8, 1] }}
              style={{ originY: 0.5 }}
              transition={{ ...glitchTransition, delay: 0.2 }}
            />
            {/* Rectangle 3 */}
            <motion.rect
              x="25"
              y="5"
              width="15"
              height="25"
              fill="white"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: [1, 2.2, 1] }}
              style={{ originY: 0.5 }}
              transition={{ ...glitchTransition, delay: 0.4 }}
            />
          </motion.g>
        </svg>
      </div>
    </div>
  );
}