"use client";

import { MapPin } from "lucide-react";

export default function MatterCampSection() {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-screen bg-white text-black overflow-hidden py-32">
        <div
        className="relative w-full h-[800px] bg-cover bg-center overflow-hidden flex items-center justify-center text-center"
        style={{
            backgroundImage: "url('/images/camp.jpg')", // Rename your uploaded image to `matter-camp.jpg` in /public
        }}
        >
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="relative z-10 max-w-3xl text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Camp<sup className="text-2xl align-super">M</sup></h2>
            <p className="text-lg md:text-xl font-light mb-8">
            Reconnect with nature and creativity in a weekend of campfires, ideas, and community under the stars.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="bg-white border border-white text-black uppercase px-6 py-3 text-lg rounded-full font-semibold hover:bg-transparent hover:text-white transition">
                Book Now
            </button>
            <button className="border border-white text-white uppercase px-6 py-3 text-lg rounded-full font-semibold flex items-center gap-2 hover:bg-white hover:text-black transition">
                <MapPin className="w-5 h-5" />
                View Camp Map
            </button>
            </div>
        </div>
        </div>
    </section>
  );
}

