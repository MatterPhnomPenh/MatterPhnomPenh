// "use client";
// import { useScroll, useTransform } from "framer-motion";
// import { useNavigation } from "../components/hooks/use-navigation";

// import IntroAboutSection from "../components/sections/about/intro-about-section";
// import Stories from "../components/sections/about/story";

// import VideoSection from "../components/sections/about/video-section";
// import AboutusLayout from "../components/layouts/aboutus-layout";
// import { OurStories } from "../components/sections/about/ourstories";
// import Pastor from "../components/sections/about/pastor";
// import AboutFooter from "../components/ui/footer/about-footer";

// export default function AboutPage() {
//   const { activeSection, scrollToSection } = useNavigation();
//   const { scrollY } = useScroll();
//   const navBackground = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]);

//   return (
//     <AboutusLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
//       <VideoSection
//         videoSrc="/videos/About-MTD1.mp4"
//         thumbnailSrc={"/origins-thumbnail.png"}
//         id="video-about"
//         showControls={true}
//         autoPlay={false}
//         muted={false}
//         loop={false}
//       />   
//       <IntroAboutSection />
//       <OurStories />
//       <Stories />
//       <Pastor />
//       {/* <AboutUsSection />
//       <WishMessageSection />
//       <TitleSlideShow /> */}
//       <AboutFooter />
//     </AboutusLayout>
//   );
// }


"use client";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "../components/hooks/use-navigation";

import IntroAboutSection from "../components/sections/about/intro-about-section";
import dynamic from 'next/dynamic';

import VideoSection from "../components/sections/about/video-section";
import AboutusLayout from "../components/layouts/aboutus-layout";
import { OurStories } from "../components/sections/about/ourstories";
import Pastor from "../components/sections/about/pastor";
import AboutFooter from "../components/ui/footer/about-footer";

// Dynamically import Stories to disable SSR and avoid window errors during prerender
const Stories = dynamic(
  () => import("../components/sections/about/story"),
  { ssr: false }
);

// If OurStories also causes issues (e.g., similar Framer Motion hooks), dynamic it too:
// const OurStories = dynamic(
//   () => import("../components/sections/about/ourstories").then(mod => ({ default: mod.OurStories })),
//   { ssr: false }
// );

export default function AboutPage() {
  const { activeSection, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]);

  return (
    <AboutusLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
      <VideoSection
        videoSrc="/videos/About-MTD1.mp4"
        thumbnailSrc={"/origins-thumbnail.png"}
        id="video-about"
        showControls={true}
        autoPlay={false}
        muted={false}
        loop={false}
      />   
      <IntroAboutSection />
      <OurStories />
      <Stories />
      <Pastor />
      {/* <AboutUsSection />
      <WishMessageSection />
      <TitleSlideShow /> */}
      <AboutFooter />
    </AboutusLayout>
  );
}
