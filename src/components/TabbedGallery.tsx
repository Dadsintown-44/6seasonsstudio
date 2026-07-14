'use client';
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type TabbedGalleryProps = {
  showHeader?: boolean;
  edgeToEdge?: boolean;
};

export default function TabbedGallery({ showHeader = true, edgeToEdge = false }: TabbedGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const images = [
    { imageLink: "/gallery/image1.jpeg" },
    { imageLink: "/gallery/image2.jpg" },
    { imageLink: "/gallery/image3.jpg" },
    { imageLink: "/gallery/image4.jpg" },
    { imageLink: "/gallery/image5.jpg" },
    { imageLink: "/gallery/image6.jpg" },
    { imageLink: "/gallery/image7.jpg" },
    { imageLink: "/gallery/image8.jpg" },
    { imageLink: "/wedding/1.jpg" },
    { imageLink: "/wedding/2.jpg" },
    { imageLink: "/wedding/3.png" },
    { imageLink: "/wedding/4.png" },
    { imageLink: "/wedding/5.png" },
    { imageLink: "/wedding/6.jpg" },
    { imageLink: "/wedding/7.jpg" },
    { imageLink: "/wedding/8.jpg" },
    { imageLink: "/wedding/9.jpg" },
    { imageLink: "/wedding/10.jpg" },
    { imageLink: "/wedding/11.jpg" },
    { imageLink: "/wedding/12.jpg" },
  ];

  useEffect(() => {
    if (activeImageIndex !== null) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [activeImageIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => prev !== null ? (prev === 0 ? images.length - 1 : prev - 1) : null);
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => prev !== null ? (prev === images.length - 1 ? 0 : prev + 1) : null);
      } else if (e.key === 'Escape') {
        setActiveImageIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, images.length]);

  const splitImages = (imagesList: { imageLink: string }[]) => {
    const mid = Math.ceil(imagesList.length / 2);
    const row1 = imagesList.slice(0, mid).map((img, i) => ({ ...img, originalIndex: i }));
    const row2 = imagesList.slice(mid).map((img, i) => ({ ...img, originalIndex: mid + i }));
    return { row1, row2 };
  };

  const { row1, row2 } = splitImages(images);
 
  return (
    <div className={edgeToEdge ? 'w-full py-24 overflow-hidden' : 'max-w-7xl mx-auto py-20 px-4'}>
      {showHeader && (
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#3a3128] mb-4">Gallery</h2>
          <p className="text-sm tracking-[0.35em] uppercase text-[#7b6d62] relative inline-block before:content-[''] before:absolute before:w-16 before:h-[1px] before:bg-[#d2c5b8] before:right-full before:mr-6 before:top-1/2 after:content-[''] after:absolute after:w-16 after:h-[1px] after:bg-[#d2c5b8] after:left-full after:ml-6 after:top-1/2">
            That You Will Remember Forever
          </p>
        </div>
      )}

      <div className="flex flex-col gap-6 py-4 overflow-hidden">
        {/* Row 1: Right scrolling (from left to right) */}
        <div className="w-full overflow-hidden relative">
          <div 
            className="flex w-max marquee-track marquee-animate-right"
            style={{ '--speed': `${row1.length * 7}s` } as React.CSSProperties}
          >
            <div className="flex gap-6 pr-6">
              {row1.map(({ imageLink, originalIndex }, index) => (
                <div
                  key={index}
                  className="w-[320px] h-[340px] md:h-[420px] flex-shrink-0 overflow-hidden rounded-[4px] cursor-pointer group bg-[#fffaf4] relative shadow-sm hover:shadow-xl transition-all duration-500 border border-[#efe3da]/40"
                  onClick={() => setActiveImageIndex(originalIndex)}
                >
                  <img
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    src={imageLink}
                    alt={`Gallery Image ${originalIndex + 1}`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#3a3128]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              ))}
            </div>
            <div className="flex gap-6 pr-6" aria-hidden="true">
              {row1.map(({ imageLink, originalIndex }, index) => (
                <div
                  key={`dup-${index}`}
                  className="w-[320px] h-[340px] md:h-[420px] flex-shrink-0 overflow-hidden rounded-[4px] cursor-pointer group bg-[#fffaf4] relative shadow-sm hover:shadow-xl transition-all duration-500 border border-[#efe3da]/40"
                  onClick={() => setActiveImageIndex(originalIndex)}
                >
                  <img
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    src={imageLink}
                    alt={`Gallery Image Duplicate ${originalIndex + 1}`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#3a3128]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Left scrolling (from right to left) */}
        <div className="w-full overflow-hidden relative">
          <div 
            className="flex w-max marquee-track marquee-animate-left"
            style={{ '--speed': `${row2.length * 7}s` } as React.CSSProperties}
          >
            <div className="flex gap-6 pr-6">
              {row2.map(({ imageLink, originalIndex }, index) => (
                <div
                  key={index}
                  className="w-[320px] h-[340px] md:h-[420px] flex-shrink-0 overflow-hidden rounded-[4px] cursor-pointer group bg-[#fffaf4] relative shadow-sm hover:shadow-xl transition-all duration-500 border border-[#efe3da]/40"
                  onClick={() => setActiveImageIndex(originalIndex)}
                >
                  <img
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    src={imageLink}
                    alt={`Gallery Image ${originalIndex + 1}`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#3a3128]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              ))}
            </div>
            <div className="flex gap-6 pr-6" aria-hidden="true">
              {row2.map(({ imageLink, originalIndex }, index) => (
                <div
                  key={`dup-${index}`}
                  className="w-[320px] h-[340px] md:h-[420px] flex-shrink-0 overflow-hidden rounded-[4px] cursor-pointer group bg-[#fffaf4] relative shadow-sm hover:shadow-xl transition-all duration-500 border border-[#efe3da]/40"
                  onClick={() => setActiveImageIndex(originalIndex)}
                >
                  <img
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    src={imageLink}
                    alt={`Gallery Image Duplicate ${originalIndex + 1}`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#3a3128]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeImageIndex !== null && images[activeImageIndex] && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 cursor-zoom-out animate-fade-in"
          onClick={() => setActiveImageIndex(null)}
        >
          {/* Main Image Container */}
          <div
            className="relative max-w-6xl w-full flex-1 flex items-center justify-center min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[activeImageIndex].imageLink}
              alt={`Fullscreen view ${activeImageIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-[4px] shadow-2xl cursor-default transition-all duration-300"
            />
            
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-4 right-4 md:-top-12 md:right-0 text-white/80 hover:text-white transition duration-200 flex items-center gap-2 text-xs uppercase tracking-widest cursor-pointer bg-black/50 md:bg-transparent px-3 py-2 md:p-0 rounded-full md:rounded-none backdrop-blur-md md:backdrop-blur-none"
              aria-label="Close fullscreen view"
            >
              <span className="hidden md:inline">Close</span>
              <X size={20} className="stroke-[1.5]" />
            </button>

            {/* Prev/Next Navigation */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex(prev => prev === 0 ? images.length - 1 : prev! - 1);
              }}
              className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all duration-200 p-3 hover:bg-white/10 rounded-full"
              aria-label="Previous image"
            >
              <ChevronLeft size={48} className="stroke-[1]" />
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex(prev => prev === images.length - 1 ? 0 : prev! + 1);
              }}
              className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all duration-200 p-3 hover:bg-white/10 rounded-full"
              aria-label="Next image"
            >
              <ChevronRight size={48} className="stroke-[1]" />
            </button>
          </div>
          
          {/* Pagination Thumbnails */}
          <div 
            className="mt-6 flex items-center justify-center gap-3 max-w-[100vw] overflow-x-auto pb-6 px-4 shrink-0 scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`flex-shrink-0 relative w-16 h-12 md:w-24 md:h-16 rounded overflow-hidden transition-all duration-300 outline-none ${
                  activeImageIndex === idx 
                    ? 'ring-2 ring-white ring-offset-2 ring-offset-black scale-105 opacity-100' 
                    : 'opacity-40 hover:opacity-100 hover:scale-105'
                }`}
                aria-label={`View image ${idx + 1}`}
              >
                <img 
                  src={img.imageLink} 
                  alt={`Thumbnail ${idx + 1}`} 
                  className="w-full h-full object-cover" 
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Global CSS for animations */}
      <style>{`
        @keyframes marquee-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        .marquee-animate-left {
          animation: marquee-scroll-left var(--speed, 30s) linear infinite;
        }
        .marquee-animate-right {
          animation: marquee-scroll-right var(--speed, 30s) linear infinite;
        }
        
        .marquee-track:hover {
          animation-play-state: paused;
        }
        
        .animate-fade-in {
          animation: fade-in 0.25s ease-out forwards;
        }
        
        .no-scroll {
          overflow: hidden !important;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
