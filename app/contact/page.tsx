"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const contactInfo = [
    { icon: <Phone className="w-6 h-6" />, title: "Phone", value: "+977 9840642294", link: "tel:+977984064294" },
    { icon: <Mail className="w-6 h-6" />, title: "Email", value: "info.hexbitcode@gmail.com", link: "mailto:info.hexbitcode@gmail.com" },
    { icon: <MapPin className="w-6 h-6" />, title: "Location", value: "Kathmandu, Nepal", link: "#" },
    { icon: <Clock className="w-6 h-6" />, title: "Hours", value: "9 AM - 6 PM (Mon-Fri)", link: "#" }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, name: "Facebook", link: "https://www.facebook.com/hexbitcode" },
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram", link: "https://www.instagram.com/hexbitcode/" },
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", link: "https://www.linkedin.com/company/hexbitcode" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", link: "https://twitter.com/hexbitcode" }
  ];

  return (
    <main className="overflow-hidden bg-linear-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Get In Touch</span>
          </div>

          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
            <span className="text-white">Let&apos;s Work </span>
            <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Together</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Have a question or a project in mind? We&apos;d love to hear from you. Drop us a message and we&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-linear-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-linear-to-br from-cyan-500 to-purple-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-white mb-2">{info.title}</h3>
                  <p className="text-gray-400 text-sm group-hover:text-cyan-400 transition-colors duration-300">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Updated gap here */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column: Why Choose Us + Social */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-semibold text-2xl text-white mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-gray-300">
                  {[
                    "Fast, reliable response times",
                    "Expert team with proven track record",
                    "Custom solutions tailored to your needs",
                    "Transparent communication throughout",
                    "Post-launch support and maintenance",
                    "Competitive pricing and flexible terms"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-1 flex items-center justify-center flex-shrink-0 text-white text-xs bg-linear-to-r from-cyan-400 to-purple-500 rounded-full">✓</div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-2xl text-white mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, idx) => (
                    <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer"
                       className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-700 bg-linear-to-br from-gray-800 to-gray-900 hover:border-cyan-500 text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                       title={social.name} aria-label={social.name}>{social.icon}</a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-bold text-3xl md:text-4xl mb-4 text-white">Send us a Message</h2>
              <p className="text-gray-400 text-lg mb-6">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {["name","email","subject"].map((field) => (
                  <div key={field}>
                    <label className="block text-white font-medium mb-2">{field === "name" ? "Full Name" : field === "email" ? "Email Address" : "Subject"}</label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      placeholder={field === "name" ? "Your name" : field === "email" ? "your@email.com" : "What is this about?"}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-500 text-white placeholder-gray-500 transition-colors duration-300 focus:outline-none"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us more about your project..."
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-500 text-white placeholder-gray-500 transition-colors duration-300 focus:outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 text-sm"
                  >
                    ✓ Message sent successfully! We&apos;ll be in touch soon.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
