import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CDN_URL = "https://e3wqz0-4z.myshopify.com/cdn/shop/t/2/assets";
const logo = `${CDN_URL}/logo-trans.png`;
// Shopify global CDN video - Gaushala (cattle farm)
const splashVideoUrl = "https://cdn.shopify.com/videos/c/o/v/b3fcbbcc5dcc4a73b6350ab9536cf7ea.mp4";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [showSplash, setShowSplash] = useState(true);
  const [logoMoving, setLogoMoving] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Phase 1: Blue fill and logo appear (0-2.5s)
  useEffect(() => {
    const phase1Timer = setTimeout(() => {
      setLogoMoving(true);
    }, 2500);

    // Handle scroll to skip splash screen
    const handleScroll = () => {
      setLogoMoving(true);
      setShowSplash(false);
      onComplete();
    };

    window.addEventListener("scroll", handleScroll, { once: true });

    return () => {
      clearTimeout(phase1Timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onComplete]);

  // Don't automatically transition - wait for user interaction
  // Phase 2 happens but splash screen stays visible with video looping

  // Scroll/touch detection to proceed to homepage
  useEffect(() => {
    if (!logoMoving || hasScrolled) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        setHasScrolled(true);
        setShowSplash(false);
        onComplete();
      }
    };

    const handleTouch = (e: TouchEvent) => {
      const touchStart = e.touches[0].clientY;

      const handleTouchMove = (moveEvent: TouchEvent) => {
        const touchEnd = moveEvent.touches[0].clientY;
        if (touchStart - touchEnd > 50) {
          setHasScrolled(true);
          setShowSplash(false);
          onComplete();
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
  }, [logoMoving, hasScrolled, onComplete]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {showSplash && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        >
          {/* Background container with blue fill animation */}
          <div className="absolute inset-0">
            {/* Phase 1: Blue fill from bottom to top */}
            {!logoMoving && (
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: "rgba(1, 62, 139, 1)",
                  animation: "blueFillUp 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
                  transformOrigin: "bottom",
                }}
              >
                <style>{`
                  @keyframes blueFillUp {
                    from {
                      transform: scaleY(0);
                    }
                    to {
                      transform: scaleY(1);
                    }
                  }
                `}</style>
              </div>
            )}

            {/* Phase 2: Fade out blue background during logo transition */}
            {logoMoving && (
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: "rgba(1, 62, 139, 1)",
                  animation: "fadeOut 3s ease-out forwards",
                }}
              >
                <style>{`
                  @keyframes fadeOut {
                    from {
                      opacity: 1;
                    }
                    to {
                      opacity: 0;
                    }
                  }
                `}</style>
              </div>
            )}

            {/* Shopify Video Background - Fade in during Phase 2 */}
            {logoMoving && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, delay: 0 }}
                className="absolute inset-0 overflow-hidden"
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  onCanPlay={() => setVideoLoaded(true)}
                  className="absolute inset-0 w-full h-full object-cover object-[center_60%]"
                  style={{ pointerEvents: 'none' }}
                >
                  <source src={splashVideoUrl} type="video/mp4" />
                </video>

                {/* Dark Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ duration: 3, delay: 0 }}
                  className="absolute inset-0 bg-black"
                />
              </motion.div>
            )}
          </div>

          {/* Logo Container - Appears in Phase 1, Moves up to top in Phase 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3, y: 0 }}
            animate={
              logoMoving
                ? {
                    opacity: 1,
                    scale: window.innerWidth < 640 ? 1 : 1.2,
                    y: window.innerWidth < 640
                      ? -window.innerHeight / 2 + 80
                      : window.innerWidth < 768
                      ? -window.innerHeight / 2 + 70
                      : -window.innerHeight / 2 + 60,
                  }
                : { opacity: 1, scale: 1, y: 0 }
            }
            transition={{
              duration: logoMoving ? 3 : 2.5,
              delay: logoMoving ? 0 : 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-20 flex items-center justify-center"
          >
            <img
              src={logo}
              alt="Logo"
              className={`object-contain transition-all duration-300 ${
                logoMoving
                  ? "w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56"
                  : "w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              }`}
            />
          </motion.div>

          {/* Quote Text - Show during Phase 2 (logo moving up) */}
          {logoMoving && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none px-4"
            >
              <div className="text-center px-4 py-4 sm:px-6 sm:py-5 md:px-10 md:py-6 backdrop-blur-md bg-black/20 rounded-lg max-w-[90vw]">
                <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white">
                  <span className="block sm:inline">GrandMother's Secret,</span>{" "}
                  <span className="text-green-400 block sm:inline">Modern Purity</span>
                </h2>
              </div>
            </motion.div>
          )}

          {/* Scroll Indicator - Only show in Phase 2 */}
          {logoMoving && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
              onClick={() => {
                setShowSplash(false);
                onComplete();
              }}
              className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer hover:opacity-80 transition-opacity bg-transparent border-none p-0"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white opacity-70 hover:opacity-100"
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
            </motion.button>
          )}

          {/* Loading State during video loading */}
          {logoMoving && !videoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div className="text-white text-lg opacity-50">Loading video...</div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
