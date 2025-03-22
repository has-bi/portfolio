"use client";

import ChatWindow from "./components/ChatWindow";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Column - Text Content */}
        <div className="w-full md:w-1/2 md:pt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Portfolio Agent
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Trying to create an Agent for personal website, so user can asking
            anything that related to my works, but yaaa its still an prototype.
          </p>
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
