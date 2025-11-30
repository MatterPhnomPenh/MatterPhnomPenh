import { motion } from "framer-motion";

export default function AnimatedMOrb() {
  return (
    <motion.div
      className="h-12 w-12 lg:h-24 lg:w-24 bg-black relative overflow-hidden flex items-center justify-center rounded-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Outer pulsing ring */}
      <motion.div
        className="absolute inset-0 w-full h-full border-2 border-white/30 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          borderRadius: ["50%", "30%", "50%"],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Inner pulsing ring (slightly offset timing) */}
      <motion.div
        className="absolute inset-2 lg:inset-4 w-[calc(100%-1rem)] lg:w-[calc(100%-2rem)] h-[calc(100%-1rem)] lg:h-[calc(100%-2rem)] border border-white/20 rounded-full"
        animate={{
          scale: [1.2, 1, 1.2],
          borderRadius: ["30%", "50%", "30%"],
          rotate: [45, 225, 405],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* The bold centered M */}
      <div className="relative z-10 font-black text-white text-xl lg:text-5xl tracking-tighter select-none">
        M
      </div>
    </motion.div>
  );
}