"use client";
import { motion } from "framer-motion";

export function VisionMissionSection() {
  return (
    <section className="py-24 bg-black md:py-32 lg:py-40">
      <div className="container mx-auto px-8">
        <div className="mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-accent uppercase tracking-[0.2em] text-sm font-medium block"
            style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
          >
            Vision & Mission
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mt-8 leading-tight"
            style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
          >
            We&apos;re here to restore what church was always meant to be —
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-muted-foreground text-xl md:text-2xl mt-6"
            style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
          >
            not a brand, not a building, not a Sunday event.
          </motion.p>
        </div>

        <div className="mx-auto mt-20 lg:mt-28 lg:pl-24 pl-4">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            className="border-l-4 border-primary pl-8 lg:pl-12 py-6"
            style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
          >
            <p className="text-foreground text-xl md:text-2xl lg:text-3xl leading-relaxed"
               style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
            >
              We want to become the kind of church Jesus envisioned for this city —
              <span className="text-primary ml-2"
                    style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
              >
                real, raw, and relevant.
              </span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-muted-foreground text-lg md:text-xl mt-12 text-center leading-relaxed"
            style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
          >
            A community so impactful that people talk about <strong>who we are</strong>,<br />
            not just what we say.
          </motion.p>
        </div>
      </div>
    </section>
  );
}