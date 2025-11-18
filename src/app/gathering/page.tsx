"use client";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "../components/hooks/use-navigation";

import UnderConstructionPage from "../components/sections/under-construction-page";
import MainLayout from "../components/layouts/main-layout";

export default function Gathering() {
  const { activeSection, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]);

  return (
    <MainLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
      {/* <GatheringIntro />
      <TimeSchedule />
      <MapSection /> 
      <GatheringFooter /> */}
      <UnderConstructionPage />
    </MainLayout>
  );
}