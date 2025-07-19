

"use client";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from "next/image";

interface Slide {
  id: number;
  title: string;
  image: string;
}

export default function MatterFoundation() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [slidesPerPage, setSlidesPerPage] = useState<number>(2);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Sankranta 2025",
      image: "/blue1.jpg",
    },
    {
      id: 2,
      title: "SkyFest 2025",
      image: "/blue2.jpg",
    },
    {
      id: 3,
      title: "The best festival!",
      image: "/blue3.jpg",
    },
    {
      id: 4,
      title: "Education is a right.",
      image: "/blue4.jpg",
    },
    {
      id: 5,
      title: "Party Night 2025",
      image: "/blue5.jpg",
    },
  ];

  const maxIndex = slides.length - slidesPerPage;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerPage(1);
      } else {
        setSlidesPerPage(2);
      }
      setCurrentSlide(0); // Reset to first slide when resizing
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < maxIndex ? prev + 1 : prev));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="mx-auto text-left mb-12 px-6 md:px-10">
        <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4 font-sans">
          Foundation<sup className="text-xl md:text-2xl align-super">M</sup>
        </h2>
        <p className="text-base md:text-lg text-black font-light">
          Every moment matters. Just like each piece in the Matter Foundation, together they create something meaningful, beautiful, and whole.
        </p>
      </div>

      <div className="overflow-hidden px-4">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * (100 / slidesPerPage)}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className={`flex-shrink-0 ${slidesPerPage === 1 ? 'w-full' : 'w-1/2'} px-2`}>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-sm bg-zinc-900 text-white">
                <div
                  className="relative rounded overflow-hidden mb-3 flex items-center justify-center"
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#1A202C",
                  }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover w-full h-full"
                  />
                  <button className="absolute top-2 right-2 text-white text-sm bg-gray-700 px-2 py-1 rounded">
                    {slide.title}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end mt-6 px-4 space-x-3">
        <button
          onClick={prevSlide}
          className="p-2 border border-blue-900 bg-white rounded-full text-blue-900 hover:bg-blue-900 hover:text-white disabled:opacity-30"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 border border-blue-900 rounded-full bg-white text-blue-900 hover:bg-blue-900 hover:text-white disabled:opacity-30"
          disabled={currentSlide >= slides.length - slidesPerPage}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}