import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-trans.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [showSplash, setShowSplash] = useState(true);
  const [logoMoving, setLogoMoving] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

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
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  duration: 2.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="absolute inset-0 origin-bottom"
                style={{ backgroundColor: "rgba(1, 62, 139, 1)" }}
              />
            )}

            {/* Phase 2: Fade out blue background during logo transition */}
            {logoMoving && (
              <motion.div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(1, 62, 139, 1)" }}
                animate={{ opacity: 0 }}
                transition={{ duration: 3, delay: 0 }}
              />
            )}

            {/* Video Background - Fade in during Phase 2 */}
            {logoMoving && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, delay: 0 }}
                className="absolute inset-0"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                  onLoadedData={() => {
                    console.log("Video loaded successfully");
                    setVideoLoaded(true);
                  }}
                  onError={(e) => {
                    console.error("Video failed to load:", e);
                    setVideoError(true);
                  }}
                  onCanPlay={(e) => {
                    console.log("Video can play");
                    const video = e.currentTarget;
                    video.play().catch((err) => {
                      console.error("Video play failed:", err);
                    });
                  }}
                >
                  <source src="gaushala.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
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
                ? { opacity: 1, scale: 1.2, y: -window.innerHeight / 2 + 60 }
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
              className={`object-contain ${
                logoMoving ? "w-56 h-56" : "w-96 h-96"
              }`}
            />
          </motion.div>

          {/* Quote Text - Show during Phase 2 (logo moving up) */}
          {logoMoving && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
            >
              <div className="text-center px-10 py-6 backdrop-blur-md bg-black/20">
                <h2 className="text-4xl md:text-5xl font-bold text-white whitespace-nowrap">
                  Absolute Purity <span className="text-green-400">In Every Sip</span>
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
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer hover:opacity-80 transition-opacity bg-transparent border-none p-0"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg
                  className="w-6 h-6 text-white opacity-70 hover:opacity-100"
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

          {/* Loading/Error State during video loading */}
          {logoMoving && !videoLoaded && !videoError && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div className="text-white text-lg opacity-50">Loading video...</div>
            </div>
          )}

          {videoError && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div className="text-white text-lg opacity-50">
                Video could not be loaded
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
