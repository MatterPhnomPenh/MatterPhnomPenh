"use client";
import { useScroll, useTransform } from "framer-motion";
import { useNavigation } from "../components/hooks/use-navigation";
import Footer from "../components/ui/footer";
import MainLayout from "../components/layouts/main-layout";
import ContactSection from "../components/sections/contact/details-home-section";
import IntroContactSection from "../components/sections/contact/intro-contact-section";




export default function ContactPage() {
  const { activeSection, scrollToSection } = useNavigation();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgb(255, 255, 255)", "rgba(255, 251, 251, 0.9)"]);

  return (
    <MainLayout navBackground={navBackground} activeSection={activeSection} scrollToSection={scrollToSection}>
      <IntroContactSection />
      <ContactSection />
      {/* <Footer /> */}
      <Footer />
    </MainLayout>
  );
}