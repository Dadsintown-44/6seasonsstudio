'use client';
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Tabs as MTTabs,
  TabsHeader as MTTabsHeader,
  TabsBody as MTTabsBody,
  Tab as MTTab,
  TabPanel as MTTabPanel,
} from "@material-tailwind/react";

const Tabs = MTTabs as any;
const TabsHeader = MTTabsHeader as any;
const TabsBody = MTTabsBody as any;
const Tab = MTTab as any;
const TabPanel = MTTabPanel as any;
 
export default function TabbedGallery() {
  const [activeTab, setActiveTab] = useState("corporate");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const data = [
    {
      label: "Corporate",
      value: "corporate",
      images: [
        { imageLink: "/gallery/image1.jpeg" },
        { imageLink: "/gallery/image2.jpg" },
        { imageLink: "/gallery/image3.jpg" },
        { imageLink: "/gallery/image4.jpg" },
        { imageLink: "/gallery/image5.jpg" },
        { imageLink: "/gallery/image6.jpg" },
        { imageLink: "/gallery/image7.jpg" },
        { imageLink: "/gallery/image8.jpg" },
      ],
    },
    {
      label: "Wedding",
      value: "wedding",
      images: [
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
      ],
    },
  ];

  const currentImages = data.find(d => d.value === activeTab)?.images || [];

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
        setActiveImageIndex((prev) => prev !== null ? (prev === 0 ? currentImages.length - 1 : prev - 1) : null);
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => prev !== null ? (prev === currentImages.length - 1 ? 0 : prev + 1) : null);
      } else if (e.key === 'Escape') {
        setActiveImageIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, currentImages.length]);

  const splitImages = (imagesList: { imageLink: string }[]) => {
    const mid = Math.ceil(imagesList.length / 2);
    const row1 = imagesList.slice(0, mid).map((img, i) => ({ ...img, originalIndex: i }));
    const row2 = imagesList.slice(mid).map((img, i) => ({ ...img, originalIndex: mid + i }));
    return { row1, row2 };
  };
 
  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-2">Gallery</h2>
        <p className="text-sm tracking-[0.2em] uppercase text-gray-500 relative inline-block before:content-[''] before:absolute before:w-12 before:h-[1px] before:bg-gray-300 before:right-full before:mr-4 before:top-1/2 after:content-[''] after:absolute after:w-12 after:h-[1px] after:bg-gray-300 after:left-full after:ml-4 after:top-1/2">
          That You Will Remember Forever
        </p>
      </div>

      <Tabs value={activeTab}>
        <TabsHeader className="bg-transparent mb-12 flex justify-center border-b border-gray-200 rounded-none w-max mx-auto p-0">
          {data.map(({ label, value }) => (
            <Tab 
              key={value} 
              value={value}
              onClick={() => {
                setActiveTab(value);
                setActiveImageIndex(null);
              }}
              className="text-gray-600 font-medium pb-4 px-8 z-10 w-auto uppercase tracking-widest text-sm"
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="grid grid-cols-1 gap-4">
          {data.map(({ value, images }) => {
            const { row1, row2 } = splitImages(images);
            return (
              <TabPanel
                className="p-0 overflow-hidden"
                key={value}
                value={value}
              >
                <div className="flex flex-col gap-6 py-4">
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
                            className="w-[320px] aspect-[4/3] flex-shrink-0 overflow-hidden rounded-[8px] cursor-pointer group bg-gray-100 relative shadow-sm hover:shadow-md transition-shadow duration-300"
                            onClick={() => setActiveImageIndex(originalIndex)}
                          >
                            <img
                              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                              src={imageLink}
                              alt={`Gallery Image ${originalIndex + 1}`}
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-6 pr-6" aria-hidden="true">
                        {row1.map(({ imageLink, originalIndex }, index) => (
                          <div
                            key={`dup-${index}`}
                            className="w-[320px] aspect-[4/3] flex-shrink-0 overflow-hidden rounded-[8px] cursor-pointer group bg-gray-100 relative shadow-sm hover:shadow-md transition-shadow duration-300"
                            onClick={() => setActiveImageIndex(originalIndex)}
                          >
                            <img
                              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                              src={imageLink}
                              alt={`Gallery Image Duplicate ${originalIndex + 1}`}
                              loading="lazy"
                            />
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
                            className="w-[320px] aspect-[4/3] flex-shrink-0 overflow-hidden rounded-[8px] cursor-pointer group bg-gray-100 relative shadow-sm hover:shadow-md transition-shadow duration-300"
                            onClick={() => setActiveImageIndex(originalIndex)}
                          >
                            <img
                              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                              src={imageLink}
                              alt={`Gallery Image ${originalIndex + 1}`}
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-6 pr-6" aria-hidden="true">
                        {row2.map(({ imageLink, originalIndex }, index) => (
                          <div
                            key={`dup-${index}`}
                            className="w-[320px] aspect-[4/3] flex-shrink-0 overflow-hidden rounded-[8px] cursor-pointer group bg-gray-100 relative shadow-sm hover:shadow-md transition-shadow duration-300"
                            onClick={() => setActiveImageIndex(originalIndex)}
                          >
                            <img
                              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                              src={imageLink}
                              alt={`Gallery Image Duplicate ${originalIndex + 1}`}
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            );
          })}
        </TabsBody>
      </Tabs>

      {/* Fullscreen Lightbox Modal */}
      {activeImageIndex !== null && currentImages[activeImageIndex] && (
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
              src={currentImages[activeImageIndex].imageLink}
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
                setActiveImageIndex(prev => prev === 0 ? currentImages.length - 1 : prev! - 1);
              }}
              className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all duration-200 p-3 hover:bg-white/10 rounded-full"
              aria-label="Previous image"
            >
              <ChevronLeft size={48} className="stroke-[1]" />
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex(prev => prev === currentImages.length - 1 ? 0 : prev! + 1);
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
            {currentImages.map((img, idx) => (
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
