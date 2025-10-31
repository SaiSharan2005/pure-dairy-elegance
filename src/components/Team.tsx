import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

const teamMembers = [
  {
    name: "Manish Dugini",
    role: "CEO & Visionary",
    description: "The visionary behind PURA, Manish brings extensive experience in the food and dairy industry with a relentless drive for innovation and quality. Under his leadership, PURA has grown from a bold idea to a trusted name in dairy products.",
  },
  {
    name: "Andry Srinivas",
    role: "Manager",
    description: "With a strong focus on operational efficiency, Srinivas ensures that day-to-day processes run smoothly, from procurement to production and delivery, maintaining the highest standards in every step.",
  },
  {
    name: "Rohan Hajare",
    role: "Head of Product Development",
    description: "At the forefront of innovation, Rohan creates and refines our product offerings, ensuring we stay ahead of industry trends while maintaining the purity and authenticity of our products.",
  },
  {
    name: "Ashish",
    role: "Senior Marketing & Sales Officer",
    description: "Leading our Marketing and Sales division, Ashish builds the PURA brand and expands its reach with a customer-first approach that creates lasting relationships with consumers.",
  },
];

const Team = () => {
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="text-primary" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Team</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated professionals behind PURA's success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
