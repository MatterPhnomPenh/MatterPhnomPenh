
// "use client";

// import React, { useState, useRef } from "react";
// import { Play, X, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// interface HeroPageProps {
//   backgroundvideoSrc: string;
//   videoSrc: string;
//   thumbnailSrc?: string;
//   description: string;
//   title?: string;
// }

// const HeroPage: React.FC<HeroPageProps> = ({ 
//   backgroundvideoSrc, videoSrc, 
//   thumbnailSrc = "/hero-thumbnail.jpg", 
//   description = "Discover the heart of Matter Church – where faith meets community.", 
//   title = "Welcome to Matter" 
// }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isMuted, setIsMuted] = useState(true);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [showControls, setShowControls] = useState(true);

//   const videoRef = useRef<HTMLVideoElement>(null);

//   const togglePlay = () => {
//     const video = videoRef.current;
//     if (!video) return;

//     if (isPlaying) {
//       video.pause();
//     } else {
//       video.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const toggleMute = () => {
//     const video = videoRef.current;
//     if (!video) return;

//     video.muted = !video.muted;
//     setIsMuted(video.muted);
//   };

//   const handleTimeUpdate = () => {
//     const video = videoRef.current;
//     if (video) {
//       setCurrentTime(video.currentTime);
//       setDuration(video.duration);
//     }
//   };

//   const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     const video = videoRef.current;
//     const progressBar = e.currentTarget;
//     if (!video || !progressBar) return;

//     const rect = progressBar.getBoundingClientRect();
//     const pos = (e.clientX - rect.left) / rect.width;
//     const newTime = pos * duration;
//     video.currentTime = newTime;
//     setCurrentTime(newTime);
//   };

//   const toggleFullScreen = () => {
//     const video = videoRef.current;
//     if (!video) return;

//     if (!document.fullscreenElement) {
//       video.requestFullscreen?.();
//     } else {
//       document.exitFullscreen?.();
//     }
//   };

//   const formatTime = (time: number): string => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60).toString().padStart(2, "0");
//     return `${minutes}:${seconds}`;
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//     // Delay play to allow modal animation
//     setTimeout(() => {
//       const video = videoRef.current;
//       if (video) {
//         video.play();
//         setIsPlaying(true);
//         setIsMuted(false); // Unmute in modal
//       }
//     }, 300);
//   };

//   const closeModal = () => {
//     const video = videoRef.current;
//     if (video) {
//       video.pause();
//       setIsPlaying(false);
//     }
//     setIsModalOpen(false);
//     setShowControls(true);
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative w-full h-screen overflow-hidden">
//         {/* Background Video */}
//         <video
//           ref={videoRef}
//           src={backgroundvideoSrc}
//           poster={thumbnailSrc}
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//           onTimeUpdate={handleTimeUpdate}
//         />

//         {/* Overlay Gradient */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

//         {/* Content */}
//         <div className="absolute inset-0 flex flex-col justify-end items-center p-8 text-center text-white"
//           style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
//           >
//           {title && (
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-wide"
//             >
//               {title}
//             </motion.h1>
//           )}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-lg md:text-xl max-w-2xl mb-8 opacity-90"
//             style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}

//           >
//             {description}
//           </motion.p>

//           {/* Play Button */}
//           <motion.button
//             onClick={openModal}
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="relative z-10 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-6 md:p-8 transition-all duration-300 flex items-center justify-center mb-4"
//             aria-label="Play Video"
//           >
//             <Play className="w-8 h-8 md:w-12 md:h-12 text-white ml-1" />
//           </motion.button>
//         </div>
//       </section>

//       {/* Full-Screen Modal */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black"
//             onClick={closeModal}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="relative w-full h-full max-w-4xl max-h-full"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Close Button */}
//               <button
//                 onClick={closeModal}
//                 className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
//               >
//                 <X className="w-6 h-6" />
//               </button>

//               {/* Video Player */}
//               <div className="relative w-full h-full">
//                 <video
//                   ref={videoRef}
//                   src={videoSrc}
//                   className="w-full h-full object-contain"
//                   onTimeUpdate={handleTimeUpdate}
//                   onMouseMove={() => setShowControls(true)}
//                   onMouseLeave={() => setTimeout(() => setShowControls(false), 3000)}
//                 />

//                 {/* Controls Overlay */}
//                 <AnimatePresence>
//                   {showControls && (
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       className="absolute inset-0 pointer-events-none"
//                     >
//                       {/* Progress Bar */}
//                       <div className="absolute bottom-20 left-0 right-0 p-4 pointer-events-auto">
//                         <div
//                           className="h-1 bg-white/30 rounded-full cursor-pointer"
//                           onClick={handleProgressClick}
//                         >
//                           <div
//                             className="h-full bg-white rounded-full"
//                             style={{ width: duration ? `${(currentTime / duration) * 100}%` : 0 }}
//                           />
//                         </div>
//                         <div className="flex justify-between text-xs text-white mt-1">
//                           <span>{formatTime(currentTime)}</span>
//                           <span>{formatTime(duration)}</span>
//                         </div>
//                       </div>

//                       {/* Bottom Controls */}
//                       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center justify-center space-x-4 pointer-events-auto">
//                         <button onClick={togglePlay} className="p-2 rounded hover:bg-white/20">
//                           {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
//                         </button>
//                         <button onClick={toggleMute} className="p-2 rounded hover:bg-white/20">
//                           {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
//                         </button>
//                         <button onClick={toggleFullScreen} className="p-2 rounded hover:bg-white/20 ml-auto">
//                           <Maximize2 className="w-6 h-6" />
//                         </button>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default HeroPage;



"use client";
import React, { useState, useRef } from "react";
import { Play, X, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroPageProps {
  backgroundvideoSrc: string;
  videoSrc: string;
  thumbnailSrc?: string;
  description: string;
  title?: string;
}

const HeroPage: React.FC<HeroPageProps> = ({
  backgroundvideoSrc,
  videoSrc,
  thumbnailSrc = "/hero-thumbnail.jpg",
  description = "Discover the heart of Matter Church – where faith meets community.",
  title = "Welcome to Matter"
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // Modal starts unmuted
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);

  // Separate refs!
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    const video = modalVideoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = modalVideoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleTimeUpdate = () => {
    const video = modalVideoRef.current;
    if (video) {
      setCurrentTime(video.currentTime);
      setDuration(video.duration || 0);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = modalVideoRef.current;
    const progressBar = e.currentTarget;
    if (!video || !progressBar || !duration) return;
    const rect = progressBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const newTime = pos * duration;
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleFullScreen = () => {
    const video = modalVideoRef.current;
    if (!video) return;
    if (!document.fullscreenElement) {
      video.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      const video = modalVideoRef.current;
      if (video) {
        video.play();
        setIsPlaying(true);
        setIsMuted(false);
      }
    }, 300);
  };

  const closeModal = () => {
    const video = modalVideoRef.current;
    if (video) {
      video.pause();
      setIsPlaying(false);
    }
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Video - separate ref */}
        <video
          ref={backgroundVideoRef}
          src={backgroundvideoSrc}
          poster={thumbnailSrc}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end items-center p-8 text-center text-white"
          style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}>
          {title && (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-wide"
            >
              {title}
            </motion.h1>
          )}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mb-8 opacity-90"
          >
            {description}
          </motion.p>
          <motion.button
            onClick={openModal}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-6 md:p-8 transition-all duration-300 flex items-center justify-center mb-4"
            aria-label="Play Video"
          >
            <Play className="w-8 h-8 md:w-12 md:h-12 text-white ml-1" />
          </motion.button>
        </div>
      </section>

      {/* Modal - uses modalVideoRef */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative w-full h-full">
                <video
                  ref={modalVideoRef}
                  src={videoSrc}
                  className="w-full h-full object-contain"
                  onTimeUpdate={handleTimeUpdate}
                  onMouseMove={() => setShowControls(true)}
                  onMouseLeave={() => setTimeout(() => setShowControls(false), 3000)}
                />
                {/* Controls */}
                <AnimatePresence>
                  {showControls && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 pointer-events-none"
                    >
                      <div className="absolute bottom-20 left-0 right-0 p-4 pointer-events-auto">
                        <div
                          className="h-1 bg-white/30 rounded-full cursor-pointer"
                          onClick={handleProgressClick}
                        >
                          <div
                            className="h-full bg-white rounded-full"
                            style={{ width: duration ? `${(currentTime / duration) * 100}%` : 0 }}
                          />
                        </div>
                        <div className="flex justify-between text-xs text-white mt-1">
                          <span>{formatTime(currentTime)}</span>
                          <span>{formatTime(duration)}</span>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center justify-center space-x-4 pointer-events-auto">
                        <button onClick={togglePlay} className="p-2 rounded hover:bg-white/20">
                          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                        </button>
                        <button onClick={toggleMute} className="p-2 rounded hover:bg-white/20">
                          {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                        </button>
                        <button onClick={toggleFullScreen} className="p-2 rounded hover:bg-white/20 ml-auto">
                          <Maximize2 className="w-6 h-6" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroPage;