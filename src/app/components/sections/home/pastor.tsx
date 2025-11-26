
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
  </svg>
);

export default function PastorSection() {
  return (
    <section id="pastor" className="py-32 md:py-48 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-32">
        {/* Grid with equal height columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Title + Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col justify-between min-h-full"
          >
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-500 mb-12 lg:mb-16">
              Our Pastor
            </h2>

            {/* Pastor Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative w-full max-w-md aspect-[4/5] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/ORS_Sam_v60.jpg"
                alt="Our Pastor"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Now stretches to match left exactly */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col justify-between h-full lg:py-8"
          >
            {/* Main Description */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 pt-32 text-lg md:text-xl font-light leading-relaxed tracking-wide text-white/90"
            >
              <p>
                We are a community of faith based in Phnom Penh, Cambodia. We
                started off with our first Gathering in March 2024, and it has
                now been more than a year in this journey. In July 2025,
              </p>
              <p>
                MATTER Phnom Penh is now officially a part of{" "}
                <span className="font-medium text-white">Collective Global</span>
                : a collective of churches where we share ideas, challenge each
                other and grow together. It also becomes a platform where we can
                play our part in what God is doing as a bigger picture.
              </p>
            </motion.div>

            {/* Social Icons + Button - Pushed to bottom */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center gap-8 pt-12 lg:pt-0"
            >
              <div className="flex items-center gap-6">
                <motion.a
                  href="https://facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 border-2 border-white rounded-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="https://instagram.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 border-2 border-white rounded-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="https://tiktok.com/@yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 border-2 border-white rounded-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  <TiktokIcon />
                </motion.a>
              </div>

              {/* View Our Team Button */}
              <motion.div whileHover="hover" initial="rest" className="relative">
                <Link
                  href="/team"
                  className="relative inline-flex items-center gap-3 border-2 border-white rounded-md px-8 py-3.5 text-sm font-bold tracking-widest uppercase overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    variants={{ rest: { x: "-100%" }, hover: { x: "0%" } }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="relative z-10 flex items-center gap-2"
                    variants={{ rest: { color: "#ffffff" }, hover: { color: "#000000" } }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    View Our Team
                    <motion.span
                      variants={{ rest: { x: 0 }, hover: { x: 4 } }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}




// "use client"
// import type React from "react"
// import { motion, useInView } from "framer-motion"
// import Link from "next/link"
// import { Facebook, Instagram } from "lucide-react"
// import { Suspense, useRef, useState, useEffect, useMemo } from "react"
// import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber"
// import { OrbitControls, Center, Preload, PerformanceMonitor } from "@react-three/drei"
// import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js"
// import * as THREE from "three"

// // TikTok Icon (unchanged)
// const TiktokIcon = () => (
//   <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
//     <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
//   </svg>
// )

// function STLModel({ url, isHovered = false, isVisible = true }: { url: string; isHovered?: boolean; isVisible?: boolean }) {
//   const geometry = useLoader(STLLoader, url) as THREE.BufferGeometry
//   const meshRef = useRef<THREE.Mesh>(null)
//   const rotationRef = useRef(0)
//   // Reuse vectors to avoid GC
//   const tempVec = useMemo(() => new THREE.Vector3(), [])
//   const optimizedGeometry = useMemo(() => {
//     if (!geometry) return null
//     const clonedGeometry = geometry.clone()
//     clonedGeometry.computeBoundingBox()
//     clonedGeometry.boundingBox!.getCenter(tempVec)
//     clonedGeometry.translate(-tempVec.x, -tempVec.y, -tempVec.z)
//     clonedGeometry.computeVertexNormals()
//     // Dispose original to free memory
//     geometry.dispose()
//     return clonedGeometry
//   }, [geometry, tempVec])

//   useFrame((state, delta) => {
//     if (meshRef.current && isVisible) {
//       if (!isHovered) {
//         rotationRef.current += 0.003 * delta // Frame-independent, but match original speed
//       }
//       meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, rotationRef.current, 0.1)
//       const targetY = isHovered ? meshRef.current.position.y : Math.sin(state.clock.elapsedTime * 0.5) * 0.03
//       meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05)
//     }
//   }, -1) // Lower priority

//   useEffect(() => {
//     return () => {
//       if (optimizedGeometry) optimizedGeometry.dispose()
//     }
//   }, [optimizedGeometry])

//   if (!optimizedGeometry) return null
//   return (
//     <Center>
//       <mesh ref={meshRef} geometry={optimizedGeometry} scale={1.2}>
//         <meshStandardMaterial color="#84cc16" transparent opacity={0.9} roughness={0.4} metalness={0.1} />
//       </mesh>
//     </Center>
//   )
// }

// // Fallback and Loading (reverted colors, optimized with delta)
// function FallbackModel() {
//   const meshRef = useRef<THREE.Mesh>(null)
//   const rotationRef = useRef(0)
//   useFrame((state, delta) => {
//     if (meshRef.current) {
//       rotationRef.current += 0.003 * delta
//       meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, rotationRef.current, 0.1)
//       meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, rotationRef.current * 0.3, 0.1)
//       const targetY = Math.sin(state.clock.elapsedTime * 0.5) * 0.05
//       meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05)
//     }
//   })
//   return (
//     <mesh ref={meshRef}>
//       <torusKnotGeometry args={[1, 0.3, 128, 32]} />
//       <meshStandardMaterial color="#f7f7f7ff" roughness={0.4} />
//     </mesh>
//   )
// }

// function LoadingFallback() {
//   const meshRef = useRef<THREE.Mesh>(null)
//   const rotationRef = useRef(0)
//   useFrame((state, delta) => {
//     if (meshRef.current) {
//       rotationRef.current += 0.005 * delta
//       meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, rotationRef.current, 0.1)
//     }
//   })
//   return (
//     <mesh ref={meshRef}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color="#000000" />
//     </mesh>
//   )
// }

// function ModelErrorBoundary({ children, isHovered, isVisible }: { children: React.ReactNode; isHovered?: boolean; isVisible?: boolean }) {
//   const [hasError, setHasError] = useState(false)
//   useEffect(() => {
//     setHasError(false)
//   }, [children])
//   if (hasError) {
//     return <FallbackModel />
//   }
//   return <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
// }

// function STLModelWithLoader({ onLoad, isHovered = false, isVisible = true }: { onLoad: () => void; isHovered?: boolean; isVisible?: boolean }) {
//   const geometry = useLoader(STLLoader, "/model/pastor.stl") as THREE.BufferGeometry
//   useEffect(() => {
//     if (geometry && onLoad) {
//       onLoad()
//     }
//   }, [geometry, onLoad])
//   return <STLModel url="/model/pastor.stl" isHovered={isHovered} isVisible={isVisible} />
// }

// function Scene({ isHovered = false, isVisible = true, onModelLoad }: { isHovered?: boolean; isVisible?: boolean; onModelLoad: () => void }) {
//   const gl = useThree((state) => state.gl)
//   const [isMobile, setIsMobile] = useState(false)
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768)
//     }
//     checkMobile()
//     window.addEventListener("resize", checkMobile)
//     return () => window.removeEventListener("resize", checkMobile)
//   }, [])

//   return (
//     <>
//       <ModelErrorBoundary isHovered={isHovered} isVisible={isVisible}>
//         <STLModelWithLoader onLoad={onModelLoad} isHovered={isHovered} isVisible={isVisible} />
//       </ModelErrorBoundary>
//       <ambientLight intensity={0.6} />
//       <directionalLight position={[10, 10, 5]} intensity={0.7} />
//       <hemisphereLight intensity={0.4} groundColor="#000000" />
//       <OrbitControls
//         enableZoom={true}
//         enablePan={false}
//         maxPolarAngle={Math.PI}
//         minPolarAngle={0}
//         enableDamping={true}
//         dampingFactor={0.03}
//         rotateSpeed={0.4}
//         zoomSpeed={0.5}
//         minDistance={1}
//         maxDistance={15}
//         target={[0, 0, 0]}
//       />
//       <PerformanceMonitor
//         onChange={({ factor }) => gl.setPixelRatio(Math.max(0.5, 2 * factor))}
//         flipflops={2}
//       />
//       <Preload all />
//     </>
//   )
// }

// export default function PastorSection() {
//   const [isLoading, setIsLoading] = useState(true)
//   const [isHovered, setIsHovered] = useState(false)
//   const [isMobile, setIsMobile] = useState(false)
//   const sectionRef = useRef<HTMLElement>(null)
//   const canvasRef = useRef<HTMLDivElement>(null)

//   const isInView = useInView(canvasRef, { margin: "-50px", amount: 0.1 })

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768)
//     }
//     checkMobile()
//     window.addEventListener("resize", checkMobile)
//     return () => window.removeEventListener("resize", checkMobile)
//   }, [])

//   const handleModelLoad = () => {
//     setIsLoading(false)
//   }

//   useEffect(() => {
//     const timeout = setTimeout(() => setIsLoading(false), 5000)
//     return () => clearTimeout(timeout)
//   }, [])

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 1.2,
//         ease: "easeOut",
//         when: "beforeChildren",
//         staggerChildren: 0.2,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   }

//   const slideInLeft = {
//     hidden: { opacity: 0, x: -80 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 1,
//         ease: "easeOut",
//       },
//     },
//   }

//   const slideInRight = {
//     hidden: { opacity: 0, x: 80 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 1,
//         ease: "easeOut",
//         delay: 0.3,
//       },
//     },
//   }

//   return (
//     <section
//       ref={sectionRef}
//       id="pastor"
//       className="py-32 md:py-48 bg-black text-white overflow-hidden relative min-h-screen"
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-32">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
//         >
//           {/* Left: Title + 3D Model */}
//           <motion.div variants={slideInLeft} className="flex flex-col justify-between min-h-full">
//             <motion.h2
//               variants={itemVariants}
//               className="text-5xl lg:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-500 mb-12 lg:mb-16"
//             >
//               Our Pastor
//             </motion.h2>
//             <motion.div
//               ref={canvasRef}
//               variants={itemVariants}
//               transition={{ delay: 0.5 }}
//               className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
//               style={{ willChange: "transform" }}
//               whileHover={{
//                 scale: 1.02,
//                 transition: { duration: 0.3, ease: "easeOut" },
//               }}
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               <Canvas
//                 camera={{
//                   position: [6, 4, 6],
//                   fov: 28,
//                   near: 0.1,
//                   far: 100,
//                 }}
//                 gl={{
//                   powerPreference: "high-performance",
//                   alpha: true,
//                   antialias: !isMobile,
//                   stencil: false,
//                   depth: true,
//                 }}
//                 dpr={isMobile ? 1 : [1, 2]}
//                 frameloop={isInView ? "always" : "never"}
//                 style={{
//                   touchAction: "none",
//                   opacity: isInView ? 1 : 0,
//                   transition: "opacity 0.3s ease",
//                 }}
//               >
//                 <Scene isHovered={isHovered} isVisible={isInView} onModelLoad={handleModelLoad} />
//               </Canvas>
//               {isLoading && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ 
//                     opacity: 0,
//                     transition: { duration: 0.4, ease: "easeOut" }
//                   }}
//                   className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm"
//                 >
//                   <motion.div
//                     animate={{ rotate: 360 }}
//                     transition={{
//                       duration: 1.5,
//                       repeat: Number.POSITIVE_INFINITY,
//                       ease: "linear",
//                     }}
//                     className="w-12 h-12 border-4 border-lime-400 border-t-transparent rounded-full"
//                   />
//                 </motion.div>
//               )}
//             </motion.div>
//           </motion.div>
//           {/* Right: Text + Socials (unchanged) */}
//           <motion.div variants={slideInRight} className="flex flex-col justify-between h-full lg:py-8">
//             <motion.div
//               variants={itemVariants}
//               className="space-y-8 pt-32 text-lg md:text-xl font-light leading-relaxed tracking-wide text-white/90"
//             >
//               <motion.p variants={itemVariants}>
//                 We are a community of faith based in Phnom Penh, Cambodia. We started off with our first Gathering in
//                 March 2024, and it has now been more than a year in this journey. In July 2025,
//               </motion.p>
//               <motion.p variants={itemVariants}>
//                 MATTER Phnom Penh is now officially a part of{" "}
//                 <span className="font-medium text-white">Collective Global</span>: a collective of churches where we
//                 share ideas, challenge each other and grow together. It also becomes a platform where we can play our
//                 part in what God is doing as a bigger picture.
//               </motion.p>
//             </motion.div>
//             <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-8 pt-12 lg:pt-0">
//               <div className="flex items-center gap-6">
//                 {[
//                   { href: "https://facebook.com/yourpage", icon: <Facebook className="w-5 h-5" /> },
//                   { href: "https://instagram.com/yourpage", icon: <Instagram className="w-5 h-5" /> },
//                   { href: "https://tiktok.com/@yourpage", icon: <TiktokIcon /> },
//                 ].map((social, i) => (
//                   <motion.a
//                     key={i}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{
//                       scale: 1.15,
//                       y: -2,
//                       transition: { type: "spring", stiffness: 400, damping: 10 },
//                     }}
//                     whileTap={{ scale: 0.95 }}
//                     className="w-12 h-12 border-2 border-white rounded-xl flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300 backdrop-blur-sm"
//                   >
//                     {social.icon}
//                   </motion.a>
//                 ))}
//               </div>
//               <motion.div whileHover="hover" initial="rest" className="relative">
//                 <Link
//                   href="/team"
//                   className="relative inline-flex items-center gap-3 border-2 border-white rounded-xl px-8 py-3.5 text-sm font-bold tracking-widest uppercase overflow-hidden group"
//                 >
//                   <motion.div
//                     className="absolute inset-0 bg-white"
//                     initial={{ x: "-100%" }}
//                     variants={{ rest: { x: "-100%" }, hover: { x: "0%" } }}
//                     transition={{ duration: 0.4, ease: "easeOut" }}
//                   />
//                   <motion.span
//                     className="relative z-10 flex items-center gap-2"
//                     variants={{ rest: { color: "#ffffff" }, hover: { color: "#000000" } }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     View Our Team
//                     <motion.span
//                       variants={{ rest: { x: 0 }, hover: { x: 4 } }}
//                       transition={{ duration: 0.2, ease: "easeOut" }}
//                     >
//                       →
//                     </motion.span>
//                   </motion.span>
//                 </Link>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }