"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight, Phone, Sparkles } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-gradient-to-b from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-xl shadow-xl shadow-black/20 border-b border-gray-800/50"
          : "bg-gradient-to-b from-gray-900/90 via-black/90 to-transparent backdrop-blur-md border-b border-white/10"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 lg:h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <span className="font-bold text-xl lg:text-2xl text-white tracking-tight">
              Hex<span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Bit</span>Code
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            {links.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors group"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            {/* Contact Button */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Get a Quote</span>
                <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-800 text-white transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-screen w-full max-w-sm bg-gradient-to-b from-gray-900 via-black to-gray-900 shadow-2xl shadow-black/50 z-50 lg:hidden"
            >
              <div className="h-full flex flex-col">

                {/* Header */}
                <div className="p-6 border-b border-gray-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-gray-800">
                      <Sparkles className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="font-bold text-xl text-white">
                      Hex<span className="text-cyan-400">Bit</span>Code
                    </span>
                  </div>

                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Links */}
                <div className="flex-1 p-6 overflow-y-auto">
                  <div className="space-y-1">
                    {links.map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between p-4 rounded-xl text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200 group"
                        >
                          <span>{link.name}</span>
                          <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/10 to-emerald-500/10">
                          <Phone className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">Call us anytime</div>
                          <a
                            href="tel:+9779840642294"
                            className="text-lg font-semibold text-white hover:text-cyan-400 transition-colors"
                          >
                            +977 9840642294
                          </a>
                        </div>
                      </div>

                      <Link
                        href="/contact"
                        onClick={() => setOpen(false)}
                        className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                      >
                        <span>Get Free Consultation</span>
                        <ChevronRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-800">
                  <p className="text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} HexBitCode. All rights reserved.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}