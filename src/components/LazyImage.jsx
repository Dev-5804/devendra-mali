import React, { useState } from 'react'

const LazyImage = ({ src, alt, className, ...props }) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div className="relative">
      {!loaded && !error && (
        <div className={`${className} image-loading absolute inset-0`} aria-hidden="true"></div>
      )}
      
      <img
        src={src}
        alt={alt}
        className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        loading="lazy"
        {...props}
      />
      
      {error && (
        <div className={`${className} flex items-center justify-center bg-gray-100 text-gray-400`}>
          <span className="text-sm">Image unavailable</span>
        </div>
      )}
    </div>
  )
}

export default LazyImage
