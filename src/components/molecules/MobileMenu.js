"use client";

import Link from "next/link";

export default function MobileMenu({ onClose }) {
  return (
    <div className="fixed inset-0 bg-white z-50 p-6">
      <div className="flex justify-end mb-8">
        <button
          onClick={onClose}
          className="text-gray-800 p-2"
          aria-label="Close menu"
        >
          ✕
        </button>
      </div>
      <nav className="flex flex-col items-center space-y-6 text-xl font-medium">
        <Link href="/" className="text-gray-800 hover:text-gray-600">
          Home
        </Link>
        <Link href="/projects" className="text-gray-800 hover:text-gray-600">
          Projects
        </Link>
        <Link href="/blog" className="text-gray-800 hover:text-gray-600">
          Blog
        </Link>
        <Link href="/about" className="text-gray-800 hover:text-gray-600">
          About
        </Link>
        <Link href="/contact" className="text-gray-800 hover:text-gray-600">
          Contact
        </Link>
      </nav>
    </div>
  );
}
