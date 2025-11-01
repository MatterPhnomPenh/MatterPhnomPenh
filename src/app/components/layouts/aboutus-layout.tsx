

import type React from "react";
import { MotionValue } from "framer-motion";
import NavigationBar from "../ui/navbar/aboutus-nav";

interface AboutusLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  navBackground: MotionValue<string>;
}

export default function AboutusLayout({
  children,
  activeSection,
}: AboutusLayoutProps) {
  return (
    <div className="relative">
      <NavigationBar
        activeSection={activeSection}
      />
      <main className="">{children}</main> 
    </div>
  );
}