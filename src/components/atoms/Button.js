"use client";

import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  icon = null,
  onClick = null,
  style = {},
}) {
  const baseStyles =
    "inline-flex items-center font-medium rounded-full shadow-lg hover:shadow-xl transition-all";

  const variantStyles = {
    primary: "bg-[#CBFF4D] text-gray-800 px-6 py-3 hover:bg-[#D8FF7A]",
    secondary:
      "bg-white text-gray-800 px-6 py-3 border border-gray-200 hover:bg-gray-50",
    dark: "bg-[#1A1A1A] text-white px-6 py-3 hover:bg-[#2A2A2A]",
    outline:
      "bg-transparent text-white px-6 py-3 border border-white hover:bg-white/10",
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={buttonStyles} style={style}>
        <span>{children}</span>
        {icon && <span className="ml-2">{icon}</span>}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button onClick={onClick} className={buttonStyles} style={style}>
      <span>{children}</span>
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
}
