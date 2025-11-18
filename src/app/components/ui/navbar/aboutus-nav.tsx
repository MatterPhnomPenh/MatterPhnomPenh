
// "use client";

// import React, { useState, useEffect } from "react";
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

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setCurrentPath(window.location.pathname);
//     }
//   }, []);

//   const navLinks = [
//     { id: "story", label: "Story", href: "/about#story" },
//     { id: "mission", label: "Mission", href: "/about#mission" },
//     { id: "vision", label: "Vision", href: "/about#vision" },
//     { id: "core-value", label: "Core Values", href: "/about#core-value" },
//     { id: "pastor", label: "Pastor", href: "/about#pastor" },
//   ];

//   const isLinkActive = (linkId: string) => {
//     if (activeSection === linkId) return true;
//     if (currentPath === "/") {
//       const hash = typeof window !== "undefined" ? window.location.hash : "";
//       return `#${linkId}` === hash;
//     }
//     return false;
//   };

//   // Button component for reuse (now using button.svg)
//   type ButtonProps = {
//     className?: string;
//     href: string;
//     onClick?: () => void;
//   };

//   const Button: React.FC<ButtonProps> = ({ className = "", href, onClick }) => (
//     <motion.div
//       whileHover={{ scale: 1.05, y: -2 }}
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//       className="block"
//     >
//       <Link href={href} className={className} onClick={onClick}>
//         <img 
//           src="/button.svg"
//           alt="Join Us"
//           className="w-48 h-48 object-contain hover:opacity-80 transition-opacity "
//         />
//       </Link>
//     </motion.div>
//   );

//   return (
//     <motion.header 
//       className="fixed top-0 left-0 right-0 z-50 bg-transparent"
//     >
//       <nav className="mx-auto px-8 max-w-screen-2xl">  {/* Increased px-8 for side padding, max-w-screen-2xl for wider nav bar (1536px) */}
//         <div className="flex items-center justify-between">
//           {/* Left: Nav Pill (Logo + Links in previous clustered position) */}
//           <motion.div
//             className="bg-white/50 backdrop-blur-md rounded-full flex items-center space-x-0 md:space-x-6 py-4 px-10 shadow-lg border border-white/20 cursor-pointer"  // Increased md:space-x-6 in pill, px-10 for more internal width
//             initial={{ scale: 0.95, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             whileHover={{ scale: 1.02, y: -1 }}
//             transition={{ 
//               duration: 0.5, 
//               ease: "easeOut",
//               hover: { type: "spring", stiffness: 300, damping: 20 }
//             }}
//           >
//             <Link
//               href="/"
//               className="text-3xl font-light text-black tracking-wide mr-4 md:mr-10 hover:opacity-80 transition-opacity flex-shrink-0"  // Changed to font-light
//             >
//               MATTER
//             </Link>

//             {/* Desktop Nav Links - Grid layout for column alignment */}
//             <div className="hidden md:grid grid-cols-3 gap-x-24 gap-y-2 ml-0">
//               {navLinks.map((link) => {
//                 const isActive = isLinkActive(link.id);
//                 const isHovered = hoveredId === link.id;

//                 return (
//                   <div key={link.id} className="inline-block">
//                     <Link
//                       href={link.href}
//                       className={`relative uppercase text-base font-light text-black transition-colors duration-200 hover:text-gray-700 self-start ${
//                         isActive ? "text-gray-700" : ""
//                       }`}
//                       onMouseEnter={() => setHoveredId(link.id)}
//                       onMouseLeave={() => setHoveredId(null)}
//                     >
//                       {link.label}
//                       <span
//                         className={`absolute -bottom-1 left-0 h-0.5 bg-gray-700 transition-all duration-300 ${
//                           isHovered || isActive ? "w-full" : "w-0"
//                         }`}
//                         style={{
//                           width: isHovered || isActive ? '100%' : '0%'
//                         }}
//                       />
//                     </Link>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Mobile Toggle inside pill for alignment */}
//             <div className="md:hidden ml-auto pr-4">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="p-2 text-black hover:text-gray-700 transition-colors"
//                 aria-label="Toggle menu"
//               >
//                 {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//               </button>
//             </div>
//           </motion.div>

//           {/* Right: Join Us Button */}
//           <Button href="/join" className="hidden md:block ml-8" />  {/* Increased ml-8 for more space between pill and button */}
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.2 }}
//               className="md:hidden mt-6 bg-transparent backdrop-blur-md rounded-full py-6 px-8 space-y-8 border border-white/20"  // Increased space-y-8 for mobile items
//             >
//               <div className="flex flex-col space-y-6">
//                 {navLinks.map((link) => {
//                   const isActive = isLinkActive(link.id);
//                   const isHovered = hoveredId === link.id;

//                   return (
//                     <div key={link.id} className="inline-block">
//                       <Link
//                         href={link.href}
//                         className="relative uppercase text-base font-light text-black hover:text-gray-700 transition-colors py-2"  // Changed to font-light
//                         onMouseEnter={() => setHoveredId(link.id)}
//                         onMouseLeave={() => setHoveredId(null)}
//                         onClick={() => setIsMenuOpen(false)}
//                       >
//                         {link.label}
//                         <span
//                           className={`absolute -bottom-1 left-0 h-0.5 bg-gray-700 transition-all duration-300 ${
//                             isHovered || isActive ? "w-full" : "w-0"
//                           }`}
//                           style={{
//                             width: isHovered || isActive ? '100%' : '0%'
//                           }}
//                         />
//                       </Link>
//                     </div>
//                   );
//                 })}
//                 <div className="flex justify-center">
//                   <Button href="/join" onClick={() => setIsMenuOpen(false)} />
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </motion.header>
//   );
// }

