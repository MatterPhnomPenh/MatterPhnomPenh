
// "use client";

// import { useState } from "react";
// import { Phone, Mail, Linkedin, MapPin } from "lucide-react";
// import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
// import { SiTiktok } from "react-icons/si";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import MPopup from "../MPopup";

// const OriginIcon = () => (
//   <Image
//     src="/ORS_STAR-BLUE.png"
//     alt="Origin Logo"
//     width={20}
//     height={20}
//     className="object-contain"
//   />
// );

// export default function TalkFooter() {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const socialLinks = [
//     { Icon: Linkedin, href: "https://www.linkedin.com", label: "LinkedIn" },
//     { Icon: FaFacebookF, href: "https://web.facebook.com/matterphnompenh/", label: "Facebook" },
//     { Icon: FaInstagram, href: "https://www.instagram.com/matterphnompenh/", label: "Instagram" },
//     { Icon: FaTelegramPlane, href: "https://t.me/phnompenhmatters", label: "Telegram" },
//     { Icon: SiTiktok, href: "https://www.tiktok.com/@matterphnompenh", label: "TikTok" },
//     { Icon: OriginIcon, href: "https://www.originskh.com/", label: "Originskh" },
//   ];

//   return (
//     <footer
//       id="footer"
//       className="relative w-full bg-white text-black px-6 py-20 md:px-10 md:py-24 overflow-hidden border-t border-gray-200"
//     >
//       <div className="max-w-7xl mx-auto space-y-16">
//         {/* Main Content Grid */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="grid md:grid-cols-4 gap-12 md:gap-8"
//         >
//           {/* Brand Column */}
//           <div className="md:col-span-2 space-y-8">
//             <div className="space-y-6">
//               <div className="flex items-center gap-4">
//                 <motion.button
//                   className="text-4xl font-light tracking-tight text-black"
//                 >
//                   MATTER
//                 </motion.button>
//               </div>
              
//               <p className="text-lg text-gray-600 leading-relaxed max-w-md font-light">
//                 We're all an empty matter without Him, yet we matter to Him.
//               </p>
//             </div>

//             {/* Contact Info */}
//             <div className="space-y-4">
//               <div className="flex items-center gap-3 group">
//                 <div className="p-2 border border-gray-300 rounded-lg text-black transition-all group-hover:border-black">
//                   <Phone className="w-4 h-4" />
//                 </div>
//                 <a href="tel:+855123456789" className="text-gray-600 hover:text-black transition-colors font-light">
//                   +855 12 345 6789
//                 </a>
//               </div>
              
//               <div className="flex items-center gap-3 group">
//                 <div className="p-2 border border-gray-300 rounded-lg text-black transition-all group-hover:border-black">
//                   <Mail className="w-4 h-4" />
//                 </div>
//                 <div className="space-y-1">
//                   <p className="text-gray-600 hover:text-black transition-colors font-light">
//                     name@example.com
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3 group">
//                 <div className="p-2 border border-gray-300 rounded-lg text-black transition-all group-hover:border-black mt-1">
//                   <MapPin className="w-4 h-4" />
//                 </div>
//                 <p className="text-gray-600 font-light leading-relaxed">
//                   Sangkat Daeum Thkov, Khan Chamkar Mon,<br />
//                   Phnom Penh, Cambodia
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-6">
//             <h3 className="text-lg font-medium tracking-widest uppercase text-gray-500">
//               Explore
//             </h3>
//             <nav className="space-y-3">
//               {['Home', 'Videos', 'About', 'Contact'].map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   className="block text-gray-600 hover:text-black transition-colors duration-300 font-light text-lg"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </nav>
//           </div>

//           {/* Social Links */}
//           <div className="space-y-6">
//             <h3 className="text-lg font-medium tracking-widest uppercase text-gray-500">
//               Connect
//             </h3>
//             <div className="flex flex-wrap gap-3">
//               {socialLinks.map(({ Icon, href, label }, index) => (
//                 <motion.a
//                   key={label}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 border border-gray-300 text-black rounded-full flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-300"
//                   aria-label={label}
//                   whileHover={{ y: -2 }}
//                   whileTap={{ scale: 0.95 }}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.1 + index * 0.05 }}
//                 >
//                   <Icon className="w-4 h-4" />
//                 </motion.a>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* Bottom Section */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="pt-12 border-t border-gray-200"
//         >
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//             {/* Copyright */}
//             <div className="text-gray-500 text-sm font-light">
//               © {new Date().getFullYear()} Matter. All rights reserved.
//             </div>

//             {/* Additional Links */}
//             <div className="flex items-center gap-6 text-sm font-light">
//               <a href="#privacy" className="text-gray-500 hover:text-black transition-colors">
//                 Privacy Policy
//               </a>
//               <a href="#terms" className="text-gray-500 hover:text-black transition-colors">
//                 Terms of Service
//               </a>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   );
// }