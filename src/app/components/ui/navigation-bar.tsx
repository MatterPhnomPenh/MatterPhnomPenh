"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationBarProps {
  activeSection?: string;
}

export default function NavigationBar({ activeSection = "about" }: NavigationBarProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isNavbarHovered, setIsNavbarHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const isScrolled = scrollY > 20;

  const navLinks = [
    { id: "about", label: "About", href: "/about" },
    { id: "events", label: "Events", href: "/events" },
    { id: "updates", label: "Updates", href: "/updates" },
    { id: "contact", label: "Contact", href: "/contact" },
  ];

  const eventSubLinks = [
    { id: "foundation", label: "Matter Foundation", href: "/events#foundation" },
    { id: "fest", label: "Matter Fest", href: "/events#fest" },
    { id: "camp", label: "Matter Camp", href: "/events#camp" },
    { id: "matternight", label: "Matter Night", href: "/events#matternight" },
  ];

  const isLinkActive = (link: { id: string; href: string }) => {
    if (activeSection === link.id) return true;
    if (currentPath === link.href) return true;
    if (link.id === "events" && currentPath.startsWith("/events")) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      } font-sans`}
      onMouseEnter={() => setIsNavbarHovered(true)}
      onMouseLeave={() => {
        setIsNavbarHovered(false);
        setHoveredLink(null);
      }}
    >
      <nav className="mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 relative overflow-hidden">
            <Link
              href="/"
              className="block text-2xl lg:text-5xl font-bold text-blue-900 tracking-tight hover:opacity-80 transition-opacity"
            >
              <div className="relative flex items-center">
                <span className="inline-block">M</span>
                <span
                  className={`inline-block transition-all duration-500 ease-in-out ${
                    isScrolled ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
                  }`}
                >
                  atter
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link);
              const isHovered = hoveredLink === link.id;
              const showUnderline =
                isNavbarHovered && isHovered ? true : !isNavbarHovered && isActive;

              return link.id === "events" ? (
                <div
                  key={link.id}
                  className="relative group"
                  onMouseEnter={() => setHoveredLink(link.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <div className="flex items-center gap-2 cursor-pointer select-none">
                    <Link
                      href={link.href}
                      className={`relative text-sm lg:text-2xl font-bold transition-colors duration-200 text-blue-900`}
                    >
                      {link.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-blue-900 transition-all duration-300 ${
                          showUnderline ? "w-full" : "w-0"
                        }`}
                      />
                    </Link>
                  </div>
                  <AnimatePresence>
                    {hoveredLink === "events" && (
                      <motion.ul
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-blue-100 z-50"
                      >
                        {eventSubLinks.map((subLink) => (
                          <li key={subLink.id}>
                            <Link
                              href={subLink.href}
                              className="block py-2 px-4 text-sm lg:text-lg text-blue-900 font-medium hover:text-blue-900 hover:bg-blue-50 transition-colors duration-150"
                            >
                              {subLink.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`relative text-sm lg:text-2xl font-bold transition-colors duration-200 text-blue-900`}
                  onMouseEnter={() => setHoveredLink(link.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-blue-900 transition-all duration-300 ${
                      showUnderline ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => {
                setIsMenuOpen((prev) => {
                  const newState = !prev;
                  if (!newState) setIsEventsOpen(false);
                  return newState;
                });
              }}
              className="p-2 text-blue-600 hover:text-blue-900 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 space-y-2 bg-white shadow-md rounded-lg py-4 px-6">
            {navLinks.map((link) => (
              <div key={link.id}>
                {link.id === "events" ? (
                  <>
                    <button
                      onClick={() => setIsEventsOpen(!isEventsOpen)}
                      className="flex items-center justify-between w-full text-blue-900 font-semibold text-lg py-2"
                    >
                      {link.label}
                      {isEventsOpen ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    <AnimatePresence>
                      {isEventsOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ul className="pl-4 mt-1 space-y-1">
                            {eventSubLinks.map((subLink) => (
                              <li key={subLink.id}>
                                <Link
                                  href={subLink.href}
                                  className="block text-blue-800 hover:text-blue-600 text-base py-1"
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setIsEventsOpen(false);
                                  }}
                                >
                                  {subLink.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block text-blue-900 text-lg font-semibold py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
