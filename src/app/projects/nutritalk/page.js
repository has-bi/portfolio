"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiArrowLeft,
  FiMessageSquare,
  FiDatabase,
  FiServer,
  FiUsers,
} from "react-icons/fi";
import { motion } from "framer-motion";

export default function NutritalkProject() {
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
            <div className="flex items-center gap-2 text-gray-400 mb-4">
              <span className="text-sm">Reading time: 5 minutes</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">Nutritalk</h1>
            <h2 className="text-2xl text-[#CBFF4D]">
              AI-Powered Customer Service for Youvit
            </h2>
          </motion.div>

          {/* Hero Cover */}
          <motion.div
            className="w-full h-[50vh] rounded-xl overflow-hidden relative mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/images/projects/nutritalk-hero.png"
              alt="Nutritalk Chatbot Interface"
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
                Youvit, Indonesia's leading gummy vitamin brand, faced a
                customer service challenge: with only one nutritionist available
                during business hours, they couldn't effectively handle the
                volume of customer inquiries coming in 24/7.
              </p>

              <p className="text-gray-400 leading-relaxed mb-6">
                Nutritalk was created as a WhatsApp-based AI assistant that uses
                Retrieval-Augmented Generation (RAG) to provide accurate
                nutritional guidance and product information instantly, at any
                time of day. By moving from a traditional web interface to
                Indonesia's most popular messaging platform, we achieved a 98%
                increase in user adoption.
              </p>
            </motion.div>

            <motion.div className="md:w-1/3 mt-8 md:mt-0" variants={fadeIn}>
              <div className="bg-[#1A1A1A] rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Project Overview</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm">Client</p>
                    <p>Youvit</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Role</p>
                    <p>Lead Developer</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Timeline</p>
                    <p>3 months</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Technologies</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-xs bg-[#2A2A2A] text-[#CBFF4D] px-2 py-1 rounded">
                        n8n
                      </span>
                      <span className="text-xs bg-[#2A2A2A] text-[#CBFF4D] px-2 py-1 rounded">
                        Qdrant Vector DB
                      </span>
                      <span className="text-xs bg-[#2A2A2A] text-[#CBFF4D] px-2 py-1 rounded">
                        GPT-4o API
                      </span>
                      <span className="text-xs bg-[#2A2A2A] text-[#CBFF4D] px-2 py-1 rounded">
                        WhatsApp (Wati.io)
                      </span>
                      <span className="text-xs bg-[#2A2A2A] text-[#CBFF4D] px-2 py-1 rounded">
                        RAG
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Challenges Section */}
      <section className="py-20 px-6 bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              Key Challenges & Solutions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Critical obstacles that needed to be overcome and how they were
              solved
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
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
                <FiMessageSquare className="text-[#CBFF4D]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Platform Adoption</h3>
              <p className="text-gray-400 mb-4">
                <strong className="text-white">Problem:</strong> Initial
                web-based version had low adoption rates as users didn't want to
                visit a dedicated site.
              </p>
              <p className="text-gray-400">
                <strong className="text-white">Solution:</strong> Moved to
                WhatsApp integration via Wati.io, enabling customers to get
                answers through a platform they already use daily.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#1A1A1A] rounded-xl p-6 border border-[#2A2A2A]"
              variants={fadeIn}
            >
              <div className="w-12 h-12 bg-[#CBFF4D]/20 rounded-full flex items-center justify-center mb-4">
                <FiDatabase className="text-[#CBFF4D]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Knowledge Structure</h3>
              <p className="text-gray-400 mb-4">
                <strong className="text-white">Problem:</strong> Creating an
                effective knowledge base that could provide accurate nutrition
                information for different products and demographics.
              </p>
              <p className="text-gray-400">
                <strong className="text-white">Solution:</strong> Implemented a
                three-category structure (General, Ingredients, Benefits) with
                RAG to search across all categories and combine results
                intelligently.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#1A1A1A] rounded-xl p-6 border border-[#2A2A2A]"
              variants={fadeIn}
            >
              <div className="w-12 h-12 bg-[#CBFF4D]/20 rounded-full flex items-center justify-center mb-4">
                <FiUsers className="text-[#CBFF4D]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Team Capabilities</h3>
              <p className="text-gray-400 mb-4">
                <strong className="text-white">Problem:</strong> Youvit lacked
                developers who could maintain a complex custom system long-term.
              </p>
              <p className="text-gray-400">
                <strong className="text-white">Solution:</strong> Used n8n for
                workflow automation, allowing non-technical team members to
                monitor and maintain the system through a visual interface
                rather than code.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              Technical Implementation
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              How Nutritalk processes customer inquiries
            </p>
          </motion.div>

          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-[#1A1A1A] p-6 rounded-xl flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-4 text-[#CBFF4D]">
                  System Architecture
                </h3>
                <p className="text-gray-400 mb-4">
                  Nutritalk uses a pragmatic architecture designed for both
                  effectiveness and maintainability:
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-[#CBFF4D] mr-2">•</span>
                    <p>
                      <strong className="text-white">
                        WhatsApp Integration:
                      </strong>{" "}
                      Wati.io handles messaging on the platform most Indonesians
                      use daily
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CBFF4D] mr-2">•</span>
                    <p>
                      <strong className="text-white">n8n Workflows:</strong>{" "}
                      Visual automation platform manages the entire process flow
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CBFF4D] mr-2">•</span>
                    <p>
                      <strong className="text-white">Qdrant Vector DB:</strong>{" "}
                      Stores and retrieves knowledge across multiple categories
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CBFF4D] mr-2">•</span>
                    <p>
                      <strong className="text-white">
                        RAG Implementation:
                      </strong>{" "}
                      Combines search results with GPT-4o for natural responses
                    </p>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-4 text-[#CBFF4D]">
                  Process Flow
                </h3>
                <div className="bg-black/30 p-4 rounded-xl text-sm text-gray-300">
                  <pre>{`1. Customer sends WhatsApp message to Youvit

2. Wati.io webhook triggers n8n workflow

3. The workflow:
   - Processes the message
   - Searches knowledge base using embeddings
   - Combines results from 3 knowledge categories
   - Generates response with GPT-4o
   - Formats for WhatsApp (with proper styling)

4. Customer receives personalized response
   with accurate nutritional information

5. Complex questions are escalated to the 
   human nutritionist during business hours`}</pre>
                </div>
              </div>
            </div>
          </motion.div>

          {/* User Interface */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-xl p-6 overflow-hidden">
              <div className="relative h-[400px] w-full">
                <Image
                  src="/images/projects/nutritalk-interface.png"
                  alt="Nutritalk WhatsApp Interface"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-gray-800 text-sm mt-4">
                Nutritalk providing personalized nutrition advice via WhatsApp
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-6 bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Results & Impact</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              How Nutritalk transformed Youvit's customer service
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInStagger}
          >
            <motion.div
              className="bg-[#1A1A1A] rounded-xl p-6 text-center"
              variants={fadeIn}
            >
              <div className="text-[#CBFF4D] text-4xl font-bold mb-2">73%</div>
              <p className="text-gray-400">Faster Response Time</p>
              <p className="text-sm text-gray-500">(4 hours → 6 minutes)</p>
            </motion.div>

            <motion.div
              className="bg-[#1A1A1A] rounded-xl p-6 text-center"
              variants={fadeIn}
            >
              <div className="text-[#CBFF4D] text-4xl font-bold mb-2">68%</div>
              <p className="text-gray-400">Reduction in Basic Queries</p>
              <p className="text-sm text-gray-500">(340+ hours saved/month)</p>
            </motion.div>

            <motion.div
              className="bg-[#1A1A1A] rounded-xl p-6 text-center"
              variants={fadeIn}
            >
              <div className="text-[#CBFF4D] text-4xl font-bold mb-2">91%</div>
              <p className="text-gray-400">Query Resolution Rate</p>
              <p className="text-sm text-gray-500">
                (Without human intervention)
              </p>
            </motion.div>

            <motion.div
              className="bg-[#1A1A1A] rounded-xl p-6 text-center"
              variants={fadeIn}
            >
              <div className="text-[#CBFF4D] text-4xl font-bold mb-2">42%</div>
              <p className="text-gray-400">Marketing Database Growth</p>
              <p className="text-sm text-gray-500">(2,100+ new contacts)</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInStagger}
          >
            <motion.div
              className="bg-[#1A1A1A] rounded-xl p-6"
              variants={fadeIn}
            >
              <h3 className="text-xl font-bold mb-4 text-[#CBFF4D] flex items-center">
                <FiUsers className="mr-2" />
                For Customers
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-[#CBFF4D] mr-2">•</span>
                  <p>Instant answers 24/7, regardless of time zone</p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#CBFF4D] mr-2">•</span>
                  <p>Personalized interactions addressing customers by name</p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#CBFF4D] mr-2">•</span>
                  <p>
                    Demographic-specific nutrition guidance (for pregnant women,
                    elderly, families)
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#CBFF4D] mr-2">•</span>
                  <p>Consistent, accurate information on a familiar platform</p>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-[#1A1A1A] rounded-xl p-6"
              variants={fadeIn}
            >
              <h3 className="text-xl font-bold mb-4 text-[#CBFF4D] flex items-center">
                <FiServer className="mr-2" />
                For Youvit
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-[#CBFF4D] mr-2">•</span>
                  <p>
                    Nutritionist freed from repetitive questions (60% time
                    savings)
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#CBFF4D] mr-2">•</span>
                  <p>Elimination of after-hours support gaps</p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#CBFF4D] mr-2">•</span>
                  <p>System maintainable by non-technical team members</p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#CBFF4D] mr-2">•</span>
                  <p>Valuable data insights for product development</p>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Conclusion & Next Project */}
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
