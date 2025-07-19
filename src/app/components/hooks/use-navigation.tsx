

"use client";
import { useState, useEffect, useRef } from "react";

export function useNavigation() {
  const sectionRefs = useRef<HTMLElement[]>([]);
  const [activeSection, setActiveSection] = useState("hero");

  const addToSectionRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = sectionRefs.current.find((el) => el.id === sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return { activeSection, addToSectionRefs, scrollToSection };
}

