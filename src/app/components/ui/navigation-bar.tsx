// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

// interface NavigationBarProps {
//   activeSection?: string;
// }

// export default function NavigationBar({ activeSection = "about" }: NavigationBarProps) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isEventsOpen, setIsEventsOpen] = useState(false);
//   const [hoveredId, setHoveredId] = useState<string | null>(null);
//   const [currentPath, setCurrentPath] = useState("");
//   const [isVisible, setIsVisible] = useState(true);
//   const lastScrollY = useRef(0);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setCurrentPath(window.location.pathname);
//     }
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY > 50 && currentScrollY > lastScrollY.current) {
//         setIsVisible(false);
//       } else {
//         setIsVisible(true);
//       }
//       lastScrollY.current = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { id: "about", label: "About Us", href: "/about" },
//     { id: "gathering", label: "Gathering", href: "/gathering" },
//     { id: "talk", label: "Talk", href: "/talk" },
//     { id: "events", label: "Initiatives", href: "/events" },
//     { id: "contact", label: "Contact", href: "/contact" },
//   ];

//   const eventSubLinks = [
//     { id: "foundation", label: "Matter Foundation", href: "/events#foundation" },
//     { id: "fest", label: "Matter Fest", href: "/events#fest" },
//     { id: "camp", label: "Matter Camp", href: "/events#camp" },
//     { id: "matternight", label: "Matter Night", href: "/events#matternight" },
//   ];

//   const isLinkActive = (linkId: string) => {
//     if (activeSection === linkId) return true;
//     if (currentPath === `/${linkId}`) return true;
//     if (linkId === "events" && currentPath.startsWith("/events")) return true;
//     return false;
//   };

//   const isTalkActive = activeSection === "talk" || currentPath === "/talk";
//   const navbarBgClass = isTalkActive ? "bg-[#49C809]" : "bg-black";
//   const logoBgClass = isTalkActive ? "bg-[#49C809]" : "bg-black";

//   return (
//     <header 
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
//         isVisible ? 'translate-y-0' : '-translate-y-full'
//       } ${navbarBgClass} shadow-lg backdrop-blur-sm`}
//     >
//       <nav className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="flex items-center justify-between py-4 lg:py-5">
          
//           {/* Logo with decorative elements */}
//           <div className="flex-shrink-0">
//             <a href="/" className="group flex items-center space-x-3">
//               <div className="flex flex-col">
//                 <div className="text-2xl lg:text-3xl font-serif font-bold text-white tracking-tight">
//                   Matter
//                 </div>
//               </div>
//             </a>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-1">
//             {navLinks.map((link) => {
//               const isActive = isLinkActive(link.id);

//               return link.id === "events" ? (
//                 <div
//                   key={link.id}
//                   className="relative group"
//                   onMouseEnter={() => setHoveredId(link.id)}
//                   onMouseLeave={() => setHoveredId(null)}
//                 >
//                   <a
//                     href={link.href}
//                     className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-1
//                       ${isActive 
//                       ? 'text-white bg-white/20' 
//                       : 'text-white/70 hover:text-white hover:bg-white/10'
//                     }`}
//                   >
//                     <span>{link.label}</span>
//                     <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" />
//                   </a>
                  
//                   {/* Dropdown Menu */}
//                   <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
//                     <div className={`${navbarBgClass} rounded-xl shadow-2xl border border-white/10 overflow-hidden`}>
//                       <div className="p-2">
//                         {eventSubLinks.map((subLink, index) => (
//                           <a
//                             key={subLink.id}
//                             href={subLink.href}
//                             className="block px-4 py-3 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
//                             style={{ 
//                               animationDelay: `${index * 50}ms`,
//                               animation: hoveredId === "events" ? 'slideIn 0.3s ease-out forwards' : 'none'
//                             }}
//                           >
//                             {subLink.label}
//                           </a>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <a
//                   key={link.id}
//                   href={link.href}
//                   className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
//                   ${isActive 
//                       ? 'text-white bg-white/20' 
//                       : 'text-white/70 hover:text-white hover:bg-white/10'
//                     }`}
//                 >
//                   {link.label}
//                 </a>
//               );
//             })}
//           </div>

//           {/* CTA Buttons - Desktop */}
//           <div className="hidden lg:flex items-center space-x-4">
//             <a
//               href="/contact"
//               className="px-6 py-2.5 bg-white/20 text-white rounded-full font-medium text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 hover:bg-white/50"           
//             >
//               Join Us
//             </a>
//             <a
//               href="/give"
//               className="px-6 py-2.5 bg-white/20 text-white rounded-full font-medium text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 hover:bg-white/50"           
//             >
//               Give Us
//             </a>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="lg:hidden">
//             <button
//               onClick={() => {
//                 setIsMenuOpen(!isMenuOpen);
//                 if (!isMenuOpen) setIsEventsOpen(false);
//               }}
//               className="p-2 text-white hover:text-white transition-colors rounded-lg hover:bg-white/10"
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden pb-6 animate-fadeIn">
//             <div className={`${navbarBgClass} rounded-2xl shadow-xl border border-white/10 overflow-hidden`}>
//               <div className="p-4 space-y-1">
//                 {navLinks.map((link) => {
//                   const isActive = isLinkActive(link.id);
//                   return (
//                     <div key={link.id}>
//                       {link.id === "events" ? (
//                         <>
//                           <button
//                             onClick={() => setIsEventsOpen(!isEventsOpen)}
//                             className={`flex items-center justify-between w-full px-4 py-3 font-medium rounded-lg transition-all ${isActive ? 'text-white bg-white/20' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}
//                           >
//                             <span>{link.label}</span>
//                             {isEventsOpen ? 
//                               <ChevronUp className="h-5 w-5" /> : 
//                               <ChevronDown className="h-5 w-5" />
//                             }
//                           </button>
//                           {isEventsOpen && (
//                             <div className="ml-4 mt-1 space-y-1 animate-fadeIn">
//                               {eventSubLinks.map((subLink) => (
//                                 <a
//                                   key={subLink.id}
//                                   href={subLink.href}
//                                   className="block px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all"
//                                   onClick={() => {
//                                     setIsMenuOpen(false);
//                                     setIsEventsOpen(false);
//                                   }}
//                                 >
//                                   {subLink.label}
//                                 </a>
//                               ))}
//                             </div>
//                           )}
//                         </>
//                       ) : (
//                         <a
//                           href={link.href}
//                           className={`block px-4 py-3 font-medium rounded-lg transition-all ${isActive ? 'text-white bg-white/20' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}
//                           onClick={() => setIsMenuOpen(false)}
//                         >
//                           {link.label}
//                         </a>
//                       )}
//                     </div>
//                   );
//                 })}
                
//                 {/* Mobile CTAs */}
//                 <div className="mt-4 space-y-2">
//                   <a
//                     href="/contact"
//                     className="block px-4 py-3 bg-white/20 text-white text-center rounded-lg font-medium shadow-lg"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Join Us
//                   </a>
//                   <a
//                     href="/give"
//                     className="block px-4 py-3 bg-white/20 text-white text-center rounded-lg font-medium shadow-lg"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Give Us
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>

//       <style jsx>{`
//         @keyframes slideIn {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out;
//         }
//       `}</style>
//     </header>
//   );
// }


"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

interface NavigationBarProps {
  activeSection?: string;
}

export default function NavigationBar({ activeSection = "about" }: NavigationBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50 && currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", label: "About Us", href: "/about" },
    { id: "gathering", label: "Gathering", href: "/gathering" },
    { id: "talk", label: "Talk", href: "/talk" },
    { id: "events", label: "Initiatives", href: "/events" },
    { id: "contact", label: "Contact", href: "/contact" },
  ];

  const eventSubLinks = [
    { id: "foundation", label: "Matter Foundation", href: "/events#foundation" },
    { id: "fest", label: "Matter Fest", href: "/events#fest" },
    { id: "camp", label: "Matter Camp", href: "/events#camp" },
    { id: "matternight", label: "Matter Night", href: "/events#matternight" },
  ];

  const isLinkActive = (linkId: string) => {
    if (activeSection === linkId) return true;
    if (currentPath === `/${linkId}`) return true;
    if (linkId === "events" && currentPath.startsWith("/events")) return true;
    return false;
  };

  const isTalkActive = activeSection === "talk" || currentPath === "/talk";
  const navbarBgClass = isTalkActive ? "bg-[#49C809]" : "bg-black";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${navbarBgClass} shadow-lg backdrop-blur-sm`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 lg:py-5">
          
          {/* Logo with decorative elements */}
          <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center space-x-3">
              <div className="flex flex-col">
                <div className="text-2xl lg:text-3xl font-serif font-bold text-white tracking-tight">
                  Matter
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.id);

              return link.id === "events" ? (
                <div
                  key={link.id}
                  className="relative group"
                  onMouseEnter={() => setHoveredId(link.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <a
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-1
                      ${isActive 
                      ? 'text-white bg-white/20' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" />
                  </a>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className={`${navbarBgClass} rounded-xl shadow-2xl border border-white/10 overflow-hidden`}>
                      <div className="p-2">
                        {eventSubLinks.map((subLink, index) => (
                          <a
                            key={subLink.id}
                            href={subLink.href}
                            className="block px-4 py-3 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
                            style={{ 
                              animationDelay: `${index * 50}ms`,
                              animation: hoveredId === "events" ? 'slideIn 0.3s ease-out forwards' : 'none'
                            }}
                          >
                            {subLink.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${isActive 
                      ? 'text-white bg-white/20' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="/contact"
              className="px-6 py-2.5 bg-white/20 text-white rounded-full font-medium text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 hover:bg-white/50"           
            >
              Join Us
            </a>
            <a
              href="/give"
              className="px-6 py-2.5 bg-white/20 text-white rounded-full font-medium text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 hover:bg-white/50"           
            >
              Give Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                if (!isMenuOpen) setIsEventsOpen(false);
              }}
              className="p-2 text-white hover:text-white transition-colors rounded-lg hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 animate-fadeIn">
            <div className={`${navbarBgClass} rounded-2xl shadow-xl border border-white/10 overflow-hidden`}>
              <div className="p-4 space-y-1">
                {navLinks.map((link) => {
                  const isActive = isLinkActive(link.id);
                  return (
                    <div key={link.id}>
                      {link.id === "events" ? (
                        <>
                          <button
                            onClick={() => setIsEventsOpen(!isEventsOpen)}
                            className={`flex items-center justify-between w-full px-4 py-3 font-medium rounded-lg transition-all ${isActive ? 'text-white bg-white/20' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}
                          >
                            <span>{link.label}</span>
                            {isEventsOpen ? 
                              <ChevronUp className="h-5 w-5" /> : 
                              <ChevronDown className="h-5 w-5" />
                            }
                          </button>
                          {isEventsOpen && (
                            <div className="ml-4 mt-1 space-y-1 animate-fadeIn">
                              {eventSubLinks.map((subLink) => (
                                <a
                                  key={subLink.id}
                                  href={subLink.href}
                                  className="block px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setIsEventsOpen(false);
                                  }}
                                >
                                  {subLink.label}
                                </a>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <a
                          href={link.href}
                          className={`block px-4 py-3 font-medium rounded-lg transition-all ${isActive ? 'text-white bg-white/20' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </a>
                      )}
                    </div>
                  );
                })}
                
                {/* Mobile CTAs */}
                <div className="mt-4 space-y-2">
                  <a
                    href="/contact"
                    className="block px-4 py-3 bg-white/20 text-white text-center rounded-lg font-medium shadow-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Join Us
                  </a>
                  <a
                    href="/give"
                    className="block px-4 py-3 bg-white/20 text-white text-center rounded-lg font-medium shadow-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Give Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}