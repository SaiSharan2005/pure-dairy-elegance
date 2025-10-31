import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Target } from "lucide-react";

const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-primary text-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp size={40} />
              <h2 className="text-3xl md:text-4xl font-bold">Where We Are Heading</h2>
            </div>
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              From January 2023, we started our journey with just 5 customers in Hyderabad. Today, 
              we've expanded across <strong>Telangana, Andhra Pradesh, Karnataka, and Tamil Nadu</strong> with 
              tremendous growth.
            </p>
            <p className="text-xl text-white/90 leading-relaxed">
              Our products are enrolled with E-commerce platforms, and by the end of 2025, 
              <strong> we will be exporting to many countries worldwide</strong>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Target size={40} />
              <h2 className="text-3xl md:text-4xl font-bold">Our Motto</h2>
            </div>
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              We founded PURA after witnessing excessive adulteration in the market. Our mission is to 
              provide customers with <strong>pure ghee without adulteration at an affordable price</strong> in 
              convenient small packs.
            </p>
            <p className="text-xl text-white/90 leading-relaxed">
              Ghee is traditionally seen as a luxury item. Our goal is to <strong>make it available for every 
              individual</strong>, even in tier-2 and tier-3 cities, through our affordable pricing strategy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
