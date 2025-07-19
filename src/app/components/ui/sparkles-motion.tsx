// "use client";

// import { useEffect, useRef } from "react";

// interface SparklesBackgroundProps {
//   charColor?: string; // customizable character color
// }

// export default function SparklesBackground({ charColor = "#000000" }: SparklesBackgroundProps) {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const safeCanvas = canvas;
//     const safeCtx = ctx;

//     const resize = () => {
//       safeCanvas.width = window.innerWidth;
//       safeCanvas.height = window.innerHeight;
//     };

//     resize();

//     // Check if it's mobile (screen width <= 768px)
//     const isMobile = window.innerWidth <= 768;
//     const PARTICLE_COUNT = isMobile ? 40 : 120;

//     class Particle {
//       x: number;
//       y: number;
//       size: number;
//       speedX: number;
//       speedY: number;

//       constructor() {
//         this.x = Math.random() * safeCanvas.width;
//         this.y = Math.random() * safeCanvas.height;
//         this.size = Math.random() * (1.6 - 0.8) + 0.8;
//         this.speedX = Math.random() * 0.5 - 0.25;
//         this.speedY = Math.random() * 0.5 - 0.25;
//       }

//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;

//         if (this.x > safeCanvas.width) this.x = 0;
//         if (this.x < 0) this.x = safeCanvas.width;
//         if (this.y > safeCanvas.height) this.y = 0;
//         if (this.y < 0) this.y = safeCanvas.height;
//       }

//       draw() {
//         safeCtx.fillStyle = charColor;
//         safeCtx.beginPath();
//         safeCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         safeCtx.fill();
//       }
//     }

//     let particles: Particle[] = [];
//     for (let i = 0; i < PARTICLE_COUNT; i++) {
//       particles.push(new Particle());
//     }

//     const animate = () => {
//       safeCtx.clearRect(0, 0, safeCanvas.width, safeCanvas.height);

//       particles.forEach((p) => {
//         p.update();
//         p.draw();
//       });

//       requestAnimationFrame(animate);
//     };

//     animate();
//     window.addEventListener("resize", resize);

//     return () => {
//       window.removeEventListener("resize", resize);
//     };
//   }, [charColor]);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
//       style={{ backgroundColor: "#171717" }}
//     />
//   );
// }


"use client";

import { useEffect, useRef } from "react";

interface SparklesBackgroundProps {
  charColor?: string;
}

export default function SparklesBackground({ charColor = "#ffffff" }: SparklesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const isMouseDown = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const safeCanvas = canvas;
    const safeCtx = ctx;

    const resize = () => {
      safeCanvas.width = window.innerWidth;
      safeCanvas.height = window.innerHeight;
    };

    resize();

    const isMobile = window.innerWidth <= 768;
    const PARTICLE_COUNT = isMobile ? 40 : 120;

    class Particle {
      x: number;
      y: number;
      size: number;
      baseSpeedX: number;
      baseSpeedY: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * safeCanvas.width;
        this.y = Math.random() * safeCanvas.height;
        this.size = Math.random() * (1.6 - 0.8) + 0.8;
        this.baseSpeedX = Math.random() * 0.5 - 0.25;
        this.baseSpeedY = Math.random() * 0.5 - 0.25;
        this.speedX = this.baseSpeedX;
        this.speedY = this.baseSpeedY;
      }

      update() {
        if (isMouseDown.current) {
          const dx = mouse.current.x - this.x;
          const dy = mouse.current.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const force = Math.min(10 / dist, 0.3); // stronger pull

          this.speedX = this.baseSpeedX + dx * force * 0.05;
          this.speedY = this.baseSpeedY + dy * force * 0.05;
        } else {
          this.speedX += (this.baseSpeedX - this.speedX) * 0.05;
          this.speedY += (this.baseSpeedY - this.speedY) * 0.05;
        }

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > safeCanvas.width) this.x = 0;
        if (this.x < 0) this.x = safeCanvas.width;
        if (this.y > safeCanvas.height) this.y = 0;
        if (this.y < 0) this.y = safeCanvas.height;
      }

      draw() {
        safeCtx.fillStyle = charColor;
        safeCtx.beginPath();
        safeCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        safeCtx.fill();
      }
    }

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => new Particle());

    const animate = () => {
      safeCtx.clearRect(0, 0, safeCanvas.width, safeCanvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseDown = () => {
      isMouseDown.current = true;
    };

    const handleMouseUp = () => {
      isMouseDown.current = false;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [charColor]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
      style={{ backgroundColor: "#ffffff" }}
    />
  );
}
