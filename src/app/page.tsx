


// // "use client";

// // import { useEffect, useState } from "react";
// // import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
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


// // export default function Page() {
// //   const {scrollToSection } = useNavigation();
// //   const { scrollY } = useScroll();
// //   const navBackground = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0)", "rgba(255,255,255,0.95)"]);

// //   const [showIntro, setShowIntro] = useState(true);
// //   const [isNavReady, setIsNavReady] = useState(false);

// //   const handleIntroEnd = () => {
// //     setShowIntro(false);
// //     setTimeout(() => setIsNavReady(true), 400);
// //   };

// //   useEffect(() => {
// //     document.documentElement.classList.add("light-theme");
// //     return () => document.documentElement.classList.remove("light-theme");
// //   }, []);

// //   return (
// //     <>
// //       <AnimatePresence mode="wait">
// //         {showIntro && <VideoIntro key="intro" onEnd={handleIntroEnd} />}
// //       </AnimatePresence>

// //       {!showIntro && (
// //         <motion.div style={{ background: navBackground }}>
// //           <MainLayout
// //             isNavReady={isNavReady}                   
// //             navBackground={navBackground}
// //             activeSection=""
// //             scrollToSection={scrollToSection}
// //           >
// //             <IntroHomeSection />
// //             <VocabSection />
// //             <AboutSection />
// //             <PastorSection />
// //             <TalkSection />
// //             <InitiativesSection />
// //             <Footer />
// //           </MainLayout>
// //         </motion.div>
// //       )}
// //     </>
// //   );
// // }




// "use client";

// import { useEffect, useState } from "react";
// import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
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
// import GatheringModal from "./components/sections/GatheringModal";


// export default function Page() {
//   const {scrollToSection } = useNavigation();
//   const { scrollY } = useScroll();
//   const navBackground = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0)", "rgba(255,255,255,0.95)"]);

//   const [showIntro, setShowIntro] = useState(true);
//   const [isNavReady, setIsNavReady] = useState(false);

//   const handleIntroEnd = () => {
//     setShowIntro(false);
//     setTimeout(() => setIsNavReady(true), 400);
//   };
//   const [isGatheringModalOpen, setIsGatheringModalOpen] = useState(false);
//   const openGatheringModal = () => setIsGatheringModalOpen(true);
//   const closeGatheringModal = () => setIsGatheringModalOpen(false);

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
//         <motion.div style={{ background: navBackground }}>
//           <MainLayout
//             isNavReady={isNavReady}                   
//             navBackground={navBackground}
//             activeSection=""
//             scrollToSection={scrollToSection}
//             onOpenGatheringModal={openGatheringModal}
//           >
//             <IntroHomeSection />
//             <VocabSection />
//             <AboutSection />
//             <PastorSection />
//             <TalkSection />
//             <InitiativesSection />
//             <Footer />
//           </MainLayout>
//           <GatheringModal
//             isOpen={isGatheringModalOpen}
//             onClose={closeGatheringModal}
//           />
//         </motion.div>
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
import GatheringModal from "./components/sections/GatheringModal";

export default function Page() {
  const { scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0)", "rgba(255,255,255,0.95)"]);

  const [showIntro, setShowIntro] = useState(true);
  const [isNavReady, setIsNavReady] = useState(false);

  const handleIntroEnd = () => {
    setShowIntro(false);
    setTimeout(() => setIsNavReady(true), 400);
  };

  const [isGatheringModalOpen, setIsGatheringModalOpen] = useState(false);
  const openGatheringModal = () => setIsGatheringModalOpen(true);
  const closeGatheringModal = () => setIsGatheringModalOpen(false);

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
            onOpenGatheringModal={openGatheringModal}
          >
            <IntroHomeSection />
            <VocabSection />
            <AboutSection />
            <PastorSection />
            <TalkSection />
            <InitiativesSection />
            <Footer />
          </MainLayout>
          <GatheringModal
            isOpen={isGatheringModalOpen}
            onClose={closeGatheringModal}
          />
        </motion.div>
      )}
    </>
  );
}