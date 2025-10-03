import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden" aria-label="Hero section">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-black opacity-5" aria-hidden="true"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-6xl">
          {/* Small Introduction */}
          <div 
            className={`overflow-hidden transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-8 font-light">
              Web Developer & Creative Problem Solver
            </p>
          </div>

          {/* Large Name Typography */}
          <div className="mb-8">
            <h1 
              className={`text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight transition-all duration-1000 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              DEVENDRA
            </h1>
            <h1 
              className={`text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight transition-all duration-1000 delay-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              MALI
            </h1>
            
            {/* Animated Underline */}
            <div 
              className={`h-1 md:h-2 bg-black mt-6 transition-all duration-1500 delay-1000 ${
                isVisible ? 'w-32 md:w-48 opacity-100' : 'w-0 opacity-0'
              }`}
            ></div>
          </div>

          {/* Tagline */}
          <div 
            className={`transition-all duration-1000 delay-1200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-light max-w-3xl leading-relaxed">
              Crafting digital experiences that merge 
              <span className="font-bold"> functionality</span> with
              <span className="font-bold"> aesthetic excellence</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-wrap gap-6 mt-12 transition-all duration-1000 delay-1400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-black text-white text-sm uppercase tracking-widest font-medium overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium z-10">
                View My Work
              </span>
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-white text-black border-2 border-black text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 cursor-pointer"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div 
        className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <p className="text-xs uppercase tracking-widest">Scroll</p>
          <div className="w-[1px] h-16 bg-black"></div>
        </div>
      </div> */}

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-black opacity-20 rotate-45 hidden lg:block"></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-black opacity-5 hidden lg:block"></div>
    </section>
  )
}

export default Hero
