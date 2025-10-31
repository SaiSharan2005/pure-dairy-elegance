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
    <section id="why-us" className="py-20 bg-gradient-to-b from-white to-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose PURA?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference that comes with choosing a brand committed to purity, quality, and customer satisfaction
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-primary" size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
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
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="text-5xl font-bold text-primary mb-2">100%</div>
            <div className="text-lg text-muted-foreground">Pure & Natural</div>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="text-5xl font-bold text-primary mb-2">2023</div>
            <div className="text-lg text-muted-foreground">Trusted Since</div>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="text-5xl font-bold text-primary mb-2">24/7</div>
            <div className="text-lg text-muted-foreground">Customer Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
