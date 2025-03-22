"use client";

import ChatWindow from "./components/ChatWindow";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800">
            <span className="text-blue-500">Hasbi</span>.dev
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Column - Text Content */}
        <div className="w-full md:w-1/2 md:pt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Interactive AI Chat Demo
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Experience how a conversation with Hasbi AI assistant works. This
            demo shows an automated chat sequence with realistic typing
            indicators and timing.
          </p>
          <div className="bg-white p-6 rounded-xl shadow-md border-1 border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-3">
              Features Demonstrated:
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <span className="text-gray-700">
                  Realistic chat interface with bubbles
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <span className="text-gray-700">Natural typing indicators</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <span className="text-gray-700">Timed message sequences</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <span className="text-gray-700">
                  Responsive design for all devices
                </span>
              </li>
            </ul>
          </div>
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
