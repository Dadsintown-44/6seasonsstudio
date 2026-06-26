'use client';

import React from 'react';
import { motion } from 'framer-motion';

const QuoteBanner = () => {
  return (
    <section className="py-20 bg-brand-green overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.2em] mb-4 uppercase flex items-center justify-center before:content-[''] before:h-[1px] before:w-12 before:bg-white/50 before:mr-6 after:content-[''] after:h-[1px] after:w-12 after:bg-white/50 after:ml-6"
        >
          6SEASONSTUDIO
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl md:text-5xl font-serif"
        >
          "Moments That Last Forever"
        </motion.h2>
      </div>
    </section>
  );
};

export default QuoteBanner;
