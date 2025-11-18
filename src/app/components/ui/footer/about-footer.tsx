// "use client";

// import { motion } from "framer-motion";
// import { Mail } from "lucide-react";
// import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
// import { SiTiktok } from "react-icons/si";
// import { FaXTwitter } from "react-icons/fa6";

// const logoBgClass = "bg-white";

// const MatterLogo = () => (
//       <div className="relative">
//           <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-200 rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
//             <div className={`relative w-12 h-12 lg:w-14 lg:h-14 ${logoBgClass} rounded-full flex items-center justify-center shadow-lg`}>
//               <span className="text-black font-bold text-xl lg:text-2xl">M</span>
//             </div>
//         </div> 
// );

// export default function AboutFooter() {
//   const sections = [
//     {
//       title: "NEXT STEPS",
//       items: ["I'm New", "Connect at Matter", "Volunteer"],
//     },
//     {
//       title: "COMMUNITIES",
//       items: ["Matter Kids", "Matter Youth", "Matter Pro", "Matter Men", "Matter Business"],
//     },
//     {
//       title: "RESOURCES",
//       items: ["Give", "Podcast", "Careers"],
//     },
//     {
//       title: "SPECIAL SERVICES",
//       items: ["Weddings", "Baptisms & Wakes", "Child Dedications", "Pre-Marital Counseling"],
//     },
//   ];

//   const socialLinks = [
//     { Icon: FaFacebookF, href: "#", label: "Facebook" },
//     { Icon: FaYoutube, href: "#", label: "YouTube" },
//     { Icon: FaInstagram, href: "#", label: "Instagram" },
//     { Icon: FaXTwitter, href: "#", label: "X" },
//     { Icon: SiTiktok, href: "#", label: "TikTok" },
//     { Icon: Mail, href: "#", label: "Email" },
//   ];

//   return (
//     <footer className="relative w-full bg-black text-white px-6 py-16 md:px-10 md:py-20 overflow-hidden">
//       {/* Decorative elements - adapted to dark theme */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-gray-800 opacity-20 blur-3xl"></div>
//         <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-gray-700 opacity-10 blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto space-y-12 relative z-10">
//         {/* Social Icons - top row like in pic */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="flex justify-center gap-6 mb-8"
//         >
//           {socialLinks.map(({ Icon, href, label }, index) => (
//             <motion.a
//               key={label}
//               href={href}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 text-white hover:text-gray-300 transition-colors"
//               aria-label={label}
//               whileHover={{ y: -2, scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 + index * 0.05 }}
//             >
//               <Icon size={20} />
//             </motion.a>
//           ))}
//         </motion.div>

//         {/* Logo - centered diamond like in pic */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="flex justify-center mb-8"
//         >
//           <MatterLogo />
//         </motion.div>

//         {/* Main Grid - 4 columns like in pic */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="grid md:grid-cols-4 gap-12"
//         >
//           {sections.map((section, index) => (
//             <div key={section.title} className="space-y-4">
//               <h3 className="text-xl font-bold uppercase tracking-wide">
//                 {section.title}
//               </h3>
//               <ul className="space-y-2 text-sm text-gray-300">
//                 {section.items.map((item, itemIndex) => (
//                   <motion.li
//                     key={item}
//                     initial={{ opacity: 0, x: -10 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.2 + index * 0.1 + itemIndex * 0.05 }}
//                     viewport={{ once: true }}
//                   >
//                     <a href="#" className="hover:text-white transition-colors block">
//                       {item}
//                     </a>
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </motion.div>

//         {/* Copyright - bottom like in pic */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="pt-12 border-t border-gray-800 text-center text-gray-400 text-sm"
//         >
//           © 2025 Matter Church. All rights reserved. Matter CHURCH MNL | BNE | SEL
//         </motion.div>
//       </div>
//     </footer>
//   );
// }

