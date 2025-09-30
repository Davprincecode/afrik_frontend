import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import logo from '../assets/images/logo.png'

interface comingSoonInterface {
    popAction : boolean,
    setPopAction: React.Dispatch<React.SetStateAction<boolean>>;
}

const OfflineShop : React.FC<comingSoonInterface> = ({popAction, setPopAction}) => {
  

  return (
    
       <div className="comingWrapper" style={{display : popAction ? "flex" : "none"}}>
        <div className="comingCon">
            <div className="comingSoonHeader">
                <div className="comingIcon" onClick={() => setPopAction(!popAction)}>
                    <RxCross2 />
                </div>
            </div>

            <div className="comingBody">
                <div className="comingHeader">
                    <img src={logo} />
                </div>
                <div className="comingContent flex-center">
                <div className="comingContentHeader" style={{ textAlign : "center"}}>
                    <h1>Our shop is currently Offline.</h1>
                </div>

                <div className="comingContentPara">
                        <p>
                            Get Notified when were back up.
                        </p>
                </div>
                
                <div className="comingInput flex-center">
                    <input type="text" placeholder='Enter Email Address'/>
                    <div className="sub">subscribe</div>
                </div>

                <div className="join">
                    join the waitlist
                </div>

                    <a href="https://wa.me/2347077744145" target='_blank' className="whats-app">
                        <FaWhatsapp />
                        <p>Chat us on whatsapp</p>
                    </a>


                </div>
            </div>
        </div>
    
    </div>
  )
}

export default OfflineShop