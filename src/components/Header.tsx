import { useState, useEffect, useRef } from "react";
import { Menu, X, Facebook, Instagram } from "lucide-react";

const CDN_URL = "https://e3wqz0-4z.myshopify.com/cdn/shop/t/2/assets";
const logo = `${CDN_URL}/logo-trans.png`;
// Shopify global CDN video - Logo animation
const logoVideoUrl = "https://cdn.shopify.com/videos/c/o/v/f945b142641340419028f30b04c2e23a.mp4";

interface HeaderProps {
  isVisible?: boolean;
}

const Header = ({ isVisible = true }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showStaticLogo, setShowStaticLogo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    let loopTimeout: NodeJS.Timeout;

    if (video) {
      // Start video after 2 seconds initially
      const startTimeout = setTimeout(() => {
        setShowStaticLogo(false);
        video.currentTime = 0;
        video.play();
      }, 2000);

      const handleEnded = () => {
        // Show static logo when video ends
        setShowStaticLogo(true);

        // After 2 seconds, play video again
        loopTimeout = setTimeout(() => {
          setShowStaticLogo(false);
          video.currentTime = 0;
          video.play();
        }, 2000);
      };

      video.addEventListener('ended', handleEnded);

      return () => {
        clearTimeout(startTimeout);
        clearTimeout(loopTimeout);
        video.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      <div className="relative bg-[rgb(1,62,139)] shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
        <div className="w-full h-[70px] sm:h-[80px] md:h-[90px] lg:h-[100px] flex items-center justify-between pl-0 pr-2 sm:pr-3 md:pr-[15px]">
          {/* Logo Section - Left */}
          <div className="flex items-center">
            <div className="logo">
              <a href="#home" className="relative block h-[70px] sm:h-[80px] md:h-[90px] lg:h-[100px] overflow-visible">
                {/* Video Logo - plays first */}
                <video
                  ref={videoRef}
                  src={logoVideoUrl}
                  muted
                  playsInline
                  className={`h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] w-auto transition-opacity duration-500 absolute top-0 left-0 z-10 ${showStaticLogo ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                />
                {/* Static Logo - shows after video ends */}
                <img
                  src={logo}
                  alt="PURA - Absolute Purity"
                  className={`h-[70px] sm:h-[80px] md:h-[90px] lg:h-[100px] w-auto transition-opacity duration-500 ${showStaticLogo ? 'opacity-100' : 'opacity-0'}`}
                />
              </a>
            </div>
          </div>

          {/* Right Section - Desktop Only */}
          {/* Using inline style for display to avoid conflict with Shopify's base.css .hidden class */}
          <div className="flex-col items-end gap-2" style={{ display: 'none' }} id="desktop-nav">
            <style>{`@media (min-width: 1024px) { #desktop-nav { display: flex !important; } }`}</style>
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
                Our Vibe
              </a>
              <a href="#products" className="text-white hover:text-white/80 transition-colors font-medium text-base uppercase tracking-wider border-b-2 border-transparent hover:border-[#7cb342]">
                Products
              </a>
              <a href="#products2" className="text-white hover:text-white/80 transition-colors font-medium text-base uppercase tracking-wider border-b-2 border-transparent hover:border-[#7cb342]">
                Products 2
              </a>
              <a href="#contact" className="text-white hover:text-white/80 transition-colors font-medium text-base uppercase tracking-wider border-b-2 border-transparent hover:border-[#7cb342]">
                Reach Us
              </a>
              <button
                onClick={() => {
                  window.location.href = "/collections/all";
                }}
                className="text-white hover:text-white/80 transition-colors font-medium text-base uppercase tracking-wider border-b-2 border-transparent hover:border-[#7cb342]"
              >
                Shop Now
              </button>
            </nav>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="p-2 text-white"
            id="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <style>{`@media (min-width: 1024px) { #mobile-menu-toggle { display: none !important; } }`}</style>
            {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="px-3 sm:px-4 pb-3 sm:pb-4 border-t border-white/20 animate-fade-in" id="mobile-nav">
            <style>{`@media (min-width: 1024px) { #mobile-nav { display: none !important; } }`}</style>
            <div className="flex flex-col gap-2 sm:gap-3 pt-3 sm:pt-4">
              {/* Mobile Social Icons */}
              <div className="flex items-center gap-3 sm:gap-4 pb-2 sm:pb-3 border-b border-white/20">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <Facebook size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <Instagram size={18} className="sm:w-5 sm:h-5" />
                </a>
                <span className="text-white text-xs sm:text-sm">Available on:</span>
                <a
                  href="https://www.amazon.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors text-xs sm:text-sm"
                >
                  Amazon
                </a>
              </div>

              {/* Mobile Menu Links */}
              <a
                href="#home"
                className="text-white hover:text-white/80 transition-colors py-1.5 sm:py-2 font-medium uppercase text-sm sm:text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-white/80 transition-colors py-1.5 sm:py-2 font-medium uppercase text-sm sm:text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Vibe
              </a>
              <a
                href="#products"
                className="text-white hover:text-white/80 transition-colors py-1.5 sm:py-2 font-medium uppercase text-sm sm:text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a
                href="#products2"
                className="text-white hover:text-white/80 transition-colors py-1.5 sm:py-2 font-medium uppercase text-sm sm:text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Products 2
              </a>
              <a
                href="#contact"
                className="text-white hover:text-white/80 transition-colors py-1.5 sm:py-2 font-medium uppercase text-sm sm:text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Reach Us
              </a>
              <button
                onClick={() => {
                  window.location.href = "/collections/all";
                  setIsMenuOpen(false);
                }}
                className="text-white hover:text-white/80 transition-colors py-1.5 sm:py-2 font-medium uppercase text-sm sm:text-base text-left"
              >
                Shop Now
              </button>
            </div>
          </div>
        )}

        {/* Curved Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-[calc(100%-2px)]">
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
