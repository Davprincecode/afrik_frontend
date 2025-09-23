import React from 'react'
import Header from '../component/Header'
import img1 from '../assets/images/masterclass1.jpg'
import img2 from '../assets/images/masterclass2.jpg'
import { NavLink } from 'react-router-dom'
import Footer from '../component/Footer'
import service from '../assets/images/coursebck.png'
import { FaArrowLeft } from 'react-icons/fa'

function MasterCourse() {
  return (
    <div className='master-con-wrapper pageNav'>
          <Header/>
          <div className="master-container">

            <div className="ourServicesHeader master-header" style={{backgroundImage : `url(${service})`}}>
            <NavLink to="#" className="backCon">
                <FaArrowLeft />
                <p>back</p>
            </NavLink >

            <div className="ourServiceHeaderCon">
                <div className="ourServiceHeader">
                <h1>Courses & Masterclasses</h1> 
                <div className="dotLineServices"></div>
                </div>

                <div className="ourServiceHeaderDetails">
                     {/* <p>
                     Explore tailored solutions crafted to elevate your style, image, and lifestyle. <span className="desktop-break"></span>
                     Our services are designed to meet your unique needs with precision and creativity.
                    </p>  */}

                    <p>
                        Unlock your potential with interactive courses and masterclasses designed to refine your style, image, and lifestyle. Learn from expert guidance, gain practical skills, and transform your vision into reality.
                    </p>
                </div>

            </div>

          </div>

             <div className="master-body">

                   <div className="master-body-flex master1 flex">

                        <div className="master-body-image">
                              <img src={img2} />
                        </div>

                        <div className="master-body-text">
                            <div className="master-body-title">
                                ABC OF IMAGE CONSULTING
                            </div>
                            <div className="master-body-detail">
                                <p>
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                     adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
                                      et dolore magnam aliquam quaerat voluptatem. Neque porro quisquam est,
                                       qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                                        sed quia non numquam eius modi tempo <a href="">Read more..</a> 
                                </p>
                            </div>
                            <div className="master-body-footer">

                                <div className="master-body-date flex-center">
                                    <div className="master-date">date:</div>

                                    <div className="master-date-title flex-center">
                                        <p>17th aug 2025</p>
                                        <span>-</span>
                                        <p>1st sep 2025</p>
                                    </div>
                                    
                                </div>

                                <div className="master-body-date flex-center">
                                    <div className="master-date">venue:</div>
                                    <div className="master-date-title flex-center">
                                        <p>online</p>
                                    </div>
                                </div>

                                <div className="master-body-date flex-center">
                                    <div className="master-date">price:</div>
                                    <div className="master-date-title flex-center">
                                        <p><span>₦</span>300,000</p>
                                    </div>
                                    
                                </div>

                                <div className="master-btn">
                                    enrol now
                                </div>


                            </div>
                        </div>

                   </div>

{/* ================================================================================== */}
                   <div className="master-body-flex master2 flex">

                        <div className="master-body-text">
                            <div className="master-body-title">
                                ABC OF IMAGE CONSULTING
                            </div>
                            <div className="master-body-detail">
                                <p>
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                     adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
                                      et dolore magnam aliquam quaerat voluptatem. Neque porro quisquam est,
                                       qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                                        sed quia non numquam eius modi tempo <a href="">Read more..</a> 
                                </p>
                            </div>
                            <div className="master-body-footer">

                                <div className="master-body-date flex-center">
                                    <div className="master-date">date:</div>

                                    <div className="master-date-title flex-center">
                                        <p>17th aug 2025</p>
                                        <span>-</span>
                                        <p>1st sep 2025</p>
                                    </div>
                                    
                                </div>

                                <div className="master-body-date flex-center">
                                    <div className="master-date">venue:</div>
                                    <div className="master-date-title flex-center">
                                        <p>online</p>
                                    </div>
                                </div>

                                <div className="master-body-date flex-center">
                                    <div className="master-date">price:</div>
                                    <div className="master-date-title flex-center">
                                        <p><span>₦</span>300,000</p>
                                    </div>
                                    
                                </div>

                                <NavLink to="#" className="master-btn">
                                    enrol now
                                </NavLink>


                            </div>
                        </div>

                         <div className="master-body-image">
                              <img src={img1} />
                        </div>

                   </div>
{/* ================================================== */}
             </div>

          </div>
          <Footer />
    </div>
  )
}

export default MasterCourse