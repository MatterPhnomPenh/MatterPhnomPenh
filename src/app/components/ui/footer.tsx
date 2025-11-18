// "use client";

// import { useState } from "react";
// import { MapPin, Phone, Mail, Calendar } from "lucide-react";
// import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
// import { SiTiktok } from "react-icons/si";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const OriginIcon = () => (
//   <Image
//     src="/ORS_STAR-BLUE.png" 
//     alt="Origin Logo"
//     width={20}
//     height={20}
//     className="object-contain"
//   />
// );

// export default function Footer() {
//   const [email, setEmail] = useState("");

//   const socialLinks = [
//     { Icon: FaFacebookF, href: "https://web.facebook.com/matterphnompenh/", label: "Facebook" },
//     { Icon: FaInstagram, href: "https://www.instagram.com/matterphnompenh/", label: "Instagram" },
//     { Icon: FaTelegramPlane, href: "https://t.me/phnompenhmatters", label: "Telegram" },
//     { Icon: SiTiktok, href: "https://www.tiktok.com/@matterphnompenh", label: "TikTok" },
//     { Icon: OriginIcon, href: "https://www.originskh.com/", label: "Originskh" },
//   ];

//   const quickLinks = [
//     { name: "About", href: "/about" },
//     { name: "Gatherings", href: "/gathering" },
//     { name: "Talks", href: "/talk" },
//     { name: "Initiatives", href: "/initiatives" },
//     { name: "Contact", href: "/contact" }
//   ];

//   const handleNewsletter = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle newsletter signup
//     console.log("Newsletter:", email);
//     setEmail("");
//   };

//   return (
//     <footer className="bg-white ">
//       <div className="max-w-6xl mx-auto px-6 pb-10">
//         {/* Main footer content */}
//         <div className="grid md:grid-cols-4 gap-12 border-t border-gray-200 pt-12">

//           {/* Brand & Mission */}
//           <div className="space-y-6">
//             <div className="text-2xl font-light text-black">MATTER</div>
//             <p className="text-gray-600 font-light text-sm leading-relaxed">
//               A community where every person matters. We believe in meaningful connections, 
//               personal growth, and making a difference together.
//             </p>
//           </div>

//           {/* Contact & Location */}
//           <div className="space-y-4">
//             <h4 className="text-sm font-light tracking-widest uppercase text-gray-500 mb-4">Visit Us</h4>
//             <div className="space-y-3 text-sm">
//               <div className="flex items-start gap-3">
//                 <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
//                 <div>
//                   <p className="text-gray-600">Sangkat Daeum Thkov</p>
//                   <p className="text-gray-600">Khan Chamkar Mon</p>
//                   <p className="text-gray-600">Phnom Penh, Cambodia</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Calendar className="w-4 h-4 text-gray-400" />
//                 <p className="text-gray-600">Saturdays at 5 PM</p>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h4 className="text-sm font-light tracking-widest uppercase text-gray-500 mb-4">Explore</h4>
//             <div className="space-y-2 text-sm">
//               {quickLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   className="text-gray-600 hover:text-black transition-colors block"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Connect */}
//           <div className="space-y-4">
//             <h4 className="text-sm font-light tracking-widest uppercase text-gray-500 mb-4">Connect</h4>
//             <div className="space-y-3 text-sm">
//               <a href="mailto:matter@originskh.com" className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors">
//                 <Mail className="w-4 h-4" />
//                 matter@originskh.com
//               </a>
//               <a href="tel:+855123456789" className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors">
//                 <Phone className="w-4 h-4" />
//                 +855 12 345 6789
//               </a>
//             </div>
//             <div className="flex gap-3 mt-4">
//               {socialLinks.map(({ Icon, href, label }) => (
//                 <motion.a
//                   key={label}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-8 h-8 border border-gray-300 text-gray-600 hover:border-black hover:text-black transition-all duration-300 flex items-center justify-center"
//                   aria-label={label}
//                   whileHover={{ y: -2 }}
//                 >
//                   <Icon className="w-3 h-3" />
//                 </motion.a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="border-t border-gray-200 mt-12 pt-8 text-center">
//           <p className="text-gray-500 text-sm font-light">
//             © {new Date().getFullYear()} Matter Community. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }