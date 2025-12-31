

"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const EVENT_SUB_LINKS = [
  { id: "foundation", label: "Foundation", href: "/initiatives#foundation" },
  { id: "camp", label: "Camp", href: "/initiatives#camp" },
  { id: "canvas", label: "Canvas", href: "/initiatives#canvas" },
  { id: "hangs", label: "Hangs", href: "/initiatives#hangs" },
  { id: "bible-study", label: "Bible Study", href: "/initiatives#bible-study" },
] as const;

const VALUES = [
  { text: "CHRIST IS THE REASON.", href: "/about#CoreValue" },
  { text: "WE CHOOSE EVERYONE.", href: "/about#CoreValue" },
  { text: "RELATE & BE RELEVANT.", href: "/about#CoreValue" },
  { text: "CREATED TO CREATE.", href: "/about#CoreValue" },
  { text: "GENEROUS BY CHOICE.", href: "/about#CoreValue" },
  { text: "BE TRANSFORMED, NOT JUST INSPIRED.", href: "/about#CoreValue" },
  { text: "CONNECTED & RELATIONAL", href: "/about#CoreValue" },
];

const NAV_ITEMS = ["About", "Talk"] as const;
const CTA_LABEL = "Join Our Gathering";

export default function NavigationBar({
  isNavReady = false,
  onOpenGatheringModal,
}: {
  isNavReady?: boolean;
  onOpenGatheringModal?: () => void;
}) {
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [triggerRect, setTriggerRect] = useState<DOMRect | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Track scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update dropdown position
  useEffect(() => {
    if (dropdownOpen && triggerRef.current) {
      setTriggerRect(triggerRef.current.getBoundingClientRect());
    }
  }, [dropdownOpen]);

  // ————————————————————————
  // Determine current page & active states
  // ————————————————————————
  const isHomePage = pathname === "/";
  const currentHash = typeof window !== "undefined" ? window.location.hash : "";

  const isInitiativesActive = pathname === "/initiatives" || pathname.startsWith("/initiatives#");
  const isContactActive = pathname === "/contact";
  const isAboutActive = pathname === "/about";
  const isTalkActive = pathname === "/talk";

  // Hide marquee + divider completely when not on homepage
  const showMarqueeAndDivider = isHomePage;
  const marqueeVisible = showMarqueeAndDivider && scrollY < 80;

  // Different scroll thresholds
  const compactMode = scrollY >= 80;
  const logoScrolled = isHomePage ? scrollY > 20 : scrollY > 80;

  // Dropdown hover handlers
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
    ...NAV_ITEMS.map((item, i) => ({
      label: item,
      href: `/${item.toLowerCase()}`,
      index: i,
    })),
    { label: "Initiatives", href: "#", index: NAV_ITEMS.length, isDropdown: true },
    { label: "Contact", href: "/contact", index: NAV_ITEMS.length + 1 },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 w-full">
        {/* Marquee - Only visible on homepage */}
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
                  <React.Fragment key={idx}>
                    <Link
                      href={item.href}
                      className="px-2 sm:px-2 lg:px-8 inline-block text-xs font-light tracking-wider text-white hover:opacity-70 transition sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                      style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
                    >
                      {item.text}
                    </Link>
                    {idx < VALUES.length - 1}
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Divider Line - Only on homepage */}
        <div className="px-4 sm:px-6 lg:px-12">
          <div
            className={`border-b border-white/20 transition-all duration-500 ${
              showMarqueeAndDivider && !compactMode ? "w-full opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>

        {/* Main Navigation */}
        <div className="px-4 sm:px-6 lg:px-12">
          <div
            className={`flex items-center justify-between py-4 transition-all duration-300 ${
              compactMode ? "py-3" : "py-4"
            }`}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isNavReady ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Link
                href="/"
                className={`relative overflow-hidden font-bold tracking-tight text-white hover:opacity-80 transition-all duration-300 ${
                  compactMode ? "text-4xl lg:text-5xl" : "text-2xl sm:text-3xl lg:text-5xl"
                }`}
              >
                <div className="flex items-center" style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}>
                  <span>M</span>
                  <motion.span
                    initial={{ x: 0, opacity: 1 }}
                    animate={{ x: logoScrolled ? -60 : 0, opacity: logoScrolled ? 0 : 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="inline-block"
                    style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
                  >
                    ATTER
                  </motion.span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className={`hidden lg:flex items-center gap-8 lg:gap-24 transition-all duration-300 ${
              logoScrolled ? "opacity-0 pointer-initiatives-none" : "opacity-100"
            }`}>
              {navItemsWithIndex.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isNavReady ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                    delay: isNavReady ? 0.5 + idx * 0.16 : 0,
                  }}
                >
                  {item.isDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <button
                        ref={triggerRef}
                        className={`flex items-center gap-1 text-sm font-bold uppercase tracking-widest transition-all ${
                          isInitiativesActive
                            ? "text-white opacity-100"
                            : "text-white/70 hover:text-white hover:opacity-100"
                        }`}
                      >
                        <span>Initiatives</span>
                        <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }}>
                          <ChevronDown className="h-4 w-4" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {dropdownOpen && triggerRect && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.25 }}
                            className="fixed z-[9999] origin-top-left"
                            style={{
                              left: triggerRect.left,
                              top: triggerRect.bottom + 10,
                              width: triggerRect.width,
                            }}
                            onMouseEnter={handleDropdownEnter}
                            onMouseLeave={handleDropdownLeave}
                          >
                            <div className="w-56 rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl py-3">
                              {EVENT_SUB_LINKS.map((link) => {
                                const isSubActive =
                                  pathname === "/initiatives" && currentHash === link.href.split("#")[1];
                                return (
                                  <Link
                                    key={link.id}
                                    href={link.href}
                                    onClick={() => setDropdownOpen(false)}
                                    className={`block px-6 py-3 text-sm font-medium transition whitespace-nowrap ${
                                      isSubActive
                                        ? "bg-white/30 text-white font-bold"
                                        : "text-white hover:bg-white/20"
                                    }`}
                                  >
                                    {link.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-sm font-bold uppercase tracking-widest transition-all ${
                        item.label === "About" && isAboutActive
                          ? "text-white opacity-100"
                          : item.label === "Talk" && isTalkActive
                            ? "text-white opacity-100"
                            : item.label === "Contact" && isContactActive
                              ? "text-white opacity-100"
                              : "text-white/70 hover:text-white hover:opacity-100"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Desktop CTA Button – NOW OPENS MODAL */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isNavReady ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: isNavReady ? 1.4 : 0, duration: 0.8, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className={logoScrolled ? "opacity-0 pointer-initiatives-none" : ""}
              >
                <motion.div whileHover="hover" whileTap={{ scale: 0.98 }}>
                  <button
                    onClick={onOpenGatheringModal}
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
                      >
                        →
                      </motion.span>
                    </motion.span>
                  </button>
                </motion.div>
              </motion.div>
            </nav>

            {/* Mobile Menu Toggle */}
            {!mobileMenuOpen && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={isNavReady ? { opacity: 1 } : {}}
                transition={{ delay: 1.5 }}
                onClick={() => setMobileMenuOpen(true)}
                className={`text-white lg:hidden relative w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 ${
                  logoScrolled ? "opacity-0 pointer-initiatives-none" : ""
                }`}
              >
                <Menu className="h-4 w-4" />
              </motion.button>
            )}
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 lg:hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/40"
                onClick={() => setMobileMenuOpen(false)}
              />

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: -20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-4 left-4 right-4 bg-transparent backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"
              >
                <div className="flex items-center justify-end p-4">
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
                            className={`flex items-center justify-between w-full p-3 rounded-xl transition-all text-left ${
                              isInitiativesActive
                                ? "bg-white/20 text-white font-bold"
                                : "bg-white/5 hover:bg-white/10 text-white"
                            }`}
                          >
                            <span className="text-sm font-medium">{item.label}</span>
                            <motion.div animate={{ rotate: mobileDropdownOpen ? 180 : 0 }}>
                              <ChevronDown className="h-3.5 w-3.5 text-white/60" />
                            </motion.div>
                          </button>
                          <AnimatePresence>
                            {mobileDropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pl-3 space-y-1 border-l border-white/20 ml-3"
                              >
                                {EVENT_SUB_LINKS.map((link) => {
                                  const isSubActive = currentHash === link.href.split("#")[1];
                                  return (
                                    <Link
                                      key={link.id}
                                      href={link.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className={`block p-2 text-xs rounded-lg transition-colors ${
                                        isSubActive
                                          ? "text-white font-bold bg-white/20"
                                          : "text-white/70 hover:text-white hover:bg-white/10"
                                      }`}
                                    >
                                      {link.label}
                                    </Link>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block p-3 rounded-xl transition-all text-sm font-medium ${
                            (item.label === "About" && isAboutActive) ||
                            (item.label === "Talk" && isTalkActive) ||
                            (item.label === "Contact" && isContactActive)
                              ? "bg-white/20 text-white font-bold"
                              : "bg-white/5 hover:bg-white/10 text-white"
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile CTA Button – NOW OPENS MODAL */}
                <div className="p-3 border-t border-white/10">
                  <button
                    onClick={() => {
                      onOpenGatheringModal?.();
                      setMobileMenuOpen(false);
                    }}
                    className="relative inline-flex w-full items-center justify-center gap-2 border border-white rounded-lg px-4 py-2.5 text-xs font-bold tracking-widest uppercase overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-1.5">
                      {CTA_LABEL} <span>→</span>
                    </span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <style jsx global>{`
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
          animation-play-state: var(--marquee-paused, running);
        }
        html,
        body {
          overflow-x: hidden;
        }
      `}</style>
    </>
  );
}



