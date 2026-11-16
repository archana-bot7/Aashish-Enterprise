import { useState } from 'react';

const base = import.meta.env.BASE_URL;

// Shows the image from public/<src>. If the file is missing, shows a labelled
// placeholder, so the layout looks right before you add your photos.
export default function Img({ src, alt, label, className = '' }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className={`img-ph ${className}`} role="img" aria-label={alt}>
        <span>{label || alt}</span>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={src.startsWith('/') || src.startsWith('http') ? src : `${base}${src}`}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
