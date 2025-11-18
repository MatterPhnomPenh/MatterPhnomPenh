// "use client";

// import { motion } from "framer-motion";
// import { Clock, MapPin, Users } from "lucide-react";

// export default function GatheringSection() {
//   return (
//     <section id="gathering" className="py-32 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="flex items-center gap-4 mb-6">
//               <div className="w-12 h-px bg-gray-400" />
//               <span className="text-sm font-light tracking-widest uppercase text-gray-500">Join Us</span>
//             </div>
            
//             <h2 className="text-4xl md:text-6xl font-light tracking-tight text-black mb-6">
//               Weekly
//               <br />
//               Gatherings
//             </h2>
            
//             <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
//               Every Saturday at 5 PM, we come together to connect, worship, 
//               and explore what it means to live a life that matters.
//             </p>
            
//             <div className="space-y-4 mb-8">
//               <div className="flex items-center gap-4">
//                 <Clock className="w-5 h-5 text-gray-600" />
//                 <span className="text-gray-600 font-light">Saturdays at 5:00 PM</span>
//               </div>
//               <div className="flex items-center gap-4">
//                 <MapPin className="w-5 h-5 text-gray-600" />
//                 <span className="text-gray-600 font-light">Sangkat Daeum Thkov, Phnom Penh</span>
//               </div>
//               <div className="flex items-center gap-4">
//                 <Users className="w-5 h-5 text-gray-600" />
//                 <span className="text-gray-600 font-light">All are welcome</span>
//               </div>
//             </div>
            
//             <a
//               href="/gathering"
//               className="inline-flex items-center gap-2 border border-black px-8 py-4 text-sm font-light tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
//             >
//               Plan Your Visit
//               <span>→</span>
//             </a>
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden">
//               {/* Replace with your gathering image */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <span className="text-gray-400 font-light">Gathering Image</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


