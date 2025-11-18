

"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 md:py-48 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-left"
        >
          <p className="text-lg md:text-xl font-light leading-relaxed tracking-wide text-white/90">
            We are a community of faith based in Phnom Penh, Cambodia. We started
            off with our first Gathering in March 2024, and it has now been more
            than a year in this journey. In July 2025,
          </p>
          <br />
          <p className="text-lg md:text-xl font-light leading-relaxed tracking-wide text-white/90">
            MATTER Phnom Penh is now officially a part of Collective Global; a
            collective of churches where we share ideas, challenge each other and
            grow together. It also becomes a platform where we can play our part
            in what God is doing as a bigger picture.
          </p>

          {/* Buttons Row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="mt-24 flex flex-col sm:flex-row gap-6 text-left"
          >
            {/* Button 1 - Simple hover */}
            <a
              href="/about"
              className="inline-flex items-center justify-center gap-3 border border-white rounded-md px-10 py-5 text-sm font-medium tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              More About Us
              <span>→</span>
            </a>

            {/* Button 2 - Advanced left-to-right fill + text motion */}
            <motion.a
              href="/visit"
              className="relative inline-flex items-center justify-center gap-3 border border-white rounded-md px-10 py-5 text-sm font-medium tracking-widest uppercase overflow-hidden"
              whileHover="hover"
              initial="rest"
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
                className="relative z-10 flex items-center gap-3"
                initial={{ color: "#ffffff" }}
                variants={{
                  rest: { color: "#ffffff" },   // white text
                  hover: { color: "#000000" },  // black text on hover
                }}
                transition={{ duration: 0.2 }}
              >
                Find Out More About Collective Global
                <span>→</span>
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}