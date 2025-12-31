"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export function CampSection() {
  const slides = [
    { id: 1, type: "video", title: "Morning", desc: "Rainy meditation", videoSrc: "/videos/camp3.mov" },
    { id: 2, type: "video", title: "Game Scene", desc: "Camp Initialization", videoSrc: "/videos/camp2.mov" },
    { id: 3, type: "video", title: "Chill", desc: "Night gathering", videoSrc: "/videos/camp1.mov" },
  ]

  return (
    <section id="camp" className="relative min-h-screen bg-[#050505] text-white overflow-hidden selection:bg-white/20 flex flex-col">
      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-50 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Grid Pattern (grayscale) */}
      <div
        className="absolute inset-0 z-0 opacity-[0.08]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container mx-auto px-8 flex flex-col flex-1 relative z-10">
        {/* TOP: LIVE EXPERIENCE + CAMP */}
        <div className="pt-12 pb-8 text-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 text-xs text-gray-500 font-mono tracking-widest uppercase mb-6"
            style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
          >
            <span className="w-2 h-2 rounded-full bg-gray-500 animate-pulse" />
            Live Experience
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[0.85] tracking-tighter font-medium text-white"
            style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
          >
            CAMP
          </motion.h1>
        </div>

        {/* CENTER: Three Videos */}
        <div className="flex-1 flex items-center justify-center py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 w-full max-w-6xl">
            {slides.map((slide, index) => (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.2 }}
                viewport={{ once: true }}
                className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 group"
              >
                <video
                  src={slide.videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/10" />

                <div
                  className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-xs font-mono">
                      0{index + 1}
                    </span>
                    <span className="text-sm font-medium text-white/80">{slide.title}</span>
                  </div>
                  <p className="text-xs text-white/60 font-light">{slide.desc}</p>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM: Description Text */}
        <div className="py-12 max-w-3xl mx-auto text-center space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
          >
            Once a year, we escape the noise.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
          >
            Our annual camp is a creative retreat — a time for reflection, ideas, and real conversations surrounded by nature.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed font-medium"
            style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
          >
            It’s not just for fun; it’s for clarity — to hear what God is saying in the quiet.
          </motion.p>
        </div>

        {/* Footer: Location + Buttons in the SAME ROW */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="pt-8 pb-12 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Location */}
            <div className="flex flex-col text-center md:text-left">
              <span className="text-xs text-gray-500 uppercase tracking-widest mb-1">Location</span>
              <span className="text-lg font-light">Kompot, Cambodia</span>
            </div>

            {/* Buttons – smaller, cleaner size to match the location text */}
            <div
              className="flex flex-col sm:flex-row gap-4"
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
                    className="relative inline-flex items-center justify-center gap-2 border border-white rounded-md px-6 py-2.5 text-xs font-medium tracking-widest uppercase overflow-hidden whitespace-nowrap"
                  >
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ x: "-100%" }}
                      variants={{ rest: { x: "-100%" }, hover: { x: "0%" } }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                    <motion.span
                      className="relative z-10 flex items-center gap-2"
                      variants={{ rest: { color: "#ffffff" }, hover: { color: "#000000" } }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      Join With Us
                      <motion.span
                        variants={{ rest: { x: 0 }, hover: { x: 6 } }}
                        transition={{ duration: 0.3 }}
                      >
                        →
                      </motion.span>
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}