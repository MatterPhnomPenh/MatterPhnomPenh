// app/components/navigation-bar.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const EVENT_SUB_LINKS = [
  { id: "foundation", label: "Matter Foundation", href: "/events#foundation" },
  { id: "fest", label: "Matter Fest", href: "/events#fest" },
  { id: "camp", label: "Matter Camp", href: "/events#camp" },
  { id: "matternight", label: "Matter Night", href: "/events#matternight" },
] as const;

const MARQUEE_TEXT =
  "CHRIST IS THE REASON. WE CHOOSE EVERYONE. RELATE & BE RELEVANT. CREATED TO CREATE. GENEROUS BY CHOICE. BE TRANSFORMED, NOT JUST INSPIRED. CONNECTED & RELATIONAL";

const NAV_ITEMS = ["About", "Talk"] as const;
const CTA_LABEL = "Join Our Gathering";
const CTA_HREF = "/gathering";

export default function NavigationBar({ isNavReady = false }: { isNavReady?: boolean }) {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

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

  const closeMobileMenu = () => setMobileMenuOpen(false);

  // THIS IS THE KEY: Force re-mount + guaranteed stagger
  const navItemsWithIndex = [
    ...NAV_ITEMS.map((item, i) => ({ label: item, href: `/${item.toLowerCase()}`, index: i })),
    { label: "Initiatives", href: "#", index: NAV_ITEMS.length, isDropdown: true },
    { label: "Contact", href: "/contact", index: NAV_ITEMS.length + 1 },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* Marquee & Divider - unchanged */}
        <div className={`overflow-hidden transition-all duration-500 ${marqueeVisible ? "py-5" : "h-0 py-0"}`}>
          <div className="flex animate-marquee">
            {[MARQUEE_TEXT, MARQUEE_TEXT].map((text, i) => (
              <div key={i} className="flex-shrink-0 px-8 text-xl font-bold tracking-wider text-white lg:text-2xl">
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`border-b border-gray-200 transition-all duration-500 ${compactMode ? "w-0 opacity-0" : "w-full opacity-100"}`} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`flex items-center justify-between ${compactMode ? "py-6" : "py-4 lg:py-2"}`}>
            
            {/* Logo - M loads first, then ATTER slides out */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isNavReady ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Link href="/" className="relative overflow-hidden text-2xl font-bold tracking-tight text-white hover:opacity-80 lg:text-5xl">
                <div className="flex items-center">
                  <span>M</span>
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={isNavReady ? { x: logoScrolled ? "-100%" : "0%", opacity: logoScrolled ? 0 : 1 } : {}}
                    transition={{ 
                      duration: 0.8, 
                      ease: "easeOut",
                      delay: isNavReady ? 0.4 : 0  // Slides out after M appears
                    }}
                    className="inline-block"
                  >
                    ATTER
                  </motion.span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Nav - TRUE ONE-BY-ONE POP */}
            {!compactMode && (
              <nav className="hidden lg:flex items-center space-x-12">
                {navItemsWithIndex.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isNavReady ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                      delay: isNavReady ? 0.5 + idx * 0.16 : 0, // ← REAL stagger
                    }}
                  >
                    {item.isDropdown ? (
                      <div
                        className="relative"
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <button className="flex items-center space-x-1 text-sm font-bold uppercase tracking-widest text-white hover:opacity-70">
                          <span>Initiatives</span>
                          <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }}>
                            <ChevronDown className="h-4 w-4" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {dropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute left-1/2 top-full mt-2 w-40 -translate-x-1/2"
                            >
                              <div className="overflow-hidden rounded-md border border-white/30 bg-white/50 backdrop-blur-md shadow-lg">
                                <div className="py-1">
                                  {EVENT_SUB_LINKS.map((link) => (
                                    <Link
                                      key={link.id}
                                      href={link.href}
                                      onClick={() => setDropdownOpen(false)}
                                      className="block px-3 py-2 text-xs font-bold tracking-wider text-black hover:bg-white/40"
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

                {/* CTA Button - Last & biggest pop */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isNavReady ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: isNavReady ? 1.3 : 0, duration: 0.8, ease: "easeOut" }}
                >
                  <Link
                    href={CTA_HREF}
                    className="rounded-md border-2 border-white px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition"
                  >
                    {CTA_LABEL}
                  </Link>
                </motion.div>
              </nav>
            )}

            {/* Mobile Toggle */}
            {!compactMode && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={isNavReady ? { opacity: 1 } : {}}
                transition={{ delay: 1.5 }}
                onClick={() => setMobileMenuOpen(prev => !prev)}
                className="text-white lg:hidden"
              >
                {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </motion.button>
            )}
          </div>
        </div>

        {/* Mobile Menu & styles unchanged */}
        <AnimatePresence>
          {!compactMode && mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-gray-200 bg-black/90 backdrop-blur-md"
            >
              <div className="max-w-7xl mx-auto space-y-6 px-6 py-8">
                {/* same as before */}
                {[...NAV_ITEMS, "Contact"].map((item) => (
                  <Link key={item} href={`/${item.toLowerCase()}`} onClick={closeMobileMenu} className="block text-lg font-bold uppercase tracking-widest text-white">
                    {item}
                  </Link>
                ))}
                {/* Initiatives & CTA */}
              </div>
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
          display: flex;
          width: max-content;
          animation: marquee 38s linear infinite;
        }
      `}</style>
    </>
  );
}


