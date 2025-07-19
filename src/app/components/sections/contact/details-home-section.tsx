
"use client";

import { motion } from "framer-motion";

const videos = [
  {
    src: "/videos/1.mp4",
    className: `
      top-0 center w-[100%] rotate-[-1deg] z-10
      md:top-20 md:left-16 md:w-[38%] 
      lg:top-20 lg:left-16 lg:w-[38%] 
    `,
    delay: 0,
    floatRange: 15,
    floatSpeed: 6,
  },
  {
    src: "/videos/2.mp4",
    className: `
      top-50 center w-[100%] rotate-[2deg] z-20
      md:top-30 md:right-8 md:w-[36%]
      lg:top-20 lg:right-8 lg:w-[36%]
    `,
    delay: 0.2,
    floatRange: 12,
    floatSpeed: 5,
  },
  {
    src: "/videos/3.mp4",
    className: `
      bottom-25 center w-[100%] rotate-[1deg] z-30
      md:bottom-20 md:left-[25%] md:w-[46%]
      lg:bottom-30 lg:left-[25%] lg:w-[46%]
    `,
    delay: 0.4,
    floatRange: 18,
    floatSpeed: 7,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-blue-900 text-white px-4 pb-32 md:pb-48 min-h-screen overflow-hidden flex items-center justify-center"
    >
      
      {/* Blurred background glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400 opacity-30 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-20 blur-2xl rounded-full animate-pulse" />
      </div>

      {/* Layered Motion Videos with smooth floating */}
      <div className="relative w-full h-[700px] md:h-[600px] lg:h-[800px] 2xl:h-[1000px] overflow-hidden">
        {videos.map((vid, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className={`absolute ${vid.className} rounded-2xl overflow-hidden shadow-2xl transition-all duration-300`}
            animate={{
              x: [0, vid.floatRange, 0, -vid.floatRange, 0],
              y: [0, vid.floatRange / 2, 0, -vid.floatRange / 2, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: vid.delay },
              scale: { duration: 0.8, delay: vid.delay },
              x: {
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                duration: vid.floatSpeed,
                delay: vid.delay,
              },
              y: {
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                duration: vid.floatSpeed,
                delay: vid.delay,
              },
            }}
          >
            <video
              src={vid.src}
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-auto aspect-video"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        ))}
      </div>

      {/* Optional Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-10 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold">
          Let’s Build Something Together
        </h2>
        <p className="mt-2 text-gray-200 text-lg">
          Reach out, share your story, and let’s create what matters.
        </p>
      </motion.div>
    </section>
  );
}
