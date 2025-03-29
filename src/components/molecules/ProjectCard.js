"use client";

import { useState } from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectCard({ title, description, imageSrc, link }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={link} className="block">
      <div
        className="bg-[#121212] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Card Content */}
        <div className="p-6 pb-4 relative">
          {/* Icon Container - 3D effect */}
          <div className="rounded-xl bg-[#1A1A1A] p-2 inline-block mb-4 shadow-lg relative">
            {/* Project Image */}
            <div
              className="w-12 h-12 rounded-lg overflow-hidden relative"
              style={{
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Corner Fold Effect */}
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#2A2A2A] rounded-tl-md shadow-inner transform rotate-45 translate-x-1 translate-y-1"></div>
            </div>

            {/* Arrow - Only visible on hover */}
            {isHovered && (
              <div className="absolute top-2 right-2 text-white">
                <FiArrowUpRight size={14} />
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className="text-white text-lg font-medium mb-1">{title}</h3>

          {/* Description - Only visible on hover */}
          <div
            className={`text-gray-400 text-sm transition-all duration-300 ${
              isHovered
                ? "opacity-100 max-h-16"
                : "opacity-0 max-h-0 overflow-hidden"
            }`}
          >
            {description}
          </div>
        </div>
      </div>
    </Link>
  );
}
