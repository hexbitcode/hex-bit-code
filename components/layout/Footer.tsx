"use client";

import {Code,Facebook, Folder,Globe, Home,Instagram, Layers,Palette, Phone, Smartphone,User,  MessageCircle,  Link2, Settings,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-[#0b1f33] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-start md:items-start gap-16 md:gap-24">

        {/* Brand Section */}
        <div className="flex flex-col justify-start space-y-4 md:w-1/3">
          <h2 className="font-bold text-3xl md:text-4xl">
            Hexa <span className="text-emerald-400">Bit</span> Code
          </h2>
          <p className="text-base md:text-lg text-gray-300">
            Building clean, scalable, and efficient digital solutions for modern businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4 md:w-1/4">
          <h2 className="flex items-center gap-2 font-semibold text-lg md:text-xl">
            <Link2 size={18} /> Quick Links
          </h2>
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
              <Home size={16} /> Home
            </Link>
            <Link href="/services" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
              <Layers size={16} /> Services
            </Link>
            <Link href="/contact" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
              <Phone size={16} /> Contact
            </Link>
            <Link href="/projects" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
              <Folder size={16} /> Projects
            </Link>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4 md:w-1/4">
          <h2 className="flex items-center gap-2 font-semibold text-lg md:text-xl">
            <Settings size={18} /> Services
          </h2>
          <ul className="flex flex-col gap-2 text-sm text-gray-300">
            <li className="flex items-center gap-2 hover:text-white transition-colors">
              <Globe size={16} /> Web Development
            </li>
            <li className="flex items-center gap-2 hover:text-white transition-colors">
              <Smartphone size={16} /> Mobile Apps
            </li>
            <li className="flex items-center gap-2 hover:text-white transition-colors">
              <Code size={16} /> Custom Software
            </li>
            <li className="flex items-center gap-2 hover:text-white transition-colors">
              <Palette size={16} /> UI/UX Design
            </li>
          </ul>
        </div>

        {/* Connect / Socials */}
        <div className="flex flex-col gap-4 md:w-1/4">
          <h2 className="flex items-center gap-2 font-semibold text-lg md:text-xl">
            <User size={18} /> Connect
          </h2>
          <div className="flex flex-col gap-2">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-700 hover:bg-blue-600 transition-colors text-white text-sm"
            >
              <Facebook size={16} /> Facebook
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-700 hover:bg-pink-500 transition-colors text-white text-sm"
            >
              <Instagram size={16} /> Instagram
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-700 hover:bg-green-500 transition-colors text-white text-sm"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Hexa Bit Code. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
