import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CDN_URL = "https://e3wqz0-4z.myshopify.com/cdn/shop/t/2/assets";
const logo = `${CDN_URL}/logo-trans.png`;
// YouTube Shorts video ID: oSt4IGNPChs
const youtubeVideoId = "oSt4IGNPChs";

interface VideoBackgroundProps {
  onScroll: () => void;
}

const VideoBackground = ({ onScroll }: VideoBackgroundProps) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Detect downward scroll (deltaY > 0)
      if (e.deltaY > 0 && !hasScrolled) {
        setHasScrolled(true);
        onScroll();
      }
    };

    const handleTouch = (e: TouchEvent) => {
      const touchStart = e.touches[0].clientY;

      const handleTouchMove = (moveEvent: TouchEvent) => {
        const touchEnd = moveEvent.touches[0].clientY;
        // Detect upward swipe (scrolling down)
        if (touchStart - touchEnd > 50 && !hasScrolled) {
          setHasScrolled(true);
          onScroll();
          window.removeEventListener("touchmove", handleTouchMove);
        }
      };

      window.addEventListener("touchmove", handleTouchMove);
      setTimeout(() => {
        window.removeEventListener("touchmove", handleTouchMove);
      }, 500);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouch, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouch);
    };
  }, [hasScrolled, onScroll]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
          className="absolute top-1/2 left-1/2 w-[120%] h-[120%] sm:w-[150%] sm:h-[150%] md:w-[200%] md:h-[200%] lg:w-[250%] lg:h-[250%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ border: 'none' }}
          allow="autoplay; encrypted-media"
          allowFullScreen
          onLoad={() => setVideoLoaded(true)}
        />
      </div>

      {/* Loading State */}
      {!videoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="text-white text-lg">Loading video...</div>
        </div>
      )}

      {/* Dark Overlay for better logo visibility */}
      <div className="absolute inset-0 bg-black/30 top-0 left-0 right-0 bottom-0"></div>

      {/* Centered Logo in Middle of Screen */}
      <div className="absolute inset-0 flex items-center justify-center top-0 left-0 right-0 bottom-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src={logo}
            alt="Logo"
            className="h-28 sm:h-32 md:h-40 lg:h-48 w-auto object-contain"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-white opacity-70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default VideoBackground;
