// "use client";

// import { motion } from "framer-motion";
// import { ChevronDown } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <section className="min-h-screen bg-white flex items-center justify-center px-6 relative">
//       <div className="max-w-6xl mx-auto text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="space-y-8"
//         >
//           <div className="flex justify-center mb-8">
//             <div className="w-16 h-px bg-gray-300" />
//           </div>
          
//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-black mb-6">
//             YOU MATTER
//             <br />
//             <span className="text-gray-600">HERE</span>
//           </h1>
          
//           <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
//             A community where every person has value, purpose, and a place to belong.
//           </p>
          
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="pt-12"
//           >
//             <a
//               href="#about"
//               className="inline-flex items-center gap-2 border border-black px-8 py-4 text-sm font-light tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
//             >
//               Discover More
//               <ChevronDown className="w-4 h-4" />
//             </a>
//           </motion.div>
//         </motion.div>
//       </div>
      
//       {/* Background Elements */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <div className="w-px h-16 bg-gray-300 mx-auto" />
//         </motion.div>
//       </div>
//     </section>
//   );
// }