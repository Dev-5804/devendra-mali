import React from 'react'
import LoadingSpinner from './LoadingSpinner'

const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="large" />
        <p className="mt-8 text-xl font-black uppercase tracking-widest">Loading...</p>
      </div>
    </div>
  )
}

export default PageLoader
