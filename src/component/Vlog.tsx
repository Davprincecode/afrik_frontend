import React from 'react'
import blogImg from '../assets/images/blogpic.png'
import { NavLink } from 'react-router-dom'

function Vlog() {
  return (
   <div className='vlog'>
          <div className="vlogHeader">
             <h1>vlog</h1>
          </div>
           
          <div className="vlogConFlex flex gap-10">

              <div className="vlogCon">

                <div className="vlogImage">
                    <video src="https://www.instagram.com/reel/DGz3Ef4oZOV/embed"></video>
                     {/* <iframe
        src="https://www.instagram.com/reel/DGh4dmdMqU1/?igsh=dXNpN2V4ZjhybHFr"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        allowTransparency={true}
        allowFullScreen={true}
        title="Instagram Reel"
      ></iframe> */}
                </div>

                <div className="vlogContent">
                    <div className="vlogHeading">
                        Make your Dream a Reality
                    </div>
                   
                </div>
              </div>
              
              <div className="vlogCon">
                <div className="vlogImage">
                   <iframe
                        src="https://www.instagram.com/reel/DGh4dmdMqU1/embed"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        allowTransparency={true}
                        allowFullScreen={true}
                        title="Instagram Reel"
                    >

                    </iframe>
                </div>
                <div className="vlogContent">
                    <div className="vlogHeading">
                       Tacky is not a Vibe
                    </div>
                    
                </div>
              </div>

              <div className="vlogCon">
                <div className="vlogImage">
                    <img src={blogImg}/>
                </div>
                <div className="vlogContent">
                    <div className="vlogHeading">
                       I am African Fashion
                    </div>
                   
                </div>
              </div>
              

          </div>
          
          <div className="vlogBottom">
               <NavLink to="#">VIEW MORE</NavLink> 
             </div>
    </div>
  )
}

export default Vlog