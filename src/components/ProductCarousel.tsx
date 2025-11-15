import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import milkBottle from "@/assets/milk-bottle.png";
import almond from "@/assets/almond.png";
import walnut from "@/assets/walnut.png";

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

export const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
      setIsTransitioning(false);
    }, 1200);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
      setIsTransitioning(false);
    }, 1200);
  };

  const currentProduct = products[currentIndex];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-background via-background to-muted/30" />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2">
          <div className="h-10 w-8 rounded-lg bg-foreground" />
        </div>
        <nav className="flex gap-12 text-sm font-medium text-foreground/70">
          <button className="hover:text-foreground transition-colors">Products</button>
          <button className="hover:text-foreground transition-colors">About</button>
          <button className="hover:text-foreground transition-colors">Partnership</button>
          <button className="hover:text-foreground transition-colors">Contact</button>
        </nav>
        <button className="rounded-full p-2 hover:bg-foreground/5 transition-colors">
          <ShoppingCart className="h-6 w-6 text-foreground" />
        </button>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex h-[calc(100vh-120px)] items-center justify-center">
        <div className="relative w-full max-w-6xl px-8">
          {/* Large Text Background */}
          <h1
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-black leading-none ${currentProduct.textColor} opacity-90 pointer-events-none select-none transition-all duration-1000 ${
              isTransitioning ? "opacity-0 scale-95 translate-y-8" : "opacity-90 scale-100 translate-y-0"
            }`}
            key={currentProduct.id}
            style={{ letterSpacing: "-0.02em" }}
          >
            {currentProduct.name}
          </h1>

          {/* Floating Ingredients */}
          <div className="absolute inset-0" key={`ingredients-${currentProduct.id}`}>
            <img
              src={currentProduct.ingredient}
              alt=""
              className={`absolute left-[15%] top-[20%] h-40 w-40 animate-float opacity-80 transition-all duration-1000 ease-in-out ${
                isTransitioning ? "opacity-0 -translate-y-[120vh] scale-75" : "opacity-80 translate-y-[100vh] scale-75"
              }`}
              style={{
                animationDelay: "0s",
                transitionDelay: isTransitioning ? "0ms" : "200ms",
                animation: isTransitioning ? 'none' : undefined
              }}
            />
            <img
              src={currentProduct.ingredient}
              alt=""
              className={`absolute right-[20%] top-[15%] h-36 w-36 animate-float-slow opacity-70 transition-all duration-1000 ease-in-out ${
                isTransitioning ? "opacity-0 -translate-y-[120vh] scale-75" : "opacity-70 translate-y-[100vh] scale-75"
              }`}
              style={{
                animationDelay: "1s",
                transitionDelay: isTransitioning ? "100ms" : "300ms",
                animation: isTransitioning ? 'none' : undefined
              }}
            />
            <img
              src={currentProduct.ingredient}
              alt=""
              className={`absolute left-[10%] bottom-[25%] h-44 w-44 animate-float opacity-75 transition-all duration-1000 ease-in-out ${
                isTransitioning ? "opacity-0 -translate-y-[120vh] scale-75" : "opacity-75 translate-y-[100vh] scale-75"
              }`}
              style={{
                animationDelay: "2s",
                transitionDelay: isTransitioning ? "200ms" : "400ms",
                animation: isTransitioning ? 'none' : undefined
              }}
            />
            <img
              src={currentProduct.ingredient}
              alt=""
              className={`absolute right-[15%] bottom-[20%] h-40 w-40 animate-float-slow opacity-80 transition-all duration-1000 ease-in-out ${
                isTransitioning ? "opacity-0 -translate-y-[120vh] scale-75" : "opacity-80 translate-y-[100vh] scale-75"
              }`}
              style={{
                animationDelay: "0.5s",
                transitionDelay: isTransitioning ? "50ms" : "250ms",
                animation: isTransitioning ? 'none' : undefined
              }}
            />
            <img
              src={currentProduct.ingredient}
              alt=""
              className={`absolute left-[25%] top-[35%] h-32 w-32 animate-float opacity-60 transition-all duration-1000 ease-in-out ${
                isTransitioning ? "opacity-0 -translate-y-[120vh] scale-75" : "opacity-60 translate-y-[100vh] scale-75"
              }`}
              style={{
                animationDelay: "1.5s",
                transitionDelay: isTransitioning ? "150ms" : "350ms",
                animation: isTransitioning ? 'none' : undefined
              }}
            />
            <img
              src={currentProduct.ingredient}
              alt=""
              className={`absolute right-[25%] bottom-[35%] h-36 w-36 animate-float opacity-65 transition-all duration-1000 ease-in-out ${
                isTransitioning ? "opacity-0 -translate-y-[120vh] scale-75" : "opacity-65 translate-y-[100vh] scale-75"
              }`}
              style={{
                animationDelay: "2.5s",
                transitionDelay: isTransitioning ? "250ms" : "450ms",
                animation: isTransitioning ? 'none' : undefined
              }}
            />
          </div>

          {/* Center Product */}
          <div className="relative z-20 flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="rounded-full bg-card/80 p-3 backdrop-blur-sm hover:bg-card transition-all hover:scale-110 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </button>

            <div className="relative" key={`bottle-${currentProduct.id}`}>
              <img
                src={milkBottle}
                alt={`${currentProduct.name} Milk`}
                className={`h-96 w-auto drop-shadow-2xl transition-all duration-1000 ${
                  isTransitioning ? "opacity-0 scale-90" : "opacity-100 scale-100"
                }`}
              />
              <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
                isTransitioning ? "opacity-0 scale-75 rotate-45" : "opacity-100 scale-100 rotate-0"
              }`}>
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-card/90 backdrop-blur-sm shadow-xl">
                  <img
                    src={currentProduct.ingredient}
                    alt=""
                    className="h-12 w-12"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="rounded-full bg-card/80 p-3 backdrop-blur-sm hover:bg-card transition-all hover:scale-110 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-6 w-6 text-foreground" />
            </button>
          </div>

          {/* Shop Now Button */}
          <div className="mt-12 flex justify-center">
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-base font-medium hover:bg-foreground hover:text-background transition-all"
            >
              Shop now
            </Button>
          </div>

          {/* Pagination Dots */}
          <div className="mt-8 flex justify-center gap-2">
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
        </div>
      </div>
    </div>
  );
};
