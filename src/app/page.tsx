// // "use client";

// // import { useEffect, useState } from "react";
// // import { useScroll, useTransform } from "framer-motion";
// // import { AnimatePresence } from "framer-motion";
// // import { useNavigation } from "./components/hooks/use-navigation";

// // import MainLayout from "./components/layouts/main-layout";
// // import IntroHomeSection from "./components/sections/home/intro-home-section";
// // import VocabSection from "./components/sections/home/vocab-section";
// // import AboutSection from "./components/sections/home/about-section";
// // import PastorSection from "./components/sections/home/pastor";
// // import TalkSection from "./components/sections/home/talk-section";
// // import InitiativesSection from "./components/sections/home/initiatives-section";
// // import VideoIntro from "./components/sections/home/VideoIntro-motion";
// // import Footer from "./components/ui/footer";

// // export default function HomePage() {
// //   const { activeSection, scrollToSection } = useNavigation();
// //   const { scrollY } = useScroll();
// //   const navBackground = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0)", "rgba(255,255,255,0.95)"]);

// //   const [showIntro, setShowIntro] = useState(true);
// //   const [isNavReady, setIsNavReady] = useState(false); // Triggers nav animation

// //   const handleIntroEnd = () => {
// //     setShowIntro(false);
// //     // Start nav animation a moment after content appears
// //     setTimeout(() => setIsNavReady(true), 400);
// //   };

// //   // Force light theme
// //   useEffect(() => {
// //     document.documentElement.classList.add("light-theme");
// //     return () => document.documentElement.classList.remove("light-theme");
// //   }, []);

// //   return (
// //     <>
// //       {/* Fullscreen Video Intro */}
// //       <AnimatePresence mode="wait">
// //         {showIntro && <VideoIntro key="intro" onEnd={handleIntroEnd} />}
// //       </AnimatePresence>

// //       {/* Main Content + Animated Nav */}
// //       {!showIntro && (
// //         <MainLayout
// //           navBackground={navBackground.get()}
// //           activeSection={activeSection}
// //           scrollToSection={scrollToSection}
// //           isNavReady={isNavReady} // Pass to trigger animation
// //         >
// //           <IntroHomeSection />
// //           <VocabSection />
// //           <AboutSection />
// //           <PastorSection />
// //           <TalkSection />
// //           <InitiativesSection />
// //           <Footer />
// //         </MainLayout>
// //       )}
// //     </>
// //   );
// // }



// "use client";

// import { useEffect, useState } from "react";
// import { useScroll, useTransform } from "framer-motion";
// import { AnimatePresence } from "framer-motion";
// import { useNavigation } from "./components/hooks/use-navigation";
// import MainLayout from "./components/layouts/main-layout";
// import IntroHomeSection from "./components/sections/home/intro-home-section";
// import VocabSection from "./components/sections/home/vocab-section";
// import AboutSection from "./components/sections/home/about-section";
// import PastorSection from "./components/sections/home/pastor";
// import TalkSection from "./components/sections/home/talk-section";
// import InitiativesSection from "./components/sections/home/initiatives-section";
// import VideoIntro from "./components/sections/home/VideoIntro-motion";
// import Footer from "./components/ui/footer";

// export default function AboutPage() {
//   const { activeSection, scrollToSection } = useNavigation();
//   const { scrollY } = useScroll();
//   const navBackground = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0)", "rgba(255,255,255,0.95)"]);

//   // THIS IS THE ONLY LINE ADDED — converts MotionValue to string
//   const navBgString = navBackground.get();

//   const [showIntro, setShowIntro] = useState(true);
//   const [isNavReady, setIsNavReady] = useState(false);

//   const handleIntroEnd = () => {
//     setShowIntro(false);
//     setTimeout(() => setIsNavReady(true), 400);
//   };

//   useEffect(() => {
//     document.documentElement.classList.add("light-theme");
//     return () => document.documentElement.classList.remove("light-theme");
//   }, []);

//   return (
//     <>
//       <AnimatePresence mode="wait">
//         {showIntro && <VideoIntro key="intro" onEnd={handleIntroEnd} />}
//       </AnimatePresence>

//       {!showIntro && (
//         <MainLayout
//           navBackground={navBgString}       
//           activeSection={activeSection}
//           scrollToSection={scrollToSection}
//           isNavReady={isNavReady}
//         >
//           <IntroHomeSection />
//           <VocabSection />
//           <AboutSection />
//           <PastorSection />
//           <TalkSection />
//           <InitiativesSection />
//           <Footer />
//         </MainLayout>
//       )}
//     </>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useNavigation } from "./components/hooks/use-navigation";

import MainLayout from "./components/layouts/main-layout";
import IntroHomeSection from "./components/sections/home/intro-home-section";
import VocabSection from "./components/sections/home/vocab-section";
import AboutSection from "./components/sections/home/about-section";
import PastorSection from "./components/sections/home/pastor";
import TalkSection from "./components/sections/home/talk-section";
import InitiativesSection from "./components/sections/home/initiatives-section";
import VideoIntro from "./components/sections/home/VideoIntro-motion";
import Footer from "./components/ui/footer";

export default function Page() {
  const {scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0)", "rgba(255,255,255,0.95)"]);

  const [showIntro, setShowIntro] = useState(true);
  const [isNavReady, setIsNavReady] = useState(false);

  const handleIntroEnd = () => {
    setShowIntro(false);
    setTimeout(() => setIsNavReady(true), 400);
  };

  useEffect(() => {
    document.documentElement.classList.add("light-theme");
    return () => document.documentElement.classList.remove("light-theme");
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && <VideoIntro key="intro" onEnd={handleIntroEnd} />}
      </AnimatePresence>

      {!showIntro && (
        <motion.div style={{ background: navBackground }}>
          <MainLayout
            isNavReady={isNavReady}                   
            navBackground={navBackground}
            activeSection=""
            scrollToSection={scrollToSection}
          >
            <IntroHomeSection />
            <VocabSection />
            <AboutSection />
            <PastorSection />
            <TalkSection />
            <InitiativesSection />
            <Footer />
          </MainLayout>
        </motion.div>
      )}
    </>
  );
}