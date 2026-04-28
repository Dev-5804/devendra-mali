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

          {/* Interactive Tech Showcase - Brutalist Grid */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t-2 border-l-2 border-black mb-16">
              {[
                { id: '01', name: 'React', type: 'UI Library', desc: 'Building dynamic user interfaces with modern paradigms.' },
                { id: '02', name: 'Next.js', type: 'Framework', desc: 'Production-grade applications with robust routing.' },
                { id: '03', name: 'TypeScript', type: 'Language', desc: 'Static typing for scalable, bug-free applications.' },
                { id: '04', name: 'JavaScript', type: 'Core', desc: 'The fundamental logic powering web interactions.' },
                { id: '05', name: 'Tailwind CSS', type: 'Styling', desc: 'Utility-first styling for rapid, consistent designs.' },
                { id: '06', name: 'Node.js', type: 'Backend', desc: 'Server-side runtime for robust backends.' },
                { id: '07', name: 'Supabase', type: 'Database', desc: 'Open-source Firebase alternative with PostgreSQL.' },
              ].map((tech) => (
                <div key={tech.id} className="group relative border-b-2 border-r-2 border-black p-8 bg-white hover:bg-black hover:text-white transition-all duration-300">
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-xs font-bold uppercase tracking-widest px-2 py-1 border-2 border-black group-hover:border-white transition-colors duration-300">
                      {tech.type}
                    </span>
                    <span className="text-3xl font-black opacity-20">{tech.id}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-3">{tech.name}</h3>
                  <p className="text-sm opacity-70 leading-relaxed font-medium">
                    {tech.desc}
                  </p>
                  {/* Decorative brutalist block indicating hover */}
                  <div className="absolute bottom-6 right-6 w-3 h-3 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
              
              {/* Decorative 8th Box */}
              <div className="hidden lg:flex border-b-2 border-r-2 border-black bg-black items-center justify-center p-8 group relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'linear-gradient(45deg, white 25%, transparent 25%, transparent 75%, white 75%, white), linear-gradient(45deg, white 25%, transparent 25%, transparent 75%, white 75%, white)',
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 10px 10px'
                }}></div>
                <span className="text-white text-6xl font-black relative z-10 group-hover:scale-125 transition-transform duration-500">+++</span>
              </div>
            </div>

            {/* Bottom Stats Bar */}
            <div className="pt-8 mb-8 border-t-2 border-black/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12">
                <div className="group border-l-4 border-black pl-6 md:pl-8">
                  <div className="text-4xl md:text-5xl font-black mb-2 group-hover:translate-x-2 transition-transform duration-300 inline-block">
                    7+
                  </div>
                  <p className="text-sm uppercase tracking-wider opacity-60 font-bold">Technologies</p>
                </div>
                <div className="group border-l-4 border-black pl-6 md:pl-8">
                  <div className="text-4xl md:text-5xl font-black mb-2 group-hover:translate-x-2 transition-transform duration-300 inline-block">
                    3+
                  </div>
                  <p className="text-sm uppercase tracking-wider opacity-60 font-bold">Frameworks</p>
                </div>
                <div className="group border-l-4 border-black pl-6 md:pl-8">
                  <div className="text-4xl md:text-5xl font-black mb-2 group-hover:translate-x-2 transition-transform duration-300 inline-block">
                    ∞
                  </div>
                  <p className="text-sm uppercase tracking-wider opacity-60 font-bold">Learning</p>
                </div>
                <div className="group border-l-4 border-black pl-6 md:pl-8">
                  <div className="text-4xl md:text-5xl font-black mb-2 group-hover:translate-x-2 transition-transform duration-300 inline-block">
                    24/7
                  </div>
                  <p className="text-sm uppercase tracking-wider opacity-60 font-bold">Passion</p>
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
