'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

type Props = {
  pdfPath?: string | null;
};

const Navbar = ({ pdfPath }: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Wedding', href: '/wedding' },
  ];

  const handleNavigate = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (href === pathname) {
      return;
    }

    router.push(href, { scroll: false });
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (typeof window !== 'undefined') {
      window.location.assign('/');
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#F8F2EC]/80 border-b border-[#E8D8CC] font-serif">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={handleLogoClick}>
          <Image
            src="/logo.png"
            alt="6 Seasons Studio logo"
            width={74}
            height={44}
            className="object-contain"
          />
        
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-[2px] text-[#7B6D62]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavigate(e, link.href)}
              className="hover:text-[#C98C7A] transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#7B6D62] hover:text-[#C98C7A] focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#F8F2EC] border-b border-[#E8D8CC]">
          <div className="px-6 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavigate(e, link.href)}
                className="block py-3 text-sm uppercase tracking-[2px] font-medium text-[#7B6D62] hover:text-[#C98C7A] transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;