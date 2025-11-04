import { useState, useEffect } from "react";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

interface HeaderProps {
  isVisible?: boolean;
}

const Header = ({ isVisible = true }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      <div className="relative bg-[rgb(1,62,139)] shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
        <div className="w-full h-[150px] flex items-center justify-between px-[60px]">
          {/* Logo Section - Left */}
          <div className="flex items-center">
            <div className="logo">
              <a href="#home">
                <img src={logo} alt="PURA - Absolute Purity" className="h-[140px] w-auto" />
              </a>
            </div>
          </div>

          {/* Right Section - Desktop Only */}
          <div className="hidden lg:flex flex-col items-end gap-2">
            {/* Top Row - Social Icons */}
            <div className="flex items-center gap-5">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <span className="text-white text-sm font-medium tracking-wider uppercase">Available on:</span>
              <a
                href="https://www.amazon.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors text-[22px] ml-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726-1.544.41-3.068.615-4.573.615-4.667 0-8.62-1.24-11.863-3.72-.188-.144-.228-.26-.124-.39zm1.027-2.094c-.015-.135.06-.21.225-.225.346-.03.664.03.95.18.18.09.345.21.496.36.18.195.39.465.63.81.24.345.45.645.63.9.09.12.075.21-.045.27l-.36.225c-.105.075-.21.075-.315 0-.195-.21-.435-.54-.72-.99-.285-.45-.57-.825-.855-1.125-.09-.09-.135-.165-.135-.225zm13.743 0c.015-.135-.06-.21-.225-.225-.346-.03-.664.03-.95.18-.18.09-.345.21-.496.36-.18.195-.39.465-.63.81-.24.345-.45.645-.63.9-.09.12-.075.21.045.27l.36.225c.105.075.21.075.315 0 .195-.21.435-.54.72-.99.285-.45.57-.825.855-1.125.09-.09.135-.165.135-.225zm-6.872-10.56c0-1.68.42-3 1.26-3.96s1.98-1.44 3.42-1.44c1.38 0 2.46.48 3.24 1.44s1.17 2.28 1.17 3.96c0 1.62-.39 2.91-1.17 3.87s-1.86 1.44-3.24 1.44c-1.44 0-2.58-.48-3.42-1.44s-1.26-2.25-1.26-3.87zm1.8 0c0 1.26.24 2.22.72 2.88s1.14.99 1.98.99c.78 0 1.38-.33 1.8-.99s.63-1.62.63-2.88c0-1.32-.21-2.31-.63-2.97s-1.02-.99-1.8-.99c-.84 0-1.5.33-1.98.99s-.72 1.65-.72 2.97z"/>
                </svg>
              </a>
            </div>

            {/* Bottom Row - Main Navigation */}
            <nav className="flex items-center gap-10">
              <a href="#home" className="text-white hover:text-white/80 transition-colors font-medium text-base uppercase tracking-wider border-b-2 border-transparent hover:border-[#7cb342] active:border-[#7cb342]">
                Home
              </a>
              <a href="#about" className="text-white hover:text-white/80 transition-colors font-medium text-base uppercase tracking-wider border-b-2 border-transparent hover:border-[#7cb342]">
                Our Story
              </a>
              <a href="#products" className="text-white hover:text-white/80 transition-colors font-medium text-base uppercase tracking-wider border-b-2 border-transparent hover:border-[#7cb342]">
                Our Ghee
              </a>
              <a href="#customers" className="text-white hover:text-white/80 transition-colors font-medium text-base uppercase tracking-wider border-b-2 border-transparent hover:border-[#7cb342]">
                Our Customers
              </a>
              <a href="#recipes" className="text-white hover:text-white/80 transition-colors font-medium text-base uppercase tracking-wider border-b-2 border-transparent hover:border-[#7cb342]">
                Recipes
              </a>
              <a href="#blog" className="text-white hover:text-white/80 transition-colors font-medium text-base uppercase tracking-wider border-b-2 border-transparent hover:border-[#7cb342]">
                Blog
              </a>
              <a href="#contact" className="text-white hover:text-white/80 transition-colors font-medium text-base uppercase tracking-wider border-b-2 border-transparent hover:border-[#7cb342]">
                Reach Us
              </a>
            </nav>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden px-4 pb-4 border-t border-white/20 animate-fade-in">
            <div className="flex flex-col gap-3 pt-4">
              {/* Mobile Social Icons */}
              <div className="flex items-center gap-4 pb-3 border-b border-white/20">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <span className="text-white text-sm">Available on:</span>
                <a
                  href="https://www.amazon.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors text-sm"
                >
                  Amazon
                </a>
              </div>

              {/* Mobile Menu Links */}
              <a
                href="#home"
                className="text-white hover:text-white/80 transition-colors py-2 font-medium uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-white/80 transition-colors py-2 font-medium uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </a>
              <a
                href="#products"
                className="text-white hover:text-white/80 transition-colors py-2 font-medium uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Ghee
              </a>
              <a
                href="#customers"
                className="text-white hover:text-white/80 transition-colors py-2 font-medium uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Customers
              </a>
              <a
                href="#recipes"
                className="text-white hover:text-white/80 transition-colors py-2 font-medium uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Recipes
              </a>
              <a
                href="#blog"
                className="text-white hover:text-white/80 transition-colors py-2 font-medium uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-white hover:text-white/80 transition-colors py-2 font-medium uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Reach Us
              </a>
            </div>
          </div>
        )}

        {/* Curved Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-full -mt-1">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 Q360,20 720,10 Q1080,20 1260,60 Q1350,80 1440,40 L1440,0 L0,0 Z"
              fill="rgb(1,62,139)"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
