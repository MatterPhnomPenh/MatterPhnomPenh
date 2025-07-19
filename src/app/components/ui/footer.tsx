

"use client";

import { useState } from "react";
import { Phone, Mail, Linkedin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { motion } from "framer-motion";
import MPopup from "./MPopup";

const OriginIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    {/* Replace below with your actual SVG path */}
    <circle cx="12" cy="12" r="10" />
    <text
      x="12"
      y="16"
      fontSize="10"
      fontWeight="bold"
      textAnchor="middle"
      fill="white"
      pointerEvents="none"
    >
      O
    </text>
  </svg>
);

export default function Footer() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    privacyAccepted: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitted(false);

    if (!formData.email || !formData.firstName || !formData.lastName) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ firstName: "", lastName: "", email: "", privacyAccepted: false });
      } else {
        const data = await response.json();
        setError(data.error || "Submission failed.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Network error.");
    }
  };

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
      className="relative w-full bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 px-6 py-16 md:px-10 md:py-20 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-100 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-blue-200 opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Top CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 tracking-wide">
            Stay Connected
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            For any inquiries or further information about Matter, please contact us.
          </p>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="grid md:grid-cols-3 gap-10">
            {/* Text */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-900">News & Updates</h3>
              <p className="text-gray-600">
                Subscribe to get the latest news and updates right to your inbox.
              </p>
              <div className="flex items-center gap-2 text-blue-900">
                <div className="w-8 h-0.5 bg-blue-900"></div>
                <span className="text-sm font-medium">Stay informed</span>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                    <span className="absolute left-5 -top-2 bg-white px-2 text-xs text-gray-500">First Name</span>
                  </div>
                  <div className="relative">
                    <input
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                    <span className="absolute left-5 -top-2 bg-white px-2 text-xs text-gray-500">Last Name</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 items-end">
                  <div className="relative w-full sm:flex-1">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                    <span className="absolute left-5 -top-2 bg-white px-2 text-xs text-gray-500">Email</span>
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full sm:w-auto bg-blue-900 border border-bg-blue-900 text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300 font-medium"
                  >
                    Subscribe
                  </motion.button>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-700">
                  <div className="relative flex items-center h-5 mt-0.5">
                    <input
                      type="checkbox"
                      name="privacyAccepted"
                      id="privacy"
                      checked={formData.privacyAccepted}
                      onChange={handleInputChange}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <label htmlFor="privacy" className="text-gray-600">
                    I have read and understood Matter Privacy Policy.
                  </label>
                </div>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm"
                  >
                    {error}
                  </motion.p>
                )}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-green-50 text-green-700 rounded-lg text-sm"
                  >
                    Thanks for subscribing! We&apos;ll keep you updated.
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </motion.div>

        {/* Bottom Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 pt-12"
        >
          {/* Contact */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ rotate: 10 }}
                onClick={() => setIsPopupOpen(true)}
                className="bg-blue-900 text-white rounded-xl w-12 h-12 flex items-center justify-center font-bold text-xl shadow-md"
              >
                M
              </motion.button>
              <span className="text-xl font-bold text-blue-900">MATTER</span>
            </div>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-blue-900 rounded-lg hover:bg-white transition text-white hover:text-blue-900">
                  <Phone className="w-5 h-5" />
                </div>
                <a href="tel:+855123456789" className="hover:text-blue-600 transition">
                  +855 12 345 6789
                </a>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-blue-900 rounded-lg hover:bg-white transition text-white hover:text-blue-900">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium text-gray-700">Info:</span>{" "}
                    <a href="mailto:enquiry@canopysands.com" className="hover:text-blue-600">
                      name@examle.com
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">Media:</span>{" "}
                    <a href="mailto:media@canopysands.com" className="hover:text-blue-600">
                      matter@originskh.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div className="text-gray-600 space-y-4">
            <h3 className="text-xl font-bold text-blue-900">YOU MATTER HERE</h3>
            <p className="leading-relaxed">
              We’re all an empty matter without Him, yet we matter to Him.
            </p>
            <p className="mt-4">
              <span className="font-bold text-blue-900">Address:</span> Sangkat Daeum Thkov, Khan Chamkar Mon, Phnom Penh, Cambodia
            </p>
          </div>

          {/* Social Icons */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-900">Connect With Us</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white border border-gray-200 text-blue-900 rounded-xl flex items-center justify-center hover:bg-blue-50 transition-all shadow-sm hover:shadow-md"
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

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-gray-200 text-center text-gray-500 text-sm"
        >
          © {new Date().getFullYear()} Matter. All rights reserved.
        </motion.div>
      </div>

      <MPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </footer>
  );
}
