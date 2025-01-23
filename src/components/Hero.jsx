import { motion } from "framer-motion";
import { styles } from "../styles";
import Rotate3D from "./Rotate3D";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Client1, Client2, Client3, Client4, Client6, Client7, Client8, Client9, Client10, Client11, Client12 } from "../assets";
import { useState, useEffect } from "react";

const handleScroll = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
};

const handleCalendlyOpen = () => {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/contenticmedia/30min'
    });
  }
};

const creatorImages = [
  Client1,
  Client2,
  Client3,
  Client4,
  Client6,
  Client7,
  Client8,
  Client9,
  Client10,
  Client11,
  Client12
];

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <section className={`relative w-full h-screen mx-auto bg-primary overflow-hidden`}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#1a1a2e] to-secondary opacity-50 animate-gradient-xy"></div>
      
      {/* Main content */}
      <div className={`absolute inset-0 ${isMobile ? 'top-0 flex items-center' : 'top-[60px] md:top-[100px]'} max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center justify-center text-center`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${isMobile ? 'mt-0' : ''}`}
        >
          <h1 className={`${styles.heroHeadText} mb-6`}>
            Transforming Ideas into <br />
            <span className='text-secondary'>
              <Rotate3D>Digital Reality</Rotate3D>
            </span>
          </h1>
          
          <motion.p 
            className="text-secondary text-xl md:text-2xl max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We craft innovative digital solutions that bring your vision to life
          </motion.p>
        </motion.div>
      </div>

      {/* Creator Images Carousel */}
      <motion.div 
        className="absolute bottom-20 w-full px-4 md:hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <Slider {...sliderSettings} className="max-w-6xl mx-auto">
          {creatorImages.map((image, index) => (
            <div key={index} className="px-2">
              <div className="w-24 h-24 mx-auto overflow-hidden rounded-full border-2 border-secondary">
                <img 
                  src={image} 
                  alt={`Creator ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full">
        <motion.div 
          className="h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
      </div>
    </section>
  );
};

export default Hero;
