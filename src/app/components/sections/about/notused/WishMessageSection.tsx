

// "use client";

// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// export default function WishMessageSection() {
//   return (
//     <section className="relative w-full px-10 py-20 flex justify-center items-center">
//       <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10 relative z-10">
//         {/** Section Header */}
//        <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-8">
//             Our Latest Talk
//           </h2>
          
//           <p className="text-lg md:text-xl font-light leading-relaxed tracking-wide text-white/90">
//             Description about the talk, meaning conversations blah blah bla.
//           </p>
//         </motion.div>

//         {/* MP4 Video Thumbnail */}
//         <div className="w-full md:w-1/2 aspect-video relative overflow-hidden rounded-lg shadow-lg">
//           <a
//             href="https://youtu.be/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block w-full h-full"
//           >
//             <video
//               src="/videos/wishes.mp4"
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="w-full h-full object-cover rounded-xl"
//             />
//           </a>
//         </div>

//         {/* Text Content */}
//         <div className="w-full md:w-1/2 text-white space-y-6 text-center md:text-left z-20 relative">
//           <p className="uppercase text-sm tracking-widest font-semibold opacity-80">Wish Message:</p>
//           <h2 className="text-4xl font-extrabold">You are not alone; you have us</h2>
//           <p className="text-lg font-semibold opacity-90">Matter Team</p>

//           <a
//             href="https://youtu.be/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center justify-center border border-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-white hover:text-[#2330ff] transition"
//           >
//             Watch Now <ArrowRight className="ml-2 w-4 h-4" />
//           </a>
//         </div>
//       </div>
//     </section>
    
//   );
// }