

// // "use client";

// // import React, { useState, useEffect, useRef } from "react";
// // import { Link, Menu, X } from "lucide-react";
// // import { motion, AnimatePresence } from "framer-motion";

// // interface NavigationBarProps {
// //   activeSection?: string;
// // }
// // export default function NavigationBar({ activeSection }: NavigationBarProps) {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [hoveredId, setHoveredId] = useState<string | null>(null);
// //   const [isVisible, setIsVisible] = useState(true);
// //   const lastScrollYRef = useRef(0);
// //   const menuOpenRef = useRef(false);

// //   useEffect(() => {
// //     menuOpenRef.current = isMenuOpen;
// //   }, [isMenuOpen]);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const currentScrollY = window.scrollY;
// //       if (currentScrollY > 100) {
// //         if (currentScrollY > lastScrollYRef.current && !menuOpenRef.current) {
// //           setIsVisible(false);
// //         } else {
// //           setIsVisible(true);
// //         }
// //       } else {
// //         setIsVisible(true);
// //       }
// //       lastScrollYRef.current = currentScrollY;
// //     };

// //     window.addEventListener("scroll", handleScroll, { passive: true });
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   const navLinks = [
// //     { id: "foundation", label: "Matter Foundation", href: "/foundation" },
// //     { id: "fest", label: "Matter Fest", href: "/fest" },
// //     { id: "camp", label: "Matter Camp", href: "/camp" },
// //     { id: "matternight", label: "Matter Night", href: "/matternight" },
// //   ];

// //   return (
// //     <motion.header
// //       className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-gray-800 font-sans"
// //       initial={{ y: 0 }}
// //       animate={{ y: isVisible ? 0 : -100 }}
// //       transition={{ duration: 0.3, ease: "easeInOut" }}
// //     >
// //       <nav className="max-w-7xl mx-auto px-6 lg:px-8">
// //         <div className="flex items-center justify-between py-4">
// //             {/* Logo */}
// //           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
// //             <Link
// //               href="/"
// //               className="text-3xl lg:text-4xl font-light text-black tracking-wide hover:opacity-80 transition-all duration-300 flex items-center"
// //             >
// //               MATTER
// //             </Link>
// //           </motion.div>

// //           {/* MENU / CLOSE + Toggle */}
// //           <div className="flex items-center space-x-3">
// //             <span className="text-sm font-semibold text-white uppercase tracking-wider">
// //               {isMenuOpen ? "Close" : "Menu"}
// //             </span>
// //             <button
// //               onClick={() => setIsMenuOpen(!isMenuOpen)}
// //               className="p-2 text-white hover:text-black hover:bg-white rounded-lg transition-all duration-200"
// //               aria-label="Toggle menu"
// //             >
// //               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// //             </button>
// //           </div>
// //         </div>

// //         {/* Mobile Dropdown */}
// //         <AnimatePresence>
// //           {isMenuOpen && (
// //             <motion.div
// //               initial={{ opacity: 0, height: 0 }}
// //               animate={{ opacity: 1, height: "auto" }}
// //               exit={{ opacity: 0, height: 0 }}
// //               transition={{ duration: 0.3, ease: "easeInOut" }}
// //               className="overflow-hidden bg-white rounded-lg shadow-xl border border-gray-200"
// //             >
// //               <div className="py-4 space-y-1">
// //                 {navLinks.map((link) => {
// //                   const isActive = activeSection === link.id;
// //                   const isHovered = hoveredId === link.id;
// //                   const showUnderline = isHovered || (!hoveredId && isActive);

// //                   return (
// //                     <a
// //                       key={link.id}
// //                       href={link.href}
// //                       className={`relative block px-6 py-3 text-lg font-medium text-gray-800 transition-all duration-200 ${
// //                         isActive ? "bg-black text-white rounded-md mx-4" : "hover:text-black"
// //                       }`}
// //                       onMouseEnter={() => setHoveredId(link.id)}
// //                       onMouseLeave={() => setHoveredId(null)}
// //                       onClick={() => setIsMenuOpen(false)}
// //                     >
// //                       {link.label}
// //                       <span
// //                         className={`absolute -bottom-1 left-6 h-0.5 bg-black transition-all duration-300 ${
// //                           showUnderline ? "w-[calc(100%-3rem)]" : "w-0"
// //                         }`}
// //                       />
// //                     </a>
// //                   );
// //                 })}
// //               </div>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </nav>
// //     </motion.header>
// //   );
// // }


// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// interface NavigationBarProps {
//   activeSection?: string;
// }
// export default function NavigationBar({ activeSection }: NavigationBarProps) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [hoveredId, setHoveredId] = useState<string | null>(null);
//   const [isVisible, setIsVisible] = useState(true);
//   const lastScrollYRef = useRef(0);
//   const menuOpenRef = useRef(false);

//   useEffect(() => {
//     menuOpenRef.current = isMenuOpen;
//   }, [isMenuOpen]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY > 100) {
//         if (currentScrollY > lastScrollYRef.current && !menuOpenRef.current) {
//           setIsVisible(false);
//         } else {
//           setIsVisible(true);
//         }
//       } else {
//         setIsVisible(true);
//       }
//       lastScrollYRef.current = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { id: "foundation", label: "Matter Foundation", href: "/foundation" },
//     { id: "fest", label: "Matter Fest", href: "/fest" },
//     { id: "camp", label: "Matter Camp", href: "/camp" },
//     { id: "matternight", label: "Matter Night", href: "/matternight" },
//   ];

//   return (
//     <motion.header
//       className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-gray-800 font-sans"
//       initial={{ y: 0 }}
//       animate={{ y: isVisible ? 0 : -100 }}
//       transition={{ duration: 0.3, ease: "easeInOut" }}
//     >
//       <nav className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="flex items-center justify-between py-4">
//           {/* Logo - FIXED: Using anchor tag instead of Link icon */}
//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
//             <a
//               href="/"
//               className="text-3xl lg:text-4xl font-light text-white tracking-wide hover:opacity-80 transition-all duration-300 flex items-center"
//             >
//               MATTER
//             </a>
//           </motion.div>

//           {/* MENU / CLOSE + Toggle */}
//           <div className="flex items-center space-x-3">
//             <span className="text-sm font-semibold text-white uppercase tracking-wider">
//               {isMenuOpen ? "Close" : "Menu"}
//             </span>
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="p-2 text-white hover:text-black hover:bg-white rounded-lg transition-all duration-200"
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Dropdown */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//               className="overflow-hidden bg-white rounded-lg shadow-xl border border-gray-200"
//             >
//               <div className="py-4 space-y-1">
//                 {navLinks.map((link) => {
//                   const isActive = activeSection === link.id;
//                   const isHovered = hoveredId === link.id;
//                   const showUnderline = isHovered || (!hoveredId && isActive);

//                   return (
//                     <a
//                       key={link.id}
//                       href={link.href}
//                       className={`relative block px-6 py-3 text-lg font-medium text-gray-800 transition-all duration-200 ${
//                         isActive ? "bg-black text-white rounded-md mx-4" : "hover:text-black"
//                       }`}
//                       onMouseEnter={() => setHoveredId(link.id)}
//                       onMouseLeave={() => setHoveredId(null)}
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       {link.label}
//                       <span
//                         className={`absolute -bottom-1 left-6 h-0.5 bg-black transition-all duration-300 ${
//                           showUnderline ? "w-[calc(100%-3rem)]" : "w-0"
//                         }`}
//                       />
//                     </a>
//                   );
//                 })}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </motion.header>
//   );
// }