"use client";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "../components/hooks/use-navigation";
import GatheringIntro from "../components/sections/gathering/GatheringIntro";
import MapSection from "../components/sections/gathering/MapSection";
import TimeSchedule from "../components/sections/gathering/TimeSchedule";
import GatheringLayout from "../components/layouts/gathering-layout";
import GatheringFooter from "../components/ui/footer/gathering-footer";

export default function Gathering() {
  const { activeSection, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]);

  return (
    <GatheringLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
      <GatheringIntro />
      <TimeSchedule />
      <MapSection /> 
      <GatheringFooter />
    </GatheringLayout>
  );
}