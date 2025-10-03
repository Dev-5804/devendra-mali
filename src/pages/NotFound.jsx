import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-white text-black flex items-center justify-center px-6 relative overflow-hidden">
            {/* Large Background Text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[200px] md:text-[300px] lg:text-[400px] font-black opacity-[0.02] leading-none pointer-events-none">
                404
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Error Code */}
                <div className="mb-8">
                    <h1 className="text-8xl md:text-9xl font-black leading-none mb-4">
                        404
                    </h1>
                    <div className="w-32 h-1 bg-black mx-auto"></div>
                </div>

                {/* Error Message */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                    PAGE NOT FOUND
                </h2>

                <p className="text-xl md:text-2xl leading-relaxed opacity-70 mb-12 max-w-2xl mx-auto">
                    Oops! The page you're looking for seems to have wandered off into the digital void. 
                    Let's get you back on track.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link
                        to="/"
                        className="group relative px-10 py-5 bg-black text-white text-sm uppercase tracking-widest font-bold overflow-hidden hover:scale-105 transition-transform duration-300"
                    >
                        <span className="relative z-10">Back to Home</span>
                        <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold z-10">
                            Back to Home →
                        </span>
                    </Link>

                    <button
                        onClick={() => navigate(-1)}
                        className="group px-10 py-5 border-2 border-black text-black text-sm uppercase tracking-widest font-bold hover:bg-black hover:text-white hover:scale-105 transition-all duration-300"
                    >
                        Go Back
                    </button>
                </div>

                {/* Quick Links */}
                <div className="mt-16 pt-16 border-t-2 border-black">
                    <p className="text-sm uppercase tracking-wider opacity-60 mb-6">
                        Or explore these sections
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {[
                            { name: 'About', path: '/#about' },
                            { name: 'Projects', path: '/#projects' },
                            { name: 'Contact', path: '/#contact' }
                        ].map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                className="px-6 py-3 border border-black text-sm font-medium hover:bg-black hover:text-white transition-all duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-20 w-40 h-40 border border-black opacity-5 rotate-45 hidden lg:block"></div>
            <div className="absolute bottom-20 left-20 w-32 h-32 bg-black opacity-5 hidden lg:block"></div>
            <div className="absolute top-1/3 left-10 w-20 h-20 border-2 border-black opacity-10 hidden lg:block"></div>
        </div>
    )
}

export default NotFound
