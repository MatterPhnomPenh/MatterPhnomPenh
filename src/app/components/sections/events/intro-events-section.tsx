// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function InitiativeHeroSection() {
//   return (
//     <section
//       id="initiative-hero"
//       className="relative w-full min-h-screen bg-black py-24 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 text-left overflow-hidden"
//     >
//       {/* Video Background */}
//       <div className="absolute inset-0 z-0">
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="w-full h-full object-cover opacity-80"
//         >
//           <source src="/videos/collective-global.mp4" type="video/mp4" />
//         </video>
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-transparent" />
//       </div>

//       {/* Animated Grid Pattern */}
//       <div className="absolute inset-0 z-1 opacity-30">
//         <div className="w-full h-full bg-[linear-gradient(rgba(35,48,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(35,48,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
//       </div>

//       {/* Main Content */}
//       <div className="mx-auto max-w-7xl relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="space-y-8"
//         >
//           {/* Main Heading with Gradient Text */}
//           <div className="space-y-4">
//             <motion.h1 
//               className="text-4xl md:text-7xl lg:text-8xl font-bold leading-tight"
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.8 }}
//             >
//               <span className="bg-white bg-clip-text text-transparent">
//                 Creative
//               </span>
//               <br />
//               <motion.span
//                 className="text-white"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.5, duration: 0.8 }}
//               >
//                 Nexus
//               </motion.span>
//             </motion.h1>
            
//             {/* Animated Subtitle */}
//             <motion.p
//               className="text-xl md:text-3xl font-light text-white/90 max-w-2xl"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.8, duration: 0.8 }}
//             >
//               Where visionary minds 
//               <motion.span
//                 className="inline-block ml-2 text-white"
//                 animate={{ rotate: [0, 10, -5, 0] }}
//                 transition={{ delay: 1.2, duration: 2, repeat: Number.POSITIVE_INFINITY }}
//               >
//                 collide
//               </motion.span>
//             </motion.p>
//           </div>

//           {/* Description */}
//           <motion.p
//             className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1, duration: 0.8 }}
//           >
//             A curated space for innovators, artists, and disruptors to 
//             connect, collaborate, and create the future together.
//           </motion.p>

//           {/* CTA Button Group */}
//           <motion.div
//             className="flex flex-col sm:flex-row gap-4 pt-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.2, duration: 0.8 }}
//           >
//             <Link href="#events">
//               <motion.button
//                 className="group relative flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium text-lg overflow-hidden"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <span className="relative z-10">Join Next Gathering</span>
//                 <motion.div
//                   className="relative z-10"
//                   animate={{ x: [0, 4, 0] }}
//                   transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
//                 >
//                   →
//                 </motion.div>
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#2330ff] to-[#8b5cf6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </motion.button>
//             </Link>
            
//             <Link href="#about">
//               <motion.button
//                 className="flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white rounded-full font-medium text-lg hover:bg-white/10 transition-colors"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Discover Our Mission
//               </motion.button>
//             </Link>
//           </motion.div>

//           {/* Scroll Indicator */}
//           <motion.div
//             className="absolute bottom-8 left-0 right-0 flex justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.5, duration: 0.8 }}
//           >
//             <motion.div
//               className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
//               animate={{ y: [0, 10, 0] }}
//               transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
//             >
//               <motion.div
//                 className="w-1 h-3 bg-white/70 rounded-full mt-2"
//                 animate={{ opacity: [1, 0, 1] }}
//                 transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
//               />
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }