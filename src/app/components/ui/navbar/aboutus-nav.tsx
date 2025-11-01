"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationBarProps {
  activeSection?: string;
}

export default function NavigationBar({ activeSection = "story" }: NavigationBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { id: "story", label: "Story", href: "/about#story" },
    { id: "mission", label: "Mission", href: "/about#mission" },
    { id: "vision", label: "Vision", href: "/about#vision" },
    { id: "core-value", label: "Core Values", href: "/about#core-value" },
    { id: "pastor", label: "Pastor", href: "/about#pastor" },
  ];

  const isLinkActive = (linkId: string) => {
    if (activeSection === linkId) return true;
    if (currentPath === "/about") {
      const hash = typeof window !== "undefined" ? window.location.hash : "";
      return `#${linkId}` === hash;
    }
    return false;
  };

  const containerVariants = {
    visible: { y: 0 },
    hidden: { y: -100 },
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800 font-sans"
      variants={containerVariants}
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <nav className="mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="block text-2xl lg:text-4xl font-bold text-white tracking-tight hover:opacity-80 transition-opacity"
            >
              <div className="relative flex items-center">
                <span className="inline-block">M</span>
                <span className="inline-block ml-1">
                  atter
                </span>
              </div>
            </Link>
          </div>

          {/* Center Nav: All links */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.id);
              const isHovered = hoveredId === link.id;
              const showUnderline = isHovered || isActive;

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`relative text-sm font-semibold transition-colors duration-200 text-white hover:text-gray-300 ${isActive ? "text-gray-300" : ""}`}
                  onMouseEnter={() => setHoveredId(link.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
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
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:text-gray-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-gray-900 shadow-md rounded-lg py-4 px-6 space-y-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="block text-white text-lg font-semibold py-2 hover:text-gray-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}