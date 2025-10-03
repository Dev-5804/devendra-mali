import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/:projectId" element={<CaseStudy />} />
      </Routes>
    </>
  )
}

export default App
