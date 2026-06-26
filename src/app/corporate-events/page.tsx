import React from 'react';
import Script from 'next/script';
import CorporateHeroSlider from '@/components/CorporateHeroSlider';
import RemoveElfsightBranding from '@/components/RemoveElfsightBranding';
import TabbedGallery from '@/components/TabbedGallery';
import Collaborations from '@/components/Collaborations';

export default function CorporateEventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <RemoveElfsightBranding />
      {/* Hero Slider Section */}
      <CorporateHeroSlider />

      {/* Gallery Section */}
      <TabbedGallery />

      {/* Our Collaborations Section */}
      <div className="bg-[#f8f8f8]">
        <Collaborations />
      </div>

      {/* Testimonials Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 drop-shadow-sm uppercase mb-12">
            TESTIMONIALS
          </h2>
          {/* Elfsight Google Reviews | Untitled Google Reviews */}
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
          <div className="elfsight-app-056bdbce-5b83-4019-94e7-2ddfc752690c" data-elfsight-app-lazy></div>
        </div>
      </section>
    </main>
  );
}
