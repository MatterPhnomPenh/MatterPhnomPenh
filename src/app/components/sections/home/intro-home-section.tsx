"use client";
import { ChevronDown } from 'lucide-react';

export default function IntroHomeSection() {
  return (
    <section
      id="intro-home"
      className="relative w-full bg-white py-24 sm:py-24 md:py-48 px-4 sm:px-6 md:px-10 text-left overflow-hidden"
    >
      <div className="mx-auto px-4 relative z-10">
        <p className="text-2xl md:text-6xl font-sans font-bold text-[#2330ff] text-justify leading-tight">
          This is a space where your voice counts, your presence matters, 
          and you are always seen. In a world that moves fast, we slow down to remind you that you truly matter here.
        </p>
        <a
          href="#moving-forward"
          className="mt-8 flex justify-center cursor-pointer text-[#2330ff] no-underline animate-bounce"
        >
          <ChevronDown className="w-12 h-12 md:w-24 md:h-24" />
        </a>
      </div>
    </section>
  );
}