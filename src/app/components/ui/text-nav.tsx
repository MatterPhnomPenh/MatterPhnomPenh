


// "use client";
// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import Link from "next/link";

// export default function NavigationBar() {
//   const [scrollY, setScrollY] = useState(0);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const marqueeGoneAfter = 80;
//   const compactModeAfter = 120;

//   const showMarquee = scrollY < marqueeGoneAfter;
//   const isCompact = scrollY >= compactModeAfter;

//   const marqueeTexts = [
//     "CHRIST IS THE REASON. WE CHOOSE EVERYONE. RELATE & BE RELEVANT. CREATED TO CREATE. GENEROUS BY CHOICE. BE TRANSFORMED, NOT JUST INSPIRED. CONNECTED & RELATIONAL",
//   ];
//   const doubled = [...marqueeTexts, ...marqueeTexts];

//   return (
//     <>
//       <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
//         {/* 1. Full-width transparent marquee + always-visible border */}
//         <div className="border-b border-gray-200">
//           <div className={`overflow-hidden transition-all duration-500 ${showMarquee ? "py-5" : "py-0 h-0"}`}>
//             {/* Full-bleed marquee (no padding left/right) */}
//             <div className="flex animate-marquee">
//               {doubled.map((text, i) => (
//                 <div
//                   key={i}
//                   className="flex-shrink-0 px-8 text-xl lg:text-2xl font-bold text-white tracking-wider"
//                 >
//                   {text}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* 2. Logo + Nav Row */}
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className={`flex items-center justify-between transition-all duration-500 ${isCompact ? "py-6" : "py-4 lg:py-2"}`}>
//             <Link href="/" className="flex-shrink-0">
//               <span className={`block text-white font-light tracking-tight leading-none transition-all duration-500 ${
//                 isCompact ? "text-6xl lg:text-7xl" : "text-7xl lg:text-8xl"
//               }`}>
//                 {isCompact ? "M" : "MATTER"}
//               </span>
//             </Link>

//             {!isCompact && (
//               <>
//                 <nav className="hidden lg:flex items-center space-x-12">
//                   {["About Us", "Talk", "Initiatives", "Contact"].map((item) => (
//                     <Link
//                       key={item}
//                       href={`/${item.toLowerCase().replace(" ", "-")}`}
//                       className="text-sm font-light tracking-widest uppercase text-white hover:opacity-60 transition"
//                     >
//                       {item}
//                     </Link>
//                   ))}
//                   <Link
//                     href="/gathering"
//                     className="px-8 py-3.5 border-2 border-white text-white text-sm font-light tracking-widest uppercase hover:bg-white hover:text-black transition"
//                   >
//                     Join Our Gathering
//                   </Link>
//                 </nav>

//                 <button
//                   onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                   className="lg:hidden text-white"
//                 >
//                   {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
//                 </button>
//               </>
//             )}
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {!isCompact && mobileMenuOpen && (
//           <div className="border-t border-gray-200 bg-transparent">
//             <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
//               {["About Us", "Talk", "Initiatives", "Contact"].map((item) => (
//                 <Link
//                   key={item}
//                   href={`/${item.toLowerCase().replace(" ", "-")}`}
//                   onClick={() => setMobileMenuOpen(false)}
//                   className="block text-sm font-light tracking-widest uppercase text-white"
//                 >
//                   {item}
//                 </Link>
//               ))}
//               <Link
//                 href="/gathering"
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="block px-8 py-4 border-2 border-white text-white text-sm font-light tracking-widest uppercase text-center hover:bg-black hover:text-white transition"
//               >
//                 Join Our Gathering
//               </Link>
//             </div>
//           </div>
//         )}
//       </header>

//       {/* Full-width marquee animation */}
//       <style jsx global>{`
//         @keyframes marquee {
//           0% { transform: translateX(0%); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-marquee {
//           display: flex;
//           width: max-content;
//           animation: marquee 38s linear infinite;
//         }
//       `}</style>
//     </>
//   );
// }