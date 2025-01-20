import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { testimonialsData } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import "./Tech.css";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText} text-center`}>Top Clients</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Our Reputed Partners</h2>
      </motion.div>
      <div className="marquee-container mt-10">
        <div className="marquee-content">
          {testimonialsData.map((item, index) => (
            <div key={`up-${index}`} className="marquee-item">
              <span className="font-extrabold text-xl text-white text-stroke">{item.profession}</span>
            </div>
          ))}
          {testimonialsData.map((item, index) => (
            <div key={`up-repeat-${index}`} className="marquee-item">
              <span className="font-extrabold text-xl text-white text-stroke">{item.profession}</span>
            </div>
          ))}
        </div>
        <div className="marquee-content marquee-reverse">
          {testimonialsData.map((item, index) => (
            <div key={`down-${index}`} className="marquee-item">
              <span className="font-extrabold text-xl text-secondary text-stroke">{item.profession}</span>
            </div>
          ))}
          {testimonialsData.map((item, index) => (
            <div key={`down-repeat-${index}`} className="marquee-item">
              <span className="font-extrabold text-xl text-secondary text-stroke">{item.profession}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "work");