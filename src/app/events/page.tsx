"use client";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "../components/hooks/use-navigation";
import Footer from "../components/ui/footer";
import MainLayout from "../components/layouts/main-layout";
import IntroEventsSection from "../components/sections/events/intro-events-section";
import ConnectSection from "../components/sections/events/sec-intro";
import MatterFoundation from "../components/sections/events/matter-foundation-section";
import MatterFest from "../components/sections/events/matter-fest-section";
import MatterCampSection from "../components/sections/events/matter-camp-section";
import MatterNightSection from "../components/sections/events/matter-night";

export default function EventsPage() {
  const { activeSection, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgb(255, 255, 255)", "rgba(255, 251, 251, 0.9)"]);

  return (
    <MainLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
      <IntroEventsSection />
      {/* <MatterSection /> */}
      <ConnectSection />
      <MatterFoundation />
      <MatterFest />
      <MatterCampSection />
      <MatterNightSection />
      <Footer />
    </MainLayout>
  );
}