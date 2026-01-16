"use client";

import { ArrowLeft, Map, Home, Briefcase, FolderOpen, Mail, FileText } from "lucide-react";
import Link from "next/link";

export default function Sitemap() {
  const siteStructure = [
    {
      category: "Main Pages",
      icon: Home,
      links: [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/services", label: "Services" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
      ],
    },
    {
      category: "Projects",
      icon: FolderOpen,
      links: [
        { href: "/projects/ecommerce-platform", label: "E-Commerce Platform" },
        { href: "/projects/real-estate-portal", label: "Real Estate Portal" },
        { href: "/projects/task-management", label: "Task Management System" },
        { href: "/projects/analytics-dashboard", label: "Analytics Dashboard" },
      ],
    },
    {
      category: "Legal & Policies",
      icon: FileText,
      links: [
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
        { href: "/cookies", label: "Cookie Policy" },
        { href: "/sitemap", label: "Sitemap" },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-8 text-cyan-400 hover:text-cyan-300 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Map className="w-8 h-8 text-cyan-400" />
            <h1 className="text-4xl md:text-5xl font-bold">Sitemap</h1>
          </div>
          <p className="text-gray-400">Navigate through all pages on HexBitCode</p>
        </div>

        {/* Sitemap Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteStructure.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700">
                  <IconComponent className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-xl font-semibold text-white">{section.category}</h2>
                </div>

                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors group"
                      >
                        <span className="w-1.5 h-1.5 bg-cyan-400/30 rounded-full group-hover:bg-cyan-400 transition-all"></span>
                        <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-linear-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Website Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Total Pages
              </h3>
              <p className="text-3xl font-bold text-cyan-400">11</p>
              <p className="text-gray-400 text-sm mt-1">Main, About, Services, Projects, Contact & more</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                Dynamic Routes
              </h3>
              <p className="text-3xl font-bold text-purple-400">4</p>
              <p className="text-gray-400 text-sm mt-1">Project detail pages with full information</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                Components
              </h3>
              <p className="text-3xl font-bold text-pink-400">5+</p>
              <p className="text-gray-400 text-sm mt-1">Reusable UI components throughout</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/contact"
            className="group p-6 bg-linear-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg hover:border-cyan-500/60 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-white mb-2">Ready to work with us?</h3>
                <p className="text-gray-400 text-sm">Get in touch for a free consultation</p>
              </div>
              <Mail className="w-6 h-6 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/services"
            className="group p-6 bg-linear-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-lg hover:border-purple-500/60 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-white mb-2">Explore our services</h3>
                <p className="text-gray-400 text-sm">Web, mobile, design, and maintenance</p>
              </div>
              <Briefcase className="w-6 h-6 text-purple-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
