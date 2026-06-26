import React from 'react';
import { Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative bg-brand-green text-white py-16 overflow-hidden">
      {/* Background Image / Watermark */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none mix-blend-overlay">
        <Image 
          src="/footer/bg.png" 
          alt="Background overlay" 
          fill 
          className="object-cover md:object-contain object-bottom"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Main Logo Text */}
        <h2 className="text-4xl md:text-5xl font-serif mb-6 opacity-90 drop-shadow-sm">6Seasons Studio</h2>
        
        {/* Description */}
        <div className="space-y-4 text-sm md:text-base opacity-80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          <p>From happy, delightful couples</p>
          <p>
            6Seasons Studio is an event planning and wedding styling company based in Mumbai, India.
            Their tag line, 'We add Elegance to your Occasions'
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mb-10">
          <Link href="https://www.youtube.com/@6seasonsstudio" className="w-10 h-10 md:w-8 md:h-8 rounded bg-red-600 flex items-center justify-center hover:opacity-80 transition-opacity shadow-md">
            <Youtube size={16} />
          </Link>
          <Link href="https://www.instagram.com/6_seasons_studio/" className="w-10 h-10 md:w-8 md:h-8 rounded bg-green-500 flex items-center justify-center hover:opacity-80 transition-opacity shadow-md">
            {/* Adding a placeholder for another icon like Facebook/Whatsapp, but keeping it consistent */}
            <Instagram size={16} />
          </Link>
          <Link href="https://in.pinterest.com/6seasonsstudio/" className="w-10 h-10 md:w-8 md:h-8 rounded bg-black/30 flex items-center justify-center hover:opacity-80 transition-opacity shadow-md" aria-label="Pinterest">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.371 0 0 5.371 0 12c0 5.085 3.163 9.418 7.588 11.171-.105-.948-.2-2.407.041-3.447.218-.931 1.403-5.942 1.403-5.942s-.359-.719-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.024 0 1.518.769 1.518 1.689 0 1.029-.654 2.569-.991 3.998-.283 1.198.599 2.173 1.775 2.173 2.13 0 3.766-2.246 3.766-5.493 0-2.868-2.062-4.87-5.01-4.87-3.415 0-5.417 2.561-5.417 5.205 0 1.039.4 2.157.9 2.766a.363.363 0 0 1 .084.349c-.092.383-.3 1.222-.34 1.392-.053.22-.171.268-.396.163-1.49-.693-2.422-2.869-2.422-4.624 0-3.769 2.741-7.235 7.903-7.235 4.15 0 7.374 2.964 7.374 6.918 0 4.127-2.601 7.446-6.213 7.446-1.212 0-2.351-.63-2.738-1.376l-.744 2.827c-.27 1.03-1.001 2.321-1.492 3.108C8.676 23.811 10.3 24 12 24c6.629 0 12-5.371 12-12S18.629 0 12 0z" />
            </svg>
          </Link>
        </div>

        {/* Signature */}
        <p className="font-serif text-xl md:text-2xl opacity-90 italic tracking-wider">Anish Vedia</p>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/918779199805"
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-xl hover:bg-green-600 hover:scale-105 transition-all flex items-center space-x-2 border border-white/20"
          aria-label="Contact us on WhatsApp"
        >
          <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded-md hidden md:block font-medium">Contact us</span>
          <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-6 md:h-6 fill-current drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
