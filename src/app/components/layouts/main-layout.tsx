

import type React from "react";
import { MotionValue } from "framer-motion";
import NavigationBar from "../ui/navigation-bar";

interface MainLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  navBackground: MotionValue<string>;
}

export default function MainLayout({
  children,
  activeSection,
}: MainLayoutProps) {
  return (
    <div className="relative">
      <NavigationBar
        activeSection={activeSection}
      />
      <main className="">{children}</main> {/* Ensure padding matches navbar height */}
    </div>
  );
}