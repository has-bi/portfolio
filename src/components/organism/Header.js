"use client";

import { FiMenu } from "react-icons/fi";
import LanguageSelector from "@/components/atoms/LanguageSelector";

export default function Header({ scrolled, menuOpen, setMenuOpen }) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 flex justify-between items-center transition-colors duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      {/* Language Selector */}
      <LanguageSelector />

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`focus:outline-none ${
          scrolled ? "text-white" : "text-gray-800"
        }`}
        aria-label="Toggle menu"
      >
        <FiMenu size={24} />
      </button>
    </header>
  );
}
