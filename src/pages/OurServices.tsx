import React from 'react'
import service1 from '../assets/images/service1.png';
import service2 from '../assets/images/service2.png';
import service3 from '../assets/images/service3.png';
import service4 from '../assets/images/service4.png';
import service5 from '../assets/images/service5.png';
import Header from '../component/Header'
import service from '../assets/images/ourservices.jpg'
import Footer from '../component/Footer'
import { FaArrowLeft } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

function OurServices() {
  return (
   <div className='ourServices'>
       <Header />

       <div className="ourServicesCon">
       

          <div className="ourServicesHeader" style={{backgroundImage : `url(${service})`}}>
            <NavLink to="#" className="backCon">
                <FaArrowLeft />
                <p>back</p>
            </NavLink >

            <div className="ourServiceHeaderCon">
                <div className="ourServiceHeader">
                <h1>Our Services</h1> 
                <div className="dotLineServices"></div>
                </div>
                <div className="ourServiceHeaderDetails">
                    
                        Offending belonging promotion provision an be oh consulted ourselves it. 
                        Blessing welcomed ladyship she met humoured sir breeding her. 
                        Six curiosity day assurance bed necessary.
                    
                </div>
            </div>

          </div>



<div className="ourServicesContainer flex-center gap-10">

              <div className="ourServicesItem">
                  <div className="ourServicesImg">
                   <img src={service1} alt="" />
                  </div>
                  <div className="ourServicesTitle">
                    color & style consultation
                  </div>
                  <div className="ourServicesDetails">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias possimus obcaecati accusantium nam dicta ducimus inventore,
                        corporis suscipit magni consectetur!
                    </p>
                  </div>
              </div>

              <div className="ourServicesItem">
                  <div className="ourServicesImg">
                   <img src={service2} alt="" />
                  </div>
                  <div className="ourServicesTitle">
                    personal styling
                  </div>
                 <div className="ourServicesDetails">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias possimus obcaecati accusantium nam dicta ducimus inventore,
                        corporis suscipit magni consectetur!
                    </p>
                  </div>
              </div>

              <div className="ourServicesItem sercoainer2">
                  <div className="ourServicesImg">
                   <img src={service3} alt="" />
                  </div>
                  <div className="ourServicesTitle">
                    wardrobe management
                  </div>
                   <div className="ourServicesDetails">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias possimus obcaecati accusantium nam dicta ducimus inventore,
                        corporis suscipit magni consectetur!
                    </p>
                  </div>
              </div>

           
              <div className="ourServicesItem sercoainer2">
                  <div className="ourServicesImg">
                   <img src={service4} alt="" />
                  </div>
                  <div className="ourServicesTitle">
                    Fashion Styling for 
                      Shoots, AD’s, Movies.
                  </div>
                   <div className="ourServicesDetails">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias possimus obcaecati accusantium nam dicta ducimus inventore,
                        corporis suscipit magni consectetur!
                    </p>
                  </div>
              </div>

              <div className="ourServicesItem">
                  <div className="ourServicesImg">
                   <img src={service5} alt="" />
                  </div>
                  <div className="ourServicesTitle">
                    Corporate Image Consulting
                  </div>
                   <div className="ourServicesDetails">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias possimus obcaecati accusantium nam dicta ducimus inventore,
                        corporis suscipit magni consectetur!
                    </p>
                  </div>
              </div>
              
            

        </div>

       </div>

       <Footer />
    </div>
  )
}

export default OurServices