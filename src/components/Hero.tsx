'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <section
      className="hero-shell"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: '#faf4ef',
        minHeight: '100vh',
        fontFamily: '"Cormorant Garamond", "Georgia", serif',
      }}
    >
      {/* Decorative leaf SVG top-right */}
      <svg
        style={{ position: 'absolute', top: 0, right: 0, width: 220, opacity: 0.55, pointerEvents: 'none', zIndex: 1 }}
        viewBox="0 0 220 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M180 10 C160 60, 120 90, 80 140 C50 180, 30 230, 20 260" stroke="#b5826a" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
        <ellipse cx="155" cy="55" rx="38" ry="18" fill="#c8a07a" opacity="0.22" transform="rotate(-35 155 55)" />
        <ellipse cx="120" cy="100" rx="32" ry="14" fill="#a87d5a" opacity="0.18" transform="rotate(-50 120 100)" />
        <ellipse cx="88" cy="148" rx="28" ry="12" fill="#b08860" opacity="0.16" transform="rotate(-60 88 148)" />
      </svg>

      {/* Decorative leaf SVG bottom-left */}
      <svg
        style={{ position: 'absolute', bottom: 0, left: 0, width: 160, opacity: 0.45, pointerEvents: 'none', zIndex: 1 }}
        viewBox="0 0 160 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M30 200 C45 160, 70 130, 90 90 C110 55, 130 30, 150 10" stroke="#b5826a" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
        <ellipse cx="60" cy="150" rx="30" ry="13" fill="#c8a07a" opacity="0.20" transform="rotate(30 60 150)" />
        <ellipse cx="95" cy="105" rx="26" ry="11" fill="#a87d5a" opacity="0.16" transform="rotate(20 95 105)" />
      </svg>

      {/* Content */}
      <div
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 1280,
          margin: '0 auto',
          padding: '72px 48px 80px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 56,
          alignItems: 'center',
        }}
      >
        {/* LEFT COLUMN */}
        <div
          className="hero-left"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateX(0)' : 'translateX(-28px)',
            transition: 'opacity 0.85s ease, transform 0.85s ease',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#ecddd4',
              borderRadius: 999,
              padding: '6px 18px',
              marginBottom: 28,
            }}
          >
            <span style={{ color: '#c87159', fontSize: 13, fontWeight: 600 }}>✦</span>
            <span
              style={{
                fontFamily: '"Lato", sans-serif',
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.38em',
                textTransform: 'uppercase',
                color: '#7a5c4a',
              }}
            >
              Luxury Wedding &amp; Events Studio
            </span>
            <span style={{ color: '#c87159', fontSize: 13, fontWeight: 600 }}>✦</span>
          </div>

          {/* Headline */}
          <h1
            style={{
              margin: 0,
              lineHeight: 1.0,
              color: '#2a231e',
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(52px, 6vw, 84px)',
                fontWeight: 300,
                letterSpacing: '-0.01em',
              }}
            >
              Artistic
            </span>
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(44px, 5.2vw, 74px)',
                fontWeight: 400,
                fontStyle: 'italic',
                color: '#c87159',
                letterSpacing: '0.01em',
                lineHeight: 1.1,
              }}
            >
              Timeless
            </span>
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(52px, 6vw, 84px)',
                fontWeight: 300,
                letterSpacing: '-0.01em',
              }}
            >
              Experiences
            </span>
          </h1>

          {/* Divider ornament */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '20px 0 22px' }}>
            <div style={{ width: 48, height: 1, background: '#d4b09a' }} />
            <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
              <path d="M1 5 Q4.5 1 9 5 Q13.5 9 17 5" stroke="#c87159" strokeWidth="1.2" fill="none" />
            </svg>
            <div style={{ width: 48, height: 1, background: '#d4b09a' }} />
          </div>

          {/* Description */}
          <p
            style={{
              fontFamily: '"Lato", sans-serif',
              fontSize: 15,
              lineHeight: 1.75,
              color: '#6b5445',
              maxWidth: 440,
              margin: '0 0 32px',
              fontWeight: 400,
            }}
          >
            We craft aesthetic weddings, destination celebrations and modern luxury corporate events inspired by editorial styling.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 44 }}>
            <a
              href="/wedding"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: '#c87159',
                color: '#fff',
                borderRadius: 999,
                padding: '13px 28px',
                fontFamily: '"Lato", sans-serif',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '0 4px 18px rgba(200,113,89,0.28)',
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(200,113,89,0.4)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 18px rgba(200,113,89,0.28)'; e.currentTarget.style.transform = 'none'; }}
            >
              Wedding Events
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,255,255,0.22)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>›</span>
            </a>
            <a
              href="/corporate-events"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: 'transparent',
                color: '#3b2f27',
                borderRadius: 999,
                border: '1.5px solid #d4b09a',
                padding: '13px 28px',
                fontFamily: '"Lato", sans-serif',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'background 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#f0e4da'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
            >
              Corporate Events
              <span style={{ width: 22, height: 22, borderRadius: '50%', border: '1.5px solid #d4b09a', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>›</span>
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {[
              { icon: '◎', label: 'Years of Experience', value: '10+' },
              { icon: '❋', label: 'Events Curated', value: '500+' },
              { icon: '◈', label: 'Design & Styling', value: 'Premium' },
              { icon: '⊕', label: '& Destination', value: 'Pan India' },
            ].map(({ icon, label, value }) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <span style={{ color: '#c87159', fontSize: 14 }}>{icon}</span>
                  <span
                    style={{
                      fontFamily: '"Lato", sans-serif',
                      fontSize: 16,
                      fontWeight: 700,
                      color: '#2a231e',
                    }}
                  >
                    {value}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: '"Lato", sans-serif',
                    fontSize: 10,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#a07a63',
                    fontWeight: 600,
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN — overlapping image cards */}
        <div
          className="hero-right"
          style={{
            position: 'relative',
            minHeight: 560,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 1s ease 0.15s, transform 1s ease 0.15s',
          }}
        >
          {/* Primary image card */}
          <div
            className="hero-primary-card"
            style={{
              position: 'absolute',
              right: 0,
              bottom: 76,
              width: '82%',
              maxWidth: 520,
              borderRadius: 24,
              background: '#fff',
              boxShadow: '0 32px 72px rgba(80,40,20,0.14)',
              overflow: 'hidden',
            }}
          >
            <img
              src="/wedding/1.jpg"
              alt="Luxury wedding venue"
              style={{ width: '100%', height: 380, objectFit: 'cover', objectPosition: 'center bottom', display: 'block' }}
            />
          </div>

          {/* Secondary image card — overlapping bottom-left */}
          <div
            className="hero-secondary-card"
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '46%',
              maxWidth: 260,
              borderRadius: 20,
              background: '#fff',
              boxShadow: '0 20px 48px rgba(80,40,20,0.12)',
              overflow: 'hidden',
              border: '3px solid #fff',
            }}
          >
            <img
              src="/wedding/3.png"
              alt="Wedding styling"
              style={{ width: '100%', height: 210, objectFit: 'cover', objectPosition: 'center bottom', display: 'block' }}
            />
          </div>

          {/* Floating badge — top-left of primary image area */}
          <div
            className="hero-badge"
            style={{
              position: 'absolute',
              top: 10,
              right: '70%',
              background: '#fff',
              borderRadius: 14,
              padding: '10px 16px',
              boxShadow: '0 8px 24px rgba(80,40,20,0.10)',
              minWidth: 90,
              textAlign: 'center',
            }}
          >
            <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 22, fontWeight: 600, color: '#c87159' }}>✦</div>
            <div style={{ fontFamily: '"Lato", sans-serif', fontSize: 9, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8a6755', marginTop: 2 }}>Est. 2014</div>
          </div>
        </div>
      </div>

      {/* Google font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400;1,600&family=Lato:wght@400;700&display=swap');

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            padding: 36px 20px 52px !important;
          }

          .hero-left {
            max-width: 100% !important;
          }

          .hero-left h1 span {
            font-size: clamp(40px, 14vw, 62px) !important;
          }

          .hero-left p {
            max-width: 100% !important;
          }

          .hero-right {
            min-height: 460px !important;
            width: 100% !important;
            justify-content: flex-end !important;
            align-items: flex-end !important;
            margin-top: 8px !important;
          }

          .hero-primary-card,
          .hero-secondary-card {
            position: absolute !important;
            left: auto !important;
            right: auto !important;
            top: auto !important;
            bottom: auto !important;
            width: auto !important;
            max-width: none !important;
          }

          .hero-primary-card {
            right: 0 !important;
            top: 0 !important;
            width: 84% !important;
            border-radius: 28px !important;
            z-index: 2;
          }

          .hero-primary-card img {
            height: 360px !important;
            object-position: center center !important;
          }

          .hero-secondary-card {
            left: 0 !important;
            bottom: 0 !important;
            width: 56% !important;
            border-radius: 22px !important;
            z-index: 3;
          }

          .hero-secondary-card img {
            height: 230px !important;
            object-position: center center !important;
          }

          .hero-content .hero-right {
            position: relative;
          }

          .hero-badge {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;