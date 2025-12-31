

"use client";
import { motion } from "framer-motion";

const lines = [
  "It wouldn't",
  "Be the same",
  "Without you.",
];

export default function IntroHomeSection() {
  return (
    <div className="relative overflow-hidden">
      <section
        className="relative bg-black bg-cover bg-center bg-no-repeat min-h-screen flex flex-col"
        style={{ backgroundImage: "url('/images/ORS_Hoklin.jpg')" }}
      >
        <div className="relative z-10 flex-1 flex items-center justify-center px-8 lg:px-12">
          <div className="w-full h-full">

            {/* Left headline – only O is italic */}
            <motion.div
              className="absolute bottom-6 left-6 lg:left-12 lg:bottom-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <motion.div className="space-y-[-1rem] lg:space-y-[-1.5rem]">
                {lines.map((line, i) => (
                  <motion.h1
                    key={i}
                    className="text-4xl md:text-6xl lg:text-7xl text-yellow-400 tracking-tighter leading-tight drop-shadow-2xl uppercase"
                    style={{ fontFamily: "var(--font-playfair-sc), Georgia, serif", fontWeight: 700 }}
                    variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                  >
                    {line.split("").map((char, idx) => (
                      <span
                        key={idx}
                        className={char.toUpperCase() === "O" ? "italic" : ""}
                      >
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </motion.h1>
                ))}
              </motion.div>
            </motion.div>

            {/* Right section with YOU MATTER HERE and larger video */}
            <motion.div
              className="absolute bottom-8 right-4 lg:right-12 lg:bottom-12"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <div className="relative flex items-start gap-4 lg:gap-6">
                
                {/* Thin vertical line - made longer to match larger video */}
                <div className="w-px h-22 lg:h-52 bg-white/80 mt-1"></div>

                {/* Text section */}
                <div className="space-y-[-0.5rem] lg:space-y-[-0.5rem] flex flex-col justify-start leading-none">
                  {["YOU", "MATTER", "HERE"].map((word, i) => (
                    <motion.p
                      key={i}
                      className="lg:text-2xl text-sm font-bold tracking-widest uppercase text-white"
                      style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + i * 0.15, duration: 0.8 }}
                      viewport={{ once: false }}
                    >
                      {word}
                    </motion.p>
                  ))}

                {/* Larger video container - positioned to align with text */}
                <div className="relative pt-4 lg:pt-6">
                  {/* Large video - much bigger */}
                  <video
                    className="w-[72px] lg:w-[200px] pointer-events-none"
                    src="/videos/trans.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      height: 'auto',
                      objectFit: 'contain'
                    }}
                  />
                  {/* <GeometricLoader /> */}
                </div>
                </div>


              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
