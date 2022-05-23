import React from "react";
import banner1 from "../../../Assets/banner/banner1.png";

const Banner = () => {
  return (
    <div class="hero min-h-screen" style={{
        background: `url(${banner1})`
    }}  >
    <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="w-84">
      <h1 class="mb-5 text-5xl font-bold">MULTIVE HAS  <span className="text-primary">QUALITY PARTS</span> </h1>
      <h4 className="mb-5 text-white text-4xl font-bold">AT GREAT PRICES</h4>
      <p className="mb-5" > A wonderful and modern design that is spend own for AUTO PARTS, Car Portal and MarketPlac A wonderful and modern design that is spend own for AUTO PARTS, Car Portal and MarketPlac</p>
      <button class="btn btn-wide btn-primary">Shop Now</button>
    </div>
  </div>
    </div>
  );
};

export default Banner;


