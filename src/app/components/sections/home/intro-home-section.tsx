

// "use client";
// import { motion } from "framer-motion";

// export default function IntroHomeSection() {
//   return (
//     <div className="relative overflow-hidden">
//       <section
//         className="relative w-full bg-cover bg-center bg-no-repeat min-h-screen flex flex-col"
//         style={{ backgroundImage: "url('/images/ORS_Hoklin.jpg')" }}
//       >

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
//               <div className="bg-transparent border-2 border-white rounded-lg md:pr-16 md:pt-2 md:pb-48 md:pl-2 h-32 flex flex-col justify-start">
//                 <div className="text-left">
//                   {["You", "Matter", "Here"].map((word, i) => (
//                     <motion.p
//                       key={i}
//                       className="lg:text-2xl text-xl font-bold tracking-widest uppercase text-white"
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
        {/* Main Content */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-8 lg:px-12">
          <div className="w-full h-full">

            {/* Bottom Left Title – Restarts on scroll-in */}
            <motion.div
              className="absolute bottom-6 left-6 lg:left-12 lg:bottom-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <motion.div
                className="space-y-0"
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                viewport={{ once: false }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1, 
                    transition: { staggerChildren: 0.1 } 
                  },
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

            {/* Bottom Right Box – Restarts on scroll-in */}
            <motion.div
              className="absolute bottom-8 right-12 sm:right-6 lg:right-12 sm:bottom-6 lg:bottom-12"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <div className="bg-transparent border-2 border-white rounded-lg md:pr-16 md:pt-2 md:pb-48 pl-2 pt-2 pr-4 md:pl-2 lg:h-32 h-24 flex flex-col justify-start">
                <div className="text-left">
                  {["You", "Matter", "Here"].map((word, i) => (
                    <motion.p
                      key={i}
                      className="lg:text-2xl text-sm font-bold tracking-widest uppercase text-white"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      viewport={{ once: false }}
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