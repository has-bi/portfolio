"use client";

import { useState, useEffect } from "react";
import Header from "@/components/organism/Header";
import HeroSection from "@/components/templates/HeroSection";
import SkillsSection from "@/components/templates/SkillsSection";
import ProjectsSection from "@/components/templates/ProjectsSection";
import MobileMenu from "@/components/molecules/MobileMenu";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <Header
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Main Sections */}
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
      </main>

      {/* Mobile Menu Overlay */}
      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </div>
  );
}
