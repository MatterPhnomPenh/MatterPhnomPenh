"use client";
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function IntroHomeSection() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById('next-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="intro-home"
      className="relative w-full bg-white py-24 sm:py-24 md:py-48 px-4 sm:px-6 md:px-10 text-left overflow-hidden"
    >

      {/* Your content on top */}
      <div className="mx-auto px-4 relative z-10">
        <p className="text-2xl md:text-6xl font-sans font-bold text-blue-900">
          Where every piece finds its purpose — a space to explore powerful stories, unleash creativity, and build a vibrant community centered on the love, truth, and life of Jesus Christ.        </p>
        <Link
          href="#details-home"
          onClick={scrollToSection}
          className="mt-8 inline-block cursor-pointer text-blue-900 no-underline"
        >
          <ChevronDown className="w-12 h-12 md:w-24 md:h-24" />
        </Link>
      </div>
    </section>
  );
}
