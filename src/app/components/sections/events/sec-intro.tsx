

// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import { motion, useInView } from "framer-motion";

// export default function ConnectSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section
//       id="new-event-section"
//       ref={ref}
//       className="relative w-full min-h-screen bg-[#2330ff] flex items-center justify-center overflow-hidden py-48"
//     >
//       {/* CONNECT text in background */}
//       <motion.h1
//         initial={{ opacity: 0, y: 20 }}
//         animate={isInView ? { opacity: 0.1, y: 0 } : {}}
//         transition={{ duration: 0.7 }}
//         className="absolute z-0 top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[20vw] sm:text-[15vw] font-extrabold font-sans text-white leading-none text-center pointer-events-none"
//       >
//         MATTER
//       </motion.h1>

//       {/* Foreground image */}
//       <div className="relative z-10 max-w-[90vw] max-h-[90vh]">
//         <Image
//           src="/images/DSC04772.jpg"
//           alt="Event attendees connecting"
//           width={600}
//           height={1200}
//           className="object-contain w-full h-auto opacity-100"
//           style={{ maxHeight: "90vh", maxWidth: "90vw" }}
//           priority
//         />
//       </div>

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


