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
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {videos.map((video, index) => (
            <motion.a 
              variants={itemVariants}
              key={index} 
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group cursor-pointer aspect-video bg-gray-200 overflow-hidden shadow-sm block rounded-[4px]"
            >
              <Image
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt={video.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors z-10" />

              {/* YouTube Play Button overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-14 h-10 md:w-12 md:h-8 bg-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                  <Play size={18} fill="white" className="text-white ml-1" />
                </div>
              </div>

              {/* Video Info overlay */}
              <div className="absolute top-0 left-0 w-full p-3 z-20 bg-gradient-to-b from-black/80 to-transparent flex items-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white text-sm font-medium truncate drop-shadow-md">{video.title}</h3>
              </div>
              
              {/* Bottom bar overlay */}
              <div className="absolute bottom-0 left-0 w-full p-2 z-20 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-center text-white/90 text-xs">
                <div className="flex space-x-3">
                  <span className="flex items-center space-x-1">
                    <Play size={12} />
                    <span>Watch</span>
                  </span>
                </div>
                <span>YouTube</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoGallery;
