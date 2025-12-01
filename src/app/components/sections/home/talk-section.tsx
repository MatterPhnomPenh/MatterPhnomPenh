

// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function TalkSection() {
//   return (
//     <section id="talk" className="py-32 md:py-48 px-8 lg:px-16 bg-black text-white overflow-hidden">
//       {/* Top Title */}
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="text-center mb-20"
//       >
//         <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-white mb-6">
//           Our Latest Talk
//         </h2>
//         <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed tracking-wide text-white/90 max-w-3xl mx-auto px-4">
//           Description about the talk, meaning conversations blah blah bla.
//         </p>
//       </motion.div>

//       {/* MAIN CENTERED BLOCK: Video + Text */}
//       <div className="flex justify-center px-4 sm:px-8 lg:px-16">
//         <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 xl:gap-28">

//           {/* Video - Left on desktop, centered on mobile */}
//           <div className="w-full lg:w-1/2 flex justify-center lg:justify-right">
//             <a
//               href="https://youtu.be/LNHWJQzjg70"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block w-full max-w-lg"
//             >
//               <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
//                 {/* Auto-play YouTube iframe (muted + loop) */}
//                 <iframe
//                   src="https://www.youtube.com/embed/LNHWJQzjg70?autoplay=1&mute=1&loop=1&playlist=LNHWJQzjg70&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3"
//                   title="A Matter For All | Gathering with Pr. Sam Wujiale "
//                   allow="autoplay; encrypted-media"
//                   allowFullScreen
//                   className="absolute inset-0 w-full h-full border-0"
//                 />
//               </div>
//             </a>
//           </div>

//           {/* Text Content - Right on desktop, centered below on mobile */}
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="w-full lg:w-1/2 text-center lg:text-left space-y-8"
//           >
//             <div className="space-y-4">
//               <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
//                 A Matter For All | Gathering 
//               </h3>
//               <p className="text-lg sm:text-xl text-white/80 font-light">
//                 Pr. Sam Wujiale
//               </p>
//             </div>
//             <div className="flex items-center gap-4 text-white/60 text-sm font-medium tracking-wide justify-center lg:justify-start flex-wrap">
//               <span>22.11.2025</span>
//               <span>•</span>
//               <span>Matter Phnom Penh</span>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Bottom Button */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="text-center mt-20 sm:mt-28"
//       >
//         <motion.div whileHover="hover" initial="rest" className="relative inline-block">
//           <Link
//             href="/talks"
//             className="relative inline-flex items-center justify-center gap-3 border-2 border-white rounded-md px-8 py-4 lg:px-12 lg:py-5 text-sm font-bold tracking-widest uppercase overflow-hidden"
//           >
//             <motion.div
//               className="absolute inset-0 bg-white"
//               initial={{ x: "-100%" }}
//               variants={{ rest: { x: "-100%" }, hover: { x: "0%" } }}
//               transition={{ duration: 0.4, ease: "easeInOut" }}
//             />
//             <motion.span
//               className="relative z-10 flex items-center gap-3 text-white"
//               variants={{ rest: { color: "#ffffff" }, hover: { color: "#000000" } }}
//               transition={{ duration: 0.2 }}
//             >
//               Listen To Other Talks
//               <motion.span
//                 variants={{ rest: { x: 0 }, hover: { x: 8 } }}
//                 transition={{ duration: 0.3 }}
//               >
//                 →
//               </motion.span>
//             </motion.span>
//           </Link>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }


"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TalkSection() {
  return (
    <section
      id="talk"
      className="py-24 lg:py-32 px-8 lg:px-16 bg-black text-white overflow-hidden"
    >
      {/* Top Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}   // REPLAYS EVERY TIME
        className="text-center mb-20"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-white mb-6">
          Our Latest Talk
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed tracking-wide text-white/90 max-w-3xl mx-auto px-4">
          Description about the talk, meaning conversations blah blah bla.
        </p>
      </motion.div>

      {/* MAIN CENTERED BLOCK: Video + Text */}
      <div className="flex justify-center px-4 sm:px-8 lg:px-16">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 xl:gap-28">

          {/* Video - Left on desktop */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <a
              href="https://youtu.be/LNHWJQzjg70"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-lg"
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
                <iframe
                  src="https://www.youtube.com/embed/LNHWJQzjg70?autoplay=1&mute=1&loop=1&playlist=LNHWJQzjg70&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3"
                  title="A Matter For All | Gathering with Pr. Sam Wujiale"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            </a>
          </div>

          {/* Text Content - Right on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}   // REPLAYS EVERY TIME
            className="w-full lg:w-1/2 text-center lg:text-left space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                A Matter For All | Gathering
              </h3>
              <p className="text-lg sm:text-xl text-white/80 font-light">
                Pr. Sam Wujiale
              </p>
            </div>
            <div className="flex items-center gap-4 text-white/60 text-sm font-medium tracking-wide justify-center lg:justify-start flex-wrap">
              <span>22.11.2025</span>
              <span>•</span>
              <span>Matter Phnom Penh</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}   // REPLAYS EVERY TIME
        className="text-center mt-20 sm:mt-28"
      >
        <motion.div whileHover="hover" initial="rest" className="relative inline-block">
          <Link
            href="/talks"
            className="relative inline-flex items-center justify-center gap-3 border-2 border-white rounded-md px-8 py-4 lg:px-12 lg:py-5 text-sm font-bold tracking-widest uppercase overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: "-100%" }}
              variants={{ rest: { x: "-100%" }, hover: { x: "0%" } }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
            <motion.span
              className="relative z-10 flex items-center gap-3 text-white"
              variants={{ rest: { color: "#ffffff" }, hover: { color: "#000000" } }}
              transition={{ duration: 0.2 }}
            >
              Listen To Other Talks
              <motion.span
                variants={{ rest: { x: 0 }, hover: { x: 8 } }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}