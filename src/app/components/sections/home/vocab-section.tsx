"use client";
import { motion } from "framer-motion";

export default function VocabSection() {
  return (
    <section
      id="vocab"
      className="py-32 md:py-48 text-white overflow-hidden relative"
      style={{
        backgroundImage: `url('/images/Independence_Monument.jpg')`,  
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // optional: parallax effect
      }}
    >
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="lg:pl-48 flex flex-col items-start">
          {/* Title Block */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-left mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight lowercase mb-4">
              matter
            </h2>
            <p className="text-3xl md:text-5xl font-light tracking-tight lowercase">
              [mat-ter]
            </p>
            <p className="text-3xl md:text-5xl font-bold tracking-tighter lowercase mt-2">
              church.
            </p>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-xl text-left"
          >
            <p className="text-lg md:text-xl md:pl-24 font-light leading-relaxed tracking-wide text-white/90">
              MATTER Phnom Penh: We were empty matters without Him, yet we mattered to Him! Our city, specifically Phnom Penh; needs to hear the word the way we talk about it (relatable & relevant). That’s why we included Phnom Penh in our name.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


