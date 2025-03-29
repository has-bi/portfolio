"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight, FiMenu, FiArrowRight } from "react-icons/fi";
import ChatWindow from "./components/ChatWindow";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past first viewport
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 flex justify-between items-center transition-colors duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        {/* Language Selector */}
        <div className="bg-white rounded-full border p-0.5 shadow-sm">
          <div className="flex text-sm">
            <button className="px-4 py-1 rounded-full bg-gray-800 text-white">
              ID
            </button>
            <button className="px-4 py-1 rounded-full text-gray-600">EN</button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`focus:outline-none ${
            scrolled ? "text-white" : "text-gray-800"
          }`}
        >
          <FiMenu size={24} />
        </button>
      </header>

      {/* First Section - Full Viewport */}
      <section className="h-screen flex flex-col items-center justify-center px-6 md:px-12 relative">
        {/* Profile Section */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Profile Image with Speech Bubble */}
          <div className="relative inline-block mb-8">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/images/profile.jpg"
                alt="Hasbi"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>

            {/* Speech Bubble */}
            <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-2 bg-white px-4 py-2 rounded-xl shadow-md">
              <div className="absolute left-0 bottom-0 transform -translate-x-2 translate-y-1 rotate-45 w-4 h-4 bg-white"></div>
              <p className="text-sm font-medium">Hi, I'm Hasbi 👋</p>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Building digital products and effective solutions
          </h1>

          <p className="text-gray-600 max-w-lg mx-auto mb-10">
            And my job is to turn your ideas into vibrant digital solutions that
            will make your brand stand out!
          </p>

          {/* CTA Button */}
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#CBFF4D] text-gray-800 px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
            >
              Contact me
              <FiArrowUpRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-gray-400">
            <p className="text-sm mb-2">Scroll to see my work</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19M12 19L19 12M12 19L5 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Second Section - Dark Background */}
      <section className="min-h-screen bg-black text-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left Side - Skills/Projects List */}
            <div className="md:w-2/5">
              <h2 className="text-3xl font-bold mb-10">What I Do</h2>

              {/* Numbered List */}
              <div className="space-y-12">
                <div className="flex">
                  <div className="mr-6">
                    <span className="text-[#CBFF4D] text-lg font-bold">01</span>
                    <div className="h-px w-32 bg-gray-700 mt-3 ml-0.5"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase">Web Design</h3>
                    <p className="text-gray-400 mt-2">
                      Creating beautiful and functional websites that engage
                      your audience.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-6">
                    <span className="text-[#CBFF4D] text-lg font-bold">02</span>
                    <div className="h-px w-32 bg-gray-700 mt-3 ml-0.5"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase">
                      UI/UX Design
                    </h3>
                    <p className="text-gray-400 mt-2">
                      Designing intuitive interfaces that provide exceptional
                      user experiences.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-6">
                    <span className="text-[#CBFF4D] text-lg font-bold">03</span>
                    <div className="h-px w-32 bg-gray-700 mt-3 ml-0.5"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase">Branding</h3>
                    <p className="text-gray-400 mt-2">
                      Building cohesive brand identities that make lasting
                      impressions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Projects List */}
              <div className="mt-20">
                <h2 className="text-3xl font-bold mb-10">Recent Projects</h2>

                <div className="space-y-6">
                  <Link href="/projects/strato" className="block">
                    <div className="group flex justify-between items-center p-4 rounded-lg hover:bg-gray-900 transition-colors">
                      <div>
                        <h3 className="text-xl font-bold">Strato Protocol</h3>
                        <p className="text-gray-400 mt-1">
                          Web3 Platform UI Design
                        </p>
                      </div>
                      <div className="bg-[#CBFF4D] p-2 rounded-full">
                        <FiArrowRight className="text-black" />
                      </div>
                    </div>
                  </Link>

                  <Link href="/projects/digital-agency" className="block">
                    <div className="group flex justify-between items-center p-4 rounded-lg hover:bg-gray-900 transition-colors">
                      <div>
                        <h3 className="text-xl font-bold">Digital Agency</h3>
                        <p className="text-gray-400 mt-1">
                          Full Website Development
                        </p>
                      </div>
                      <div className="bg-[#CBFF4D] p-2 rounded-full">
                        <FiArrowRight className="text-black" />
                      </div>
                    </div>
                  </Link>

                  <Link href="/projects/matacode" className="block">
                    <div className="group flex justify-between items-center p-4 rounded-lg hover:bg-gray-900 transition-colors">
                      <div>
                        <h3 className="text-xl font-bold">Matacode</h3>
                        <p className="text-gray-400 mt-1">
                          Branding and Identity
                        </p>
                      </div>
                      <div className="bg-[#CBFF4D] p-2 rounded-full">
                        <FiArrowRight className="text-black" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side - Chat Window */}
            <div className="md:w-3/5 mt-10 md:mt-0">
              <h2 className="text-3xl font-bold mb-8">Try My AI Assistant</h2>
              <div className="h-[600px]">
                <ChatWindow colorMode="dark" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Menu (Only visible when open) */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-gray-800"
            >
              ✕
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 text-xl font-medium">
            <Link href="/" className="text-gray-800">
              Home
            </Link>
            <Link href="/projects" className="text-gray-800">
              Projects
            </Link>
            <Link href="/blog" className="text-gray-800">
              Blog
            </Link>
            <Link href="/about" className="text-gray-800">
              About
            </Link>
            <Link href="/contact" className="text-gray-800">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
