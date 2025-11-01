"use client";

import { useState } from "react";
import { Phone, Mail, Linkedin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { motion } from "framer-motion";
import Image from "next/image";
import MPopup from "../MPopup";

const OriginIcon = () => (
  <Image
    src="/ORS_STAR-BLUE.png"
    alt="Origin Logo"
    width={20}
    height={20}
    className="object-contain"
  />
);

export default function TalkFooter() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const socialLinks = [
    { Icon: Linkedin, href: "https://www.linkedin.com", label: "LinkedIn" },
    { Icon: FaFacebookF, href: "https://web.facebook.com/matterphnompenh/", label: "Facebook" },
    { Icon: FaInstagram, href: "https://www.instagram.com/matterphnompenh/", label: "Instagram" },
    { Icon: FaTelegramPlane, href: "https://t.me/phnompenhmatters", label: "Telegram" },
    { Icon: SiTiktok, href: "https://www.tiktok.com/@matterphnompenh", label: "TikTok" },
    { Icon: OriginIcon, href: "https://www.originskh.com/", label: "Originskh" },
  ];

  return (
    <footer
      id="footer"
      className="relative w-full bg-[#FBF7F1] text-[#1B1B1B] px-6 py-16 md:px-10 md:py-20 overflow-hidden font-serif"
    >
      {/* Decorative soft blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#F5C54B]/20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#49C809]/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-[#FFFDF9]/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#49C809]"
        >
          <div className="space-y-6 text-center">
            <Image
              src="/images/logomattter.jpg"
              alt="Logo"
              width={1400}
              height={600}
              className="w-full object-contain mx-auto"
            />
          </div>
        </motion.div>

        {/* Middle Section - Restyled */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-16 pt-12 border-t border-[#49C809] text-[#2B2A29]"
        >
          {/* Contact */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ rotate: 10 }}
                onClick={() => setIsPopupOpen(true)}
                className="bg-[#49C809] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shadow-md"
              >
                M
              </motion.button>
              <span className="text-3xl font-extrabold tracking-tight text-[#1B1B1B] font-serif">
                MATTER
              </span>
            </div>

            <div className="space-y-5 text-[#444] font-sans">
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-[#49C809] rounded-lg text-white transition-transform group-hover:scale-105">
                  <Phone className="w-5 h-5" />
                </div>
                <a href="tel:+855123456789" className="hover:text-[#49C809] transition">
                  +855 12 345 6789
                </a>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-[#49C809] rounded-lg text-white transition-transform group-hover:scale-105">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium text-[#2B2A29]">Info:</span>{" "}
                    <a href="mailto:enquiry@canopysands.com" className="hover:text-[#49C809]">
                      name@examle.com
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-[#2B2A29]">Media:</span>{" "}
                    <a href="mailto:media@canopysands.com" className="hover:text-[#49C809]">
                      matter@originskh.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div className="space-y-5 font-sans text-[#3B3A39]">
            <h3 className="text-3xl font-serif font-bold text-[#1B1B1B]">
              YOU MATTER HERE
            </h3>
            <p className="text-lg leading-relaxed italic">
              We’re all an empty matter without Him, yet we matter to Him.
            </p>
            <p className="text-base mt-6">
              <span className="font-bold text-[#1B1B1B]">Address:</span> Sangkat Daeum Thkov, Khan Chamkar Mon, Phnom Penh, Cambodia
            </p>
          </div>

          {/* Social Icons */}
          <div className="space-y-5 font-sans">
            <h3 className="text-3xl font-serif font-bold text-[#1B1B1B]">
              Connect With Us
            </h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map(({ Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#FFFDF9] border border-[#49C809] text-[#1B1B1B] rounded-full flex items-center justify-center hover:bg-[#49C809]/10 transition-all shadow-sm hover:shadow-md"
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <MPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </footer>
  );
}
