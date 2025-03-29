"use client";

export default function ScrollIndicator({
  text = "Scroll to see more",
  className = "",
}) {
  return (
    <div
      className={`flex flex-col items-center text-gray-400 animate-bounce ${className}`}
    >
      <p className="text-sm mb-2">{text}</p>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5V19M12 19L19 12M12 19L5 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
