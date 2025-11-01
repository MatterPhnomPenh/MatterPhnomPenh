// File 2: components/Layer2.tsx
"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Layer2Props {
  children?: ReactNode;
}

export const OurStories = ({ children }: Layer2Props) => {
  return (
    <div className="min-h-screen p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="mx-auto max-w-4xl space-y-16">
        {/* Who We Are Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-4xl p-8 md:p-10 flex flex-col text-left shadow-sm border border-gray-100"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-wide text-center">
            Who We Are
          </h1>
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-white leading-relaxed">
              Favor Church is a vibrant and exciting church for imperfect people of all ages, from different backgrounds. We&apos;re based in Metro Manila, Philippines, but our church family can also be found all across the globe.
            </p>
            <p className="text-white leading-relaxed">
              Our church started in 2015, when Senior Pastors James and Kate Aiton, out of a great love for the Filipino people, moved from Australia to the Philippines and started a Connect Group in their condominium unit. This small group eventually grew into a community gathering in a small function room, which turned into our first official Sunday service at a bar in Ortigas Center. It was very raw, but we felt something special, and more people started coming in, meeting Jesus, and finding family.
            </p>
            <p className="text-white leading-relaxed">
              In May 2018, in what was both a step of faith and miracle for our very new church, we opened our own facility inside the Shangri-La Plaza Mall. Our church saw significant growth during this time as we made space for God to continue to bring new people through our doors.
            </p>
            <p className="text-white leading-relaxed">
              We spent much of 2019 and the early part of 2020 praying for a new venue, as we did five services at maximum capacity every Sunday. Our prayers were answered—just very differently from how we imagined—when the COVID-19 pandemic hit the Philippines. Our Shangri-La facility was converted into a studio, and we worked hard to creatively bring the presence of God into people&apos;s homes every week. In November 2020, an opportunity we had been praying for opened up, and we began doing Sunday services at the Grand Ballroom of Crowne Plaza Hotel, a bigger venue where we&apos;re able to gather more people into the room to experience God&apos;s presence together.
            </p>
            <p className="text-white leading-relaxed font-medium italic">
              No matter where we find ourselves, our heart and our vision stays the same: to know God and make him famous.
            </p>
          </div>
        </motion.section>

        {/* Where We're Going Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-4xl p-8 md:p-10 flex flex-col text-left shadow-sm border border-gray-100"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-wide text-center">
            Where We&apos;re Going
          </h2>
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-white leading-relaxed">
              Our vision statement is simple: to know God and make him famous. Knowing God doesn&apos;t just mean knowing about God—it means having a real, intimate relationship with him. We desire to reach people across the Philippines and across the world with the good news of Jesus, helping them to encounter major cities in a real, authentic way. We&apos;re passionate about making God famous, and we believe we&apos;re called to plant churches across the Philippines, Asia, and the world—churches marked by passionate worship, inspired creativity, a hunger for God&apos;s presence, and the power of the Holy Spirit.
            </p>
          </div>
        </motion.section>

        {/* What We Value Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-4xl p-8 md:p-10 flex flex-col text-left shadow-sm border border-gray-100"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-wide text-center">
            What We Value
          </h2>
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-white leading-relaxed">
              <strong>PRESENCE</strong> – God&apos;s presence is our ultimate pursuit. In everything, we&apos;re hungry for God to pour out his presence. We know that a moment in God&apos;s presence can change a person&apos;s life, and—we&apos;re all about creating space for those moments. Our understanding of his presence and power is rooted in the bible—which we believe is relevant and true for today and the generations to come.
            </p>
            <p className="text-white leading-relaxed">
              <strong>PEOPLE</strong> – We&apos;re authentic, and accepting of all people. We want to be a genuinely welcoming church, and we value people over process. We call our people our “Favor Fam” because that&apos;s what we are—a family. It&apos;s not perfect, but it&apos;s special!
            </p>
            <p className="text-white leading-relaxed">
              <strong>PRAYER</strong> – We believe in the power of prayer. Everything we do is infused with passionate prayer and believing for God to do what he says in his word and move in power. We don&apos;t pray for victory, we pray from victory! And we pray according to the truths found in his Word.
            </p>
            <p className="text-white leading-relaxed">
              <strong>GENEROSITY</strong> – We&apos;re generous in everything. God has been so generous with us, so we live generous lives. It&apos;s not just about money, but every other aspect—our time, our words, our service. We live life with an open hand. Generosity isn&apos;t something we do, it&apos;s who we are.
            </p>
            <p className="text-white leading-relaxed">
              <strong>CREATIVITY</strong> – In the beginning, God created. The message stays the same, but the method is always changing. We&apos;re passionate about being creative in everything we do, and we believe God has anointed us to reach people through our excellence and creativity.
            </p>
          </div>
        </motion.section>
      </div>
      {children}
    </div>
  );
};