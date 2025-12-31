"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export function BibleStudySection() {
  return (
    <section id="bible-study"className="relative bg-[#050505] text-white overflow-hidden py-32 selection:bg-white/20">
      
      {/* Spotlight Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute -inset-32 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none left-1/2 -translate-x-1/2" 
      />

      <div className="container mx-auto px-8 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-16"
        >
          {/* Header */}
          <div className="space-y-6">
             <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-blue-400 uppercase tracking-[0.3em] text-sm font-medium block mb-4"
                style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}

             >
                The Core
             </motion.span>
             <h2 className="text-6xl font-medium md:text-8xl font-serif tracking-tighter text-white"
                style={{ fontFamily: "var(--font-rubik), Georgia, serif"}}
            >
               BIBLE STUDY
             </h2>
          </div>

          {/* Main Body Text */}
          <div className="space-y-10 text-lg md:text-2xl font-serif text-gray-300 leading-relaxed max-w-3xl mx-auto px-4"
               style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
          >
            <p className="text-white font-medium tracking-wide"
            >
              Everything we believe starts with the Word.
            </p>
            <p>
              We know reading the Bible can feel complicated — that’s why we do it together.
            </p>
            <p>
            As a community, we unpack Scripture in real language, rediscover truth, and see how it applies to our world today.
        </p>
          </div>

          {/* Contrast Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative mt-20 p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent max-w-2xl mx-auto"
          >
            <div className="bg-neutral-900/80 backdrop-blur-md rounded-xl p-8 md:p-12 border border-white/5">
              <div className="grid md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
                
                {/* Left: Old Way */}
                <div className="space-y-6 pt-4 md:pt-0"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-red-500/30 flex items-center justify-center text-red-500/60 font-serif italic text-xl">✕</div>
                    <h3 className="text-xl font-medium text-gray-400"
                        style={{ fontFamily: "var(--font-rubik), Georgia, serif"}}>
                        The Old Way</h3>
                  </div>
                  <div className="space-y-1 text-left pl-14"
                                 style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
                  >
                    <p className="text-gray-500 line-through decoration-red-500/30">Less lecture.</p>
                    <p className="text-gray-500 line-through decoration-red-500/30">Less rules.</p>
                  </div>
                </div>

                {/* Right: New Way */}
                <div className="space-y-6 pt-4 md:pt-0 md:pl-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 font-serif italic text-xl">✓</div>
                    <h3 className="text-xl font-medium text-white"
                        style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
                    >The New Way</h3>
                  </div>
                  <div className="space-y-1 text-left pl-14"
                        style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
                  >
                    <p className="text-white font-medium">More dialogue.</p>
                    <p className="text-white font-medium">More revelation.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
          style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
        >
          {/* View Itinerary */}
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
                href="https://t.me/phnompenhmatters"
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
                  Join Matter Bible Study
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
        </motion.div>
      </div>
    </section>
  )
}