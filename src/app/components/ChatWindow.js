"use client";

import { useState, useRef, useEffect } from "react";
import { FiSend, FiMessageCircle, FiUser, FiRefreshCw } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

const ChatWindow = () => {
  // Data percakapan yang telah diprogram
  const scriptedMessages = [
    {
      id: 1,
      sender: "bot",
      content:
        "Hai! Gue asisten digital-nya Hasbi nih. Mau tanya-tanya soal coding atau gaming? Siap bantuin~",
      delay: 1000,
    },
    {
      id: 2,
      sender: "user",
      content: "Main game apa aja sih?",
      delay: 2000,
    },
    {
      id: 3,
      sender: "bot",
      content:
        "Hasbi tuh player League of Legends sejak 2015 bro! Udah lama banget ya main LoL, tapi jujur aja masih stuck di Bronze sampe sekarang wkwkwk. Selalu main solo queue sih, jadinya gitu deh nasibnya...",
      delay: 3000,
    },
    {
      id: 4,
      sender: "user",
      content: "Main role apa biasanya? Champion favorit?",
      delay: 2000,
    },
    {
      id: 5,
      sender: "bot",
      content:
        "Hasbi main role ADC sih, terutama Kai'Sa! Emang champion favoritnya banget. Kadang juga ngambil role Jungle kalau lagi bosen. Btw, kalau ada yang mau duo rank bareng, Hasbi open banget kok buat nge-party. Siapa tau bisa naik ke Silver bareng-bareng, kan lebih seru main rame-rame daripada sendirian terus wkwkwk!",
      delay: 3000,
    },
    {
      id: 6,
      sender: "user",
      content: "Kenapa suka banget sama Kai'Sa?",
      delay: 2000,
    },
    {
      id: 7,
      sender: "bot",
      content:
        "Kai'Sa tuh champion yang versatile banget menurut Hasbi. Designnya keren, damage-nya gede, plus mobility-nya oke. Dia bisa adaptasi ke banyak situasi, bisa build AP atau AD tergantung match-up. Plus lore-nya juga menarik sih, ceritanya dia survive di Void. Hasbi suka banget collectionin skin Kai'Sa juga, favorit dia K/DA All Out sama Lagoon Dragon! Udah pernah coba main Kai'Sa juga?",
      delay: 3500,
    },
  ];

  // State untuk menyimpan pesan
  const [messages, setMessages] = useState([]);
  // State untuk indicator typing
  const [isTyping, setIsTyping] = useState(false);
  // State untuk pesan yang sedang diketik
  const [currentTypingMessage, setCurrentTypingMessage] = useState("");
  // State untuk mengontrol jika simulasi sudah dimulai
  const [isStarted, setIsStarted] = useState(false);
  // Reference untuk scroll container
  const messagesEndRef = useRef(null);

  // Function untuk scroll ke pesan terbaru
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages]);

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
    setCurrentTypingMessage("");
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
      setCurrentTypingMessage(currentMessage.content);

      // Tampilkan selama delay tertentu + waktu untuk typing animation
      setTimeout(() => {
        setIsTyping(false);
        setCurrentTypingMessage("");
        // Tambahkan pesan ke daftar pesan
        setMessages((prev) => [...prev, currentMessage]);

        // Siapkan pesan berikutnya setelah delay
        setTimeout(() => {
          playNextMessage(index + 1);
        }, 500); // Delay antar pesan
      }, currentMessage.delay + currentMessage.content.length * 20); // Waktu typing berdasarkan panjang teks
    } else {
      // Jika pesan dari user, tampilkan langsung tanpa typing
      setTimeout(() => {
        setMessages((prev) => [...prev, currentMessage]);

        // Siapkan pesan berikutnya
        setTimeout(() => {
          playNextMessage(index + 1);
        }, 500); // Delay lebih pendek untuk pesan user
      }, currentMessage.delay);
    }
  };

  return (
    <div className="bg-[#E8E8E8] rounded-lg shadow-xl overflow-hidden h-[600px] flex flex-col">
      {/* Header Chat */}
      <div className="p-4 bg-[#E8E8E8] text-gray-800">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-[#DA7757] to-[#ac573a] p-2 rounded-full mr-3 flex items-center justify-center shadow-lg">
              <FiMessageCircle size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Model: Claude-0 </h3>
            </div>
          </div>

          {/* Reset button */}
          {isStarted && (
            <button
              onClick={resetSimulation}
              className="p-2 rounded-full hover:bg-white transition-colors"
              title="Restart chat"
            >
              <FiRefreshCw size={18} className="text-[#DA7757]" />
            </button>
          )}
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 p-4 overflow-y-auto bg-[#E8E8E8] text-gray-800">
        {/* Tombol untuk memulai simulasi */}
        {!isStarted && messages.length === 0 && (
          <div className="flex flex-col justify-center items-center h-full">
            <div className="text-center mb-6">
              <div className="bg-gradient-to-r from-[#DA7757] to-[#ac573a] p-4 rounded-full inline-block mb-4 shadow-lg">
                <FiMessageCircle className="text-white" size={32} />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Ask Hasbi's Assistant
              </h2>
              <p className="text-gray-600 mt-1">
                See how a conversation with Hasbi's AI works
              </p>
            </div>
            <button
              onClick={startSimulation}
              className="px-6 py-3 bg-gradient-to-r from-[#DA7757] to-[#ac573a] text-white rounded-full hover:opacity-90 transition-opacity shadow-lg flex items-center"
            >
              <span>Start Demo</span>
              <FiSend className="ml-2" size={16} />
            </button>
          </div>
        )}

        {/* Messages */}
        <div className="flex flex-col gap-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "items-start" : "items-start"
              }`}
            >
              {message.sender === "bot" && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#DA7757] to-[#ac573a] flex items-center justify-center mr-3 flex-shrink-0 shadow-md">
                  <FiMessageCircle size={16} className="text-white" />
                </div>
              )}

              {message.sender === "user" && (
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3 flex-shrink-0">
                  <FiUser size={16} className="text-gray-800" />
                </div>
              )}

              <div
                className={`max-w-[90%] py-2 ${
                  message.sender === "user" ? "text-gray-800" : "text-gray-800"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}

          {/* Typing indicator with TypeAnimation */}
          {isTyping && (
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#DA7757] to-[#ac573a] flex items-center justify-center mr-3 flex-shrink-0 shadow-md">
                <FiMessageCircle size={16} className="text-white" />
              </div>
              <div className="py-2 text-gray-800 max-w-[90%]">
                <TypeAnimation
                  sequence={[currentTypingMessage]}
                  wrapper="span"
                  speed={80}
                  cursor={true}
                />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Form */}
      <div className="p-4 bg-[#E8E8E8]">
        <div className="flex items-center rounded-lg bg-white px-4 py-2 focus-within:ring-2 focus-within:ring-[#DA7757]">
          <input
            type="text"
            placeholder="What is an AI Engineer?"
            className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400"
            disabled={!isStarted}
          />
          <button
            className="bg-gradient-to-r from-[#DA7757] to-[#ac573a] text-white p-2 rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed ml-2"
            disabled={!isStarted}
          >
            <FiSend size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
