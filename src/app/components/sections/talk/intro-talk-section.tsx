"use client";
import { ChevronDown } from 'lucide-react';

export default function BlogIntroSection() {
  return (
    <section
      id="blog-intro"
      className="relative w-full bg-white py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 text-left overflow-hidden"
    >
      <div className="mx-auto px-4 relative z-10">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-sans font-bold text-[#2330ff] leading-tight">
            Welcome to Our Talk
          </h1>
          <p className="text-xl md:text-2xl font-sans text-gray-800 text-justify leading-relaxed">
            This is a space where your voice counts, your presence matters, 
            and you are always seen. In a world that moves fast, we slow down 
            to remind you that you truly matter here.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover thought-provoking articles, inspiring stories, and practical 
            insights that matter to you. Join our community of readers who value 
            meaningful content and authentic conversations.
          </p>
        </div>
        
        <div className="mt-12 flex items-center space-x-4">
          <a
            href="#details-talk"
            className="inline-flex items-center text-[#2330ff] no-underline hover:text-[#1a22cc] transition-colors font-medium"
          >
            Explore Latest Posts
            <ChevronDown className="w-5 h-5 ml-2 animate-bounce" />
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="#subscribe"
            className="text-gray-600 no-underline hover:text-[#2330ff] transition-colors"
          >
            Subscribe for Updates
          </a>
        </div>
      </div>
    </section>
  );
}