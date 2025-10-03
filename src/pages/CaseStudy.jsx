import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProjectById, getNextProject } from '../data/projectsData'

const CaseStudy = () => {
    const { projectId } = useParams()
    const navigate = useNavigate()
    const project = getProjectById(projectId)
    const nextProject = project ? getNextProject(projectId) : null

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [projectId])

    if (!project) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center px-6">
                <div className="text-center">
                    <h1 className="text-6xl font-black mb-4">404</h1>
                    <p className="text-2xl mb-8">Project not found</p>
                    <Link
                        to="/"
                        className="px-8 py-4 bg-black text-white font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300 inline-block"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white text-black">
            {/* Navigation Header */}
            <header className="border-b-2 border-black px-6 md:px-12 py-8 sticky top-0 bg-white z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        className="text-xl md:text-2xl font-black hover:translate-x-[-4px] transition-transform duration-300"
                    >
                        ← DEVENDRA MALI
                    </button>
                    <div className="flex gap-6 text-sm font-bold uppercase tracking-wider">
                        <button
                            onClick={() => navigate(-1)}
                            className="hover:underline"
                        >
                            Back
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="px-6 md:px-12 py-20 border-b-2 border-black">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-5 gap-12 mb-12">
                        <div className="lg:col-span-3">
                            <div className="flex gap-6 text-xs uppercase tracking-wider mb-6 opacity-60">
                                <span>{project.year}</span>
                                <span>•</span>
                                <span>{project.category}</span>
                                <span>•</span>
                                <span>{project.duration}</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none mb-6">
                                {project.title}
                            </h1>

                            <p className="text-2xl md:text-3xl font-light italic opacity-80 mb-8">
                                {project.subtitle}
                            </p>

                            <p className="text-lg md:text-xl leading-relaxed opacity-80">
                                {project.overview}
                            </p>
                        </div>

                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h3 className="text-sm uppercase tracking-wider font-bold mb-3 opacity-60">Role</h3>
                                <p className="text-xl font-bold">{project.role}</p>
                            </div>

                            <div>
                                <h3 className="text-sm uppercase tracking-wider font-bold mb-3 opacity-60">Duration</h3>
                                <p className="text-xl font-bold">{project.duration}</p>
                            </div>

                            {project.links.live && (
                                <a
                                    href={project.links.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-8 py-4 bg-black text-white text-sm uppercase tracking-widest font-bold hover:scale-105 transition-transform duration-300"
                                >
                                    View Live Site →
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Hero Image Placeholder */}
                    <div className="aspect-[16/9] bg-gray-100 border-2 border-black flex items-center justify-center">
                        <span className="text-6xl font-black opacity-10">PROJECT IMAGE</span>
                    </div>
                </div>
            </section>

            {/* Challenge Section */}
            <section className="px-6 md:px-12 py-20 border-b-2 border-black">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black mb-8">
                                {project.challenge.title}
                            </h2>
                            <div className="w-24 h-1 bg-black"></div>
                        </div>

                        <div>
                            <p className="text-xl leading-relaxed mb-8 opacity-80">
                                {project.challenge.description}
                            </p>

                            <ul className="space-y-4">
                                {project.challenge.points.map((point, index) => (
                                    <li key={index} className="flex gap-4">
                                        <span className="text-2xl font-black opacity-20">{String(index + 1).padStart(2, '0')}</span>
                                        <p className="text-lg leading-relaxed flex-1">{point}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="px-6 md:px-12 py-20 border-b-2 border-black bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black mb-8">
                                {project.solution.title}
                            </h2>
                            <div className="w-24 h-1 bg-white"></div>
                        </div>

                        <div>
                            <p className="text-xl leading-relaxed mb-8 opacity-80">
                                {project.solution.description}
                            </p>

                            <div className="space-y-4">
                                {project.solution.approach.map((item, index) => (
                                    <div key={index} className="flex gap-4 items-start">
                                        <div className="w-8 h-8 border-2 border-white flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-sm font-black">✓</span>
                                        </div>
                                        <p className="text-lg leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="px-6 md:px-12 py-20 border-b-2 border-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black mb-12">Technologies Used</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {project.technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="border-2 border-black p-6 hover:bg-black hover:text-white transition-all duration-300 group"
                            >
                                <p className="text-xs uppercase tracking-wider mb-2 opacity-60 group-hover:opacity-80">
                                    {tech.category}
                                </p>
                                <p className="text-2xl font-black">{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="px-6 md:px-12 py-20 border-b-2 border-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black mb-12">Key Features</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {project.features.map((feature, index) => (
                            <div key={index} className="border-2 border-black p-8">
                                <div className="text-6xl font-black opacity-10 mb-4">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                                <h3 className="text-2xl font-black mb-4">{feature.title}</h3>
                                <p className="text-lg leading-relaxed opacity-80">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="px-6 md:px-12 py-20 border-b-2 border-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black mb-12">Results & Impact</h2>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        {project.results.metrics.map((metric, index) => (
                            <div key={index} className="text-center border-2 border-black p-8">
                                <div className="text-4xl md:text-5xl font-black mb-2">{metric.value}</div>
                                <p className="text-sm uppercase tracking-wider opacity-60">{metric.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Outcomes */}
                    <div className="space-y-6">
                        {project.results.outcomes.map((outcome, index) => (
                            <div key={index} className="flex gap-4 items-start">
                                <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-black flex-shrink-0 mt-1">
                                    ✓
                                </div>
                                <p className="text-lg md:text-xl leading-relaxed">{outcome}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Links Section */}
            {(project.links.github || project.links.demo || project.links.live) && (
                <section className="px-6 md:px-12 py-20 border-b-2 border-black bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-black mb-8">Project Links</h2>

                        <div className="flex flex-wrap gap-6">
                            {project.links.live && (
                                <a
                                    href={project.links.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-black text-white text-sm uppercase tracking-widest font-bold hover:scale-105 transition-transform duration-300"
                                >
                                    Live Website →
                                </a>
                            )}

                            {project.links.github && (
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 border-2 border-black text-black text-sm uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-all duration-300"
                                >
                                    GitHub Repository →
                                </a>
                            )}

                            {project.links.demo && (
                                <a
                                    href={project.links.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 border-2 border-black text-black text-sm uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-all duration-300"
                                >
                                    View Demo →
                                </a>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* Next Project Section */}
            {nextProject && (
                <section className="px-6 md:px-12 py-20">
                    <div className="max-w-7xl mx-auto">
                        <p className="text-sm uppercase tracking-wider mb-6 opacity-60">Next Project</p>

                        <Link
                            to={`/case-study/${nextProject.id}`}
                            className="group block border-2 border-black p-8 md:p-12 hover:bg-black hover:text-white transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-4xl md:text-5xl font-black">
                                    {nextProject.title}
                                </h3>
                                <svg
                                    className="w-12 h-12 transform group-hover:translate-x-2 transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                            <p className="text-xl opacity-80">{nextProject.subtitle}</p>
                        </Link>
                    </div>
                </section>
            )}

            {/* Footer */}
            <footer className="border-t-2 border-black px-6 md:px-12 py-8">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-sm opacity-60">
                        © {new Date().getFullYear()} Devendra Mali. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default CaseStudy
