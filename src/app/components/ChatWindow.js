"use client";

import { useState, useRef, useEffect } from "react";
import { FiSend, FiMessageCircle, FiUser, FiRefreshCw } from "react-icons/fi";
import dynamic from "next/dynamic";

// Dynamically import TypeAnimation with no SSR
const TypeAnimation = dynamic(
  () => import("react-type-animation").then((mod) => mod.TypeAnimation),
  { ssr: false }
);

const ChatWindow = ({ colorMode = "light", className = "" }) => {
  // Apply theme class based on colorMode
  const themeClass = colorMode === "dark" ? "dark-theme" : "";

  // State for client-side rendering
  const [mounted, setMounted] = useState(false);

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
  const chatContainerRef = useRef(null);

  // Check for client-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  // More gentle scroll behavior
  const scrollToNewMessage = () => {
    if (!mounted) return;

    if (messagesEndRef.current && chatContainerRef.current) {
      // Calculate how much to scroll
      const containerHeight = chatContainerRef.current.clientHeight;
      const scrollPosition = chatContainerRef.current.scrollTop;
      const scrollHeight = chatContainerRef.current.scrollHeight;

      // If we're already near the bottom or the message would be partially visible
      if (
        scrollHeight - scrollPosition - containerHeight <
        containerHeight / 2
      ) {
        // Scroll enough to see the new message plus a bit more
        chatContainerRef.current.scrollTo({
          top: scrollHeight - containerHeight - 20, // 20px buffer
          behavior: "smooth",
        });
      }
    }
  };

  // Auto-scroll when messages change
  useEffect(() => {
    if (!mounted) return;

    if (messages.length > 0) {
      scrollToNewMessage();
    }
  }, [messages, mounted]);

  // Function untuk memulai simulasi chat
  const startSimulation = () => {
    if (isStarted || !mounted) return;

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
    if (index >= scriptedMessages.length || !mounted) {
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
      }, currentMessage.delay + currentMessage.content.length * 10); // Shortened typing time for demo
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

  // If not mounted yet (server-side), render a simple placeholder
  if (!mounted) {
    return (
      <div
        className={`rounded-lg shadow-xl overflow-hidden h-full flex flex-col border ${className} ${themeClass}`}
        style={{
          backgroundColor: "var(--color-card-bg)",
          borderColor: "var(--color-border)",
        }}
      >
        <div
          className="p-4 border-b"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="flex items-center">
            <div className="p-2 rounded-full mr-3 flex items-center justify-center shadow-lg bg-gradient-purple">
              <FiMessageCircle size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Hasbi's AI Assistant</h3>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <p>Loading chat...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-lg shadow-xl overflow-hidden h-full flex flex-col border ${className} ${themeClass}`}
      style={{
        backgroundColor: "var(--color-card-bg)",
        borderColor: "var(--color-border)",
      }}
    >
      {/* Header Chat */}
      <div
        className="p-3 border-b"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div
              className={`p-2 rounded-full mr-3 flex items-center justify-center shadow-md ${
                colorMode === "dark" ? "bg-[#CBFF4D]" : "bg-gradient-purple"
              }`}
            >
              <FiMessageCircle
                size={16}
                className={colorMode === "dark" ? "text-black" : "text-white"}
              />
            </div>
            <div>
              <h3 className="font-semibold">Hasbi's AI Assistant</h3>
            </div>
          </div>

          {/* Reset button */}
          {isStarted && (
            <button
              onClick={resetSimulation}
              className="p-2 rounded-full transition-colors"
              style={{
                color: "var(--color-text)",
                backgroundColor:
                  colorMode === "dark"
                    ? "rgba(203, 255, 77, 0.2)"
                    : "rgba(165, 148, 249, 0.2)",
              }}
              title="Restart chat"
            >
              <FiRefreshCw size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 p-4 overflow-y-auto" ref={chatContainerRef}>
        {/* Tombol untuk memulai simulasi */}
        {!isStarted && messages.length === 0 && (
          <div className="flex flex-col justify-center items-center h-full">
            <div className="text-center mb-6">
              <div
                className={`p-3 rounded-full inline-block mb-4 shadow-lg ${
                  colorMode === "dark" ? "bg-[#CBFF4D]" : "bg-gradient-purple"
                }`}
              >
                <FiMessageCircle
                  className={colorMode === "dark" ? "text-black" : "text-white"}
                  size={20}
                />
              </div>
              <h2 className="text-lg font-semibold">Ask Hasbi's Assistant</h2>
              <p className="mt-1 opacity-70 text-sm">
                Click to see a demo conversation
              </p>
            </div>
            <button
              onClick={startSimulation}
              className={`px-5 py-2 rounded-full hover:opacity-90 transition-opacity shadow-lg flex items-center ${
                colorMode === "dark"
                  ? "bg-[#CBFF4D] text-black"
                  : "bg-gradient-purple text-white"
              }`}
            >
              <span>Start Demo</span>
              <FiSend className="ml-2" size={14} />
            </button>
          </div>
        )}

        {/* Messages */}
        <div className="flex flex-col gap-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.sender === "bot" && (
                <div
                  className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center mr-2 flex-shrink-0 shadow-md ${
                    colorMode === "dark" ? "bg-[#CBFF4D]" : "bg-gradient-purple"
                  }`}
                >
                  <FiMessageCircle
                    size={14}
                    className={
                      colorMode === "dark" ? "text-black" : "text-white"
                    }
                  />
                </div>
              )}

              <div
                className={`max-w-[80%] p-2 md:p-3 rounded-xl text-sm ${
                  message.sender === "user"
                    ? "rounded-tr-none"
                    : "rounded-tl-none"
                }`}
                style={{
                  backgroundColor:
                    message.sender === "user"
                      ? "var(--color-user-bubble)"
                      : "var(--color-bot-bubble)",
                  color:
                    message.sender === "user" ? "white" : "var(--color-text)",
                }}
              >
                {message.content}
              </div>

              {message.sender === "user" && (
                <div
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center ml-2 flex-shrink-0 shadow-md"
                  style={{ backgroundColor: "var(--color-user-bubble)" }}
                >
                  <FiUser size={14} className="text-white" />
                </div>
              )}
            </div>
          ))}

          {/* Typing indicator with TypeAnimation */}
          {isTyping && (
            <div className="flex items-start">
              <div
                className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center mr-2 flex-shrink-0 shadow-md ${
                  colorMode === "dark" ? "bg-[#CBFF4D]" : "bg-gradient-purple"
                }`}
              >
                <FiMessageCircle
                  size={14}
                  className={colorMode === "dark" ? "text-black" : "text-white"}
                />
              </div>
              <div
                className="p-2 md:p-3 rounded-xl rounded-tl-none max-w-[80%] text-sm"
                style={{
                  backgroundColor: "var(--color-bot-bubble)",
                  color: "var(--color-text)",
                }}
              >
                {currentTypingMessage ? (
                  <TypeAnimation
                    sequence={[currentTypingMessage]}
                    wrapper="span"
                    speed={90}
                    cursor={true}
                  />
                ) : (
                  <div className="flex gap-2">
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                  </div>
                )}
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Form */}
      <div
        className="p-3 border-t"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div
          className="flex items-center rounded-lg px-3 py-2 focus-within:ring-2"
          style={{
            backgroundColor: "var(--color-input-bg)",
            color: "var(--color-text)",
          }}
        >
          <input
            type="text"
            placeholder="Ask anything..."
            className="flex-1 bg-transparent outline-none text-sm"
            style={{ color: "var(--color-text)" }}
            disabled={!isStarted}
          />
          <button
            className={`p-2 rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed ml-2 shadow-sm ${
              colorMode === "dark"
                ? "bg-[#CBFF4D] text-black"
                : "bg-gradient-purple text-white"
            }`}
            disabled={!isStarted}
          >
            <FiSend size={14} />
          </button>
        </div>
        <div className="text-xs text-center mt-1 opacity-70">
          {isStarted ? "This is a demo chat - input is disabled" : ""}
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
