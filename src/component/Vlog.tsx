import React, { useEffect } from 'react'
import blogImg from '../assets/images/blogpic.png'
import { NavLink } from 'react-router-dom'

function Vlog() {

 useEffect(() => {
  const script = document.createElement('script');
  script.src = '//www.instagram.com/embed.js';
  script.async = true;
  script.onload = () => {
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  };
  document.body.appendChild(script);
}, []);;

  return (
   <div className='vlog'>
          <div className="vlogHeader">
             <h1>vlog</h1>
          </div>
           
          <div className="vlogConFlex flex gap-10">

              <div className="vlogCon">

                <div className="vlogImage">
                      <blockquote
                      className="instagram-media"
                      data-instgrm-permalink="https://www.instagram.com/reel/DGh4dmdMqU1/"
                      data-instgrm-version="14"
                      style={{ width: '100%', margin: 'auto' }}
                      ></blockquote>
                </div>

                <div className="vlogContent">
                    <div className="vlogHeading">
                        Make your Dream a Reality
                    </div>                   
                </div>
              </div>
              
              <div className="vlogCon">
                <div className="vlogImage">
                  <blockquote
                      className="instagram-media"
                      data-instgrm-permalink="https://www.instagram.com/reel/DGz3Ef4oZOV/"
                      data-instgrm-version="14"
                      style={{ width: '100%', margin: 'auto' }}
                    >
                    </blockquote>
                </div>

                   
                <div className="vlogContent">
                    <div className="vlogHeading">
                       Tacky is not a Vibe
                    </div>
                    
                </div>
              </div>

              <div className="vlogCon">
                <div className="vlogImage">
                    <blockquote
                      className="instagram-media"
                      data-instgrm-permalink="https://www.instagram.com/reel/C4zx66eM-M4/"
                      data-instgrm-version="14"
                      style={{ width: '100%', margin: 'auto' }}
                    >
                    </blockquote>
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