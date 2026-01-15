"use client";

import { ArrowLeft, Scale } from "lucide-react";
import Link from "next/link";

export default function TermsOfService() {
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
            <Scale className="w-8 h-8 text-cyan-400" />
            <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-gray-400">Last updated: January 16, 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Agreement */}
          <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Agreement to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms of Service constitute a legally binding agreement made between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and HexBitCode (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), concerning your access to and use of the website and services.
            </p>
          </section>

          {/* Use License */}
          <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Use License</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on HexBitCode&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or other proprietary notations</li>
              <li>Transfer the materials to another person or &quot;mirror&quot; the materials</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          {/* Disclaimer */}
          <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Disclaimer</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                The materials on HexBitCode&apos;s website are provided on an &apos;as is&apos; basis. HexBitCode makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p>
                We do not warrant or make any representations concerning the accuracy, likely results, or reliability of the information found on its Internet web site or relating to such information and third-party web sites.
              </p>
            </div>
          </section>

          {/* Limitations of Liability */}
          <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Limitations of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              In no event shall HexBitCode or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on HexBitCode&apos;s website, even if HexBitCode or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          {/* Accuracy of Materials */}
          <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Accuracy of Materials</h2>
            <p className="text-gray-300 leading-relaxed">
              The materials appearing on HexBitCode&apos;s website could include technical, typographical, or photographic errors. HexBitCode does not warrant that any of the materials on its website are accurate, complete, or current. HexBitCode may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          {/* Materials and Content */}
          <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Materials and Content</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The materials on HexBitCode&apos;s website are protected by copyright. Unauthorized use of these materials may violate copyright, trademark, and other laws. You may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
              <li>Download or reproduce materials for commercial use</li>
              <li>Distribute, license, or transmit the materials</li>
              <li>Modify the materials</li>
              <li>Use any illustrations, photographs, video or audio sequences, or graphic materials</li>
            </ul>
          </section>

          {/* Links */}
          <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Links</h2>
            <p className="text-gray-300 leading-relaxed">
              HexBitCode has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by HexBitCode of the site. Use of any such linked website is at the user&apos;s own risk.
            </p>
          </section>

          {/* Modifications */}
          <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Modifications</h2>
            <p className="text-gray-300 leading-relaxed">
              HexBitCode may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          {/* Governing Law */}
          <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of Nepal, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          {/* Contact Us */}
          <section className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us at:
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
