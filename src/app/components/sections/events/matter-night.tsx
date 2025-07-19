
"use client";

export default function MatterNightSection() {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-screen bg-white text-black overflow-hidden">
      {/* Text Content */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12 md:p-16">
        <div className="text-center max-w-xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
            Night<sup className="text-2xl align-super">M</sup> at Origins Studios.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
            At R. O&apos;Malley, we specialize in creating memorable experiences for weddings, corporate events, and grand celebrations. Our venue boasts exquisite décor, state-of-the-art catering, and breathtaking views, making it the ideal setting for any occasion. We provide comprehensive packages that include audio-visual equipment, expert event coordination, and on-site planning support.
          </p>
          <button className="bg-transparent border border-blue-900 text-blue-900 uppercase px-6 py-3 text-sm sm:text-lg rounded-full font-semibold hover:bg-blue-900 hover:text-white transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="w-full md:w-1/2 h-64 sm:h-96 md:h-[800px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/matter-night.png')",
        }}
      />
    </section>
  );
}
