"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, ArrowRight, Star, Users, BarChart3, Clock } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

interface ProjectDetail {
  id: number;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tech: string[];
  techDetails: Array<{ name: string; category: string }>;
  link: string;
  github: string;
  featured: boolean;
  client?: string;
  duration: string;
  team: string;
  result: string;
  metrics: Array<{ label: string; value: string }>;
  features: string[];
  challenges: string[];
  solutions: string[];
  gallery: string[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
}

const projects: ProjectDetail[] = [
  {
    id: 1,
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
    fullDescription: "A comprehensive e-commerce solution built with cutting-edge technology, featuring real-time inventory management, secure payment processing, and an intuitive admin panel for managing products, orders, and customer data.",
    image: "🛍️",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS", "Framer Motion"],
    techDetails: [
      { name: "Next.js 16", category: "Frontend Framework" },
      { name: "TypeScript", category: "Language" },
      { name: "Stripe API", category: "Payment Processing" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Node.js", category: "Backend" },
      { name: "Tailwind CSS", category: "Styling" }
    ],
    link: "https://ecommerce-demo.example.com",
    github: "https://github.com/hexbitcode/ecommerce",
    featured: true,
    client: "TechRetail Inc.",
    duration: "4 months",
    team: "5 developers",
    result: "30% increase in online sales, 50% reduction in cart abandonment",
    metrics: [
      { label: "Performance", value: "98/100" },
      { label: "Conversion Rate", value: "+35%" },
      { label: "Load Time", value: "1.2s" }
    ],
    features: [
      "Secure payment processing with Stripe",
      "Real-time inventory tracking",
      "Advanced search and filtering",
      "Customer reviews and ratings",
      "Personalized recommendations",
      "Order tracking and notifications",
      "Multi-currency support",
      "Mobile-optimized checkout"
    ],
    challenges: [
      "Handling high transaction volumes during peak periods",
      "Integrating multiple payment gateways seamlessly",
      "Maintaining real-time inventory synchronization"
    ],
    solutions: [
      "Implemented caching strategies and database optimization",
      "Created unified payment processing layer",
      "Built robust queue system for inventory updates"
    ],
    gallery: ["🛍️", "💳", "📦", "⭐"],
    testimonial: {
      text: "The platform exceeded our expectations. Sales increased dramatically within the first month, and the admin panel is incredibly user-friendly.",
      author: "John Smith",
      role: "CEO, TechRetail Inc."
    }
  },
  {
    id: 2,
    slug: "real-estate-dashboard",
    title: "Real Estate Dashboard",
    description: "Property management system with advanced filtering, virtual tours, and client communication tools.",
    fullDescription: "A sophisticated real estate management system with advanced property listings, 3D virtual tours, client CRM, and comprehensive analytics for property managers and agents.",
    image: "🏠",
    tech: ["React", "Node.js", "MongoDB", "Google Maps API", "Three.js", "Socket.io"],
    techDetails: [
      { name: "React 19", category: "Frontend Framework" },
      { name: "Node.js", category: "Backend Runtime" },
      { name: "MongoDB", category: "Database" },
      { name: "Google Maps API", category: "Location Services" },
      { name: "Three.js", category: "3D Visualization" },
      { name: "Socket.io", category: "Real-time Communication" }
    ],
    link: "https://realestate-demo.example.com",
    github: "https://github.com/hexbitcode/realestate",
    featured: false,
    client: "PropertyMax Solutions",
    duration: "5 months",
    team: "6 developers",
    result: "25% faster property discovery, 40% increase in client engagement",
    metrics: [
      { label: "Properties Listed", value: "5,000+" },
      { label: "Avg. Response Time", value: "2.5s" },
      { label: "User Satisfaction", value: "4.8/5" }
    ],
    features: [
      "Advanced property search and filtering",
      "3D virtual property tours",
      "Real-time client communication",
      "CRM integration for lead management",
      "Automated property valuation",
      "Market analytics and reports",
      "Document management system",
      "Mobile app companion"
    ],
    challenges: [
      "Optimizing 3D model loading for web browsers",
      "Managing large datasets for property searches",
      "Ensuring real-time synchronization across devices"
    ],
    solutions: [
      "Implemented progressive loading and LOD (Level of Detail) rendering",
      "Used Elasticsearch for fast search indexing",
      "Built WebSocket infrastructure for real-time updates"
    ],
    gallery: ["🏠", "🏡", "🌍", "📊"]
  },
  {
    id: 3,
    slug: "task-management-app",
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, team workspaces, and progress tracking.",
    fullDescription: "A modern collaborative task management application enabling teams to organize, assign, and track work with real-time synchronization and comprehensive progress analytics.",
    image: "📋",
    tech: ["Vue.js", "Firebase", "Tailwind CSS", "Vite", "Pinia"],
    techDetails: [
      { name: "Vue.js 3", category: "Frontend Framework" },
      { name: "Firebase", category: "Backend as a Service" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Vite", category: "Build Tool" },
      { name: "Pinia", category: "State Management" }
    ],
    link: "https://tasks-demo.example.com",
    github: "https://github.com/hexbitcode/taskmgmt",
    featured: false,
    client: "DevTeam Studios",
    duration: "3 months",
    team: "4 developers",
    result: "45% improvement in team productivity, 60% reduction in missed deadlines",
    metrics: [
      { label: "Active Users", value: "2,500+" },
      { label: "Tasks Completed", value: "50,000+" },
      { label: "Uptime", value: "99.9%" }
    ],
    features: [
      "Real-time task synchronization",
      "Team collaboration workspace",
      "Automated progress tracking",
      "Custom task workflows",
      "Time tracking integration",
      "Notification system",
      "Export reports in multiple formats",
      "Mobile-responsive design"
    ],
    challenges: [
      "Maintaining real-time sync with Firebase",
      "Preventing data conflicts in concurrent updates",
      "Scaling to handle multiple teams simultaneously"
    ],
    solutions: [
      "Implemented optimistic UI updates with conflict resolution",
      "Used Firestore transactions for atomic operations",
      "Optimized Firebase queries and indexes"
    ],
    gallery: ["📋", "✅", "⏰", "📈"]
  },
  {
    id: 4,
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Data visualization platform for business intelligence with interactive charts and custom reports.",
    fullDescription: "An advanced analytics dashboard providing real-time business insights with interactive visualizations, custom reporting, and predictive analytics capabilities.",
    image: "📊",
    tech: ["React", "D3.js", "Express", "PostgreSQL", "Redis", "Apache Superset"],
    techDetails: [
      { name: "React 19", category: "Frontend Framework" },
      { name: "D3.js", category: "Data Visualization" },
      { name: "Express.js", category: "Backend Framework" },
      { name: "PostgreSQL", category: "Data Warehouse" },
      { name: "Redis", category: "Caching Layer" }
    ],
    link: "https://analytics-demo.example.com",
    github: "https://github.com/hexbitcode/analytics",
    featured: true,
    client: "DataCore Analytics",
    duration: "6 months",
    team: "7 developers",
    result: "50% faster data processing, 70% improvement in decision-making speed",
    metrics: [
      { label: "Data Points", value: "100M+" },
      { label: "Query Speed", value: "<500ms" },
      { label: "Dashboard Views", value: "1M+/month" }
    ],
    features: [
      "Real-time data processing",
      "Interactive D3.js visualizations",
      "Customizable dashboards",
      "Scheduled report generation",
      "Data export in multiple formats",
      "Role-based access control",
      "Predictive analytics",
      "API for third-party integration"
    ],
    challenges: [
      "Processing massive datasets efficiently",
      "Creating responsive D3 visualizations",
      "Maintaining real-time performance at scale"
    ],
    solutions: [
      "Implemented data aggregation pipeline with Redis caching",
      "Used canvas rendering for large datasets",
      "Optimized SQL queries with proper indexing and materialized views"
    ],
    gallery: ["📊", "📈", "💹", "🎯"]
  }
];

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug as string;

  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <main className="overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bold text-4xl mb-6 text-white">Project Not Found</h1>
          <p className="text-gray-400 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  const relatedProjects = projects.filter(p => p.id !== project.id).slice(0, 3);

  return (
    <main className="overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Breadcrumb & Back Button */}
      <section className="relative pt-20 pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content */}
            <div>
              {project.featured && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-6">
                  <Star className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                  <span className="text-xs font-semibold text-cyan-400 uppercase">Featured Project</span>
                </div>
              )}

              <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-6 text-white">
                {project.title}
              </h1>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {project.fullDescription}
              </p>

              {project.client && (
                <div className="mb-8 p-4 rounded-lg bg-gray-800/50 border border-gray-700/50">
                  <p className="text-sm text-gray-400 mb-1">Client</p>
                  <p className="text-white font-semibold">{project.client}</p>
                </div>
              )}

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Duration</p>
                  <p className="text-white font-semibold flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    {project.duration}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Team Size</p>
                  <p className="text-white font-semibold flex items-center gap-2">
                    <Users className="w-4 h-4 text-cyan-400" />
                    {project.team}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Result</p>
                  <p className="text-white font-semibold flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-cyan-400" />
                    +35%
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2 group"
                >
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  View Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 group"
                >
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  View Code
                </a>
              </div>
            </div>

            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700/50 h-80 flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="text-9xl opacity-40 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl p-4 shadow-xl shadow-cyan-500/25"
              >
                <p className="text-white font-bold text-sm">Featured</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold text-3xl md:text-4xl mb-12 text-white"
          >
            Impact &amp; Results
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {project.metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center"
              >
                <p className="text-sm text-gray-400 mb-2">{metric.label}</p>
                <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {metric.value}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 mt-12 text-center leading-relaxed max-w-3xl mx-auto"
          >
            {project.result}
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold text-3xl md:text-4xl mb-12 text-white"
          >
            Key Features
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {project.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex gap-4 p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <p className="text-gray-300">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold text-3xl md:text-4xl mb-12 text-white"
          >
            Technology Stack
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.techDetails.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <p className="text-sm text-gray-400 mb-2 group-hover:text-cyan-400 transition-colors">
                  {tech.category}
                </p>
                <p className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-2xl md:text-3xl mb-8 text-white">Challenges Faced</h3>
              <div className="space-y-4">
                {project.challenges.map((challenge, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-gray-300"
                  >
                    <p className="flex items-start gap-3">
                      <span className="text-red-400 font-bold mt-1">⚠</span>
                      {challenge}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-2xl md:text-3xl mb-8 text-white">Our Solutions</h3>
              <div className="space-y-4">
                {project.solutions.map((solution, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-gray-300"
                  >
                    <p className="flex items-start gap-3">
                      <span className="text-emerald-400 font-bold mt-1">✓</span>
                      {solution}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="relative py-16 md:py-24">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto p-8 md:p-12 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 relative"
            >
              <div className="absolute -top-6 left-8">
                <span className="text-5xl text-cyan-400 opacity-50">&quot;</span>
              </div>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {project.testimonial.text}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500"></div>
                <div>
                  <p className="font-semibold text-white">{project.testimonial.author}</p>
                  <p className="text-sm text-gray-400">{project.testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold text-3xl md:text-4xl mb-12 text-white text-center"
          >
            Related Projects
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedProjects.map((relProject, idx) => (
              <motion.div
                key={relProject.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={`/projects/${relProject.slug}`}>
                  <div className="h-full group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 p-6 cursor-pointer">
                    <div className="relative h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
                      <div className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-300">
                        {relProject.image}
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg text-white group-hover:text-cyan-400 transition-colors mb-2">
                      {relProject.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {relProject.description}
                    </p>
                    <div className="flex items-center gap-2 text-cyan-400 group-hover:gap-3 transition-all">
                      <span className="text-sm font-semibold">View Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-bold text-3xl md:text-4xl mb-6 text-white">
              Interested in a Similar Project?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Let&apos;s discuss how we can bring your vision to life with the same quality and innovation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
