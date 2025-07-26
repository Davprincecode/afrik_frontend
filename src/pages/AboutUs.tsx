import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import aboutUs from '../assets/images/ceomix.png'
import vission from '../assets/images/eyes.png'
import mission from '../assets/images/mission.png'
import core from '../assets/images/core.png'
import aboutHeader from '../assets/images/aboutus.png'
import abtHeader from '../assets/images/foundersign.png'
import founder from '../assets/images/founder.jpg'


function AboutUs() {
  return (
    <div className='aboutUs'>
       <Header />
         <div className="aboutUsCon">

             <div className="aboutusHeader">
                {/* <div className="aboutUsImg">
                    <img src={aboutHeader} />
                </div> */}

                <div className="aboutHeaderFlex flex-center">
                    <div className="aboutFounderHeader">
                        <img src={aboutHeader} />
                    </div>
               </div>
             </div>
              
              <div className="aboutUsFlex">

                <div className="aboutUsImgCon">
                    <div className="aboutImage"><img src={aboutUs} /></div>
                </div>

                <div className="aboutUsBody">
                    <p>
                        <div className="loveIntro">
                            <p>
                                Loveafrik is a style-forward fashion, lifestyle, and image consulting company dedicated to helping individuals and brands express their most authentic and elevated selves.
                                Rooted in a deep understanding of personality, preferences, and perception,
                                we guide our clients in curating a powerful and polished image that aligns with how they wish to be seen. 
                            </p>   
                        </div>
                        
                         <div className="loveIntro">
                            <p>
                                We specialize in uncovering and refining each client’s unique style identity—whether the goal is confident, elegant, playful, luxurious, or effortlessly classy—while staying true to their originality.
                            Our signature services include:
                            </p>  
                         </div>
                        
                         <ul className='dataList'>
                            <li>• Colour and style consultation</li>
                            <li>• Personal styling (for both men and women)</li>
                            <li>• Fashion styling for photoshoots, magazines, film and TV advertising</li>
                            <li>• Costume design for film and media</li>
                            <li>• Wardrobe management</li>
                            <li>• Image and perception consulting.</li>
                         </ul>
                        <div className="abt">
                            <p>
                                We also offer dynamic trainings and workshops tailored for individuals, aspiring stylists, 
                                creative professionals, corporate executives, leaders,
                                and organizations—equipping them with the tools to project influence, 
                                presence, and purpose through style.
                            </p>  
                         </div> 
                       <div className="abt2">
                        <p>
                            At Loveafrik, style is more than appearance—it’s a statement of identity, intention, and impact.
                        </p>
                       </div>
                        
                    </p>
                </div>
              </div>

              <div className="aboutvmc flex-center gap-20">

                <div className="visionCon">
                    <div className="circle"></div>
                     <div className="visionHeader"><img src={vission} /></div>
                     <h2>our vision</h2>
                     <p>
                        Our vision is to build a globally recognized African brand at the forefront of image
                        consulting and affordable luxury—shaping how the world sees style, confidence, and
                        cultural elegance, one client and community at a time.
                     </p>
                </div>

                <div className="visionCon">
                    <div className="circle"></div>
                     <div className="visionHeader"><img src={mission} /></div>
                     <h2>our mission</h2>
                     <p>
                        Our mission is to redefine the narrative of luxury fashion and 
                        personal image—one client at a time—by delivering value-driven creativity,
                         tailored styling, and innovative apparel that merge quality,
                          individuality, and accessibility.
                     </p>
                </div>

                <div className="visionCon coreCon">
                    <div className="circle"></div>
                     <div className="visionHeader"><img src={core} /></div>
                     <h2>our mission</h2>
                     <p className='core'>
                       ►Excellence
                     </p>
                     <p className='core'>
                       ►Innovation
                     </p>
                     <p className='core'>
                        ►Value driven
                     </p>
                     <p className='core'>
                       ►Team work
                     </p>
                </div>

              </div>

             <div className="aboutFounder">
               
               <div className="aboutHeaderFlex flex-center">
                    <div className="aboutFounderHeader">
                        <img src={abtHeader} />
                    </div>
               </div>
                

            <div className="founderFlex">
                <div className="founderImage">
                    <img src={founder} />
                    <div className="founderDetails">
                        <div className="temitope">
                            <p>temitope</p>
                        </div>
                        <h4>adesola owoeye</h4>
                        <p>certified image consultant & stylist</p>
                    </div>
                    <div className="topLabel"></div>
                </div>

                
                <div className="founderDescription">
                    <div>
                        For nearly a decade, I’ve worked with individuals and brands to help them bring their
                        most authentic and powerful selves to life—through style, presence, and intentional image-building.
                    </div> 
                     <div>
                        Now, I’m in a season of deeper purpose—helping more people not just look the part, but become the fullest, truest version of themselves.
                     </div>
                     <div>
                        If you’re ready to elevate your personal brand from a scattered set of impressions into a clear, compelling story, I’m your best ally.
                     </div>
                     <div>
                        I don’t just understand how to help you look confident, stylish, and influential—I know how to guide you in becoming it.
                     </div>
                     <div>
                        Your transformation begins with one intentional step.
                         Let’s make it together. Book your session—I can’t wait to walk this journey with you.
                     </div>
                </div>
            </div>

             </div>

         </div>
       <Footer/>
    </div>
  )
}

export default AboutUs