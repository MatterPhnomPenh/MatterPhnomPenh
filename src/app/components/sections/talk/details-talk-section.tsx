

'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SocialMediaPost {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  youtubeUrl: string;
  date: string;
  duration: string;
  views: string;
}

// Fallback-capable image
const ImageWithFallback = ({ src, alt }: { src: string; alt: string }) => {
  const [error, setError] = useState(false);

  return error ? (
    <div className="w-full h-full flex items-center justify-center bg-blue-100">
      <div className="text-center">
        <svg
          className="w-8 h-8 text-blue-600 mx-auto"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14,6L10.25,11L13.1,14.8L11.5,16C9.81,13.75 7,10 7,10L1,18H23L14,6Z" />
        </svg>
        <p className="text-blue-600 text-sm mt-1">Video Thumbnail</p>
      </div>
    </div>
  ) : (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      onError={() => setError(true)}
      unoptimized
    />
  );
};

const SocialMediaSection = React.forwardRef<HTMLElement>((props, ref) => {
  const [posts] = useState<SocialMediaPost[]>([
    {
      id: '1',
      title: 'More Than Just Lights & Gifts',
      description:
        'No description has been added to this video.',
      thumbnail: '/images/DSC04811.jpg',
      youtubeUrl: 'https://youtu.be/_vnHa57p-jw?si=TW45C_cuIKswR-5j',
      date: '2024-01-15',
      duration: '12:24',
      views: '24K views',
    },
    {
      id: '2',
      title: 'None Title',
      description:
        'No description has been added to this video.',
      thumbnail: '/images/Unavailable.png',
      youtubeUrl: 'https://youtu.be/',
      date: '2024-01-10',
      duration: '8:45',
      views: '18K views',
    },
    {
      id: '3',
      title: 'None Title',
      description:
        'No description has been added to this video.',
      thumbnail: '/images/Unavailable.png',
      youtubeUrl: 'https://youtu.be/',
      date: '2024-01-05',
      duration: '15:30',
      views: '32K views',
    },
    {
      id: '4',
      title: 'None Title',
      description:
        'No description has been added to this video.',
      thumbnail: '/images/Unavailable.png',
      youtubeUrl: 'https://youtu.be/',
      date: '2023-12-28',
      duration: '10:15',
      views: '21K views',
    },
    {
      id: '5',
      title: 'None Title',
      description:
        'No description has been added to this video.',
      thumbnail: '/images/Unavailable.png',
      youtubeUrl: 'https://youtu.be/',
      date: '2023-12-20',
      duration: '14:20',
      views: '28K views',
    },
  ]);

  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <section
      ref={ref}
      id="details-talk"
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-[#49C809] py-12"
    >
      <div className="w-full mx-auto px-6 md:px-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Latest Videos
        </h2>

        {/* Featured Video */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg cursor-pointer mb-12"
          onClick={() =>
            featuredPost.youtubeUrl &&
            window.open(featuredPost.youtubeUrl, '_blank')
          }
        >
          <ImageWithFallback
            src={featuredPost.thumbnail}
            alt={featuredPost.title}
          />

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <svg
                className="w-10 h-10 text-[#49C809] ml-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Duration badge */}
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded">
            {featuredPost.duration}
          </div>

          {/* Title & description */}
          <div className="absolute bottom-4 left-4 max-w-lg">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-2 drop-shadow-lg">
              {featuredPost.title}
            </h3>
            <p className="text-white text-sm opacity-90 drop-shadow-lg line-clamp-2">
              {featuredPost.description}
            </p>
          </div>
        </motion.div>

        {/* Grid of Other Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {otherPosts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white border border-stone-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
              onClick={() =>
                post.youtubeUrl && window.open(post.youtubeUrl, '_blank')
              }
            >
              <div className="relative w-full aspect-video">
                <ImageWithFallback src={post.thumbnail} alt={post.title} />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 text-[#49C809] ml-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {post.duration}
                </div>
              </div>

              <div className="p-4 flex flex-col gap-2 flex-grow">
                <div className="flex justify-between items-start text-xs text-stone-500 font-medium">
                  <span className="bg-red-100 text-[#49C809] px-2 py-1 rounded-full">
                    YOUTUBE
                  </span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-stone-900 line-clamp-2">
                  {post.title}
                </h3>
                {post.description && (
                  <p className="text-sm text-stone-600 line-clamp-2">
                    {post.description}
                  </p>
                )}
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-stone-500">{post.views}</span>
                  <span className="text-xs text-[#49C809] font-medium">
                    Watch now →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

SocialMediaSection.displayName = 'SocialMediaSection';

export default SocialMediaSection;
