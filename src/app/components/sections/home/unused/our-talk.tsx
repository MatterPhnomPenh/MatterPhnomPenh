




// "use client";
// import { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Image from "next/image";

// interface Slide {
//   id: number;
//   title: string;
//   image: string;
// }

// export default function OurTalkSection() {
//   const [currentSlide, setCurrentSlide] = useState<number>(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
//   const [isMobile, setIsMobile] = useState<boolean>(false);

//   const slides: Slide[] = [
//     {
//       id: 1,
//       title: "None Title",
//       image: "/images/DSC04882.jpg",
//     },
//     {
//       id: 2,
//       title: "None Title",
//       image: "/images/DSC05252.jpg",
//     },
//     {
//       id: 3,
//       title: "None Title",
//       image: "/images/DSC05260.jpg",
//     },
//     {
//       id: 4,
//       title: "None Title",
//       image: "/images/DSC05286.jpg",
//     },
//     {
//       id: 5,
//       title: "None Title",
//       image: "/images/DSC05265.jpg",
//     },
//   ];

//   // Detect mobile screen size
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
    
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const slidesPerPage = isMobile ? 1 : 4;
//   const maxIndex = slides.length - slidesPerPage;

//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev >= maxIndex ? 0 : prev + 1));
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying, maxIndex]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev < maxIndex ? prev + 1 : prev));
//     setIsAutoPlaying(false);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
//     setIsAutoPlaying(false);
//   };

//   return (
//     <section className="py-12 bg-white">
//       <div className="mx-auto text-left mb-12 md:px-10 px-6 lg:px-10 relative z-10">
//         <h2 className="text-5xl font-bold text-[#2330ff] mb-2 font-san">OUR TALK</h2>
//         <p className="space-y-4 text-gray-900 text-base md:text-lg leading-relaxed font-light">Where honest talk brings us closer</p>
//       </div>

//       <div className="overflow-hidden relative z-10">
//         <div
//           className="flex transition-transform duration-700 ease-in-out"
//           style={{ transform: `translateX(-${currentSlide * (100 / slidesPerPage)}%)` }}
//         >
//           {slides.map((slide) => (
//             <div
//               key={slide.id}
//               className="flex-shrink-0 w-full md:w-1/4 relative"
//             >
//               <div className="relative w-full h-[600px]">
//                 <Image
//                   src={`${slide.image}`}
//                   alt={slide.title}
//                   fill
//                   priority
//                   className="object-cover"
//                 />
//                 <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white text-center px-4 py-6">
//                   <h3 className="text-sm md:text-base font-light">{slide.title}</h3>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex justify-end mt-6 space-x-3 px-6 sm:px-10 relative z-10">
//         <button
//           onClick={prevSlide}
//           className="p-2 border border-[#2330ff] rounded-full text-[#2330ff] hover:text-white hover:bg-[#2330ff] disabled:opacity-30"
//           disabled={currentSlide === 0}
//         >
//           <ChevronLeft className="w-4 h-4" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="p-2 border border-[#2330ff] rounded-full text-[#2330ff] hover:text-white hover:bg-[#2330ff] disabled:opacity-30"
//           disabled={currentSlide >= maxIndex}
//         >
//           <ChevronRight className="w-4 h-4" />
//         </button>
//       </div>
//     </section>
//   );
// }


