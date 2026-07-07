'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Collaborations = () => {
  // Array from 1 to 11
  const partnerImages = Array.from({ length: 11 }, (_, i) => `/colaboration/${i + 1}.png`);

  return (
    <section className="py-24 bg-white overflow-hidden border-t border-[#efe3da]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.35em] text-[#7b6d62] mb-4 uppercase"
        >
          6 Seasons Studio
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl font-serif text-[#3a3128] flex items-center justify-center before:content-[''] before:h-[1px] before:w-12 md:before:w-20 before:bg-[#d2c5b8] before:mr-4 md:before:mr-6 after:content-[''] after:h-[1px] after:w-12 md:after:w-20 after:bg-[#d2c5b8] after:ml-4 md:after:ml-6 text-balance"
        >
          Our Collaborations
        </motion.h2>
      </div>
      
      <div 
        className="relative w-full overflow-hidden"
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
        }}
      >
        <div className="flex w-max animate-marquee-fast items-center hover:pause">
          {/* Double the array to create a seamless loop */}
          {[...partnerImages, ...partnerImages].map((src, index) => (
            <div key={index} className="w-[160px] md:w-[220px] flex-shrink-0 flex justify-center items-center mx-6 group cursor-pointer">
              <div className="relative w-full h-20 md:h-28 grayscale opacity-50 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110">
                <Image 
                  src={src} 
                  alt={`Collaboration ${index + 1}`} 
                  fill
                  className="object-contain drop-shadow-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Global CSS for the infinite marquee */}
      <style>{`
        @keyframes marquee-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-fast {
          animation: marquee-fast 30s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Collaborations;
