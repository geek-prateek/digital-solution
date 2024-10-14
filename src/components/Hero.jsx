import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Rotate3D from "./Rotate3D";

const handleScroll = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
};

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto bg-primary`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className={`${styles.heroHeadText}`}>
            Creative Digital Solutions with <span className='text-secondary'><Rotate3D>3d</Rotate3D>Magic</span>
          </h1>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'
          onClick={handleScroll}
          role="button">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
       
      </div>
      <div className='flex flex-col items-center justify-center w-full mt-5'>
        <div className='flex flex-row items-center'>
          <div className='w-5 h-5 rounded-full bg-[#4A90E2]' />
          <div className='h-1 sm:w-80 w-40 violet-gradient ml-2' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
