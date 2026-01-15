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

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+977 9840642294",
      link: "tel:+977984064294"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "info.hexbitcode@gmail.com",
      link: "mailto:info.hexbitcode@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Kathmandu, Nepal",
      link: "#"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      value: "9 AM - 6 PM (Mon-Fri)",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, name: "Facebook", link: "https://www.facebook.com/hexbitcode" },
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram", link: "https://www.instagram.com/hexbitcode/" },
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", link: "https://www.linkedin.com/company/hexbitcode" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", link: "https://twitter.com/hexbitcode" }
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
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Get In Touch</span>
          </div>

          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
            <span className="text-white">Let&apos;s Work </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Together</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Have a question or a project in mind? We&apos;d love to hear from you. Drop us a message and we&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
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

      {/* Contact Form & Map */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <h2 className="font-bold text-3xl md:text-4xl mb-4 text-white">Send us a Message</h2>
                <p className="text-gray-400 text-lg">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-500 text-white placeholder-gray-500 transition-colors duration-300 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-500 text-white placeholder-gray-500 transition-colors duration-300 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this about?"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-500 text-white placeholder-gray-500 transition-colors duration-300 focus:outline-none"
                  />
                </div>

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
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
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

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-semibold text-2xl text-white mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {[
                    "Fast, reliable response times",
                    "Expert team with proven track record",
                    "Custom solutions tailored to your needs",
                    "Transparent communication throughout",
                    "Post-launch support and maintenance",
                    "Competitive pricing and flexible terms"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-2xl text-white mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-cyan-500 text-gray-400 hover:text-cyan-400 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 cursor-pointer"
                      title={social.name}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
              <span className="text-white">Frequently Asked </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Questions</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { q: "What is your typical response time?", a: "We aim to respond to all inquiries within 24 hours during business days." },
              { q: "Do you offer free consultations?", a: "Yes, we offer a free initial consultation to discuss your project and requirements." },
              { q: "What payment methods do you accept?", a: "We accept all major payment methods including bank transfer, credit cards, and PayPal." },
              { q: "Can you work on a fixed timeline?", a: "Absolutely! We provide detailed project timelines and commit to delivering on schedule." }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50"
              >
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  {faq.q}
                </h3>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}