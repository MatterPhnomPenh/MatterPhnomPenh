

"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/about2.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 pt-32 lg:pt-32 lg:py-64 px-8 lg:px-48">
        <div className="text-left space-y-12">

          {/* First Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}   // ← REPLAYS EVERY TIME
            className="text-justify text-lg md:text-xl lg:text-2xl font-light leading-relaxed tracking-wide text-white/90"
            style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
          >
            We are a community of faith based in Phnom Penh, Cambodia. We started
            off with our first Gathering in March 2024, and it has now been more
            than a year in this journey.<br />
            In July 2025, MATTER Phnom Penh is now officially a part of{" "}
            <span className="font-medium text-white">Collective Global</span>; a
            collective of churches where we share ideas, challenge each other and
            grow together. It also becomes a platform where we can play our part
            in what God is doing as a bigger picture.
          </motion.p>

          {/* Buttons Row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}   // ← REPLAYS EVERY TIME
            className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 text-left"
            style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
          >
            {/* Button 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              viewport={{ once: false }}
              whileHover={{ y: -4 }}
            >
              <motion.div whileHover="hover" initial="rest">
                <Link
                  href="/about"
                  className="relative inline-flex items-center justify-center gap-2 sm:gap-3 border border-white rounded-md px-8 py-3.5 lg:px-10 lg:py-5 text-xs sm:text-sm font-medium tracking-widest uppercase overflow-hidden whitespace-nowrap w-full sm:w-auto text-center"
                >
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    variants={{ rest: { x: "-100%" }, hover: { x: "0%" } }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="relative z-10 flex items-center gap-2 sm:gap-3"
                    variants={{ rest: { color: "#ffffff" }, hover: { color: "#000000" } }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    More About Us
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

            {/* Button 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -4 }}
            >
              <motion.div whileHover="hover" initial="rest">
                <Link
                  href="/visit"
                  className="relative inline-flex items-center justify-center gap-2 sm:gap-3 border border-white rounded-md px-8 py-3.5 lg:px-10 lg:py-5 text-xs sm:text-sm font-medium tracking-widest uppercase overflow-hidden text-center w-full sm:w-auto"
                >
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    variants={{ rest: { x: "-100%" }, hover: { x: "0%" } }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="relative z-10 flex items-center gap-2 sm:gap-3"
                    variants={{ rest: { color: "#ffffff" }, hover: { color: "#000000" } }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    <span>Find Out More About Collective Global</span>
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
          </motion.div>

        </div>
      </div>
    </section>
  );
}