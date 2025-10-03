import React from 'react'
import { trackResumeView } from '../utils/analytics'

const About = () => {
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
    <section id="about" className="min-h-screen flex items-center px-6 md:px-12 py-20 relative bg-white" aria-label="About me section">
      {/* Vertical Text Accent */}
      <div className="hidden lg:block absolute left-12 top-1/2 transform -translate-y-1/2 -rotate-90 origin-center" aria-hidden="true">
        <span className="text-8xl font-black opacity-5 tracking-wider">ABOUT</span>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Main Content */}
          <div>
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

            {/* Skills Tags */}
            <div className="mt-12">
              <p className="text-xs tracking-[0.2em] uppercase opacity-60 mb-4">Expertise</p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 border border-black text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-12">
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
  )
}

export default About
