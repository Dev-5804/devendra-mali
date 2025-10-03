import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import NotFound from './pages/NotFound'
import usePageTracking from './hooks/usePageTracking'

const App = () => {
  // Track page views on route changes
  usePageTracking()

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/:projectId" element={<CaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
