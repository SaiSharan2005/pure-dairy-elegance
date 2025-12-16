import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Award, Leaf, Heart } from "lucide-react";
import { motion } from "framer-motion";

const heroProductImage = "https://cdn.shopify.com/s/files/1/0958/9892/7470/files/81d4553f-088a-4f65-ac51-49ebbc86c841_removalai_preview_1.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 snap-section">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs - Responsive sizes */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-10 -left-10 sm:-top-20 sm:-left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute top-1/2 -right-10 sm:-right-20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 9, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-10 sm:-bottom-20 left-1/3 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="grid lg:grid-cols-[1fr_1.2fr] xl:grid-cols-[1fr_1.4fr] gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">

          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-3 sm:mb-4 md:mb-6">
                <span className="bg-gradient-to-r from-[rgb(1,62,139)] to-[#7cb342] bg-clip-text text-transparent">
                  PURA
                </span>
                <br />
                <span className="text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Absolute Purity
                </span>
              </h1>
              <div className="h-1.5 sm:h-2 w-20 sm:w-24 md:w-32 bg-gradient-to-r from-[#7cb342] to-green-600 rounded-full mb-3 sm:mb-4 md:mb-6"></div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl"
            >
              Experience the perfect blend of <span className="font-bold text-[rgb(1,62,139)]">tradition</span> and{" "}
              <span className="font-bold text-[#7cb342]">purity</span> with premium dairy products crafted with care.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-2 sm:gap-3"
            >
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-md">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#7cb342]" />
                <span className="text-xs sm:text-sm font-semibold text-gray-700">100% Pure</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-md">
                <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-[#7cb342]" />
                <span className="text-xs sm:text-sm font-semibold text-gray-700">Farm Fresh</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-md">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#7cb342]" />
                <span className="text-xs sm:text-sm font-semibold text-gray-700">Made with Love</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[rgb(1,62,139)] to-[#7cb342] hover:shadow-xl text-white font-semibold text-sm sm:text-base md:text-lg px-5 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 rounded-xl group transition-all"
                onClick={() => window.location.href = "/collections/all"}
              >
                Explore Products
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[rgb(1,62,139)] text-[rgb(1,62,139)] hover:bg-[rgb(1,62,139)] hover:text-white font-semibold text-sm sm:text-base md:text-lg px-5 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 rounded-xl transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-6 md:pt-8 border-t border-gray-200"
            >
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[rgb(1,62,139)] to-[#7cb342] bg-clip-text text-transparent">
                  4+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">States</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[rgb(1,62,139)] to-[#7cb342] bg-clip-text text-transparent">
                  2023
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">Established</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[rgb(1,62,139)] to-[#7cb342] bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">Pure</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Product Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center w-full hero-product-section"
          >
            {/* Main Product Display */}
            <div className="relative flex items-center justify-center w-full">
              {/* Single Product Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative z-20 w-full flex items-center justify-center"
              >
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgb(1,62,139)] to-[#7cb342] rounded-full blur-3xl opacity-20"></div>
                  <img
                    src={heroProductImage}
                    alt="Pura Dairy Products"
                    className="relative z-10 w-[700px] lg:w-[750px] xl:w-[850px] 2xl:w-[950px] h-auto drop-shadow-2xl"
                  />
                </motion.div>
              </motion.div>

              {/* Decorative Circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] lg:w-[800px] xl:w-[900px] 2xl:w-[1000px] h-[750px] lg:h-[800px] xl:h-[900px] 2xl:h-[1000px] border-2 border-dashed border-gray-300 rounded-full opacity-20"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
