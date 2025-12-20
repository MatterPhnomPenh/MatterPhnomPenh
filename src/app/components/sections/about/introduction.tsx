

"use client"

import { motion } from "framer-motion"

export function IntroductionSection() {
  return (
    <section className="py-24 md:py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.4 }}
              className="text-accent uppercase tracking-[0.2em] text-sm font-medium block"
              style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
            >
              Introduction
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false, amount: 0.4 }}
              className="font-bold text-3xl md:text-5xl text-foreground mt-6 text-balance"
              style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
            >
              We're a creative faith community based in Phnom Penh, Cambodia.
            </motion.h2>
          </div>

          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.4 }}
              className="text-muted-foreground text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}

            >
              Our journey began in March 2024 with a small but passionate Gathering.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false, amount: 0.4 }}
              className="text-muted-foreground text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
            >
              A year later, in July 2025, we officially became part of Collective Global — a family of churches that
              share ideas, challenge one another, and grow together. Through this connection, we get to play our part in
              a bigger global story of what God is doing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.4 }}
              className="flex gap-8 pt-6"
              style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
            >
              <div>
                <p className="font-bold text-4xl text-primary">2024</p>
                <p className="text-muted-foreground text-sm mt-1">Founded</p>
              </div>
              <div>
                <p className="font-bold text-4xl text-primary">2025</p>
                <p className="text-muted-foreground text-sm mt-1">Collective Global</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}