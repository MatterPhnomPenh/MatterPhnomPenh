// // File: components/Layer3.tsx (Full code with complete storiesCards array to prevent undefined card objects)
// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// interface StoriesCard {
//   title: string;
//   illustration: string;
//   alt: string;
//   quote: string;
//   author: string;
//   role: string;
//   buttonText: string;
//   buttonColor: string;
// }

// interface Layer3Props {
//   topSectionY: any;
//   layer3Opacity?: any;
// }

// const Layer3 = ({ topSectionY, layer3Opacity = 1 }: Layer3Props) => {
//   // StoriesSlideshow state and data
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const storiesCards: StoriesCard[] = [
//     {
//       title: "FOR COMPANIES",
//       illustration: "/images/forCompanies.svg",
//       alt: "Companies illustration",
//       quote: "They just get it. They 100% understand what we're trying to build and the team we're trying to build.",
//       author: "Sarah",
//       role: "HR Manager, Google",
//       buttonText: "Complete your team",
//       buttonColor: "bg-purple-500 hover:bg-purple-600",
//     },
//     {
//       title: "FOR CANDIDATES",
//       illustration: "/images/forCandidates.svg",
//       alt: "Candidates illustration",
//       quote: "I'd work with Purpose again in a heartbeat. I've been wowed by their ability to lead me to mission-focused opportunities.",
//       author: "Ruby Hoose",
//       role: "Global Talent Leader",
//       buttonText: "Find your rhythm",
//       buttonColor: "bg-orange-500 hover:bg-orange-600",
//     },
//     {
//       title: "FOR STARTUPS",
//       illustration: "/images/forCandidates.svg",
//       alt: "Startups illustration",
//       quote: "Purpose helped us scale our team rapidly with talent that aligns perfectly with our vision and values.",
//       author: "Alex Chen",
//       role: "Founder & CEO, TechNova",
//       buttonText: "Build your dream team",
//       buttonColor: "bg-blue-500 hover:bg-blue-600",
//     },
//     {
//       title: "FOR FREELANCERS",
//       illustration: "/images/forCompanies.svg",
//       alt: "Freelancers illustration",
//       quote: "Connecting with purpose-driven projects has transformed my career. Purpose makes it effortless.",
//       author: "Jordan Lee",
//       role: "Senior Designer",
//       buttonText: "Discover gigs",
//       buttonColor: "bg-green-500 hover:bg-green-600",
//     },
//     {
//       title: "FOR NONPROFITS",
//       illustration: "/images/forCandiates.svg",
//       alt: "Nonprofits illustration",
//       quote: "We've found passionate individuals who truly care about our mission. Purpose is a game-changer for impact organizations.",
//       author: "Maria Gonzalez",
//       role: "Executive Director, Hope Foundation",
//       buttonText: "Recruit for impact",
//       buttonColor: "bg-red-500 hover:bg-red-600",
//     },
//   ];

//   const extendedStoriesCards = [...storiesCards, storiesCards[0], storiesCards[1]];
//   const totalStoriesCards = extendedStoriesCards.length;
//   const visibleStoriesCards = 2;

//   const goToPrevious = () => {
//     setCurrentIndex((prev: number) => {
//       if (prev === 0) {
//         return totalStoriesCards - visibleStoriesCards;
//       }
//       return prev - 1;
//     });
//   };

//   const goToNext = () => {
//     setCurrentIndex((prev: number) => {
//       if (prev >= totalStoriesCards - visibleStoriesCards) {
//         return 0;
//       }
//       return prev + 1;
//     });
//   };

//   return (
//     <motion.div 
//       className="absolute inset-0 z-30 will-change-transform" 
//       style={{ 
//         y: topSectionY,
//         opacity: layer3Opacity
//       }}
//     >
//     <div className="min-h-screen flex flex-col justify-center rounded-4xl px-6 md:px-10 py-0 bg-white relative z-10">
//         {/* Title and Description */}
//         <div className="text-center pt-8 pb-4">
//           <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Vision</h2>
//           <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
//             Updates, insights and stories of those who have found their purpose.
//           </p>
//         </div>

//         {/* Previous Button */}
//         <button
//           onClick={goToPrevious}
//           className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black rounded-full hover:bg-gray-300 transition-colors z-20"
//           aria-label="Previous slide"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         {/* Next Button */}
//         <button
//           onClick={goToNext}
//           className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black rounded-full hover:bg-gray-300 transition-colors z-20"
//           aria-label="Next slide"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>

//         {/* Slideshow */}
//         <div className="flex-1 relative mx-auto max-w-4xl relative z-10 overflow-visible">
//           <div className="overflow-hidden flex-1 h-full">
//             <motion.div
//               className="flex h-full"
//               initial={false}
//               animate={{ x: `-${currentIndex * 50}%` }}
//               transition={{ duration: 0.5, ease: "easeInOut" }}
//             >
//               {extendedStoriesCards.map((card, index) => (
//                 <div key={index} className="flex-shrink-0 w-1/2 px-5">
//                   <div className="h-full flex items-center justify-center py-5">
//                     <motion.div
//                       initial={{ opacity: 0, y: 20, rotate: index % 2 === 0 ? -4 : 4 }}
//                       whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -4 : 4 }}
//                       transition={{ duration: 0.6 }}
//                       viewport={{ once: true }}
//                       className="bg-black h-full w-full rounded-4xl flex flex-col items-center text-center shadow-sm border border-gray-100 origin-center justify-center p-8 md:p-10"
//                     >
//                       <div className="mb-6">
//                         <Image
//                           src={card.illustration}
//                           alt={card.alt}
//                           width={200}
//                           height={200}
//                           className="w-32 h-32 md:w-40 md:h-40 object-contain"
//                         />
//                       </div>
//                       <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-wide">
//                         {card.title}
//                       </h3>
//                       <p className="text-white-200 text-sm md:text-base leading-relaxed mb-6 italic font-light">
//                         "{card.quote}"
//                       </p>
//                       <p className="text-white font-medium mb-2">{card.author}</p>
//                       <p className="text-white text-sm mb-8">{card.role}</p>
//                       <Link
//                         href="#"
//                         className={`${card.buttonColor} text-white py-3 px-6 rounded-full font-semibold uppercase tracking-wide transition-colors`}
//                       >
//                         {card.buttonText}
//                       </Link>
//                     </motion.div>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>

//         {/* All Stories Button */}
//         <div className="flex justify-center pb-8">
//           <div className="flex flex-col sm:flex-row gap-4">
//             <a
//               href="#all-stories"
//               className="relative px-6 py-3 bg-black text-white font-semibold rounded-full text-center overflow-hidden group"
//             >
//               <span className="relative z-10">All Stories</span>
//               <span className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-all duration-500 transform origin-bottom scale-y-0 group-hover:scale-y-100"></span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Layer3;


// File: components/Layer3.tsx (Full code with complete storiesCards array to prevent undefined card objects)
import { useState } from "react";
import { motion, MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface StoriesCard {
  title: string;
  illustration: string;
  alt: string;
  quote: string;
  author: string;
  role: string;
  buttonText: string;
  buttonColor: string;
}

interface Layer3Props {
  topSectionY: MotionValue<number>;
  layer3Opacity?: MotionValue<number> | number;
}

const Layer3 = ({ topSectionY, layer3Opacity = 1 }: Layer3Props) => {
  // StoriesSlideshow state and data
  const [currentIndex, setCurrentIndex] = useState(0);
  const storiesCards: StoriesCard[] = [
    {
      title: "FOR COMPANIES",
      illustration: "/images/forCompanies.svg",
      alt: "Companies illustration",
      quote: "They just get it. They 100% understand what we're trying to build and the team we're trying to build.",
      author: "Sarah",
      role: "HR Manager, Google",
      buttonText: "Complete your team",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
    },
    {
      title: "FOR CANDIDATES",
      illustration: "/images/forCandidates.svg",
      alt: "Candidates illustration",
      quote: "I'd work with Purpose again in a heartbeat. I've been wowed by their ability to lead me to mission-focused opportunities.",
      author: "Ruby Hoose",
      role: "Global Talent Leader",
      buttonText: "Find your rhythm",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
    },
    {
      title: "FOR STARTUPS",
      illustration: "/images/forCandidates.svg",
      alt: "Startups illustration",
      quote: "Purpose helped us scale our team rapidly with talent that aligns perfectly with our vision and values.",
      author: "Alex Chen",
      role: "Founder & CEO, TechNova",
      buttonText: "Build your dream team",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
    },
    {
      title: "FOR FREELANCERS",
      illustration: "/images/forCompanies.svg",
      alt: "Freelancers illustration",
      quote: "Connecting with purpose-driven projects has transformed my career. Purpose makes it effortless.",
      author: "Jordan Lee",
      role: "Senior Designer",
      buttonText: "Discover gigs",
      buttonColor: "bg-green-500 hover:bg-green-600",
    },
    {
      title: "FOR NONPROFITS",
      illustration: "/images/forCandiates.svg",
      alt: "Nonprofits illustration",
      quote: "We've found passionate individuals who truly care about our mission. Purpose is a game-changer for impact organizations.",
      author: "Maria Gonzalez",
      role: "Executive Director, Hope Foundation",
      buttonText: "Recruit for impact",
      buttonColor: "bg-red-500 hover:bg-red-600",
    },
  ];

  const extendedStoriesCards = [...storiesCards, storiesCards[0], storiesCards[1]];
  const totalStoriesCards = extendedStoriesCards.length;
  const visibleStoriesCards = 2;

  const goToPrevious = () => {
    setCurrentIndex((prev: number) => {
      if (prev === 0) {
        return totalStoriesCards - visibleStoriesCards;
      }
      return prev - 1;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prev: number) => {
      if (prev >= totalStoriesCards - visibleStoriesCards) {
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <motion.div 
      className="absolute inset-0 z-30 will-change-transform" 
      style={{ 
        y: topSectionY,
        opacity: layer3Opacity
      }}
    >
    <div className="min-h-screen flex flex-col justify-center rounded-4xl px-6 md:px-10 py-0 bg-white relative z-10">
        {/* Title and Description */}
        <div className="text-center pt-8 pb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Vision</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Updates, insights and stories of those who have found their purpose.
          </p>
        </div>

        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black rounded-full hover:bg-gray-300 transition-colors z-20"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black rounded-full hover:bg-gray-300 transition-colors z-20"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slideshow */}
        <div className="flex-1 relative mx-auto max-w-4xl relative z-10 overflow-visible">
          <div className="overflow-hidden flex-1 h-full">
            <motion.div
              className="flex h-full"
              initial={false}
              animate={{ x: `-${currentIndex * 50}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {extendedStoriesCards.map((card, index) => (
                <div key={index} className="flex-shrink-0 w-1/2 px-5">
                  <div className="h-full flex items-center justify-center py-5">
                    <motion.div
                      initial={{ opacity: 0, y: 20, rotate: index % 2 === 0 ? -4 : 4 }}
                      whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -4 : 4 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="bg-black h-full w-full rounded-4xl flex flex-col items-center text-center shadow-sm border border-gray-100 origin-center justify-center p-8 md:p-10"
                    >
                      <div className="mb-6">
                        <Image
                          src={card.illustration}
                          alt={card.alt}
                          width={200}
                          height={200}
                          className="w-32 h-32 md:w-40 md:h-40 object-contain"
                        />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-wide">
                        {card.title}
                      </h3>
                      <p className="text-white-200 text-sm md:text-base leading-relaxed mb-6 italic font-light">
                        &quot;{card.quote}&quot;
                      </p>
                      <p className="text-white font-medium mb-2">{card.author}</p>
                      <p className="text-white text-sm mb-8">{card.role}</p>
                      <Link
                        href="#"
                        className={`${card.buttonColor} text-white py-3 px-6 rounded-full font-semibold uppercase tracking-wide transition-colors`}
                      >
                        {card.buttonText}
                      </Link>
                    </motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* All Stories Button */}
        <div className="flex justify-center pb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#all-stories"
              className="relative px-6 py-3 bg-black text-white font-semibold rounded-full text-center overflow-hidden group"
            >
              <span className="relative z-10">All Stories</span>
              <span className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-all duration-500 transform origin-bottom scale-y-0 group-hover:scale-y-100"></span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Layer3;