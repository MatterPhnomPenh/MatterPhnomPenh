

// "use client";

// import { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import { motion, useInView, AnimatePresence } from "framer-motion";

// const albums = [
//   { id: 1, title: "", image: "/o0v2.png" },
//   { id: 2, title: "", image: "/o1v2.png" },
//   { id: 3, title: "", image: "/o2v2.png" },
// ];

// export default function MatterFest() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const nextIndex = (currentImageIndex + 1) % albums.length;

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const nextImage = () => setCurrentImageIndex(nextIndex);

//   // Unique exit animations - different motions for variety
//   const exitAnimations = [
//     { 
//       x: -1000, 
//       y: -300,
//       rotate: -45,
//       scale: 0.5,
//       opacity: 0,
//       transition: { 
//         duration: 1.2,
//         ease: [0.4, 0, 0.2, 1]
//       } 
//     },
//     { 
//       x: 1000, 
//       y: 200,
//       rotate: 30,
//       scale: 0.6,
//       opacity: 0,
//       transition: { 
//         duration: 1.1,
//         ease: [0.4, 0, 0.2, 1]
//       } 
//     },
//     { 
//       x: -800, 
//       y: -200,
//       rotate: -25,
//       scale: 0.4,
//       opacity: 0,
//       transition: { 
//         duration: 1.3,
//         ease: [0.4, 0, 0.2, 1]
//       } 
//     }
//   ];

//   const albumVariants = {
//     hidden: { 
//       opacity: 0, 
//       scale: 0.8, 
//       rotateY: -45,
//       x: 300,
//       y: 100
//     },
//     visible: { 
//       opacity: 1, 
//       scale: 1, 
//       rotateY: 0,
//       x: 0,
//       y: 0,
//       transition: { 
//         type: "spring", 
//         stiffness: 100, 
//         damping: 15,
//         duration: 0.8
//       } 
//     },
//     exit: (custom: number) => exitAnimations[custom]
//   };

//   const textVariants = {
//     hidden: { opacity: 0, x: -30 },
//     visible: { 
//       opacity: 1, 
//       x: 0, 
//       transition: { 
//         delay: 0.2, 
//         duration: 0.7,
//         ease: "easeOut"
//       } 
//     },
//   };

//   const buttonVariants = {
//     rest: { 
//       scale: 1,
//       background: "linear-gradient(135deg, #2c2c2c 0%, #000000 100%)"
//     },
//     hover: { 
//       scale: 1.05,
//       background: "linear-gradient(135deg, #000000 0%, #2c2c2c 100%)",
//       boxShadow: "0 10px 25px rgba(0, 0, 0, 0.6)"
//     },
//     tap: { scale: 0.98 }
//   };

//   const festRef = useRef(null);
//   const festInView = useInView(festRef, { once: true, margin: isMobile ? "-50px" : "-100px" });

//   const festVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: isMobile ? -40 : -80,
//       scale: 0.8
//     },
//     visible: { 
//       opacity: 0.4, 
//       y: 0, 
//       scale: 1,
//       transition: { 
//         duration: 1, 
//         ease: "easeOut",
//         delay: 0.1
//       } 
//     },
//   };

//   const descriptionVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: 0.5,
//         duration: 0.6
//       }
//     }
//   };

//   return (
//     <section id="fest" className="relative flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden px-4 md:px-8 py-8 md:py-24">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
//       </div>
//       <div className="text-center mb-16">    
//         <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 tracking-tight">
//           Matter Fest
//         </h1>
//         <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
//           Building faith, hope, and love in our community through Christ-centered ministry
//         </p>
//       </div>

//       <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl text-center md:text-left relative z-10">
//         {/* Text Section */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={textVariants}
//           className="w-full md:w-2/5 md:pr-12 z-10"
//         >
//           <h1 className={`${isMobile ? "text-4xl" : "text-5xl lg:text-6xl"} font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent`}>
//             Let's Connect Because Every Voice Matters
//           </h1>
          
//           <motion.p 
//             variants={descriptionVariants}
//             className={`${isMobile ? "text-base" : "text-lg lg:text-xl"} text-gray-300 leading-relaxed mb-8`}
//           >
//             Whether you're reaching out about the festival, volunteering, or press, this is where meaningful conversations begin.
//           </motion.p>
          
//           <motion.button
//             variants={buttonVariants}
//             initial="rest"
//             whileHover="hover"
//             whileTap="tap"
//             className="text-white uppercase px-8 py-4 text-lg rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm border border-gray-600/50"
//           >
//             Book Now
//           </motion.button>
//         </motion.div>

//         {/* Album Stack - Modern 3D Style */}
//         <div
//           className={`relative ${isMobile ? "w-[280px]" : "w-[350px] lg:w-[450px]"} aspect-square mt-12 md:mt-0 z-10`}
//         >
//           {/* Back Image - 3D perspective */}
//           <motion.div
//             initial={{ rotateY: -15, rotateX: 5, x: isMobile ? -10 : -30, y: isMobile ? 10 : 20, opacity: 0.6 }}
//             animate={{ rotateY: -15, rotateX: 5, x: isMobile ? -10 : -30, y: isMobile ? 10 : 20, opacity: 0.6 }}
//             className="absolute w-full h-full origin-center"
//             style={{ perspective: 1000 }}
//           >
//             <div className="relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-600/40">
//               <Image
//                 src={albums[nextIndex].image}
//                 alt=""
//                 fill
//                 priority
//                 className="object-cover mix-blend-overlay"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//             </div>
//           </motion.div>

//           {/* Middle Image */}
//           <motion.div
//             initial={{ rotateY: -8, rotateX: 3, x: isMobile ? -5 : -15, y: isMobile ? 5 : 10, opacity: 0.8 }}
//             animate={{ rotateY: -8, rotateX: 3, x: isMobile ? -5 : -15, y: isMobile ? 5 : 10, opacity: 0.8 }}
//             className="absolute w-full h-full origin-center"
//             style={{ perspective: 1000 }}
//           >
//             <div className="relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/40 to-black/40 backdrop-blur-sm border border-gray-500/40">
//               <Image
//                 src={albums[(nextIndex + 1) % albums.length].image}
//                 alt=""
//                 fill
//                 className="object-cover mix-blend-overlay"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//             </div>
//           </motion.div>

//           {/* Front Image - Interactive */}
//           <AnimatePresence mode="wait" custom={currentImageIndex}>
//             <motion.div
//               key={currentImageIndex}
//               onClick={nextImage}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               custom={currentImageIndex}
//               variants={albumVariants}
//               className="absolute w-full h-full cursor-pointer origin-center"
//               style={{ perspective: 1000 }}
//               whileHover={{ 
//                 scale: isMobile ? 1.02 : 1.03,
//                 rotateY: 5,
//                 transition: { type: "spring", stiffness: 300, damping: 20 }
//               }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm">
//                 <Image 
//                   src={albums[currentImageIndex].image} 
//                   alt="" 
//                   fill 
//                   className="object-cover" 
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
//                 {/* Interactive overlay */}
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[1px]">
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     whileHover={{ scale: 1 }}
//                     className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
//                   >
//                     <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </motion.div>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Modern Fest Title with Description */}
//       <motion.div
//         ref={festRef}
//         variants={festVariants}
//         initial="hidden"
//         animate={festInView ? "visible" : "hidden"}
//         className={`absolute ${isMobile ? "top-12 left-1/2 -translate-x-1/2 text-center" : "top-8 right-8 lg:right-12"} ${isMobile ? "text-[70px]" : "text-[140px] lg:text-[180px]"} font-black text-white/30 leading-none select-none z-0`}
//       >
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={festInView ? { opacity: 0.6 } : { opacity: 0 }}
//           transition={{ delay: 0.8 }}
//           className={`${isMobile ? "text-xs mt-2" : "text-sm lg:text-base mt-4"} font-light text-white max-w-[200px] mx-auto`}
//         >
//           M
//         </motion.div>
//       </motion.div>

//       {/* Progress indicator */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
//         {albums.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentImageIndex(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               index === currentImageIndex 
//                 ? 'bg-white scale-110' 
//                 : 'bg-white/30 hover:bg-white/50'
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }


// // "use client";

// // import { useState, useRef, useEffect } from "react";
// // import Image from "next/image";
// // import { motion, useInView, AnimatePresence } from "framer-motion";

// // const albums = [
// //   { 
// //     id: 1, 
// //     title: "Opening Ceremony", 
// //     image: "/o0v2.png",
// //     desc: "The grand start to Matter Fest with live music and community gathering under the evening lights."
// //   },
// //   { 
// //     id: 2, 
// //     title: "Worship Night", 
// //     image: "/o1v2.png",
// //     desc: "An evening of praise and reflection under the stars, fostering deep spiritual connections."
// //   },
// //   { 
// //     id: 3, 
// //     title: "Community Outreach", 
// //     image: "/o2v2.png",
// //     desc: "Volunteers making a difference through hands-on service projects that build lasting hope."
// //   },
// // ];

// // export default function MatterFest() {
// //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
// //   const [isMobile, setIsMobile] = useState(false);
// //   const [isExpanded, setIsExpanded] = useState(false);

// //   useEffect(() => {
// //     const checkMobile = () => setIsMobile(window.innerWidth < 768);
// //     checkMobile();
// //     window.addEventListener("resize", checkMobile);
// //     return () => window.removeEventListener("resize", checkMobile);
// //   }, []);

// //   const toggleExpand = (index = currentImageIndex) => {
// //     setCurrentImageIndex(index);
// //     setIsExpanded(!isExpanded);
// //   };

// //   // Fresh entry animations - subtle wave and glow
// //   const entryAnimations = [
// //     { 
// //       pathLength: 1,
// //       strokeDashoffset: [0, 1],
// //       opacity: [0, 1],
// //       scale: [0.9, 1],
// //       transition: { 
// //         duration: 0.8,
// //         ease: "easeInOut"
// //       } 
// //     },
// //     { 
// //       y: [-50, 0],
// //       rotate: [5, 0],
// //       opacity: [0.5, 1],
// //       transition: { 
// //         duration: 0.9,
// //         ease: [0.25, 0.46, 0.45, 0.94]
// //       } 
// //     },
// //     { 
// //       x: [50, 0],
// //       skewX: [-10, 0],
// //       opacity: [0.7, 1],
// //       transition: { 
// //         duration: 0.7,
// //         ease: [0.68, -0.55, 0.265, 1.55]
// //       } 
// //     }
// //   ];

// //   const textVariants = {
// //     hidden: { opacity: 0, y: 30, skewY: 5 },
// //     visible: { 
// //       opacity: 1, 
// //       y: 0, 
// //       skewY: 0,
// //       transition: { 
// //         delay: 0.3, 
// //         duration: 0.8,
// //         ease: [0.34, 1.56, 0.64, 1]
// //       } 
// //     },
// //   };

// //   const buttonVariants = {
// //     rest: { 
// //       scale: 1,
// //       background: "linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)"
// //     },
// //     hover: { 
// //       scale: 1.08,
// //       background: "linear-gradient(135deg, #3730a3 0%, #1e3a8a 100%)",
// //       boxShadow: "0 8px 32px rgba(59, 130, 246, 0.4)"
// //     },
// //     tap: { scale: 0.96 }
// //   };

// //   const festRef = useRef(null);
// //   const festInView = useInView(festRef, { once: true, margin: isMobile ? "-20px" : "-50px" });

// //   const festVariants = {
// //     hidden: { 
// //       opacity: 0, 
// //       x: isMobile ? 0 : 100,
// //       rotate: 10
// //     },
// //     visible: { 
// //       opacity: 0.3, 
// //       x: 0, 
// //       rotate: 0,
// //       transition: { 
// //         duration: 1.2, 
// //         ease: [0.22, 1, 0.36, 1],
// //         delay: 0.2
// //       } 
// //     },
// //   };

// //   const descriptionVariants = {
// //     hidden: { opacity: 0, x: -20 },
// //     visible: {
// //       opacity: 1,
// //       x: 0,
// //       transition: {
// //         delay: 0.6,
// //         duration: 0.7
// //       }
// //     }
// //   };

// //   const currentAlbum = albums[currentImageIndex];

// //   return (
// //     <section id="fest" className="relative flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-tr from-indigo-900 via-purple-900 to-blue-900 text-white overflow-hidden px-4 md:px-8 py-8 md:py-24">
// //       {/* Dynamic geometric background */}
// //       <div className="absolute inset-0 overflow-hidden">
// //         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.2)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.2)_0%,transparent_50%)]"></div>
// //         <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-500/10 rounded-full mix-blend-soft-light filter blur-3xl animate-ping"></div>
// //         <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-400/10 rounded-full mix-blend-soft-light filter blur-3xl animate-ping delay-1000"></div>
// //       </div>
      
// //       <div className="text-center mb-12 z-20 relative">    
// //         <h1 className="text-4xl md:text-6xl font-sans font-extrabold text-white mb-4 tracking-wider">
// //           Matter Fest
// //         </h1>
// //         <p className="text-lg text-indigo-200 max-w-xl mx-auto leading-loose">
// //           Igniting passion, unity, and inspiration within our community through transformative experiences
// //         </p>
// //       </div>

// //       <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl text-center lg:text-left relative z-20 gap-8 lg:gap-0">
// //         {/* Text Section - Floating Card Style */}
// //         <motion.div
// //           initial="hidden"
// //           animate="visible"
// //           variants={textVariants}
// //           className="w-full lg:w-1/2 lg:pl-16 z-10"
// //         >
// //           <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-indigo-500/20 shadow-xl">
// //             <h2 className={`${isMobile ? "text-3xl" : "text-4xl xl:text-5xl"} font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent`}>
// //               Join the Matter Fest Journey
// //             </h2>
            
// //             <motion.p 
// //               variants={descriptionVariants}
// //               className={`${isMobile ? "text-sm" : "text-base xl:text-lg"} text-indigo-200 leading-relaxed mb-8`}
// //             >
// //               Experience faith, hope, and love in action. Whether you're here to worship, serve, or simply connect, Matter Fest is where hearts unite and stories unfold.
// //             </motion.p>
            
// //             <motion.button
// //               variants={buttonVariants}
// //               initial="rest"
// //               whileHover="hover"
// //               whileTap="tap"
// //               className="text-white uppercase px-6 py-3 text-base rounded-2xl font-medium transition-all duration-200 border border-cyan-400/30 hover:border-cyan-400/50"
// //             >
// //               Join the Fest
// //             </motion.button>
// //           </div>
// //         </motion.div>

// //         {/* Floating Image Gallery - Orbit Style */}
// //         <div
// //           className={`relative transition-all duration-500 ${isMobile ? "w-[300px]" : "w-[400px] xl:w-[500px]"} aspect-square z-10 ${isExpanded ? 'w-full min-h-[70vh] max-w-4xl mx-auto' : ''}`}
// //         >
// //           <AnimatePresence mode="wait">
// //             {isExpanded ? (
// //               <motion.div
// //                 key="expanded"
// //                 initial={{ opacity: 0, scale: 0.8 }}
// //                 animate={{ opacity: 1, scale: 1 }}
// //                 exit={{ opacity: 0, scale: 0.8 }}
// //                 onClick={() => toggleExpand()}
// //                 className="relative w-full h-full cursor-pointer rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-md flex flex-col"
// //                 style={{ background: 'linear-gradient(135deg, rgba(30,58,138,0.8) 0%, rgba(55,48,163,0.8) 100%)' }}
// //                 transition={{ duration: 0.4, ease: "easeInOut" }}
// //               >
// //                 <div className="relative flex-1 overflow-hidden">
// //                   <Image
// //                     src={currentAlbum.image}
// //                     alt={currentAlbum.title}
// //                     fill
// //                     className="object-cover"
// //                   />
// //                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
// //                 </div>
// //                 <div className="p-8 flex-0">
// //                   <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{currentAlbum.title}</h3>
// //                   <p className="text-indigo-200 text-sm md:text-base leading-relaxed">{currentAlbum.desc}</p>
// //                 </div>
// //                 <button
// //                   onClick={(e) => { e.stopPropagation(); toggleExpand(); }}
// //                   className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
// //                 >
// //                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //                   </svg>
// //                 </button>
// //               </motion.div>
// //             ) : (
// //               <motion.div
// //                 key="gallery"
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 exit={{ opacity: 0, scale: 0.9 }}
// //                 className="relative w-full h-full"
// //                 transition={{ duration: 0.3 }}
// //               >
// //                 {/* Orbit Path - Subtle Ring */}
// //                 <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-spin-slow opacity-30 pointer-events-none"></div>

// //                 {/* Orbiting Images - Circular Motion */}
// //                 {albums.map((album, index) => (
// //                   <motion.div
// //                     key={album.id}
// //                     className="absolute w-3/5 h-3/5 rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-md cursor-pointer"
// //                     style={{
// //                       left: '50%',
// //                       top: '50%',
// //                       transform: `translate(-50%, -50%) rotate(${index * 120}deg) translateX(60%) rotate(${-index * 120}deg)`,
// //                     }}
// //                     initial={{ opacity: 0, scale: 0.5 }}
// //                     animate={{ 
// //                       opacity: index === currentImageIndex ? 1 : 0.4,
// //                       scale: index === currentImageIndex ? 1 : 0.8,
// //                       rotate: index * 120 + (currentImageIndex * 360 / albums.length),
// //                       transition: { 
// //                         duration: 1.5, 
// //                         ease: "easeInOut",
// //                         delay: index * 0.2 
// //                       }
// //                     }}
// //                     onClick={() => toggleExpand(index)}
// //                     whileHover={{ scale: 1.1, zIndex: 100 }}
// //                   >
// //                     <Image
// //                       src={album.image}
// //                       alt={album.title}
// //                       fill
// //                       className="object-cover"
// //                     />
// //                     <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
// //                   </motion.div>
// //                 ))}

// //                 {/* Central Glow */}
// //                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
// //                   <motion.div
// //                     animate={{ 
// //                       scale: [1, 1.2, 1],
// //                       opacity: [0.5, 0.8, 0.5],
// //                     }}
// //                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
// //                     className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 blur-xl opacity-40"
// //                   />
// //                 </div>
// //               </motion.div>
// //             )}
// //           </AnimatePresence>
// //         </div>
// //       </div>

// //       {/* Floating Fest Element */}
// //       <motion.div
// //         ref={festRef}
// //         variants={festVariants}
// //         initial="hidden"
// //         animate={festInView ? "visible" : "hidden"}
// //         className={`absolute ${isMobile ? "top-20 left-1/2 -translate-x-1/2 text-center" : "top-16 left-8 lg:left-16"} ${isMobile ? "text-[80px]" : "text-[160px] xl:text-[200px]"} font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text leading-none select-none z-5`}
// //       >
// //         <motion.div 
// //           initial={{ opacity: 0 }}
// //           animate={festInView ? { opacity: 0.7 } : { opacity: 0 }}
// //           transition={{ delay: 1 }}
// //           className={`${isMobile ? "text-sm mt-1" : "text-base xl:text-lg mt-3"} font-medium text-indigo-300 max-w-[250px] mx-auto`}
// //         >
// //           Festify
// //         </motion.div>
// //       </motion.div>

// //       {/* Orbital Indicators - Hidden when expanded */}
// //       {!isExpanded && (
// //         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
// //           {albums.map((_, index) => (
// //             <motion.button
// //               key={index}
// //               onClick={() => toggleExpand(index)}
// //               className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
// //                 index === currentImageIndex 
// //                   ? 'bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50' 
// //                   : 'bg-indigo-500/40 hover:bg-indigo-500/60'
// //               }`}
// //               whileHover={{ scale: 1.3 }}
// //               whileTap={{ scale: 0.9 }}
// //             />
// //           ))}
// //         </div>
// //       )}
// //     </section>
// //   );
// // }