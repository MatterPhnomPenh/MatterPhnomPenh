// // // "use client";
// // // import { useState } from 'react';
// // // import { ChevronLeft, ChevronRight } from 'lucide-react';

// // // interface Slide {
// // //   id: number;
// // //   title: string;
// // //   image: string;
// // // }

// // // export default function InitiativesSection() {
// // //   const [currentSlide, setCurrentSlide] = useState(0);
// // //   const slidesPerPage = 3.5;

// // //   const slides: Slide[] = [
// // //     {
// // //       id: 1,
// // //       title: "GATHERING",
// // //       image: "/images/DSC05286.jpg",
// // //     },
// // //     {
// // //       id: 2,
// // //       title: "CAMP",
// // //       image: "/images/DSC05193.jpg",
// // //     },
// // //     {
// // //       id: 3,
// // //       title: "FOUNDATION",
// // //       image: "/images/foundation.jpg",
// // //     },
// // //     {      
// // //       id: 4,
// // //       title: "NIGHT",
// // //       image: "/images/DSC04836.jpg",
// // //     },
// // //   ];

// // //   // Calculate the maximum slide index
// // //   const maxSlide = Math.max(0, slides.length - slidesPerPage);

// // //   const nextSlide = () => {
// // //     if (currentSlide < maxSlide) {
// // //       setCurrentSlide(currentSlide + 1);
// // //     }
// // //   };

// // //   const prevSlide = () => {
// // //     if (currentSlide > 0) {
// // //       setCurrentSlide(currentSlide - 1);
// // //     }
// // //   };

// // //   return (
// // //     <section className="py-16 px-6 sm:px-10">
// // //       <div className="max-w-7xl mx-auto">
// // //         {/* Header with centered title and buttons on the right */}
// // //         <div className="flex justify-between items-center mb-12">
// // //           {/* Centered Title */}
// // //           <div className="flex-1 text-center">
// // //             <h2 className="lg:text-7xl text-5xl font-bold text-white mb-2">Initiatives</h2>
// // //           </div>
          
// // //           {/* Buttons on the right */}
// // //           <div className="flex space-x-3">
// // //             <button
// // //               onClick={prevSlide}
// // //               className="p-2 border border-gray-300 rounded-full text-white disabled:opacity-30 hover:bg-white hover:text-black transition-all duration-300"
// // //               disabled={currentSlide === 0}
// // //             >
// // //               <ChevronLeft className="w-4 h-4" />
// // //             </button>
// // //             <button
// // //               onClick={nextSlide}
// // //               className="p-2 border border-gray-300 rounded-full text-white disabled:opacity-30 hover:bg-white hover:text-black transition-all duration-300"
// // //               disabled={currentSlide >= maxSlide}
// // //             >
// // //               <ChevronRight className="w-4 h-4" />
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Slider */}
// // //         <div className="overflow-hidden">
// // //           <div
// // //             className="flex transition-transform duration-700 ease-in-out"
// // //             style={{ transform: `translateX(-${currentSlide * (100 / slidesPerPage)}%)` }}
// // //           >
// // //             {slides.map((slide) => (
// // //               <div 
// // //                 key={slide.id} 
// // //                 className="flex-shrink-0 pr-0 pl-8"
// // //                 style={{ width: `${100 / slidesPerPage}%` }}
// // //               >
// // //                 <div className="relative h-[450px] rounded-lg overflow-hidden shadow-sm bg-gray-100 group">
// // //                   <img
// // //                     src={slide.image}
// // //                     alt={slide.title}
// // //                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
// // //                   />
// // //                   {/* Centered Title Overlay */}
// // //                   <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
// // //                     <h3 className="text-2xl font-bold text-white text-center px-4">
// // //                       {slide.title}
// // //                     </h3>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // "use client";
// // import { useState } from 'react';

// // interface Slide {
// //   id: number;
// //   title: string;
// //   image: string;
// // }

// // export default function InitiativesSection() {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const slidesPerPage = 3.5;
  
// //   const slides: Slide[] = [
// //     {
// //       id: 1,
// //       title: "GATHERING",
// //       image: "/images/DSC05286.jpg",
// //     },
// //     {
// //       id: 2,
// //       title: "CAMP",
// //       image: "/images/DSC05193.jpg",
// //     },
// //     {
// //       id: 3,
// //       title: "FOUNDATION",
// //       image: "/images/foundation.jpg",
// //     },
// //     {
// //       id: 4,
// //       title: "NIGHT",
// //       image: "/images/DSC04836.jpg",
// //     },
// //   ];

// //   // Calculate the maximum slide index
// //   const maxSlide = Math.max(0, slides.length - slidesPerPage);

// //   const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
// //     if (e.deltaY > 0) {
// //       // Scroll down = move right
// //       if (currentSlide < maxSlide) {
// //         setCurrentSlide(currentSlide + 1);
// //       }
// //     } else {
// //       // Scroll up = move left
// //       if (currentSlide > 0) {
// //         setCurrentSlide(currentSlide - 1);
// //       }
// //     }
// //   };

// //   return (
// //     <section className="py-16 px-6 sm:px-10">
// //       <div className="max-w-7xl mx-auto">
// //         {/* Header with centered title only */}
// //         <div className="flex justify-center items-center mb-12">
// //           {/* Centered Title */}
// //           <div className="text-center">
// //             <h2 className="lg:text-7xl text-5xl font-bold text-white mb-2">Initiatives</h2>
// //           </div>
// //         </div>

// //         {/* Slider with scroll handling */}
// //         <div 
// //           className="overflow-x-auto cursor-grab active:cursor-grabbing"
// //           onWheel={handleScroll}
// //         >
// //           <div
// //             className="flex transition-transform duration-700 ease-in-out"
// //             style={{ transform: `translateX(-${currentSlide * (100 / slidesPerPage)}%)` }}
// //           >
// //             {slides.map((slide) => (
// //               <div
// //                 key={slide.id}
// //                 className="flex-shrink-0 pr-0 pl-8"
// //                 style={{ width: `${100 / slidesPerPage}%` }}
// //               >
// //                 <div className="relative h-[450px] rounded-lg overflow-hidden shadow-sm bg-gray-100 group">
// //                   <img
// //                     src={slide.image}
// //                     alt={slide.title}
// //                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
// //                   />
// //                   {/* Centered Title Overlay */}
// //                   <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
// //                     <h3 className="text-2xl font-bold text-white text-center px-4">
// //                       {slide.title}
// //                     </h3>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";
// import { useState, useRef, useEffect } from 'react';

// interface Slide {
//   id: number;
//   title: string;
//   image: string;
// }

// export default function InitiativesSection() {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);

//   const slides: Slide[] = [
//     { id: 1, title: "GATHERING", image: "/images/DSC05286.jpg" },
//     { id: 2, title: "CAMP", image: "/images/DSC05193.jpg" },
//     { id: 3, title: "FOUNDATION", image: "/images/foundation.jpg" },
//     { id: 4, title: "NIGHT", image: "/images/DSC04836.jpg" },
//   ];

//   // Mouse drag scrolling
//   const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!scrollContainerRef.current) return;
//     setIsDragging(true);
//     setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
//     setScrollLeft(scrollContainerRef.current.scrollLeft);
//   };

//   const handleMouseLeave = () => {
//     setIsDragging(false);
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!isDragging || !scrollContainerRef.current) return;
//     e.preventDefault();
//     const x = e.pageX - scrollContainerRef.current.offsetLeft;
//     const walk = (x - startX) * 2; // Multiply for faster scroll
//     scrollContainerRef.current.scrollLeft = scrollLeft - walk;
//   };

//   // Optional: Add wheel scrolling (horizontal on vertical wheel)
//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (!container) return;

//     const handleWheel = (e: WheelEvent) => {
//       e.preventDefault();
//       container.scrollLeft += e.deltaY * 1.5; // Adjust sensitivity
//     };

//     container.addEventListener('wheel', handleWheel, { passive: false });
//     return () => container.removeEventListener('wheel', handleWheel);
//   }, []);

//   return (
//     <section className="py-16 px-6 sm:px-10">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex justify-center items-center mb-12">
//           <div className="text-center">
//             <h2 className="lg:text-7xl text-5xl font-bold text-white mb-2">
//               Initiatives
//             </h2>
//           </div>
//         </div>

//         {/* Smooth Horizontal Scroll Container */}
//         <div
//           ref={scrollContainerRef}
//           className="overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing select-none"
//           onMouseDown={handleMouseDown}
//           onMouseLeave={handleMouseLeave}
//           onMouseUp={handleMouseUp}
//           onMouseMove={handleMouseMove}
//           style={{
//             scrollBehavior: 'smooth',
//             WebkitOverflowScrolling: 'touch',
//           }}
//         >
//           <div className="flex gap-8 py-4"> {/* gap-8 = pl-8 equivalent spacing */}
//             {slides.map((slide) => (
//               <div
//                 key={slide.id}
//                 className="flex-shrink-0 w-[calc(100vw-6rem)] sm:w-[calc(50vw-4rem)] lg:w-[calc((100%/3.5)-2rem)] min-w-0"
//               >
//                 <div className="relative h-[450px] rounded-lg overflow-hidden shadow-sm bg-gray-100 group">
//                   <img
//                     src={slide.image}
//                     alt={slide.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                     <h3 className="text-2xl font-bold text-white text-center px-4">
//                       {slide.title}
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             {/* Optional: Add extra space at the end for natural feel */}
//             <div className="flex-shrink-0 w-8" />
//           </div>
//         </div>
//       </div>

//       {/* Hide scrollbar globally or locally */}
//       <style jsx>{`
//         .hide-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .hide-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </section>
//   );
// }


"use client";
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

interface Slide {
  id: number;
  title: string;
  image: string;
}

export default function InitiativesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const slides: Slide[] = [
    { id: 1, title: "GATHERING", image: "/images/DSC05286.jpg" },
    { id: 2, title: "CAMP", image: "/images/DSC05193.jpg" },
    { id: 3, title: "FOUNDATION", image: "/images/foundation.jpg" },
    { id: 4, title: "NIGHT", image: "/images/DSC04836.jpg" },
  ];

  // Drag to scroll
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Horizontal wheel scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY * 1.5;
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <section className="py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-center items-center mb-12">
          <h2 className="lg:text-7xl text-5xl font-bold text-white">
            Initiatives
          </h2>
        </div>

        {/* Smooth Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="flex gap-8 py-4">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="flex-shrink-0 w-[calc(100vw-6rem)] sm:w-[calc(50vw-4rem)] lg:w-[calc((100%/3.5)-2rem)]"
              >
                <div className="relative h-[450px] rounded-lg overflow-hidden shadow-sm bg-gray-100 group">
                  {/* Optimized Next.js Image */}
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 28vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority={slide.id <= 3} // Load first 3 instantly
                    quality={85}
                  />

                  {/* Dark overlay + title */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white text-center px-4">
                      {slide.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex-shrink-0 w-8" />
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}