

"use client";

import { useEffect, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "../components/hooks/use-navigation";

import MainLayout from "../components/layouts/main-layout";
import GatheringModal from "../components/sections/GatheringModal";
import BlogIntroSection from "../components/sections/talk/intro-talk-section";
// import SocialMediaSection from "../components/sections/talk/details-talk-section";

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
      <BlogIntroSection />
      {/* <SocialMediaSection /> */}
    </MainLayout><GatheringModal
        isOpen={isGatheringModalOpen}
        onClose={closeGatheringModal} /></>
  );
}