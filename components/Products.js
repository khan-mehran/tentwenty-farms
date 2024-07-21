import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Products = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(1); // Initially show the second image as centered
      }
    }, []);
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

  return (
    <div className="products py-5 text-center">
      <h2 className="text-[30px] md:text-[56px] font-[400] text-[#000]">Quality Products</h2>
      <p className="my-5 text-[16px] md:text-[24px] font-[400] text-[#7A7777] px-12 leading-4 md:leading-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />
        eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco<br />
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <Slider ref={sliderRef} {...settings}>
      <div className="w-full">
        <img className="" src="/images/product3.png" alt="Image 1" />
      </div>
      <div className="w-full">
        <img className="" src="/images/product2.png" alt="Image 2" />
      </div>
      <div className="w-full">
        <img className="" src="/images/product1.png" alt="Image 3" />
      </div>
    </Slider>
    </div>
  );
};

export default Products;
