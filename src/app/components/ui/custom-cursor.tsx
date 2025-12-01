

// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// const CustomCursor = () => {
//   const cursorRef = useRef<HTMLDivElement>(null);
//   const [isPointer, setIsPointer] = useState(false);

//   useEffect(() => {
//     if (window.matchMedia("(pointer: coarse)").matches) return;

//     const cursor = cursorRef.current;
//     if (!cursor) return;

//     let mouseX = window.innerWidth / 2;
//     let mouseY = window.innerHeight / 2;
//     let cursorX = mouseX;
//     let cursorY = mouseY;

//     const onMouseMove = (e: MouseEvent) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;

//       const target = e.target as HTMLElement;
//       const clickable = target.closest("a, button, [role='button'], .cursor-pointer") ||
//         window.getComputedStyle(target).cursor === "pointer";

//       setIsPointer(!!clickable);
//     };

//     const update = () => {
//       cursorX += (mouseX - cursorX) * 0.3;
//       cursorY += (mouseY - cursorY) * 0.3;
//       gsap.set(cursor, { x: cursorX, y: cursorY });
//       requestAnimationFrame(update);
//     };

//     update();
//     window.addEventListener("mousemove", onMouseMove, { passive: true });

//     return () => window.removeEventListener("mousemove", onMouseMove);
//   }, []);

//   return (
//     <>
//       {/* Tiny clean cursor */}
//       <div
//         ref={cursorRef}
//         className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
//         style={{ transform: "translate(-50%, -50%)" }}
//       >
//         <div
//           className={`transition-transform duration-200 ${isPointer ? "scale-150" : "scale-100"}`}
//         >
//           <span className="text-white font-black text-2xl drop-shadow-2xl select-none">
//             M
//           </span>
//         </div>
//       </div>

//       {/* ONLY hide default cursor, no layout shift */}
//       <style jsx global>{`
//         html, body {
//           cursor: none !important;
//         }
//         a, button, [role="button"], .cursor-pointer {
//           cursor: none !important;
//         }
//       `}</style>
//     </>
//   );
// };

// export default CustomCursor;


"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Detect if device has a fine pointer (mouse/trackpad), not touch
    const mediaQuery = window.matchMedia("(pointer: fine)");
    
    const checkPointer = () => setIsDesktop(mediaQuery.matches);
    checkPointer(); // Initial check
    mediaQuery.addEventListener("change", checkPointer);

    if (!mediaQuery.matches) {
      // Early return for mobile/touch devices
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = e.target as HTMLElement;
      const clickable =
        target.closest("a, button, [role='button'], .cursor-pointer") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsPointer(!!clickable);
    };

    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.3;
      cursorY += (mouseY - cursorY) * 0.3;

      gsap.set(cursor, {
        x: cursorX,
        y: cursorY,
      });

      requestAnimationFrame(updateCursor);
    };

    // Hide default cursor + start animation
    document.documentElement.style.cursor = "none";

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    updateCursor();

    return () => {
      // Cleanup
      mediaQuery.removeEventListener("change", checkPointer);
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.style.cursor = ""; // Restore default cursor
    };
  }, []);

  // Don't render anything on mobile
  if (!isDesktop) return null;

  return (
    <>
      {/* Custom "M" cursor follower */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference select-none"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div
          className={`transition-transform duration-200 ${
            isPointer ? "scale-150" : "scale-100"
          }`}
        >
          <span className="text-white font-black text-2xl drop-shadow-2xl">
            M
          </span>
        </div>
      </div>
    </>
  );
};

export default CustomCursor;