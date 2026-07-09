'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const CorporateHeroSlider = () => {
  const slides = [
    { id: 1, image: '/corporate_Events.jpg' },
    { id: 2, image: '/corporate_Events.jpg' },
    { id: 3, image: '/corporate_Events.jpg' },
  ];

  return (
    <div className="relative w-full h-[60vh] md:h-[100vh] pt-20 flex items-center justify-center">
      <div className="absolute inset-0 z-0">
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
                alt="Corporate Events"
                fill
                className="object-cover"
                priority={slide.id === 1}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Overlay to darken background */}
      <div className="absolute inset-0 bg-black/50 z-0" />
      
      {/* Static Text Content matching the image design */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-10 md:mt-0 flex flex-col items-center">
        <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-[#d2c5b8] font-semibold mb-6">
          Corporate Events
        </p>
        
        <h1 className="text-white text-5xl md:text-7xl font-serif tracking-tight leading-tight mb-8">
          Experiences<br className="hidden md:block" /> That Inspire<span className="text-[#d2c5b8]">.</span>
        </h1>
        
        <p className="max-w-2xl text-white/90 text-sm md:text-lg leading-relaxed mb-10">
          From conferences and product launches to award nights and annual celebrations – we create events that build stronger brands and meaningful connections.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
          <Link 
            href="/contact" 
            className="w-full sm:w-auto px-8 py-3.5 bg-[#d2c5b8] hover:bg-[#bdafa0] text-[#3a3128] text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 flex items-center justify-center gap-2"
          >
            Plan Your Event <span className="text-lg leading-none">&rarr;</span>
          </Link>
          
          <Link 
            href="/pdf/corporate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 border border-[#d2c5b8] text-[#d2c5b8] hover:bg-[#d2c5b8]/10 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 flex items-center justify-center gap-2"
          >
            View Brochure <span className="text-lg leading-none">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CorporateHeroSlider;
