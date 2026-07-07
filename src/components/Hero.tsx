'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { image: '/wedding_events.jpg' },
    { image: '/wedding/1.jpg' },
    { image: '/wedding/10.jpg' },
    { image: '/wedding/11.jpg' },
    { image: '/wedding/8.jpg' },
    { image: '/wedding/12.jpg' },
  ];

  useEffect(() => {
    setLoaded(true);
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      className="hero-shell"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: '#1a1412',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background Slideshow */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 1 }}>
        {slides.map((slide, idx) => (
          <div
            key={idx}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: activeIndex === idx ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
              zIndex: activeIndex === idx ? 2 : 1,
            }}
          >
            <img
              src={slide.image}
              alt={`Wedding background slide ${idx + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: activeIndex === idx ? 'scale(1.08)' : 'scale(1)',
                transition: activeIndex === idx ? 'transform 5500ms linear' : 'none',
              }}
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay for Text Contrast */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(20,15,12,0.55) 0%, rgba(20,15,12,0.45) 50%, rgba(20,15,12,0.6) 100%)',
          zIndex: 3,
        }}
      />

      {/* Hero Content Overlay */}
      <div
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 4,
          maxWidth: 960,
          width: '100%',
          margin: '0 auto',
          padding: '120px 24px 80px',
          textAlign: 'center',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Branding Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            marginBottom: 24,
          }}
        >
          <span
            className="brand-cursive"
            style={{
              fontFamily: '"Pinyon Script", cursive',
              fontSize: 'clamp(58px, 8vw, 84px)',
              color: '#f0dcd3',
              lineHeight: 0.8,
              textShadow: '0 2px 10px rgba(0,0,0,0.25)',
              fontWeight: 400,
            }}
          >
            6 Seasons
          </span>
          <span
            style={{
              fontFamily: '"Lato", sans-serif',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.55em',
              textTransform: 'uppercase',
              color: '#f0dcd3',
              opacity: 0.85,
              paddingLeft: '0.55em',
              marginTop: 4,
            }}
          >
            Studio
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          style={{
            fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
            fontSize: 'clamp(38px, 5.5vw, 76px)',
            fontWeight: 300,
            color: '#ffffff',
            margin: '0 0 20px',
            lineHeight: 1.15,
            letterSpacing: '0.01em',
            textShadow: '0 4px 18px rgba(0,0,0,0.35)',
          }}
        >
          Weddings &amp; Luxury Events
        </motion.h1>

        {/* Short Divider Line */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={loaded ? { opacity: 0.8, width: 80 } : {}}
          transition={{ duration: 1.0, delay: 0.5 }}
          style={{
            height: 1,
            background: 'linear-gradient(to right, transparent, #e5d5c5, transparent)',
            marginBottom: 24,
          }}
        />

        {/* Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
          style={{
            fontFamily: '"Lato", sans-serif',
            fontSize: 'clamp(14px, 1.8vw, 16px)',
            lineHeight: 1.8,
            color: '#f3e8e2',
            maxWidth: 680,
            margin: '0 auto 24px',
            fontWeight: 400,
            opacity: 0.95,
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
          }}
        >
          From intimate affairs to grand destination weddings, we curate experiences that reflect your story, flawlessly planned, beautifully designed, and effortlessly executed.
        </motion.p>

        {/* Quote Block */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={loaded ? { opacity: 0.9, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.7, ease: 'easeOut' }}
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: 'italic',
            fontSize: 'clamp(16px, 2.2vw, 21px)',
            lineHeight: 1.6,
            color: '#e5d5c5',
            maxWidth: 620,
            margin: '0 auto 36px',
            fontWeight: 300,
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
          }}
        >
          &ldquo;It&apos;s the little details that make your day feel like yours and unforgettable for everyone else.&rdquo;
        </motion.p>

      </div>

      {/* Slide dots / bar indicators */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
        }}
      >
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            style={{
              height: 4,
              width: activeIndex === idx ? 32 : 8,
              borderRadius: 2,
              background: activeIndex === idx ? '#ffffff' : 'rgba(255,255,255,0.45)',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Google fonts import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Lato:wght@400;700&family=Pinyon+Script&display=swap');

        @media (max-width: 768px) {
          .hero-content {
            padding: 100px 16px 60px !important;
          }
          
          .brand-cursive {
            font-size: clamp(48px, 12vw, 68px) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;