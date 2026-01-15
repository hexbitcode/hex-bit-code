"use client";

import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Globe,
  Palette,
  Database,
  Cloud,
  Shield,
  BarChart,
  Zap,
  GitBranch
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Scalable, responsive web applications built with modern frameworks like React, Next.js, and Vue.js.",
      features: ["Full-stack solutions", "Progressive Web Apps", "API Integration", "Performance Optimization"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android with seamless user experiences.",
      features: ["iOS Development", "Android Development", "Cross-platform apps", "App store deployment"],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with exceptional user experience.",
      features: ["Wireframing & prototyping", "User testing", "Design systems", "Interactive prototypes"],
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Boost your online presence with SEO, content marketing, and social media strategies.",
      features: ["SEO optimization", "Content strategy", "Social media management", "Analytics & reporting"],
      gradient: "from-rose-500 to-pink-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description: "Optimize database performance, scalability, and security for your applications.",
      features: ["Database optimization", "Data migration", "Backup solutions", "Query optimization"],
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Leverage cloud technology for scalability, reliability, and cost-effective infrastructure.",
      features: ["AWS & Azure setup", "Cloud migration", "DevOps implementation", "Auto-scaling solutions"],
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data.",
      features: ["Security audits", "Penetration testing", "Data encryption", "Compliance management"],
      gradient: "from-red-500 to-pink-600"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Business Intelligence",
      description: "Data-driven insights to make informed decisions and drive business growth.",
      features: ["Analytics dashboard", "Data visualization", "Reporting tools", "Predictive analytics"],
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "DevOps & CI/CD",
      description: "Streamline your development pipeline with modern DevOps practices.",
      features: ["Continuous integration", "Continuous deployment", "Infrastructure automation", "Monitoring & logging"],
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Maximize your application's speed and efficiency for the best user experience.",
      features: ["Code optimization", "Caching strategies", "Load testing", "Performance monitoring"],
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <main className="overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Our Services</span>
          </div>

          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
            <span className="text-white">Comprehensive Digital </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Solutions</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            From concept to deployment, we provide end-to-end digital services tailored to your business needs.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative h-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>

                  <h3 className="font-semibold text-xl text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <div className="pt-4 border-t border-gray-700/50">
                    <ul className="space-y-2">
                      {service.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              How we bring your vision to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Discovery", desc: "Understand your needs" },
              { step: "02", title: "Planning", desc: "Create detailed roadmap" },
              { step: "03", title: "Development", desc: "Build & optimize" },
              { step: "04", title: "Deployment", desc: "Launch & support" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
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
              Ready to Get Started&apos;?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our services can help your business grow and succeed.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              Contact Us Today
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}