
"use client";

import Link from "next/link";

export default function MatterNightSection() {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-screen bg-white text-black overflow-hidden">
      {/* Text Content */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12 md:p-16">
        <div className="text-center max-w-xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2330ff] mb-6 leading-tight">
            Night<sup className="text-2xl align-super">M</sup> at Origins Studios.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
          Matter Night happens every Friday at Origins Studios. It is a dedicated time to gather, share stories, listen deeply, and connect with others who believe that every voice matters. It is more than a meeting it is a space where community grows and you are always welcome.   
          </p>
          <Link href="/contact" >
            <button
              className="bg-transparent border border-[#2330ff] text-[#2330ff] uppercase px-6 py-3 text-sm sm:text-lg rounded-full font-semibold hover:bg-[#2330ff] hover:text-white transition"
            >
            Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="w-full md:w-1/2 h-64 sm:h-96 md:h-[800px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/matter-night.jpg')",
        }}
      />
    </section>
  );
}
