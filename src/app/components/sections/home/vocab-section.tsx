// "use client";
// import { motion } from "framer-motion";

// export default function VocabSection() {
//   return (
//     <section
//       id="vocab"
//       className="py-32 lg:py-48 text-white overflow-hidden relative"
//       style={{
//         backgroundImage: `url('/images/Independence_Monument.jpg')`,  
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundAttachment: "fixed", // optional: parallax effect
//       }}
//     >
//     {/* // <section
//     //     id="about"
//     //     className="py-32 lg:pt-128 lg:-py-48 bg-black text-white overflow-hidden relative bg-cover bg-center bg-no-repeat bg-[url('/images/Independence_Monument.jpg')]"
//     //   > */}

//       {/* Dark overlay so text stays readable */}
//       <div className="absolute inset-0 bg-black/60" />

//       <div className="relative z-10">
//         <div className="lg:pl-48 pl-16 flex flex-col items-start">
//           {/* Title Block */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="text-left mb-20"
//           >
//             <h2 className="text-5xl md:text-7xl font-bold tracking-tight lowercase mb-4">
//               matter
//             </h2>
//             <p className="text-3xl md:text-5xl font-light tracking-tight lowercase">
//               [mat-ter]
//             </p>
//             <p className="text-3xl md:text-5xl font-bold tracking-tighter lowercase mt-2">
//               church.
//             </p>
//           </motion.div>

//           {/* Message */}
//           <motion.div
//             initial={{ opacity: 0, y: 80 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="text-left"
//           >
//             <p className="text-lg md:text-xl lg:px-24 pr-10 font-light leading-relaxed tracking-wide text-white/90 text-justify ">
//               MATTER Phnom Penh: We were empty matters without Him, yet we mattered to Him! Our city, specifically Phnom Penh; needs to hear the word the way we talk about it (relatable & relevant). That’s why we included Phnom Penh in our name.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
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
            {/* Title Block */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
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

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-left max-w-xl lg:pl-20 pr-24 pl-10"
            >
              <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed tracking-wide text-white/90">
                MATTER Phnom Penh: We were empty matters without Him, yet we mattered to Him! 
                Our city, specifically Phnom Penh; needs to hear the word the way we talk about it 
                (relatable & relevant). That’s why we included Phnom Penh in our name.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <div className="h-12 lg:h-24 bg-black" /> */}

      {/* <motion.div 
        className="h-12 lg:h-24 bg-gradient-to-r from-black via-white to-black relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </motion.div> */}

      {/* <motion.div 
  className="h-12 lg:h-24 bg-black relative overflow-hidden flex items-center justify-center"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <motion.div
    className="w-8 h-8 lg:w-12 lg:h-12 border-2 border-white/30 rounded-full"
    animate={{ 
      scale: [1, 1.2, 1],
      borderRadius: ["50%", "30%", "50%"],
      rotate: [0, 180, 360]
    }}
    transition={{ 
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
  <motion.div
    className="absolute w-6 h-6 lg:w-10 lg:h-10 border border-white/20"
    animate={{ 
      scale: [1.2, 1, 1.2],
      borderRadius: ["30%", "50%", "30%"],
      rotate: [45, 225, 405]
    }}
    transition={{ 
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.5
    }}
  />
</motion.div> */}
{/* <motion.div
  className="h-12 lg:h-24 bg-black relative overflow-hidden flex items-center justify-center"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <motion.div
    className="w-8 h-8 lg:w-12 lg:h-12 border-2 border-white/30 rounded-full"
    animate={{
      scale: [1, 1.2, 1],
      borderRadius: ["50%", "30%", "50%"],
      rotate: [0, 180, 360]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
  <motion.div
    className="absolute w-6 h-6 lg:w-10 lg:h-10 border border-white/20"
    animate={{
      scale: [1.2, 1, 1.2],
      borderRadius: ["30%", "50%", "30%"],
      rotate: [45, 225, 405]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.5
    }}
  />

  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <span className="font-black text-white text-xl lg:text-2xl tracking-tighter">
      M
    </span>
  </div>
</motion.div> */}

    </>
  );
}