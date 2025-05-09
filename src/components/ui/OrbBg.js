// src/components/ui/OrbBg.js
export function OrbBg({
  position = "-top-20 right-0",
  color = "bg-heli-peach/40",
}) {
  return (
    <div
      className={`pointer-events-none absolute ${position} h-64 w-64 ${color} blur-3xl`}
      aria-hidden="true"
    />
  );
}
