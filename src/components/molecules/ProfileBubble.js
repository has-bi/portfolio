"use client";

import Image from "next/image";

export default function ProfileBubble({
  imageSrc,
  altText,
  bubbleText = "Hi, I'm Hasbi 👋",
}) {
  return (
    <div className="relative inline-block">
      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={altText || "Profile image"}
            width={128}
            height={128}
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white text-3xl font-bold">
            {altText ? altText.charAt(0) : "H"}
          </div>
        )}
      </div>

      {/* Speech Bubble */}
      <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-2 bg-white px-4 py-2 rounded-xl shadow-md">
        <div className="absolute left-0 bottom-0 transform -translate-x-2 translate-y-1 rotate-45 w-4 h-4 bg-white"></div>
        <p className="text-sm font-medium">{bubbleText}</p>
      </div>
    </div>
  );
}
