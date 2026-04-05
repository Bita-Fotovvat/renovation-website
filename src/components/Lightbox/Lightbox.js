import { useState, useEffect, useCallback } from 'react';
import './Lightbox.scss';

export default function Lightbox({ images, initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  const goTo = useCallback((index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  }, [isAnimating]);

  const goNext = useCallback(() => {
    goTo((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, goTo]);

  const goPrev = useCallback(() => {
    goTo((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, goNext, goPrev]);

  // Touch handling for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
    setTouchStart(null);
  };

  const getImageUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    const baseUrl = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5001';
    return `${baseUrl}${url}`;
  };

  const currentImage = images[currentIndex];

  return (
    <div className="lightbox" onClick={onClose}>
      <div
        className="lightbox__content"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Close button */}
        <button className="lightbox__close" onClick={onClose} aria-label="Close lightbox">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Previous button */}
        {images.length > 1 && (
          <button className="lightbox__nav lightbox__nav--prev" onClick={goPrev} aria-label="Previous image">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        )}

        {/* Image */}
        <div className="lightbox__image-wrapper">
          <img
            className="lightbox__image"
            src={getImageUrl(currentImage.image_url || currentImage)}
            alt={currentImage.alt_text || `Image ${currentIndex + 1}`}
            key={currentIndex}
          />
        </div>

        {/* Next button */}
        {images.length > 1 && (
          <button className="lightbox__nav lightbox__nav--next" onClick={goNext} aria-label="Next image">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        )}

        {/* Counter */}
        <div className="lightbox__counter">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="lightbox__thumbnails">
            {images.map((img, i) => (
              <button
                key={i}
                className={`lightbox__thumb ${i === currentIndex ? 'lightbox__thumb--active' : ''}`}
                onClick={() => goTo(i)}
              >
                <img
                  src={getImageUrl(img.image_url || img)}
                  alt={img.alt_text || `Thumbnail ${i + 1}`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
