"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Project() {
  const projects = [
    {
      id: 1,
      slug: "ecommerce-platform",
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
      image: "🛍️",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      link: "https://ecommerce-demo.example.com",
      github: "https://github.com/hexbitcode/ecommerce",
      featured: true
    },
    {
      id: 2,
      slug: "real-estate-dashboard",
      title: "Real Estate Dashboard",
      description: "Property management system with advanced filtering, virtual tours, and client communication tools.",
      image: "🏠",
      tech: ["React", "Node.js", "MongoDB", "Google Maps API"],
      link: "https://realestate-demo.example.com",
      github: "https://github.com/hexbitcode/realestate"
    },
    {
      id: 3,
      slug: "task-management-app",
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team workspaces, and progress tracking.",
      image: "📋",
      tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      link: "https://tasks-demo.example.com",
      github: "https://github.com/hexbitcode/taskmgmt"
    },
    {
      id: 4,
      slug: "analytics-dashboard",
      title: "Analytics Dashboard",
      description: "Data visualization platform for business intelligence with interactive charts and custom reports.",
      image: "📊",
      tech: ["React", "D3.js", "Express", "PostgreSQL"],
      link: "https://analytics-demo.example.com",
      github: "https://github.com/hexbitcode/analytics",
      featured: true
    },
    {
      id: 5,
      slug: "social-network",
      title: "Social Network",
      description: "Social media platform with messaging, notifications, feed algorithms, and user profiles.",
      image: "👥",
      tech: ["Next.js", "GraphQL", "Neo4j", "Redis"],
      link: "#",
      github: "#"
    },
    {
      id: 6,
      slug: "ai-content-generator",
      title: "AI Content Generator",
      description: "Machine learning powered tool for generating, editing, and optimizing content across multiple formats.",
      image: "🤖",
      tech: ["Python", "OpenAI", "React", "FastAPI"],
      link: "#",
      github: "#"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "30+", label: "Happy Clients" },
    { number: "5+", label: "Years in Business" }
  ];

  return (
    <main className="overflow-hidden bg-linear-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Our Portfolio</span>
          </div>

          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
            <span className="text-white">Showcase of </span>
            <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Success</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Explore our portfolio of innovative projects that have transformed businesses and exceeded expectations.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-300 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative h-full"
              >
                {project.featured && (
                  <div className="absolute -top-3 -right-3 z-20">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="flex items-center gap-1 bg-linear-to-r from-cyan-500 to-purple-600 px-3 py-1 rounded-full"
                    >
                      <Star className="w-3 h-3 fill-white" />
                      <span className="text-xs font-semibold text-white">Featured</span>
                    </motion.div>
                  </div>
                )}

                <Link href={`/projects/${project.slug}`}>
                  <div className="relative h-full overflow-hidden rounded-2xl bg-linear-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 cursor-pointer">
                    {/* Project Image Area */}
                    <div className="relative h-40 bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                      <div className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-300">
                        {project.image}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6 flex flex-col h-[calc(100%-160px)]">
                      <h3 className="font-semibold text-xl text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="mb-4 pt-4 border-t border-gray-700/50">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, tidx) => (
                            <span
                              key={tidx}
                              className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex gap-3">
                        <div className="flex-1">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-full px-4 py-2 rounded-lg bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View
                          </a>
                        </div>
                        <div className="flex-1">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        </div>
                      </div>

                      {/* View Details Link */}
                      <div className="mt-4 pt-4 border-t border-gray-700/50 flex items-center justify-between group-hover:text-cyan-400 transition-colors text-sm text-gray-300">
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-bold text-3xl md:text-4xl mb-6 text-white">
              Have Your Next Project In Mind&apos;?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to create something amazing that drives your business forward.
            </p>
            <button className="px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              Start Your Project
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}