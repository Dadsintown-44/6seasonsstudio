'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Venues = () => {
  // Array from 1 to 14
  const venueImages = Array.from({ length: 14 }, (_, i) => `/venues/${i + 1}.png`);

  return (
    <section className="py-20 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.2em] text-gray-500 mb-4 uppercase"
        >
          6SeasonsStudio
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-800 mb-16 uppercase flex items-center justify-center before:content-[''] before:h-[1px] before:w-8 md:before:w-12 before:bg-gray-300 before:mr-4 md:before:mr-6 after:content-[''] after:h-[1px] after:w-8 md:after:w-12 after:bg-gray-300 after:ml-4 md:after:ml-6 text-balance"
        >
          Venues Our Decor Has Left A Mark On
        </motion.h2>
        
        <div className="opacity-80">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={800}
            className="w-full cursor-grab active:cursor-grabbing"
          >
            {venueImages.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="w-full flex justify-center p-2">
                  <div className="relative w-full h-24 md:h-36 flex items-center justify-center">
                    <Image 
                      src={src} 
                      alt={`Venue ${index + 1}`} 
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Venues;
