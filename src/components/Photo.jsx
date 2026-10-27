// Shows the photo when `src` is set, otherwise a labelled placeholder.
export default function Photo({ src, alt, label, className = '' }) {
  if (src) {
    return <img src={src} alt={alt} loading="lazy" className={`h-full w-full object-cover ${className}`} />
  }
  return (
    <div className={`flex h-full w-full items-center justify-center bg-stone p-6 text-center text-sm text-muted ${className}`}>
      {label}
    </div>
  )
}
