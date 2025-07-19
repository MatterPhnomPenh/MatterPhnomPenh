

"use client";

import { ArrowRight } from "lucide-react";

export default function WishMessageSection() {
  return (
    <section className="relative bg-blue-900 w-full px-10 py-20 flex justify-center items-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 relative z-10">

        {/* MP4 Video Thumbnail */}
        <div className="w-full md:w-1/2 aspect-video relative overflow-hidden rounded-lg shadow-lg">
          <a
            href="https://youtu.be/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <video
              src="/videos/wishes.mov"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-xl"
            />
          </a>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-white space-y-6 text-center md:text-left z-20 relative">
          <p className="uppercase text-sm tracking-widest font-semibold opacity-80">Wish Message:</p>
          <h2 className="text-4xl font-extrabold">You are not alone; you have us</h2>
          <p className="text-lg font-semibold opacity-90">Matter Team</p>

          <a
            href="https://youtu.be/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-white hover:text-blue-900 transition"
          >
            Watch Now <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
    
  );
}