'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface InstagramPost {
  id: string;
  caption?: string;
  media_url: string;
  media_type: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

const InstagramNewsSection = React.forwardRef<HTMLElement>((props, ref) => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);

  useEffect(() => {
    fetch('/api/instagram')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        const allPosts = Array.isArray(data.data) ? data.data : data;
        const sorted = allPosts.sort(
          (a: { timestamp: string | number | Date; }, b: { timestamp: string | number | Date; }) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );
        setPosts(sorted.slice(0, 8));
      })
      .catch((error) => console.error('Error fetching Instagram data:', error));
  }, []);

  return (
    <section ref={ref} className="min-h-screen bg-trasparent text-blue-900 pt-24">
      <div className="w-full mx-auto px-10 py-24">
        <h2 className="text-left text-4xl md:text-6xl font-bold font-sans tracking-tight mb-16">
          See What We’re Sharing
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white border border-stone-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col overflow-hidden"
            >
              <Link href={post.permalink} target="_blank" aria-label="View on Instagram">
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src={
                      post.media_type === 'VIDEO' && post.thumbnail_url
                        ? post.thumbnail_url
                        : post.media_url
                    }
                    alt={
                      post.caption || post.media_type === 'VIDEO'
                        ? 'Instagram video thumbnail'
                        : 'Instagram image'
                    }
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </Link>
              <div className="px-4 py-3 flex flex-col gap-2 flex-grow">
                <div className="flex justify-between text-xs text-stone-500 font-medium">
                  <span className="bg-stone-100 px-2 py-1 rounded-full">INSTAGRAM</span>
                  <span>{new Date(post.timestamp).toLocaleDateString()}</span>
                </div>
                {post.caption && (
                  <p className="text-sm text-stone-700 line-clamp-3 font-sans">
                    {post.caption}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="pt-12 text-left">
          <Link href="https://instagram.com/originskh" target="_blank">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-blue-900 border border-blue-900 text-white px-6 py-3 text-lg rounded-full font-semibold hover:bg-transparent hover:text-blue-900 transition"
            >
              Explore More
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
});

InstagramNewsSection.displayName = 'InstagramNewsSection';

export default InstagramNewsSection;





