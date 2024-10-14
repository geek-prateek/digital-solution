import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='w-full sm:w-[250px] h-[300px] relative rounded-[20px] overflow-hidden'
  >
    <img
      src={icon}
      alt={title}
      className='w-full h-full object-cover'
    />
    <div className='absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent'>
      <h3 className='text-white text-[20px] font-bold text-center'>
        {title}
      </h3>
    </div>
  </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>Our Services</p>
        <h2 className={styles.sectionHeadText}>Influencer Marketing Excellence</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-text-primary text-[17px] max-w-3xl leading-[30px] text-center mx-auto'
      >
        Our Comprehensive Services
        At Contentic Media, we are the pioneers of influencer marketing, offering unparalleled services that transcend industry standards.
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
