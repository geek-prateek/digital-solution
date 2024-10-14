import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.css"
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import SlickSlider from "./SlickSlider";

const Feedbacks = () => {
  return (
    <div className={`bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-primary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()} className="text-center">
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
        <SlickSlider/>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
