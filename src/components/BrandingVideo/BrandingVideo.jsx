import React from 'react';
import { video } from '../../assets';
import { SectionWrapper } from "../../hoc";

const BrandingVideo = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[500px]">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          Welcome to Contentic Media
        </h1>
      </div>
    </div>
  );
};

export default SectionWrapper(BrandingVideo, "about");