import React, { useState } from 'react'
import bookingText from '../assets/images/booktexture.png'
import courseImg from '../assets/images/courseImg.jpg'
import { NavLink } from 'react-router-dom'
import ComingSoon from './ComingSoon';

function CourseSection() {
  return (
    <div className="courseSection">
            <div className="courseHeader">
                courses & masterclasses
            </div>
        <div className='bookingSection'>
            <div className="rightBooking">
                <img src={courseImg} />
            </div>
        
            <div className="leftBooking" style={{backgroundImage :  `url(${bookingText})`}}>
                <div className="bookingHeader">
                    <h1> <span className='bookSpace'>Style & Colour Masterclass </span></h1>
                </div>
                <div className="bookingBody">
                <h4>Transform Your Style with Expert Guidance</h4>
                    <p>
                    Book a personalized consultation and get tailored advice on fashion,
                    lifestyle, and image enhancement. Whether you need a wardrobe revamp, 
                    personal styling tips, or a complete image makeover, 
                    we’ll help you define a look that reflects confidence,
                    sophistication, and your unique personality. 
                    </p>
                </div>
                <div className="schedule">
                    <NavLink to="/consultant">enroll now</NavLink>  
                </div>
                <div className="allCourses">
                  <NavLink to="#">all courses/masterclasses</NavLink>  
                </div>
            </div>

        
        </div>

    </div>
  )
}

export default CourseSection