import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, CheckCircle } from "lucide-react";

const regions = [
  { name: "Telangana", color: "from-blue-500 to-blue-600" },
  { name: "Andhra Pradesh", color: "from-green-500 to-green-600" },
  { name: "Goa", color: "from-orange-500 to-orange-600" },
  { name: "Karnataka", color: "from-red-500 to-red-600" },
  { name: "Tamil Nadu", color: "from-purple-500 to-purple-600" },
];

const Regions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="text-primary" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Delivering Purity Across Regions
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With a focus on freshness, quality, and timely distribution, we ensure that our premium 
            dairy products reach customers in diverse markets, nourishing families and businesses alike.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
          {regions.map((region, index) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${region.color} rounded-2xl p-6 text-white text-center shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2`}
            >
              <CheckCircle className="mx-auto mb-3" size={32} />
              <h3 className="font-bold text-lg">{region.name}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-3xl p-12 shadow-xl text-center"
        >
          <h3 className="text-3xl font-bold text-foreground mb-4">Our Clients</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Trusted by premium establishments across multiple states
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-secondary/50 rounded-xl p-6">
              <h4 className="font-bold text-xl text-primary mb-3">Coffee Shops & Retail</h4>
              <p className="text-muted-foreground">The Coffee Cup, Premium Retail Outlets</p>
            </div>
            <div className="bg-secondary/50 rounded-xl p-6">
              <h4 className="font-bold text-xl text-primary mb-3">Religious Institutions</h4>
              <p className="text-muted-foreground">Dattapettam Ashram, Temples, Jain Mandir, Bhojanshala</p>
            </div>
            <div className="bg-secondary/50 rounded-xl p-6">
              <h4 className="font-bold text-xl text-primary mb-3">Hotels & Restaurants</h4>
              <p className="text-muted-foreground">Premium Hotels, Grill 9, Sweet Shops</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Regions;
