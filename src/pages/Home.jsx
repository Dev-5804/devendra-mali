import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import SkipToContent from '../components/SkipToContent'
import BackToTop from '../components/BackToTop'

const Home = () => {
    return (
        <>
            <SkipToContent />
            <BackToTop />
            <div id="main-content">
                <Hero />
                <About />
                <Projects />
                <Contact />
            </div>
        </>
    )
}

export default Home
