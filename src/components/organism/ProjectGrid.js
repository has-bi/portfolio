"use client";

import Card from "@/components/molecules/Card";
import projectsData from "@/data/projectsData";

export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projectsData.map((project, index) => (
        <div key={index}>
          <Card
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
          />
        </div>
      ))}
    </div>
  );
}
