

// "use client";

// import { motion } from "framer-motion";
// import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
// import Link from "next/link"; // This is the correct Link
// import { useState, useEffect } from "react";

// interface NavigationBarProps {
//   activeSection?: string;
// }

// export default function NavigationBar({ activeSection }: NavigationBarProps) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isEventsOpen, setIsEventsOpen] = useState(false);
//   const [currentPath, setCurrentPath] = useState("");

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setCurrentPath(window.location.pathname);
//     }
//   }, []);

//   const navLinks = [
//     { id: "about", label: "About Us", href: "/about" },
//     { id: "gathering", label: "Gathering", href: "/gathering" },
//     { id: "talk", label: "Talk", href: "/talk" },
//     { id: "events", label: "Initiatives", href: "/events" },
//     { id: "contact", label: "Contact", href: "/contact" },
//   ];

//   const eventSubLinks = [
//     { id: "foundation", label: "Matter Foundation", href: "/events#foundation" },
//     { id: "fest", label: "Matter Fest", href: "/events#fest" },
//     { id: "camp", label: "Matter Camp", href: "/events#camp" },
//     { id: "matternight", label: "Matter Night", href: "/events#matternight" },
//   ];

//   const isLinkActive = (linkId: string) => {
//     if (activeSection === linkId) return true;
//     if (currentPath === `/${linkId}`) return true;
//     if (linkId === "events" && (currentPath.startsWith("/events") || currentPath === "/events")) return true;
//     return false;
//   };

//   return (
//     <header className="w-full bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
//       {/* Minimal Top Bar */}
//       <div className="border-b border-gray-200 py-1 px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto flex justify-center items-center text-xs">
//           <span className="text-gray-500 font-light tracking-widest uppercase">
//             Study the Bible with Matter
//           </span>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <nav className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="flex items-center justify-between py-5">

//           {/* Logo - NOW FIXED & BEAUTIFUL */}
//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
//             <Link
//               href="/"
//               className="text-3xl lg:text-4xl font-light text-black tracking-wide hover:opacity-80 transition-all duration-300 flex items-center"
//             >
//               MATTER
//             </Link>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-12">
//             {navLinks.map((link) => {
//               const isActive = isLinkActive(link.id);

//               return link.id === "events" ? (
//                 <div key={link.id} className="relative group">
//                   <motion.div
//                     className={`py-2 text-sm font-light tracking-widest uppercase transition-all duration-300 flex items-center space-x-1 cursor-pointer ${
//                       isActive ? "text-black" : "text-gray-600 hover:text-black"
//                     }`}
//                     whileHover={{ y: -2 }}
//                   >
//                     <span>{link.label}</span>
//                     <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
//                   </motion.div>

//                   {/* Dropdown */}
//                   <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
//                     <div className="bg-white border border-gray-200 shadow-lg overflow-hidden">
//                       <div className="py-3">
//                         {eventSubLinks.map((subLink) => (
//                           <Link
//                             key={subLink.id}
//                             href={subLink.href}
//                             className="block px-6 py-3 text-sm text-gray-700 hover:text-black hover:bg-gray-50 transition-all duration-200 font-light"
//                           >
//                             {subLink.label}
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <motion.div key={link.id} whileHover={{ y: -2 }}>
//                   <Link
//                     href={link.href}
//                     className={`py-2 text-sm font-light tracking-widest uppercase transition-all duration-300 ${
//                       isActive ? "text-black" : "text-gray-600 hover:text-black"
//                     }`}
//                   >
//                     {link.label}
//                   </Link>
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Desktop CTA */}
//           <div className="hidden lg:block">
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Link
//                 href="/contact"
//                 className="px-7 py-3 border border-black text-black font-light text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
//               >
//                 Join Us
//               </Link>
//             </motion.div>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="lg:hidden">
//             <motion.button
//               onClick={() => {
//                 setIsMenuOpen(!isMenuOpen);
//                 if (!isMenuOpen) setIsEventsOpen(false);
//               }}
//               className="p-2 text-gray-700 hover:text-black transition-colors"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </motion.button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <motion.div
//             className="lg:hidden border-t border-gray-200 mt-4 pb-6"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="py-4 space-y-1">
//               {navLinks.map((link) => {
//                 const isActive = isLinkActive(link.id);

//                 return (
//                   <div key={link.id}>
//                     {link.id === "events" ? (
//                       <>
//                         <motion.button
//                           onClick={() => setIsEventsOpen(!isEventsOpen)}
//                           className={`flex items-center justify-between w-full px-5 py-4 text-left text-sm font-light tracking-widest uppercase transition-all border-b border-gray-100 ${
//                             isActive ? "text-black" : "text-gray-600"
//                           }`}
//                           whileHover={{ x: 6 }}
//                         >
//                           <span>{link.label}</span>
//                           {isEventsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
//                         </motion.button>

//                         {isEventsOpen && (
//                           <motion.div
//                             initial={{ opacity: 0, height: 0 }}
//                             animate={{ opacity: 1, height: "auto" }}
//                             className="bg-gray-50"
//                           >
//                             {eventSubLinks.map((subLink) => (
//                               <Link
//                                 key={subLink.id}
//                                 href={subLink.href}
//                                 onClick={() => {
//                                   setIsMenuOpen(false);
//                                   setIsEventsOpen(false);
//                                 }}
//                                 className="block px-8 py-3.5 text-sm text-gray-600 hover:text-black hover:bg-gray-100 transition-all font-light"
//                               >
//                                 {subLink.label}
//                               </Link>
//                             ))}
//                           </motion.div>
//                         )}
//                       </>
//                     ) : (
//                       <motion.div whileHover={{ x: 6 }}>
//                         <Link
//                           href={link.href}
//                           onClick={() => setIsMenuOpen(false)}
//                           className={`block px-5 py-4 text-sm font-light tracking-widest uppercase border-b border-gray-100 transition-all ${
//                             isActive ? "text-black" : "text-gray-600 hover:text-black"
//                           }`}
//                         >
//                           {link.label}
//                         </Link>
//                       </motion.div>
//                     )}
//                   </div>
//                 );
//               })}

//               {/* Mobile CTA */}
//               <div className="pt-4 px-5">
//                 <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                   <Link
//                     href="/contact"
//                     onClick={() => setIsMenuOpen(false)}
//                     className="block w-full text-center px-6 py-3.5 border border-black text-black font-light tracking-widest uppercase text-sm hover:bg-black hover:text-white transition-all"
//                   >
//                     Join Us
//                   </Link>
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </nav>
//     </header>
//   );
// }


