"use client"
import { motion } from "framer-motion"

export function FoundationSection() {
  return (
    <section id="foundation" className="py-24 md:py-32 bg-black overflow-hidden">
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
              Foundation
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false, amount: 0.4 }}
              className="font-bold text-3xl md:text-5xl text-foreground mt-6 text-balance"
              style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
            >
              Once a year,<br />
              we go back to the roots.
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
              Once a year, we go back to the roots — to serve, love, and build with people, not for them.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false, amount: 0.4 }}
              className="text-muted-foreground text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
            >
              In Cambodia’s provinces, we serve children and families with limited opportunities but limitless dreams.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.4 }}
              className="text-muted-foreground text-lg leading-relaxed font-medium"
              style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
            >
              We believe the smallest act of service can create the biggest moment of encounter.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}