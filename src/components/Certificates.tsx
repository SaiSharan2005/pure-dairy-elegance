import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Shield, FileCheck, Globe } from "lucide-react";

const certificates = [
  {
    icon: Shield,
    title: "FSSAI License",
    description: "Food Safety and Standards Authority of India certified under FSS Act 2006",
  },
  {
    icon: FileCheck,
    title: "GST Certificate",
    description: "Registered under Goods and Services Tax for complete compliance",
  },
  {
    icon: Globe,
    title: "Import & Export Code",
    description: "Authorized for international trade operations",
  },
  {
    icon: Award,
    title: "GS1 Barcodes",
    description: "Global standards for product identification and traceability",
  },
];

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Certified Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to quality is backed by comprehensive certifications and compliance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 50, rotate: -5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-primary"
              >
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="text-primary" size={40} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 text-center">{cert.title}</h3>
                <p className="text-muted-foreground text-center">{cert.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
