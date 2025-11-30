import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const OurVibe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 snap-section"
    >
      {/* Top Wave Decoration - Seamless Blend */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,40L48,45.3C96,51,192,61,288,61.3C384,61,480,51,576,45.3C672,40,768,40,864,45.3C960,51,1056,61,1152,61.3C1248,61,1344,51,1392,45.3L1440,40L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z" className="fill-blue-50"/>
        </svg>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Heading */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                <span className="text-[#7cb342] font-semibold text-lg tracking-wider uppercase">
                  Our Story
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-[rgb(1,62,139)] leading-tight"
              >
                Our Vibe
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              PURA was born because we were done with fake, watered-down dairy. So we created something{" "}
              <span className="font-bold text-[rgb(1,62,139)]">real</span> — small-batch, high-care, and always pure.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              What started in{" "}
              <span className="font-semibold text-[#7cb342]">Hyderabad</span> with just{" "}
              <span className="font-bold text-[rgb(1,62,139)]">5 customers</span> in January 2023 has grown across{" "}
              <span className="font-semibold">Telangana, Andhra, Karnataka, Tamil Nadu</span>, and we're still expanding.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4"
            >
              <p className="text-2xl md:text-3xl font-bold text-[rgb(1,62,139)] italic">
                Pure vibes, pure taste, pure PURA.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center p-4 bg-white/80 rounded-lg shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-[#7cb342]">2023</div>
                <div className="text-sm text-gray-600 mt-1">Founded</div>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-lg shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-[#7cb342]">5→∞</div>
                <div className="text-sm text-gray-600 mt-1">Customers</div>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-lg shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-[#7cb342]">4+</div>
                <div className="text-sm text-gray-600 mt-1">States</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Decorative Elements */}
            <div className="relative h-[500px] lg:h-[600px]">
              {/* Main Circle */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-br from-[rgb(1,62,139)] to-[#7cb342] opacity-10"></div>
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 bg-white p-6 rounded-full shadow-lg"
              >
                <svg className="w-12 h-12 text-[#7cb342]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </motion.div>

              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-10 bg-white p-6 rounded-full shadow-lg"
              >
                <svg className="w-12 h-12 text-[rgb(1,62,139)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </motion.div>

              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 right-0 bg-white p-6 rounded-full shadow-lg"
              >
                <svg className="w-12 h-12 text-[#7cb342]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </motion.div>

              {/* Center Content */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-center bg-white/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border-4 border-[#7cb342]">
                  <div className="text-8xl font-bold text-[rgb(1,62,139)] mb-4">PURA</div>
                  <div className="text-2xl font-semibold text-[#7cb342]">Absolute Purity</div>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#7cb342] animate-pulse"></div>
                    <div className="h-2 w-2 rounded-full bg-[#7cb342] animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                    <div className="h-2 w-2 rounded-full bg-[#7cb342] animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="white" fillOpacity="0.3"/>
        </svg>
      </div>
    </section>
  );
};

export default OurVibe;
