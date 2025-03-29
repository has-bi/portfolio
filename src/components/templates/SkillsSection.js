"use client";

import SkillsList from "../organism/SkillsList";
import ChatWindow from "../molecules/ChatWindow";
import ScrollIndicator from "../atoms/ScrollIndicator";

export default function SkillsSection() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Side - Skills List */}
          <div className="md:w-2/5">
            <SkillsList />
          </div>

          {/* Right Side - Chat Window */}
          <div className="md:w-3/5 mt-10 md:mt-0">
            <h2 className="text-3xl font-bold mb-8">Try My AI Assistant</h2>
            <div className="h-[600px]">
              <ChatWindow colorMode="dark" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator for Third Section */}
        <div className="flex justify-center mt-12">
          <ScrollIndicator text="View my projects" className="text-gray-500" />
        </div>
      </div>
    </section>
  );
}
