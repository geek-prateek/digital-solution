import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { contentic_logo } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-90"></div>

      <div className={`${styles.paddingX} max-w-7xl mx-auto relative z-10`}>
        <motion.div 
          variants={textVariant()}
          className="pt-8 pb-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <motion.div 
              variants={fadeIn("right", "spring", 0.1, 1)}
              className="flex flex-col items-center md:items-start gap-4"
            >
              <img src={contentic_logo} alt="Contentic Media" className="w-36 hover:scale-105 transition-transform duration-300" />
              <p className="text-text-secondary text-sm max-w-[300px] text-center md:text-left">
                Transforming ideas into digital reality through innovative solutions and creative excellence.
              </p>
            </motion.div>
            <div className="flex gap-6 md:ml-auto">
              <a href="#about" className="text-text-secondary hover:text-secondary transition-colors duration-300">
                About
              </a>
              <a href="#services" className="text-text-secondary hover:text-secondary transition-colors duration-300">
                Services
              </a>
              <a href="#work" className="text-text-secondary hover:text-secondary transition-colors duration-300">
                Testimonials
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 0.3, 1)}
          className="border-t border-text-secondary/20 py-6"
        >
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex gap-6">
              {/* Social Media Links */}
              <a 
                href="https://www.facebook.com/share/1EaudpPPDD/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-secondary transition-colors duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/contentic.media" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-secondary transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a 
                href="https://wa.me/+7304866931" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-secondary transition-colors duration-300"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 0.4, 1)}
          className="text-center py-4"
        >
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} Contentic Media. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-20"></div>
    </footer>
  );
};

export default SectionWrapper(Footer, "footer");