import React from "react";
import "./Hero.css";

function Hero({ img, name }) {
  return (
    <div className="hero__container">
      <img src={img} alt="" className="hero__img" />
      <div className="hero__name">{name}</div>
    </div>
  );
}

export default Hero;
