"use client";
import { useRef } from "react";

function BeenThereSection() {
  const ref = useRef(null);

  return (
    <section ref={ref} className="w-full py-24 flex items-center justify-center ">
      <div className="w-full max-w-7xl mx-auto flex flex-row items-start justify-between gap-16 px-4">
        {/* First Column: Large Text */}
        <div
          className="flex-1 text-right"
        >
          <div className="w-128 p-12 rounded-lg text-white">
            <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight ">
              Our Story is
            </h2>
            <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight ">
              Different.....
            </h2>
          </div>
        </div>

        {/* Second Column: Paragraph and Image */}
        <div
          className="flex-1 text-lg text-gray-600 leading-relaxed text-left relative"
        >
          <div className="w-128">
            <p className="text-lg text-white leading-relaxed p-12 rounded-lg relative z-10">
              Unlike traditional search firms, we&apos;ve been part of building innovative companies – like{' '}
              <span className="bg-yellow-300 font-semibold rounded-xl">Kickstarter</span>,{' '}
              <span className="bg-red-300 font-semibold rounded-xl">Casper</span> and{' '}
              <span className="bg-blue-300 font-semibold rounded-xl">Etsy</span> – from the ground up, giving us a deep understanding of what it takes to build effective, thriving teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeenThereSection;