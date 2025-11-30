import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white snap-section">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <img src={logo} alt="PURA" className="h-16 w-auto mb-6 brightness-0 invert" />
            <p className="text-white/80 mb-6">
              IDITRI SUNRISE FOOD HUB PVT LTD - Delivering absolute purity in every sip since 2023.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/80 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-white/80 hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-white/80 hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Products</h3>
            <ul className="space-y-3 text-white/80">
              <li>Flavored Milk</li>
              <li>Pure Ghee</li>
              <li>Buttermilk</li>
              <li>Sweet Lassi</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <span className="text-white/80">info@havepura.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <span className="text-white/80">+91 1234567890</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span className="text-white/80">Hyderabad, Telangana, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>© 2025 PURA - Absolute Purity. All rights reserved. | IDITRI SUNRISE FOOD HUB PVT LTD</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
