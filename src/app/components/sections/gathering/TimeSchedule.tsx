// File: components/TimeSchedule.tsx
import { motion } from "framer-motion";

const TimeSchedule = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="py-12 px-4 md:px-8 bg-black text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
          Time/Schedule
        </h2>
        <p className="text-center text-white mb-8 max-w-3xl mx-auto opacity-80">
          Our gathering is structured to allow for meaningful engagement while providing ample time for reflection and fellowship. Doors open at 9:30 AM for early arrivals. All times are in local time zone.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-6 border border-black">
            <h3 className="font-semibold text-black mb-3 text-lg">9:30 AM - Doors Open & Registration</h3>
            <p className="text-sm text-black mb-3">Arrive early to settle in, enjoy complimentary coffee and light refreshments, and connect with others. Our welcome team will be available to answer any questions and guide you through the day.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-black">
            <h3 className="font-semibold text-black mb-3 text-lg">10:00 AM - Welcome & Praise</h3>
            <p className="text-sm text-black mb-3">Opening worship and community greetings led by our pastoral team. Kick off the day with uplifting songs and a warm welcome message to set the tone for unity and expectation.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-black">
            <h3 className="font-semibold text-black mb-3 text-lg">10:30 AM - Keynote Message</h3>
            <p className="text-sm text-black mb-3">Inspirational talk on &quot;Unity in Faith&quot; by Pastor Elena Ramirez. Explore biblical principles and real-life applications for building stronger relationships within the body of Christ.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-black">
            <h3 className="font-semibold text-black mb-3 text-lg">11:15 AM - Testimonies</h3>
            <p className="text-sm text-black mb-3">Sharing stories of God&apos;s grace from members of our congregation. Hear how faith has overcome challenges and brought transformation to everyday lives.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-black">
            <h3 className="font-semibold text-black mb-3 text-lg">11:45 AM - Interactive Breakout Sessions</h3>
            <p className="text-sm text-black mb-3">Join small groups to discuss the morning&apos;s message, pray together, and brainstorm ways to apply unity in our community outreach efforts.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-black">
            <h3 className="font-semibold text-black mb-3 text-lg">12:30 PM - Fellowship Lunch</h3>
            <p className="text-sm text-black mb-3">Closing prayer and shared meal. Enjoy a catered lunch while networking and building lasting friendships. Childcare provided throughout.</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-white opacity-80 mb-4">Note: Schedule subject to minor adjustments. Please arrive on time to fully participate.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default TimeSchedule;