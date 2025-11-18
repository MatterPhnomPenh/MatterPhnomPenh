

"use client";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "../components/hooks/use-navigation";

// import dynamic from 'next/dynamic';

import UnderConstructionPage from "../components/sections/under-construction-page";
import MainLayout from "../components/layouts/main-layout";

// Dynamically import Stories to disable SSR and avoid window errors during prerender
// const Stories = dynamic(
//   () => import("../components/sections/about/story"),
//   { ssr: false }
// );

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
    <MainLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
      {/* <HeroPage
      videoSrc="/videos/About-MTD1.mp4"
      description="Join us in faith and community."
      title="You Matter Here"
      />
      <IntroAboutSection />
      <PassTypeCard />
      <Stories />
      <Pastor />
      <AboutFooter /> */}
      <UnderConstructionPage />
    </MainLayout>
  );
}

