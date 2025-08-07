import React from 'react'
import partner1 from '../assets/images/brandlogo/partner1.png'
import partner2 from '../assets/images/brandlogo/partner2.png'
import partner3 from '../assets/images/brandlogo/partner3.png'
import partner4 from '../assets/images/brandlogo/partner4.png'
import partner5 from '../assets/images/brandlogo/partner5.png'
import partner6 from '../assets/images/brandlogo/partner6.png'
import partner7 from '../assets/images/brandlogo/partner7.png'
import partner8 from '../assets/images/brandlogo/partner8.png'
import partner9 from '../assets/images/brandlogo/partner9.png'
import partner10 from '../assets/images/brandlogo/partner10.png'


function Partner() {

   const items = [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9, partner10]

  return (
    <div className="partnerCon">
        <div className="partnerHeader">
         Brands we’ve worked with
        </div>
         
         <div className="partnerFlexCon">
            <div className="partnerFlex">

                {[...items, ...items].map((item, index) => (
          
          <div className="partnerImg" key={index}>
                    <img src={item} />
                </div>
        ))}
                {/* <div className="partnerImg">
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
                </div> */}
            </div>
        </div>

    </div>
  )
}

export default Partner