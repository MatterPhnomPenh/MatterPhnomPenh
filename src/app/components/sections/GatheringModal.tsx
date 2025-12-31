

"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Users, Music, Utensils, Heart, ArrowRight } from "lucide-react";
import { useState } from "react";

interface GatheringModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GatheringModal({ isOpen, onClose }: GatheringModalProps) {
  const [activeSection, setActiveSection] = useState<'overview' | 'details' | 'values'>('overview');

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
          />
          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center p-4 z-50 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl h-[90vh] max-h-[900px] bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-lime-500/20 rounded-2xl overflow-hidden shadow-2xl shadow-lime-500/10 pointer-events-auto flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header - Fixed */}
              <div className="relative p-8 border-b border-lime-500/10 flex-shrink-0">
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.2),transparent_70%)]" />
                </div>
                <div className="relative flex items-center justify-between">
                  <div>
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-sm uppercase tracking-widest text-lime-400 font-semibold"
                    >
                      Weekly Gathering
                    </motion.span>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-4xl lg:text-5xl font-bold text-white mt-2"
                      style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
                    >
                      JOIN US
                    </motion.h2>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="w-12 h-12 rounded-full border border-lime-500/30 hover:border-lime-500 hover:bg-lime-500/10 flex items-center justify-center transition-all duration-300"
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.button>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-3 mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-lime-500/20 to-lime-400/10 border border-lime-500/30"
                >
                  <Calendar className="w-5 h-5 text-lime-400" />
                  <span className="text-white font-semibold text-lg"
                    style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
                  >Every Sunday at 4 PM</span>
                </motion.div>
              </div>

              {/* Navigation Tabs - Fixed */}
              <div className="flex border-b border-lime-500/10 flex-shrink-0">
                {[
                  { id: 'overview', label: 'Overview', icon: Users },
                  { id: 'details', label: 'What to Expect', icon: Utensils },
                  { id: 'values', label: 'Our Heart', icon: Heart }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSection(tab.id as any)}
                    style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
                    className={`flex-1 flex items-center justify-center gap-3 py-4 text-lg font-medium transition-all duration-300 ${
                      activeSection === tab.id
                        ? 'text-lime-400 bg-lime-500/5 border-b-2 border-lime-400'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Scrollable Content Area */}
              <div className="flex-1 overflow-y-auto px-8 lg:px-12 py-8">
                <div className="min-h-full">
                  <AnimatePresence mode="wait">
                    {/* Overview Section */}
                    {activeSection === 'overview' && (
                      <motion.div
                        key="overview"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                      >
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="flex items-start gap-8"
                        >
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-lime-500/20 to-lime-400/10 border border-lime-500/30 flex items-center justify-center">
                              <Users className="w-8 h-8 text-lime-400" />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-4"
                              style={{ fontFamily: "var(--font-rubik), Georgia, serif"}}
                            >Together in Community</h3>
                            <p className="text-xl text-gray-300 leading-relaxed"
                              style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
                            >
                              Every Sunday at 4 PM, we come together — with food, music, conversation, and community.
                            </p>
                          </div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="bg-gradient-to-r from-lime-500/10 to-transparent border-l-4 border-lime-400 p-6 rounded-r-lg"
                        >
                          <p className="text-2xl font-bold text-white"
                            style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
                          >
                            "It's more than a service; it's a weekly huddle for life ahead."
                          </p>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                          <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-lime-400 flex items-center gap-2"
                              style={{ fontFamily: "var(--font-rubik), Georgia, serif"}}
                            >
                              <Music className="w-5 h-5" />
                              Worship & Music
                            </h4>
                            <p className="text-gray-400"
                              style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
                            >Authentic worship that connects heart to heaven</p>
                          </div>
                          <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-lime-400 flex items-center gap-2"
                              style={{ fontFamily: "var(--font-rubik), Georgia, serif"}}
                            >
                              <Utensils className="w-5 h-5" />
                              Shared Meals
                            </h4>
                            <p className="text-gray-400"
                              style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
                            >Breaking bread together in fellowship</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}

                    {/* Details Section */}
                    {activeSection === 'details' && (
                      <motion.div
                        key="details"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                      >
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-6"
                            style={{ fontFamily: "var(--font-rubik), Georgia, serif"}}
                          >What Happens on Sundays</h3>
                          <div className="space-y-6"
                            style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
                          >
                            {[
                              { time: "4:00 PM", title: "Welcome & Fellowship", desc: "Casual gathering with refreshments and conversations" },
                              { time: "4:30 PM", title: "Worship & Message", desc: "Contemporary worship and relevant biblical teaching" },
                              { time: "5:30 PM", title: "Community Dinner", desc: "Shared meal where everyone is welcome" },
                              { time: "6:30 PM", title: "Small Groups", desc: "Optional deeper discussions and prayer" }
                            ].map((item, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-6 p-4 rounded-xl hover:bg-white/5 transition-colors"
                              >
                                <div className="flex-shrink-0">
                                  <div className="w-12 h-12 rounded-full bg-lime-500/10 border border-lime-500/20 flex items-center justify-center">
                                    <span className="text-lime-400 font-bold">{item.time}</span>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                                  <p className="text-gray-400">{item.desc}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Values Section */}
                    {activeSection === 'values' && (
                      <motion.div
                        key="values"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                      >
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-6"
                            style={{ fontFamily: "var(--font-rubik), Georgia, serif"}}
                          >Our Gathering Purpose</h3>
                          <div className="space-y-6">
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.1 }}
                              className="p-6 bg-gradient-to-br from-lime-500/10 to-transparent border border-lime-500/20 rounded-xl"
                            >
                              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-3"
                                style={{ fontFamily: "var(--font-rubik), Georgia, serif"}}
                              >
                                <ArrowRight className="w-6 h-6 text-lime-400" />
                                We gather to send out
                              </h4>
                              <p className="text-gray-300 text-lg"
                                style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
                              >
                                We don't gather just to bring people in; we gather to send them out.
                                Each gathering equips and empowers for the week ahead.
                              </p>
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 }}
                              className="p-6 bg-gradient-to-br from-lime-500/5 to-transparent border border-lime-500/20 rounded-xl"
                            >
                              <h4 className="text-xl font-bold text-white mb-3"
                                style={{ fontFamily: "var(--font-rubik), Georgia, serif"}}
                              >A Space for Transformation</h4>
                              <p className="text-gray-300 text-lg"
                                style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
                              >
                                A space to discover, experience, and be transformed by God.
                                Where questions are welcome and faith becomes real.
                              </p>
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                              className="p-6 bg-gradient-to-br from-lime-500/5 to-transparent border border-lime-500/20 rounded-xl"
                            >
                              <h4 className="text-xl font-bold text-white mb-3"
                                style={{ fontFamily: "var(--font-rubik), Georgia, serif" }}
                              >For Everyone</h4>
                              <p className="text-gray-300 text-lg"
                                style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
                              >
                                Whether you're exploring faith, returning to church,
                                or looking for authentic community — there's a place for you here.
                              </p>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Footer CTA - Fixed at bottom */}
              <div className="p-8 border-t border-lime-500/10 bg-gradient-to-t from-black/50 to-transparent flex-shrink-0">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <p className="text-gray-400"
                      style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
                    >Ready to join us?</p>
                    <p className="text-white font-semibold text-lg"
                      style={{ fontFamily: "var(--font-rubik), Georgia, serif"}}
                    >This Sunday at 4 PM</p>
                  </div>
                  <div className="flex gap-4">
                    {/* Learn More → Contact Page */}
                    <motion.a
                      href="/contact"  
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 rounded-lg border-2 border-lime-500 text-white hover:bg-lime-500/10 transition-all duration-300 font-semibold uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
                    >
                      Learn More
                    </motion.a>

                    {/* Get Directions → Google Maps */}
                    <motion.a
                      href="https://www.google.com/maps/dir//MATTER+Phnom+Penh,+109+EO+St+494,+Phnom+Penh+12307/@11.5322236,104.9154799,17z/data=!4m16!1m7!3m6!1s0x310951005b98805b:0xf0b9191af0074104!2sMATTER+Phnom+Penh!8m2!3d11.5322184!4d104.9180548!16s%2Fg%2F11wtn5yf2z!4m7!1m0!1m5!1m1!1s0x310951005b98805b:0xf0b9191af0074104!2m2!1d104.9180554!2d11.5322077?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                      className="relative inline-flex items-center justify-center gap-3 px-8 py-3 rounded-lg border-2 border-lime-500 text-white font-semibold uppercase tracking-wider overflow-hidden"
                      style={{ fontFamily: "var(--font-rubik), Georgia, serif", fontWeight: 400 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-lime-500"
                        initial={{ x: "-100%" }}
                        variants={{ hover: { x: "0%" } }}
                        transition={{ duration: 0.5, ease: [0.6, 0.01, 0.4, 1] }}
                      />
                      <motion.span
                        className="relative z-10 flex items-center gap-3"
                        variants={{ hover: { color: "#000000" } }}
                        initial={{ color: "#ffffff" }}
                        transition={{ duration: 0.25 }}
                      >
                        Get Directions
                        <motion.span
                          variants={{ hover: { x: 10 } }}
                          initial={{ x: 0 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.span>
                      </motion.span>
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-32 h-32 border border-lime-500/10 rounded-full blur-xl pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-48 h-48 border border-lime-500/10 rounded-full blur-xl pointer-events-none" />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}