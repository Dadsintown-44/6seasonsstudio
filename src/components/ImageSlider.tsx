'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ImageSliderProps {
  images: string[];
  fullScreen?: boolean;
}

const ImageSlider = ({ images, fullScreen = false }: ImageSliderProps) => {
  const containerClass = `${fullScreen ? 'w-full h-screen' : 'w-full h-full'} relative group slider-container rounded-[4px] overflow-hidden`;

  return (
    <div className={containerClass}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        .slider-container { position: relative; }
        .slider-container .swiper-button-next,
        .slider-container .swiper-button-prev {
          color: #111827;
          background: rgba(255,255,255,0.92);
          width: 56px;
          height: 56px;
          border-radius: 12px;
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 12px 30px rgba(2,6,23,0.12);
          transition: opacity 0.25s ease, transform 0.18s ease;
        }
        .slider-container:hover .swiper-button-next,
        .slider-container:hover .swiper-button-prev {
          opacity: 1;
        }
        .slider-container .swiper-button-next:hover,
        .slider-container .swiper-button-prev:hover {
          transform: translateY(-2px) scale(1.02);
        }
        .slider-container .swiper-button-next:after,
        .slider-container .swiper-button-prev:after {
          font-size: 22px;
          color: #111827;
          opacity: 1;
        }
        .slider-container .swiper-button-next { right: 28px; }
        .slider-container .swiper-button-prev { left: 28px; }
        .slider-container .swiper-pagination-bullet {
          background: rgba(255,255,255,0.85);
          opacity: 0.9;
        }
        .slider-container .swiper-pagination-bullet-active {
          background: #111827;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
