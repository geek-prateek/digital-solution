import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { partnerNames } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import "./Tech.css";

const Tech = () => {
  // Create two different arrays by splitting the partner names
  const halfLength = Math.ceil(partnerNames.length / 2);
  const topPartners = [...partnerNames.slice(0, halfLength)];
  const bottomPartners = [...partnerNames.slice(halfLength)];

  // Duplicate each array for seamless scrolling
  const duplicatedTopData = [...topPartners, ...topPartners, ...topPartners, ...topPartners];
  const duplicatedBottomData = [...bottomPartners, ...bottomPartners, ...bottomPartners, ...bottomPartners];

  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText} text-center`}>Top Clients</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Our Reputed Partners</h2>
      </motion.div>
      <div className="marquee-container mt-10">
        <div className="marquee-content">
          {duplicatedTopData.map((name, index) => (
            <div key={`up-${index}`} className="marquee-item">
              <span className="font-extrabold text-xl text-white text-stroke">{name}</span>
            </div>
          ))}
        </div>
        <div className="marquee-content marquee-reverse">
          {duplicatedBottomData.map((name, index) => (
            <div key={`down-${index}`} className="marquee-item">
              <span className="font-extrabold text-xl text-secondary text-stroke">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "work");