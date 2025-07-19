"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function UnderConstructionPage() {
  const [dots, setDots] = useState("");

  // Animate dots for loading effect
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center px-4"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          Under Construction{dots}
        </motion.h1>
        <p className="text-xl md:text-2xl mb-6 text-gray-300">
          We&apos;re building something amazing. Stay tuned!
        </p>
        <motion.div
          className="mt-8"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <svg
            className="w-16 h-16 mx-auto text-yellow-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19.428 15.428a2 2 0 00-1.856-.858l-3.714.743-2.714-2.714a2 2 0 00-2.856 0L3.572 15.286a2 2 0 00-.858 1.856l.743 3.714 2.714-2.714a2 2 0 002.856 0l2.714 2.714.743-3.714a2 2 0 001.856-.858l2.714-2.714-.743-3.714z"
            />
          </svg>
        </motion.div>
      </motion.div>
      <footer className="absolute bottom-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Company Name
      </footer>
    </div>
  );
}