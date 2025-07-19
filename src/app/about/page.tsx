"use client";
import { useScroll, useTransform } from "framer-motion";
import MainLayout from "../components/layouts/main-layout";
import { useNavigation } from "../components/hooks/use-navigation";
import Footer from "../components/ui/footer";
import TitleSlideShow from "../components/sections/about/title-slideshow";
import IntroAboutSection from "../components/sections/about/intro-about-section";
import WishMessageSection from "../components/sections/about/WishMessageSection";
import AboutUsSection from "../components/sections/about/about-us-section";
import VideoSection from "../components/sections/video-section";


export default function AboutPage() {
  const { activeSection, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]);

  return (
    <MainLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
      <IntroAboutSection />
      <VideoSection
        videoSrc="/videos/About-MTD.mov"
        thumbnailSrc={"/origins-thumbnail.png"}
        id=""
        showControls={true}
        autoPlay={false}
        muted={false}
        loop={false}
      />   
      <AboutUsSection />
      <WishMessageSection />
      <TitleSlideShow />
      <Footer />
    </MainLayout>
  );
}

