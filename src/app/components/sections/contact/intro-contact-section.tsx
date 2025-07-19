

"use client";

import { motion } from "framer-motion";
import { Mail, Headset, Megaphone, Users } from "lucide-react";

const contactOptions = [
  {
    Icon: Mail,
    title: "General Inquiries",
    desc: "Let’s chat about ideas, projects, or partnerships.",
    href: "mailto:matter@originskh.com",
  },
  {
    Icon: Headset,
    title: "Support",
    desc: "Have questions or need help? We're here for you.",
    href: "https://t.me/phnompenhmatters",
  },
  {
    Icon: Users,
    title: "Team & Community",
    desc: "Join our team to build what truly matters.",
    href: "https://t.me/phnompenhmatters",
  },
  {
    Icon: Megaphone,
    title: "Media & Press",
    desc: "Looking for our press kit or a statement?",
    href: "https://web.facebook.com/matterphnompenh/",
  },
];

export default function IntroContactSection() {
  return (
    <main className="bg-white min-h-screen pt-24">
      {/* Hero */}
      <section className="relative w-full bg-white py-20 px-6 sm:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 mb-4"
        >
          Let&apos;s Connect with Purpose
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-700"
        >
          Whether you&apos;re reaching out for a project, support, or press; this is the place to begin something meaningful.
        </motion.p>
      </section>

      {/* Contact Options */}
      <section className="py-20 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {contactOptions.map(({ Icon, title, desc, href }) => (
            <motion.a
              href={href}
              key={title}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group block bg-white hover:bg-blue-900 text-blue-900 hover:text-white transition-colors rounded-2xl shadow-md p-6 text-center cursor-pointer"
              target={href.startsWith("http") || href.startsWith("mailto:") ? "_blank" : undefined}
              rel={href.startsWith("http") || href.startsWith("mailto:") ? "noopener noreferrer" : undefined}
            >
              <div className="mb-4 flex justify-center">
                <Icon className="w-8 h-8 text-blue-900 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm mt-2 text-gray-600 group-hover:text-gray-300 transition-colors">
                {desc}
              </p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Ready to make something that matters?
        </motion.h2>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Start a conversation with our team today. We&apos;re just one message away.
        </p>
      </section>
    </main>
  );
}
