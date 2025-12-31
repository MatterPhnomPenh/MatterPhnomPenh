"use client";

import { useEffect, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "../components/hooks/use-navigation";
import MainLayout from "../components/layouts/main-layout";
import GatheringModal from "../components/sections/GatheringModal";
import HeroPage from "../components/sections/about/hero-video";
import { FoundationSection } from "../components/sections/initiatives/FoundationSection";
import { CanvasSection } from "../components/sections/initiatives/Canvas";
import { CampSection } from "../components/sections/initiatives/Camp";
import { BibleStudySection } from "../components/sections/initiatives/BibleStudySection";
import { HangsSection } from "../components/sections/initiatives/Hangs";


export default function EventsPage() {
  const { activeSection, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgb(255, 255, 255)", "rgba(255, 251, 251, 0.9)"]);
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
      isNavReady={isNavReady}                    // REQUIRED prop
      navBackground={navBackground}              // MotionValue<string> → accepted directly
      activeSection={activeSection}
      scrollToSection={scrollToSection}
      onOpenGatheringModal={openGatheringModal}
    >   
      <HeroPage
        backgroundvideoSrc="/videos/initiatives-background.mp4"
        videoSrc="/videos/initiatives-display.mp4"  
        title="MATTER Foundation"
        description="Serving with love, building with people, and believing in dreams beyond limits." /> 
        <FoundationSection />
        <CampSection />
        <CanvasSection />
        <HangsSection />
        <BibleStudySection />
    </MainLayout><GatheringModal
        isOpen={isGatheringModalOpen}
        onClose={closeGatheringModal} /></>
  );
}


