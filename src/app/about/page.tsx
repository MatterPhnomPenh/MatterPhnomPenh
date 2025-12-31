

"use client";

import { useEffect, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "../components/hooks/use-navigation";

import MainLayout from "../components/layouts/main-layout";
import { IntroductionSection } from "../components/sections/about/introduction";
import OurNameSection from "../components/sections/about/OurName";
import { SloganSection } from "../components/sections/about/slogan-section";
import { VisionMissionSection } from "../components/sections/about/vision-mission-section";
import { CoreValuesSection } from "../components/sections/about/core-values-section";
import FoundersSection from "../components/sections/about/our-pastor-section";
import TheDreamSection from "../components/sections/about/TheDreamSection";
import GatheringModal from "../components/sections/GatheringModal";
import HeroPage from "../components/sections/about/hero-video";

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
  const [isGatheringModalOpen, setIsGatheringModalOpen] = useState(false);
  const openGatheringModal = () => setIsGatheringModalOpen(true);
  const closeGatheringModal = () => setIsGatheringModalOpen(false);

  // Trigger nav animation after a tiny delay when page mounts
  useEffect(() => {
    const timer = setTimeout(() => setIsNavReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <><MainLayout
      isNavReady={isNavReady}
      navBackground={navBackground}
      activeSection={activeSection}
      scrollToSection={scrollToSection}
      onOpenGatheringModal={openGatheringModal}
    >
      <HeroPage
        backgroundvideoSrc="/videos/About-MTD1.mp4"
        videoSrc="/videos/About-MTD1.mp4"
        description="Join us in faith and community."
        title="MATTER Phnom Penh" />
      <IntroductionSection />
      <OurNameSection />
      <SloganSection />
      <VisionMissionSection />
      <CoreValuesSection />
      <FoundersSection />
      <TheDreamSection />
    </MainLayout><GatheringModal
        isOpen={isGatheringModalOpen}
        onClose={closeGatheringModal} /></>
  );
}