import { Shield, Truck, CheckCircle, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    icon: Shield,
    title: "Non-Adulteration",
    description: "We make our products with high-quality raw materials and provide required lab certifications to ensure absolute purity.",
  },
  {
    icon: Truck,
    title: "Timely Delivery",
    description: "We guarantee prompt delivery from the date of order, ensuring you receive fresh products when you need them.",
  },
  {
    icon: CheckCircle,
    title: "Quality Certified",
    description: "Equipped with FSSAI, GST, GS1 barcodes, and trade license certifications for your peace of mind.",
  },
  {
    icon: Award,
    title: "Premium Standards",
    description: "Our commitment to excellence ensures every product maintains the highest standards of taste and nutrition.",
  },
];

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
            Why Choose PURA?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Experience the difference that comes with choosing a brand committed to purity, quality, and customer satisfaction
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-3 sm:p-4 md:p-6 lg:p-8 text-center">
                  <div className="bg-primary/10 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6">
                    <Icon className="text-primary w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground mb-1.5 sm:mb-2 md:mb-3">{reason.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground line-clamp-3 sm:line-clamp-none">{reason.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8"
        >
          <div className="text-center p-3 sm:p-4 md:p-6 lg:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg">
            <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">100%</div>
            <div className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground">Pure & Natural</div>
          </div>
          <div className="text-center p-3 sm:p-4 md:p-6 lg:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg">
            <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">2023</div>
            <div className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground">Trusted Since</div>
          </div>
          <div className="text-center p-3 sm:p-4 md:p-6 lg:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg">
            <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">24/7</div>
            <div className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground">Customer Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
