import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from "lucide-react";
import { motion } from "framer-motion";

const CDN_URL = "https://e3wqz0-4z.myshopify.com/cdn/shop/t/2/assets";
const logo = `${CDN_URL}/logo.png`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Vibe", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Reach Us", href: "#contact" },
  ];

  const products = [
    { name: "Pista Milk", gradient: "from-emerald-400 to-green-500" },
    { name: "Badam Milk", gradient: "from-orange-400 to-amber-500" },
    { name: "Chocolate Milk", gradient: "from-amber-600 to-red-800" },
    { name: "Pure Ghee", gradient: "from-yellow-400 to-orange-500" },
    { name: "Buttermilk", gradient: "from-blue-400 to-cyan-500" },
    { name: "Sweet Lassi", gradient: "from-pink-400 to-rose-500" },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Instagram size={20} />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Twitter size={20} />, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer className="relative bg-[rgb(1,62,139)] text-white overflow-hidden snap-section">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#7cb342]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <img src={logo} alt="PURA" className="h-14 w-auto mb-4 brightness-0 invert" />
              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                IDITRI SUNRISE FOOD HUB PVT LTD - Delivering absolute purity in every sip since 2023.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/10 hover:bg-[#7cb342] p-3 rounded-xl transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#7cb342] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7cb342] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-1"
          >
            <h3 className="text-lg font-bold mb-6 text-white">
              Our Products
            </h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.gradient}`}></span>
                  <span className="text-white/70 hover:text-[#7cb342] transition-colors cursor-pointer">
                    {product.name}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-1"
          >
            <h3 className="text-lg font-bold mb-6 text-white">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@havepura.com" className="flex items-start gap-3 group">
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-[#7cb342] transition-all">
                    <Mail size={16} />
                  </div>
                  <span className="text-white/70 group-hover:text-white transition-colors text-sm">
                    info@havepura.com
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:+911234567890" className="flex items-start gap-3 group">
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-[#7cb342] transition-all">
                    <Phone size={16} />
                  </div>
                  <span className="text-white/70 group-hover:text-white transition-colors text-sm">
                    +91 1234567890
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 group">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <MapPin size={16} />
                  </div>
                  <span className="text-white/70 text-sm">
                    Hyderabad, Telangana<br />India
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} PURA - Absolute Purity. All rights reserved.
            </p>
            <p className="text-white/60 text-sm flex items-center gap-1">
              Made with <Heart size={14} className="text-red-500 fill-red-500" /> by IDITRI SUNRISE FOOD HUB PVT LTD
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
