
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-6">
      <motion.h1
        className="text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        404 
      </motion.h1>

      <motion.h2
        className="text-2xl mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {/* Page Not Found */}
        Under Construction Page
      </motion.h2>

      <motion.p
        className="mb-6 max-w-md text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link
          href="/"
          className="inline-block bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition"
        >
          Go back home
        </Link>
      </motion.div>
    </main>
  );
}
