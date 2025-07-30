
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Connect() {
  const links = [
    { label: "THE NEWSLETTER", href: "#footer" },
    { label: "WORSHIP WITH MATTER", href: "/" },
    { label: "JOIN A TEAM", href: "https://t.me/phnompenhmatters" },
    { label: "GIVE NOW", href: "/" },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-10">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Three Stacked Vertical Images */}
        <div className="grid grid-cols-3 gap-4 h-[500px]">
          <div className="relative w-full h-full overflow-hidden rounded">
            <Image src="/pray1.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="relative w-full h-full overflow-hidden rounded">
            <Image src="/pray2.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="relative w-full h-full overflow-hidden rounded">
            <Image src="/pray3.jpg" alt="" fill className="object-cover" />
          </div>
        </div>

        {/* Right: Text Content + Buttons */}
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-[#2330ff] leading-tight">
            YOU WERE NEVER MEANT TO DO LIFE ALONE
          </h2>
          <p className="text-gray-900 font-light text-lg">
            Every Sunday at 3 PM, we gather for a special event to share and learn about God together. Everyone is welcome!
          </p>
          <p className="text-gray-900 font-light text-lg">
            On Fridays at 7 PM, our &quot;Home Team&quot; meets to grow, support, and build strong connections. We&apos;d love for you to be a part of it.
          </p>

          <div className="space-y-4">
            {links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="block w-full text-center border border-[#2330ff] py-3 px-6 text-[#2330ff] text-sm font-light hover:bg-[#2330ff] hover:text-white transition"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


