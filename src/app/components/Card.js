"use client";

import { useState } from "react";
import Image from "next/image";

export default function Card({
  title,
  description,
  imageSrc,
  bgGradient = "from-blue-500 to-purple-600",
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-xl h-[420px] transition-all duration-500 ${
        isHovered ? "scale-105" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={`object-cover transition-all duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${bgGradient} opacity-70`}
        ></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 text-white z-10">
        <h3
          className={`text-2xl font-bold mb-2 transform transition-transform duration-500 ${
            isHovered ? "translate-y-0" : "translate-y-8"
          }`}
        >
          {title}
        </h3>
        <p
          className={`transform transition-all duration-700 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          {description}
        </p>

        {/* Card Button */}
        <button
          className={`mt-6 bg-white text-gray-800 py-2 px-4 rounded-lg font-semibold transform transition-all duration-500 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          Explore More
        </button>
      </div>
    </div>
  );
}
