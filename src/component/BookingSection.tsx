import React from 'react'
import bookingText from '../assets/images/booktexture.png'
import consultingImg from '../assets/images/consultimg.jpg'
import { NavLink } from 'react-router-dom'

function BookingSection() {
  return (
    <div className='bookingSection'>
        <div className="leftBooking" style={{backgroundImage :  `url(${bookingText})`}}>
            <div className="bookingHeader">
                <h1>Book a <br /> Consultation</h1>
                <div className="schedule">
                  <NavLink to="#">schedule now</NavLink>  
                </div>
                
            </div>
            <div className="bookingBody">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, 
                    magna sit amet efficitur suscipit, justo leo malesuada lacus, 
                    in dignissim mauris libero et erat. Curabitur non nisi vitae turpis gravida 
                    venenatis. Nulla facilisi. In hac habitasse platea dictumst. 
                    Suspendisse potenti. Proin a malesuada arcu. 
                </p>
            </div>
        </div>
        <div className="rightBooking">
            <img src={consultingImg} />
        </div>
    </div>
  )
}

export default BookingSection