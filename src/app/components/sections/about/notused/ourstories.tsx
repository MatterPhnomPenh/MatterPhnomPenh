
// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";

// interface PassCardProps {
//   title: string;
//   subtitle: string;
//   image: string;
//   bgColor: string;
//   index: number;
// }

// const PassCard = ({ title, subtitle, image, bgColor, index }: PassCardProps) => {
//   // Different entrance animations based on card position
//   const getCardVariants = (index: number) => {
//     switch (index) {
//       case 0: // Left card - from bottom left
//         return {
//           hidden: { 
//             opacity: 0, 
//             y: 100,
//             x: -100,
//             rotate: -5 
//           },
//           visible: { 
//             opacity: 1, 
//             y: 0,
//             x: 0,
//             rotate: 0,
//             transition: {
//               duration: 0.8,
//               delay: index * 0.2,
//               ease: "easeOut"
//             }
//           }
//         };
//       case 1: // Center card - from bottom center
//         return {
//           hidden: { 
//             opacity: 0, 
//             y: 100,
//             scale: 0.8 
//           },
//           visible: { 
//             opacity: 1, 
//             y: 0,
//             scale: 1,
//             transition: {
//               duration: 0.8,
//               delay: index * 0.2,
//               ease: "easeOut"
//             }
//           }
//         };
//       case 2: // Right card - from bottom right
//         return {
//           hidden: { 
//             opacity: 0, 
//             y: 100,
//             x: 100,
//             rotate: 5 
//           },
//           visible: { 
//             opacity: 1, 
//             y: 0,
//             x: 0,
//             rotate: 0,
//             transition: {
//               duration: 0.8,
//               delay: index * 0.2,
//               ease: "easeOut"
//             }
//           }
//         };
//       default:
//         return {
//           hidden: { opacity: 0, y: 60 },
//           visible: { 
//             opacity: 1, 
//             y: 0,
//             transition: { duration: 0.7 }
//           }
//         };
//     }
//   };

//   const variants = getCardVariants(index);

//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-100px" }}
//       variants={variants}
//       whileHover={{
//         y: -8,
//         scale: 1.02,
//         transition: { duration: 0.3 },
//       }}
//       className="group cursor-pointer"
//     >
//       <Link href="#" className="block">
//         <div className="overflow-hidden rounded-3xl shadow-xl bg-white">
//           {/* Image */}
//           <div className="relative h-64 md:h-72 w-full">
//             <Image
//               src={image}
//               alt={title}
//               fill
//               className="object-cover transition-transform duration-700 group-hover:scale-105"
//             />
//           </div>

//           {/* Colored Header */}
//           <div className={`px-6 py-4 ${bgColor}`}>
//             <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight">
//               {title}
//             </h3>
//             <p className="text-white/90 text-sm md:text-base mt-1 font-medium">
//               {subtitle}
//             </p>
//           </div>
//         </div>
//       </Link>
//     </motion.div>
//   );
// };

// export default function ExperiencePage() {
//   const passCards = [
//     {
//       title: "General Admission",
//       subtitle: "GA Plus · Next Gen",
//       image: "/about.jpg", // Replace with your image path
//       bgColor: "bg-gradient-to-r from-purple-500 to-purple-600",
//     },
//     {
//       title: "Family Pack",
//       subtitle: "Ticket Pack (5+) · VousCon x The Assembly",
//       image: "/about.jpg",
//       bgColor: "bg-gradient-to-r from-green-500 to-emerald-600",
//     },
//     {
//       title: "10+ Guests",
//       subtitle: "20+ Guests · 30+ Guests",
//       image: "/about.jpg",
//       bgColor: "bg-gradient-to-r from-amber-600 to-amber-700",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-6xl md:text-8xl font-black text-gray-900 uppercase tracking-tight mb-4">
//             EXPERIENCE
//           </h1>
//           <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//             CHOOSE YOUR PASS TYPE & CUSTOMIZE YOUR TICKET WITH OTHER PERKS
//           </p>
//         </motion.div>

//         {/* Pass Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//           {passCards.map((card, index) => (
//             <PassCard
//               key={card.title}
//               title={card.title}
//               subtitle={card.subtitle}
//               image={card.image}
//               bgColor={card.bgColor}
//               index={index}
//             />
//           ))}
//         </div>

//         {/* Tab Navigation Bar */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="flex justify-center"
//         >
//           <div className="inline-flex bg-white/80 backdrop-blur-sm rounded-full shadow-lg p-2 gap-2">
//             <div className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-full flex items-center gap-2">
//               <span className="text-lg">PASS TYPES</span>
//               <span className="text-2xl">→</span>
//             </div>
//             <div className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full flex items-center gap-2">
//               <span className="text-lg">BUNDLES</span>
//               <span className="text-2xl">→</span>
//             </div>
//             <div className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded-full flex items-center gap-2">
//               <span className="text-lg">GROUPS</span>
//               <span className="text-2xl">→</span>
//             </div>
//           </div>
//         </motion.div>

//         {/* CTA Button */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="text-center mt-20"
//         >
//           <button className="bg-black text-white px-10 py-5 rounded-full font-bold text-xl uppercase tracking-wider hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl">
//             Get Your Tickets Now
//           </button>
//         </motion.div>
//       </div>
//     </div>
//   );
// }