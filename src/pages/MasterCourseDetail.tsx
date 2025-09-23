import React from 'react'
import Header from '../component/Header'
import { NavLink } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import img from '../assets/images/consultingimages.png'

function MasterCourseDetail() {
  return (
    <div className='master-con-wrapper pageNav'>
          <Header/>

          <div className="master-container master-container-details">
            
            <div className="master-back-header">
                    <div className="back-header">
                            <NavLink to="#">
                                <FaArrowLeft /> 
                                <div className="back-title">back</div>
                            </NavLink>
                    </div>
            </div>

            <div className="master-details">  

                <div className="master-details-title">
                    ABC OF IMAGE CONSULTING
                </div> 
                
                <div className="master-image-flex">
                    <div className="master-details-image">
                    <img src={img} alt="" />
                    </div>
                </div>
                

                <div className="master-details-body">
                    <p>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempo.
Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempo.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempo.

Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempo.
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
    </div>
  )
}

export default MasterCourseDetail