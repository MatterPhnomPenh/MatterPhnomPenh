// "use client";

// import { useRef, useEffect } from "react";
// import { motion } from "framer-motion";

// const coreValues = [
//   { title: "Christ Is The Reason", description: "Jesus is why we gather. His life and teaching shape how we live, love, and create." },
//   { title: "We Choose Everyone", description: "We see people before differences. We stand for all — even those who don't think, speak, or act like us." },
//   { title: "Relate & Be Relevant", description: "Being \"set apart\" doesn't mean being out of touch. We speak in a language people understand." },
//   { title: "Created To Create", description: "We reflect our Creator through creativity. Every act of creating is our partnership with God." },
//   { title: "Generous By Choice", description: "We give because we get to, not because we have to. Jesus lived a life that was always about others." },
//   { title: "Be Transformed, Not Just Inspired", description: "We don't gather just to feel God, but to be changed by Him." },
//   { title: "Connected & Relational", description: "We don't do religion. We do relationship — with God and with people. We listen, we move, we grow." },
// ];

// export function CoreValuesSection() {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   // Drag to scroll — fast & smooth
//   const handleMouseDown = (e: React.MouseEvent) => {
//     if (!scrollRef.current) return;
//     scrollRef.current.style.cursor = "grabbing";
//     const startX = e.pageX - scrollRef.current.offsetLeft;
//     const scrollLeft = scrollRef.current.scrollLeft;

//     const handleMouseMove = (e: MouseEvent) => {
//       e.preventDefault();
//       const x = e.pageX - scrollRef.current!.offsetLeft;
//       const walk = (x - startX) * 3;
//       scrollRef.current!.scrollLeft = scrollLeft - walk;
//     };

//     const handleMouseUp = () => {
//       scrollRef.current!.style.cursor = "grab";
//       document.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("mouseup", handleMouseUp);
//     };

//     document.addEventListener("mousemove", handleMouseMove);
//     document.addEventListener("mouseup", handleMouseUp);
//   };

//   // Enhanced horizontal wheel scrolling
//   const handleWheel = (e: React.WheelEvent) => {
//     if (!scrollRef.current) return;
//     if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
//       e.preventDefault();
//       scrollRef.current.scrollLeft += e.deltaX * 3;
//     }
//   };

//   // Optional: Start slightly scrolled for visual balance
//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollLeft = 100;
//     }
//   }, []);

//   return (
//     <section className="bg-background py-24 px-8 overflow-hidden " >
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-20">
//           <motion.span
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-accent uppercase tracking-[0.3em] text-sm font-bold block"
//             style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}

//           >
//             Core Values
//           </motion.span>
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="font-serif text-5xl sm:text-6xl lg:text-7xl text-foreground mt-6 leading-none tracking-tight"
//             style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}

//           >
//             What We Stand For
//           </motion.h2>
//         </div>

//         {/* Horizontal Scroll Container */}
//         <div
//           ref={scrollRef}
//           className="overflow-x-auto hide-scrollbar cursor-grab select-none"
//           style={{
//             scrollBehavior: "auto",
//             overscrollBehaviorX: "contain",
//           }}
//           onMouseDown={handleMouseDown}
//           onWheel={handleWheel}
//         >
//           <div className="flex gap-10 md:gap-16 py-12 px-4">
//             {coreValues.map((value, index) => (
//               <motion.div
//                 key={value.title}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: index * 0.1 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 className="flex-shrink-0 w-[380px] sm:w-[440px] md:w-[520px] lg:w-[580px] group"
//               >
//                 <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-10 md:p-12 lg:p-14 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:bg-card/95">
//                   {/* Optional accent line */}
//                   <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-accent to-transparent rounded-full opacity-70" />

//                   <div className="mt-8 space-y-8">
//                     <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-none tracking-tight"
//                       style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
//                     >
//                       {value.title}
//                     </h3>
//                     <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light"
//                       style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
//                     >
//                       {value.description}
//                     </p>
//                   </div>

//                   {/* Subtle bottom glow on hover */}
//                   <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Hide scrollbar */}
//       <style jsx>{`
//         .hide-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .hide-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </section>
//   );
// }


"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const coreValues = [
  {
    title: "Christ Is The Reason",
    description: "Jesus is why we gather. His life and teaching shape how we live, love, and create.",
    bgImage: "/images/CLC01121.jpg",
  },
  {
    title: "We Choose Everyone",
    description: "We see people before differences. We stand for all — even those who don't think, speak, or act like us.",
    bgImage: "/images/CLC00761.jpg",
  },
  {
    title: "Relate & Be Relevant",
    description: "Being \"set apart\" doesn't mean being out of touch. We speak in a language people understand.",
    bgImage: "/images/CLC00493.jpg",
  },
  {
    title: "Created To Create",
    description: "We reflect our Creator through creativity. Every act of creating is our partnership with God.",
    bgImage: "/images/CLC00497.jpg",
  },
  {
    title: "Generous By Choice",
    description: "We give because we get to, not because we have to. Jesus lived a life that was always about others.",
    bgImage: "/images/CLC01156.jpg",
  },
  {
    title: "Be Transformed, Not Just Inspired",
    description: "We don't gather just to feel God, but to be changed by Him.",
    bgImage: "/images/CLC00221.jpg",
  },
  {
    title: "Connected & Relational",
    description: "We don't do religion. We do relationship — with God and with people. We listen, we move, we grow.",
    bgImage: "/images/CLC00944.jpg",
  },
];

export function CoreValuesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    scrollRef.current.style.cursor = "grabbing";
    const startX = e.pageX - scrollRef.current.offsetLeft;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      const x = e.pageX - scrollRef.current!.offsetLeft;
      const walk = (x - startX) * 3;
      scrollRef.current!.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      scrollRef.current!.style.cursor = "grab";
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (!scrollRef.current) return;
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaX * 3;
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 100;
    }
  }, []);

  return (
    <section className="bg-background py-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-accent uppercase tracking-[0.3em] text-sm font-bold block"
            style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
          >
            Core Values
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl text-foreground mt-6 leading-none tracking-tight"
            style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
          >
            What We Stand For
          </motion.h2>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="overflow-x-auto hide-scrollbar cursor-grab select-none"
          style={{ scrollBehavior: "auto", overscrollBehaviorX: "contain" }}
          onMouseDown={handleMouseDown}
          onWheel={handleWheel}
        >
          <div className="flex gap-10 md:gap-16 py-12 px-4">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex-shrink-0 w-[380px] sm:w-[440px] md:w-[520px] lg:w-[580px] group"
              >
                <div
                  className="relative h-[620px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 group-hover:-translate-y-6 group-hover:shadow-3xl"
                  style={{
                    backgroundImage: `url(${value.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Dark overlay + subtle blur */}
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-transparent opacity-80" />

                  {/* Content */}
                  <div className="relative h-full p-10 md:p-12 lg:p-14 flex flex-col justify-end text-white">
                    <div className="space-y-8">
                      <h3
                        className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-none tracking-tight drop-shadow-2xl"
                        style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
                      >
                        {value.title}
                      </h3>
                      <p
                        className="text-lg md:text-xl leading-relaxed font-light opacity-95 drop-shadow-lg"
                        style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
                      >
                        {value.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}