


// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Calendar, MessageCircle } from "lucide-react";

// export default function ChurchHomePage() {
//   return (
//     <main className="bg-white">
//       {/* Hero Image Section */}
//       <section className="relative h-screen bg-black">
//         <Image
//           src="/images/church-hero.jpg" // Replace with your church hero image
//           alt="Church Community Worship"
//           fill
//           className="object-cover opacity-70"
//           priority
//         />
//         <div className="absolute inset-0 bg-black/40" />
//         <div className="relative z-10 flex items-center justify-center h-full">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-center text-white px-6"
//           >
//             <h1 className="text-5xl md:text-7xl font-light mb-6">
//               Welcome Home
//             </h1>
//             <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto">
//               A community where you can belong, believe, and become who God created you to be.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a
//                 href="/visit"
//                 className="border border-white px-8 py-4 text-sm font-light tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
//               >
//                 Plan Your Visit
//               </a>
//               <a
//                 href="#contact"
//                 className="border border-white/50 px-8 py-4 text-sm font-light tracking-widest uppercase hover:border-white transition-all duration-300"
//               >
//                 Get In Touch
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Image Gallery Section */}
//       <section className="py-32 bg-white">
//         <div className="max-w-6xl mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-20"
//           >
//             <div className="flex justify-center mb-8">
//               <div className="w-16 h-px bg-gray-300" />
//             </div>
//             <h2 className="text-4xl md:text-6xl font-light tracking-tight text-black mb-6">
//               Life Together
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
//               Capturing moments of worship, community, and transformation in our church family.
//             </p>
//           </motion.div>

//           {/* Image Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
//             {/* Image 1 */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="group"
//             >
//               <div className="relative h-96 overflow-hidden mb-4">
//                 <Image
//                   src="/images/worship-service.jpg" // Replace with worship service image
//                   alt="Worship Service"
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-700"
//                 />
//               </div>
//               <div className="text-center">
//                 <h3 className="text-lg font-light text-black mb-2">Worship Gatherings</h3>
//                 <p className="text-gray-600 text-sm">Experience God's presence in our weekly services</p>
//               </div>
//             </motion.div>

//             {/* Image 2 */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="group"
//             >
//               <div className="relative h-96 overflow-hidden mb-4">
//                 <Image
//                   src="/images/community-groups.jpg" // Replace with community groups image
//                   alt="Community Groups"
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-700"
//                 />
//               </div>
//               <div className="text-center">
//                 <h3 className="text-lg font-light text-black mb-2">Community Life</h3>
//                 <p className="text-gray-600 text-sm">Building relationships that last beyond Sunday</p>
//               </div>
//             </motion.div>

//             {/* Image 3 */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="group"
//             >
//               <div className="relative h-96 overflow-hidden mb-4">
//                 <Image
//                   src="/images/serving-community.jpg" // Replace with serving image
//                   alt="Serving the Community"
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-700"
//                 />
//               </div>
//               <div className="text-center">
//                 <h3 className="text-lg font-light text-black mb-2">Serving Together</h3>
//                 <p className="text-gray-600 text-sm">Making a difference in our city and beyond</p>
//               </div>
//             </motion.div>
//           </div>

//           {/* CTA */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             className="text-center border-t border-gray-200 pt-12"
//           >
//             <p className="text-gray-600 font-light mb-8">
//               Ready to experience community for yourself?
//             </p>
//             <a
//               href="#contact"
//               className="inline-flex items-center gap-2 border border-black px-8 py-4 text-sm font-light tracking-widest text-black uppercase hover:bg-black hover:text-white transition-all duration-300"
//             >
//               Join Us This Weekend
//               <span className="text-lg">→</span>
//             </a>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   );
// }