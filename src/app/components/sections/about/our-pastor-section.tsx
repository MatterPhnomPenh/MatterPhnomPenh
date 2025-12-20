

"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function FoundersSection() {
  const sectionRef = useRef(null);

  return (
    <section 
      ref={sectionRef}
      id="founders" 
      className="relative pt-24 lg:pt-48 bg-black text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">

        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-lime-500/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-lime-400/3 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative px-8 md:px-24 lg:px-32 z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-accent uppercase tracking-[0.3em] text-sm font-serif block bg-gradient-to-r from-lime-300 to-lime-400 bg-clip-text text-transparent "
            style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
          >
            Our Founders
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground mt-6 leading-none tracking-tight"
            style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
          >
            Pr. Sam Wujiale & Sannyaliza Sreng
          </motion.h2>
        </div>

        {/* Hero Couple Gallery with Parallax */}
        <div className="relative mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -100, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ 
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3
              }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-lime-500/20"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image 
                src="/images/couple2.jpg" 
                alt="Sam and Aliza romantic portrait" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.5
              }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-lime-500/20 md:-translate-y-12"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image 
                src="/images/couple.jpg" 
                alt="Sam and Aliza embracing" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 100, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ 
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.7
              }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-lime-500/20"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image 
                src="/images/couple3.jpg" 
                alt="Sam and Aliza engagement moment" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>

        {/* Introduction with Typing Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ 
            duration: 1.5,
            delayChildren: 0.3,
            staggerChildren: 0.1
          }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center mb-32 relative"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-white/90 bg-gradient-to-r from-white via-white to-lime-100/80 bg-clip-text text-transparent"
            style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
            >
            {/* Pr. Sam Wujiale & Sannyaliza Sreng — a creative pioneer and a gifted storyteller, united by faith and a shared vision to build a church that speaks to this generation. */}
            Sam is a creative pioneer; Aliza has the gift of listening and telling stories that matter. <br /> They got engaged in 2024 and are planning to tie the knot soon.
          </motion.p>
        </motion.div>

        {/* Sam's Journey - Split Screen Effect */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-32">
          <div className="order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-lime-300 to-lime-400 bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
              >
                Sam's Journey
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6"
                >
                <p
                    className="text-lg lg:text-xl font-light leading-relaxed text-white/90"
                    style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
                >
                    Born in Singapore, Sam moved to Phnom Penh in 2019. Here he met Aliza in 2023, and together they began pursuing the dream God placed in their hearts — to build a church for this generation.
                </p>

                <p
                    className="text-lg lg:text-xl font-light leading-relaxed text-white/90"
                    style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
                >
                    Outside of church life, Sam leads{" "}
                    <a
                    href="https://www.originskh.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:text-lime-100 transition-colors duration-300"
                    >
                    ORIGINS STUDIOS
                    </a>
                    , a creative house in Phnom Penh. He loves traveling, swimming, classic cars, and anything creative.
                </p>
                </motion.div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 order-1 lg:order-2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl group"
            >
              <Image 
                src="/images/sam1.jpeg" 
                alt="sam pic 1" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-lime-400/10 to-transparent" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl group mt-8"
            >
              <Image 
                src="/images/pic2020.jpg" 
                alt="sam pic 2" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-lime-400/10 to-transparent" />
            </motion.div>
            
          </div>
        </div>

        {/* Aliza's Journey - Mirror Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-32">
          <div className="grid grid-cols-2 gap-4 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl group"
            >
              <Image 
                src="/images/liza.jpg" 
                alt="liza pic 1" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-lime-400/10 to-transparent" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl group mt-8"
            >
              <Image 
                src="/images/couple4.jpg" 
                alt="liza pic 1" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-lime-400/10 to-transparent" />
            </motion.div>
          </div>
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-lime-300 to-lime-400 bg-clip-text text-transparent text-right"
                style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
              >
                Aliza's Path
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6 text-right"
              >
                <p className="text-lg lg:text-xl font-light leading-relaxed text-white/90"
                   style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
                >
                  Aliza manages the studio alongside him, enjoys caring for her plants, making matcha, and sharing people’s stories.                </p>
                <p className="text-lg lg:text-xl font-light leading-relaxed text-white/90"
                   style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
                >
                  Together, they’re also proud pawrents to Bingo, their golden retriever.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
 
      </div>
    </section>
  );
}