// src/pages/Gallery/Gallery.jsx
import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';

const IMAGE_COUNT = 13; // <-- change this to your number of images

export default function Gallery() {
  // Build explicit image URLs using new URL (Vite-compatible).
  // NOTE: path is relative to this file: src/pages/Gallery/Gallery.jsx
  const images = [];
  for (let i = 1; i <= IMAGE_COUNT; i += 1) {
    images.push(new URL(`../assets/Gallery_Images/img${i}.jpg`, import.meta.url).href);
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    if (!isModalOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        showNext();
      } else if (e.key === 'ArrowLeft') {
        showPrev();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isModalOpen, selectedIndex]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isModalOpen]);

  const openModal = (idx) => {
    setSelectedIndex(idx);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedIndex(null);
  };

  const closeOnOverlayClick = (e) => {
    // only close if click was on the overlay background (not on children)
    if (e.target === e.currentTarget) closeModal();
  };

  const showNext = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length));
  };

  const showPrev = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? images.length - 1 : (prev - 1 + images.length) % images.length));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #6366f1 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, #ec4899 0%, transparent 50%)
            `
          }}
        />
      </div>
      <div className="container mx-auto px-4 py-10" style={{ cursor: 'none' }}>
        <header className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-[#880163]">Our camera roll</h1>
          <p className="mt-2 text-black/85 max-w-2xl mx-auto">
            Pictures from events, meets, workshops and more.
          </p>
        </header>

        {/* Masonry-like layout using CSS columns.
            Each item uses break-inside-avoid to not split between columns.
            Images take full column width and keep their aspect ratio (height varies).
        */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          {images.map((src, idx) => (
            <div key={idx} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => openModal(idx)}
                className="w-full focus:outline-none"
                aria-label={`Open image ${idx + 1}`}
              >
                <img
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-auto rounded-lg shadow-sm hover:scale-[1.01] transition-transform duration-150"
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ========== Modal / Lightbox (updated) ========== */}
      <div
        className={`${isModalOpen ? 'fixed' : 'hidden'} inset-0 z-50 flex items-center justify-center bg-black/70`}
        onClick={closeOnOverlayClick}
      >
        {/* Slightly reduced padding to maximize usable area; constrained to viewport */}
        <div className="relative w-full max-w-[98vw] max-h-[98vh] p-2 flex items-center justify-center overflow-auto">
          {/* Close button top-right */}
          <button
            onClick={closeModal}
            className="absolute right-4 top-4 text-[#ffffff] rounded-full p-2 hover:bg-white/10"
            aria-label="Close gallery modal"
          >
            <FiX size={30} />
          </button>

          {/* Prev arrow */}
          <button
            onClick={showPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ffffff] p-3 rounded-full hover:bg-white/10"
            aria-label="Previous image"
          >
            <FiChevronLeft size={50} />
          </button>

          {/* Image container */}
          <div className="mx-2 flex items-center justify-center">
            {selectedIndex !== null && (
              <img
                src={images[selectedIndex]}
                alt={`Image ${selectedIndex + 1}`}
                // Native-size-or-fit: allow the image to be as large as 75vw/75vh,
                // but do not force it to be bigger than that. If the image is smaller,
                // it will render at its intrinsic size.
                style={{
                  boxShadow: '0 6px 24px rgba(0,0,0,0.4)',
                  width: 'auto',
                  height: '50vh',
                  maxWidth: '75vw',   // <--- allow up-scaling up to 75% viewport width
                  maxHeight: '75vh',  // <--- allow up-scaling up to 75% viewport height
                }}
                className="inline-block rounded"
              />
            )}
          </div>

          {/* Next arrow */}
          <button
            onClick={showNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#ffffff] p-3 rounded-full hover:bg-white/10"
            aria-label="Next image"
          >
            <FiChevronRight size={50} />
          </button>
        </div>
      </div>
    </div>
  );
}
