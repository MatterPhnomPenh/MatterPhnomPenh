"use client";
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function IntroAboutSection() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById('next-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id=""
      className="relative w-full bg-transparent py-24 sm:py-24 md:py-48 px-6 md:px-10 text-left "
    >
      <div className="mx-auto px-4 relative z-10">
        <p className="text-2xl md:text-6xl font-sans font-bold text-blue-900">
          Matter is a space where creativity meets purpose — sharing stories of faith, friendship, and mosaic art through events that celebrate Jesus and community.
        </p>
        <Link href="#next-section" onClick={scrollToSection} className="mt-8 inline-block cursor-pointer text-blue-900 no-underline">
          <ChevronDown className="w-12 h-12 md:w-24 md:h-24" />
        </Link>
      </div>
    </section>
  );
}