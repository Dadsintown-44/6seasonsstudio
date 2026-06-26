'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const CorporateHeroSlider = () => {
  // Using the corporate image as placeholder for all slides for now
  const slides = [
    { id: 1, image: '/corporate_Events.jpg', title: 'CREATING MEANINGFUL EXPERIENCES' },
    { id: 2, image: '/corporate_Events.jpg', title: 'ELEVATING CORPORATE EVENTS' },
    { id: 3, image: '/corporate_Events.jpg', title: 'INNOVATIVE SPACES' },
  ];

  return (
    <div className="relative w-full h-[60vh] md:h-[100vh] pt-20">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={1500}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={slide.id === 1}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Text Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center p-4 z-10">
              <h1 className="text-white text-4xl md:text-6xl font-serif max-w-4xl tracking-wider leading-tight drop-shadow-lg">
                {slide.title}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CorporateHeroSlider;
