import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <WhyUs />
      <Footer />
    </div>
  );
};

export default Index;
