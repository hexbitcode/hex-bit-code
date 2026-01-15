"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Target, Award, Zap, Facebook, Instagram, Linkedin, Twitter, Globe } from "lucide-react";

export default function About() {
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "8+", label: "Team Members" },
    { number: "5+", label: "Years Experience" }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission-Driven",
      description: "We transform ideas into innovative digital solutions that create lasting impact for our clients worldwide."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Committed to delivering the highest quality work with attention to detail in every project we undertake."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with our clients as true partners, ensuring their vision guides every decision we make."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "Staying ahead with the latest technologies and methodologies to deliver cutting-edge solutions."
    }
  ];

  const teamMembers = [
    {
      name: "Anil Pokharel",
      role: "Founder & Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      website: "https://anilpokharel.com",
      social: [
        { icon: Facebook, link: "https://www.facebook.com/hexbitcode", label: "Facebook" },
        { icon: Instagram, link: "https://www.instagram.com/hexbitcode/", label: "Instagram" },
        { icon: Linkedin, link: "https://www.linkedin.com/company/hexbitcode", label: "LinkedIn" },
        { icon: Twitter, link: "https://twitter.com/hexbitcode", label: "Twitter" }
      ]
    },
    {
      name: "Priya Singh",
      role: "Senior Full-Stack Developer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      website: "https://priyasingh.dev",
      social: [
        { icon: Facebook, link: "https://www.facebook.com/hexbitcode", label: "Facebook" },
        { icon: Instagram, link: "https://www.instagram.com/hexbitcode/", label: "Instagram" },
        { icon: Linkedin, link: "https://www.linkedin.com/company/hexbitcode", label: "LinkedIn" },
        { icon: Twitter, link: "https://twitter.com/hexbitcode", label: "Twitter" }
      ]
    }
  ];

  return (
    <main className="overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20">
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
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">About HexBitCode</span>
          </div>

          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
            <span className="text-white">Transforming Ideas Into </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Digital Reality</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Since our founding, HexBitCode has been at the forefront of digital innovation, helping businesses across the globe achieve their goals through cutting-edge technology and strategic consulting.
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
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-300 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
              <span className="text-white">Our Core </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="text-cyan-400 mb-4">{value.icon}</div>
                <h3 className="font-semibold text-lg text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
              <span className="text-white">Meet Our </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Talented professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                  {/* Profile Image */}
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30 group-hover:border-cyan-500/60 transition-all duration-300">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      width={128}
                      height={128}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  
                  {/* Name and Role */}
                  <h3 className="font-semibold text-2xl text-white mb-2 text-center">{member.name}</h3>
                  <p className="text-cyan-400 text-sm mb-4 text-center">{member.role}</p>
                  
                  {/* Website Link */}
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 mb-6 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 group/link"
                  >
                    <Globe className="w-4 h-4 text-cyan-400 group-hover/link:text-cyan-300" />
                    <span className="text-sm text-gray-300 group-hover/link:text-white">Visit Website</span>
                  </a>
                  
                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    {member.social.map((social, sidx) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={sidx}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={social.label}
                          aria-label={social.label}
                          className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600 hover:border-cyan-500 text-gray-400 hover:text-cyan-400 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-110 cursor-pointer"
                        >
                          <IconComponent className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-bold text-3xl md:text-4xl mb-6 text-white">
              Ready to Transform Your Vision&apos;?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to bring your ideas to life with our expertise and innovation.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              Get In Touch
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}