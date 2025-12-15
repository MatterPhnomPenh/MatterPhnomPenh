

// "use client";
// import { useScroll, useTransform } from "framer-motion";
// import { useNavigation } from "../components/hooks/use-navigation";

// // import dynamic from 'next/dynamic';

// import UnderConstructionPage from "../components/sections/under-construction-page";
// import MainLayout from "../components/layouts/main-layout";

// // Dynamically import Stories to disable SSR and avoid window errors during prerender
// // const Stories = dynamic(
// //   () => import("../components/sections/about/story"),
// //   { ssr: false }
// // );

// // If OurStories also causes issues (e.g., similar Framer Motion hooks), dynamic it too:
// // const OurStories = dynamic(
// //   () => import("../components/sections/about/ourstories").then(mod => ({ default: mod.OurStories })),
// //   { ssr: false }
// // );

// export default function AboutPage() {
//   const { activeSection, scrollToSection } = useNavigation();
//   const { scrollY } = useScroll();
//   const navBackground = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]);

//   return (
//     <MainLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
//       {/* <HeroPage
//       videoSrc="/videos/About-MTD1.mp4"
//       description="Join us in faith and community."
//       title="You Matter Here"
//       />
//       <IntroAboutSection />
//       <PassTypeCard />
//       <Stories />
//       <Pastor />
//       <AboutFooter /> */}
//       <UnderConstructionPage />
//     </MainLayout>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "../components/hooks/use-navigation";

import MainLayout from "../components/layouts/main-layout";
import HeroPage from "../components/sections/about/notused/hero-video";
import { IntroductionSection } from "../components/sections/about/introduction";
import OurNameSection from "../components/sections/about/OurName";
import { SloganSection } from "../components/sections/about/slogan-section";
import { VisionMissionSection } from "../components/sections/about/vision-mission-section";
import { CoreValuesSection } from "../components/sections/about/core-values-section";

export default function AboutPage() {
  const { activeSection, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]
  );

  // Add the missing state for nav animation (same pattern as your homepage)
  const [isNavReady, setIsNavReady] = useState(false);

  // Trigger nav animation after a tiny delay when page mounts
  useEffect(() => {
    const timer = setTimeout(() => setIsNavReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MainLayout
      isNavReady={isNavReady}                    
      navBackground={navBackground}              
      activeSection={activeSection}
      scrollToSection={scrollToSection}
    >
      {/* <UnderConstructionPage /> */}
      <HeroPage
      videoSrc="/videos/About-MTD1.mp4"
      description="Join us in faith and community."
      title="MATTER Phnom Penh"
      />
      <IntroductionSection />
      <OurNameSection />
      <SloganSection />
      <VisionMissionSection />
      <CoreValuesSection />
    </MainLayout>
  );
}