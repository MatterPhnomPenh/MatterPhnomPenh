

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function SloganSection() {
  // Reusable cloud component with horizontal movement
  const Cloud = ({
    size = 300,
    top,
    duration = 30,
    rotateDuration = 300,
    delay = 0,
    direction = "right", // "left" or "right"
  }: {
    size?: number;
    top: string;
    duration?: number;
    rotateDuration?: number;
    delay?: number;
    direction?: "left" | "right";
  }) => {
    const startX = direction === "right" ? `-${size}px` : `calc(100vw + ${size}px)`;
    const endX = direction === "right" ? `calc(100vw + ${size}px)` : `-${size}px`;

    return (
      <motion.div
        className="absolute pointer-events-none"
        style={{ top }}
        initial={{ 
          x: startX,
          opacity: 0 
        }}
        animate={{ 
          x: endX,
          opacity: [0, 0.8, 0.8, 0]
        }}
        transition={{
          x: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: delay,
            delay: delay
          },
          opacity: {
            duration: duration,
            times: [0, 0.1, 0.9, 1],
            ease: "linear",
            repeat: Infinity,
            repeatDelay: delay,
            delay: delay
          }
        }}
      >
        <motion.div
          transition={{
            rotate: {
              duration: rotateDuration,
              ease: "linear",
              repeat: Infinity,
            },
            y: {
              duration: rotateDuration * 0.6,
              ease: "easeInOut",
              repeat: Infinity,
            },
          }}
        >
          <Image
            src="/images/cloud.jpg"
            alt="floating cloud"
            width={size}
            height={size * 0.6}
            className="brightness-50 contrast-100 drop-shadow-lg"
            priority={false}
            quality={75}
          />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="py-32 md:py-48 lg:py-56 bg-black relative overflow-hidden">
      {/* 10 Clouds at different positions - Left to Right */}
      <Cloud 
        top="8%" 
        size={200} 
        duration={45} 
        rotateDuration={400} 
        delay={0} 
        direction="right"
      />
      <Cloud 
        top="18%" 
        size={150} 
        duration={60} 
        rotateDuration={500}  
        delay={10} 
        direction="right"
      />
      <Cloud 
        top="32%" 
        size={280} 
        duration={35} 
        rotateDuration={280} 
        delay={5} 
        direction="right"
      />
      {/* <Cloud 
        top="48%" 
        size={180} 
        duration={50} 
        rotateDuration={350}  
        delay={15} 
        direction="right"
      />
      <Cloud 
        top="72%" 
        size={220} 
        duration={40} 
        rotateDuration={300} 
        delay={8} 
        direction="right"
      /> */}

      {/* 10 Clouds at different positions - Right to Left */}
      <Cloud 
        top="12%" 
        size={170} 
        duration={55} 
        rotateDuration={450}  
        delay={3} 
        direction="left"
      />
      <Cloud 
        top="25%" 
        size={240} 
        duration={38} 
        rotateDuration={320} 
        delay={12} 
        direction="left"
      />
      <Cloud 
        top="42%" 
        size={190} 
        duration={48} 
        rotateDuration={380}  
        delay={7} 
        direction="left"
      />
      {/* <Cloud 
        top="58%" 
        size={260} 
        duration={32} 
        rotateDuration={280} 
        delay={18} 
        direction="left"
      /> */}
      <Cloud 
        top="82%" 
        size={140} 
        duration={65} 
        rotateDuration={550}  
        delay={22} 
        direction="left"
      />

      {/* Additional slower moving clouds for depth */}
      <Cloud 
        top="5%" 
        size={120} 
        duration={80} 
        rotateDuration={600} 
        delay={25} 
        direction="right"
      />
      <Cloud 
        top="38%" 
        size={100} 
        duration={90} 
        rotateDuration={700}  
        delay={30} 
        direction="left"
      />
      {/* <Cloud 
        top="65%" 
        size={160} 
        duration={70} 
        rotateDuration={480} 
        delay={35} 
        direction="right"
      />
      <Cloud 
        top="88%" 
        size={130} 
        duration={85} 
        rotateDuration={650}  
        delay={40} 
        direction="left"
      /> */}

      {/* Your content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-primary-foreground/60 uppercase tracking-[0.25em] text-xs sm:text-sm font-medium block"
          style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
        >
          Slogan / Tagline
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
          className="font-black text-7xl sm:text-8xl md:text-9xl leading-[0.85] tracking-tighter text-primary-foreground mt-8 drop-shadow-3xl"
          style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
        >
          You Matter Here.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-primary-foreground/80 text-xl sm:text-2xl md:text-4xl mt-8 font-normal"
          style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
        >
          It wouldn&apos;t be the same without you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-4xl mx-auto mt-20"
          style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
        >
          <p className="text-primary-foreground/70 text-lg md:text-2xl leading-relaxed text-center">
            God created every one of us with purpose and intention.<br />
            We weren&apos;t an afterthought — we were part of the plan.<br /><br />
            <span className="block text-primary-foreground text-3xl md:text-5xl font-bold mt-8">
              Created by the Creator, to create.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

