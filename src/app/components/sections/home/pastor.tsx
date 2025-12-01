

// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { Facebook, Instagram } from "lucide-react";
// import Image from "next/image";

// // Custom TikTok Icon
// const TiktokIcon = () => (
//   <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
//     <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
//   </svg>
// );


// export default function PastorSection() {
//   return (
//     <section id="pastor" className="pt-24 lg:pt-48 bg-black text-white overflow-hidden">
//       <div className="px-8 md:px-24 lg:px-32">
//         {/* Page Title */}
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           viewport={{ once: true, margin: "-100px" }}
//           className="text-5xl lg:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-500 text-center mb-16 lg:mb-32"
//         >
//           Our Pastor
//         </motion.h2>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
         
//           <div className="lg:pl-16 flex flex-col items-center lg:items-start text-center lg:text-left">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1, delay: 0.3 }}
//               viewport={{ once: true, margin: "-100px" }}
//               className="relative w-full h-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl"
//             >
//               <Image
//                 src="/images/sam_liza.jpg"
//                 alt="Pastor Sam"
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 1024px) 90vw, 50vw"
//                 priority
//               />
//             {/* Signature – Text Version (Much Better Than Image) */}
//             {/* <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
//               viewport={{ once: true }}
//               className="absolute bottom-6 flex justify-center md:justify-center"
//             >
//               <div className="relative">
//                 <h3 
//                   className="
//                     text-5xl lg:text-6xl 
//                     font-cursive font-bold 
//                     text-white/90 
//                     tracking-wider 
//                     drop-shadow-2xl 
//                     transform-gpu 
//                     select-none
//                     bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent
//                   "
//                   style={{
//                     fontFamily: "'Dancing Script', 'Brush Script MT', 'Lucida Handwriting', cursive",
//                     textShadow: "2px 2px 12px rgba(0,0,0,0.5)",
//                     letterSpacing: "0.05em",
//                   }}
//                 >
//                   Pastor Sam
//                 </h3>

//               </div>
//             </motion.div> */}
//             </motion.div>
//           </div>

//           {/* RIGHT: Text + Socials */}
//           <div className="flex flex-col justify-between h-full min-h-[400px] lg:min-h-[500px] xl:min-h-[600px]">
//             {/* Text paragraphs – removed space-y entirely */}
//             <div>
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.2 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 className="text-lg lg:text-xl font-light leading-relaxed tracking-wide text-white/90 text-justify mb-8" 
//               >
//               Sam is a creative pioneer; Aliza has the gift of listening and telling stories that matter.
//               Born in Singapore, Sam moved to Phnom Penh in 2019. Here he met Aliza in 2023, and together they began pursuing the dream God placed in their hearts — to build a church for this generation.
//               </motion.p>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.4 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 className="text-lg lg:text-xl font-light leading-relaxed tracking-wide text-white/90 text-justify mb-8"
//               >
//               They got engaged in November 2024 and will be married in June 2026.
//               </motion.p>

//                <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.2 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 className="text-lg lg:text-xl font-light leading-relaxed tracking-wide text-white/90 text-justify" 
//               >
//               Pr. Sam Wujiale & Sannyaliza Sreng
//               </motion.p>


//             </div>

//           </div>
//         </div>
                   
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.6 }}
//               viewport={{ once: true, margin: "-100px" }}
//               className="flex items-center gap-6 justify-center"
//             >
//               <motion.a
//                 href="https://facebook.com/yourpage"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.7 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.2, y: -6 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="w-12 h-12 border-2 border-white rounded-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
//                 aria-label="Facebook"
//               >
//                 <Facebook className="w-5 h-5" />
//               </motion.a>

//               <motion.a
//                 href="https://instagram.com/yourpage"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.8 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.2, y: -6 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="w-12 h-12 border-2 border-white rounded-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
//                 aria-label="Instagram"
//               >
//                 <Instagram className="w-5 h-5" />
//               </motion.a>

//               <motion.a
//                 href="https://tiktok.com/@yourpage"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.9 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.2, y: -6 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="w-12 h-12 border-2 border-white rounded-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
//                 aria-label="TikTok"
//               >
//                 <TiktokIcon />
//               </motion.a>
//             </motion.div>

//         {/* View Our Team Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 40, scale: 0.9 }}
//           whileInView={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
//           viewport={{ once: true, margin: "-100px" }}
//           whileHover={{ y: -4 }}
//           className="flex justify-center mt-16 lg:mt-24"
//         >
//           <motion.div whileHover="hover" initial="rest">
//             <Link
//               href="/team"
//               className="relative inline-flex items-center gap-3 border-2 border-white rounded-md px-8 py-3.5 lg:px-10 lg:py-5 text-sm font-bold tracking-widest uppercase overflow-hidden"
//             >
//               <motion.div
//                 className="absolute inset-0 bg-white"
//                 initial={{ x: "-100%" }}
//                 variants={{
//                   rest: { x: "-100%" },
//                   hover: { x: "0%" },
//                 }}
//                 transition={{ duration: 0.4, ease: "easeInOut" }}
//               />
//               <motion.span
//                 className="relative z-10 flex items-center gap-2 text-white"
//                 variants={{
//                   rest: { color: "#ffffff" },
//                   hover: { color: "#000000" },
//                 }}
//                 transition={{ duration: 0.2, delay: 0.1 }}
//               >
//                 View Our Team
//                 <motion.span
//                   variants={{
//                     rest: { x: 0 },
//                     hover: { x: 8 },
//                   }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   →
//                 </motion.span>
//               </motion.span>
//             </Link>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

// Custom TikTok Icon
const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
  </svg>
);

export default function PastorSection() {
  return (
    <section id="pastor" className="pt-24 lg:pt-48 bg-black text-white overflow-hidden">
      <div className="px-8 md:px-24 lg:px-32">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-5xl lg:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-500 text-center mb-16 lg:mb-32"
        >
          Our Pastor
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* LEFT: Photo */}
          <div className="lg:pl-16 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative w-full h-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/sam_liza.jpg"
                alt="Pastor Sam"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 50vw"
                priority
              />
            </motion.div>
          </div>

          {/* RIGHT: Text */}
          <div className="flex flex-col justify-between h-full min-h-[400px] lg:min-h-[500px] xl:min-h-[600px]">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-lg lg:text-xl font-light leading-relaxed tracking-wide text-white/90 text-justify mb-8"
              >
                Sam is a creative pioneer; Aliza has the gift of listening and telling stories that matter.
                Born in Singapore, Sam moved to Phnom Penh in 2019. Here he met Aliza in 2023, and together they began pursuing the dream God placed in their hearts — to build a church for this generation.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-lg lg:text-xl font-light leading-relaxed tracking-wide text-white/90 text-justify mb-8"
              >
                They got engaged in November 2024 and will be married in June 2026.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-lg lg:text-xl font-light leading-relaxed tracking-wide text-white/90 text-justify"
              >
                Pr. Sam Wujiale & Sannyaliza Sreng
              </motion.p>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex items-center gap-6 justify-center mt-16"
        >
          <motion.a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.2, y: -6 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 border-2 border-white rounded-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </motion.a>

          <motion.a
            href="https://instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.2, y: -6 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 border-2 border-white rounded-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </motion.a>

          <motion.a
            href="https://tiktok.com/@yourpage"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.2, y: -6 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 border-2 border-white rounded-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            aria-label="TikTok"
          >
            <TiktokIcon />
          </motion.a>
        </motion.div>

        {/* View Our Team Button */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ y: -4 }}
          className="flex justify-center mt-16 lg:mt-24"
        >
          <motion.div whileHover="hover" initial="rest">
            <Link
              href="/team"
              className="relative inline-flex items-center gap-3 border-2 border-white rounded-md px-8 py-3.5 lg:px-10 lg:py-5 text-sm font-bold tracking-widest uppercase overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                variants={{ rest: { x: "-100%" }, hover: { x: "0%" } }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
              <motion.span
                className="relative z-10 flex items-center gap-2 text-white"
                variants={{ rest: { color: "#ffffff" }, hover: { color: "#000000" } }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                View Our Team
                <motion.span
                  variants={{ rest: { x: 0 }, hover: { x: 8 } }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

