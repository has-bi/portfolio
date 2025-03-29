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
    "inline-flex items-center font-medium rounded-full shadow-lg hover:shadow-xl transition-shadow";

  const variantStyles = {
    primary: "bg-[#CBFF4D] text-gray-800 px-6 py-3",
    secondary: "bg-white text-gray-800 px-6 py-3 border border-gray-200",
    dark: "bg-black text-white px-6 py-3",
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={buttonStyles} style={style}>
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button onClick={onClick} className={buttonStyles} style={style}>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
}
