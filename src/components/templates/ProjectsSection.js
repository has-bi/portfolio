"use client";

import { FiArrowRight } from "react-icons/fi";
import Button from "@/components/atoms/Button";

export default function ProjectsSection() {
  // Updated project data with categories
  const projectsData = [
    {
      title: "Analytics Dashboard",
      description: "Interactive data visualization platform",
      imageSrc: "/images/dashboard.jpg",
      category: "dashboard",
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack online shopping solution",
      imageSrc: "/images/ecommerce.jpg",
      category: "software",
    },
    {
      title: "Data Analytics Tool",
      description: "Big data processing and insights",
      imageSrc: "/images/analytics.jpg",
      category: "data",
    },
    {
      title: "AI Chatbot",
      description: "Intelligent conversation assistant",
      imageSrc: "/images/chatbot.jpg",
      category: "ai",
    },
    {
      title: "Market Insights Dashboard",
      description: "Real-time market analysis platform",
      imageSrc: "/images/market.jpg",
      category: "dashboard",
    },
    {
      title: "Mobile App",
      description: "Cross-platform mobile application",
      imageSrc: "/images/mobile.jpg",
      category: "software",
    },
    {
      title: "Predictive Analysis Tool",
      description: "Future trend prediction algorithm",
      imageSrc: "/images/predictive.jpg",
      category: "data",
    },
    {
      title: "Computer Vision System",
      description: "Image recognition technology",
      imageSrc: "/images/vision.jpg",
      category: "ai",
    },
  ];

  // Define colors for each category (different hues)
  const categoryColors = {
    dashboard: "hsl(200, 75%, 60%)", // Blue
    software: "hsl(280, 75%, 60%)", // Purple
    data: "hsl(150, 75%, 60%)", // Green
    ai: "hsl(340, 75%, 60%)", // Red/Pink
  };

  // Get category name for display
  const getCategoryName = (category) => {
    const names = {
      dashboard: "Dashboard",
      software: "Software Engineering",
      data: "Data Analytics",
      ai: "Artificial Intelligence",
    };
    return names[category] || category;
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Featured Projects Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            Featured Projects
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of my recent works across different technology
            domains.
          </p>
        </div>

        {/* Projects Row - Horizontal Scrolling on Mobile */}
        <div className="relative overflow-x-auto pb-8">
          <div className="flex space-x-4 md:grid md:grid-cols-8 md:gap-4 min-w-max md:min-w-0">
            {projectsData.map((project, index) => {
              const bgColor = categoryColors[project.category];

              return (
                <div
                  key={index}
                  className="w-64 md:w-auto flex-shrink-0 bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300"
                  style={{
                    borderTop: `4px solid ${bgColor}`,
                  }}
                >
                  <div className="relative h-36">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${project.imageSrc})`,
                      }}
                    />
                    <div
                      className="absolute inset-0 opacity-80"
                      style={{
                        background: `linear-gradient(to bottom, ${bgColor}80, ${bgColor}40)`,
                      }}
                    />
                    <div
                      className="absolute bottom-2 left-2 right-2 bg-white/80 backdrop-blur-sm rounded-lg px-2 py-1 text-xs font-medium"
                      style={{ color: bgColor }}
                    >
                      {getCategoryName(project.category)}
                    </div>
                  </div>

                  <div className="p-3">
                    <h3 className="text-base font-bold mb-1 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex justify-end">
                      <Button
                        href={`/projects/${project.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        variant="primary"
                        className="px-3 py-1 text-xs"
                        icon={<FiArrowRight size={12} />}
                        style={{ backgroundColor: bgColor }}
                      >
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll indicator for mobile */}
          <div className="md:hidden text-center text-sm text-gray-500 mt-4">
            Swipe to see more projects →
          </div>
        </div>

        {/* All Projects Button */}
        <div className="mt-16 text-center">
          <Button
            href="/projects"
            variant="primary"
            className="px-8 py-4"
            icon={<FiArrowRight size={18} />}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
