"use client";

export default function SkillItem({ number, title, description }) {
  // Ensure number is formatted with leading zero if single digit
  const formattedNumber = number < 10 ? `0${number}` : number;

  return (
    <div className="flex">
      <div className="mr-6">
        <span className="text-[#CBFF4D] text-lg font-bold">
          {formattedNumber}
        </span>
        <div className="h-px w-32 bg-gray-700 mt-3 ml-0.5"></div>
      </div>
      <div>
        <h3 className="text-xl font-bold uppercase">{title}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
      </div>
    </div>
  );
}
