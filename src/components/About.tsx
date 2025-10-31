import { Award, Heart, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tradition Meets Purity
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            IDITRI SUNRISE FOOD HUB PVT LTD brings you PURA, a brand committed to delivering 
            fresh, nutritious, and authentic dairy products since 2023.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Award className="text-primary" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Premium Quality</h3>
            <p className="text-muted-foreground">
              We blend traditional dairy heritage with modern techniques to ensure every product 
              meets the highest standards of quality and hygiene.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Leaf className="text-accent" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Farm Fresh</h3>
            <p className="text-muted-foreground">
              Sourced from trusted farms and processed with care, our products maintain the natural 
              goodness and nutrition of pure, farm-fresh milk.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Heart className="text-primary" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Family Trust</h3>
            <p className="text-muted-foreground">
              Building relationships based on trust and quality, we deliver wholesome dairy products 
              that families can rely on every day.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-primary text-white rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            To deliver superior dairy products crafted with care, using farm-fresh milk and advanced 
            hygienic processes. Through PURA, we offer a range of nutritious and ready-to-consume 
            products, promoting healthier lifestyles and sustainable practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
