
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

// Custom TikTok Icon
const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
  </svg>
);

export default function TheDreamSection() {
  return (
    <section className="relative py-32 lg:py-48 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-8 md:px-24 lg:px-32">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-accent uppercase tracking-[0.3em] text-sm font-serif block bg-gradient-to-r from-lime-300 to-lime-400 bg-clip-text text-transparent"
            style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
          >
            The Dream
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground mt-6 leading-none tracking-tight"
            style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
          >
            Foundational Vision
          </motion.h2>
        </div>

        {/* Content */}
        <div className="max-w-8xl mx-auto space-y-16">
          {/* 2017 Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="pl-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold text-lime-400"
                      style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
                >2017</span>
                <div className="h-0.5 flex-1 bg-gradient-to-r from-lime-400/30 to-transparent" />
              </div>
              <p className="text-2xl lg:text-3xl text-gray-300 leading-relaxed"
                 style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
              >
                Sam saw a vision — people who had never heard of Jesus finally encountering Him.
              </p>
              <p className="text-xl lg:text-2xl text-lime-300/90 mt-6 leading-relaxed"
                style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
              >
                It wasn't that the message wasn't spoken; it just hadn't been spoken in a way they could understand.
              </p>
            </div>
          </motion.div>

          {/* Waterfall Prophecy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="pr-8 text-right">
              <div className="flex items-center gap-4 mb-6 justify-end">
                <div className="h-0.5 flex-1 bg-gradient-to-l from-cyan-400/30 to-transparent" />
                <span className="text-xl text-cyan-400"
                      style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
                >The Prophecy</span>
              </div>
              <p className="text-2xl lg:text-3xl text-gray-300 leading-relaxed"
                  style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
              >
                Around the same time, a stranger told Sam he saw him "falling into a waterfall" — not as a warning,
                <br /> 
                but as a call into the wilderness and into God's presence.
              </p>
              <p className="text-xl lg:text-2xl text-cyan-300/90 mt-6 leading-relaxed italic"
                  style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}

              >
                That season reshaped everything.
              </p>
            </div>
          </motion.div>

          {/* 2018 Dream */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="pl-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold text-lime-400"
                      style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
                >2018</span>
                <span className="text-gray-400"
                      style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
                >Phnom Penh</span>
                <div className="h-0.5 flex-1 bg-gradient-to-r from-lime-400/30 to-transparent" />
              </div>
              <p className="text-2xl lg:text-3xl text-gray-300 leading-relaxed"
                  style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
              >
                The dream became clear: to create a church where the message of Jesus could finally make sense to those who've never connected with it before.
              </p>
            </div>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 justify-center mt-16"
          >
            <motion.a
              href="https://facebook.com/matterphnompenh"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2, y: -6 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 border-2 border-white rounded-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://instagram.com/matterphnompenh"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2, y: -6 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 border-2 border-white rounded-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://tiktok.com/@matterphnompenh"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2, y: -6 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 border-2 border-white rounded-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              aria-label="TikTok"
            >
              <TiktokIcon />
            </motion.a>
          </motion.div>

          {/* View Our Team Button - FIXED closing tags */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="flex justify-center"
          >
            <motion.div whileHover="hover" initial="rest">
              <Link
                href="/team"
                className="relative inline-flex items-center gap-3 border-2 border-white rounded-md px-8 py-3.5 lg:px-10 lg:py-5 text-sm font-bold tracking-widest uppercase overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  variants={{ rest: { x: "-100%" }, hover: { x: "0%" } }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
                <motion.span
                  className="relative z-10 flex items-center gap-2 text-white"
                  variants={{ rest: { color: "#ffffff" }, hover: { color: "#000000" } }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  Join Our Team
                  <motion.span
                    variants={{ rest: { x: 0 }, hover: { x: 8 } }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Matter Phnom Penh. All rights reserved.
        </div>
      </div>
    </section>
  );
}