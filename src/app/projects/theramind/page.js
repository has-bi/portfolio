"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiArrowLeft,
  FiSmile,
  FiLock,
  FiSmartphone,
  FiCode,
  FiUsers,
  FiServer,
  FiDatabase,
  FiLayers,
} from "react-icons/fi";
import { motion } from "framer-motion";

export default function TheraMindProject() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const fadeInStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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
            href="/projects"
            className="flex items-center text-white/70 hover:text-white transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Back to Projects
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-5xl font-bold mb-6">TheraMind</h1>
            <h2 className="text-2xl text-[#CBFF4D]">
              A Mental Wellness App — DevScale Bootcamp Final Project
            </h2>
          </motion.div>

          {/* Hero Cover */}
          <motion.div
            className="w-full md:w-4/5 lg:w-3/4 mx-auto h-[40vh] md:h-[50vh] rounded-xl overflow-hidden relative mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/images/projects/theramind-hero.png"
              alt="TheraMind App"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
          </motion.div>

          <motion.div
            className="md:flex gap-10 mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeInStagger}
          >
            <motion.div className="md:w-2/3" variants={fadeIn}>
              <p className="text-lg leading-relaxed mb-6">
                TheraMind is a mental wellness companion web app built with
                Next.js that was created as our final project for the DevScale
                Full Stack Developer Bootcamp. Working in a team of four as the
                project lead, I was responsible for AI integration, frontend
                development, and ensuring successful feature implementation.
              </p>

              <p className="text-gray-400 leading-relaxed mb-6">
                The application helps users track their daily moods, interact
                with an AI-powered chatbot that responds based on their
                emotional state, and provides personalized mental wellness
                content. Built with a mobile-first approach, TheraMind
                represents our team's ability to develop a complex, full-stack
                application under real-world constraints.
              </p>
            </motion.div>

            <motion.div className="md:w-1/3 mt-8 md:mt-0" variants={fadeIn}>
              <div className="bg-[#1A1A1A] rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Project Overview</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm">Role</p>
                    <p>Project Lead & Frontend Developer</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Team Size</p>
                    <p>4 Developers</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Timeline</p>
                    <p>4 Weeks (Part-time)</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Technologies</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-xs bg-[#2A2A2A] text-[#CBFF4D] px-2 py-1 rounded">
                        Next.js 14
                      </span>
                      <span className="text-xs bg-[#2A2A2A] text-[#CBFF4D] px-2 py-1 rounded">
                        Tailwind CSS
                      </span>
                      <span className="text-xs bg-[#2A2A2A] text-[#CBFF4D] px-2 py-1 rounded">
                        Arctic Auth
                      </span>
                      <span className="text-xs bg-[#2A2A2A] text-[#CBFF4D] px-2 py-1 rounded">
                        MDX
                      </span>
                      <span className="text-xs bg-[#2A2A2A] text-[#CBFF4D] px-2 py-1 rounded">
                        OpenAI API
                      </span>
                      <span className="text-xs bg-[#2A2A2A] text-[#CBFF4D] px-2 py-1 rounded">
                        Prisma
                      </span>
                      <span className="text-xs bg-[#2A2A2A] text-[#CBFF4D] px-2 py-1 rounded">
                        PostgreSQL
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technical Implementation Section */}
      <section className="py-20 px-6 bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">
              Technical Implementation
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Key technical features and implementation details of the TheraMind
              application
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInStagger}
          >
            <motion.div
              className="bg-[#1A1A1A] rounded-xl p-6"
              variants={fadeIn}
            >
              <h3 className="text-xl font-bold mb-6 text-[#CBFF4D]">
                Core Features
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-[#CBFF4D]/20 mr-3 mt-1">
                    <FiSmile className="text-[#CBFF4D]" size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Mood Tracking System</h4>
                    <p className="text-gray-400 text-sm">
                      Multi-step form with state persistence across pages using
                      React Context API. User mood data is stored with
                      timestamps for pattern analysis.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-[#CBFF4D]/20 mr-3 mt-1">
                    <FiCode className="text-[#CBFF4D]" size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">AI-Powered Chatbot</h4>
                    <p className="text-gray-400 text-sm">
                      Integration with OpenAI API to provide contextual
                      responses based on user's mood input. System prompts
                      dynamically adjust based on mood state to offer
                      appropriate support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-[#CBFF4D]/20 mr-3 mt-1">
                    <FiLock className="text-[#CBFF4D]" size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">
                      Authentication & Data Privacy
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Implemented Arctic Auth for secure user authentication.
                      All mood data and journal entries are private and linked
                      to user accounts with proper data encryption.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-[#CBFF4D]/20 mr-3 mt-1">
                    <FiSmartphone className="text-[#CBFF4D]" size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">
                      Multi-page Form State Management
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Created system to maintain form state across multiple
                      screens (mood input, journaling, recap) with a final
                      submission that combines all data into a single POST
                      request.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-[#1A1A1A] rounded-xl p-6"
              variants={fadeIn}
            >
              <h3 className="text-xl font-bold mb-6 text-[#CBFF4D]">
                Technical Architecture
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2">Frontend</h4>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li>
                      • Next.js 14 with App Router for optimized routing and
                      server components
                    </li>
                    <li>• Mobile-first responsive design with Tailwind CSS</li>
                    <li>• Context API for multi-page form state management</li>
                    <li>• MDX for dynamic content rendering in blog section</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Backend</h4>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li>• Next.js API routes for serverless functions</li>
                    <li>• PostgreSQL database for structured data storage</li>
                    <li>• Prisma ORM for type-safe database queries</li>
                    <li>• OpenAI API integration for chatbot functionality</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Authentication</h4>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li>
                      • Arctic Auth for user authentication and profile
                      management
                    </li>
                    <li>• JWT tokens for secure API requests</li>
                    <li>• Role-based access control for admin features</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Deployment</h4>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li>• Vercel for hosting and continuous deployment</li>
                    <li>• Environment variable management for API keys</li>
                    <li>• Automated testing via CI/CD pipeline</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* App Screenshots */}
          <motion.div
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-[#1A1A1A] rounded-lg overflow-hidden">
              <div className="aspect-[9/16] relative">
                <Image
                  src="/images/projects/theramind-mood.png"
                  alt="TheraMind Mood Selection Screen"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-2">
                <p className="text-xs text-center text-gray-400">
                  Mood Selection
                </p>
              </div>
            </div>
            <div className="bg-[#1A1A1A] rounded-lg overflow-hidden">
              <div className="aspect-[9/16] relative">
                <Image
                  src="/images/projects/theramind-chat.png"
                  alt="TheraMind Chat Interface"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-2">
                <p className="text-xs text-center text-gray-400">
                  AI Chat Interface
                </p>
              </div>
            </div>
            <div className="bg-[#1A1A1A] rounded-lg overflow-hidden">
              <div className="aspect-[9/16] relative">
                <Image
                  src="/images/projects/theramind-journal.png"
                  alt="TheraMind Journal Summary"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-2">
                <p className="text-xs text-center text-gray-400">
                  Journal Recap
                </p>
              </div>
            </div>
            <div className="bg-[#1A1A1A] rounded-lg overflow-hidden">
              <div className="aspect-[9/16] relative">
                <Image
                  src="/images/projects/theramind-dashboard.png"
                  alt="TheraMind Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-2">
                <p className="text-xs text-center text-gray-400">
                  User Dashboard
                </p>
              </div>
            </div>
          </motion.div>

          {/* Video Demo Section */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Video Demo</h3>
            <div className="bg-[#1A1A1A] rounded-xl p-5 overflow-hidden">
              <div className="aspect-video w-full max-w-4xl mx-auto">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="TheraMind App Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-gray-400 text-sm text-center mt-4">
                Watch a complete walkthrough of the TheraMind application
                features
              </p>
            </div>
          </motion.div>

          {/* Visit App Button */}
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <a
              href="https://theramind.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#CBFF4D] text-gray-900 px-8 py-4 rounded-lg font-bold flex items-center hover:bg-[#D8FF7A] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Visit TheraMind App
            </a>
          </motion.div>
          <div className="text-center mt-4">
            <p className="text-gray-400 max-w-2xl mx-auto">
              <i>
                It might be error while visiting the apps due to limited service
                from the database or API
              </i>
            </p>
          </div>
        </div>
      </section>

      {/* Development Challenges Section */}
      <section className="py-20 px-6 bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Challenges & Solutions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Key obstacles we faced and how we overcame them
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInStagger}
          >
            <motion.div variants={fadeIn}>
              <div className="bg-[#1A1A1A] rounded-xl p-6">
                <h3 className="text-xl font-bold mb-6 text-[#CBFF4D] flex items-center">
                  <FiCode className="mr-2" />
                  Technical Challenges
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold mb-2">
                      Multi-page Form State Management
                    </h4>
                    <p className="text-gray-400 text-sm mb-2">
                      <span className="text-red-400 font-bold">Challenge:</span>{" "}
                      Maintaining state across multiple pages (mood input,
                      journaling, recap) while only POSTing data after
                      completing all steps.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <span className="text-green-400 font-bold">
                        Solution:
                      </span>{" "}
                      Implemented React Context API to store form data across
                      all steps and created a final submission function that
                      combines all data into a single POST request. This
                      preserved user progress while ensuring data integrity.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">
                      AI Integration & Context Preservation
                    </h4>
                    <p className="text-gray-400 text-sm mb-2">
                      <span className="text-red-400 font-bold">Challenge:</span>{" "}
                      Creating a chatbot that remembered user's mood input and
                      provided appropriate responses based on emotional state.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <span className="text-green-400 font-bold">
                        Solution:
                      </span>{" "}
                      Developed dynamic system prompts that incorporated the
                      user's mood data into each API call, allowing the AI to
                      maintain context throughout the conversation and provide
                      more relevant support.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">Performance Optimization</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      <span className="text-red-400 font-bold">Challenge:</span>{" "}
                      Initial AI responses were slow, causing a poor user
                      experience, especially on mobile devices.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <span className="text-green-400 font-bold">
                        Solution:
                      </span>{" "}
                      Implemented streaming responses from the OpenAI API and
                      added optimistic UI updates to show typing indicators.
                      Also utilized Next.js server components where appropriate
                      to improve initial load times.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <div className="bg-[#1A1A1A] rounded-xl p-6">
                <h3 className="text-xl font-bold mb-6 text-[#CBFF4D] flex items-center">
                  <FiUsers className="mr-2" />
                  Project Management Challenges
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold mb-2">Time Management</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      <span className="text-red-400 font-bold">Challenge:</span>{" "}
                      All team members were employed full-time, leaving limited
                      hours for project development and causing timeline
                      pressures.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <span className="text-green-400 font-bold">
                        Solution:
                      </span>{" "}
                      Implemented strict prioritization using MoSCoW method
                      (Must have, Should have, Could have, Won't have). Created
                      a detailed sprint plan with clearly defined
                      responsibilities and daily async standups via Slack.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">
                      Communication & Task Overlap
                    </h4>
                    <p className="text-gray-400 text-sm mb-2">
                      <span className="text-red-400 font-bold">Challenge:</span>{" "}
                      Miscommunication led to task overlap where multiple team
                      members worked on the same features unknowingly.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <span className="text-green-400 font-bold">
                        Solution:
                      </span>{" "}
                      Established a more robust GitHub workflow with feature
                      branches and pull request reviews. Implemented a shared
                      Notion board for task tracking with clear ownership
                      assignments.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">Team Motivation</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      <span className="text-red-400 font-bold">Challenge:</span>{" "}
                      Maintaining team motivation through technical difficulties
                      and tight deadlines while everyone balanced full-time
                      jobs.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <span className="text-green-400 font-bold">
                        Solution:
                      </span>{" "}
                      As project lead, I focused on leading by example, taking
                      on challenging tasks first to demonstrate feasibility.
                      Scheduled regular celebration of small wins and
                      implemented pair programming sessions to tackle difficult
                      problems together.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Learning Outcomes Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Key Learnings</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Valuable insights gained from building our first production-ready
              application
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInStagger}
          >
            <motion.div
              className="bg-[#1A1A1A] rounded-xl p-6 border border-[#2A2A2A]"
              variants={fadeIn}
            >
              <div className="w-12 h-12 bg-[#CBFF4D]/20 rounded-full flex items-center justify-center mb-4">
                <FiCode className="text-[#CBFF4D]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Technical Growth</h3>
              <p className="text-gray-400">
                Gained hands-on experience with modern web development practices
                including Next.js App Router, React Context API, and API
                integration. Learning to manage state across multi-page forms
                was particularly valuable.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#1A1A1A] rounded-xl p-6 border border-[#2A2A2A]"
              variants={fadeIn}
            >
              <div className="w-12 h-12 bg-[#CBFF4D]/20 rounded-full flex items-center justify-center mb-4">
                <FiUsers className="text-[#CBFF4D]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Project Management</h3>
              <p className="text-gray-400">
                Developed practical leadership skills by managing a remote team
                with limited availability. Learned how crucial clear
                communication, documentation, and task prioritization are to
                project success.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#1A1A1A] rounded-xl p-6 border border-[#2A2A2A]"
              variants={fadeIn}
            >
              <div className="w-12 h-12 bg-[#CBFF4D]/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#CBFF4D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 16V12"
                    stroke="#CBFF4D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8H12.01"
                    stroke="#CBFF4D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Problem-Solving</h3>
              <p className="text-gray-400">
                Enhanced ability to tackle complex technical challenges through
                research, experimentation, and collaboration. Documentation
                reading skills improved significantly by necessity, a crucial
                skill for any developer.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 px-6 bg-[#121212]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Conclusion</h2>
            <p className="text-lg leading-relaxed mb-6">
              TheraMind represents more than just a bootcamp final project—it
              was a transformative learning experience that pushed our technical
              and collaborative skills to new heights. Despite working within
              the constraints of full-time jobs and limited experience, our team
              delivered a functioning mental wellness application with
              meaningful features.
            </p>
            <p className="text-gray-400 leading-relaxed">
              As project lead, I'm particularly proud of how we overcame both
              technical and logistical challenges through persistence and
              teamwork. The experience of building a multi-step form with state
              management across pages, integrating AI capabilities, and
              coordinating remote development has provided invaluable lessons
              that will serve us all in our future development careers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Next Project Navigation */}
      <section className="py-12 px-6 border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-gray-400">Next Project</p>
            <Link
              href="/projects/po-tracker"
              className="text-xl font-bold hover:text-[#CBFF4D] transition-colors"
            >
              PO Tracker
            </Link>
          </div>

          <Link
            href="/projects"
            className="mt-6 md:mt-0 bg-[#1A1A1A] text-white hover:bg-[#2A2A2A] px-6 py-3 rounded-lg transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
