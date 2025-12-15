// "use client";
// import { motion } from "framer-motion";

// const videos = [
//   { src: "/videos/1.mp4", className: "top-4 left-4 w-[85%] md:top-8 md:left-8 md:w-[40%] lg:w-[38%]", delay: 0, float: 12 },
//   { src: "/videos/3.mp4", className: "top-32 right-4 w-[80%] md:top-16 md:right-8 md:w-[38%] lg:w-[36%]", delay: 0.2, float: 10 },
//   { src: "/videos/2.mp4", className: "bottom-20 left-1/2 -translate-x-1/2 w-[90%] md:bottom-10 md:left-auto md:right-12 md:w-[44%] lg:w-[46%]", delay: 0.4, float: 15 },
// ];

// export default function OurNameSection() {
//   return (
//     <section className="relative bg-black text-white h-screen h-dvh min-h-screen overflow-hidden flex items-center justify-center">
//       <div className="absolute inset-0 pointer-events-none">
//         {videos.map((vid, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             animate={{
//               x: [0, vid.float, -vid.float, vid.float, 0],
//               y: [0, vid.float / 1.5, -vid.float / 1.5, 0],
//             }}
//             transition={{
//               opacity: { duration: 1, delay: vid.delay },
//               scale: { duration: 1, delay: vid.delay },
//               x: { repeat: Infinity, duration: 6 + i, ease: "easeInOut" },
//               y: { repeat: Infinity, duration: 6 + i, ease: "easeInOut" },
//             }}
//             viewport={{ once: false, amount: 0.1 }}
//             className={`absolute ${vid.className} rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10`}
//           >
//             <video
//               src={vid.src}
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//           </motion.div>
//         ))}
//       </div>

//       <div className="relative z-10 text-center px-5 max-w-6xl mx-auto">
//         <motion.span
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: false, amount: 0.2 }}
//           className="text-yellow-400 uppercase tracking-[0.3em] text-xs sm:text-sm font-bold block"
//         >
//           Our Name
//         </motion.span>

//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2, delay: 0.3 }}
//           viewport={{ once: false, amount: 0.2 }}
//           className="font-black text-6xl sm:text-8xl md:text-9xl leading-[0.9] tracking-tighter text-white drop-shadow-2xl mt-3"
//         >
//           MATTER
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2, delay: 0.6 }}
//           viewport={{ once: false, amount: 0.2 }}
//           className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-yellow-400 font-normal mt-2 drop-shadow-xl"
//         >
//           Phnom Penh
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1.5, delay: 1 }}
//           viewport={{ once: false, amount: 0.2 }}
//           className="mt-8 sm:mt-12 max-w-3xl mx-auto"
//         >
//           <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed">
//             We were empty matter without Him, yet we mattered to Him.
//           </p>
//           <p className="mt-4 text-sm sm:text-base md:text-lg text-white/70">
//             Our city — Phnom Penh — deserves to hear the Word in a way that&apos;s real, relatable, and relevant.<br />
//             That&apos;s why we made the city part of our name. Because this is our home, and it matters.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



"use client";
import { motion } from "framer-motion";

const videos = [
  { src: "/videos/1.mp4", delay: 0, float: 8 },
  { src: "/videos/2.mp4", delay: 0.2, float: 10 },
  { src: "/videos/3.mp4", delay: 0.4, float: 12 },
];

export default function OurNameSection() {
  return (
    <section className="relative bg-black text-white min-h-screen overflow-hidden flex flex-col">
      {/* Header Text */}
      <div className="relative z-20 text-center px-5 max-w-4xl mx-auto pt-20 md:pt-24 lg:pt-28 mb-8 md:mb-12">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-yellow-400 uppercase tracking-[0.3em] text-xs sm:text-sm font-bold block"
          style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
        >
          Our Name
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: false, amount: 0.2 }}
          className="font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-white drop-shadow-2xl mt-3"
          style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
        >
          MATTER
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-yellow-400 font-normal mt-2 drop-shadow-xl"
          style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
        >
          Phnom Penh
        </motion.p>
      </div>

      {/* Video Grid - Clean 1x3 Layout with Square Videos */}
      <div className="relative w-full max-w-6xl px-4 flex items-center justify-center gap-4 md:gap-8 mx-auto mb-12 md:mb-16">
        {videos.map((vid, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={{
              y: [0, -vid.float, vid.float, 0],
            }}
            transition={{
              opacity: { duration: 1, delay: vid.delay },
              scale: { duration: 1, delay: vid.delay },
              y: { 
                repeat: Infinity, 
                duration: 4 + i, 
                ease: "easeInOut",
                delay: vid.delay
              },
            }}
            viewport={{ once: false, amount: 0.1 }}
            className="relative flex-1 max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-square"
          >
            <video
              src={vid.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>
        ))}
      </div>

      {/* Description Text - Under the Videos */}
      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          className="space-y-6 md:space-y-8"
        >
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-normal leading-relaxed">
            We were empty matter without Him, yet we mattered to Him.
          </p>
          <p className="text-sm md:text-base lg:text-lg text-white/70 leading-relaxed">
            Our city — Phnom Penh — deserves to hear the Word in a way that&apos;s real, 
            relatable, and relevant.<br className="hidden sm:block" />
            That&apos;s why we made the city part of our name. Because this is our home, 
            and it matters.
          </p>
        </motion.div>
      </div>
    </section>
  );
}