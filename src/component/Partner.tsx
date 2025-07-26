import React from 'react'
import partner1 from '../assets/images/partner1.jpg'
import partner2 from '../assets/images/partner2.jpg'
import partner3 from '../assets/images/partner3.jpg'
import partner4 from '../assets/images/partner4.jpg'
import partner5 from '../assets/images/partner5.jpg'
import partner6 from '../assets/images/partner6.jpg'
import partner7 from '../assets/images/partner7.jpg'
import partner8 from '../assets/images/partner8.jpg'
import partner9 from '../assets/images/partner9.jpg'
import partner10 from '../assets/images/partner10.jpg'


function Partner() {
  return (
    <div className="partnerCon">
        <div className="partnerHeader">
         Brands we’ve worked with
        </div>
        <div className="partnerFlex flex-center gap-10">
            <div className="partnerImg">
                <img src={partner1} />
            </div>
            <div className="partnerImg">
                <img src={partner2} />
            </div>
            
            <div className="partnerImg">
                <img src={partner4} />
            </div>
            <div className="partnerImg">
                <img src={partner5} />
            </div>
            <div className="partnerImg">
                <img src={partner6} />
            </div>
            <div className="partnerImg">
                <img src={partner3} />
            </div>
            <div className="partnerImg">
                <img src={partner8} />
            </div>
            <div className="partnerImg">
                <img src={partner7} />
            </div>
            <div className="partnerImg">
                <img src={partner9} />
            </div>
            <div className="partnerImg">
                <img src={partner10} />
            </div>
        </div>
    </div>
  )
}

export default Partner