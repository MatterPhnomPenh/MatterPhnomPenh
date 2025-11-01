"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

const JoinForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", interest: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Matter connection request:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", interest: "" });
    setTimeout(() => {
      setSubmitted(false);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-black max-w-lg mx-auto"
    >
      <h3 className="text-2xl font-bold uppercase tracking-widest text-center mb-6 text-black flex items-center justify-center gap-2">
        Join With Matter 
        <Send className="w-5 h-5" />
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-5 py-4 bg-black border-2 border-black rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/30 transition-all duration-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Email for Sacred Updates"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-5 py-4 bg-black border-2 border-black rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/30 transition-all duration-300"
          />
          <select
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            required
            className="w-full px-5 py-4 bg-black border-2 border-black rounded-xl text-white focus:outline-none focus:border-white focus:ring-2 focus:ring-white/30 transition-all duration-300"
          >
            <option value="">Choose Your Path</option>
            <option value="worship">Deepen in Worship</option>
            <option value="study">Scripture Study</option>
            <option value="service">Community Service</option>
            <option value="prayer">Prayer Circles</option>
          </select>
        </div>
            <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide flex items-center justify-center gap-2 transition-all duration-300 border-2 border-black hover:border-black"
            >
            {isLoading ? (
                <>
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                Connecting...
                </>
            ) : submitted ? (
                "Threshold Crossed"
            ) : (
                "Step Inside"
            )}
            </motion.button>
      </form>
      {submitted && !isLoading && (
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center text-black text-sm mt-4 font-medium"
        >
          The door is open. Grace awaits your arrival.
        </motion.p>
      )}
    </motion.div>
  );
};

export default function MatterFooter() {
  const sections = [
    {
      title: "Awaken",
      items: ["First Threshold", "Silent Retreats", "Dawn Prayers", "Soul Mapping"],
    },
    {
      title: "Gather",
      items: ["Hearth Circles", "Youth Sanctum", "Elders' Hearth", "Wanderers' Path", "Healers' Guild"],
    },
    {
      title: "Illuminate",
      items: ["Echoes Archive", "Whisper Library", "Torch Bearers", "Veil Liftings", "Starlit Discourses"],
    },
    {
      title: "Eternal Rites",
      items: ["Union Vows", "Passage Ceremonies", "Threshold Blessings", "Shadow Work", "Ascent Journeys"],
    },
  ];

  return (
    <>
      <footer className="relative w-full bg-black text-white px-6 py-20 md:px-12 md:py-14 overflow-hidden">
        {/* Monochromatic decorative elements - subtle shadows and lines */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-5 w-32 h-32 border border-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-5 w-48 h-48 border border-white/5 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-white/5 rounded-full opacity-20"></div>
          {/* Unique etched lines for texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">

          {/* Enhanced Logo - with subtle rotation animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            You are invited to step beyond the ordinary and embrace the extraordinary with Matter Collective.
            </h2>
          </motion.div>

          {/* Join Form - inverted for contrast */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <JoinForm />
          </motion.div>

          {/* Main Grid - etched cards with unique bullet points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8 lg:gap-12"
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-6 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-bold uppercase tracking-widest text-white mb-4 border-b border-white/20 pb-2">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-base text-gray-200">
                  {section.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + itemIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:text-white before:content-['▸'] before:font-mono"
                    >
                      <a href="#" className="hover:text-white transition-colors block hover:translate-x-1 duration-300">
                        {item}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Copyright - etched style with unique phrasing */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-12 border-t border-white/50 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p>&copy; 2025 Matter Collective. Where Shadows Meet Light.</p>
            <div className="text-white font-medium uppercase tracking-wider">Matter | Thresholds Eternal • Veils • Echoes • Beyond</div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}