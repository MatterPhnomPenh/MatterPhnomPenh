


// File: components/Layer2.tsx
import { motion,MotionValue, useInView, Variants } from "framer-motion";

import { useRef } from "react";

interface Card {
  id: number;
  number: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}


interface Layer2Props {
  layer2Opacity: MotionValue<number>;
  cards: Card[];
  cardRotates: number[];
  itemVariants: Variants;
}

const Layer2 = ({ layer2Opacity, cards, cardRotates, itemVariants }: Layer2Props) => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: false, margin: "-100px" });

  return (
    <motion.div 
      className="absolute inset-0 z-20 will-change-transform"
      style={{ 
        opacity: layer2Opacity
      }}
    >
      <div className="min-h-screen flex flex-col bg-black px-4 sm:px-8 md:px-12 lg:px-16 py-24 overflow-hidden relative">
        
        {/* Header Caption Section */}
        <section ref={headerRef} className="flex-none relative z-10">
          <div className="relative flex flex-col items-center text-center space-y-2">

            {/* Services Label */}
            <motion.div
              className="text-white text-sm md:text-base leading-relaxed font-light tracking-wide"
              variants={itemVariants}
              custom={{ initial: { y: -20 }, target: { y: 0 }, duration: 0.6 }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Services
            </motion.div>

            {/* Stacked Phrases */}
            <motion.h1
              className="text-3xl md:text-7xl font-bold text-yellow-200 leading-tight tracking-widest uppercase py-20"
              variants={itemVariants}
              custom={{ initial: { rotate: 0, x: 0, y: 0 }, target: { rotate: 0, x: 0, y: 0 }, duration: 0.8 }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Mission
            </motion.h1>
          </div>
        </section>

        {/* Cards Grid */}
        <div className="flex-1 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 justify-items-center items-stretch max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="w-full max-w-xs h-full bg-white rounded-4xl p-4 md:p-6 flex flex-col justify-between shadow-sm border border-gray-200 cursor-pointer origin-center text-center"
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: cardRotates[index] }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: cardRotates[index] + 2 }}
            >
              <div className="mb-4">
                <span className="text-lg font-bold text-black block">{card.number}</span>
                <h4 className="text-base md:text-lg font-bold text-black uppercase tracking-wide leading-tight">
                  {card.title}
                </h4>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center">
                <div className="mb-4">{card.icon}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Layer2;