"use client";

import ChatWindow from "./components/ChatWindow";
import Card from "./components/Card";

export default function Home() {
  const cards = [
    {
      title: "Hasbi Hassadiqin",
      description: "Hi! I'm an AI Engineer",
      imageSrc: "",
      bgGradient: "from-blue-500 to-indigo-900",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Column - Text Content */}
        <div className="w-full md:grid-cols-2">
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
        <div className="w-full md:w-1/2">
          <ChatWindow />
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
