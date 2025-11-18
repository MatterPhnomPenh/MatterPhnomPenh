// import { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Play, Pause, Heart, MapPinned } from 'lucide-react';

// interface Slide {
//   id: number;
//   title: string;
//   verse: string;
//   image: string;
//   description?: string;
// }

// export default function ChurchFoundation() {
//   const [currentSlide, setCurrentSlide] = useState<number>(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
//   const [isHovering, setIsHovering] = useState<boolean>(false);

//   const slides: Slide[] = [
//     {
//       id: 1,
//       title: "Community Gathering",
//       verse: "For where two or three gather in my name, there am I with them.",
//       description: "Sunday Worship Service",
//       image: "/about.jpg",
//     },
//     {
//       id: 2,
//       title: "Youth Ministry",
//       verse: "Let no one despise you for your youth.",
//       description: "Building Future Leaders",      image: "/about.jpg",
//     },
//     {
//       id: 3,
//       title: "Outreach Program",
//       verse: "Love your neighbor as yourself.",
//       description: "Serving Our Community",
//       image: "/about.jpg",
//     },
//     {
//       id: 4,
//       title: "Prayer & Worship",
//       verse: "The Lord is near to all who call on him.",
//       description: "Wednesday Night Prayer",
//       image: "/about.jpg",
//     },
//   ];

//   const maxIndex = slides.length - 1;

//   useEffect(() => {
//     if (!isAutoPlaying || isHovering) return;

//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev >= maxIndex ? 0 : prev + 1));
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying, maxIndex, isHovering]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev < maxIndex ? prev + 1 : 0));
//     setIsAutoPlaying(false);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev > 0 ? prev - 1 : maxIndex));
//     setIsAutoPlaying(false);
//   };

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index);
//     setIsAutoPlaying(false);
//   };

//   return (
//     <section className="min-h-screen bg-black py-16 px-4 relative overflow-hidden">
//       {/* Subtle Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 20px 20px, rgb(59, 130, 246) 1px, transparent 0)`,
//           backgroundSize: '40px 40px'
//         }} />
//       </div>

//       {/* Floating Cross Elements */}
//       <div className="absolute top-20 right-20 opacity-10">
//         <MapPinned className="w-32 h-32 text-blue-600" strokeWidth={1} />
//       </div>
//       <div className="absolute bottom-20 left-20 opacity-10">
//         <MapPinned className="w-24 h-24 text-blue-600" strokeWidth={1} />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center justify-center mb-4">
//             <div className="h-px w-12 bg-gradient-to-r from-transparent to-white" />
//             <MapPinned className="w-6 h-6 text-white mx-4" />
//             <div className="h-px w-12 bg-gradient-to-l from-transparent to-white" />
//           </div>
          
//           <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 tracking-tight">
//             Matter Foundation
//           </h1>
          
//           <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
//             Building faith, hope, and love in our community through Christ-centered ministry
//           </p>
//         </div>

//         {/* Main Slideshow */}
//         <div 
//           className="relative"
//           onMouseEnter={() => setIsHovering(true)}
//           onMouseLeave={() => setIsHovering(false)}
//         >
//           {/* Slide Container */}
//           <div className="relative h-[500px] md:h-[700px] rounded-3xl overflow-hidden shadow-2xl">
//             {slides.map((slide, index) => (
//               <div
//                 key={slide.id}
//                 className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
//                   index === currentSlide
//                     ? 'opacity-100 scale-100'
//                     : 'opacity-0 scale-110'
//                 }`}
//               >
//                 {/* Image */}
//                 <img
//                   src={slide.image}
//                   alt={slide.title}
//                   className="w-full h-full object-cover"
//                 />
                
//                 {/* Elegant Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                
//                 {/* Content */}
//                 <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
//                   <div className="max-w-3xl">
//                     {/* Category Badge */}
//                     {slide.description && (
//                       <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
//                         <Heart className="w-4 h-4 text-blue-300" />
//                         <span className="text-white/90 text-sm font-medium tracking-wide">
//                           {slide.description}
//                         </span>
//                       </div>
//                     )}
                    
//                     {/* Title */}
//                     <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
//                       {slide.title}
//                     </h2>
                    
//                     {/* Bible Verse */}
//                     <div className="border-l-4 border-blue-400 pl-6">
//                       <p className="text-xl md:text-2xl text-white/95 italic font-light leading-relaxed">
//                         "{slide.verse}"
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Decorative Corner Element */}
//                 {/* <div className="absolute top-8 right-8">
//                   <div className="w-16 h-16 border-t-2 border-r-2 border-white/30 rounded-tr-2xl" />
//                 </div>

//                 <div className="absolute top-8 left-8">
//                   <div className="w-16 h-16 border-t-2 border-l-2 border-white/30 rounded-tl-2xl" />
//                 </div> */}

//               </div>
//             ))}
//           </div>

//           {/* Navigation Buttons */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-xl text-slate-800 hover:bg-white hover:scale-110 transition-all duration-300 group"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
//           </button>
          
//           <button
//             onClick={nextSlide}
//             className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-xl text-slate-800 hover:bg-white hover:scale-110 transition-all duration-300 group"
//             aria-label="Next slide"
//           >
//             <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
//           </button>

//           {/* Play/Pause */}
//           <button
//             onClick={() => setIsAutoPlaying(!isAutoPlaying)}
//             className="absolute bottom-6 right-6 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg text-slate-800 hover:bg-white transition-all duration-300"
//             aria-label={isAutoPlaying ? "Pause" : "Play"}
//           >
//             {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
//           </button>

//           {/* Slide Counter */}
//           <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg">
//             <span className="text-slate-800 font-mono font-medium">
//               {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
//             </span>
//           </div>
//         </div>

//         {/* Dot Indicators */}
//         <div className="flex justify-center mt-10 space-x-3">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`transition-all duration-500 rounded-full ${
//                 index === currentSlide
//                   ? 'w-12 h-3 bg-slate-300'
//                   : 'w-3 h-3 bg-slate-300 hover:bg-slate-400'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Call to Action */}
//         {/* <div className="mt-16 text-center">
//           <div className="inline-flex flex-col md:flex-row items-center gap-4">
//             <button className="border border-white px-8 py-4 bg-black text-white rounded-full font-semibold shadow-lg hover:bg-white hover:text-black hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
//               Join Our Community
//             </button>
//             <button className="px-8 py-4 bg-white text-slate-800 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-slate-200">
//               Learn More
//             </button>
//           </div>
//         </div> */}

//         {/* Footer Quote */}
//         {/* <div className="mt-16 text-center">
//           <div className="inline-flex items-center justify-center mb-4">
//             <div className="h-px w-8 bg-gradient-to-r from-transparent to-slate-300" />
//             <MapPinned className="w-4 h-4 text-slate-400 mx-3" />
//             <div className="h-px w-8 bg-gradient-to-l from-transparent to-slate-300" />
//           </div>
//           <p className="text-slate-500 italic text-lg">
//             Walking together in faith, hope, and love
//           </p>
//         </div> */}
//       </div>
//     </section>
//   );
// }