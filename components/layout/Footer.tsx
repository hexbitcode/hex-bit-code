"use client";

import {
  Facebook,
  Folder,
  Globe,
  Home,
  Instagram,
  Layers,
  Palette,
  Phone,
  Smartphone,
  User,
  MessageCircle,
  Link2,
  Settings,
  Share2,
  Mail,
  MapPin,
  ArrowRight,
  Heart,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Brand Section - Full width on mobile, 4 cols on desktop */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h2 className="font-bold text-3xl md:text-4xl mb-3">
                Hex<span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Bit</span>Code
              </h2>
              <p className="text-gray-300 text-base leading-relaxed max-w-md">
                Building clean, scalable, and efficient digital solutions for modern businesses worldwide.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/10 to-emerald-500/10">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email us</p>
                  <a href="mailto:info.hexbitcode@gmail.com" className="text-white hover:text-cyan-400 transition-colors">
                    info.hexbitcode@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Based in</p>
                  <p className="text-white">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>

            {/* Newsletter Mini */}
            <div className="pt-4">
              <p className="text-sm text-gray-400 mb-3">Stay updated with our latest</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links - 3 cols on desktop */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-gray-800">
              <Link2 className="w-5 h-5 text-cyan-400" />
              <h3 className="font-semibold text-lg">Quick Links</h3>
            </div>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home", icon: Home },
                { href: "/about", label: "About", icon: User },
                { href: "/services", label: "Services", icon: Layers },
                { href: "/projects", label: "Projects", icon: Folder },
                { href: "/contact", label: "Contact", icon: Phone },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 group"
                  >
                    <link.icon className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                    <span className="text-sm">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - 3 cols on desktop */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-gray-800">
              <Settings className="w-5 h-5 text-emerald-400" />
              <h3 className="font-semibold text-lg">Our Services</h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: Globe, label: "Web Development", color: "text-blue-400" },
                { icon: Smartphone, label: "Mobile Apps", color: "text-purple-400" },
                { icon: Palette, label: "UI/UX Design", color: "text-pink-400" },
                { icon: Settings, label: "Maintenance", color: "text-yellow-400" },
              ].map((service, index) => (
                <li key={index} className="group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
                    <div className={`p-2 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-gray-700 group-hover:to-gray-800`}>
                      <service.icon className={`w-4 h-4 ${service.color}`} />
                    </div>
                    <span className="text-sm text-gray-300 group-hover:text-white">{service.label}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect - 3 cols on desktop */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-gray-800">
              <Share2 className="w-5 h-5 text-purple-400" />
              <h3 className="font-semibold text-lg">Connect With Us</h3>
            </div>

            <div className="space-y-4 mb-8">
              <p className="text-gray-300 text-sm leading-relaxed">
                Follow us for updates, tech insights, and behind-the-scenes content.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    href: "https://www.facebook.com/hexbitcode",
                    icon: Facebook,
                    label: "Facebook",
                    color: "hover:bg-blue-600 hover:border-blue-600",
                    iconColor: "text-blue-400"
                  },
                  {
                    href: "https://www.instagram.com/hexbitcode/",
                    icon: Instagram,
                    label: "Instagram",
                    color: "hover:bg-pink-600 hover:border-pink-600",
                    iconColor: "text-pink-400"
                  },
                  {
                    href: "https://wa.me/9779840642294",
                    icon: MessageCircle,
                    label: "WhatsApp",
                    color: "hover:bg-green-600 hover:border-green-600",
                    iconColor: "text-green-400"
                  },
                ].map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-800 bg-gray-900/50 hover:scale-105 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className={`w-5 h-5 ${social.iconColor}`} />
                    <span className="text-sm font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-gray-800">
              <p className="text-sm text-gray-300 mb-3">Ready to start your project?</p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} HexBitCode. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with <Heart className="w-3 h-3 inline text-red-400" /> by the HexBitCode team
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
            <a href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-4 h-4 bg-cyan-500/20 rounded-full blur-sm"></div>
      <div className="absolute top-10 right-10 w-3 h-3 bg-purple-500/20 rounded-full blur-sm"></div>
    </footer>
  );
}

export default Footer;