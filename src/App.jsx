import { BrowserRouter } from "react-router-dom";
import { motion, useAnimation } from 'framer-motion'
import { About, Feedbacks, Hero, Navbar, Tech, StarsCanvas, BrandingVideo, Footer } from "./components";

const App = () => {
  const controls = useAnimation()
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-cover bg-no-repeat bg-center'>
          <StarsCanvas />
          <Navbar />
          <Hero />
          <motion.div className="app" animate={controls}>
            <BrandingVideo/>
          </motion.div>
        </div>
        <div className='bg-hero-pattern'>
          
        <About />
        <Tech />
        <Feedbacks />
        
        <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
