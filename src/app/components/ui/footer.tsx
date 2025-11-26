"use client";

import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { motion } from "framer-motion";
import MPopup from "./MPopup";

export default function Footer() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const socialLinks = [
    { Icon: FaFacebookF, href: "https://web.facebook.com/matterphnompenh/", label: "Facebook" },
    { Icon: FaInstagram, href: "https://www.instagram.com/matterphnompenh/", label: "Instagram" },
    { Icon: FaTelegramPlane, href: "https://t.me/phnompenhmatters", label: "Telegram" },
    { Icon: SiTiktok, href: "https://www.tiktok.com/@matterphnompenh", label: "TikTok" },
  ];

  return (
    <footer
      id="footer"
      className="relative w-full bg-black text-black px-6 py-8 md:px-8 md:py-12 overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Content - Centered and Minimal */}
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h2 className="text-2xl text-white font-bold tracking-wide">MATTER</h2>
            <p className="text-sm text-white opacity-80 font-light">YOU MATTER HERE</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map(({ Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/50 border border-white/30 text-black rounded-full flex items-center justify-center hover:bg-white/70 transition-all"
                aria-label={label}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Icon className="w-3 h-3" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="pt-4 border-t border-white/20 w-full max-w-xs"
          >
            <p className="text-sm opacity-70">
              Phnom Penh © {new Date().getFullYear()}
            </p>
          </motion.div>
        </div>
      </div>

      <MPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </footer>
  );
}