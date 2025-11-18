
// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { TEAM_MEMBERS } from "@/data/team";

// const AboutUsSection = React.forwardRef<HTMLElement>((props, ref) => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const scrollRef = useRef<HTMLDivElement>(null);

//   // Clone team members for infinite illusion
//   const CLONE_COUNT = 5;
//   const allMembers = isMobile
//     ? Array(CLONE_COUNT).fill(TEAM_MEMBERS).flat()
//     : TEAM_MEMBERS;

//   useEffect(() => {
//     // Detect screen width
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   // Infinite scroll logic for mobile
//   useEffect(() => {
//     if (!isMobile || !scrollRef.current) return;

//     const container = scrollRef.current;
//     let animationFrame: number;

//     // Start somewhere in the middle of cloned items to scroll "forever"
//     container.scrollLeft = container.scrollWidth / 3;

//     const scroll = () => {
//       container.scrollLeft += 0.5;

//       // If we're near the end, reset to middle to avoid stopping
//       if (container.scrollLeft >= container.scrollWidth * 0.66) {
//         container.scrollLeft = container.scrollWidth / 3;
//       }

//       animationFrame = requestAnimationFrame(scroll);
//     };

//     animationFrame = requestAnimationFrame(scroll);

//     return () => cancelAnimationFrame(animationFrame);
//   }, [isMobile]);

//   return (
//     <section
//       ref={ref}
//       className="py-32 bg-transparent relative z-10"
//     >
//       <div className="w-full">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//         <div className="px-6 sm:px-8 md:px-10 ">
//           <h1 className="text-4xl sm:text-6xl font-sans font-bold text-[#2330ff]">
//             OUR HOME TEAM
//           </h1>
//           <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
//             Meet the incredible team that leads MATTER.
//           </p>
//         </div>
//         </motion.div>

//         {/* Scrollable Team Members */}
//         <div
//           ref={scrollRef}
//           className={`${
//             isMobile
//               ? "flex overflow-x-auto space-x-2 scrollbar-hide"
//               : "grid md:grid-cols-3 md:gap-8"
//           } pb-4 md:overflow-visible`}
//         >
//           {allMembers.map((member, index) => {
//             const isHovered = hoveredIndex === index;

//             return (
//               <motion.div
//                 key={index}
//                 onMouseEnter={() => !isMobile && setHoveredIndex(index)}
//                 onMouseLeave={() => !isMobile && setHoveredIndex(null)}
//                 className="group flex-shrink-0 bg-transparent rounded-xl p-4 transition-all duration-300 w-[75%] sm:w-auto"
//                 animate={{ paddingBottom: !isMobile && isHovered ? 32 : 16 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gray-300 relative overflow-hidden rounded-full mx-auto mb-4">
//                   <Image
//                     src={member.image}
//                     alt={member.name}
//                     fill
//                     className="object-cover rounded-full transition-transform duration-300"
//                   />
//                 </div>

//                 <div className="text-center">
//                   <h3 className="font-bold text-xl sm:text-2xl text-[#2330ff]">
//                     {member.name}
//                   </h3>
//                 </div>

//                 <motion.div
//                   initial={false}
//                   animate={{
//                     height: isMobile || isHovered ? "auto" : 0,
//                     opacity: isMobile || isHovered ? 1 : 0,
//                     marginTop: isMobile || isHovered ? 12 : 0,
//                   }}
//                   transition={{ duration: 0.3 }}
//                   className="overflow-hidden text-center"
//                 >
//                   <p className="text-sm text-gray-500 font-medium">
//                     {member.role}
//                   </p>
//                   <p className="text-sm text-gray-600 mt-1">
//                     {member.description}
//                   </p>
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// });

// AboutUsSection.displayName = "AboutUsSection";
// export default AboutUsSection;
