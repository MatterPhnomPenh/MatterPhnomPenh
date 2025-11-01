// File: components/MapSection.tsx
import { motion } from "framer-motion";

const MapSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="py-12 px-4 md:px-8 bg-black text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
          Map
        </h2>
        <p className="text-center text-white mb-6 max-w-2xl mx-auto opacity-80">
          Grace Community Church is conveniently located in the heart of Cityville. We&apos;re excited to host you at our welcoming facility designed for fellowship and worship.
        </p>
        <div className="bg-white rounded-xl p-6 border border-black mb-6">
          <h3 className="font-semibold text-black mb-3 text-lg">Address:</h3>
          <p className="text-black mb-2">Grace Community Church</p>
          <p className="text-black mb-2">123 Faith Street</p>
          <p className="text-black mb-2">Cityville, CA 90210</p>
          <p className="text-black mb-4">Phone: (555) 123-4567 | Email: info@gracechurch.org</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-black mb-6">
          <h3 className="font-semibold text-black mb-3 text-lg">Directions & Parking:</h3>
          <ul className="text-black space-y-2 mb-4">
            <li>• From Highway 101: Exit at Faith Blvd, head north for 2 miles, turn left onto Faith Street. Church on your right.</li>
            <li>• Public Transit: Bus lines 45 and 78 stop directly at our corner every 15 minutes.</li>
            <li>• Parking: Free lot with 200 spaces available. Overflow parking at adjacent community center with shuttle service.</li>
            <li>• Accessibility: Wheelchair ramps and reserved spots at main entrance. Hearing loop system in sanctuary.</li>
          </ul>
        </div>
        <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md border border-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.835434509974!2d-122.08424968469148!3d37.42199977982588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8d%3A0x6c296c66619367e0!2sGrace%20Community%20Church!5e0!3m2!1sen!2sus!4v1630000000000"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%)' }} // CSS filter for B&W
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Church Location Map"
          />
        </div>
        <div className="mt-6 text-center">
          <p className="text-white opacity-80">Not sure how to get here? Call us for personalized directions.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default MapSection;