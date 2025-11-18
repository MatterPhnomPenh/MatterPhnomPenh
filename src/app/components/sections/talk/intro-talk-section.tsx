// // "use client";
// // import { ChevronDown } from 'lucide-react';

// // export default function BlogIntroSection() {
// //   return (
// //     <section
// //       id="blog-intro"
// //       className="relative w-full bg-black py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 text-left overflow-hidden"
// //     >
// //       <div className="mx-auto px-4 relative z-10">
// //         <div className="space-y-6">
// //           <h1 className="text-3xl md:text-5xl font-sans font-bold text-white leading-tight">
// //             Welcome to Our Talk
// //           </h1>
// //           <p className="text-xl md:text-2xl font-sans text-gray-100 text-justify leading-relaxed">
// //             This is a space where your voice counts, your presence matters, 
// //             and you are always seen. In a world that moves fast, we slow down 
// //             to remind you that you truly matter here.
// //           </p>
// //           <p className="text-lg text-gray-400 leading-relaxed">
// //             Discover thought-provoking articles, inspiring stories, and practical 
// //             insights that matter to you. Join our community of readers who value 
// //             meaningful content and authentic conversations.
// //           </p>
// //         </div>
        
// //         <div className="mt-12 flex items-center space-x-4">
// //           <a
// //             href="#details-talk"
// //             className="inline-flex items-center text-white no-underline hover:text-black transition-colors font-medium"
// //           >
// //             Explore Latest Posts
// //             <ChevronDown className="w-5 h-5 ml-2 animate-bounce" />
// //           </a>
// //           <span className="text-white">|</span>
// //           <a
// //             href="#subscribe"
// //             className="text-white no-underline hover:text-red-500 transition-colors"
// //           >
// //             Subscribe for Updates
// //           </a>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";
// import { ChevronDown } from 'lucide-react';
// import { motion } from 'framer-motion';

// export default function BlogIntroSection() {
//   return (
//     <section
//       id="blog-intro"
//       className="relative w-full bg-white py-24 md:py-32 px-4 sm:px-6 md:px-8 text-left overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="space-y-8 max-w-4xl"
//         >
//           {/* Minimal header decoration */}
//           <div className="flex items-center gap-4 mb-8">
//             <div className="w-12 h-0.5 bg-black"></div>
//             <span className="text-sm font-medium tracking-widest text-gray-500 uppercase">
//               Welcome
//             </span>
//           </div>
          
//           <h1 className="text-5xl md:text-7xl font-light tracking-tight text-black leading-tight">
//             Our Talk
//           </h1>
          
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light"
//           >
//             A space where your voice counts, your presence matters, 
//             and you are always seen. In a world that moves fast, we slow down 
//             to remind you that you truly matter here.
//           </motion.p>
          
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-lg text-gray-500 leading-relaxed font-light"
//           >
//             Discover inspiring videos, meaningful conversations, and practical 
//             insights that matter to you.
//           </motion.p>
//         </motion.div>
        
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="mt-16 flex flex-col sm:flex-row items-center gap-8"
//         >
//           <a
//             href="#details-talk"
//             className="inline-flex items-center gap-3 text-black border border-black px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300 group"
//           >
//             Watch Videos
//             <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
//           </a>
          
//           <a
//             href="#subscribe"
//             className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300 text-sm font-medium uppercase tracking-widest"
//           >
//             Stay Updated
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }