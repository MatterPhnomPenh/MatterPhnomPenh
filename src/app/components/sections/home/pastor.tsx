


"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

// TikTok icon since it's not available in Lucide
const TiktokIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="20" 
    height="20" 
    fill="currentColor"
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
  </svg>
);

export default function PastorSection() {
  return (
    <section id="pastor" className="py-32 md:py-48 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column - Only Title */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-start"
          >
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-500">
              Our Pastor
            </h2>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Content Text */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8 lg:pt-32 text-lg md:text-xl font-light leading-relaxed tracking-wide text-white/90"
            >
              <p>
                We are a community of faith based in Phnom Penh, Cambodia. We
                started off with our first Gathering in March 2024, and it has
                now been more than a year in this journey. In July 2025,
              </p>
              <p>
                MATTER Phnom Penh is now officially a part of{" "}
                <span className="font-medium text-white">Collective Global</span>
                : a collective of churches where we share ideas, challenge each
                other and grow together. It also becomes a platform where we can
                play our part in what God is doing as a bigger picture.
              </p>
            </motion.div>

            {/* Social Icons + View Our Team Button */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center gap-6 lg:gap-8"
            >
              {/* Social Icons */}
              <div className="flex items-center gap-4 lg:gap-6">
                {/* Facebook */}
                <motion.a
                  href="https://facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 border-2 border-white text-white rounded-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  <span className="sr-only">Facebook</span>
                  <Facebook className="w-5 h-5" />
                </motion.a>

                {/* Instagram */}
                <motion.a
                  href="https://instagram.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 border-2 border-white text-white rounded-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  <span className="sr-only">Instagram</span>
                  <Instagram className="w-5 h-5" />
                </motion.a>

                {/* TikTok */}
                <motion.a
                  href="https://tiktok.com/@yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 border-2 border-white text-white rounded-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  <span className="sr-only">TikTok</span>
                  <TiktokIcon />
                </motion.a>
              </div>

              {/* View Our Team Button with motion line */}
              <motion.div
                whileHover="hover"
                initial="rest"
                className="relative"
              >
                <Link
                  href="/team"
                  className="relative inline-flex items-center justify-center gap-3 border-2 border-white rounded-md px-8 py-3.5 text-sm font-bold tracking-widest uppercase overflow-hidden group"
                >
                  {/* Background fill from left to right */}
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    variants={{
                      rest: { x: "-100%" },
                      hover: { x: "0%" },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />

                  {/* Text with color change */}
                  <motion.span
                    className="relative z-10 flex items-center gap-2"
                    variants={{
                      rest: { color: "#ffffff" },   // white text
                      hover: { color: "#000000" },  // black text on hover
                    }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    View Our Team
                    <motion.span
                      variants={{
                        rest: { x: 0 },
                        hover: { x: 4 },
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


