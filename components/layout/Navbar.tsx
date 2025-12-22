"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0b1f33]/90 backdrop-blur border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold text-white tracking-wide"
        >
          Hex<span className="text-emerald-400">Bit</span> Code
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-white transition"
            >
              {link.name}
            </Link>
          ))}

          <button className="bg-emerald-500 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-emerald-600 transition">
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-full bg-[#0b1f33] z-50 md:hidden"
          >
            <div className="p-6 flex flex-col gap-8">

              {/* Close */}
              <div className="flex justify-end">
                <button onClick={() => setOpen(false)} className="text-white">
                  <X size={28} />
                </button>
              </div>

              {/* Links */}
              {links.map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-white/90 hover:text-white transition"
                >
                  {link.name}
                </Link>
              ))}

              <button className="mt-6 bg-emerald-500 text-white py-3 rounded-md font-medium hover:bg-emerald-600 transition">
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
