import React from "react";
import type { MotionValue } from "framer-motion";
import NavigationBar from "../ui/navigation-bar";

interface NavigationBarProps {
  isNavReady: boolean;
  navBackground: string | MotionValue<string>;
  activeSection: string;
  scrollToSection: (id: string) => void;
  onOpenGatheringModal?: () => void;
}

interface MainLayoutProps {
  children: React.ReactNode;
  isNavReady: boolean;
  navBackground: string | MotionValue<string>;
  activeSection: string;
  scrollToSection: (id: string) => void;
  onOpenGatheringModal?: () => void;
}

export default function MainLayout({
  children,
  isNavReady,
  navBackground,
  activeSection,
  scrollToSection,
  onOpenGatheringModal,
}: MainLayoutProps) {
  const Nav = NavigationBar as React.ComponentType<NavigationBarProps>;

  return (
    <>
      <Nav
        isNavReady={isNavReady}
        navBackground={navBackground}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        onOpenGatheringModal={onOpenGatheringModal}
      />
      <main>{children}</main>
    </>
  );
}