"use client";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "../components/hooks/use-navigation";
import UnderConstructionPage from "../components/sections/under-construction-page";
import MainLayout from "../components/layouts/main-layout";


export default function EventsPage() {
  const { activeSection, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgb(255, 255, 255)", "rgba(255, 251, 251, 0.9)"]);

  return (
    <MainLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
      {/* <IntroEventsSection />
      <MatterFoundation />
      <MatterFest />
      <MatterCampSection />
      <MatterNightSection />
      <InitiativesFooter /> */}
      <UnderConstructionPage />
    </MainLayout>
  );
}