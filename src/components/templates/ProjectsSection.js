"use client";

import { FiExternalLink, FiPlus } from "react-icons/fi";
import Button from "@/components/atoms/Button";
import Link from "next/link";

export default function ProjectsSection() {
  // Simplified project data
  const projectsData = [
    {
      title: "Analytics Dashboard",
      description:
        "Interactive data visualization platform with real-time insights",
      imageSrc: "/images/dashboard.jpg",
      link: "/projects/analytics-dashboard",
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack online shopping solution with modern UX",
      imageSrc: "/images/ecommerce.jpg",
      link: "/projects/ecommerce-platform",
    },
    {
      title: "Data Analytics Tool",
      description: "Big data processing engine with intuitive reporting",
      imageSrc: "/images/analytics.jpg",
      link: "/projects/data-analytics-tool",
    },
    {
      title: "AI Chatbot",
      description: "Intelligent conversation assistant for customer support",
      imageSrc: "/images/chatbot.jpg",
      link: "/projects/ai-chatbot",
    },
    {
      title: "Mobile App",
      description:
        "Cross-platform mobile application with offline capabilities",
      imageSrc: "/images/mobile.jpg",
      link: "/projects/mobile-app",
    },
  ];

  return (
    <section className="min-h-screen py-20 full-width-cards">
      {/* Featured Projects Heading */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Featured Projects
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore my portfolio of work across different domains.
          </p>
        </div>
      </div>

      {/* Expanding Card Row - Full Width */}
      <div className="w-full cards-container h-[450px] flex">
        {projectsData.map((project, index) => (
          <Link href={project.link} key={index} className="project-card group">
            {/* Project Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url(${project.imageSrc})`,
              }}
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

            {/* Project Title - Always visible at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5 project-title">
              <h3 className="text-white font-bold text-xl md:text-2xl">
                {project.title}
              </h3>
            </div>

            {/* Explore Icon - Only visible on hover */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#CBFF4D] flex items-center justify-center explore-icon">
                <FiPlus size={24} className="text-gray-800" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* All Projects Button */}
      <div className="max-w-7xl mx-auto px-4 mt-16 text-center">
        <Button
          href="/projects"
          variant="primary"
          className="px-8 py-4"
          icon={<FiExternalLink size={18} />}
        >
          View All Projects
        </Button>
      </div>
    </section>
  );
}
