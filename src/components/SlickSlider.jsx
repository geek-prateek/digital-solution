import React from 'react';
import Slider from "react-slick";
import { testimonialsData } from '../constants';
import { apos } from '../assets';
import { FaStar, FaStarHalf } from 'react-icons/fa';

const RatingStars = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`star-${i}`} className="text-yellow-400" />);
  }
  
  if (hasHalfStar) {
    stars.push(<FaStarHalf key="half-star" className="text-yellow-400" />);
  }

  return <div className="flex gap-1 justify-center my-4">{stars}</div>;
};

const SlickSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        touchMove: true,
        useCSS: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            <Slider {...settings}>
                {testimonialsData.map((comment, i) => (
                    <div key={i} className="comment">
                        {/* Upper Side */}
                        <div className="c-content">
                            <img src={apos} className="apos-slider" alt="apos" width={40} height={30} />
                            <span className="line-clamp-5 overflow-hidden text-ellipsis">
                                {comment.comment}
                            </span>
                        </div>

                        {/* Rating Stars */}
                        <RatingStars rating={comment.rating} />

                        {/* Lower Section */}
                        <div className="c-info">
                            <div className="c-avatar">
                                <img src={comment.icon} alt='testi'
                                    width={128}
                                    height={128} />
                            </div>
                            <div className="c-person">
                                <span className="truncate max-w-[200px]">{comment.name}</span>
                                <span className="truncate max-w-[200px]">{comment.profession}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SlickSlider;
