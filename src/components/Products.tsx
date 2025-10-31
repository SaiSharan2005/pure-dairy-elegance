import productPista from "@/assets/product-pista.jpg";
import productBadam from "@/assets/product-badam.png";
import productChocolate from "@/assets/product-chocolate.png";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const products = [
  {
    name: "Pista Milk",
    description: "Rich and creamy pistachio-flavored milk for a delightful taste experience",
    image: productPista,
    color: "from-green-50 to-green-100",
  },
  {
    name: "Badam Milk",
    description: "Nutritious almond-infused milk packed with wholesome goodness",
    image: productBadam,
    color: "from-orange-50 to-orange-100",
  },
  {
    name: "Chocolate Milk",
    description: "Indulgent chocolate milk that's both delicious and nutritious",
    image: productChocolate,
    color: "from-amber-50 to-amber-100",
  },
];

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-secondary/30 to-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Premium Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our range of flavored milk products, each crafted with absolute purity and care
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className={`bg-gradient-to-br ${product.color} p-8 flex items-center justify-center min-h-[300px]`}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="h-72 w-auto object-contain drop-shadow-2xl"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">More Products Coming Soon!</h3>
          <p className="text-xl text-white/90 mb-6">
            We're constantly innovating to bring you more delicious and nutritious dairy products including Ghee, Buttermilk, and Sweet Lassi.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
