import React, { useState, useEffect, useRef } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const currentRef = sectionRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const stats = [
    {
      number: 'BE',
      title: 'Information Technology',
      description: 'Currently pursuing degree'
    },
    {
      number: '10+',
      title: 'Projects Built',
      description: 'Personal & academic work'
    },
    {
      number: '100%',
      title: 'Passion Driven',
      description: 'Learning & growing daily'
    }
  ]

  return (
    <>
      <section
        ref={sectionRef}
        id="about"
        className="min-h-screen flex items-center px-6 md:px-12 py-20 relative bg-white"
      >
        {/* Vertical Text Accent */}
        <div className="hidden lg:block absolute left-12 top-1/2 transform -translate-y-1/2 -rotate-90 origin-center" aria-hidden="true">
          <span className="text-8xl font-black opacity-5 tracking-wider">ABOUT</span>
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Column - Main Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
              <p className="text-xs md:text-sm tracking-[0.3em] uppercase opacity-60 mb-8">
                Who I Am
              </p>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
                BUILDING THE
                <br />
                <span className="relative inline-block">
                  FUTURE
                  <div className="absolute bottom-2 left-0 w-full h-3 bg-black opacity-20 -z-10"></div>
                </span>
              </h2>

              <div className="space-y-6 text-lg md:text-xl leading-relaxed opacity-80">
                <p>
                  I'm a passionate <span className="font-bold text-black">Information Technology student</span> and aspiring web developer
                  who loves transforming ideas into elegant digital solutions. With a keen eye for design and a growing expertise in modern
                  technologies, I create experiences that are both beautiful and functional.
                </p>
                <p>
                  Every project is a learning opportunity to push my boundaries, solve complex problems,
                  and craft something meaningful. I believe in the power of
                  <span className="font-bold text-black"> continuous learning</span>,
                  <span className="font-bold text-black"> clean code</span>, and
                  <span className="font-bold text-black"> user-centric design</span>.
                </p>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className={`space-y-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="text-6xl md:text-7xl font-black group-hover:scale-110 transition-transform duration-300 inline-block">
                      {stat.number}
                    </span>
                    <div className="flex-1 h-px bg-black"></div>
                  </div>
                  <p className="text-xl md:text-2xl font-bold">{stat.title}</p>
                  <p className="text-base opacity-60 mt-2">{stat.description}</p>
                </div>
              ))}

              {/* Call to Action */}
              <div className="pt-8">
                <button
                  onClick={() => window.open('/pdf/Devendra_Mali_Resume.pdf', '_blank')}
                  className="group px-8 py-4 bg-black text-white text-sm uppercase tracking-widest font-medium relative overflow-hidden transition-all duration-300 hover:scale-105 w-full md:w-auto cursor-pointer"
                >
                  <span className="relative z-10">View My Resume</span>
                  <div className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium z-10">
                    View My Resume
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-black opacity-5 hidden lg:block"></div>
        <div className="absolute top-40 right-1/4 w-20 h-20 bg-black opacity-5 rounded-full hidden lg:block"></div>
      </section>

      {/* Skills Section - Redesigned */}
      <section className="min-h-screen px-6 md:px-12 py-20 relative bg-white border-t-2 border-black overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, black 1px, transparent 1px),
              linear-gradient(to bottom, black 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Large Background Text - Stacked */}
        <div className="absolute top-1/4 -left-20 transform -rotate-90 origin-center" aria-hidden="true">
          <span className="text-[180px] md:text-[250px] font-black opacity-[0.02] leading-none whitespace-nowrap">STACK</span>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Section Header - Asymmetric */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
            <div className="lg:max-w-xl">
              <p className="text-xs md:text-sm tracking-[0.3em] uppercase opacity-60 mb-6">
                02 / Tech Stack
              </p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9]">
                TOOLS I
                <br />
                <span className="italic font-light">Work With</span>
              </h2>
            </div>
            <div className="lg:max-w-md lg:text-right">
              <div className="w-24 h-1 bg-black mb-6 lg:ml-auto"></div>
              <p className="text-lg md:text-xl leading-relaxed opacity-70">
                A curated selection of technologies I use to bring ideas to life.
              </p>
            </div>
          </div>

          {/* Interactive Tech Showcase */}
          <div className="relative">
            {/* Main Display Area */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Left - Large Featured Stack */}
              <div className="lg:col-span-7 space-y-4">
                {/* Primary Tech Row */}
                <div className="flex flex-wrap gap-4">
                  {['React', 'Next.js', 'TypeScript'].map((tech, index) => (
                    <div 
                      key={tech}
                      className="group relative flex-1 min-w-[140px] bg-black text-white p-6 md:p-8 cursor-default overflow-hidden"
                    >
                      {/* Animated Corner */}
                      <div className="absolute top-0 left-0 w-0 h-0 border-l-[30px] border-t-[30px] border-l-white/20 border-t-transparent transform -rotate-45 origin-top-left"></div>
                      
                      {/* Number */}
                      <span className="absolute top-3 right-4 text-[80px] md:text-[100px] font-black opacity-10 leading-none">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      
                      <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-black mb-2 group-hover:translate-x-1 transition-transform duration-300">
                          {tech}
                        </h3>
                        <p className="text-xs md:text-sm opacity-60 uppercase tracking-wider">
                          {tech === 'React' && 'UI Library'}
                          {tech === 'Next.js' && 'Framework'}
                          {tech === 'TypeScript' && 'Language'}
                        </p>
                      </div>

                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>
                  ))}
                </div>

                {/* Secondary Tech - Horizontal Marquee Style */}
                <div className="border-2 border-black bg-white p-6 md:p-8">
                  <div className="flex items-center justify-between flex-wrap gap-6">
                    {['JavaScript', 'Node.js'].map((tech, index) => (
                      <div key={tech} className="group flex items-center gap-4">
                        <span className="text-5xl md:text-6xl font-black opacity-10">
                          {String(index + 4).padStart(2, '0')}
                        </span>
                        <div>
                          <h3 className="text-xl md:text-2xl font-black group-hover:translate-x-1 transition-transform duration-300">
                            {tech}
                          </h3>
                          <p className="text-xs opacity-50 uppercase tracking-wider">
                            {tech === 'JavaScript' && 'Core Language'}
                            {tech === 'Node.js' && 'Runtime'}
                          </p>
                        </div>
                      </div>
                    ))}
                    {/* Decorative Plus Signs */}
                    <div className="hidden md:flex items-center gap-2 opacity-20">
                      <span className="text-4xl font-black">+</span>
                      <span className="text-4xl font-black">+</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Stacked Cards */}
              <div className="lg:col-span-5 space-y-4">
                {/* Styling Card */}
                <div className="group relative border-2 border-black p-6 md:p-8 bg-white hover:bg-black hover:text-white transition-all duration-500 cursor-default overflow-hidden">
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 border-2 border-current opacity-10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs uppercase tracking-[0.2em] opacity-50 border border-current px-3 py-1">
                      Styling
                    </span>
                    <span className="text-4xl font-black opacity-10">06</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black mb-3 relative z-10">
                    Tailwind CSS
                  </h3>
                  <p className="text-sm opacity-60 leading-relaxed relative z-10">
                    Utility-first framework for rapid, consistent UI development without leaving HTML.
                  </p>
                  
                  {/* Decorative dots */}
                  <div className="absolute bottom-4 right-4 flex gap-1 opacity-30">
                    <div className="w-2 h-2 bg-current rounded-full"></div>
                    <div className="w-2 h-2 bg-current rounded-full"></div>
                    <div className="w-2 h-2 bg-current rounded-full"></div>
                  </div>
                </div>

                {/* Backend Card */}
                <div className="group relative border-2 border-black p-6 md:p-8 bg-white hover:bg-black hover:text-white transition-all duration-500 cursor-default overflow-hidden">
                  <div className="absolute -left-4 -top-4 w-24 h-24 border border-current opacity-10 transform rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
                  
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs uppercase tracking-[0.2em] opacity-50 border border-current px-3 py-1">
                      Backend
                    </span>
                    <span className="text-4xl font-black opacity-10">07</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black mb-3 relative z-10">
                    Supabase
                  </h3>
                  <p className="text-sm opacity-60 leading-relaxed relative z-10">
                    Open-source backend with real-time database, auth, and serverless functions.
                  </p>
                  
                  {/* Decorative lines */}
                  <div className="absolute bottom-4 right-4 flex flex-col gap-1 opacity-20">
                    <div className="w-8 h-[2px] bg-current"></div>
                    <div className="w-6 h-[2px] bg-current"></div>
                    <div className="w-4 h-[2px] bg-current"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats Bar */}
            <div className="mt-12 pt-12 border-t-2 border-black">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="group text-center md:text-left">
                  <div className="text-4xl md:text-5xl font-black mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                    7+
                  </div>
                  <p className="text-sm uppercase tracking-wider opacity-50">Technologies</p>
                </div>
                <div className="group text-center md:text-left">
                  <div className="text-4xl md:text-5xl font-black mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                    3+
                  </div>
                  <p className="text-sm uppercase tracking-wider opacity-50">Frameworks</p>
                </div>
                <div className="group text-center md:text-left">
                  <div className="text-4xl md:text-5xl font-black mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                    ∞
                  </div>
                  <p className="text-sm uppercase tracking-wider opacity-50">Learning</p>
                </div>
                <div className="group text-center md:text-left">
                  <div className="text-4xl md:text-5xl font-black mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                    24/7
                  </div>
                  <p className="text-sm uppercase tracking-wider opacity-50">Passion</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-black opacity-5 hidden lg:block" aria-hidden="true"></div>
        <div className="absolute top-40 left-20 w-20 h-20 bg-black opacity-5 hidden lg:block" aria-hidden="true"></div>
      </section>
    </>
  )
}

export default About
