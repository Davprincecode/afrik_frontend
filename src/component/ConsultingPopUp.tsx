import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import logo from '../assets/images/logo.png'

interface comingSoonInterface {
    popAction : boolean,
    setPopAction: React.Dispatch<React.SetStateAction<boolean>>;
    calendarRoute : (data : string) => void;
}

const ConsultingPopUp : React.FC<comingSoonInterface> = ({popAction, setPopAction, calendarRoute}) => {
  

  return (
    
       <div className="comingWrapper" style={{display : popAction ? "flex" : "none"}}>
        <div className="comingCon consultingPop">
            <div className="comingSoonHeader">
                <div className="comingIcon" onClick={() => setPopAction(!popAction)}>
                    <RxCross2 />
                </div>
            </div>

            <div className="comingBody">
                
                <div className="comingContent flex-center">
                    <h2>consultation type</h2>
                   <div className="physical" onClick={() => calendarRoute("physical")}>physical</div>
                   <div className="online" onClick={() => calendarRoute("online")}>online</div>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default ConsultingPopUp