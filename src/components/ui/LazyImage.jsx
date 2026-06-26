import { useState } from 'react'

/**
 * LazyImage — native lazy-loaded, async-decoded image with a
 * graceful gradient fallback if the source fails to load.
 */
export default function LazyImage({
  src,
  alt = '',
  className = '',
  imgClassName = '',
  ...rest
}) {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)

  return (
    <div className={`relative overflow-hidden bg-ink-700 ${className}`}>
      {/* Skeleton shimmer while loading */}
      {!loaded && !errored && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-ink-700 to-ink-600" />
      )}

      {errored ? (
        <div className="flex h-full min-h-[180px] w-full items-center justify-center bg-gradient-to-br from-ink-700 via-ink-600 to-ink-800">
          <span className="text-3xl font-black tracking-widest text-gold/40">
            V555
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={`h-full w-full object-cover transition-opacity duration-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
          {...rest}
        />
      )}
    </div>
  )
}
