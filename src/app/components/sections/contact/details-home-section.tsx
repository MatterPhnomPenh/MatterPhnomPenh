

// "use client";

// import { motion } from "framer-motion";
// import { Play, Users, Heart, Star } from "lucide-react";

// const initiatives = [
//   {
//     icon: Users,
//     title: "Community Building",
//     description: "Creating spaces where people connect, grow, and support each other in meaningful ways.",
//     stats: "500+ Members",
//     color: "from-blue-50 to-white"
//   },
//   {
//     icon: Heart,
//     title: "Social Impact",
//     description: "Addressing real needs in our community through targeted programs and outreach.",
//     stats: "12 Projects",
//     color: "from-green-50 to-white"
//   },
//   {
//     icon: Star,
//     title: "Personal Growth",
//     description: "Helping individuals discover their purpose and develop their potential.",
//     stats: "200+ Stories",
//     color: "from-purple-50 to-white"
//   },
//   {
//     icon: Play,
//     title: "Digital Presence",
//     description: "Reaching people where they are with meaningful content and conversations.",
//     stats: "50K+ Reach",
//     color: "from-orange-50 to-white"
//   }
// ];

// export default function OurWorkSection() {
//   return (
//     <section className="bg-white min-h-screen py-32">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           <div className="flex justify-center mb-8">
//             <div className="w-16 h-px bg-gray-300" />
//           </div>
//           <h2 className="text-5xl md:text-7xl font-light tracking-tight text-black mb-6">
//             Our Work
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
//             Building meaningful impact through community, connection, and purpose-driven initiatives.
//           </p>
//         </motion.div>

//         {/* Initiatives Grid */}
//         <div className="grid md:grid-cols-2 gap-8 mb-20">
//           {initiatives.map(({ icon: Icon, title, description, stats, color }, index) => (
//             <motion.div
//               key={title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className={`p-8 bg-gradient-to-br ${color} border border-gray-100 group hover:border-gray-300 transition-all duration-500`}
//             >
//               <div className="flex items-start justify-between mb-6">
//                 <div className="w-12 h-12 bg-black flex items-center justify-center">
//                   <Icon className="w-6 h-6 text-white" />
//                 </div>
//                 <span className="text-2xl font-light text-gray-400 group-hover:text-black transition-colors">
//                   {stats}
//                 </span>
//               </div>
//               <h3 className="text-2xl font-light text-black mb-4">{title}</h3>
//               <p className="text-gray-600 font-light leading-relaxed mb-6">{description}</p>
//               <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-black transition-colors">
//                 <span>Learn more</span>
//                 <span className="transform group-hover:translate-x-1 transition-transform">→</span>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="text-center border-t border-gray-200 pt-12"
//         >
//           <p className="text-gray-600 font-light mb-8">
//             Interested in partnering or getting involved?
//           </p>
//           <a
//             href="/contact"
//             className="inline-flex items-center gap-2 border border-black px-8 py-4 text-sm font-light tracking-widest text-black uppercase hover:bg-black hover:text-white transition-all duration-300"
//           >
//             Partner With Us
//             <span className="text-lg">→</span>
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }