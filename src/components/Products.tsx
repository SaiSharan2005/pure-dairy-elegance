import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ShoppingCart, Heart, Star, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

const CDN_URL = "https://e3wqz0-4z.myshopify.com/cdn/shop/t/2/assets";
const productPista = `${CDN_URL}/product-pista.jpg`;
const productBadam = `${CDN_URL}/product-badam.png`;
const productChocolate = `${CDN_URL}/product-chocolate.png`;

const products = [
  {
    name: "Pista Milk",
    description: "Rich and creamy pistachio-flavored milk for a delightful taste experience",
    tagline: "Nutty Perfection",
    image: productPista,
    gradient: "from-emerald-400 via-green-500 to-teal-600",
    bgGradient: "from-emerald-50 to-green-100",
    features: ["100% Natural", "Rich in Protein", "No Preservatives"],
    rating: 4.8,
  },
  {
    name: "Badam Milk",
    description: "Nutritious almond-infused milk packed with wholesome goodness",
    tagline: "Almond Bliss",
    image: productBadam,
    gradient: "from-orange-400 via-amber-500 to-yellow-600",
    bgGradient: "from-orange-50 to-amber-100",
    features: ["Energy Boost", "Brain Food", "Fresh Daily"],
    rating: 4.9,
  },
  {
    name: "Chocolate Milk",
    description: "Indulgent chocolate milk that's both delicious and nutritious",
    tagline: "Pure Indulgence",
    image: productChocolate,
    gradient: "from-amber-600 via-orange-700 to-red-800",
    bgGradient: "from-amber-50 to-orange-100",
    features: ["Kids' Favorite", "Rich Cocoa", "Vitamin Enriched"],
    rating: 5.0,
  },
  {
    name: "Pure Ghee",
    description: "Traditional clarified butter made from pure cow's milk, perfect for cooking",
    tagline: "Golden Goodness",
    image: productPista, // Placeholder - replace with actual ghee image
    gradient: "from-yellow-400 via-amber-500 to-orange-600",
    bgGradient: "from-yellow-50 to-amber-100",
    features: ["Traditional Recipe", "Pure Cow Milk", "Rich Aroma"],
    rating: 4.9,
  },
  {
    name: "Buttermilk",
    description: "Refreshing and cooling buttermilk, perfect for digestion and hydration",
    tagline: "Cool & Refreshing",
    image: productBadam, // Placeholder - replace with actual buttermilk image
    gradient: "from-blue-400 via-cyan-500 to-teal-600",
    bgGradient: "from-blue-50 to-cyan-100",
    features: ["Probiotic Rich", "Digestive Aid", "Low Calorie"],
    rating: 4.7,
  },
  {
    name: "Sweet Lassi",
    description: "Creamy and sweet yogurt-based drink, a traditional favorite for all ages",
    tagline: "Sweet Tradition",
    image: productChocolate, // Placeholder - replace with actual lassi image
    gradient: "from-pink-400 via-rose-500 to-red-600",
    bgGradient: "from-pink-50 to-rose-100",
    features: ["Creamy Texture", "Naturally Sweet", "Cooling Effect"],
    rating: 4.8,
  },
];

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextProduct = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const currentProduct = products[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section id="products2" className="relative min-h-fit lg:min-h-screen flex items-center justify-center overflow-hidden bg-white snap-section py-12 sm:py-16 md:py-20" ref={ref}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-green-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center py-4 sm:py-6 md:py-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-6 md:mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#7cb342] to-green-600 text-white px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 rounded-full mb-2 sm:mb-3 md:mb-4"
          >
            <Sparkles size={16} className="sm:w-5 sm:h-5" />
            <span className="font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Flavors</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3">
            <span className="bg-gradient-to-r from-[rgb(1,62,139)] via-[#7cb342] to-[rgb(1,62,139)] bg-clip-text text-transparent">
              Premium Products
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Crafted with absolute purity and care
          </p>
        </motion.div>

        {/* Product Carousel */}
        <div className="flex-1 flex items-center justify-center relative max-w-6xl mx-auto w-full">
          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevProduct}
            className="absolute left-0 sm:left-2 md:left-4 z-30 bg-white/90 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-full shadow-xl hover:bg-white transition-all hover:shadow-2xl"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[rgb(1,62,139)]" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextProduct}
            className="absolute right-0 sm:right-2 md:right-4 z-30 bg-white/90 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-full shadow-xl hover:bg-white transition-all hover:shadow-2xl"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[rgb(1,62,139)]" />
          </motion.button>

          {/* Product Card */}
          <div className="w-full max-w-4xl px-10 sm:px-12 md:px-16 lg:px-20">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative"
              >
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentProduct.gradient} opacity-50`}></div>

                  {/* Inner Card */}
                  <div className="relative m-[2px] sm:m-[3px] bg-white rounded-2xl sm:rounded-3xl overflow-hidden">
                    <div className="grid md:grid-cols-2">
                      {/* Image Section */}
                      <div className={`relative bg-gradient-to-br ${currentProduct.bgGradient} p-4 sm:p-6 md:p-8 lg:p-12 flex items-center justify-center overflow-hidden`}>
                        {/* Floating Circles */}
                        <motion.div
                          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className={`absolute top-0 right-0 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 bg-gradient-to-br ${currentProduct.gradient} rounded-full blur-2xl opacity-30`}
                        ></motion.div>
                        <motion.div
                          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                          transition={{ duration: 3.5, repeat: Infinity }}
                          className={`absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br ${currentProduct.gradient} rounded-full blur-2xl opacity-30`}
                        ></motion.div>

                        {/* Product Image */}
                        <motion.img
                          src={currentProduct.image}
                          alt={currentProduct.name}
                          className="relative z-10 max-h-[140px] sm:max-h-[180px] md:max-h-[250px] lg:max-h-[350px] w-auto object-contain drop-shadow-2xl"
                          initial={{ scale: 0.8, rotate: -10 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          loading="lazy"
                        />

                        {/* Favorite Icon */}
                        <motion.button
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 bg-white/90 backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg hover:bg-white transition-colors z-20"
                        >
                          <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                        </motion.button>
                      </div>

                      {/* Content Section */}
                      <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                        {/* Tagline */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className={`inline-block bg-gradient-to-r ${currentProduct.gradient} bg-clip-text text-transparent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-1.5 sm:mb-2 md:mb-3`}
                        >
                          {currentProduct.tagline}
                        </motion.div>

                        {/* Product Name */}
                        <motion.h3
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4"
                        >
                          {currentProduct.name}
                        </motion.h3>

                        {/* Rating */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 md:mb-4"
                        >
                          <div className="flex items-center gap-0.5 sm:gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 ${i < Math.floor(currentProduct.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">{currentProduct.rating}</span>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                          className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4 md:mb-6 line-clamp-2 sm:line-clamp-3 md:line-clamp-none"
                        >
                          {currentProduct.description}
                        </motion.p>

                        {/* Features */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.7 }}
                          className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4 md:mb-6"
                        >
                          {currentProduct.features.map((feature, i) => (
                            <span
                              key={i}
                              className="text-xs sm:text-sm bg-gray-100 text-gray-700 px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full font-medium"
                            >
                              {feature}
                            </span>
                          ))}
                        </motion.div>

                        {/* Action Button */}
                        <motion.button
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full bg-gradient-to-r ${currentProduct.gradient} text-white py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg hover:shadow-xl transition-all text-sm sm:text-base md:text-lg`}
                        >
                          <ShoppingCart size={18} className="sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]" />
                          <span>Shop Now</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Product Indicators */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6 md:mt-8">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? `w-8 sm:w-10 md:w-12 h-2 sm:h-2.5 md:h-3 bg-gradient-to-r ${currentProduct.gradient}`
                  : 'w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
