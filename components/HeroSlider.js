import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/HeroSlider.module.scss';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex)
  };

  const slides = [
    {
      image: "/images/slide1.jpg",
      title: ["From our Farms", "to your hands"],
      subtitle: "Welcome To TenTwenty Farms"
    },
    {
      image: "/images/slide2.jpg",
      title: ["From our Farms", "to your hands"],
      subtitle: "Welcome To TenTwenty Farms"
    },
    {
      image: "/images/slide3.jpg",
      title: ["From our Farms", "to your hands"],
      subtitle: "Welcome To TenTwenty Farms"
    }
  ];

  const nextSlideIndex = (currentSlide + 1) % slides.length;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className={`w-full h-screen relative ${styles.splitScreen}`}>
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 left-[20px] md:left-[135px] bg-opacity-50 flex flex-col justify-center items-start text-white">
              <div className={`mb-2 text-[14px] font-[400] leading-[18.2px] text-[#EEF4F9] text-center ${styles.titleAnimation}`}>
                {slide.subtitle}
              </div>
              <h1 className="text-left text-[46px] md:text-[64px] font-[400] leading-[46px] md:leading-[64px] text-[#EEF4F9]">
                {slide.title.map((word, i) => (
                  <span key={i} className={`block ${styles.titleAnimation}`} style={{ animationDelay: `${i * 1.5}s` }}>
                    {word}
                  </span>
                ))}
              </h1>
            </div>
          </div>
        ))}
      </Slider>
      <div className={`absolute ${styles.smallSquare} left-[20px] md:left-[135px] top-[480px] md:top-[550px]`}>
        <img
          src={slides[nextSlideIndex].image}
          alt={`Next Slide ${nextSlideIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <div className={styles.squareBorder + ' ' + styles.animateRotate}></div>
      </div>
      <div className="absolute top-[480px] md:top-[550px] left-[20px] md:left-[135px]" style={{marginLeft: '138px', marginTop: '16px' }}>
        <div className={styles.slideNumberContainer}>
          <div className={styles.slideNumber}>{`0${currentSlide + 1}`}</div>
          <div className={styles.slideLine}></div>
          <div className={styles.slideNumber}>{`03`}</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
