"use client";

import { useState } from "react";
import Image from "next/image";

export default function Card({ title, description, imageSrc }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-xl shadow-xl h-[400px] hover-scale`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        {/* Use next/image for optimization */}
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={`object-cover transition-all duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "linear-gradient(to top, var(--color-purple-dark), var(--color-purple-medium))",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 text-white z-10">
        <h3
          className={`text-2xl font-bold mb-2 slide-up ${
            isHovered ? "" : "slide-up-hidden"
          }`}
        >
          {title}
        </h3>
        <p
          className={`slide-up ${isHovered ? "" : "slide-up-hidden"}`}
          style={{ transitionDelay: "0.1s" }}
        >
          {description}
        </p>

        {/* Card Button */}
        <button
          className={`mt-6 bg-white hover:bg-purple-lightest py-2 px-4 rounded-lg font-semibold slide-up ${
            isHovered ? "" : "slide-up-hidden"
          }`}
          style={{
            color: "var(--color-text)",
            transitionDelay: "0.2s",
          }}
        >
          Explore More
        </button>
      </div>
    </div>
  );
}
