"use client";

import { ArrowLeft, Cookie } from "lucide-react";
import Link from "next/link";

export default function CookiePolicy() {
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
            <Cookie className="w-8 h-8 text-cyan-400" />
            <h1 className="text-4xl md:text-5xl font-bold">Cookie Policy</h1>
          </div>
          <p className="text-gray-400">Last updated: January 16, 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Overview */}
          <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              This Cookie Policy explains how HexBitCode (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Company&quot;) uses cookies and similar tracking technologies on our website. We use cookies to enhance your browsing experience, analyze site usage, and deliver personalized content.
            </p>
          </section>

          {/* What Are Cookies */}
          <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">What Are Cookies?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cookies are small files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They contain information about your browsing activity and preferences and can be retrieved when you visit the website again.
            </p>
            <p className="text-gray-300 leading-relaxed">
              There are different types of cookies: session cookies that are deleted when you close your browser, and persistent cookies that remain on your device until they expire or you delete them.
            </p>
          </section>

          {/* Types of Cookies We Use */}
          <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Essential Cookies
                </h3>
                <p className="text-gray-300 ml-6">These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Performance Cookies
                </h3>
                <p className="text-gray-300 ml-6">These cookies collect information about how you interact with our website, such as which pages you visit, how long you stay, and if you encounter any errors.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  Functional Cookies
                </h3>
                <p className="text-gray-300 ml-6">These cookies remember your preferences and allow us to provide personalized content and features based on your choices.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Marketing Cookies
                </h3>
                <p className="text-gray-300 ml-6">These cookies track your browsing activity to help us display relevant advertisements and measure the effectiveness of marketing campaigns.</p>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Third-Party Cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may allow third-party service providers to place cookies on your device for analytics and advertising purposes, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
              <li>Google Analytics - to analyze website traffic</li>
              <li>Advertising partners - to deliver relevant advertisements</li>
              <li>Social media platforms - to enable social media features</li>
            </ul>
          </section>

          {/* How We Use Cookie Information */}
          <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">How We Use Cookie Information</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
              <li>To remember your login information and preferences</li>
              <li>To analyze website traffic and user behavior</li>
              <li>To improve website functionality and user experience</li>
              <li>To deliver personalized content and advertisements</li>
              <li>To measure the effectiveness of marketing campaigns</li>
              <li>To prevent fraud and enhance security</li>
            </ul>
          </section>

          {/* Your Cookie Choices */}
          <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Your Cookie Choices</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="font-semibold text-white mb-2">Browser Settings</h3>
                <p className="ml-0">You can control cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. However, blocking cookies may affect website functionality.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Opt-Out Options</h3>
                <p className="ml-0">You can opt out of marketing and analytics cookies while still allowing essential cookies. Visit your browser settings or our preference center to manage your choices.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Do Not Track</h3>
                <p className="ml-0">If your browser supports the &quot;Do Not Track&quot; feature, you can enable it. However, we may not respond to all Do Not Track signals.</p>
              </div>
            </div>
          </section>

          {/* Data Retention */}
          <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Data Retention</h2>
            <p className="text-gray-300 leading-relaxed">
              Cookies are retained for varying lengths of time depending on their type. Session cookies are deleted when you close your browser, while persistent cookies may remain for days, months, or years. You can delete cookies manually through your browser settings.
            </p>
          </section>

          {/* Contact Us */}
          <section className="bg-linear-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Questions?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="space-y-2 text-gray-300">
              <p>
                <span className="font-semibold">Email:</span> info.hexbitcode@gmail.com
              </p>
              <p>
                <span className="font-semibold">Location:</span> Kathmandu, Nepal
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
