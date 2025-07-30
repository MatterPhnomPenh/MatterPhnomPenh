


"use client";

import { useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import MainLayout from "./components/layouts/main-layout";
import Footer from "./components/ui/footer";
import { useNavigation } from "./components/hooks/use-navigation";
import RealEstate from "./components/sections/home/our-talk";
import Connect from "./components/sections/home/event";
import IntroHomeSection from "./components/sections/home/intro-home-section";
import MovingForward from "./components/sections/home/moving_forward";
import SparklesBackground from "./components/ui/sparkles-motion";
import VideoIntro from "./components/sections/VideoIntro-motion";

export default function HomePage() {
  const { activeSection, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]);

  const [showMainContent, setShowMainContent] = useState(false);
  const [shouldShowIntro, setShouldShowIntro] = useState(false);

  useEffect(() => {
    const hasPlayedIntro = sessionStorage.getItem("introPlayed");

    if (hasPlayedIntro === "true") {
      setShowMainContent(true); 
    } else {
      setShouldShowIntro(true); 
    }
  }, []);

  const handleVideoEnd = () => {
    sessionStorage.setItem("introPlayed", "true");
    setShowMainContent(true);
    setShouldShowIntro(false);
  };

  return (
    <>
      <AnimatePresence>
        {shouldShowIntro && <VideoIntro onEnd={handleVideoEnd} />}
      </AnimatePresence>

      {showMainContent && (
        <MainLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
          <IntroHomeSection />
          <SparklesBackground charColor="#2330ff" />
          <MovingForward />
          <RealEstate />
          <Connect />
          <Footer />
        </MainLayout>
      )}
    </>
  );
}
