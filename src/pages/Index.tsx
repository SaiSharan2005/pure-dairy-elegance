import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import Team from "@/components/Team";
import Vision from "@/components/Vision";
import Regions from "@/components/Regions";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <WhyUs />
      <Team />
      <Vision />
      <Regions />
      <Certificates />
      <Footer />
    </div>
  );
};

export default Index;
