import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src={logo} alt="PURA - Absolute Purity" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#why-us" className="text-foreground hover:text-primary transition-colors">
              Why Us
            </a>
            <Button className="bg-primary hover:bg-primary/90">Contact Us</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#products"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a
                href="#why-us"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Us
              </a>
              <Button className="bg-primary hover:bg-primary/90 w-full">Contact Us</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
