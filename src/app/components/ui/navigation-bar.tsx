

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";

// const EVENT_SUB_LINKS = [
//   { id: "foundation", label: "Foundation", href: "/events#foundation" },
//   { id: "fest", label: "Fest", href: "/events#fest" },
//   { id: "camp", label: "Camp", href: "/events#camp" },
//   { id: "night", label: "Night", href: "/events#matternight" },
// ] as const;

// const VALUES = [
//   { text: "CHRIST IS THE REASON.", href: "/reason" },
//   { text: "WE CHOOSE EVERYONE.", href: "/choose" },
//   { text: "RELATE & BE RELEVANT.", href: "/relate" },
//   { text: "CREATED TO CREATE.", href: "/create" },
//   { text: "GENEROUS BY CHOICE.", href: "/generous" },
//   { text: "BE TRANSFORMED, NOT JUST INSPIRED.", href: "/transformed" },
//   { text: "CONNECTED & RELATIONAL", href: "/connected" },
// ];

// const NAV_ITEMS = ["About", "Talk"] as const;
// const CTA_LABEL = "Join Our Gathering";
// const CTA_HREF = "/gathering";

// export default function NavigationBar({ isNavReady = false }: { isNavReady?: boolean }) {
//   const [scrollY, setScrollY] = useState(0);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
//   const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const marqueeVisible = scrollY < 80;
//   const compactMode = scrollY >= 120;
//   const logoScrolled = scrollY > 20;

//   const handleDropdownEnter = () => {
//     if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
//     setDropdownOpen(true);
//   };

//   const handleDropdownLeave = () => {
//     dropdownTimeoutRef.current = setTimeout(() => {
//       setDropdownOpen(false);
//     }, 180);
//   };

//   const toggleMobileDropdown = () => {
//     setMobileDropdownOpen(!mobileDropdownOpen);
//   };

//   const navItemsWithIndex = [
//     ...NAV_ITEMS.map((item, i) => ({ label: item, href: `/${item.toLowerCase()}`, index: i })),
//     { label: "Initiatives", href: "#", index: NAV_ITEMS.length, isDropdown: true },
//     { label: "Contact", href: "/contact", index: NAV_ITEMS.length + 1 },
//   ];

//   return (
//     <>
//       <header className="fixed inset-x-0 top-0 z-50 w-full overflow-x-hidden">
//         {/* Marquee - Show on both desktop and mobile */}
//         <div
//           className={`overflow-hidden transition-all duration-500 ${
//             marqueeVisible ? "py-3 sm:py-4" : "h-0 py-0"
//           }`}
//           onMouseEnter={() => document.documentElement.style.setProperty("--marquee-paused", "paused")}
//           onMouseLeave={() => document.documentElement.style.removeProperty("--marquee-paused")}
//         >
//           <div className="flex animate-marquee whitespace-nowrap">
//             {[0, 1].map((i) => (
//               <div key={i} className="flex-shrink-0 flex items-center">
//                 {VALUES.map((item, idx) => (
//                   <Link
//                     key={idx}
//                     href={item.href}
//                     className="px-2 sm:px-2 lg:px-8 inline-block text-xs font-light tracking-wider text-white hover:opacity-70 transition sm:text-base md:text-lg lg:text-xl xl:text-2xl"
//                   >
//                     {item.text}
//                     {idx < VALUES.length - 1}
//                   </Link>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="px-4 sm:px-6 lg:px-12">
//           <div
//             className={`border-b border-white/20 transition-all duration-500 ${
//               compactMode ? "w-0 opacity-0" : "w-full opacity-100"
//             }`}
//           />
//         </div>

//         {/* Main Nav */}
//         <div className="px-4 sm:px-6 lg:px-12">
//           <div className={`flex items-center justify-between py-4 transition-all duration-300 ${compactMode ? "py-3" : "py-4"}`}>
//             {/* Logo */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={isNavReady ? { opacity: 1, scale: 1 } : {}}
//               transition={{ duration: 0.7, ease: "easeOut" }}
//             >
//               <Link href="/" className="relative overflow-hidden text-2xl font-bold tracking-tight text-white hover:opacity-80 sm:text-3xl lg:text-5xl">
//                 <div className="flex items-center">
//                   <span>M</span>
//                   <motion.span
//                     initial={{ x: 0, opacity: 1 }}
//                     animate={{ x: logoScrolled ? -60 : 0, opacity: logoScrolled ? 0 : 1 }}
//                     transition={{ duration: 0.3, ease: "easeInOut" }}
//                     className="inline-block"
//                   >
//                     ATTER
//                   </motion.span>
//                 </div>
//               </Link>
//             </motion.div>

//             {/* Desktop Nav */}
//             {!compactMode && (
//               <nav className="hidden lg:flex items-center gap-8 lg:gap-24">
//                 {navItemsWithIndex.map((item, idx) => (
//                   <motion.div
//                     key={item.label}
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={isNavReady ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.7, ease: "easeOut", delay: isNavReady ? 0.5 + idx * 0.16 : 0 }}
//                   >
//                     {item.isDropdown ? (
//                       <div
//                         className="relative"
//                         onMouseEnter={handleDropdownEnter}
//                         onMouseLeave={handleDropdownLeave}
//                       >
//                         <button className="flex items-center gap-1 text-sm font-bold uppercase tracking-widest text-white hover:opacity-70 transition">
//                           <span>Initiatives</span>
//                           <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }}>
//                             <ChevronDown className="h-4 w-4" />
//                           </motion.div>
//                         </button>

//                         <AnimatePresence>
//                           {dropdownOpen && (
//                             <motion.div
//                               initial={{ opacity: 0, y: 8, scale: 0.95 }}
//                               animate={{ opacity: 1, y: 0, scale: 1 }}
//                               exit={{ opacity: 0, y: 8, scale: 0.95 }}
//                               transition={{ duration: 0.25 }}
//                               className="absolute left-1/2 top-full mt-4 w-40 -translate-x-1/2"
//                             >
//                               <div className="overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl">
//                                 {EVENT_SUB_LINKS.map((link) => (
//                                   <Link
//                                     key={link.id}
//                                     href={link.href}
//                                     onClick={() => setDropdownOpen(false)}
//                                     className="block px-5 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition"
//                                   >
//                                     {link.label}
//                                   </Link>
//                                 ))}
//                               </div>
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     ) : (
//                       <Link
//                         href={item.href}
//                         className="text-sm font-bold uppercase tracking-widest text-white hover:opacity-60 transition"
//                       >
//                         {item.label}
//                       </Link>
//                     )}
//                   </motion.div>
//                 ))}

//                 {/* CTA Button */}
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={isNavReady ? { opacity: 1, scale: 1 } : {}}
//                   transition={{ delay: isNavReady ? 1.4 : 0, duration: 0.8, ease: "easeOut" }}
//                   whileHover={{ y: -6 }}
//                   className="flex justify-start"
//                 >
//                   <motion.div
//                     className="relative"
//                     whileHover="hover"
//                     whileTap={{ scale: 0.98 }}
//                     initial="rest"
//                   >
//                     <Link
//                       href={CTA_HREF}
//                       className="relative inline-flex items-center justify-center gap-4 border border-white rounded-md px-8 py-4 text-sm font-bold tracking-widest uppercase overflow-hidden whitespace-nowrap"
//                     >
//                       <motion.div
//                         className="absolute inset-0 bg-white"
//                         initial={{ x: "-100%" }}
//                         variants={{ rest: { x: "-100%" }, hover: { x: "0%" } }}
//                         transition={{ duration: 0.5, ease: [0.6, 0.01, 0.4, 1] }}
//                       />
//                       <motion.span
//                         className="relative z-10 flex items-center gap-3"
//                         variants={{ rest: { color: "#ffffff" }, hover: { color: "#000000" } }}
//                         transition={{ duration: 0.25 }}
//                       >
//                         {CTA_LABEL}
//                         <motion.span
//                           variants={{ rest: { x: 0 }, hover: { x: 12 } }}
//                           transition={{ duration: 0.4, ease: "easeOut" }}
//                           className="inline-block"
//                         >
//                           →
//                         </motion.span>
//                       </motion.span>
//                     </Link>
//                   </motion.div>
//                 </motion.div>
//               </nav>
//             )}

//             {/* Mobile Toggle */}
//             {!compactMode && (
//               <motion.button
//                 initial={{ opacity: 0 }}
//                 animate={isNavReady ? { opacity: 1 } : {}}
//                 transition={{ delay: 1.5 }}
//                 onClick={() => setMobileMenuOpen((prev) => !prev)}
//                 className="text-white lg:hidden relative w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
//               >
//                 {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
//               </motion.button>
//             )}
//           </div>
//         </div>

//         {/* Compact Mobile Menu */}
//         <AnimatePresence>
//           {!compactMode && mobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.2 }}
//               className="fixed inset-0 z-40 lg:hidden"
//             >
//               {/* Backdrop */}
//               <div 
//                 className="absolute inset-0 bg-black/40"
//                 onClick={() => setMobileMenuOpen(false)}
//               />
              
//               {/* Compact Menu Panel */}
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0, y: -20 }}
//                 animate={{ scale: 1, opacity: 1, y: 0 }}
//                 exit={{ scale: 0.9, opacity: 0, y: -20 }}
//                 transition={{ duration: 0.3, ease: "easeOut" }}
//                 className="absolute top-12 left-4 right-4 bg-transparent backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"
//               >
//                 {/* Header */}
//                 <div className="flex items-center justify-between p-4">
//                   <span className="text-sm font-semibold text-white/80 uppercase tracking-widest">
//                     Menu
//                   </span>
//                   <button
//                     onClick={() => setMobileMenuOpen(false)}
//                     className="w-7 h-7 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-all"
//                   >
//                     <X className="h-3.5 w-3.5 text-white" />
//                   </button>
//                 </div>

//                 {/* Navigation Items - Compact */}
//                 <div className="px-3 pb-3 space-y-1">
//                   {navItemsWithIndex.map((item) => (
//                     <div key={item.label}>
//                       {item.isDropdown ? (
//                         <div className="space-y-1">
//                           <button
//                             onClick={toggleMobileDropdown}
//                             className="flex items-center justify-between w-full p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-left"
//                           >
//                             <span className="text-sm font-medium text-white">
//                               {item.label}
//                             </span>
//                             <motion.div
//                               animate={{ rotate: mobileDropdownOpen ? 180 : 0 }}
//                               transition={{ duration: 0.2 }}
//                             >
//                               <ChevronDown className="h-3.5 w-3.5 text-white/60" />
//                             </motion.div>
//                           </button>

//                           <AnimatePresence>
//                             {mobileDropdownOpen && (
//                               <motion.div
//                                 initial={{ opacity: 0, height: 0 }}
//                                 animate={{ opacity: 1, height: "auto" }}
//                                 exit={{ opacity: 0, height: 0 }}
//                                 transition={{ duration: 0.2 }}
//                                 className="pl-3 space-y-1 border-l border-white/20 ml-3"
//                               >
//                                 {EVENT_SUB_LINKS.map((link) => (
//                                   <Link
//                                     key={link.id}
//                                     href={link.href}
//                                     onClick={() => setMobileMenuOpen(false)}
//                                     className="block p-2 text-xs text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5"
//                                   >
//                                     {link.label}
//                                   </Link>
//                                 ))}
//                               </motion.div>
//                             )}
//                           </AnimatePresence>
//                         </div>
//                       ) : (
//                         <Link
//                           href={item.href}
//                           onClick={() => setMobileMenuOpen(false)}
//                           className="block p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-sm font-medium text-white"
//                         >
//                           {item.label}
//                         </Link>
//                       )}
//                     </div>
//                   ))}
//                 </div>

//                 {/* Compact CTA Button */}
//                 <div className="p-3 border-t border-white/10">
//                   <motion.div
//                     whileHover="hover"
//                     whileTap={{ scale: 0.95 }}
//                     initial="rest"
//                     className="relative"
//                   >
//                     <Link
//                       href={CTA_HREF}
//                       onClick={() => setMobileMenuOpen(false)}
//                       className="relative inline-flex items-center justify-center gap-2 border border-white rounded-lg px-4 py-2.5 text-xs font-bold tracking-widest uppercase overflow-hidden w-full"
//                     >
//                       <motion.div
//                         className="absolute inset-0 bg-white"
//                         initial={{ x: "-100%" }}
//                         variants={{ rest: { x: "-100%" }, hover: { x: "0%" } }}
//                         transition={{ duration: 0.4, ease: "easeInOut" }}
//                       />
//                       <motion.span
//                         className="relative z-10 flex items-center gap-1.5"
//                         variants={{ rest: { color: "#ffffff" }, hover: { color: "#000000" } }}
//                         transition={{ duration: 0.2 }}
//                       >
//                         {CTA_LABEL}
//                         <motion.span
//                           variants={{ rest: { x: 0 }, hover: { x: 4 } }}
//                           transition={{ duration: 0.3 }}
//                           className="inline-block"
//                         >
//                           →
//                         </motion.span>
//                       </motion.span>
//                     </Link>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </header>

//       <style jsx global>{`
//         @keyframes marquee {
//           from { transform: translateX(0%); }
//           to { transform: translateX(-50%); }
//         }
//         .animate-marquee {
//           animation: marquee 45s linear infinite;
//           animation-play-state: var(--marquee-paused, running);
//         }
        
//         /* Ensure no horizontal scrolling */
//         html, body {
//           overflow-x: hidden;
//           width: 100%;
//           position: relative;
//         }
        
//         /* Hide horizontal scrollbar but allow scrolling if needed */
//         ::-webkit-scrollbar {
//           display: none;
//         }
//         -ms-overflow-style: none;
//         scrollbar-width: none;
//       `}</style>
//     </>
//   );
// }




"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const EVENT_SUB_LINKS = [
  { id: "foundation", label: "Foundation", href: "/events#foundation" },
  { id: "fest", label: "Fest", href: "/events#fest" },
  { id: "camp", label: "Camp", href: "/events#camp" },
  { id: "night", label: "Night", href: "/events#matternight" },
] as const;

const VALUES = [
  { text: "CHRIST IS THE REASON.", href: "/reason" },
  { text: "WE CHOOSE EVERYONE.", href: "/choose" },
  { text: "RELATE & BE RELEVANT.", href: "/relate" },
  { text: "CREATED TO CREATE.", href: "/create" },
  { text: "GENEROUS BY CHOICE.", href: "/generous" },
  { text: "BE TRANSFORMED, NOT JUST INSPIRED.", href: "/transformed" },
  { text: "CONNECTED & RELATIONAL", href: "/connected" },
];

const NAV_ITEMS = ["About", "Talk"] as const;
const CTA_LABEL = "Join Our Gathering";
const CTA_HREF = "/gathering";

export default function NavigationBar({ isNavReady = false }: { isNavReady?: boolean }) {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  // Ref & state for fixed-position dropdown
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [triggerRect, setTriggerRect] = useState<DOMRect | null>(null);

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update trigger position when dropdown opens
  useEffect(() => {
    if (dropdownOpen && triggerRef.current) {
      setTriggerRect(triggerRef.current.getBoundingClientRect());
    }
  }, [dropdownOpen]);

  const marqueeVisible = scrollY < 80;
  const compactMode = scrollY >= 120;
  const logoScrolled = scrollY > 20;

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 180);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  const navItemsWithIndex = [
    ...NAV_ITEMS.map((item, i) => ({ label: item, href: `/${item.toLowerCase()}`, index: i })),
    { label: "Initiatives", href: "#", index: NAV_ITEMS.length, isDropdown: true },
    { label: "Contact", href: "/contact", index: NAV_ITEMS.length + 1 },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 w-full">
        {/* Marquee */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            marqueeVisible ? "py-3 sm:py-4" : "h-0 py-0"
          }`}
          onMouseEnter={() => document.documentElement.style.setProperty("--marquee-paused", "paused")}
          onMouseLeave={() => document.documentElement.style.removeProperty("--marquee-paused")}
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[0, 1].map((i) => (
              <div key={i} className="flex-shrink-0 flex items-center">
                {VALUES.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="px-2 sm:px-2 lg:px-8 inline-block text-xs font-light tracking-wider text-white hover:opacity-70 transition sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                  >
                    {item.text}
                    {idx < VALUES.length - 1 }
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="px-4 sm:px-6 lg:px-12">
          <div
            className={`border-b border-white/20 transition-all duration-500 ${
              compactMode ? "w-0 opacity-0" : "w-full opacity-100"
            }`}
          />
        </div>

        {/* Main Nav */}
        <div className="px-4 sm:px-6 lg:px-12">
          <div className={`flex items-center justify-between py-4 transition-all duration-300 ${compactMode ? "py-3" : "py-4"}`}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isNavReady ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Link href="/" className="relative overflow-hidden text-2xl font-bold tracking-tight text-white hover:opacity-80 sm:text-3xl lg:text-5xl">
                <div className="flex items-center">
                  <span>M</span>
                  <motion.span
                    initial={{ x: 0, opacity: 1 }}
                    animate={{ x: logoScrolled ? -60 : 0, opacity: logoScrolled ? 0 : 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="inline-block"
                  >
                    ATTER
                  </motion.span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Nav */}
            {!compactMode && (
              <nav className="hidden lg:flex items-center gap-8 lg:gap-24">
                {navItemsWithIndex.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isNavReady ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: "easeOut", delay: isNavReady ? 0.5 + idx * 0.16 : 0 }}
                  >
                    {item.isDropdown ? (
                      <div
                        className="relative"
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <button
                          ref={triggerRef}
                          className="flex items-center gap-1 text-sm font-bold uppercase tracking-widest text-white hover:opacity-70 transition"
                        >
                          <span>Initiatives</span>
                          <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }}>
                            <ChevronDown className="h-4 w-4" />
                          </motion.div>
                        </button>

                        {/* FIXED DROPDOWN — Uses position: fixed */}
                        <AnimatePresence>
                          {dropdownOpen && triggerRect && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              transition={{ duration: 0.25 }}
                              className="fixed z-[9999] origin-top-left" // Breaks out of any clipping
                            style={{
                              left: triggerRect.left,
                              top: triggerRect.bottom + 10,
                              width: triggerRect.width,   // This makes it EXACTLY the same width as the button!
                            }}
                              onMouseEnter={handleDropdownEnter}
                              onMouseLeave={handleDropdownLeave}
                            >
                              <div className="w-56 rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl py-3">
                                {EVENT_SUB_LINKS.map((link) => (
                                  <Link
                                    key={link.id}
                                    href={link.href}
                                    onClick={() => setDropdownOpen(false)}
                                    className="block px-6 py-3 text-sm font-medium text-white hover:bg-white/20 transition whitespace-nowrap"
                                  >
                                    {link.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm font-bold uppercase tracking-widest text-white hover:opacity-60 transition"
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isNavReady ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: isNavReady ? 1.4 : 0, duration: 0.8, ease: "easeOut" }}
                  whileHover={{ y: -6 }}
                  className="flex justify-start"
                >
                  <motion.div whileHover="hover" whileTap={{ scale: 0.98 }} initial="rest">
                    <Link
                      href={CTA_HREF}
                      className="relative inline-flex items-center justify-center gap-4 border border-white rounded-md px-8 py-4 text-sm font-bold tracking-widest uppercase overflow-hidden whitespace-nowrap"
                    >
                      <motion.div
                        className="absolute inset-0 bg-white"
                        initial={{ x: "-100%" }}
                        variants={{ rest: { x: "-100%" }, hover: { x: "0%" } }}
                        transition={{ duration: 0.5, ease: [0.6, 0.01, 0.4, 1] }}
                      />
                      <motion.span
                        className="relative z-10 flex items-center gap-3"
                        variants={{ rest: { color: "#ffffff" }, hover: { color: "#000000" } }}
                        transition={{ duration: 0.25 }}
                      >
                        {CTA_LABEL}
                        <motion.span
                          variants={{ rest: { x: 0 }, hover: { x: 12 } }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="inline-block"
                        >
                          →
                        </motion.span>
                      </motion.span>
                    </Link>
                  </motion.div>
                </motion.div>
              </nav>
            )}

            {/* Mobile Toggle */}
            {!compactMode && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={isNavReady ? { opacity: 1 } : {}}
                transition={{ delay: 1.5 }}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="text-white lg:hidden relative w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </motion.button>
            )}
          </div>
        </div>

        {/* Mobile Menu - unchanged */}
        <AnimatePresence>
          {!compactMode && mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 lg:hidden"
            >
              <div className="absolute inset-0 bg-black/40" onClick={() => setMobileMenuOpen(false)} />
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: -20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-12 left-4 right-4 bg-transparent backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"
              >
                <div className="flex items-center justify-between p-4">
                  <span className="text-sm font-semibold text-white/80 uppercase tracking-widest">Menu</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-7 h-7 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-all"
                  >
                    <X className="h-3.5 w-3.5 text-white" />
                  </button>
                </div>
                <div className="px-3 pb-3 space-y-1">
                  {navItemsWithIndex.map((item) => (
                    <div key={item.label}>
                      {item.isDropdown ? (
                        <div className="space-y-1">
                          <button
                            onClick={toggleMobileDropdown}
                            className="flex items-center justify-between w-full p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-left"
                          >
                            <span className="text-sm font-medium text-white">{item.label}</span>
                            <motion.div animate={{ rotate: mobileDropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                              <ChevronDown className="h-3.5 w-3.5 text-white/60" />
                            </motion.div>
                          </button>
                          <AnimatePresence>
                            {mobileDropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pl-3 space-y-1 border-l border-white/20 ml-3"
                              >
                                {EVENT_SUB_LINKS.map((link) => (
                                  <Link
                                    key={link.id}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block p-2 text-xs text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                                  >
                                    {link.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-sm font-medium text-white"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-white/10">
                  <motion.div whileHover="hover" whileTap={{ scale: 0.95 }} initial="rest">
                    <Link
                      href={CTA_HREF}
                      onClick={() => setMobileMenuOpen(false)}
                      className="relative inline-flex items-center justify-center gap-2 border border-white rounded-lg px-4 py-2.5 text-xs font-bold tracking-widest uppercase overflow-hidden w-full"
                    >
                      <motion.div
                        className="absolute inset-0 bg-white"
                        initial={{ x: "-100%" }}
                        variants={{ rest: { x: "-100%" }, hover: { x: "0%" } }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      />
                      <motion.span
                        className="relative z-10 flex items-center gap-1.5"
                        variants={{ rest: { color: "#ffffff" }, hover: { color: "#000000" } }}
                        transition={{ duration: 0.2 }}
                      >
                        {CTA_LABEL}
                        <motion.span variants={{ rest: { x: 0 }, hover: { x: 4 } }} transition={{ duration: 0.3 }} className="inline-block">
                          →
                        </motion.span>
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <style jsx global>{`
        @keyframes marquee {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
          animation-play-state: var(--marquee-paused, running);
        }
        html, body {
          overflow-x: hidden;
        }
      `}</style>
    </>
  );
}


