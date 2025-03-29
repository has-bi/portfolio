"use client";

import { useState } from "react";

export default function LanguageSelector() {
  const [language, setLanguage] = useState("id");

  return (
    <div className="bg-white rounded-full border p-0.5 shadow-sm">
      <div className="flex text-sm">
        <button
          className={`px-4 py-1 rounded-full ${
            language === "id" ? "bg-gray-800 text-white" : "text-gray-600"
          }`}
          onClick={() => setLanguage("id")}
        >
          ID
        </button>
        <button
          className={`px-4 py-1 rounded-full ${
            language === "en" ? "bg-gray-800 text-white" : "text-gray-600"
          }`}
          onClick={() => setLanguage("en")}
        >
          EN
        </button>
      </div>
    </div>
  );
}
