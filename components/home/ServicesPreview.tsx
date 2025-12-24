"use client";

import { motion } from "framer-motion";
import { Code, Globe, Palette, Database } from "lucide-react";

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description:
      "Scalable, responsive web applications built with modern frameworks like React, Next.js, and Vue.js.",
    features: ["Full-stack solutions", "Progressive Web Apps", "API Integration"],
    linear: "from-blue-500 to-cyan-500",
    delay: 0.1,
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Digital Marketing",
    description:
      "Boost your online presence with SEO, content marketing, and social media strategies.",
    features: ["SEO optimization", "Content strategy", "Social media management"],
    linear: "from-rose-500 to-pink-500",
    delay: 0.2,
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description:
      "User-centered design that combines aesthetics with exceptional user experience.",
    features: ["Wireframing & prototyping", "User testing", "Design systems"],
    linear: "from-violet-500 to-purple-500",
    delay: 0.3,
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Database Management",
    description:
      "Optimize database performance, scalability, and security for your applications.",
    features: ["Database optimization", "Data migration", "Backup solutions"],
    linear: "from-teal-500 to-cyan-500",
    delay: 0.4,
  },
];

export default function ServicesPreview() {
  return (
    <section
      id="services"
      className="relative py-16 md:py-24 bg-linear-to-b from-gray-900 to-black overflow-hidden"
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 px-4"
        >
          <h2 className="font-bold text-4xl md:text-5xl mb-4">
            <span className="text-white">What We </span>
            <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to transform your business.
          </p>
        </motion.div>

        {/* ✅ SERVICES GRID — LEFT + RIGHT GAP */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-10 md:px-20 lg:px-32">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow */}
              <div
                className={`absolute -inset-0.5 bg-linear-to-r ${service.linear} rounded-2xl blur opacity-0 group-hover:opacity-30 transition`}
              />

              {/* Card */}
              <div className="relative bg-gray-900/60 border border-gray-800 rounded-2xl p-6 h-full">
                <div
                  className={`inline-flex p-3 rounded-xl bg-linear-to-br ${service.linear} mb-5 text-white`}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <span className="w-1 h-1 rounded-full bg-cyan-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
