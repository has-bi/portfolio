"use client";

import { FiExternalLink, FiPlus } from "react-icons/fi";
import Button from "@/components/atoms/Button";
import Link from "next/link";
import projectsData from "@/data/projectsData";
import ProjectCard from "@/components/molecules/ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* Featured Projects Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore my portfolio of work across different domains.
          </p>
        </div>

        {/* Projects Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              link={project.link}
            />
          ))}
        </div>

        {/* All Projects Button */}
        <div className="mt-16 text-center">
          <Button href="/projects" variant="primary" className="px-8 py-4">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
