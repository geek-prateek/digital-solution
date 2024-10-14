import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { logo } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Footer = () => {
  return (
    <footer className="bg-primary py-2">
      <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
        <motion.div variants={textVariant()}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img src={logo} alt="Contentic Media" className="w-36" />
            </div>
            <div className="text-center md:text-right">
              <p className="text-text-secondary text-sm">
                &copy; {new Date().getFullYear()} Contentic Media. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 border-t border-text-secondary pt-4"
        >
          <div className="flex flex-wrap justify-center md:justify-between gap-4">
            <a href="#about" className="text-text-secondary hover:text-secondary text-sm">
              About
            </a>
            <a href="#services" className="text-text-secondary hover:text-secondary text-sm">
              Services
            </a>
            <a href="#contact" className="text-text-secondary hover:text-secondary text-sm">
              Contact Us
            </a>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("", "", 0.2, 1)}
          className="mt-4 text-center"
        >
          <p className="text-text-secondary text-sm">
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/geekprateek/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              Prateek Kumar
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer, "footer");