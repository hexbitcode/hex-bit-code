"use client";

import { ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20">
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
            <Shield className="w-8 h-8 text-cyan-400" />
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-gray-400">Last updated: January 16, 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              HexBitCode (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Information We Collect</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="font-semibold text-white mb-2">Personal Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Name and email address</li>
                  <li>Phone number and company information</li>
                  <li>Project details and requirements</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Automatically Collected Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Browser type and version</li>
                  <li>IP address and location data</li>
                  <li>Pages visited and time spent</li>
                  <li>Device information and cookies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
              <li>To provide and improve our services</li>
              <li>To respond to your inquiries and requests</li>
              <li>To send marketing and promotional communications</li>
              <li>To analyze website usage and preferences</li>
              <li>To ensure security and prevent fraud</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          {/* Third-Party Sharing */}
          <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Third-Party Sharing</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share information with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
              <li>Service providers who assist us in operations</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your consent</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
              <li>Right to access your personal information</li>
              <li>Right to correct inaccurate data</li>
              <li>Right to delete your information</li>
              <li>Right to opt-out of marketing communications</li>
              <li>Right to data portability</li>
            </ul>
          </section>

          {/* Contact Us */}
          <section className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
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

          {/* Changes to Policy */}
          <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by updating the &quot;Last updated&quot; date at the top of this policy. Your continued use of our website constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
