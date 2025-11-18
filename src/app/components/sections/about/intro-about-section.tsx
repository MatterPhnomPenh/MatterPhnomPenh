
// "use client";
// import { useRef, useState, useEffect } from "react";
// import { motion, useInView } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";

// /* -------------------------------------------------
//    Your exact speakers array
//    ------------------------------------------------- */
// const speakers = [
//   {
//     name: "Rich Wilkerson Jr.",
//     image: "/speakers/rich.jpg",
//   },
//   {
//     name: "DawnCheré Wilkerson",
//     image: "/speakers/dawnchere.jpg",
//   },
//   {
//     name: "Steven Furtick",
//     image: "/speakers/steven.jpg",
//   },
//   {
//     name: "lin van",
//     image: "/speakers/efe.jpg",
//   },
//   {
//     name: "fiiejo",
//     image: "/speakers/fefe.jpg",
//   },
// ];

// export default function IntroAboutSection() {
//   const gridRef = useRef<HTMLDivElement>(null);
//   const [gridInView, setGridInView] = useState(false);
//   const isGridInView = useInView(gridRef, { once: true, margin: "-150px" });

//   useEffect(() => {
//     if (isGridInView) setGridInView(true);
//   }, [isGridInView]);

//   /* -------------------------------------------------
//      Card animation – first row: middle card pops up
//      ------------------------------------------------- */
//   const firstRowCardVariants = {
//     hidden: { opacity: 0, y: 80 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: i === 1 ? -20 : 30, // Middle card higher, others match second row
//       transition: {
//         duration: 0.7,
//         ease: "easeOut",
//         delay: i * 0.12,
//       },
//     }),
//   };

//   const secondRowCardVariants = {
//     hidden: { opacity: 0, y: 80 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 30,
//       transition: {
//         duration: 0.7,
//         ease: "easeOut",
//         delay: (i + 3) * 0.12,
//       },
//     }),
//   };

//   const titleLines = [
//     "DESIGNED",
//     "TO CHAMPION THE",
//     "CAUSE OF THE",
//     "LOCAL",
//     "CHURCH",
//   ];

//   const textItems = ["COMMUNITY.", "INNOVATION.", "MOVEMENT."];

//   return (
//     <section className="w-full py-48 bg-white relative overflow-hidden">
//       {/* ────────────────────── TOP TITLE ────────────────────── */}
//       <div className="w-full px-4 text-center mb-32 pt-8">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ staggerChildren: 0.03 }}
//         >
//           <div className="font-black text-6xl md:text-8xl lg:text-9xl leading-tight text-gray-900 uppercase tracking-tight">
//             {titleLines.map((line, lineIdx) => (
//               <div key={lineIdx} className="flex justify-center mb-1">
//                 {line.split("").map((char, i) => {
//                   const idx = lineIdx * 20 + i;
//                   return (
//                     <motion.span
//                       key={i}
//                       custom={idx}
//                       variants={{
//                         hidden: { opacity: 0, y: 30 },
//                         visible: (c) => ({
//                           opacity: 1,
//                           y: 0,
//                           transition: { delay: c * 0.02 },
//                         }),
//                       }}
//                       className="inline-block"
//                     >
//                       {char === " " ? "\u00A0" : char}
//                     </motion.span>
//                   );
//                 })}
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>

//       {/* ────────────────────── CENTER CONTENT ────────────────────── */}
//       <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-8 px-4 md:px-32 lg:px-64 mb-16">
//         {/* COMMUNITY / INNOVATION / MOVEMENT */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ staggerChildren: 0.15 }}
//           className="text-center"
//         >
//           <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
//             {textItems.map((item, i) => (
//               <motion.div
//                 key={item}
//                 custom={i}
//                 variants={{
//                   hidden: { opacity: 0, y: 20 },
//                   visible: (c) => ({
//                     opacity: 1,
//                     y: 0,
//                     transition: { delay: c * 0.1 },
//                   }),
//                 }}
//                 className="font-bold text-4xl sm:text-5xl md:text-6xl text-gray-900"
//               >
//                 {item}
//               </motion.div>
//             ))}
//           </div>
//           <motion.h3
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4 }}
//             className="mt-4 font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 italic"
//           >
//             A MOMENT – IT'S A MOVEMENT.
//           </motion.h3>
//         </motion.div>

//         {/* DATE BADGE */}
//         <motion.div
//           initial={{ scale: 0.9, opacity: 0, y: 20 }}
//           whileInView={{ scale: 1, opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5 }}
//           className="bg-gray-300 backdrop-blur-md px-8 py-6 shadow-sm border border-gray-200"
//         >
//           <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-wide">
//             JUNE 10-14, 2026
//           </h4>
//           <p className="text-gray-700 text-sm sm:text-base mt-2 text-center">
//             Watsco Arena * Miami, FL
//           </p>
//         </motion.div>

//         {/* REGISTER BUTTON */}
//         <motion.div
//           initial={{ scale: 0.95, opacity: 0, y: 10 }}
//           whileInView={{ scale: 1, opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.7 }}
//           whileHover={{ scale: 1.05, y: -2 }}
//         >
//           <Link href="/register">
//             <img
//               src="/button.svg"
//               alt="Register Now"
//               className="w-48 h-48 object-contain brightness-0 hover:opacity-80 transition-all"
//             />
//           </Link>
//         </motion.div>
//       </div>

//       {/* ────────────────────── 5-CARD GRID WITH STAGGERED HEIGHTS ────────────────────── */}
//       <div ref={gridRef} className="w-full px-4 py-16">
//         <motion.div
//           className="flex flex-col items-center gap-12 w-full"
//           initial="hidden"
//           animate={gridInView ? "visible" : "hidden"}
//           variants={{
//             hidden: {},
//             visible: { transition: { staggerChildren: 0.12 } },
//           }}
//         >
//           {/* ==== FIRST ROW – middle card pops up higher ==== */}
//           <div className="flex flex-col md:flex-row justify-center items-start gap-8 w-full">
//             {/* First card */}
//             <motion.div
//               custom={0}
//               variants={firstRowCardVariants}
//               className="relative group overflow-hidden rounded-3xl shadow-xl aspect-[3/4] bg-gray-900 w-full max-w-sm"
//               whileHover={{ y: 30 - 48, transition: { duration: 0.3 } }}
//             >
//               <Image
//                 src={speakers[0].image}
//                 alt={speakers[0].name}
//                 fill
//                 className="object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
//               <div className="absolute bottom-0 left-0 p-6 text-white z-10">
//                 <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
//                   {speakers[0].name.split(" ").map((part, idx) => (
//                     <span key={idx}>
//                       {part}
//                       {idx === 0 && speakers[0].name.includes(" ") && <br />}
//                     </span>
//                   ))}
//                 </h3>
//               </div>
//             </motion.div>

//             {/* Middle card - pops up */}
//             <motion.div
//               custom={1}
//               variants={firstRowCardVariants}
//               className="relative group overflow-hidden rounded-3xl shadow-xl aspect-[3/4] bg-gray-900 w-full max-w-sm"
//               whileHover={{ y: -20 - 48, transition: { duration: 0.3 } }}
//             >
//               <Image
//                 src={speakers[1].image}
//                 alt={speakers[1].name}
//                 fill
//                 className="object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
//               <div className="absolute bottom-0 left-0 p-6 text-white z-10">
//                 <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
//                   {speakers[1].name.split(" ").map((part, idx) => (
//                     <span key={idx}>
//                       {part}
//                       {idx === 0 && speakers[1].name.includes(" ") && <br />}
//                     </span>
//                   ))}
//                 </h3>
//               </div>
//             </motion.div>

//             {/* Third card */}
//             <motion.div
//               custom={2}
//               variants={firstRowCardVariants}
//               className="relative group overflow-hidden rounded-3xl shadow-xl aspect-[3/4] bg-gray-900 w-full max-w-sm"
//               whileHover={{ y: 30 - 48, transition: { duration: 0.3 } }}
//             >
//               <Image
//                 src={speakers[2].image}
//                 alt={speakers[2].name}
//                 fill
//                 className="object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
//               <div className="absolute bottom-0 left-0 p-6 text-white z-10">
//                 <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
//                   {speakers[2].name.split(" ").map((part, idx) => (
//                     <span key={idx}>
//                       {part}
//                       {idx === 0 && speakers[2].name.includes(" ") && <br />}
//                     </span>
//                   ))}
//                 </h3>
//               </div>
//             </motion.div>
//           </div>

//           {/* ==== SECOND ROW – uniform lower position ==== */}
//           <div className="flex flex-col md:flex-row justify-center items-start gap-8 w-full mt-8">
//             {speakers.slice(3, 5).map((sp, i) => (
//               <motion.div
//                 key={i + 3}
//                 custom={i}
//                 variants={secondRowCardVariants}
//                 className="relative group overflow-hidden rounded-3xl shadow-xl aspect-[3/4] bg-gray-900 w-full max-w-sm"
//                 whileHover={{ y: 30 - 48, transition: { duration: 0.3 } }}
//               >
//                 <Image
//                   src={sp.image}
//                   alt={sp.name}
//                   fill
//                   className="object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
//                 <div className="absolute bottom-0 left-0 p-6 text-white z-10">
//                   <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
//                     {sp.name.split(" ").map((part, idx) => (
//                       <span key={idx}>
//                         {part}
//                         {idx === 0 && sp.name.includes(" ") && <br />}
//                       </span>
//                     ))}
//                   </h3>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


