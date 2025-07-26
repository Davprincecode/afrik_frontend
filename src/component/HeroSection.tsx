import React from 'react'
import hero1 from '../assets/images/hero1.png'

function HeroSection() {
  return (
    <div className='hero'>

        <div className="heroImgCon">
           <div className="heroImg">
            <img src={hero1} alt="" />
           </div> 
           <div className="heroText">
              <div className="heroHeader">Where Luxury Meets Legacy.</div>
              <div className="heroBody">Curated fashion, signature scents, and expert consulting—crafted for those who live beyond trends.</div>
              <div className="heroBtn">shop now</div>
           </div>
        </div>
        
    </div>
  )
}

export default HeroSection