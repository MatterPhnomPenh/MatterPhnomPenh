

// "use client";

// import { useScroll, useTransform } from "framer-motion";
// import { useEffect, useState } from "react";
// import { useNavigation } from "./components/hooks/use-navigation";
// import IntroHomeSection from "./components/sections/home/intro-home-section";

// import MainLayout from "./components/layouts/main-layout";
// import AboutSection from "./components/sections/home/about-section";
// import VocabSection from "./components/sections/home/vocab-section";
// import PastorSection from "./components/sections/home/pastor";
// import TalkSection from "./components/sections/home/talk-section";
// import InitiativesSection from "./components/sections/home/initiatives-section";

// export default function HomePage() {
//   const { activeSection, scrollToSection } = useNavigation();
//   const { scrollY } = useScroll();
//   const navBackground = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]);

//   const [showMainContent, setShowMainContent] = useState(false);
//   const [shouldShowIntro, setShouldShowIntro] = useState(false);


//   useEffect(() => {
//     document.documentElement.classList.add("light-theme");

//     return () => {
//       document.documentElement.classList.remove("light-theme");
//     };
//   }, []);

//   useEffect(() => {
//     const hasPlayedIntro = sessionStorage.getItem("introPlayed");

//     if (hasPlayedIntro === "true") {
//       setShowMainContent(true); 
//     } else {
//       setShouldShowIntro(true); 
//     }
//   }, []);

//   const handleVideoEnd = () => {
//     sessionStorage.setItem("introPlayed", "true");
//     setShowMainContent(true);
//     setShouldShowIntro(false);
//   };

//   return (
//         <MainLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
//           <IntroHomeSection />
//           <VocabSection />
//           <AboutSection />
//           <PastorSection />
//           <TalkSection />
//           <InitiativesSection />
//         </MainLayout>
//   );
// }




"use client";

import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "./components/hooks/use-navigation";
import IntroHomeSection from "./components/sections/home/intro-home-section";

import MainLayout from "./components/layouts/main-layout";
import AboutSection from "./components/sections/home/about-section";
import VocabSection from "./components/sections/home/vocab-section";
import PastorSection from "./components/sections/home/pastor";
import TalkSection from "./components/sections/home/talk-section";
import InitiativesSection from "./components/sections/home/initiatives-section";

export default function HomePage() {
  const { activeSection, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]);

  return (
        <MainLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
          <IntroHomeSection />
          <VocabSection />
          <AboutSection />
          <PastorSection />
          <TalkSection />
          <InitiativesSection />
        </MainLayout>
  );
}








