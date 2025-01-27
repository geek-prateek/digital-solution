import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { contentic_logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScheduleCall = () => {
    // Open Calendly popup
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/contenticmedia/30min'
      });
    }
  };

  return (
    <>
      <nav
        className={`${
          styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${
          scrolled ? "bg-primary" : "bg-transparent"
        }`}
      >
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={contentic_logo} alt='contentic_logo' className='w-9 h-9 object-contain' />
            <p className='text-white text-[18px] font-bold cursor-pointer flex '>
              Contentic &nbsp;
              <span className='sm:block hidden'> | Media</span>
            </p>
          </Link>

          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-secondary" : "text-white-100"
                  } hover:text-secondary text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <button
            className='hidden sm:flex bg-tertiary py-2 px-4 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            onClick={handleScheduleCall}
          >
            Schedule a Call
          </button>

          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain'
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Fixed button for mobile view */}
      <button
        className='sm:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-tertiary py-2 px-4 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary z-20'
        onClick={handleScheduleCall}
      >
        Schedule a Call
      </button>
    </>
  );
};

export default Navbar;