import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

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
        <div className="w-full h-[80px] sm:h-[90px] md:h-[105px] lg:h-[115px] flex items-center justify-between pl-0 pr-2 sm:pr-3 md:pr-[15px]">
          {/* Logo Section - Left */}
          <div className="flex items-center">
            <div className="logo">
              <a href="#home" className="relative block h-[80px] sm:h-[90px] md:h-[105px] lg:h-[115px] overflow-visible">
                {/* Video Logo - plays first */}
                <video
                  ref={videoRef}
                  src={logoVideoUrl}
                  muted
                  playsInline
                  className={`h-[85px] sm:h-[100px] md:h-[130px] lg:h-[160px] xl:h-[180px] w-auto transition-opacity duration-500 absolute top-0 left-0 z-10 ${showStaticLogo ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                />
                {/* Static Logo - shows after video ends */}
                <img
                  src={logo}
                  alt="PURA - Absolute Purity"
                  className={`h-[80px] sm:h-[90px] md:h-[105px] lg:h-[115px] w-auto transition-opacity duration-500 ${showStaticLogo ? 'opacity-100' : 'opacity-0'}`}
                />
              </a>
            </div>
          </div>

          {/* Right Section - Desktop Only */}
          {/* Using inline style for display to avoid conflict with Shopify's base.css .hidden class */}
          <div className="flex-col items-end gap-2" style={{ display: 'none' }} id="desktop-nav">
            <style>{`@media (min-width: 1024px) { #desktop-nav { display: flex !important; } }`}</style>
            {/* Main Navigation */}
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
            className="p-2 text-white z-20 relative"
            id="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <style>{`@media (min-width: 1024px) { #mobile-menu-toggle { display: none !important; } }`}</style>
            {isMenuOpen ? <X size={24} className="sm:w-7 sm:h-7" /> : <Menu size={24} className="sm:w-7 sm:h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="px-3 sm:px-4 pb-3 sm:pb-4 border-t border-white/20 animate-fade-in" id="mobile-nav">
            <style>{`@media (min-width: 1024px) { #mobile-nav { display: none !important; } }`}</style>
            <div className="flex flex-col gap-2 sm:gap-3 pt-3 sm:pt-4">
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
                href="#products2"
                className="text-white hover:text-white/80 transition-colors py-1.5 sm:py-2 font-medium uppercase text-sm sm:text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
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
