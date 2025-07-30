

"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function IntroEventsSection() {
  return (
    <section
      id="intro-events"
      className="relative w-full bg-transparent py-24 sm:py-24 md:py-48 px-4 sm:px-6 md:px-10 text-left overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.png" 
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
          className="pointer-events-none"
        />
      </div>

      {/* Foreground Content */}
      <div className="mx-auto relative z-10">
        <h2 className="text-2xl md:text-6xl font-sans font-bold text-[#2330ff]">
          Matter&apos;s
          <br />
          Events 
          <br />
          Creative Meetup       
        </h2>

        <p className="text-xl md:text-2xl font-sans font-light text-[#2330ff] py-12">
          Connecting Matter&apos;s
          <br className="block md:hidden" />
          <span className="hidden md:inline"> </span>
          top creative minds
        </p>


        <Link href="#new-event-section">
          <button className="flex items-center border border-[#2330ff] uppercase px-4 py-2 bg-[#2330ff] text-white rounded-full font-sans font-medium hover:bg-transparent hover:text-[#2330ff] transition-colors text-sm md:text-base">
            YMH to our next event
            <motion.div
              className="ml-3"
              animate={{ x: [0, 6, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            >
              →
            </motion.div>
          </button>
        </Link>
      </div>
    </section>
  );
}
