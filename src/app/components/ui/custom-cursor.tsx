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

//     const CURSOR_SPEED = 0.25;
//     let mouseX = window.innerWidth / 2;
//     let mouseY = window.innerHeight / 2;
//     let cursorX = mouseX;
//     let cursorY = mouseY;

//     gsap.set(cursor, { 
//       x: cursorX, 
//       y: cursorY,
//     });

//     const onMouseMove = (e: MouseEvent) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;

//       // Update cursor state based on hover
//       const target = e.target as HTMLElement;
//       const isClickable = 
//         target.tagName === 'A' || 
//         target.tagName === 'BUTTON' ||
//         target.onclick !== null ||
//         target.classList.contains('cursor-pointer') ||
//         target.style.cursor === 'pointer' ||
//         target.closest('a') !== null ||
//         target.closest('button') !== null;

//       setIsPointer(isClickable);
//     };

//     const updateCursor = () => {
//       const dx = mouseX - cursorX;
//       const dy = mouseY - cursorY;
      
//       cursorX += dx * CURSOR_SPEED;
//       cursorY += dy * CURSOR_SPEED;
      
//       gsap.set(cursor, {
//         x: cursorX,
//         y: cursorY,
//       });
      
//       requestAnimationFrame(updateCursor);
//     };

//     updateCursor();
//     window.addEventListener("mousemove", onMouseMove, { passive: true });

//     return () => {
//       window.removeEventListener("mousemove", onMouseMove);
//     };
//   }, []);

//   return (
//     <>
//       <div 
//         ref={cursorRef} 
//         className="custom-cursor"
//         style={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           pointerEvents: 'none',
//           zIndex: 9999,
//           mixBlendMode: 'difference',
//         }}
//       >
//         <div className={`text-white text-xl font-bold ${isPointer ? 'font-black scale-110' : 'scale-100'} transition-all duration-150`}>
//           M
//         </div>
//       </div>

//       <style jsx global>{`
//         * { cursor: none !important; }
//         input, textarea, select { cursor: auto !important; }
//         .custom-cursor { will-change: transform; transform: translate(-50%, -50%); }
//       `}</style>
//     </>
//   );
// };

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

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
      const clickable = target.closest("a, button, [role='button'], .cursor-pointer") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsPointer(!!clickable);
    };

    const update = () => {
      cursorX += (mouseX - cursorX) * 0.3;
      cursorY += (mouseY - cursorY) * 0.3;
      gsap.set(cursor, { x: cursorX, y: cursorY });
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <>
      {/* Tiny clean cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div
          className={`transition-transform duration-200 ${isPointer ? "scale-150" : "scale-100"}`}
        >
          <span className="text-white font-black text-2xl drop-shadow-2xl select-none">
            M
          </span>
        </div>
      </div>

      {/* ONLY hide default cursor, no layout shift */}
      <style jsx global>{`
        html, body {
          cursor: none !important;
        }
        a, button, [role="button"], .cursor-pointer {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;