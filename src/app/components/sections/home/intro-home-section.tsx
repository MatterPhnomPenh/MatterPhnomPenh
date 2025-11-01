"use client";

import { motion } from "framer-motion";

interface CustomHidden {
  initial: { rotate?: number; x?: number; y?: number };
}

interface CustomVisible {
  target: { rotate?: number; x?: number; y?: number };
  duration: number;
  delay?: number;
}

export default function IntroHomeSection() {
  const itemVariants = {
    hidden: (custom: CustomHidden) => ({
      opacity: 0,
      rotate: custom.initial?.rotate || 0,
      x: custom.initial?.x || 0,
      y: custom.initial?.y || 0,
    }),
    visible: (custom: CustomVisible) => ({
      opacity: 1,
      rotate: custom.target?.rotate || 0,
      x: custom.target?.x || 0,
      y: custom.target?.y || 0,
      transition: {
        duration: custom.duration || 0.8,
        delay: custom.delay || 0,
      },
    }),
  };

  return (
    <section
      className="relative w-full bg-gradient-to-br from-amber-50 to-yellow-50 py-24 sm:py-32 md:py-48 px-4 sm:px-6 md:px-10 overflow-hidden
                  bg-[url('/images/shape1.svg')] bg-no-repeat bg-right-bottom bg-[length:120px]"
    >
      <div className="relative z-10 mx-auto max-w-7xl flex flex-col items-center justify-center min-h-[600px]">
        <div className="flex flex-col items-center justify-center gap-8 w-full max-w-6xl mx-auto">
          
          {/* Content Column - Centered */}
          <div className="flex flex-col items-center text-center">
            
            {/* H1 */}
            <div className="mb-8">
              <motion.h1 
                className="text-4xl sm:text-6xl md:text-8xl font-bold text-gray-100 leading-tight"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: { staggerChildren: 0.2 }
                  }
                }}
              >
                <motion.span
                  className="text-white inline"
                  variants={itemVariants}
                  custom={{ 
                    initial: { rotate: 0, x: -100, y: 20 }, 
                    target: { rotate: 0, x: -100, y: 20 }, 
                    duration: 0.8, delay: 0 
                  }}
                >
                  YOU
                </motion.span>
                <motion.span
                  className="text-white inline"
                  variants={itemVariants}
                  custom={{ 
                    initial: { rotate: 0, x: -80, y: 10 }, 
                    target: { rotate: 0, x: -80, y: 0 }, 
                    duration: 0.8, delay: 0.2 
                  }}
                >
                  MATTER
                </motion.span>
                <motion.span
                  className="text-white inline"
                  variants={itemVariants}
                  custom={{ 
                    initial: { rotate: 0, x: 0, y: 5 }, 
                    target: { rotate: 0, x: 0, y: 0 }, 
                    duration: 0.8, delay: 0.4 
                  }}
                >
                  HERE
                </motion.span>
              </motion.h1>
            </div>

            {/* Description */}
            <div className="flex flex-col items-center text-center">
              <p className="text-sm sm:text-base md:text-lg text-[#AE957E] mb-4">
                Search + Talent Consultancy
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xs">
                Connecting groundbreaking companies with extraordinary talent
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                
                {/* Yellow Button */}
                <a
                  href="#learn-more"
                  className="relative px-6 py-3 bg-white text-black font-semibold rounded-full text-center overflow-hidden group"
                >
                  <span className="relative z-10">Learn more</span>
                  {/* Hover overlay */}
                  <span className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-all duration-500 transform origin-bottom scale-y-0 group-hover:scale-y-100"></span>
                </a>

                {/* Outline Button */}
                <a
                  href="#get-in-touch"
                  className="relative px-6 py-3 border-2 border-gray-700 text-gray-300 font-semibold rounded-full text-center overflow-hidden group"
                >
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                    Get in touch
                  </span>
                  {/* Hover overlay */}
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform origin-bottom scale-y-0 group-hover:scale-y-100"></span>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}