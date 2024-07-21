import React from "react";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import Products from "../components/Products";
// const images = [
//   '/images/product2.png',
//   '/images/product1.png',
//   '/images/product3.png',
// ];

const HomePage = () => {

  return (
    <div className="relative">
      <HeroSlider />
      <Header />
      <Products />
    </div>
  );
};

export default HomePage;
