import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, subServices }) => (
  <Tilt className='xs:w-[300px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.2, 0.5)}
      className='w-full sm:w-[300px] min-h-[400px] relative rounded-[20px] overflow-hidden'
    >
      <img
        src={icon}
        alt={title}
        className='w-full h-[200px] object-cover'
      />
      <div className='absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent'>
        <h3 className='text-white text-[24px] font-bold text-center mb-4'>
          {title}
        </h3>
        <ul className='list-none'>
          {subServices.map((service, idx) => (
            <li 
              key={idx}
              className='text-text-secondary text-[16px] text-center mb-2 hover:text-secondary transition-colors duration-300'
            >
              {service}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>What We Offer</p>
        <h2 className={styles.sectionHeadText}>Our Comprehensive Services</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0, 0.8)}
        className='mt-4 text-text-primary text-[17px] max-w-3xl leading-[30px] text-center mx-auto'
      >
        At Contentic Media, we redefine digital marketing excellence, delivering innovative solutions 
        that set new benchmarks in lead generation, content marketing, targeted ads, and social 
        media strategies.
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};
export default SectionWrapper(About, "services");
