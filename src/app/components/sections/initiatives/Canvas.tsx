

"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export function CanvasSection() {
  const images = [
    "/images/canvas1.jpg",
    "/images/canvas2.jpg",
    "/images/canvas3.jpg",
    "/images/canvas4.jpg",
  ]

  const seasons = ["January", "April", "July", "October"]

  return (
    <section id="canvas" className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.4 }}
            className="text-purple-400 uppercase tracking-[0.3em] text-sm font-medium block mb-4"
            style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
          >
            CANVAS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.4 }}
            className="font-bold text-4xl md:text-6xl lg:text-7xl text-white mt-2 leading-tight"
            style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
          >
            Four Times a Year
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mt-2 block"
              style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
            >
              We Gather to Dream
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Main Layout: Images + Text */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Gallery Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.4 }}
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.4 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative h-48 md:h-64 rounded-2xl overflow-hidden group ${
                  index === 1 || index === 2 ? "mt-8" : ""
                }`}
              >
                <Image
                  src={img}
                  alt={`Canvas event in ${seasons[index]}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  priority={index < 2}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  viewport={{ once: false }}
                  className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-full border border-white/10"
                >
                  <span className="text-xs text-white font-medium">
                    {seasons[index]}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.4 }}
            className="space-y-8"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.4 }}
              className="text-gray-300 text-xl md:text-2xl leading-relaxed"
              style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
            >
              Four times a year — January, April, July, and October — we gather for CANVAS, a creative night that sets the tone for the next season.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: false, amount: 0.4 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full" />
              <p
                className="text-white text-lg md:text-xl pl-8 py-4"
                style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
              >
                "It's where we listen, dream, and collaborate with God."
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white text-lg md:text-xl leading-relaxed font-medium pt-6 border-t border-gray-800"
              style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
            >
              Every voice matters. Every idea can shape the story.
              <br />
              <span className="text-purple-400 mt-2 block">
                We don't stay static; we keep moving where God moves.
              </span>
            </motion.p>

            {/* Updated Floating Element: Now uses the 4 Canvas images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              className="flex items-center space-x-6 pt-8"
            >
              <div className="flex -space-x-3">
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="relative w-12 h-12 rounded-full overflow-hidden border-3 border-black shadow-lg"
                  >
                    <Image
                      src={img}
                      alt={`Canvas ${seasons[i]}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <span
                className="text-sm text-gray-400"
                style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
              >
                Moments from our Canvas gatherings
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated dots decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block"
        >
          <div className="flex flex-col space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                className="w-2 h-2 bg-purple-400 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}