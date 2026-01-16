"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Check, Sparkles, Mail, Shield, Zap } from "lucide-react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!validateEmail(email)) {
            setError("Please enter a valid email address");
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            console.log("Subscribed:", email);
            setIsSubmitting(false);
            setIsSubmitted(true);

            // Reset after 3 seconds
            setTimeout(() => {
                setIsSubmitted(false);
                setEmail("");
            }, 3000);
        }, 1500);
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        }
    };

    const benefits = [
        {
            icon: <Zap className="w-5 h-5" />,
            text: "Weekly tech insights"
        },
        {
            icon: <Sparkles className="w-5 h-5" />,
            text: "Exclusive resources"
        },
        {
            icon: <Shield className="w-5 h-5" />,
            text: "No spam, unsubscribe anytime"
        }
    ];

    return (
        <section className="relative py-16 md:py-24 overflow-hidden bg-linear-to-b from-black to-gray-900">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-500/30 to-transparent"></div>

                {/* Animated Grid */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]"></div>

                {/* Floating Orbs */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        x: [0, -10, 0]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                    className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
                />
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Header */}
                    <motion.div variants={itemVariants} className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-6">
                            <Mail className="w-4 h-4 text-cyan-400" />
                            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                                Newsletter
                            </span>
                        </div>

                        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
                            <span className="text-white">Stay </span>
                            <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                Updated
                            </span>
                        </h2>

                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Join our community of developers and get the latest insights, tips, and exclusive resources delivered directly to your inbox.
                        </p>
                    </motion.div>

                    {/* Subscription Form */}
                    <motion.div variants={itemVariants} className="mb-12">
                        <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto">
                            {/* Form Container with Glow */}
                            <div className="relative">
                                <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>

                                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-2 flex flex-col sm:flex-row gap-2">
                                    <div className="flex-1">
                                        <div className="relative">
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                    setError("");
                                                }}
                                                placeholder="Enter your email address"
                                                className="w-full px-6 py-4 bg-transparent text-white placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-transparent"
                                                disabled={isSubmitting || isSubmitted}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting || isSubmitted}
                                        className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitted
                                                ? "bg-linear-to-r from-green-500 to-emerald-600"
                                                : "bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                                            } ${isSubmitting ? "cursor-not-allowed opacity-80" : "hover:shadow-2xl hover:shadow-cyan-500/25"}`}
                                        whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                                                    </svg>
                                                </motion.div>
                                                <span>Subscribing...</span>
                                            </>
                                        ) : isSubmitted ? (
                                            <>
                                                <Check className="w-5 h-5" />
                                                <span>Subscribed!</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                <span>Subscribe</span>
                                            </>
                                        )}
                                    </motion.button>
                                </div>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-400 text-sm mt-3 text-center"
                                >
                                    {error}
                                </motion.p>
                            )}

                            {/* Success Message */}
                            {isSubmitted && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-green-400 text-sm mt-3 text-center flex items-center justify-center gap-2"
                                >
                                    <Check className="w-4 h-4" />
                                    Welcome aboard! Check your email for confirmation.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>

                    {/* Benefits */}
                    <motion.div variants={itemVariants}>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-3 px-4 py-3 bg-gray-800/30 rounded-xl backdrop-blur-sm border border-gray-800"
                                >
                                    <div className="p-2 rounded-lg bg-linear-to-br from-cyan-500/10 to-purple-500/10">
                                        <div className="text-cyan-400">
                                            {benefit.icon}
                                        </div>
                                    </div>
                                    <span className="text-sm text-gray-300">{benefit.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Trust Badge */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-12 text-center"
                    >
                        <p className="text-gray-500 text-sm">
                            Your email is safe with us. We respect your privacy.{" "}
                            <button className="text-cyan-400 hover:text-cyan-300 transition-colors hover:underline">
                                Read our privacy policy
                            </button>
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-5">
                <motion.div
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="w-8 h-8 border-2 border-cyan-500/30 rounded-full"
                ></motion.div>
            </div>

            <div className="absolute bottom-10 right-5">
                <motion.div
                    animate={{
                        rotate: -360,
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="w-6 h-6 border-2 border-purple-500/30 rounded-full"
                ></motion.div>
            </div>
        </section>
    );
}