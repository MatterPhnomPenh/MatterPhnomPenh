"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

interface LatestTalk {
  videoId: string;
  title: string;
  preacher: string; // e.g., "Pr. Sam Wujiale"
  date: string; // "22.11.2025"
  location: string; // "Matter Phnom Penh"
}

export default function TalkSection() {
  const [latestTalk, setLatestTalk] = useState<LatestTalk | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID || "";
  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || "";

  useEffect(() => {
    async function fetchLatestVideo() {
      if (!CHANNEL_ID || !API_KEY) {
        setError(true);
        setLoading(false);
        return;
      }

      try {
        // Step 1: Get uploads playlist ID
        const channelRes = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
        );
        const channelData = await channelRes.json();
        if (channelData.items?.length === 0) throw new Error("Channel not found");

        const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

        // Step 2: Get only the latest video (maxResults=1)
        const playlistRes = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1&playlistId=${uploadsPlaylistId}&key=${API_KEY}`
        );
        const playlistData = await playlistRes.json();

        if (playlistData.items?.length === 0) {
          setError(true);
          setLoading(false);
          return;
        }

        const item = playlistData.items[0].snippet;

        // Format date like "22.11.2025"
        const publishedDate = new Date(item.publishedAt);
        const formattedDate = `${publishedDate.getDate().toString().padStart(2, "0")}.${(
          publishedDate.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}.${publishedDate.getFullYear()}`;

        // Extract preacher name from title (common pattern: "Title | Gathering with Pr. Name")
        let preacher = "Unknown Speaker";
        let cleanTitle = item.title;

        const match = item.title.match(/with\s+Pr\.\s*([^|]+)/i);
        if (match) {
          preacher = "Pr. " + match[1].trim();
          // Optional: clean title by removing preacher part
          cleanTitle = item.title.split("|")[0].trim();
        } else if (item.title.includes("|")) {
          cleanTitle = item.title.split("|")[0].trim();
        }

        setLatestTalk({
          videoId: item.resourceId.videoId,
          title: cleanTitle || "Our Latest Talk",
          preacher,
          date: formattedDate,
          location: "Matter Phnom Penh", // You can make this dynamic later if needed
        });

        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch latest talk:", err);
        setError(true);
        setLoading(false);
      }
    }

    fetchLatestVideo();
  }, [CHANNEL_ID, API_KEY]);

  // Fallback UI while loading or error
  if (loading) {
    return (
      <section className="py-24 lg:py-32 px-8 lg:px-16 bg-black text-white">
        <div className="text-center">
          <p className="text-xl">Loading latest talk...</p>
        </div>
      </section>
    );
  }

  if (error || !latestTalk) {
    return (
      <section className="py-24 lg:py-32 px-8 lg:px-16 bg-black text-white">
        <div className="text-center">
          <p className="text-xl text-red-400">Unable to load the latest talk.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="talk"
      className="py-24 lg:py-32 px-8 lg:px-16 bg-black text-white overflow-hidden"
    >
      {/* Top Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-20"
        style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-white mb-6">
          Our Latest Talk
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed tracking-wide text-white/90 max-w-3xl mx-auto px-4">
          Description about the talk, meaning conversations blah blah bla.
        </p>
      </motion.div>

      {/* MAIN CENTERED BLOCK: Video + Text */}
      <div className="flex justify-center px-4 sm:px-8 lg:px-16">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 xl:gap-28">
          {/* Video - Left on desktop */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <a
              href={`https://youtu.be/${latestTalk.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-lg"
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
                <iframe
                  src={`https://www.youtube.com/embed/${latestTalk.videoId}?autoplay=1&mute=1&loop=1&playlist=${latestTalk.videoId}&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3`}
                  title={latestTalk.title}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            </a>
          </div>

          {/* Text Content - Right on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
            className="w-full lg:w-1/2 text-center lg:text-left space-y-8"
            style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                {latestTalk.title}
              </h3>
              <p className="text-lg sm:text-xl text-white/80 font-light">
                {latestTalk.preacher}
              </p>
            </div>
            <div className="flex items-center gap-4 text-white/60 text-sm font-medium tracking-wide justify-center lg:justify-start flex-wrap">
              <span>{latestTalk.date}</span>
              <span>•</span>
              <span>{latestTalk.location}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mt-20 sm:mt-28"
      >
        <motion.div whileHover="hover" initial="rest" className="relative inline-block">
          <Link
            href="/talk"
            className="relative inline-flex items-center justify-center gap-3 border-2 border-white rounded-md px-8 py-4 lg:px-12 lg:py-5 text-sm font-bold tracking-widest uppercase overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: "-100%" }}
              variants={{ rest: { x: "-100%" }, hover: { x: "0%" } }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
            <motion.span
              className="relative z-10 flex items-center gap-3 text-white"
              variants={{ rest: { color: "#ffffff" }, hover: { color: "#000000" } }}
              transition={{ duration: 0.2 }}
              style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
            >
              Listen To Other Talks
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
    </section>
  );
}