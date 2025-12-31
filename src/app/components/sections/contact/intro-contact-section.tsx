
"use client";
import { motion } from "framer-motion";
import { Calendar, Tent, HeartHandshake, Palette, Users, BookOpen, Mail, MessageCircle } from "lucide-react";

const initiatives = [
  {
    title: "Gathering",
    icon: Calendar,
    image: "images/gathering.jpg"
  },
  {
    title: "Camp",
    icon: Tent,
    image: "images/DSC04917.jpg"
  },
  {
    title: "Foundation",
    icon: HeartHandshake,
    image: "images/IMG_2563.jpg"
  },
  {
    title: "Canvas",
    icon: Palette,
    image: "images/canvas2.jpg"
  },
  {
    title: "Hangs",
    icon: Users,
    image: "images/IMG_7631.jpg"
  },
  {
    title: "Bible Study",
    icon: BookOpen,
    image: "images/CLC00497.jpg"
  }
];

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="videos/contact.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* Initiatives Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-black">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
          >
            What We Do</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
          >
            Explore the heart of our community through these ongoing initiatives—spaces to gather, grow, serve, and celebrate life together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {initiatives.map(({ title, icon: Icon, image }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="relative">
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              <div 
                className="absolute bottom-0 left-0 right-0 p-8 text-white"
                style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon className="w-8 h-8 text-white" />
                  <h3 className="text-2xl font-light">{title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA Section with Video Background */}
      <section className="relative px-8 pb-32 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
          >Reach Out Today</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}>
            No pressure, just real conversation. Whether you're new to faith or looking for community—we'd love to hear from you. 
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative z-10 max-w-4xl mx-auto text-center px-6 mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
          style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
        >
          {/* Email Us Button */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            viewport={{ once: false }}
            whileHover={{ y: -4 }}
          >
            <motion.div whileHover="hover" initial="rest">
              <a
                href="mailto:matterphnompenh@gmail.com"
                className="relative inline-flex items-center justify-center gap-2 sm:gap-3 border border-white rounded-md px-8 py-3.5 lg:px-10 lg:py-5 text-xs sm:text-sm font-medium tracking-widest uppercase overflow-hidden whitespace-nowrap w-full sm:w-auto text-center"
              >
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  variants={{ rest: { x: "-100%" }, hover: { x: "0%" } }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
                <motion.span
                  className="relative z-10 flex items-center gap-2 sm:gap-3"
                  variants={{ rest: { color: "#ffffff" }, hover: { color: "#000000" } }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                  <motion.span
                    variants={{ rest: { x: 0 }, hover: { x: 8 } }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </motion.span>
              </a>
            </motion.div>
          </motion.div>

          {/* Telegram Button */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            viewport={{ once: false }}
            whileHover={{ y: -4 }}
          >
            <motion.div whileHover="hover" initial="rest">
              <a
                href="https://t.me/phnompenhmatters"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center gap-2 sm:gap-3 border border-white rounded-md px-8 py-3.5 lg:px-10 lg:py-5 text-xs sm:text-sm font-medium tracking-widest uppercase overflow-hidden whitespace-nowrap w-full sm:w-auto text-center"
              >
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  variants={{ rest: { x: "-100%" }, hover: { x: "0%" } }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
                <motion.span
                  className="relative z-10 flex items-center gap-2 sm:gap-3"
                  variants={{ rest: { color: "#ffffff" }, hover: { color: "#000000" } }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Telegram
                  <motion.span
                    variants={{ rest: { x: 0 }, hover: { x: 8 } }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </motion.span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Matter Phnom Penh. All rights reserved.
        </div>
      </section>
    </main>
  );
}