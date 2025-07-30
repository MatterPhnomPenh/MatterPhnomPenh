"use client";
import Link from "next/link";

interface ButtonTextSectionProps {
  href: string;
  heading: string;
  buttonText: string;
}

export default function ButtonTextSection({
  href,
  heading,
  buttonText,
}: ButtonTextSectionProps) {
  return (
    <section className="py-10 md:py-24 bg-transparent relative overflow-hidden px-8">
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-[75%] text-left">
            <h3 className="text-l md:text-3xl text-black mb-6 text-justify">
              {heading}
            </h3>
            <Link href={href}>
              <button className="bg-[#2330ff] border border-[#2330ff] text-white px-6 py-3 text-lg rounded-full font-semibold hover:bg-transparent hover:text-blue-900 transition">
                {buttonText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
