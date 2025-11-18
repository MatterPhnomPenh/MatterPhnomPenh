


"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TalkSection() {
  return (
    <section id="talk" className="py-32 md:py-48 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Center - Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-8">
            Our Latest Talk
          </h2>
          <p className="text-lg md:text-xl font-light leading-relaxed tracking-wide text-white/90 max-w-3xl mx-auto">
            Description about the talk, meaning conversations blah blah bla.
          </p>
        </motion.div>

        {/* Middle Section - Video and Text Content with Equal Padding */}
        <div className="flex justify-center">
          <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Video - Left with padding */}
            <div className="w-full lg:w-1/2 max-w-xl lg:pr-10"> {/* Added right padding */}
              <a
                href="https://youtu.be/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full aspect-video relative rounded-md overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-300"
              >
                <video
                  src="/videos/wishes.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </a>
            </div>

            {/* Text Content - Right with matching padding */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-center lg:text-left space-y-8 lg:pl-10" 
            >
              <div className="space-y-4">
                <h3 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  JIGSAW PUZZLE
                </h3>
                <p className="text-xl text-white/80 font-light">
                  Pr. Sam Wujiale
                </p>
              </div>

              <div className="flex items-center gap-6 text-white/60 text-sm font-medium tracking-wide justify-center lg:justify-start">
                <span>15.11.2025</span>
                <span>•</span>
                <span>Matter Phnom Penh</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Center - Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div whileHover="hover" initial="rest" className="relative inline-block">
            <Link
              href="/talks"
              className="relative inline-flex items-center justify-center gap-3 border-2 border-white rounded-md px-8 py-3.5 text-sm font-bold tracking-widest uppercase overflow-hidden group"
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
                Listen To Other Talks
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
      </div>
    </section>
  );
}