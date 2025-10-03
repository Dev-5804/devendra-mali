import React from 'react'

const LoadingSpinner = ({ size = 'medium', text = '' }) => {
  const sizeClasses = {
    small: 'w-6 h-6 border-2',
    medium: 'w-12 h-12 border-3',
    large: 'w-16 h-16 border-4'
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className={`${sizeClasses[size]} border-black border-t-transparent rounded-full animate-spin`}></div>
      {text && <p className="text-sm uppercase tracking-wider font-medium opacity-70">{text}</p>}
    </div>
  )
}

export default LoadingSpinner
