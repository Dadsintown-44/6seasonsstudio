'use client';
import React from 'react';
import Link from 'next/link';
import TabbedGallery from '@/components/TabbedGallery';

/* ─── Data ─────────────────────────────────────────────── */

const philosophyCards = [
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" style={{ width: 40, height: 40, margin: '0 auto 20px', color: '#9c8c7e' }}>
        <path d="M32 8 C16 12 10 24 14 36 C18 46 28 52 32 56 C36 52 46 46 50 36 C54 24 48 12 32 8Z" />
        <circle cx="32" cy="30" r="7" />
      </svg>
    ),
    title: 'Our Philosophy',
    desc: "We don't follow trends, we create timeless experiences.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" style={{ width: 40, height: 40, margin: '0 auto 20px', color: '#9c8c7e' }}>
        <circle cx="32" cy="32" r="16" />
        <path d="M32 8v8M32 48v8M8 32h8M48 32h8" />
        <path d="M18 18l5.5 5.5M40.5 40.5l5.5 5.5M18 46l5.5-5.5M40.5 23.5l5.5-5.5" />
      </svg>
    ),
    title: 'Our Approach',
    desc: 'Personalized, thoughtful, and designed around your vision.',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" style={{ width: 40, height: 40, margin: '0 auto 20px', color: '#9c8c7e' }}>
        <path d="M32 6 L38 22 H56 L42 32 L48 48 L32 38 L16 48 L22 32 L8 22 H26 Z" />
      </svg>
    ),
    title: 'Our Promise',
    desc: 'Seamless planning, flawless execution, and unforgettable memories.',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" style={{ width: 40, height: 40, margin: '0 auto 20px', color: '#9c8c7e' }}>
        <path d="M32 56 C32 56 10 42 10 26 A22 22 0 0 1 54 26 C54 42 32 56 32 56Z" />
        <circle cx="32" cy="26" r="7" />
      </svg>
    ),
    title: 'Our Passion',
    desc: 'Turning your moments into emotions that last a lifetime.',
  },
];

const stats = [
  { value: '500+', label: 'Events Curated' },
  { value: '12+',  label: 'Years of Excellence' },
  { value: '98%',  label: 'Happy Couples' },
  { value: '50+',  label: 'Trusted Vendors' },
];

const values = [
  {
    title: 'Artistry',
    desc: "Every detail — from florals to table linens — is a canvas. We approach each event with an artist's eye and a designer's precision.",
  },
  {
    title: 'Integrity',
    desc: 'We believe in honest relationships with our clients and vendors. Transparency and trust are the cornerstones of every event we design.',
  },
  {
    title: 'Excellence',
    desc: 'We hold ourselves to the highest standard. From the first consultation to the final farewell, every moment is crafted with care.',
  },
];

/* ─── Component ─────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      {/* Google Fonts — same as site */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Lato:wght@300;400;700&family=Pinyon+Script&display=swap');

        .about-hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('/gallery/image1.jpeg');
          background-size: cover;
          background-position: center;
          transform: scale(1.06);
          transition: transform 8s ease-out;
        }

        /* Horizontal scroll strip */
        .about-hscroll {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          padding: 0 24px 16px;
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
        }
        .about-hscroll::-webkit-scrollbar {
          height: 4px;
        }
        .about-hscroll::-webkit-scrollbar-track {
          background: #ede8e0;
        }
        .about-hscroll::-webkit-scrollbar-thumb {
          background: #c4b5a7;
          border-radius: 2px;
        }

        /* Zoom-out hover on gallery cards */
        .about-hscroll-card {
          flex: 0 0 320px;
          height: 240px;
          overflow: hidden;
          border-radius: 8px;
          cursor: pointer;
          position: relative;
        }
        @media (min-width: 768px) {
          .about-hscroll-card {
            flex: 0 0 400px;
            height: 300px;
          }
        }
        .about-hscroll-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.12);
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          display: block;
        }
        .about-hscroll-card:hover img {
          transform: scale(1.0);
        }

        /* Philosophy card hover */
        .pillar-card {
          background: rgba(255,255,255,0.7);
          border: 1px solid #e0d5cc;
          border-radius: 12px;
          padding: 36px 28px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .pillar-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(58,49,40,0.1);
        }
        .pillar-card:hover svg {
          transform: scale(1.15);
        }
        .pillar-card svg {
          transition: transform 0.35s ease;
        }

        /* Arched image */
        .arch-image-wrap {
          overflow: hidden;
          background: #d4c5b0;
          border-radius: 50% 50% 0 0 / 40% 40% 0 0;
          aspect-ratio: 3 / 4;
          width: 300px;
          position: relative;
        }
        @media (max-width: 640px) {
          .arch-image-wrap { width: 220px; }
        }
        .arch-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
          display: block;
        }
        .arch-image-wrap:hover img {
          transform: scale(1.05);
        }

        /* CTA button */
        .about-cta-btn {
          display: inline-block;
          border: 1px solid #3a3128;
          color: #3a3128;
          font-family: 'Lato', sans-serif;
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          padding: 14px 36px;
          transition: background 0.35s ease, color 0.35s ease;
          text-decoration: none;
        }
        .about-cta-btn:hover {
          background: #3a3128;
          color: #fff;
        }
      `}</style>

      <main style={{ background: '#f5f0ea', color: '#3a3128', overflowX: 'hidden' }}>

        {/* ══ HERO — 100vh matching home & wedding ══════════════════════ */}
        <section style={{
          position: 'relative',
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1a1412',
        }}>
          <div className="about-hero-bg" />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(20,15,12,0.52) 0%, rgba(20,15,12,0.40) 50%, rgba(20,15,12,0.65) 100%)',
            zIndex: 2,
          }} />
          <div style={{
            position: 'relative',
            zIndex: 3,
            textAlign: 'center',
            padding: '120px 24px 80px',
            maxWidth: 800,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            {/* Eyebrow */}
            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: 11,
              letterSpacing: '0.45em',
              textTransform: 'uppercase',
              color: 'rgba(240,220,211,0.8)',
              marginBottom: 20,
            }}>
              6 Seasons Studio
            </p>

            {/* Main heading — Cormorant Garamond like the rest of the site */}
            <h1 style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
              fontSize: 'clamp(60px, 9vw, 110px)',
              fontWeight: 300,
              color: '#ffffff',
              lineHeight: 1.05,
              letterSpacing: '0.02em',
              textShadow: '0 4px 20px rgba(0,0,0,0.35)',
              margin: '0 0 24px',
            }}>
              About Us
            </h1>

            {/* Divider */}
            <div style={{
              width: 80,
              height: 1,
              
              marginBottom: 28,
              opacity: 0.8,
            }} />

            {/* Tagline — italic Cormorant like the home quote */}
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(18px, 2.4vw, 26px)',
              fontWeight: 300,
              color: '#e5d5c5',
              lineHeight: 1.7,
              maxWidth: 560,
              textShadow: '0 2px 12px rgba(0,0,0,0.3)',
              margin: 0,
            }}>
              We don&apos;t just plan events,<br />
              we create timeless experiences<br />
              that stay with you forever.
            </p>
          </div>
        </section>

        {/* ══ WHO WE ARE ════════════════════════════════════════════════ */}
        <section style={{ background: '#f5f0ea', padding: '96px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>

            {/* Text */}
            <div>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 11, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#9c8c7e', marginBottom: 16 }}>
                Who We Are
              </p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(48px, 5.2vw, 68px)', fontWeight: 400, color: '#3a3128', lineHeight: 1.2, marginBottom: 8 }}>
                The Story Behind
              </h2>
              <h2 style={{ fontFamily: "'Pinyon Script', cursive", fontSize: 'clamp(54px, 6vw, 80px)', fontWeight: 400, color: '#7b6d62', lineHeight: 1.1, marginBottom: 24 }}>
                6SeasonsStudio
              </h2>
              <div style={{ width: 48, height: 1, background: '#c4b5a7', marginBottom: 28 }} />
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 15, lineHeight: 1.85, color: '#5f5146', marginBottom: 20, maxWidth: 480 }}>
                At 6SeasonsStudio, we believe every celebration has a story worth telling. Founded with a passion
                for artistry and attention to detail, we specialize in crafting weddings and luxury events that are
                as unique as the people behind them.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 15, lineHeight: 1.85, color: '#5f5146', maxWidth: 480 }}>
                From intimate gatherings to grand affairs, we handle every detail with creativity,
                precision, and heart.
              </p>
            </div>

            {/* Arched image */}
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
              <div className="arch-image-wrap">
                <img src="/wedding/2.jpg" alt="Elegant wedding table setting" />
              </div>
              {/* Decorative leaf */}
              <svg style={{ position: 'absolute', right: -40, bottom: 20, width: 100, opacity: 0.15, color: '#9c8c7e' }} viewBox="0 0 120 160" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M60 10 C20 40 10 80 30 130 C50 80 100 50 90 10 C80 50 60 80 60 130" />
                <path d="M60 10 C100 40 110 80 90 130" />
              </svg>
            </div>
          </div>
        </section>

        {/* ══ VISION & MISSION ══════════════════════════════════════════ */}
        <section style={{ background: '#ede8e0', padding: '80px 24px' }}>
          <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            {[
              {
                title: 'Our Vision',
                text: "To be India's most sought-after luxury event design studio — where every celebration becomes a masterpiece of memories, beauty, and emotion. We envision a world where every moment is crafted with intention, elegance, and a touch of magic.",
                svg: (
                  <svg viewBox="0 0 32 32" fill="none" stroke="#9c8c7e" strokeWidth="1.5" style={{ width: 32, height: 32, marginBottom: 20 }}>
                    <circle cx="16" cy="16" r="6" /><path d="M16 2v4M16 26v4M2 16h4M26 16h4" />
                    <path d="M6.3 6.3l2.8 2.8M22.9 22.9l2.8 2.8M6.3 25.7l2.8-2.8M22.9 9.1l2.8-2.8" />
                  </svg>
                ),
              },
              {
                title: 'Our Mission',
                text: 'To craft extraordinary celebrations by blending artistic vision, meticulous planning, and heartfelt storytelling. We are committed to delivering experiences that move people — leaving lasting impressions long after the last dance.',
                svg: (
                  <svg viewBox="0 0 32 32" fill="none" stroke="#9c8c7e" strokeWidth="1.5" style={{ width: 32, height: 32, marginBottom: 20 }}>
                    <path d="M6 16 L16 6 L26 16 L16 26 Z" /><circle cx="16" cy="16" r="4" />
                  </svg>
                ),
              },
            ].map((card) => (
              <div key={card.title} style={{ background: 'rgba(255,255,255,0.6)', borderRadius: 16, padding: '40px 36px', border: '1px solid #ddd0c4', backdropFilter: 'blur(8px)' }}>
                {card.svg}
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 400, color: '#3a3128', marginBottom: 14 }}>
                  {card.title}
                </h3>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, lineHeight: 1.85, color: '#5f5146' }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ STATS STRIP ═══════════════════════════════════════════════ */}
        <section style={{ background: '#3a3128', padding: '64px 24px' }}>
          <div style={{ maxWidth: 860, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 32, textAlign: 'center' }}>
            {stats.map((s) => (
              <div key={s.label}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 48, fontWeight: 300, color: '#d4c5b0', lineHeight: 1, marginBottom: 8 }}>
                  {s.value}
                </p>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#9c8c7e' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ FOUR PILLARS ══════════════════════════════════════════════ */}
        <section style={{ background: '#f5f0ea', padding: '96px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 11, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#9c8c7e', marginBottom: 12 }}>
                What Drives Us
              </p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(48px, 5.5vw, 72px)', fontWeight: 400, color: '#3a3128' }}>
                Four Pillars of Our Craft
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
              {philosophyCards.map((card) => (
                <div key={card.title} className="pillar-card">
                  {card.icon}
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 400, color: '#3a3128', marginBottom: 10 }}>
                    {card.title}
                  </h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, lineHeight: 1.75, color: '#7b6d62' }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: '#f5f0ea' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '90px 24px 16px', textAlign: 'center' }}>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 11, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#9c8c7e', marginBottom: 10 }}>
              Our Work
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(44px, 4.5vw, 62px)', fontWeight: 400, color: '#3a3128' }}>
              Moments We&apos;ve Crafted
            </h2>
          </div>
          <TabbedGallery showHeader={false} edgeToEdge />
        </section>

        {/* ══ OUR VALUES ════════════════════════════════════════════════ */}
        <section style={{ background: '#ede8e0', padding: '80px 24px' }}>
          <div style={{ maxWidth: 960, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 11, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#9c8c7e', marginBottom: 12 }}>
                At Our Core
              </p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 400, color: '#3a3128' }}>
                Our Values
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 36 }}>
              {values.map((v) => (
                <div key={v.title} style={{ borderLeft: '2px solid #c4b5a7', paddingLeft: 24, paddingTop: 4, paddingBottom: 4 }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 400, color: '#3a3128', marginBottom: 12 }}>
                    {v.title}
                  </h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, lineHeight: 1.85, color: '#5f5146' }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ QUOTE + CTA ═══════════════════════════════════════════════ */}
        <section style={{ background: '#f5f0ea', padding: '96px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 64, alignItems: 'center' }}>

            {/* Quote */}
            <div style={{ position: 'relative', paddingTop: 24, paddingLeft: 20 }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 120, color: '#c4b5a7', lineHeight: 0.6, position: 'absolute', top: -10, left: -8, userSelect: 'none' }}>
                &ldquo;
              </span>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(22px, 2.8vw, 32px)', fontWeight: 300, color: '#5f5146', lineHeight: 1.6 }}>
                We take care of the details,<br />so you can live in the moment.
              </p>
              <svg style={{ marginTop: 28, width: 60, opacity: 0.25, color: '#9c8c7e' }} viewBox="0 0 80 100" fill="none" stroke="currentColor" strokeWidth="0.8">
                <path d="M40 5 C10 25 5 55 20 90 C35 55 75 30 70 5 C60 35 40 55 40 90" />
                <path d="M40 5 C70 25 75 55 60 90" />
              </svg>
            </div>

            {/* CTA */}
            <div>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 11, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#9c8c7e', marginBottom: 16 }}>
                Begin Your Journey
              </p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(44px, 4.2vw, 64px)', fontWeight: 400, color: '#3a3128', lineHeight: 1.2, marginBottom: 20 }}>
                Let&apos;s Create<br />Your Story
              </h2>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, lineHeight: 1.85, color: '#5f5146', marginBottom: 36, maxWidth: 420 }}>
                Your dream event begins here. Let&apos;s work together to create something extraordinary —
                a celebration that reflects who you are and what you love.
              </p>
              <Link href="/#contact" className="about-cta-btn">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
