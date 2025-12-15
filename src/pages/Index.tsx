import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import OurVibe from "@/components/OurVibe";
import { ProductCarousel } from "@/components/ProductCarousel";
import Products from "@/components/Products";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

interface IndexProps {
  showHeader?: boolean;
}

const Index = ({ showHeader = true }: IndexProps) => {
  return (
    <div className="min-h-screen">
      {showHeader && <Header />}
      <Hero />
      <Features />
      <OurVibe />
      {/* ProductCarousel hidden on mobile, only shows on md screens and up */}
      <div id="product-carousel-wrapper" style={{ display: 'none' }}>
        <style>{`@media (min-width: 768px) { #product-carousel-wrapper { display: block !important; } }`}</style>
        <ProductCarousel showHeader={false} />
      </div>
      <Products />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Index;
