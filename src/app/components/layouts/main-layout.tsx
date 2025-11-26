

// // // import type React from "react";
// // // import { MotionValue } from "framer-motion";
// // // import NavigationBar from "../ui/navigation-bar";




// // // interface MainLayoutProps {
// // //   children: React.ReactNode;
// // //   activeSection: string;
// // //   scrollToSection: (sectionId: string) => void;
// // //   navBackground: MotionValue<string>;
// // //   isNavReady: boolean;
// // // }

// // // export default function MainLayout({
// // //   children,
// // //   isNavReady,
// // //   // activeSection,
// // // }: MainLayoutProps) {
// // //   return (
// // //     <div className="relative">
// // //       <NavigationBar isNavReady={isNavReady} 
// // //       />
// // //       <main className="">{children}</main> 
// // //     </div>
// // //   );
// // // }


// // import React from "react";
// // import type { MotionValue } from "framer-motion";
// // import NavigationBar from "../ui/navigation-bar";

// // export default function MainLayout({
// //   children,
// //   isNavReady,
// // }: {
// //   navBackground: string | MotionValue<string>;
// //   children: React.ReactNode;
// //   activeSection: string;
// //   scrollToSection: (id: string) => void;
// //   isNavReady: boolean;
// // }) {
// //   return (
// //     <>
// //       <NavigationBar isNavReady={isNavReady} />
// //       {/* You can add other layout elements here like footer, etc. */}
// //       <main>{children}</main>
// //     </>
// //   );
// // }


// import React from "react";
// import type { MotionValue } from "framer-motion";
// import NavigationBar from "../ui/navigation-bar";

// export default function MainLayout({
//   children,
//   isNavReady,
//   navBackground,
//   activeSection,
//   scrollToSection,
// }: {
//   navBackground: string | MotionValue<string>;
//   children: React.ReactNode;
//   activeSection: string;
//   scrollToSection: (id: string) => void;
//   isNavReady: boolean;
// }) {
//   const Nav = NavigationBar as any;

//   return (
//     <>
//       <Nav 
//         isNavReady={isNavReady} 
//         navBackground={navBackground}
//         activeSection={activeSection}
//         scrollToSection={scrollToSection}
//       />
//       {/* You can add other layout elements here like footer, etc. */}
//       <main>{children}</main>
//     </>
//   );
// }


import React from "react";
import type { MotionValue } from "framer-motion";
import NavigationBar from "../ui/navigation-bar";

// Define the props that NavigationBar expects (or import them if exported)
interface NavigationBarProps {
  isNavReady: boolean;
  navBackground: string | MotionValue<string>;
  activeSection: string;
  scrollToSection: (id: string) => void;
}

interface MainLayoutProps {
  children: React.ReactNode;
  isNavReady: boolean;           // ← required!
  navBackground: string | MotionValue<string>;
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export default function MainLayout({
  children,
  isNavReady,
  navBackground,
  activeSection,
  scrollToSection,
}: MainLayoutProps) {
  const Nav = NavigationBar as React.ComponentType<NavigationBarProps>;

  return (
    <>
      <Nav
        isNavReady={isNavReady}
        navBackground={navBackground}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <main>{children}</main>
    </>
  );
}