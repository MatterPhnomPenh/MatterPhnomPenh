

// // 'use client';

// // import Image from 'next/image';
// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';

// // interface SocialMediaPost {
// //   id: string;
// //   title: string;
// //   description: string;
// //   thumbnail: string;
// //   youtubeUrl: string;
// //   date: string;
// //   duration: string;
// //   views: string;
// // }

// // // Fallback-capable image
// // const ImageWithFallback = ({ src, alt }: { src: string; alt: string }) => {
// //   const [error, setError] = useState(false);

// //   return error ? (
// //     <div className="w-full h-full flex items-center justify-center bg-white">
// //       <div className="text-center">
// //         <svg
// //           className="w-8 h-8 text-blue-600 mx-auto"
// //           fill="currentColor"
// //           viewBox="0 0 24 24"
// //         >
// //           <path d="M14,6L10.25,11L13.1,14.8L11.5,16C9.81,13.75 7,10 7,10L1,18H23L14,6Z" />
// //         </svg>
// //         <p className="text-blue-600 text-sm mt-1">Video Thumbnail</p>
// //       </div>
// //     </div>
// //   ) : (
// //     <Image
// //       src={src}
// //       alt={alt}
// //       fill
// //       className="object-cover"
// //       onError={() => setError(true)}
// //       unoptimized
// //     />
// //   );
// // };

// // const SocialMediaSection = React.forwardRef<HTMLElement>((props, ref) => {
// //   const [posts] = useState<SocialMediaPost[]>([
// //     {
// //       id: '1',
// //       title: 'More Than Just Lights & Gifts',
// //       description:
// //         'No description has been added to this video.',
// //       thumbnail: '/images/DSC04811.jpg',
// //       youtubeUrl: 'https://youtu.be/_vnHa57p-jw?si=TW45C_cuIKswR-5j',
// //       date: '2024-01-15',
// //       duration: '12:24',
// //       views: '24K views',
// //     },
// //     {
// //       id: '2',
// //       title: 'None Title',
// //       description:
// //         'No description has been added to this video.',
// //       thumbnail: '/images/Unavailable.png',
// //       youtubeUrl: 'https://youtu.be/',
// //       date: '2024-01-10',
// //       duration: '8:45',
// //       views: '18K views',
// //     },
// //     {
// //       id: '3',
// //       title: 'None Title',
// //       description:
// //         'No description has been added to this video.',
// //       thumbnail: '/images/Unavailable.png',
// //       youtubeUrl: 'https://youtu.be/',
// //       date: '2024-01-05',
// //       duration: '15:30',
// //       views: '32K views',
// //     },
// //     {
// //       id: '4',
// //       title: 'None Title',
// //       description:
// //         'No description has been added to this video.',
// //       thumbnail: '/images/Unavailable.png',
// //       youtubeUrl: 'https://youtu.be/',
// //       date: '2023-12-28',
// //       duration: '10:15',
// //       views: '21K views',
// //     },
// //     {
// //       id: '5',
// //       title: 'None Title',
// //       description:
// //         'No description has been added to this video.',
// //       thumbnail: '/images/Unavailable.png',
// //       youtubeUrl: 'https://youtu.be/',
// //       date: '2023-12-20',
// //       duration: '14:20',
// //       views: '28K views',
// //     },
// //   ]);

// //   const featuredPost = posts[0];
// //   const otherPosts = posts.slice(1);

// //   return (
// //     <section
// //       ref={ref}
// //       id="details-talk"
// //       className="min-h-screen bg-black text-white py-12"
// //     >
// //       <div className="w-full mx-auto px-6 md:px-10">
// //         <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
// //           Latest Videos
// //         </h2>

// //         {/* Featured Video */}
// //         <motion.div
// //           whileHover={{ scale: 1.01 }}
// //           transition={{ type: 'spring', stiffness: 300, damping: 20 }}
// //           className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg cursor-pointer mb-12"
// //           onClick={() =>
// //             featuredPost.youtubeUrl &&
// //             window.open(featuredPost.youtubeUrl, '_blank')
// //           }
// //         >
// //           <ImageWithFallback
// //             src={featuredPost.thumbnail}
// //             alt={featuredPost.title}
// //           />

// //           {/* Play button overlay */}
// //           <div className="absolute inset-0 flex items-center justify-center">
// //             <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
// //               <svg
// //                 className="w-10 h-10 text-black ml-1"
// //                 viewBox="0 0 24 24"
// //                 fill="currentColor"
// //               >
// //                 <path d="M8 5v14l11-7z" />
// //               </svg>
// //             </div>
// //           </div>

// //           {/* Duration badge */}
// //           <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded">
// //             {featuredPost.duration}
// //           </div>

// //           {/* Title & description */}
// //           <div className="absolute bottom-4 left-4 max-w-lg">
// //             <h3 className="text-white text-xl md:text-2xl font-bold mb-2 drop-shadow-lg">
// //               {featuredPost.title}
// //             </h3>
// //             <p className="text-white text-sm opacity-90 drop-shadow-lg line-clamp-2">
// //               {featuredPost.description}
// //             </p>
// //           </div>
// //         </motion.div>

// //         {/* Grid of Other Posts */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //           {otherPosts.map((post) => (
// //             <motion.div
// //               key={post.id}
// //               whileHover={{ scale: 1.03, y: -5 }}
// //               transition={{ type: 'spring', stiffness: 300, damping: 20 }}
// //               className="bg-white border border-black rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
// //               onClick={() =>
// //                 post.youtubeUrl && window.open(post.youtubeUrl, '_blank')
// //               }
// //             >
// //               <div className="relative w-full aspect-video">
// //                 <ImageWithFallback src={post.thumbnail} alt={post.title} />

// //                 {/* Play button */}
// //                 <div className="absolute inset-0 flex items-center justify-center">
// //                   <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
// //                     <svg
// //                       className="w-6 h-6 text-black ml-0.5"
// //                       viewBox="0 0 24 24"
// //                       fill="currentColor"
// //                     >
// //                       <path d="M8 5v14l11-7z" />
// //                     </svg>
// //                   </div>
// //                 </div>

// //                 {/* Duration badge */}
// //                 <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
// //                   {post.duration}
// //                 </div>
// //               </div>

// //               <div className="p-4 flex flex-col gap-2 flex-grow">
// //                 <div className="flex justify-between items-start text-xs text-stone-500 font-medium">
// //                   <span className="bg-red-100 text-black px-2 py-1 rounded-full">
// //                     YOUTUBE
// //                   </span>
// //                   <span>{post.date}</span>
// //                 </div>
// //                 <h3 className="text-lg font-semibold text-stone-900 line-clamp-2">
// //                   {post.title}
// //                 </h3>
// //                 {post.description && (
// //                   <p className="text-sm text-stone-600 line-clamp-2">
// //                     {post.description}
// //                   </p>
// //                 )}
// //                 <div className="flex justify-between items-center mt-2">
// //                   <span className="text-xs text-stone-500">{post.views}</span>
// //                   <span className="text-xs text-black font-medium">
// //                     Watch now →
// //                   </span>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // });

// // SocialMediaSection.displayName = 'SocialMediaSection';

// // export default SocialMediaSection;


// 'use client';

// import Image from 'next/image';
// import React, { useState } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';

// interface SocialMediaPost {
//   id: string;
//   title: string;
//   description: string;
//   thumbnail: string;
//   youtubeUrl: string;
//   date: string;
//   duration: string;
//   views: string;
// }

// // Fallback-capable image
// const ImageWithFallback = ({ src, alt }: { src: string; alt: string }) => {
//   const [error, setError] = useState(false);

//   return error ? (
//     <div className="w-full h-full flex items-center justify-center bg-neutral-900">
//       <div className="text-center">
//         <svg
//           className="w-8 h-8 text-neutral-600 mx-auto"
//           fill="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
//         </svg>
//       </div>
//     </div>
//   ) : (
//     <Image
//       src={src}
//       alt={alt}
//       fill
//       className="object-cover transition-transform duration-700 group-hover:scale-110"
//       onError={() => setError(true)}
//       unoptimized
//     />
//   );
// };

// const SocialMediaSection = React.forwardRef<HTMLElement>((props, ref) => {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
//   const [posts] = useState<SocialMediaPost[]>([
//     {
//       id: '1',
//       title: 'More Than Just Lights & Gifts',
//       description: 'Discover the true meaning behind our celebrations and the importance of genuine connections.',
//       thumbnail: '/images/DSC04811.jpg',
//       youtubeUrl: 'https://youtu.be/_vnHa57p-jw?si=TW45C_cuIKswR-5j',
//       date: 'January 15, 2024',
//       duration: '12:24',
//       views: '24K',
//     },
//     {
//       id: '2',
//       title: 'Building Stronger Communities',
//       description: 'Learn how we can work together to create meaningful impact.',
//       thumbnail: '/images/Unavailable.png',
//       youtubeUrl: 'https://youtu.be/',
//       date: 'January 10, 2024',
//       duration: '8:45',
//       views: '18K',
//     },
//     {
//       id: '3',
//       title: 'Finding Purpose in Everyday Life',
//       description: 'Explore practical ways to discover meaning in your daily routine.',
//       thumbnail: '/images/Unavailable.png',
//       youtubeUrl: 'https://youtu.be/',
//       date: 'January 5, 2024',
//       duration: '15:30',
//       views: '32K',
//     },
//     {
//       id: '4',
//       title: 'The Power of Connection',
//       description: 'Understanding how genuine relationships transform lives.',
//       thumbnail: '/images/Unavailable.png',
//       youtubeUrl: 'https://youtu.be/',
//       date: 'December 28, 2023',
//       duration: '10:15',
//       views: '21K',
//     },
//   ]);

//   const featuredPost = posts[0];
//   const otherPosts = posts.slice(1);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: [0.25, 0.46, 0.45, 0.94]
//       }
//     }
//   };

//   return (
//     <section
//       ref={sectionRef}
//       id="details-talk"
//       className="min-h-screen bg-white text-black py-20 md:py-28"
//     >
//       <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Minimal Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           <div className="inline-block mb-4">
//             <div className="w-16 h-0.5 bg-black mb-2 mx-auto"></div>
//             <span className="text-sm font-medium tracking-widest text-gray-600 uppercase">
//               Latest Content
//             </span>
//           </div>
//           <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
//             Videos
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
//             Inspiring messages and meaningful conversations
//           </p>
//         </motion.div>

//         {/* Featured Video - Clean Modern Layout */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : ""}
//           className="mb-28"
//         >
//           <motion.div
//             variants={itemVariants}
//             className="group cursor-pointer"
//             onClick={() =>
//               featuredPost.youtubeUrl &&
//               window.open(featuredPost.youtubeUrl, '_blank')
//             }
//           >
//             <div className="relative aspect-[16/9] mb-8 overflow-hidden bg-neutral-100">
//               <ImageWithFallback
//                 src={featuredPost.thumbnail}
//                 alt={featuredPost.title}
//               />
              
//               {/* Minimal Play Button */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center transform group-hover:scale-105 transition-all duration-500 shadow-lg">
//                   <svg
//                     className="w-6 h-6 text-black ml-1"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                   >
//                     <path d="M8 5v14l11-7z" />
//                   </svg>
//                 </div>
//               </div>

//               {/* Minimal Info Overlay */}
//               <div className="absolute bottom-6 left-6">
//                 <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded text-sm font-medium">
//                   {featuredPost.duration}
//                 </div>
//               </div>
//             </div>

//             {/* Content Below Image */}
//             <div className="max-w-4xl mx-auto text-center">
//               <div className="flex justify-center items-center gap-4 text-sm text-gray-500 mb-4">
//                 <span>{featuredPost.date}</span>
//                 <span>•</span>
//                 <span>{featuredPost.views} views</span>
//               </div>
//               <h3 className="text-3xl md:text-4xl font-light mb-4 leading-tight">
//                 {featuredPost.title}
//               </h3>
//               <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
//                 {featuredPost.description}
//               </p>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Grid of Other Videos - Clean Card Layout */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : ""}
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
//             {otherPosts.map((post, index) => (
//               <motion.div
//                 key={post.id}
//                 variants={itemVariants}
//                 custom={index}
//                 className="group cursor-pointer"
//                 onClick={() =>
//                   post.youtubeUrl && window.open(post.youtubeUrl, '_blank')
//                 }
//               >
//                 <div className="relative aspect-[16/9] mb-6 overflow-hidden bg-neutral-100">
//                   <ImageWithFallback src={post.thumbnail} alt={post.title} />
                  
//                   {/* Hover Play Button */}
//                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                     <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
//                       <svg
//                         className="w-5 h-5 text-black ml-0.5"
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                       >
//                         <path d="M8 5v14l11-7z" />
//                       </svg>
//                     </div>
//                   </div>

//                   {/* Duration */}
//                   <div className="absolute bottom-4 right-4 bg-black/80 text-white text-xs px-2 py-1 rounded">
//                     {post.duration}
//                   </div>
//                 </div>

//                 <div className="space-y-3">
//                   <div className="flex justify-between items-center text-sm text-gray-500">
//                     <span>{post.date}</span>
//                     <span>{post.views} views</span>
//                   </div>
                  
//                   <h3 className="text-xl font-light leading-tight group-hover:text-gray-600 transition-colors duration-300">
//                     {post.title}
//                   </h3>
                  
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     {post.description}
//                   </p>
                  
//                   <div className="pt-2 border-t border-gray-200">
//                     <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">
//                       Watch Video →
//                     </span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Minimal Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.8 }}
//           className="text-center mt-20 pt-12 border-t border-gray-200"
//         >
//           <p className="text-gray-600 mb-6 text-lg">
//             More content coming soon
//           </p>
//           <button
//             onClick={() => window.open('https://youtube.com', '_blank')}
//             className="inline-flex items-center gap-2 border border-black px-8 py-3 text-sm font-medium tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
//           >
//             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
//             </svg>
//             YouTube Channel
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// });

// SocialMediaSection.displayName = 'SocialMediaSection';

// export default SocialMediaSection;