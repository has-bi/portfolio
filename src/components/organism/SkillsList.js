"use client";

import SkillItem from "@/components/molecules/SkillItem";

export default function SkillsList() {
  const skills = [
    {
      number: 1,
      title: "Web Design",
      description:
        "Creating beautiful and functional websites that engage your audience.",
    },
    {
      number: 2,
      title: "UI/UX Design",
      description:
        "Designing intuitive interfaces that provide exceptional user experiences.",
    },
    {
      number: 3,
      title: "Branding",
      description:
        "Building cohesive brand identities that make lasting impressions.",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-10">What I Do</h2>

      <div className="space-y-12">
        {skills.map((skill) => (
          <SkillItem
            key={skill.number}
            number={skill.number}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  );
}
