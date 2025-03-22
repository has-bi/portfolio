"use client";

import { useRef, useState } from "react";
import { FiSend, FiMessageCircle } from "react-icons/fi";

const ChatWindow = () => {
  // Data percakapan yang telah diprogram
  const scriptedMessages = [
    {
      id: 1,
      sender: "bot",
      content:
        "Hi there! I'm Hasbi's digital assistant. How can I help you today?",
      delay: 1000,
    },
    {
      id: 2,
      sender: "user",
      content: "Can you tell me more about Hasbi's skills?",
      delay: 2000,
    },
    {
      id: 3,
      sender: "bot",
      content:
        "Absolutely! Hasbi is an AI Engineer who specializes in Next.js, Tailwind CSS, and Python. He builds intelligent web applications and has experience in machine learning models deployment.",
      delay: 3000,
    },
    {
      id: 4,
      sender: "user",
      content: "That's impressive! Has he worked on any cool projects?",
      delay: 2000,
    },
    {
      id: 5,
      sender: "bot",
      content:
        "Yes! One of his notable projects is an AI-powered content recommendation system for blogs. He is also built custom chatbots and data visualization tools. You can check out his projects section for more details!",
      delay: 3000,
    },
  ];

  // State untuk menyimpang pesan
  const [messages, setMessages] = useState([]);
  // State untuk indikator mengetik
  const [isTyping, setIsTyping] = useState(false);
  // State untuk mengontrol apakah simulasi berjalan
  const [isStarted, setIsStarted] = useState(false);
  //   Reference untuk scroll contained
  const messagesEndRef = useRef(null);

  const scrollBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  //   Fungsi untuk memulai simulasi chat
  const startSimulation = () => {
    // Kalau udah mulai, ga bakal ngulang
    if (isStarted) return;

    setIsStarted(true);
    // Mulai dari pesan pertama
    playNextMessage(0);
  };

  //   Fungsi untuk menampilkan pesan berikutnya
  const playNextMessage = (index) => {
    // Kalau index nya udah lebih dari length script nya maka selesai
    if (index >= scriptedMessages.lenght) {
      return;
    }

    const currentMessage = scriptedMessages[index];

    // Jika pesan dari bot, tampilkan indikator typing dulu
    if (currentMessage.sender === "bot") {
      setIsTyping(true);

      // Tampilkan indikator typing selama delay tertentu
      setTimeout(() => {
        setIsTyping(false);
        // Tambahkan pesan ke daftar pesan
        setMessages((prev) => [...prev, currentMessage]);

        // Prepare pesan berikutnya setelah delay
        setTimeout(() => {
          playNextMessage(index + 1);
        }, 1000);
      }, currentMessage.delay);
    } else {
      // Jika pesan dari user, tampilkan langsung tanpa typing
      setTimeout(() => {
        setMessages((prev) => [...prev, currentMessage]);

        // Prepare pesan berikutnya
        setTimeout(() => {
          playNextMessage(index + 1);
        }, 500);
      }, currentMessage.delay);
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-lg bg-white h-[500px] flex flex-col">
      {/* Header Chat */}
      <div className="border-b p-3 bg-blue-500 text-white rounded-t-lg">
        <div className="flex items-center">
          <FiMessageCircle className="mr-2" size={20} />
          <div>
            <h3 className="font-medium">Chat with Hasbi's Assistant</h3>
            <p className="text-xs opacity-80">Ask me anything about Hasbi</p>
          </div>
        </div>
      </div>
      {/* Chat Container */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {/* Tombol untuk memulai simulasi */}
        {!isStarted && messages.length === 0 && (
          <div className="flex justify-center items-center h-full">
            <button
              onClick={startSimulation}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Start Chat Demo
            </button>
          </div>
        )}

        {/* Messages */}
        <div className="flex flex-col">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`max-w-[80%] p-3 rounded-lg mb-3 ${
                message.sender === "user"
                  ? "bg-blue-500 text-white self-end rounded-br-none"
                  : "bg-gray-200 text-gray-800 self-start rounded-bl-none"
              }`}
            >
              {message.content}
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="max-w-[80%] p-3 rounded-lg mb-3 bg-gray-200 text-gray-800 self-start rounded-bl-none">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-300"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Form */}
      <div className="border-t p-3 flex">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          disabled={!isStarted}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 disabled:bg-gray-300"
          disabled={!isStarted}
        >
          <FiSend />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
