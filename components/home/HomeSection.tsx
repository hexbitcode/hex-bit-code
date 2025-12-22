export default function HeroSection() {
    return (
        <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-[90vh] md:min-h-screen">
            <div className="relative z-10 container mx-auto px-4 py-16 md:py-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Content Section */}
                    <div className="text-center lg:text-left">

                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 mb-6">
                            <span className="text-xs font-semibold text-white uppercase tracking-wider">
                                🚀 Next-Gen Development Platform
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                            <span className="block text-white mb-2">Build Faster with</span>
                            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                HexBitCode
                            </span>
                        </h1>

                        {/* Subheading/Description */}
                        <p className="text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
                            Empower your projects with our cutting-edge tools and expert consulting services. Deliver high-quality software solutions with unparalleled speed and efficiency.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center group">
                                <span>Contact us</span>
                            </button>

                            <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl flex items-center justify-center group">
                                <span>View Services</span>
                            </button>
                        </div>

                    </div>

                    {/* Hero Image Section */}
                    <div className="relative">
                        {/* Floating Card Elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl transform rotate-12 shadow-2xl shadow-cyan-500/25">
                            <div className="h-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">⚡</span>
                            </div>
                        </div>

                        <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl transform -rotate-12 shadow-2xl shadow-purple-500/25">
                            <div className="h-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">🚀</span>
                            </div>
                        </div>

                        {/* Main Hero Image Container */}
                        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-1 shadow-2xl">
                            <div className="bg-gray-900 rounded-2xl overflow-hidden">
                                {/* Code Editor Simulation */}
                                <div className="bg-gray-950 p-4">
                                    <div className="flex gap-2 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="font-mono text-sm text-gray-300">
                                        <div className="flex">
                                            <span className="text-gray-500 mr-4">1</span>
                                            <span className="text-purple-400">const</span>
                                            <span className="text-cyan-400">project</span>
                                            <span className="text-white"> = </span>
                                            <span className="text-emerald-400">new</span>
                                            <span className="text-white"> HexBitCode</span>
                                            <span className="text-yellow-300">()</span>
                                        </div>
                                        <div className="flex">
                                            <span className="text-gray-500 mr-4">2</span>
                                        </div>
                                        <div className="flex">
                                            <span className="text-gray-500 mr-4">3</span>
                                            <span className="text-cyan-400">project</span>
                                            <span className="text-yellow-300">.</span>
                                            <span className="text-white">deploy</span>
                                            <span className="text-yellow-300">(</span>
                                            <span className="text-amber-300">{`{`}</span>
                                        </div>
                                        <div className="flex">
                                            <span className="text-gray-500 mr-4">4</span>
                                            <span className="text-white ml-8">speed:</span>
                                            <span className="text-emerald-400"> "10x"</span>
                                            <span className="text-amber-300">,</span>
                                        </div>
                                        <div className="flex">
                                            <span className="text-gray-500 mr-4">5</span>
                                            <span className="text-white ml-8">efficiency:</span>
                                            <span className="text-emerald-400"> "max"</span>
                                        </div>
                                        <div className="flex">
                                            <span className="text-gray-500 mr-4">6</span>
                                            <span className="text-amber-300 ml-4">{`}`}</span>
                                            <span className="text-yellow-300">)</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Dashboard Preview */}
                                <div className="p-6">
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        {['🚀 Deploy', '⚡ Speed', '🛡️ Secure'].map((item, idx) => (
                                            <div key={idx} className="bg-gray-800 rounded-xl p-3 text-center">
                                                <div className="text-sm text-gray-300">{item}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="h-32 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-gray-800 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-white font-semibold">Live Preview</div>
                                            <div className="text-sm text-gray-400 mt-1">Real-time collaboration enabled</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Notification */}
                        <div className="absolute -right-4 bottom-20 bg-gray-800 border-l-4 border-cyan-500 rounded-r-xl p-4 shadow-xl max-w-xs">
                            <div className="text-sm text-white font-medium">Deployment complete!</div>
                            <div className="text-xs text-gray-400">Your app is live 🎉</div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}