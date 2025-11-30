// // "use client";
// // import { motion } from "framer-motion";
// // import Link from "next/link";

// // export default function AboutSection() {
// //   return (
// //       <section
// //         id="about"
// //         className="py-32 lg:pt-128 lg:-py-48 bg-black text-white overflow-hidden relative bg-cover bg-center bg-no-repeat bg-[url('/images/about2.jpg')]"
// //       >

// //       <div className="lg:px-48 px-16">
// //         {/* Main Message Container */}
// //         <div className="space-y-10">

// //           {/* First Paragraph Line */}
// //           <motion.p
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
// //             viewport={{ once: true, margin: "-100px" }}
// //             className="text-lg md:text-xl font-light leading-relaxed tracking-wide text-white/90"
// //           >
// //             We are a community of faith based in Phnom Penh, Cambodia. We started
// //             off with our first Gathering in March 2024, and it has now been more
// //             than a year in this journey. In July 2025,
// //           </motion.p>

// //           {/* Second Paragraph Line */}
// //           <motion.p
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
// //             viewport={{ once: true, margin: "-100px" }}
// //             className="text-lg md:text-xl font-light leading-relaxed tracking-wide text-white/90"
// //           >
// //             MATTER Phnom Penh is now officially a part of{" "}
// //             <span className="font-medium text-white">Collective Global</span>; a
// //             collective of churches where we share ideas, challenge each other and
// //             grow together. It also becomes a platform where we can play our part
// //             in what God is doing as a bigger picture.
// //           </motion.p>

// //           {/* Buttons Row */}
// //           <motion.div
// //             className="mt-24 flex flex-col sm:flex-row gap-6 text-left"
// //             initial={{ opacity: 0 }}
// //             whileInView={{ opacity: 1 }}
// //             transition={{ duration: 0.8, delay: 0.8 }}
// //             viewport={{ once: true, margin: "-100px" }}
// //           >
// //             {/* Button 1 - More About Us */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 30, scale: 0.9 }}
// //               whileInView={{ opacity: 1, y: 0, scale: 1 }}
// //               transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
// //               viewport={{ once: true }}
// //               whileHover={{ y: -4 }}
// //               className="flex justify-start"
// //             >
// //               <motion.div whileHover="hover" initial="rest">
// //                 <Link
// //                   href="/about"
// //                   className="relative inline-flex items-center justify-center gap-3 border border-white rounded-md px-10 py-5 text-sm font-medium tracking-widest uppercase overflow-hidden whitespace-nowrap"
// //                 >
// //                   <motion.div
// //                     className="absolute inset-0 bg-white"
// //                     initial={{ x: "-100%" }}
// //                     variants={{
// //                       rest: { x: "-100%" },
// //                       hover: { x: "0%" },
// //                     }}
// //                     transition={{ duration: 0.4, ease: "easeInOut" }}
// //                   />
// //                   <motion.span
// //                     className="relative z-10 flex items-center gap-3 text-white"
// //                     variants={{
// //                       rest: { color: "#ffffff" },
// //                       hover: { color: "#000000" },
// //                     }}
// //                     transition={{ duration: 0.2, delay: 0.1 }}
// //                   >
// //                     More About Us
// //                     <motion.span
// //                       variants={{
// //                         rest: { x: 0 },
// //                         hover: { x: 8 },
// //                       }}
// //                       transition={{ duration: 0.3 }}
// //                     >
// //                       →
// //                     </motion.span>
// //                   </motion.span>
// //                 </Link>
// //               </motion.div>
// //             </motion.div>

// //             {/* Button 2 - Collective Global */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 30, scale: 0.9 }}
// //               whileInView={{ opacity: 1, y: 0, scale: 1 }}
// //               transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
// //               viewport={{ once: true }}
// //               whileHover={{ y: -4 }}
// //               className="flex justify-start"
// //             >
// //               <motion.div whileHover="hover" initial="rest">
// //                 <Link
// //                   href="/visit"
// //                   className="relative inline-flex items-center justify-center gap-3 border border-white rounded-md px-10 py-5 text-sm font-medium tracking-widest uppercase overflow-hidden whitespace-nowrap"
// //                 >
// //                   <motion.div
// //                     className="absolute inset-0 bg-white"
// //                     initial={{ x: "-100%" }}
// //                     variants={{
// //                       rest: { x: "-100%" },
// //                       hover: { x: "0%" },
// //                     }}
// //                     transition={{ duration: 0.4, ease: "easeInOut" }}
// //                   />
// //                   <motion.span
// //                     className="relative z-10 flex items-center gap-3 text-white"
// //                     variants={{
// //                       rest: { color: "#ffffff" },
// //                       hover: { color: "#000000" },
// //                     }}
// //                     transition={{ duration: 0.2, delay: 0.1 }}
// //                   >
// //                     Find Out More About Collective Global
// //                     <motion.span
// //                       variants={{
// //                         rest: { x: 0 },
// //                         hover: { x: 8 },
// //                       }}
// //                       transition={{ duration: 0.3 }}
// //                     >
// //                       →
// //                     </motion.span>
// //                   </motion.span>
// //                 </Link>
// //               </motion.div>
// //             </motion.div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function AboutSection() {
//   return (
//     <section
//       id="about"
//       className="relative min-h-screen bg-cover bg-center bg-fixed"
//       style={{
//         backgroundImage: "url('/images/about2.jpg')",
//       }}
//     >
//       {/* Full-bleed background image */}
//       {/* Dark overlay for readability */}
//       <div className="absolute inset-0 bg-black/60" />

//       {/* Content container with TOP PADDING only on content */}
//       <div className="relative z-10 pt-32 lg:pt-48 pb-20 px-8 lg:px-48 px-16">
//         <div className="space-y-10 text-left">

//           {/* First Paragraph */}
//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
//             viewport={{ once: true, margin: "-100px" }}
//             className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed tracking-wide text-white/90"
//           >
//             We are a community of faith based in Phnom Penh, Cambodia. We started
//             off with our first Gathering in March 2024, and it has now been more
//             than a year in this journey. In July 2025,
//           </motion.p>

//           {/* Second Paragraph */}
//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
//             viewport={{ once: true, margin: "-100px" }}
//             className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed tracking-wide text-white/90"
//           >
//             MATTER Phnom Penh is now officially a part of{" "}
//             <span className="font-medium text-white">Collective Global</span>; a
//             collective of churches where we share ideas, challenge each other and
//             grow together. It also becomes a platform where we can play our part
//             in what God is doing as a bigger picture.
//           </motion.p>
//            {/* Buttons Row */}
//            <motion.div
//             className="mt-24 flex flex-col sm:flex-row gap-6 text-left"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             {/* Button 1 - More About Us */}
//             <motion.div
//               initial={{ opacity: 0, y: 30, scale: 0.9 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
//               viewport={{ once: true }}
//               whileHover={{ y: -4 }}
//               className="flex justify-start"
//             >
//               <motion.div whileHover="hover" initial="rest">
//                 <Link
//                   href="/about"
//                   className="relative inline-flex items-center justify-center gap-3 border border-white rounded-md px-10 py-5 text-sm font-medium tracking-widest uppercase overflow-hidden whitespace-nowrap"
//                 >
//                   <motion.div
//                     className="absolute inset-0 bg-white"
//                     initial={{ x: "-100%" }}
//                     variants={{
//                       rest: { x: "-100%" },
//                       hover: { x: "0%" },
//                     }}
//                     transition={{ duration: 0.4, ease: "easeInOut" }}
//                   />
//                   <motion.span
//                     className="relative z-10 flex items-center gap-3 text-white"
//                     variants={{
//                       rest: { color: "#ffffff" },
//                       hover: { color: "#000000" },
//                     }}
//                     transition={{ duration: 0.2, delay: 0.1 }}
//                   >
//                     More About Us
//                     <motion.span
//                       variants={{
//                         rest: { x: 0 },
//                         hover: { x: 8 },
//                       }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       →
//                     </motion.span>
//                   </motion.span>
//                 </Link>
//               </motion.div>
//             </motion.div>

//             {/* Button 2 - Collective Global */}
//             <motion.div
//               initial={{ opacity: 0, y: 30, scale: 0.9 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
//               viewport={{ once: true }}
//               whileHover={{ y: -4 }}
//               className="flex justify-start"
//             >
//               <motion.div whileHover="hover" initial="rest">
//                 <Link
//                   href="/visit"
//                   className="relative inline-flex items-center justify-center gap-3 border border-white rounded-md lg:px-10 lg:py-5 text-sm font-medium tracking-widest uppercase overflow-hidden whitespace-nowrap"
//                 >
//                   <motion.div
//                     className="absolute inset-0 bg-white"
//                     initial={{ x: "-100%" }}
//                     variants={{
//                       rest: { x: "-100%" },
//                       hover: { x: "0%" },
//                     }}
//                     transition={{ duration: 0.4, ease: "easeInOut" }}
//                   />
//                   <motion.span
//                     className="relative z-10 flex items-center gap-3 text-white"
//                     variants={{
//                       rest: { color: "#ffffff" },
//                       hover: { color: "#000000" },
//                     }}
//                     transition={{ duration: 0.2, delay: 0.1 }}
//                   >
//                     Find Out More About Collective Global
//                     <motion.span
//                       variants={{
//                         rest: { x: 0 },
//                         hover: { x: 8 },
//                       }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       →
//                     </motion.span>
//                   </motion.span>
//                 </Link>
//               </motion.div>
//             </motion.div>
//           </motion.div>           
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/images/about2.jpg')",
      }}
    >
      {/* Full-bleed background image */}
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content container with TOP PADDING only on content */}
      <div className="relative z-10 pt-32 lg:pt-48 pb-20 px-8 lg:px-48">
        <div className="space-y-10 text-left">
          {/* First Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed tracking-wide text-white/90"
          >
            We are a community of faith based in Phnom Penh, Cambodia. We started
            off with our first Gathering in March 2024, and it has now been more
            than a year in this journey. In July 2025,
          </motion.p>
          
          {/* Second Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed tracking-wide text-white/90"
          >
            MATTER Phnom Penh is now officially a part of{" "}
            <span className="font-medium text-white">Collective Global</span>; a
            collective of churches where we share ideas, challenge each other and
            grow together. It also becomes a platform where we can play our part
            in what God is doing as a bigger picture.
          </motion.p>
          
          {/* Buttons Row */}
          <motion.div
            className="mt-24 flex flex-col sm:flex-row gap-4 sm:gap-6 text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Button 1 - More About Us */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="flex justify-start"
            >
              <motion.div whileHover="hover" initial="rest" className="w-full sm:w-auto">
                <Link
                  href="/about"
                  className="relative inline-flex items-center justify-center gap-2 sm:gap-3 border border-white rounded-md px-8 py-3.5 lg:px-10 lg:py-5 text-xs sm:text-sm font-medium tracking-widest uppercase overflow-hidden whitespace-nowrap w-full sm:w-auto text-center justify-center"
                >
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    variants={{
                      rest: { x: "-100%" },
                      hover: { x: "0%" },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="relative z-10 flex items-center gap-2 sm:gap-3 justify-center"
                    variants={{
                      rest: { color: "#ffffff" },
                      hover: { color: "#000000" },
                    }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    More About Us
                    <motion.span
                      variants={{
                        rest: { x: 0 },
                        hover: { x: 8 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      →
                    </motion.span>
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Button 2 - Collective Global */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="flex justify-start"
            >
              <motion.div whileHover="hover" initial="rest" className="w-full sm:w-auto">
                <Link
                  href="/visit"
                  className="relative inline-flex items-center justify-center gap-2 sm:gap-3 border border-white rounded-md px-8 py-3.5 lg:px-10 lg:py-5 text-xs sm:text-sm font-medium tracking-widest uppercase overflow-hidden text-center w-full sm:w-auto justify-center"
                >
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    variants={{
                      rest: { x: "-100%" },
                      hover: { x: "0%" },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="relative z-10 flex items-center gap-2 sm:gap-3 justify-center"
                    variants={{
                      rest: { color: "#ffffff" },
                      hover: { color: "#000000" },
                    }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    <span className="text-center">
                      Find Out More About Collective Global
                    </span>
                    <motion.span
                      variants={{
                        rest: { x: 0 },
                        hover: { x: 8 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      →
                    </motion.span>
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}