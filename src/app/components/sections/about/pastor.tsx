// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import { motion, useInView } from "framer-motion";

// export default function Pastor() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section
//       id="new-event-section"
//       ref={ref}
//       className="relative w-full min-h-screen bg-black flex flex-col items-center justify-between overflow-hidden py-12"
//     >
//       {/* CONNECT text in background */}
//       <motion.h1
//         initial={{ opacity: 0, y: 20 }}
//         animate={isInView ? { opacity: 1, y: -80 } : {}}
//         transition={{ duration: 0.7 }}
//         className="absolute z-0 top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[50vw] sm:text-[15vw] font-extrabold font-sans text-white leading-none text-center pointer-events-none"
//       >
//         Pastor
//       </motion.h1>

//       {/* Image in middle */}
//       <div className="relative z-10 flex-1 flex items-center justify-center w-full max-w-[90vw] max-h-[60vh]">
//         <Image
//           src="/images/DSC04772.jpg"
//           alt="Our Pastor"
//           width={600}
//           height={1200}
//           className="object-contain w-auto h-auto opacity-100"
//           style={{ maxHeight: "100%", maxWidth: "100%" }}
//           priority
//         />
//       </div>

//       {/* Description at bottom under image */}
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.7, delay: 0.2 }}
//         className="relative z-10 text-lg sm:text-xl text-center max-w-2xl px-4 text-gray-300 leading-relaxed mt-8"
//       >
//         Our pastor is a dedicated leader who guides our congregation with wisdom, compassion, and unwavering faith. With years of experience in ministry, they inspire us to grow spiritually and serve our community. Join us in celebrating the heart and vision that define our church family.
//       </motion.p>

//       {/* Back Bar */}
//       <motion.div
//         initial={{ x: "100%", opacity: 0 }}
//         animate={isInView ? { x: 0, opacity: 1 } : {}}
//         transition={{ duration: 1.5, delay: 0.3 }}
//         style={{ zIndex: 5 }}
//         className="absolute bottom-[30%] left-1/2 transform -translate-x-1/2 w-[150%] -rotate-[8deg] bg-yellow-300 text-black font-semibold py-2 px-4 text-sm sm:text-base whitespace-nowrap rounded flex justify-center gap-6 z-20"
//       >
//         <span>BELIEVE. BELONG. BECOME.</span>
//         <span>YOU MATTER HERE</span>
//         <span>BELIEVE. BELONG. BECOME.</span>
//         <span>YOU MATTER HERE</span>
//         <span>BELIEVE. BELONG. BECOME.</span>
//         <span>YOU MATTER HERE</span>
//       </motion.div>

//       {/* Front Bar */}
//       <motion.div
//         initial={{ x: "100%", opacity: 0 }}
//         animate={isInView ? { x: 0, opacity: 1 } : {}}
//         transition={{ duration: 2, delay: 0.3 }}
//         style={{ zIndex: 5 }}
//         className="absolute bottom-[30%] left-1/2 transform -translate-x-1/2 w-[150%] -rotate-[-8deg] bg-yellow-300 text-black font-semibold py-2 px-4 text-sm sm:text-base whitespace-nowrap rounded flex justify-center gap-6 z-20"
//       >
//          <span>BELIEVE. BELONG. BECOME.</span>
//         <span>YOU MATTER HERE</span>
//         <span>BELIEVE. BELONG. BECOME.</span>
//         <span>YOU MATTER HERE</span>
//         <span>BELIEVE. BELONG. BECOME.</span>
//         <span>YOU MATTER HERE</span>
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function Pastor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="new-event-section"
      ref={ref}
      className="relative w-full min-h-screen bg-black flex flex-col items-center justify-between overflow-hidden py-12"
    >
      {/* CONNECT text in background */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: -80 } : {}}
        transition={{ duration: 0.7 }}
        className="absolute z-0 top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[50vw] sm:text-[15vw] font-extrabold font-sans text-white leading-none text-center pointer-events-none"
      >
        Pastor
      </motion.h1>

      {/* Image in middle */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full max-w-[90vw] max-h-[60vh]">
        <Image
          src="/images/DSC04772.jpg"
          alt="Our Pastor"
          width={600}
          height={1200}
          className="object-contain w-auto h-auto opacity-100"
          style={{ maxHeight: "100%", maxWidth: "100%" }}
          priority
        />
      </div>

      {/* Description at bottom under image */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-10 text-lg sm:text-xl text-center max-w-2xl px-4 text-gray-300 leading-relaxed mt-8"
      >
        Our pastor is a dedicated leader who guides our congregation with wisdom, compassion, and unwavering faith. With years of experience in ministry, they inspire us to grow spiritually and serve our community. Join us in celebrating the heart and vision that define our church family.
      </motion.p>

      {/* back Bar */}
     <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.3 }}
        style={{ zIndex: 5 }}
        className="absolute bottom-[30%] left-1/2 transform -translate-x-1/2 w-[150%] -rotate-[8deg] bg-white text-black font-semibold py-2 px-4 text-sm sm:text-base whitespace-nowrap rounded flex justify-center gap-6 z-20"
      >
        <span>BELIEVE. BELONG. BECOME.</span>
        <span>YOU MATTER HERE</span>
        <span>BELIEVE. BELONG. BECOME.</span>
        <span>YOU MATTER HERE</span>
        <span>BELIEVE. BELONG. BECOME.</span>
        <span>YOU MATTER HERE</span>
      </motion.div>

      {/* Front Bar */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 2, delay: 0.3 }}
        style={{ zIndex: 5 }}
        className="absolute bottom-[30%] left-1/2 transform -translate-x-1/2 w-[150%] -rotate-[-8deg] bg-white text-black font-semibold py-2 px-4 text-sm sm:text-base whitespace-nowrap rounded flex justify-center gap-6 z-20"
      >
         <span>BELIEVE. BELONG. BECOME.</span>
        <span>YOU MATTER HERE</span>
        <span>BELIEVE. BELONG. BECOME.</span>
        <span>YOU MATTER HERE</span>
        <span>BELIEVE. BELONG. BECOME.</span>
        <span>YOU MATTER HERE</span>
      </motion.div>
    </section>
  );
}