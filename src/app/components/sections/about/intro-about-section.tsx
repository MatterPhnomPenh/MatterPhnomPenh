"use client";
import { ChevronDown } from 'lucide-react';

export default function IntroAboutSection() {

  return (
    <section
      id="intro-about"
      className="relative w-full bg-transparent py-24 sm:py-24 md:py-48 px-6 md:px-10 text-left "
    >
      <div className="mx-auto px-4 relative z-10">
        <p className="text-2xl md:text-6xl font-sans font-bold text-[#2330ff] text-justify leading-tight">
          We built You Matter Here to offer a refuge from the noise and rush of life, 
          where your voice is important, your presence makes a difference, 
          and your journey is honored every step of the way.
        </p>
        <a
          href="#video-about"
          className="mt-8 inline-block cursor-pointer text-[#2330ff] no-underline"
        >
          <ChevronDown className="w-12 h-12 md:w-24 md:h-24" />
        </a>
      </div>
    </section>
  );
}