

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

  // Only run on desktop with real mouse
  const isDesktop = typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;

  useEffect(() => {
    if (!isDesktop || !cursorRef.current) return;

    const cursor = cursorRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = e.target as HTMLElement;
      const isClickable =
        target.closest("a, button, input, textarea, select, [role='button'], .cursor-pointer") ||
        getComputedStyle(target).cursor === "pointer";

      setIsPointer(!!isClickable);
    };

    const render = () => {
      cursorX += (mouseX - cursorX) * 0.25;
      cursorY += (mouseY - cursorY) * 0.25;
      gsap.set(cursor, { x: cursorX, y: cursorY });
      requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove);
    render();

    // Hide default cursor globally on desktop
    document.documentElement.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.style.cursor = "";
    };
  }, [isDesktop]);

  // Don't render on mobile
  if (!isDesktop) return null;

  return (
    <>
      {/* Your beautiful "M" cursor — always on top */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999999] mix-blend-difference select-none"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div
          className={`transition-transform duration-300 origin-center ${
            isPointer ? "scale-150" : "scale-100"
          }`}
        >
          <span className="text-white text-xl font-black drop-shadow-2xl">M</span>
        </div>
      </div>

      {/* MAGIC CSS: Hide default cursor + allow custom cursor over iframe/video */}
      <style jsx global>{`
        @media (pointer: fine) {
          *, *::after, *::before {
            cursor: none !important;
          }

          /* Force hide cursor on videos, iframes, canvas */
          video, iframe, canvas {
            cursor: none !important;
          }

          /* This is the KEY: let mouse events pass through iframe so our JS can track mousemove */
          iframe {
            pointer-events: none !important;
          }

          /* Re-enable clicks/touch on iframe content (YouTube play button, etc.) */
          iframe {
            content: {
              pointer-events: auto !important;
            }
          }

          /* Chrome/Edge/Safari fix for iframe content */
          iframe {
            -ms-pointer-events: auto;
            -webkit-pointer-events: auto;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;