import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";

const ContactUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 9550156969"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["contact@havepura.com"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["Hyderabad, Telangana", "India"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Mon - Sat: 8AM - 8PM", "Sunday: 9AM - 5PM"],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="contact" className="relative min-h-screen py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-gray-50 to-white snap-section" ref={ref}>
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-green-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[rgb(1,62,139)] to-[#7cb342] text-white px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 rounded-full mb-3 sm:mb-4"
          >
            <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span className="font-semibold text-[10px] sm:text-xs uppercase tracking-wider">Get In Touch</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
            <span className="bg-gradient-to-r from-[rgb(1,62,139)] via-[#7cb342] to-[rgb(1,62,139)] bg-clip-text text-transparent">
              Reach Us
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
            Have questions? We'd love to hear from you.
          </p>
        </motion.div>

        {/* Main Content - Form and Info */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl border border-gray-100">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:border-[#7cb342] focus:ring-2 focus:ring-[#7cb342]/20 outline-none transition-all text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:border-[#7cb342] focus:ring-2 focus:ring-[#7cb342]/20 outline-none transition-all text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:border-[#7cb342] focus:ring-2 focus:ring-[#7cb342]/20 outline-none transition-all text-sm sm:text-base"
                    placeholder="+91 9550156969"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:border-[#7cb342] focus:ring-2 focus:ring-[#7cb342]/20 outline-none transition-all resize-none text-sm sm:text-base"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[rgb(1,62,139)] to-[#7cb342] text-white py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl font-semibold flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
                >
                  <Send size={18} className="sm:w-5 sm:h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info and Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center text-white mb-2 sm:mb-3`}>
                    <span className="[&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6">{info.icon}</span>
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-900 mb-1 sm:mb-2">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-[10px] sm:text-xs mb-0.5 sm:mb-1 truncate">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Social Media Section */}
            <div className="bg-gradient-to-br from-[rgb(1,62,139)] to-[#7cb342] rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 text-white shadow-xl">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Connect With Us</h3>
              <p className="text-white/90 mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm">
                Follow us on social media for updates, recipes, and special offers!
              </p>

              <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                <motion.a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/20 backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl hover:bg-white/30 transition-all"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>

                <motion.a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/20 backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl hover:bg-white/30 transition-all"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>

                <motion.a
                  href="mailto:contact@havepura.com"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/20 backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl hover:bg-white/30 transition-all"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>

                <motion.a
                  href="tel:+919550156969"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/20 backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl hover:bg-white/30 transition-all"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-4 sm:pt-5 md:pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-0.5 sm:mb-1">2023</div>
                  <div className="text-[10px] sm:text-xs text-white/80">Established</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-0.5 sm:mb-1">4+</div>
                  <div className="text-[10px] sm:text-xs text-white/80">States</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-0.5 sm:mb-1">100%</div>
                  <div className="text-[10px] sm:text-xs text-white/80">Pure</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
