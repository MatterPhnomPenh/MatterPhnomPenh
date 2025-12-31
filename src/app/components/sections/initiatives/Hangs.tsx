

"use client"
import { motion } from "framer-motion"

export function HangsSection() {
  const activities = [
    { 
      title: "GYM & SPORT", 
      desc: "Badminton, Lifting, Running", 
      image: "images/CLC00221.jpg" 
    },
    { 
      title: "CAFE HANGS", 
      desc: "Coffee, Deep Conversations", 
      image: "images/IMG_7631.jpg" 
    },
    { 
      title: "NATURE WALKS", 
      desc: "Trails, Parks, Fresh Air", 
      image: "images/CLC00746.jpg" 
    },
    { 
      title: "MOVIE NIGHTS", 
      desc: "Screenings, Popcorn, Chill", 
      image: "images/mnight.jpg" 
    },
  ]

  return (
    <section id="hangs" className="relative bg-[#050505] text-white overflow-hidden py-24 selection:bg-white/20">
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-50 mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      <div className="container mx-auto px-8 relative z-10">
        
        {/* Centered Header Section */}
        <div className="mb-20 md:mb-32 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400 tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
            >
              Casual Gatherings
            </span>

            <h2 className="text-6xl md:text-8xl font-medium tracking-tighter text-white"
                style={{ fontFamily: "var(--font-rubik), Georgia, serif"}}
            >
              HANGS
            </h2>
            
            {/* Centered Decorative Line */}
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto" />
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 leading-relaxed"
              style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
            >
              Faith doesn’t stop at Sunday. Our Hangs are simple moments where community grows naturally and conversations about God happen organically.
            </motion.p>
          </motion.div>
        </div>

        {/* Bento Grid Layout with Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {activities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-neutral-900">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
              </div>

              {/* Dark Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              {/* Border Highlight (Monochrome) */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl pointer-events-none transition-colors duration-300" />

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div className="mt-auto">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-white text-white"
                      style={{ fontFamily: "var(--font-rubik), Georgia, serif"}}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors font-mono"
                     style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Icon / Action */}
                <div className="flex items-center justify-between mt-6">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                  <span className="text-xs font-mono text-gray-400 group-hover:text-white transition-colors">Join</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Statement */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
          style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
        >
          <p className="text-2l font-light tracking-[0.3em] text-gray-600">
            Because life itself is worship — and connection is ministry.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
