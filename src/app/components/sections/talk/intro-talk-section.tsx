
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface Talk {
  videoId: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string;
}

export default function TalkPageSection() {
  const [talks, setTalks] = useState<Talk[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const sectionRef = useRef(null);
  // const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID || '';
  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || '';
  const MAX_VIDEOS = 10;

  useEffect(() => {
    async function fetchVideos() {
      try {
        const channelRes = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
        );
        const channelData = await channelRes.json();
        if (channelData.items.length === 0) throw new Error('Channel not found');
        const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

        const playlistRes = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${MAX_VIDEOS}&playlistId=${uploadsPlaylistId}&key=${API_KEY}`
        );
        const playlistData = await playlistRes.json();

        const formattedTalks: Talk[] = playlistData.items.map((item: any) => ({
          videoId: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          description: item.snippet.description || 'No description available.',
          publishedAt: item.snippet.publishedAt,
          thumbnail: item.snippet.thumbnails.maxres?.url || item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url,
        }));

        formattedTalks.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

        setTalks(formattedTalks);
        setLoading(false);
      } catch (err) {
        setError('Failed to load videos. Check console for details.');
        console.error(err);
        setLoading(false);
      }
    }

    if (CHANNEL_ID && API_KEY) {
      fetchVideos();
    } else {
      setError('Missing YouTube configuration.');
      setLoading(false);
    }
  }, [CHANNEL_ID, API_KEY]);

  const formatDate = (isoDate: string) => {
    return new Date(isoDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  if (loading) return <div className="py-32 text-center text-white">Loading latest talks...</div>;
  if (error) return <div className="py-32 text-center text-red-400">{error}</div>;
  if (talks.length === 0) return <div className="py-32 text-center text-white">No videos found.</div>;

  return (
    <>
      {/* Intro Section */}
      <section
        id="talk-intro"
        className="relative w-full bg-black lg:py-32 py-20 px-8 lg:px-16 text-white overflow-hidden min-h-screen flex flex-col justify-center"
        style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
      >
        <div className="max-w-7xl mx-auto w-full pt-10">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-none">
              Our Talk
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: false }}
              className="mt-8 text-lg sm:text-2xl font-light text-white/90 leading-relaxed"
              style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
            >
              A space where your voice counts, your presence matters, and you are always seen.
            </motion.p>
          </motion.div>

          {/* BUTTON 1: Watch Latest Talks */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 text-left w-full sm:w-auto"
            style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              viewport={{ once: false }}
              whileHover={{ y: -4 }}
            >
              <motion.div whileHover="hover" initial="rest">
                <Link
                  href="#details-talk"
                  className="relative inline-flex items-center justify-center gap-2 sm:gap-3 border border-white rounded-md px-8 py-3.5 lg:px-10 lg:py-5 text-xs sm:text-sm font-medium tracking-widest uppercase overflow-hidden whitespace-nowrap w-full sm:w-auto text-center"
                >
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    variants={{ rest: { x: "-100%" }, hover: { x: "0%" } }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="relative z-10 flex items-center gap-2 sm:gap-3"
                    variants={{ rest: { color: "#ffffff" }, hover: { color: "#000000" } }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    Watch Latest Talks
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
          </motion.div>
        </div>
      </section>

      {/* All Videos Grid Section */}
      <section
        ref={sectionRef}
        id="details-talk"
        className="py-20 px-8 lg:px-16 bg-black text-white overflow-hidden"
        style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="text-center mb-16 sm:mb-28"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter">
              Latest Talks
            </h2>
          </motion.div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {talks.map((talk, index) => (
              <motion.div
                key={talk.videoId}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: false }}
                className="group cursor-pointer"
                onClick={() => window.open(`https://www.youtube.com/watch?v=${talk.videoId}`, '_blank')}
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 shadow-xl">
                  <Image
                    src={talk.thumbnail}
                    alt={talk.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-white/60 mb-2 text-sm sm:text-base">{formatDate(talk.publishedAt)}</p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight group-hover:text-white/80 transition-colors">
                  {talk.title}
                </h3>
                <p className="mt-3 text-white/70 font-light leading-relaxed text-sm sm:text-base line-clamp-3">
                  {talk.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* BUTTON 2: Watch All on YouTube */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-20 flex flex-col sm:flex-row gap-4 sm:gap-6 text-left w-full sm:w-auto justify-center"
            style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              viewport={{ once: false }}
              whileHover={{ y: -4 }}
            >
              <motion.div whileHover="hover" initial="rest">
                <a
                  href="https://www.youtube.com/@matterphnompenh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center gap-2 sm:gap-3 border border-white rounded-md px-8 py-3.5 lg:px-10 lg:py-5 text-xs sm:text-sm font-medium tracking-widest uppercase overflow-hidden whitespace-nowrap w-full sm:w-auto text-center"
                >
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    variants={{ rest: { x: "-100%" }, hover: { x: "0%" } }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="relative z-10 flex items-center gap-2 sm:gap-3"
                    variants={{ rest: { color: "#ffffff" }, hover: { color: "#000000" } }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    Watch All on YouTube
                    <motion.span
                      variants={{ rest: { x: 0 }, hover: { x: 8 } }}
                      transition={{ duration: 0.3 }}
                    >
                      →
                    </motion.span>
                  </motion.span>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}