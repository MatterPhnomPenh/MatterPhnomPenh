// "use client";

// import { motion } from "framer-motion";
// import { Calendar, MessageCircle, Handshake, Mic } from "lucide-react";

// const involvementOptions = [
//   {
//     icon: Calendar,
//     title: "Join Our Gatherings",
//     description: "Experience our community firsthand. We meet every Saturday at 5 PM for meaningful connections and conversations.",
//     cta: "View Schedule",
//     href: "/gathering"
//   },
//   {
//     icon: MessageCircle,
//     title: "Start a Conversation",
//     description: "Have questions about faith, community, or personal growth? Let's talk about what matters to you.",
//     cta: "Send Message",
//     href: "mailto:matter@originskh.com"
//   },
//   {
//     icon: Handshake,
//     title: "Partner With Us",
//     description: "Join us in creating impact through community projects, outreach programs, and social initiatives.",
//     cta: "Explore Partnerships",
//     href: "/initiatives"
//   },
//   {
//     icon: Mic,
//     title: "Share Your Story",
//     description: "Your journey matters. Share your experiences and inspire others in our community.",
//     cta: "Learn More",
//     href: "/talk"
//   }
// ];

// const videos = [
//   {
//     src: "/videos/1.mp4",
//     title: "Community Moments",
//     description: "Capturing the essence of our gatherings and connections"
//   },
//   {
//     src: "/videos/2.mp4",
//     title: "Impact Stories",
//     description: "Real stories of transformation and growth"
//   },
//   {
//     src: "/videos/3.mp4",
//     title: "Behind the Scenes",
//     description: "The heart and soul of what we do"
//   }
// ];

// export default function GetInvolvedSection() {
//   return (
//     <main className="bg-white min-h-screen pt-32 pb-24">
//       {/* Hero */}
//       <section className="max-w-6xl mx-auto px-6 text-center mb-20">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="space-y-6"
//         >
//           <div className="flex justify-center mb-8">
//             <div className="w-16 h-px bg-gray-300" />
//           </div>
//           <h1 className="text-5xl md:text-7xl font-light tracking-tight text-black mb-6">
//             Get Involved
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
//             Your presence matters. Discover ways to connect, contribute, and grow with our community.
//           </p>
//         </motion.div>
//       </section>

//       {/* Video Showcase */}
//       <section className="max-w-6xl mx-auto px-6 mb-20">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           {/* <h2 className="text-3xl md:text-4xl font-light text-black mb-4">Our Community in Motion</h2>
//           <p className="text-gray-600 font-light max-w-2xl mx-auto">
//             Experience the energy and connection that defines our community
//           </p> */}
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {videos.map((video, index) => (
//             <motion.div
//               key={video.src}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="group"
//             >
//               <div className="relative overflow-hidden bg-gray-100 aspect-[4/5] mb-4">
//                 <video
//                   src={video.src}
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </div>
//               <h3 className="text-xl font-light text-black mb-2">{video.title}</h3>
//               <p className="text-gray-600 font-light text-sm">{video.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Involvement Options */}
//       <section className="max-w-6xl mx-auto px-6 mb-20">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-light text-black mb-4">Ways to Engage</h2>
//           <p className="text-gray-600 font-light max-w-2xl mx-auto">
//             Find your place and purpose within our growing community
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {involvementOptions.map(({ icon: Icon, title, description, cta, href }, index) => (
//             <motion.div
//               key={title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="group"
//             >
//               <a
//                 href={href}
//                 className="block p-8 border border-gray-200 hover:border-black transition-all duration-300 h-full"
//               >
//                 <div className="flex items-start justify-between mb-6">
//                   <Icon className="w-8 h-8 text-gray-600 group-hover:text-black transition-colors" />
//                   <span className="text-lg transform group-hover:translate-x-1 transition-transform">→</span>
//                 </div>
//                 <h3 className="text-2xl font-light text-black mb-4">{title}</h3>
//                 <p className="text-gray-600 font-light leading-relaxed mb-6">{description}</p>
//                 <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-black transition-colors">
//                   <span>{cta}</span>
//                 </div>
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Quick Contact */}
//       <section className="max-w-6xl mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="border-t border-gray-200 pt-12 text-center"
//         >
//           <h3 className="text-2xl font-light text-black mb-4">Ready to Take the Next Step?</h3>
//           <p className="text-gray-600 font-light mb-8 max-w-md mx-auto">
//             We're here to help you find your place and purpose in our community.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="mailto:matter@originskh.com"
//               className="inline-flex items-center gap-2 border border-black px-6 py-3 text-sm font-light text-black tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
//             >
//               Email Us
//             </a>
//             <a
//               href="https://t.me/phnompenhmatters"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 text-sm font-light text-gray-400 tracking-widest uppercase hover:border-black transition-all duration-300"
//             >
//               Message on Telegram
//             </a>
//           </div>
//         </motion.div>
//       </section>
//     </main>
//   );
// }