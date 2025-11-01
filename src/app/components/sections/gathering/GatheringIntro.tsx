// File: components/GatheringIntro.tsx
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"; // Assuming Next.js for Image component; adjust if not
import { useState, useEffect } from "react";

const GatheringIntro = () => {
  const slides = [
    {
      text: "United in Worship",
      alt: "Community worship"
    },
    {
      text: "Bonds of Faith",
      alt: "Prayer together"
    },
    {
      text: "Shared Testimonies",
      alt: "Believers connecting"
    },
    {
      text: "Renewed Commitment",
      alt: "Spiritual refreshment"
    },
    // Add more slides as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const current = slides[currentSlide];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-24 px-4 md:px-8 bg-black text-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold text-center mb-16 tracking-tight"
        >
          Gathering
        </motion.h1>
        {/* Auto-advancing Slideshow for Intro - using framer-motion for fade effect */}
        <div className="relative w-full h-64 md:h-96 mb-8 overflow-hidden rounded-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src="/Community.jpg" // B&W community gathering photo
                alt={current.alt}
                fill
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <p className="text-xl font-semibold text-white text-center max-w-md px-4">
                  {current.text}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="bg-black rounded-2xl p-8 md:p-12 shadow-lg border border-white text-black">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Theme/Topic
          </h2>
          <p className="text-lg text-white leading-relaxed max-w-2xl mx-auto mb-6">
            &quot;Unity in Faith: Coming Together as One Body in Christ.&quot; Join us for an inspiring gathering where we explore the power of community, worship, and shared testimonies. This event is designed to strengthen our bonds and renew our commitment to God&apos;s purpose.
          </p>
          <p className="text-lg text-white leading-relaxed max-w-2xl mx-auto mb-6">
            In a world that often feels divided, our gathering serves as a beacon of hope and togetherness. Drawing from the teachings of Ephesians 4:3 – &quot;Make every effort to keep the unity of the Spirit through the bond of peace&quot; – we will delve into practical ways to foster unity within our church family and beyond. Expect heartfelt discussions, interactive sessions, and moments of reflection that will leave you spiritually refreshed.
          </p>
          <p className="text-lg text-white leading-relaxed max-w-2xl mx-auto mb-6">
            Whether you&apos;re a long-time member or visiting for the first time, this gathering is an opportunity to connect with fellow believers, share your journey, and discover how God is moving in our midst. We believe that when we come together in faith, miracles happen – from healed relationships to ignited passions for ministry.
          </p>
          <div className="mt-8 p-4 bg-white rounded-lg text-black">
            <h3 className="text-xl font-semibold text-black mb-2">Key Highlights:</h3>
            <ul className="text-black space-y-1 text-left max-w-md mx-auto">
              <li>• Dynamic worship led by our praise team</li>
              <li>• Guest speaker sharing transformative stories</li>
              <li>• Small group breakout for deeper connections</li>
              <li>• Prayer stations for personal intercession</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default GatheringIntro;