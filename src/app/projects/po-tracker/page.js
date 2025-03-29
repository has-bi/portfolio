"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiArrowLeft,
  FiFileText,
  FiClock,
  FiPieChart,
  FiCheckCircle,
} from "react-icons/fi";
import { motion } from "framer-motion";

export default function POTrackerProject() {
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
            <h1 className="text-5xl font-bold mb-6">
              Purchase Order Data Entry Automations
            </h1>
            <h2 className="text-2xl text-[#CBFF4D]">Using Document AI</h2>
          </motion.div>

          <motion.div
            className="w-full h-[50vh] rounded-xl overflow-hidden relative mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/images/po-tracker-hero.jpg"
              alt="PO Tracker Dashboard"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
          </motion.div>

          <motion.div
            className="md:flex gap-10 mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeInStagger}
          >
            <motion.div className="md:w-2/3" variants={fadeIn}>
              <p className="text-lg leading-relaxed mb-6">
                In the competitive world of enterprise business, manual purchase
                order processing often requires dedicated staff members, leading
                to significant labor costs. This case study reveals how Youvit
                revolutionized their purchase order management system by
                transitioning from manual processing to intelligent automation,
                achieving remarkable cost efficiency and operational
                improvements.
              </p>

              <p className="text-gray-400 leading-relaxed mb-6">
                Before automation, Youvit allocated a full-time staff member to
                handle purchase order processing, incurring a monthly salary
                cost of 5.5M IDR. This staff member spent countless hours
                manually processing purchase orders from multiple distributors,
                each using different formats and submission methods. Beyond the
                salary costs, this manual approach tied up valuable human
                resources in repetitive tasks that could be automated.
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
                    <p className="text-gray-400 text-sm">Industry</p>
                    <p>Enterprise Business</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Technologies</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-xs bg-[#2A2A2A] text-[#CBFF4D] px-2 py-1 rounded">
                        Google Cloud
                      </span>
                      <span className="text-xs bg-[#2A2A2A] text-[#CBFF4D] px-2 py-1 rounded">
                        Document AI
                      </span>
                      <span className="text-xs bg-[#2A2A2A] text-[#CBFF4D] px-2 py-1 rounded">
                        Cloud Functions
                      </span>
                      <span className="text-xs bg-[#2A2A2A] text-[#CBFF4D] px-2 py-1 rounded">
                        BigQuery
                      </span>
                      <span className="text-xs bg-[#2A2A2A] text-[#CBFF4D] px-2 py-1 rounded">
                        Cloud Storage
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-6 bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="md:flex gap-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInStagger}
          >
            <motion.div className="md:w-1/2 mb-10 md:mb-0" variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-8">The Challenge</h2>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-[#CBFF4D]">
                  The Company Challenge
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Before implementing automation, Youvit faced common challenges
                  in purchase order management that many businesses struggle
                  with today. Their team spent countless hours manually
                  processing purchase orders from multiple distributors, each
                  using different formats and submission methods. This
                  labor-intensive process consumed valuable resources and
                  introduced risks of human error in data entry.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-[#CBFF4D]">
                  The Developer Challenge
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  As a developer, I faced a complex challenge in creating an
                  automated purchase order processing system. The core technical
                  hurdles were extracting data from 7 different distributor
                  formats and developing a robust preprocessing pipeline that
                  could handle diverse document structures.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Connecting to Gmail and automatically retrieving attachments
                  proved equally challenging, requiring sophisticated email
                  parsing and document detection algorithms. Each distributor's
                  unique format demanded a flexible, intelligent data extraction
                  approach that could adapt to varying document layouts.
                </p>
              </div>
            </motion.div>

            <motion.div className="md:w-1/2" variants={fadeIn}>
              <div className="bg-[#1A1A1A] rounded-xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-8">Results</h3>
                <p className="text-gray-300 mb-8">
                  The implementation of PO Tracker delivered measurable results
                  across multiple business metrics:
                </p>

                <div className="space-y-10">
                  <div className="flex flex-col items-center">
                    <span className="text-[#CBFF4D] text-5xl font-bold mb-2">
                      99%
                    </span>
                    <span className="text-center">
                      Reducing Cost
                      <br />
                      (vs Employee Salary)
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-[#CBFF4D] text-5xl font-bold mb-2">
                      92%
                    </span>
                    <span className="text-center">
                      Increase
                      <br />
                      Processing Time
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-[#CBFF4D] text-5xl font-bold mb-2">
                      0.2%
                    </span>
                    <span className="text-center">Error Rates</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              An automated system that processes purchase orders from multiple
              distributors with minimal human intervention.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInStagger}
          >
            <motion.div
              className="bg-[#1A1A1A] rounded-xl p-6"
              variants={fadeIn}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#CBFF4D]/20 mb-4">
                <FiClock className="text-[#CBFF4D]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Cloud Scheduler</h3>
              <p className="text-gray-400">
                PO Tracker runs every hour from 7 AM to 7 PM, Monday to Friday,
                using Google Cloud Scheduler to check for new emails
                automatically.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#1A1A1A] rounded-xl p-6"
              variants={fadeIn}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#CBFF4D]/20 mb-4">
                <FiFileText className="text-[#CBFF4D]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Cloud Functions</h3>
              <p className="text-gray-400">
                A cloud function scans email inboxes for new POs, downloads
                PDFs, splits them into pages, and stores them in
                distributor-specific Cloud Storage buckets.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#1A1A1A] rounded-xl p-6"
              variants={fadeIn}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#CBFF4D]/20 mb-4">
                <FiCheckCircle className="text-[#CBFF4D]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Document AI</h3>
              <p className="text-gray-400">
                Document AI extracts important information from PDFs. Custom
                rules validate and clean data for each distributor's unique
                format.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#1A1A1A] rounded-xl p-6"
              variants={fadeIn}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#CBFF4D]/20 mb-4">
                <FiPieChart className="text-[#CBFF4D]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">BigQuery Integration</h3>
              <p className="text-gray-400">
                Processed data connects to BigQuery for analytics, allowing
                teams to track distributor stock, sales performance, and SLAs.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-6 bg-[#121212]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="text-5xl font-serif mb-6">"</div>
            <p className="text-xl italic mb-8">
              The PO Tracker is amazing! We can check all Purchase Orders
              easily, track their status, and monitor delivery progress. It's
              accurate, always up-to-date, and has significantly improved our
              order management efficiency.
            </p>
            <div className="flex flex-col items-center">
              <p className="font-bold">Kamal</p>
              <p className="text-gray-400">Key Account Manager | Youvit</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Conclusion</h2>
            <p className="text-lg leading-relaxed mb-6">
              Youvit's success demonstrates how purchase order automation can
              transform business operations. With a 99% reduction in processing
              costs and 92% improvement in processing time, the results speak to
              the powerful impact of intelligent automation in modern business
              operations.
            </p>
            <p className="text-gray-400 leading-relaxed">
              By leveraging Google Cloud technologies, including Document AI,
              Cloud Functions, and BigQuery, this project achieved significant
              efficiency gains while dramatically reducing operating costs. The
              automated system continues to deliver value by freeing up human
              resources for higher-value tasks while maintaining exceptional
              accuracy in purchase order processing.
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
              href="/projects/analytics-dashboard"
              className="text-xl font-bold hover:text-[#CBFF4D] transition-colors"
            >
              Analytics Dashboard
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
