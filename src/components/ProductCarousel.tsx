import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";

const CDN_URL = "https://e3wqz0-4z.myshopify.com/cdn/shop/t/2/assets";
const milkBottle = `${CDN_URL}/milk-bottle.png`;
const almond = `${CDN_URL}/almond.png`;
const walnut = `${CDN_URL}/walnut.png`;

const products = [
  {
    id: 1,
    name: "Almond",
    color: "almond",
    textColor: "text-almond",
    ingredient: almond,
  },
  {
    id: 2,
    name: "Walnut",
    color: "walnut",
    textColor: "text-walnut",
    ingredient: walnut,
  },
];

interface ProductCarouselProps {
  showHeader?: boolean;
}

export const ProductCarousel = ({ showHeader = true }: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
      setIsTransitioning(false);
    }, 600);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
      setIsTransitioning(false);
    }, 600);
  };

  const currentProduct = products[currentIndex];

  return (
    <div id="products" className="relative w-screen h-[90vh] overflow-hidden bg-background snap-section">
      {/* Header */}
      {showHeader && <Header />}

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-background via-background to-muted/30" />

      {/* Main Content - Full Width */}
      <div className="relative z-10 w-screen h-[90vh] flex flex-col">
        {/* Center content area */}
        <div className="relative flex-1 w-full flex flex-col items-center justify-center">
          {/* Large Text Background */}
          <h1
            className="absolute left-1/2 -translate-x-1/2 text-[16rem] font-black leading-none pointer-events-none select-none"
            style={{
              letterSpacing: "0.22em",
              color: currentProduct.textColor === "text-almond" ? "#8B6F47" : "#5B5D5F"
            }}
          >
            {currentProduct.name}
          </h1>

          {/* Floating Ingredients - ONLY THIS ANIMATES */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProduct.id}
              initial={{ y: "100vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100vh", opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 overflow-hidden"
              style={{ height: "100vh" }}
            >
              <img src={currentProduct.ingredient} alt="" className="absolute h-[500px] w-[500px] animate-float opacity-75 transition-all duration-1000 ease-in-out translate-y-[100vh] scale-75" style={{ left: "-7.5%", top: "2.5%", transitionDelay: "200ms", animationDelay: "0s", animationDuration: "3s" }} />
              <img src={currentProduct.ingredient} alt="" className="absolute h-[500px] w-[500px] animate-float-slow opacity-75 transition-all duration-1000 ease-in-out translate-y-[100vh] scale-75" style={{ right: "-10%", top: "0.5%", transitionDelay: "300ms", animationDelay: "0.5s", animationDuration: "4s" }} />
              <img src={currentProduct.ingredient} alt="" className="absolute h-[500px] w-[500px] animate-float opacity-75 transition-all duration-1000 ease-in-out translate-y-[100vh] scale-75" style={{ left: "1%", bottom: "5%", transitionDelay: "400ms", animationDelay: "0.3s", animationDuration: "3.5s" }} />
              <img src={currentProduct.ingredient} alt="" className="absolute h-[500px] w-[500px] animate-float-slow opacity-75 transition-all duration-1000 ease-in-out translate-y-[100vh] scale-75" style={{ right: "1.5%", bottom: "-1%", transitionDelay: "250ms", animationDelay: "0.8s", animationDuration: "4.5s" }} />
              <img src={currentProduct.ingredient} alt="" className="absolute h-[500px] w-[500px] animate-float opacity-70 transition-all duration-1000 ease-in-out translate-y-[100vh] scale-75" style={{ right: "10%", top: "-15%", transitionDelay: "450ms", animationDelay: "0.2s", animationDuration: "3.2s" }} />
            </motion.div>
          </AnimatePresence>

          {/* Center Product - STAYS FIXED, NO ANIMATION */}
          <div className="relative z-20 inline-flex items-center justify-center">
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="rounded-full bg-card/80 p-3 backdrop-blur-sm hover:bg-card transition-all hover:scale-110 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed absolute left-0 transform -translate-x-full -translate-x-4"
              style={{ top: "50%" }}
            >
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </button>

            <div className="relative">
              <img
                src={milkBottle}
                alt={`${currentProduct.name} Milk`}
                className="h-[600px] w-auto drop-shadow-2xl"
              />
            </div>

            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="rounded-full bg-card/80 p-3 backdrop-blur-sm hover:bg-card transition-all hover:scale-110 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed absolute right-0 transform translate-x-full translate-x-4"
              style={{ top: "50%" }}
            >
              <ChevronRight className="h-6 w-6 text-foreground" />
            </button>
          </div>
        </div>

        {/* Bottom Section - Shop Now Button */}
        <div className="relative z-20 w-full flex flex-col items-center justify-center pb-12">
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mb-8">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-foreground"
                    : "w-2 bg-foreground/30 hover:bg-foreground/50"
                }`}
              />
            ))}
          </div>

          {/* Shop Now Button */}
          <button
            onClick={() => {
              window.location.href = "/collections/all";
            }}
            className="rounded-full px-8 py-6 text-base font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all"
          >
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};
