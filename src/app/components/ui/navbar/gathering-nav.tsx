

// // "use client";

// // import React, { useState, useEffect, useRef } from "react";
// // import Link from "next/link";
// // import { Menu, X } from "lucide-react";
// // import { motion, AnimatePresence } from "framer-motion";

// // interface NavigationBarProps {
// //   activeSection?: string;
// // }

// // export default function NavigationBar({ activeSection = "theme" }: NavigationBarProps) {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [hoveredId, setHoveredId] = useState<string | null>(null);
// //   const [currentPath, setCurrentPath] = useState("");
// //   const [isVisible, setIsVisible] = useState(true);

// //   const lastScrollYRef = useRef(0);
// //   const menuOpenRef = useRef(false);

// //   useEffect(() => {
// //     menuOpenRef.current = isMenuOpen;
// //   }, [isMenuOpen]);

// //   useEffect(() => {
// //     if (typeof window !== "undefined") {
// //       setCurrentPath(window.location.pathname);
// //     }
// //   }, []);

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
// //     { id: "theme", label: "Theme/Topic", href: "/gathering#theme" },
// //     { id: "schedule", label: "Schedule", href: "/gathering#schedule" },
// //     { id: "map", label: "Map", href: "/gathering#map" },
// //   ];

// //   const isLinkActive = (linkId: string) => {
// //     if (activeSection === linkId) return true;
// //     if (currentPath === "/gathering") {
// //       const hash = typeof window !== "undefined" ? window.location.hash : "";
// //       return `#${linkId}` === hash;
// //     }
// //     return false;
// //   };

// //   const containerVariants = {
// //     visible: { y: 0 },
// //     hidden: { y: -100 },
// //   };

// //   return (
// //     <motion.header 
// //       className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800 font-sans"
// //       variants={containerVariants}
// //       animate={isVisible ? "visible" : "hidden"}
// //       transition={{ duration: 0.3, ease: "easeInOut" }}
// //     >
// //       <nav className="mx-auto px-4">
// //         <div className="flex items-center justify-between py-4">
          
// //           {/* Left: Logo - MATTER */}
// //           <div className="flex-shrink-0">
// //             <Link
// //               href="/"
// //               className="block text-2xl lg:text-4xl font-bold text-white tracking-tight hover:opacity-80 transition-opacity"
// //             >
// //               <div className="relative flex items-center">
// //                 <span className="inline-block">M</span>
// //                 <span className="inline-block ml-1">
// //                   atter
// //                 </span>
// //               </div>
// //             </Link>
// //           </div>

// //           {/* Right: MENU label + Toggle Icon */}
// //           <div className="flex items-center space-x-2">
// //             <span className="text-lg font-semibold text-white">
// //               {isMenuOpen ? "CLOSE" : "MENU"}
// //             </span>
// //             <button
// //               onClick={() => setIsMenuOpen(!isMenuOpen)}
// //               className="p-2 text-white hover:text-black hover:bg-white rounded-lg transition-colors"
// //               aria-label="Toggle menu"
// //             >
// //               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// //             </button>
// //           </div>
// //         </div>

// //         {/* Dropdown Menu Content */}
// //         <AnimatePresence>
// //         {isMenuOpen && (
// //             <motion.div
// //             initial={{ opacity: 0, height: 0 }}
// //             animate={{ opacity: 1, height: "auto" }}
// //             exit={{ opacity: 0, height: 0 }}
// //             transition={{ duration: 0.2 }}
// //             className="overflow-hidden bg-white shadow-md rounded-lg py-4 px-6 space-y-4"
// //             >
// //             {navLinks.map((link) => {
// //                 const isActive = isLinkActive(link.id);
// //                 const isHovered = hoveredId === link.id;
// //                 const showUnderline = isHovered || (!hoveredId && isActive);
// //                 return (
// //                 <Link
// //                     key={link.id}
// //                     href={link.href}
// //                     className={`relative block text-black text-lg font-semibold py-2 transition-colors ${isActive ? "text-white bg-black p-2 rounded-lg" : ""}`}
// //                     onMouseEnter={() => setHoveredId(link.id)}
// //                     onMouseLeave={() => setHoveredId(null)}
// //                     onClick={() => setIsMenuOpen(false)}
// //                 >
// //                     {link.label}
// //                     <span
// //                     className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 ${
// //                         showUnderline ? "w-full" : "w-0" 
// //                     }` }
// //                     />
// //                 </Link>
// //                 );
// //             })}
// //             </motion.div>
// //         )}
// //         </AnimatePresence>
// //       </nav>
// //     </motion.header>
// //   );
// // }

// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// interface NavigationBarProps {
//   activeSection?: string;
// }

// export default function NavigationBar({ activeSection }: NavigationBarProps) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [hoveredId, setHoveredId] = useState<string | null>(null);
//   const [currentPath, setCurrentPath] = useState("");
//   const [isVisible, setIsVisible] = useState(true);
//   const lastScrollYRef = useRef(0);
//   const menuOpenRef = useRef(false);

//   useEffect(() => {
//     menuOpenRef.current = isMenuOpen;
//   }, [isMenuOpen]);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setCurrentPath(window.location.pathname);
//     }
//   }, []);

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
//     { id: "theme", label: "Theme/Topic", href: "/gathering#theme" },
//     { id: "schedule", label: "Schedule", href: "/gathering#schedule" },
//     { id: "map", label: "Map", href: "/gathering#map" },
//   ];

//   const isLinkActive = (linkId: string) => {
//     if (activeSection === linkId) return true;
//     if (currentPath === "/gathering") {
//       const hash = typeof window !== "undefined" ? window.location.hash : "";
//       return `#${linkId}` === hash;
//     }
//     return false;
//   };

//   const containerVariants = {
//     visible: { y: 0 },
//     hidden: { y: -100 },
//   };

//   return (
//     <motion.header
//       className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800 font-sans"
//       variants={containerVariants}
//       animate={isVisible ? "visible" : "hidden"}
//       transition={{ duration: 0.3, ease: "easeInOut" }}
//     >
//       {/* Main Nav Container */}
//       <nav className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="flex items-center justify-between py-4">
//           {/* Logo: MATTER + Community Church */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="group flex items-center space-x-3">
//               <div className="flex flex-col">
//                 <div className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
//                   Matter
//                 </div>
//               </div>
//             </Link>
//           </div>

//           {/* Right: MENU Label + Toggle */}
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

//         {/* Mobile Dropdown Menu */}
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
//                   const isActive = isLinkActive(link.id);
//                   const isHovered = hoveredId === link.id;
//                   const showUnderline = isHovered || (!hoveredId && isActive);

//                   return (
//                     <Link
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
//                     </Link>
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