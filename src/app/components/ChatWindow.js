"use client";

import { useState, useRef } from "react";
import { FiSend, FiMessageCircle, FiUser, FiRefreshCw } from "react-icons/fi";

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

  // State untuk menyimpan pesan
  const [messages, setMessages] = useState([]);
  // State untuk indicator typing
  const [isTyping, setIsTyping] = useState(false);
  // State untuk mengontrol jika simulasi sudah dimulai
  const [isStarted, setIsStarted] = useState(false);
  // Reference untuk scroll container
  const messagesEndRef = useRef(null);

  // Function untuk scroll ke pesan terbaru
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Function untuk memulai simulasi chat
  const startSimulation = () => {
    if (isStarted) return;

    setIsStarted(true);
    playNextMessage(0);
  };

  // Function untuk reset simulasi
  const resetSimulation = () => {
    setMessages([]);
    setIsTyping(false);
    setIsStarted(false);
  };

  // Function untuk menampilkan pesan berikutnya
  const playNextMessage = (index) => {
    if (index >= scriptedMessages.length) {
      return; // Selesai jika semua pesan sudah ditampilkan
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
        scrollToBottom();

        // Siapkan pesan berikutnya setelah delay
        setTimeout(() => {
          playNextMessage(index + 1);
        }, 1000); // Delay antar pesan
      }, currentMessage.delay);
    } else {
      // Jika pesan dari user, tampilkan langsung tanpa typing
      setTimeout(() => {
        setMessages((prev) => [...prev, currentMessage]);
        scrollToBottom();

        // Siapkan pesan berikutnya
        setTimeout(() => {
          playNextMessage(index + 1);
        }, 500); // Delay lebih pendek untuk pesan user
      }, currentMessage.delay);
    }
  };

  return (
    <div className="border-1 border-gray-200 rounded-xl shadow-xl bg-white h-[600px] flex flex-col overflow-hidden">
      {/* Header Chat */}
      <div className="border-b-1 p-4 bg-blue-600 text-white rounded-t-xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-white/20 p-2 rounded-full mr-3">
              <FiMessageCircle size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Hasbi AI Assistant</h3>
              <p className="text-xs text-blue-100">
                Available 24/7 to help you
              </p>
            </div>
          </div>

          {/* Reset button */}
          {isStarted && (
            <button
              onClick={resetSimulation}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              title="Restart chat"
            >
              <FiRefreshCw size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 p-4 overflow-y-auto bg-white">
        {/* Tombol untuk memulai simulasi */}
        {!isStarted && messages.length === 0 && (
          <div className="flex flex-col justify-center items-center h-full">
            <div className="text-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                <FiMessageCircle className="text-blue-500" size={32} />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Welcome to the Chat
              </h2>
              <p className="text-gray-600 mt-1">
                See how Hasbi AI assistant works
              </p>
            </div>
            <button
              onClick={startSimulation}
              className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg flex items-center"
            >
              <span>Start Demo</span>
              <FiSend className="ml-2" size={16} />
            </button>
          </div>
        )}

        {/* Messages */}
        <div className="flex flex-col gap-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.sender === "bot" && (
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mr-2">
                  <FiMessageCircle size={16} />
                </div>
              )}

              <div
                className={`max-w-[70%] p-3 rounded-2xl ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white rounded-tr-none"
                    : "bg-white border-1 border-gray-200 text-gray-800 rounded-tl-none shadow-sm"
                }`}
              >
                {message.content}
              </div>

              {message.sender === "user" && (
                <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center ml-2">
                  <FiUser size={16} />
                </div>
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mr-2">
                <FiMessageCircle size={16} />
              </div>
              <div className="bg-white border-1 border-gray-200 p-4 rounded-2xl rounded-tl-none shadow-sm">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Form */}
      <div className="border-t-1 p-3 bg-white shadow-inner">
        <div className="flex items-center rounded-full border-1 border-gray-300 px-3 py-1 focus-within:ring-2 focus-within:ring-blue-300 focus-within:border-blue-500">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-2 py-2 outline-none text-gray-700"
            disabled={!isStarted}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed ml-2 shadow-sm"
            disabled={!isStarted}
          >
            <FiSend size={16} />
          </button>
        </div>
        <div className="text-xs text-center text-gray-500 mt-2">
          {isStarted
            ? "This is a demo chat - input is disabled"
            : 'Click "Start Demo" to begin the conversation'}
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
