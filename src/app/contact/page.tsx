"use client";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "../components/hooks/use-navigation";
import MainLayout from "../components/layouts/main-layout";
import { useEffect, useState } from "react";
import IntroContactSection from "../components/sections/contact/intro-contact-section";
import GatheringModal from "../components/sections/GatheringModal";




export default function ContactPage() {
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

  useEffect(() => {
    document.documentElement.classList.add("light-theme");

    return () => {
      document.documentElement.classList.remove("light-theme");
    };
  }, []);
  return (
    <><MainLayout
      isNavReady={isNavReady}                    // REQUIRED prop
      navBackground={navBackground}              // MotionValue<string> → accepted directly
      activeSection={activeSection}
      scrollToSection={scrollToSection}
      onOpenGatheringModal={openGatheringModal}
    >      {/* <IntroContactSection />
      <ContactSection />
      <Footer /> */}
      <IntroContactSection />

    </MainLayout><GatheringModal
            isOpen={isGatheringModalOpen}
            onClose={closeGatheringModal} /></>
  );
}