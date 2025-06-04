import React from 'react';
import "./Hero.css"
import arrowIcon from '../../assets/images/icon-arrow-down.svg';


const Hero = () => {
  return (
    <div className='hero-section'>
      <div className="hero-heading">
        <h1>We are creatives</h1>
      </div>
      <img src={arrowIcon} alt="arrowDownIcon" />
    </div>
  )
}

export default Hero
