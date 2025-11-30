

// // // "use client";
// // // import { motion } from "framer-motion";

// // // export default function IntroHomeSection() {
// // //   return (
// // //     <div className="relative overflow-hidden">
// // //       <section
// // //         className="relative w-full bg-cover bg-center bg-no-repeat min-h-screen flex flex-col"
// // //         style={{ backgroundImage: "url('/images/ORS_Hoklin.jpg')" }}
// // //       >
// // //         <div className="relative z-10 flex-1 flex items-center justify-center px-8 sm:px-6 lg:px-12">
// // //           <div className="w-full h-full">

// // //             {/* Bottom Left Title – unchanged */}
// // //             <motion.div
// // //               className="absolute bottom-8 left-8 sm:left-6 lg:left-12 sm:bottom-6 lg:bottom-12"
// // //               initial={{ opacity: 0, x: -40 }}
// // //               animate={{ opacity: 1, x: 0 }}
// // //               transition={{ duration: 0.8, delay: 0.3 }}
// // //             >
// // //               <motion.div className="space-y-0" initial="hidden" animate="visible"
// // //                 variants={{
// // //                   hidden: { opacity: 0 },
// // //                   visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// // //                 }}
// // //               >
// // //                 {["It wouldn't", "Be the same", "Without you."].map((line, i) => (
// // //                   <motion.h1
// // //                     key={i}
// // //                     className="text-4xl md:text-6xl lg:text-7xl font-bold text-green-400 tracking-tight leading-tight"
// // //                     variants={{
// // //                       hidden: { opacity: 0, y: 20 },
// // //                       visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } },
// // //                     }}
// // //                   >
// // //                     {line}
// // //                   </motion.h1>
// // //                 ))}
// // //               </motion.div>
// // //             </motion.div>

// // //             {/* Bottom Right Box – Text + Border color responsive */}
// // //             <motion.div
// // //               className="absolute bottom-8 right-12 sm:right-6 lg:right-12 sm:bottom-6 lg:bottom-12"
// // //               initial={{ opacity: 0, x: 40 }}
// // //               animate={{ opacity: 1, x: 0 }}
// // //               transition={{ duration: 0.8, delay: 0.6 }}
// // //             >
// // //               {/* Box with responsive border + padding */}
// // //               <div className="
// // //                 bg-transparent 
// // //                 border-2 
// // //                 border-white          /* white border on mobile */
// // //                 md:border-black       /* black border from md and up */
// // //                 rounded-lg 
// // //                 md:pr-16 md:pt-2 md:pb-48 md:pl-2 
// // //                 h-32 
// // //                 flex flex-col justify-start
// // //               ">
// // //                 <div className="text-left">
// // //                   {["You", "Matter", "Here"].map((word, i) => (
// // //                     <motion.p
// // //                       key={i}
// // //                       className="
// // //                         lg:text-2xl
// // //                         text-xl 
// // //                         font-bold 
// // //                         tracking-widest 
// // //                         uppercase 
// // //                         text-white         /* white text on mobile */
// // //                         md:text-black       /* black text from md and up */
// // //                       "
// // //                       initial={{ opacity: 0 }}
// // //                       animate={{ opacity: 1 }}
// // //                       transition={{ delay: 0.8 + i * 0.1 }}
// // //                     >
// // //                       {word}
// // //                     </motion.p>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </motion.div>

// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }


// // "use client";
// // import { motion } from "framer-motion";

// // export default function IntroHomeSection() {
// //   return (
// //     <div className="relative overflow-hidden">
// //       <section
// //         className="relative w-full bg-cover bg-center bg-no-repeat min-h-screen flex flex-col"
// //         style={{ backgroundImage: "url('/images/ORS_Hoklin.jpg')" }}
// //       >
// //         <div className="relative z-10 flex-1 flex items-center justify-center px-8 sm:px-6 lg:px-12">
// //           <div className="w-full h-full">
// //             {/* Bottom Left Title */}
// //             <motion.div
// //               className="absolute bottom-8 left-8 sm:left-6 lg:left-12 sm:bottom-6 lg:bottom-12"
// //               initial={{ opacity: 0, x: -40 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.8, delay: 0.3 }}
// //             >
// //               <motion.div
// //                 className="space-y-0"
// //                 initial="hidden"
// //                 animate="visible"
// //                 variants={{
// //                   hidden: { opacity: 0 },
// //                   visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// //                 }}
// //               >
// //                 {["It wouldn't", "Be the same", "Without you."].map((line, i) => (
// //                   <motion.h1
// //                     key={i}
// //                     className="text-4xl md:text-6xl lg:text-7xl font-bold text-green-400 tracking-tight leading-tight"
// //                     variants={{
// //                       hidden: { opacity: 0, y: 20 },
// //                       visible: { opacity: 1, y: 0 },
// //                     }}
// //                   >
// //                     {line}
// //                   </motion.h1>
// //                 ))}
// //               </motion.div>
// //             </motion.div>

// //             {/* Bottom Right Box */}
// //             <motion.div
// //               className="absolute bottom-8 right-12 sm:right-6 lg:right-12 sm:bottom-6 lg:bottom-12"
// //               initial={{ opacity: 0, x: 40 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.8, delay: 0.6 }}
// //             >
// //               <div className="bg-transparent border-2 border-white md:border-black rounded-lg md:pr-16 md:pt-2 md:pb-48 md:pl-2 h-32 flex flex-col justify-start">
// //                 <div className="text-left">
// //                   {["You", "Matter", "Here"].map((word, i) => (
// //                     <motion.p
// //                       key={i}
// //                       className="lg:text-2xl text-xl font-bold tracking-widest uppercase text-white md:text-black"
// //                       initial={{ opacity: 0 }}
// //                       animate={{ opacity: 1 }}
// //                       transition={{ delay: 0.8 + i * 0.1 }}
// //                     >
// //                       {word}
// //                     </motion.p>
// //                   ))}
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
// //         <motion.div 
// //   className="h-12 lg:h-24 bg-transparent relative overflow-hidden"
// //   initial={{ opacity: 0 }}
// //   whileInView={{ opacity: 1 }}
// //   transition={{ duration: 0.8 }}
// //   viewport={{ once: true }}
// // >
// //   {[...Array(20)].map((_, i) => (
// //     <motion.div
// //       key={i}
// //       className="absolute w-1 h-1 bg-white rounded-full"
// //       initial={{ 
// //         x: -50, 
// //         y: Math.random() * 48, 
// //         opacity: 0 
// //       }}
// //       animate={{ 
// //         x: "100vw", 
// //         y: Math.random() * 48,
// //         opacity: [0, 1, 0] 
// //       }}
// //       transition={{ 
// //         duration: Math.random() * 3 + 2,
// //         repeat: Infinity,
// //         delay: Math.random() * 2,
// //         ease: "linear"
// //       }}
// //     />
// //   ))}
// // </motion.div>
// //       </section>



        
// //     </div>
// //   );
// // }


// "use client";
// import { motion } from "framer-motion";

// export default function IntroHomeSection() {
//   return (
//     <div className="relative overflow-hidden">
//       <section
//         className="relative w-full bg-cover bg-center bg-no-repeat min-h-screen flex flex-col"
//         style={{ backgroundImage: "url('/images/ORS_Hoklin.jpg')" }}
//       >
//         {/* Dark overlay for better text contrast */}
//         <div className="absolute inset-0 bg-black/30" />

//         {/* Main Content */}
//         <div className="relative z-10 flex-1 flex items-center justify-center px-8 sm:px-6 lg:px-12">
//           <div className="w-full h-full">
//             {/* Bottom Left Title */}
//             <motion.div
//               className="absolute bottom-8 left-8 sm:left-6 lg:left-12 sm:bottom-6 lg:bottom-12"
//               initial={{ opacity: 0, x: -40 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             >
//               <motion.div
//                 className="space-y-0"
//                 initial="hidden"
//                 animate="visible"
//                 variants={{
//                   hidden: { opacity: 0 },
//                   visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
//                 }}
//               >
//                 {["It wouldn't", "Be the same", "Without you."].map((line, i) => (
//                   <motion.h1
//                     key={i}
//                     className="text-4xl md:text-6xl lg:text-7xl font-bold text-green-400 tracking-tight leading-tight drop-shadow-2xl"
//                     variants={{
//                       hidden: { opacity: 0, y: 20 },
//                       visible: { opacity: 1, y: 0 },
//                     }}
//                   >
//                     {line}
//                   </motion.h1>
//                 ))}
//               </motion.div>
//             </motion.div>

//             {/* Bottom Right Box */}
//             <motion.div
//               className="absolute bottom-8 right-12 sm:right-6 lg:right-12 sm:bottom-6 lg:bottom-12"
//               initial={{ opacity: 0, x: 40 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//             >
//               <div className="bg-transparent border-2 border-white md:border-black rounded-lg md:pr-16 md:pt-2 md:pb-48 md:pl-2 h-32 flex flex-col justify-start">
//                 <div className="text-left">
//                   {["You", "Matter", "Here"].map((word, i) => (
//                     <motion.p
//                       key={i}
//                       className="lg:text-2xl text-xl font-bold tracking-widest uppercase text-white md:text-black"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ delay: 0.8 + i * 0.1 }}
//                     >
//                       {word}
//                     </motion.p>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* MAGIC LAYER: Floating particles at the bottom */}
//         <div className="absolute inset-x-0 bottom-0 h-32 lg:h-48 pointer-events-none overflow-hidden">
//           <motion.div
//             className="relative w-full h-full"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1.5, delay: 1 }}
//           >
//             {[...Array(25)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute w-1 h-1 bg-white/80 rounded-full shadow-lg"
//                 initial={{
//                   x: -100,
//                   y: Math.random() * 100 + 20,
//                 }}
//                 animate={{
//                   x: "110vw",
//                   y: Math.random() * 80 + 40,
//                 }}
//                 transition={{
//                   duration: Math.random() * 8 + 10,
//                   repeat: Infinity,
//                   delay: Math.random() * 5,
//                   ease: "linear",
//                 }}
//               />
//             ))}
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }


"use client";
import { motion } from "framer-motion";

export default function IntroHomeSection() {
  return (
    <div className="relative overflow-hidden">
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat min-h-screen flex flex-col"
        style={{ backgroundImage: "url('/images/ORS_Hoklin.jpg')" }}
      >
        {/* BLACK OVERLAY REMOVED – image is now 100% visible */}

        {/* Main Content */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-8 sm:px-6 lg:px-12">
          <div className="w-full h-full">
            {/* Bottom Left Title */}
            <motion.div
              className="absolute bottom-8 left-8 sm:left-6 lg:left-12 sm:bottom-6 lg:bottom-12"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                className="space-y-0"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                }}
              >
                {["It wouldn't", "Be the same", "Without you."].map((line, i) => (
                  <motion.h1
                    key={i}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-green-400 tracking-tight leading-tight drop-shadow-2xl"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    {line}
                  </motion.h1>
                ))}
              </motion.div>
            </motion.div>

            {/* Bottom Right Box */}
            <motion.div
              className="absolute bottom-8 right-12 sm:right-6 lg:right-12 sm:bottom-6 lg:bottom-12"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-transparent border-2 border-white rounded-lg md:pr-16 md:pt-2 md:pb-48 md:pl-2 h-32 flex flex-col justify-start">
                <div className="text-left">
                  {["You", "Matter", "Here"].map((word, i) => (
                    <motion.p
                      key={i}
                      className="lg:text-2xl text-xl font-bold tracking-widest uppercase text-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                    >
                      {word}
                    </motion.p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </section>
    </div>
  );
}