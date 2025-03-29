"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import ProjectCard from "@/components/molecules/ProjectCard";

export default function ProjectsPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Project data
  const projectsData = [
    {
      title: "PO Tracker",
      description:
        "Automated purchase order processing using Document AI and Cloud Functions",
      imageSrc: "/images/po-tracker.jpg",
      link: "/projects/po-tracker",
    },
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
    {
      title: "Web Portfolio",
      description:
        "Responsive portfolio website showcasing your work with modern design principles",
      imageSrc: "/images/portfolio.jpg",
      link: "/projects/web-portfolio",
    },
    {
      title: "CMS Development",
      description:
        "Custom content management system tailored to your specific business requirements",
      imageSrc: "/images/cms.jpg",
      link: "/projects/cms-development",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 py-4 px-6 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            <span className="text-[#CBFF4D]">Hasbi</span>.dev
          </Link>

          <Link
            href="/"
            className="flex items-center text-white/70 hover:text-white transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Projects Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">All Projects</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore my complete portfolio of work across different domains and
              technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
        </div>
      </section>
    </div>
  );
}
