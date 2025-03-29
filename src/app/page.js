"use client";

import ChatWindow from "./components/ChatWindow";
import Card from "./components/Card";
import Image from "next/image";

export default function Home() {
  const cards = [
    {
      title: "Hasbi Hassadiqin",
      description: "Hi! I'm an AI Engineer",
      imageSrc: "",
      bgGradient: "from-blue-500 to-indigo-900",
    },
  ];

  const 
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col text-gray-800">
      {/* Section 1: Hero Section (Full Screen) */}
      <div
        className="h-screen relative backdrop-blur-sm"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Navigation */}
        <header className="p-6 flex justify-between items-center">
          <div className="flex items-center">
            <span className="font-bold text-lg">Hello!</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-indigo-600">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600">
                  BLOG
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600">
                  <button className="p-2 rounded-full bg-gray-800">🌙</button>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600">
                  <button className="p-2 rounded-full bg-gray-800">🌐</button>
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-6xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-800">
                Hasbi
              </span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-800">
                Hassadiqin
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              AI Engnineer based in Indonesia
            </p>
            <div className="flex justify-center space-x-4"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pb-10 flex flex-col items-center animate-bounce">
          <div className="w-2 h-2 bg-indigo-600 rounded-full mb-2"></div>
          <p className="text-sm text-gray-400">Scroll for more</p>
        </div>
      </div>

      {/* Main Content */}
      <main
        className={`container mx-auto px-4 py-12 transition-all duration-700 ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Column - Text Content */}
          <div className="w-full md:w-1/3 space-y-8">
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                imageSrc={card.imageSrc}
                bgGradient={card.bgGradient}
              />
            ))}
          </div>

          {/* Right Column - Chat Window */}
          <div className="w-full md:w-2/3">
            <ChatWindow />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-6 border-t-1">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Hasbi.dev - All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
