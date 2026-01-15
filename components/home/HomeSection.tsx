"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const PHRASES = [
    'Web Development Solutions',
    'Mobile App Development',
    'Cloud Infrastructure Setup',
    'UI/UX Design Excellence',
    'API Integration & Automation',
    'Digital Transformation'
];

export default function HeroSection() {
    const [text, setText] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentPhrase = PHRASES[phraseIndex];
        const target = currentPhrase.length;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                // Typing phase
                if (charIndex < target) {
                    setText(currentPhrase.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    // Pause before deleting
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, 2000);
                }
            } else {
                // Deleting phase
                if (charIndex > 0) {
                    setText(currentPhrase.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    // Move to next phrase
                    setIsDeleting(false);
                    setPhraseIndex((phraseIndex + 1) % PHRASES.length);
                }
            }
        }, isDeleting ? 30 : 50);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, phraseIndex])

    return (
        <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-[90vh] md:min-h-screen">
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-10">
                <div className="grid lg:grid-cols-1 gap-12 lg:gap-20 items-center justify-center">

                    {/* Content Section */}
                    <div className="text-center">

                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 mb-6">
                            <span className="text-xs font-semibold text-white uppercase tracking-wider">
                                🚀 Next-Gen Development Platform
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                            <span className="block text-white mb-2">Transform Ideas Into</span>
                            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                Digital Excellence
                            </span>
                        </h1>

                        {/* Typewriter Effect */}
                        <div className="h-16 mb-8 flex items-center justify-center">
                            <div 
                                className="text-xl md:text-2xl lg:text-3xl text-cyan-400 font-semibold min-h-12 inline-block"
                            >
                                {text}
                                <span className="animate-blink ml-1">|</span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                            Empower your projects with cutting-edge technology, expert consulting, and innovative solutions that drive real business results and sustainable growth.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 inline-block cursor-pointer"
                            >
                                Get Started
                            </Link>

                            <Link
                                href="/services"
                                className="px-8 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl inline-block cursor-pointer"
                            >
                                View Services
                            </Link>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-12 flex flex-wrap justify-center gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-cyan-400">50+</div>
                                <div className="text-gray-400 text-sm">Projects Delivered</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-400">30+</div>
                                <div className="text-gray-400 text-sm">Happy Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-400">5+</div>
                                <div className="text-gray-400 text-sm">Years Experience</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
    );
}
