"use client";

import { FiArrowUpRight } from "react-icons/fi";
import ProfileBubble from "@/components/molecules/ProfileBubble";
import Button from "@/components/atoms/Button";
import ScrollIndicator from "@/components/atoms/ScrollIndicator";

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col items-center justify-center px-6 md:px-12 relative">
      {/* Profile Section */}
      <div className="text-center max-w-3xl mx-auto">
        {/* Profile Image with Speech Bubble */}
        <ProfileBubble
          imageSrc="/images/avatar.png"
          altText="Hasbi"
          bubbleText="Hi, I'm Hasbi 👋"
        />

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 mt-8">
          Building digital products and effective solutions
        </h1>

        <p className="text-gray-600 max-w-lg mx-auto mb-10">
          And my job is to turn your ideas into vibrant digital solutions that
          will make your brand stand out!
        </p>

        {/* CTA Button */}
        <Button
          href="/contact"
          variant="primary"
          icon={<FiArrowUpRight size={18} />}
        >
          Contact me
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ScrollIndicator text="Scroll to see my work" />
      </div>
    </section>
  );
}
