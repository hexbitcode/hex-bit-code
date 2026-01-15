"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Code,
  Globe,
  Palette,
  Database
} from "lucide-react";

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description: "Scalable, responsive web applications built with modern frameworks like React, Next.js, and Vue.js.",
    features: ["Full-stack solutions", "Progressive Web Apps", "API Integration"],
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.1
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Digital Marketing",
    description: "Boost your online presence with SEO, content marketing, and social media strategies.",
    features: ["SEO optimization", "Content strategy", "Social media management"],
    gradient: "from-rose-500 to-pink-500",
    delay: 0.7
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with exceptional user experience.",
    features: ["Wireframing & prototyping", "User testing", "Design systems"],
    gradient: "from-violet-500 to-purple-500",
    delay: 0.8
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Database Management",
    description: "Optimize database performance, scalability, and security for your applications.",
    features: ["Database optimization", "Data migration", "Backup solutions"],
    gradient: "from-teal-500 to-cyan-500",
    delay: 0.9
  },
];

export default function ServicesPreview() {
  return (
    <section id="services" className="relative py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]"></div>
      
      {/* Animated Orbs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
              Our Expertise
            </span>
          </div>
          
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            <span className="text-white">What We </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Comprehensive digital solutions tailored to transform your business and drive growth in the modern landscape&apos;.
          </p>
          
          {/* Animated HR */}
          <div className="relative w-24 h-1 mx-auto overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600"
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
              
              {/* Service Card */}
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 h-full">
                {/* Icon Container */}
                <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-5`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1 h-1 rounded-full bg-cyan-500"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-gray-700 flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center group cursor-pointer"
            >
              <span>Get Custom Quote</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
            
            <Link
              href="/services"
              className="px-8 py-4 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl group backdrop-blur-sm cursor-pointer"
            >
              View All Services
            </Link>
          </div>
          
          <p className="text-gray-500 text-sm mt-6">
            Need something specific? <Link href="/contact" className="text-cyan-400 cursor-pointer hover:underline">Let&apos;s discuss your project</Link>
          </p>
        </motion.div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute top-1/4 left-10 w-1 h-1 bg-cyan-500/30 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-purple-500/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 left-20 w-1 h-1 bg-cyan-500/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
    </section>
  );
}