import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { CiYoutube } from 'react-icons/ci'

function Youtube() {



  return (
   <div className='vlog'>
        
           <div className="vlogLogoTitle flex-center gap-10">
                <div className="vlogoIcon">
                <CiYoutube /> 
                </div>
                <div className="vlogTitle">
                    <h1>Youtube Video</h1>
                </div>
           </div>

          <div className="vlogConFlex flex gap-10">

              <div className="vlogCon">

                <div className="youtubeImage">
                      <iframe
                            width="560"
                            height="500"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                </div>

                <div className="vlogContent">
                    <div className="vlogHeading">
                        Make your Dream a Reality
                    </div>                   
                </div>
              </div>
              
              <div className="vlogCon">
                <div className="youtubeImage">
                <iframe
                    width="560"
                    height="500"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                </div>
  
                <div className="vlogContent">
                    <div className="vlogHeading">
                       Tacky is not a Vibe
                    </div>
                    
                </div>
              </div>

              <div className="vlogCon">
                <div className="youtubeImage">
                   <iframe
                        width="560"
                        height="500"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
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

export default Youtube