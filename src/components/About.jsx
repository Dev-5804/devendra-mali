import React, { useState, useEffect, useRef } from 'react'
import { trackResumeView } from '../utils/analytics'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const skills = [
    'React',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Tailwind CSS',
    'Next.js',
    'Supabase'
  ]

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
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
          <div className={`space-y-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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

    {/* Skills Section - Dedicated */}
    <section className="min-h-screen flex items-center px-6 md:px-12 py-20 relative bg-white border-t-2 border-black overflow-hidden">
      {/* Diagonal Stripe Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, black 0, black 2px, transparent 2px, transparent 20px)'
        }}></div>
      </div>

      {/* Large Background Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[150px] md:text-[250px] lg:text-[350px] font-black opacity-[0.02] leading-none pointer-events-none whitespace-nowrap" aria-hidden="true">
        SKILLS
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 border-2 border-black opacity-10 rotate-12 hidden lg:block" aria-hidden="true"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-black opacity-5 rounded-full hidden lg:block" aria-hidden="true"></div>
      <div className="absolute top-1/3 left-10 w-16 h-16 border-2 border-black opacity-10 -rotate-45 hidden lg:block" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase opacity-60 mb-8">
            02 / What I Do
          </p>
          
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-black mb-8 leading-tight">
            TECHNICAL
            <br />
            <span className="relative inline-block">
              <span className="italic font-light">Expertise</span>
              <div className="absolute bottom-2 left-0 w-full h-4 bg-black opacity-10 -z-10"></div>
            </span>
          </h2>
          
          <div className="w-32 h-1 bg-black mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl leading-relaxed opacity-80 max-w-3xl mx-auto">
            Specialized in modern web technologies and frameworks to build 
            scalable, performant, and beautiful applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="group relative border-2 border-black bg-white hover:bg-black hover:text-white transition-all duration-500 overflow-hidden"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Giant Number Background */}
              <div className="absolute -top-4 -right-4 text-[120px] font-black opacity-5 group-hover:opacity-10 leading-none pointer-events-none transition-opacity duration-500">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Diagonal Corner Accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-black border-r-transparent opacity-10 group-hover:opacity-0 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10 p-8 md:p-10">
                <h3 className="text-3xl md:text-4xl font-black mb-4 group-hover:scale-105 transition-transform duration-500">{skill}</h3>
                
                {/* Decorative Line */}
                <div className="w-16 h-1 bg-black group-hover:bg-white group-hover:w-24 transition-all duration-500 mb-4"></div>
                
                {/* Skill Description */}
                <p className="text-sm opacity-70 group-hover:opacity-90 transition-opacity leading-relaxed">
                  {skill === 'React' && 'Component-based UI library for building interactive interfaces'}
                  {skill === 'JavaScript' && 'Core language for web development and modern frameworks'}
                  {skill === 'TypeScript' && 'Strongly typed JavaScript for scalable applications'}
                  {skill === 'Node.js' && 'Server-side JavaScript runtime for backend development'}
                  {skill === 'Tailwind CSS' && 'Utility-first CSS framework for rapid UI development'}
                  {skill === 'Next.js' && 'React framework for production-grade applications'}
                  {skill === 'Supabase' && 'Open-source Firebase alternative for backend services'}
                </p>
              </div>

              {/* Hover Effect - Animated Border */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Bottom Section with Tags */}
        <div className="mt-20 text-center">
          <div className="inline-block border-2 border-black p-8 md:p-12 bg-white relative">
            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-black"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-black"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-black"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-black"></div>

            <p className="text-lg md:text-xl font-bold mb-6 uppercase tracking-wider">
              Core Strengths
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-black text-white text-sm uppercase tracking-wider font-bold hover:scale-105 transition-transform duration-300">
                Quick Learner
              </div>
              <div className="px-6 py-3 bg-black text-white text-sm uppercase tracking-wider font-bold hover:scale-105 transition-transform duration-300">
                Problem Solver
              </div>
              <div className="px-6 py-3 bg-black text-white text-sm uppercase tracking-wider font-bold hover:scale-105 transition-transform duration-300">
                Team Player
              </div>
            </div>
            
            <p className="text-base opacity-70 mt-6 italic">
              "Always learning, always growing. Exploring new technologies every day."
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
