import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

function LazyImage({ src, alt, width, height, style, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
  }

  return (
    <div ref={ref} style={{ position: 'relative', ...style }}>
      {!isLoaded && !hasError && (
        <div
          style={{
            width: '100%',
            height: height || '200px',
            background: '#f5f5f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px'
          }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            border: '3px solid #ddd',
            borderTop: '3px solid #ff9900',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }} />
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}
      {inView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          decoding="async"
          style={{
            width: '100%',
            height: height || '200px',
            objectFit: 'contain',
            minHeight: '120px',
            background: '#fff',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
          referrerPolicy="no-referrer"
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}
      {hasError && (
        <div
          style={{
            width: '100%',
            height: height || '200px',
            background: '#f5f5f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px'
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 400 200"
          >
            <rect fill="#f3f3f3" width="100%" height="100%" />
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#777"
              fontFamily="Arial, Helvetica, sans-serif"
              fontSize="20"
            >
              Image not available
            </text>
          </svg>
        </div>
      )}
    </div>
  )
}

export default LazyImage
