

"use client";

import { motion } from "framer-motion";

export default function IntroHomeSection() {
  return (
    <div className="relative overflow-hidden">
      {/* HERO SECTION: Full-screen hero with background image */}
      <section 
        className="relative w-full bg-cover bg-center bg-no-repeat min-h-screen flex flex-col"
        style={{ backgroundImage: "url('/images/ORS_Hoklin.jpg')" }}
      >
       
        {/* HERO CONTENT */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8">
          <div className="w-full h-full max-w-7xl mx-auto">
            
            {/* Bottom Left Side Title - positioned lower at bottom left */}
            <motion.div
              className="absolute bottom-8 left-8 md:left-16 lg:left-24"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Grouped text container */}
              <motion.div
                className="space-y-0"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 },
                  },
                }}
              >
                <motion.h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-bold text-green-400 tracking-tight leading-tight"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
                    },
                  }}
                >
                  It wouldn&apos;t
                </motion.h1>
                <motion.h1
                  className="text-m sm:text-3xl md:text-4xl lg:text-7xl font-bold text-green-400 tracking-tight leading-tight"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
                    },
                  }}
                >
                  be the same
                </motion.h1>
                <motion.h1
                  className="text-m sm:text-3xl md:text-4xl lg:text-7xl font-bold text-green-400 tracking-tight leading-tight"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }
                    },
                  }}
                >
                  without you.
                </motion.h1>
              </motion.div>
            </motion.div>

            {/* Bottom Right Side Text in Box - positioned at bottom right */}
            <motion.div
              className="absolute bottom-16 right-8 md:right-16 lg:right-24"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-transparent border-2 border-black rounded-lg md:pr-16 md:pt-2 md:pb-48 md:pl-2 h-32 flex flex-col justify-start"> {/* Added height and flex column */}
                <div className="text-left"> {/* Changed to text-left */}
                  <motion.p
                    className="text-2xl text-black font-bold tracking-widest uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    You
                  </motion.p>
                  <motion.p
                    className="text-2xl text-black font-bold tracking-widest uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    Matter
                  </motion.p>
                  <motion.p
                    className="text-2xl text-black font-bold tracking-widest uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                  >
                    Here
                  </motion.p>
                </div>
                {/* Free space at the bottom is automatically created by the fixed height */}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Optional: Add a subtle gradient at the bottom for better text contrast */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-transparent"></div>
      </section>
    </div>
  );
}

