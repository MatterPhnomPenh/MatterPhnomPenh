

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

// Custom TikTok Icon
const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
  </svg>
);


export default function PastorSection() {
  return (
    <section id="pastor" className="pt-24 lg:pt-48 bg-black text-white overflow-hidden">
      <div className="px-8 md:px-24 lg:px-32">
        {/* Page Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-5xl lg:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-500 text-center mb-16 lg:mb-24"
        >
          Our Pastor
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
         
          <div className="lg:pl-16 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative w-full h-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/ORS_Sam.jpg"
                alt="Pastor Sam"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 50vw"
                priority
              />
              {/* Signature */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute bottom-6 left-1/2 left-8 right-8 "
              >
                <Image
                  src="/images/sam-sign.png"
                  alt="Pastor Sam's Signature"
                  width={600}
                  height={200}
                  className="w-48 h-auto object-contain opacity-90 drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT: Text + Socials */}
          <div className="flex flex-col justify-between h-full min-h-[400px] lg:min-h-[500px]">
            {/* Text paragraphs – removed space-y entirely */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-lg lg:text-xl font-light leading-relaxed tracking-wide text-white/90 mb-8" // manual margin instead of space-y
              >
                We are a community of faith based in Phnom Penh, Cambodia. We started with our first Gathering in March 2024, and it has now been over a year in this journey.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-lg lg:text-xl font-light leading-relaxed tracking-wide text-white/90"
              >
                In July 2025,{" "}
                <span className="font-medium text-white">MATTER Phnom Penh</span>{" "}
                officially became part of{" "}
                <span className="font-medium text-white">Collective Global</span>
                — a collective of churches where we share ideas, challenge each other, and grow together. It&apos;s also a platform to play our part in what God is doing on a larger scale.
              </motion.p>
            </div>

          </div>
        </div>
                   
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center gap-6 justify-center lg:justify-center lg:mt-16"
            >
              <motion.a
                href="https://facebook.com/yourpage"
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
                href="https://instagram.com/yourpage"
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
                href="https://tiktok.com/@yourpage"
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

        {/* View Our Team Button */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ y: -4 }}
          className="flex justify-center mt-16 lg:mt-24"
        >
          <motion.div whileHover="hover" initial="rest">
            <Link
              href="/team"
              className="relative inline-flex items-center gap-3 border-2 border-white rounded-md px-8 py-3.5 lg:px-10 lg:py-5 text-sm font-bold tracking-widest uppercase overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                variants={{
                  rest: { x: "-100%" },
                  hover: { x: "0%" },
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
              <motion.span
                className="relative z-10 flex items-center gap-2 text-white"
                variants={{
                  rest: { color: "#ffffff" },
                  hover: { color: "#000000" },
                }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                View Our Team
                <motion.span
                  variants={{
                    rest: { x: 0 },
                    hover: { x: 8 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}