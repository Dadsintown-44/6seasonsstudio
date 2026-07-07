'use client';

import React from 'react';
import { Play } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const VideoGallery = () => {
  const videos = [
    { title: 'Rustic Romance | Boho-Chic', duration: '3:45', id: 'u1fENfr1k34' },
    { title: 'Lemons, Sunflowers & Sunset', duration: '4:20', id: '_Vz55sS4F5w' },
    { title: 'Whispering Walkways | Hand-Paint', duration: '2:15', id: 'raSefWE1rDY' },
    { title: 'Alice in Wonderland Themed', duration: '3:10', id: 'lK33QywDp70' },
    { title: 'Surleen X Prithvi, Wada Punjabi Wed', duration: '5:30', id: 'xTKHurchXlM' },
    { title: 'Magical Night of Melodies | Sangeet', duration: '4:45', id: 'ZtT3NoJLC1I' },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.35em] text-[#7b6d62] mb-4 uppercase">
            Captured Memories
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#3a3128] mb-4">
            Cinematic Highlights
          </h2>
          <p className="max-w-2xl mx-auto text-base text-[#5f5146]">
            Step into the magic of our curated events.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]"
        >
          {videos.map((video, index) => {
            const isFeatured = index === 0;
            return (
              <motion.a 
                variants={itemVariants}
                key={index} 
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative group cursor-pointer bg-[#fbf5ee] overflow-hidden rounded-[4px] shadow-sm block transition-shadow hover:shadow-xl ${
                  isFeatured ? 'md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1'
                }`}
              >
                <Image
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                
                {/* Default subtle overlay */}
                <div className="absolute inset-0 bg-[#3a3128]/20 group-hover:bg-[#3a3128]/40 transition-colors duration-500 z-10" />

                {/* Elegant Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className={`rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)] group-hover:scale-110 group-hover:bg-white/30 transition-all duration-500 ease-out ${isFeatured ? 'w-24 h-24' : 'w-16 h-16'}`}>
                    <Play size={isFeatured ? 36 : 24} className="text-white fill-white ml-1.5 opacity-90" />
                  </div>
                </div>

                {/* Text overlay sliding up on hover */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-30 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-white/90 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase border border-white/30 px-3 py-1 rounded-full backdrop-blur-sm">
                      Watch Film
                    </span>
                    <span className="text-white/70 text-[10px] md:text-xs tracking-wider">
                      {video.duration}
                    </span>
                  </div>
                  <h3 className={`text-white font-serif drop-shadow-md ${isFeatured ? 'text-2xl md:text-4xl' : 'text-xl'} leading-tight`}>
                    {video.title}
                  </h3>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoGallery;
