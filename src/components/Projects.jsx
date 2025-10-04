import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { projectsData } from '../data/projectsData'

const Projects = () => {
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

  // Use first 6 projects for display
  const projects = projectsData.slice(0, 6).map((project, index) => ({
    id: project.id,
    title: project.title,
    category: project.category,
    description: project.overview,
    tags: project.technologies.slice(0, 3).map(tech => tech.name),
    size: index === 0 || index === 5 ? 'large' : 'small'
  }))

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="min-h-screen px-6 md:px-12 py-20 relative bg-white overflow-hidden" 
      aria-label="Portfolio projects section"
    >
      {/* Large Background Text */}
      <div className="absolute top-20 right-0 text-[200px] md:text-[300px] font-black opacity-[0.02] leading-none pointer-events-none" aria-hidden="true">
        WORK
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Creative Layout */}
        <div className={`mb-20 flex items-start gap-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Vertical Number */}
          <div className="hidden lg:block">
            <div className="transform -rotate-90 origin-left mt-32">
              <span className="text-sm tracking-[0.3em] uppercase opacity-40">03 / Projects</span>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-8">
              CREATIVE
              <br />
              <span className="italic font-light">solutions</span>
            </h2>
            <div className="w-24 h-1 bg-black mb-8"></div>
            <p className="text-xl md:text-2xl max-w-2xl leading-relaxed opacity-70">
              Each project represents a unique challenge solved with innovation, 
              attention to detail, and a passion for excellence.
            </p>
          </div>
        </div>

        {/* Asymmetric Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/case-study/${project.id}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`group relative overflow-hidden cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              } ${
                project.size === 'large' ? 'lg:col-span-2 lg:row-span-2' : 'lg:col-span-2'
              }`}
              aria-label={`View case study for ${project.title}`}
            >
              {/* Project Card */}
              <div className={`relative h-full border-2 border-black transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
                project.size === 'large' ? 'min-h-[500px]' : 'min-h-[300px]'
              }`}>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5" aria-hidden="true">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, black 0, black 1px, transparent 0, transparent 50%)`,
                    backgroundSize: '10px 10px'
                  }}></div>
                </div>

                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-between">
                  {/* Top Section */}
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-6xl md:text-7xl font-black opacity-10">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xs uppercase tracking-wider border border-black px-3 py-1">
                        {project.category}
                      </span>
                    </div>

                    <h3 className={`font-black leading-tight mb-4 group-hover:translate-x-2 transition-transform duration-300 ${
                      project.size === 'large' ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-3xl md:text-4xl'
                    }`}>
                      {project.title}
                    </h3>

                    <p className={`opacity-70 leading-relaxed ${
                      project.size === 'large' ? 'text-lg md:text-xl' : 'text-base md:text-lg'
                    }`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Section */}
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-xs font-medium px-3 py-1 bg-black text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Button */}
                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm uppercase tracking-widest font-bold">View Case Study</span>
                      <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hover Effect - Corner Peel */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-t-black border-l-[60px] border-l-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-20 flex flex-col md:flex-row items-center justify-between gap-8 border-t-2 border-black pt-12 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div>
            <p className="text-2xl md:text-3xl font-bold mb-2">Like what you see?</p>
            <p className="text-lg opacity-70">Let's build something amazing together.</p>
          </div>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-5 bg-black text-white text-sm uppercase tracking-widest font-bold overflow-hidden cursor-pointer"
            aria-label="Start a new project with me"
          >
            <span className="relative z-10">Start a Project</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold z-10">
              Start a Project →
            </span>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-40 h-40 border-t-2 border-l-2 border-black opacity-10" aria-hidden="true"></div>
    </section>
  )
}

export default Projects
