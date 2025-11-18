"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const eventSubLinks = [
  { id: "foundation", label: "Matter Foundation", href: "/events#foundation" },
  { id: "fest", label: "Matter Fest", href: "/events#fest" },
  { id: "camp", label: "Matter Camp", href: "/events#camp" },
  { id: "matternight", label: "Matter Night", href: "/events#matternight" },
];

export default function NavigationBar() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const marqueeGoneAfter = 80;
  const compactModeAfter = 120;
  const showMarquee = scrollY < marqueeGoneAfter;
  const isCompact = scrollY >= compactModeAfter;

  const marqueeTexts = [
    "CHRIST IS THE REASON. WE CHOOSE EVERYONE. RELATE & BE RELEVANT. CREATED TO CREATE. GENEROUS BY CHOICE. BE TRANSFORMED, NOT JUST INSPIRED. CONNECTED & RELATIONAL",
  ];
  const doubled = [...marqueeTexts, ...marqueeTexts];

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 180);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        {/* Marquee */}
        <div className={`overflow-hidden transition-all duration-500 ${showMarquee ? "py-5" : "py-0 h-0"}`}>
          <div className="flex animate-marquee">
            {doubled.map((text, i) => (
              <div key={i} className="flex-shrink-0 px-8 text-xl lg:text-2xl font-bold text-white tracking-wider">
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Border */}
        <div className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-500 ${isCompact ? "opacity-0" : "opacity-100"}`}>
          <div className={`border-b border-gray-200 transition-all duration-500 ${isCompact ? "w-0" : "w-full"}`} />
        </div>

        {/* Logo + Nav */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-500 ${isCompact ? "py-6" : "py-4 lg:py-2"}`}>
            
            {/* PERFECT LOGO — NO JUMP, NO SHIFT, 100% SAME POSITION */}
            <Link href="/" className="flex-shrink-0">
              <div className="relative h-20 w-80 flex items-center">
                {/* Invisible placeholder — reserves exact space forever */}
                <div className="invisible flex items-baseline">
                  <span className="text-white font-bold tracking-tight text-5xl lg:text-6xl">M</span>
                  <span className="ml-1 text-white font-bold tracking-tight text-5xl lg:text-6xl">ATTER</span>
                </div>

                <AnimatePresence mode="wait">
                  {/* Full MATTER — appears/disappears perfectly */}
                  {!isCompact && (
                    <motion.div
                      key="full-matter"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-baseline"
                    >
                      <span className="text-white font-bold tracking-tight text-5xl lg:text-6xl">M</span>

                      {/* ATTER — destroys & rebuilds perfectly */}
                      <div className="inline-flex ml-1">
                        {["A", "T", "T", "E", "R"].map((letter, i) => (
                          <motion.span
                            key={letter + i}
                            className="inline-block text-white font-bold tracking-tight text-5xl lg:text-6xl"
                            initial={{
                              opacity: 0,
                              x: (i - 2) * 280,
                              y: 200,
                              rotate: i % 2 === 0 ? -480 : 480,
                              scale: 0
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                              y: 0,
                              rotate: 0,
                              scale: 1
                            }}
                            exit={{
                              opacity: 0,
                              x: (i - 2) * 380,
                              y: [0, -160, 450],
                              rotate: i % 2 === 0 ? -780 : 780,
                              scale: [1, 2, 0]
                            }}
                            transition={{
                              duration: 0.95,
                              delay: i * 0.1,
                              ease: "easeInOut"
                            }}
                          >
                            {letter}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Compact Mode — Only M, slightly smaller */}
                  {isCompact && (
                    <motion.div
                      key="compact-m"
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 0.88, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 320, damping: 22 }}
                      className="absolute inset-0 flex items-center"
                    >
                      <span className="text-white font-bold tracking-tight text-4xl lg:text-5xl">M</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Link>

            {/* Desktop Navigation */}
            {!isCompact && (
              <>
                <nav className="hidden lg:flex items-center space-x-12">
                  {["About", "Talk"].map((item) => (
                    <Link key={item} href={`/${item.toLowerCase().replace(" ", "-")}`} className="text-sm font-bold tracking-widest uppercase text-white hover:opacity-60 transition">
                      {item}
                    </Link>
                  ))}

                  {/* TINY WHITE DROPDOWN */}
                  <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <button className="flex items-center space-x-1 text-sm font-bold tracking-widest uppercase text-white hover:opacity-70 transition">
                      <span>Initiatives</span>
                      <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.25 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-36"
                        >
                          <div className="bg-white/50 backdrop-blur-md border border-white/30 rounded-md shadow-lg">
                            <div className="py-1">
                              {eventSubLinks.map((link) => (
                                <Link
                                  key={link.id}
                                  href={link.href}
                                  onClick={() => setDropdownOpen(false)}
                                  className="block px-3 py-1.5 text-xs font-bold tracking-wider text-black hover:bg-white/40 transition"
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link href="/contact" className="text-sm font-bold tracking-widest uppercase text-white hover:opacity-60 transition">
                    Contact
                  </Link>

                  <Link
                    href="/gathering"
                    className="px-8 py-3.5 border-2 border-white rounded-md text-white text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition"
                  >
                    Join Our Gathering
                  </Link>
                </nav>

                <button onClick={() => setMobileMenuOpen((prev) => !prev)} className="lg:hidden text-white">
                  {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                </button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {!isCompact && mobileMenuOpen && (
          <div className="border-t border-gray-200 bg-black/90 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
              {["About", "Talk", "Contact"].map((item) => (
                <Link key={item} href={`/${item.toLowerCase().replace(" ", "-")}`} onClick={() => setMobileMenuOpen(false)} className="block text-lg font-bold tracking-widest uppercase text-white">
                  {item}
                </Link>
              ))}

              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-lg font-bold tracking-widest uppercase text-white">Initiatives</span>
                  <ChevronDown className="h-5 w-5 text-white transition-transform group-open:rotate-180" />
                </summary>
                <div className="mt-4 ml-4 space-y-3 border-l-2 border-white/30 pl-6">
                  {eventSubLinks.map((link) => (
                    <Link key={link.id} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold tracking-wider text-white/90 hover:text-white transition">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </details>

              <Link href="/gathering" onClick={() => setMobileMenuOpen(false)} className="block px-8 py-4 border-2 border-white rounded-md text-white text-sm font-bold tracking-widest uppercase text-center hover:bg-white hover:text-black transition">
                Join Our Gathering
              </Link>
            </div>
          </div>
        )}
      </header>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 38s linear infinite;
        }
      `}</style>
    </>
  );
}