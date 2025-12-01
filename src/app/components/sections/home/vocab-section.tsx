


// "use client";
// import { motion } from "framer-motion";

// export default function VocabSection() {
//   return (
//     <>
//       <section
//         id="vocab"
//         className="py-32 lg:py-48 text-white overflow-hidden relative"
//         style={{
//           backgroundImage: `url('/images/Independence_Monument.jpg')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundAttachment: "fixed",
//         }}
//       >
//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-black/60" />

//         <div className="relative z-10">
//           <div className="lg:pl-48 pl-16 flex flex-col items-start">
//             {/* Title Block */}
//             <motion.div
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
//               viewport={{ once: true }}
//               className="text-left mb-20"
//             >
//               <h2 className="text-5xl md:text-7xl font-bold tracking-tight lowercase mb-4">
//                 matter
//               </h2>
//               <p className="text-3xl md:text-5xl font-light tracking-tight lowercase">
//                 [mat-ter]
//               </p>
//               <p className="text-3xl md:text-5xl font-bold tracking-tighter lowercase mt-2">
//                 church.
//               </p>
//             </motion.div>

//             {/* Message */}
//             <motion.div
//               initial={{ opacity: 0, y: 80 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
//               viewport={{ once: true }}
//               className="text-left max-w-2xl lg:pl-20 pr-12 pl-10"
//             >
//               <p className="text-justify text-lg md:text-xl lg:text-2xl font-light leading-relaxed tracking-wide text-white/90">
//               MATTER Phnom Penh
//               We were empty matter without Him, yet we mattered to Him.
//               Our city — Phnom Penh — deserves to hear the Word in a way that’s real, relatable, and relevant. That’s why we made the city part of our name. Because this is our home, and it matters.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//     </>
//   );
// }


"use client";
import { motion } from "framer-motion";

export default function VocabSection() {
  return (
    <>
      <section
        id="vocab"
        className="py-32 lg:py-48 text-white overflow-hidden relative"
        style={{
          backgroundImage: `url('/images/Independence_Monument.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10">
          <div className="lg:pl-48 pl-16 flex flex-col items-start">

            {/* Title Block – Restarts every time */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}   // ← REPLAYS EVERY TIME
              className="text-left mb-20"
            >
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight lowercase mb-4">
                matter
              </h2>
              <p className="text-3xl md:text-5xl font-light tracking-tight lowercase">
                [mat-ter]
              </p>
              <p className="text-3xl md:text-5xl font-bold tracking-tighter lowercase mt-2">
                church.
              </p>
            </motion.div>

            {/* Message – Restarts every time */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 80 }}
              transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}   // ← REPLAYS EVERY TIME
              className="text-left max-w-2xl lg:pl-20 pr-12 pl-10"
            >
              <p className="text-justify text-lg md:text-xl lg:text-2xl font-light leading-relaxed tracking-wide text-white/90">
                MATTER Phnom Penh
                We were empty matter without Him, yet we mattered to Him.
                Our city — Phnom Penh — deserves to hear the Word in a way that’s real, relatable, and relevant. That’s why we made the city part of our name. Because this is our home, and it matters.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}