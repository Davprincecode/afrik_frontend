import React, { useEffect } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import aboutUs from '../assets/images/ceomix.png'
import aboutUsMobile from '../assets/images/ceomixmobile.png'
import ourFounder from '../assets/images/founderdesignmobile.png'
import ceomixpic from '../assets/images/ceomixpic.png'
import vission from '../assets/images/eyes.png'
import mission from '../assets/images/mission.png'
import core from '../assets/images/core.png'
import aboutHeader from '../assets/images/aboutus.png'
import abtHeader from '../assets/images/foundersign.png'
import founder from '../assets/images/founder.jpg'
import founderDesk from '../assets/images/founderNamedesk.png'
import founderMobile from '../assets/images/founderNameMobile.png'
import { useLocation } from 'react-router-dom'


function AboutUs() {
    const { pathname } = useLocation();
    
      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
  return (
    <div className='aboutUs pageNav'>
       <Header />
         <div className="aboutUsCon">

             <div className="aboutusHeader">
                <div className="aboutHeaderFlex flex-center">
                    <div className="aboutFounderHeader">
                        <img src={aboutHeader} />
                    </div>
               </div>
             </div>
              
              <div className="aboutUsFlex">

                <div className="aboutUsImgCon">
                    <div className="aboutImage">
                        <img src={aboutUs} className='desktopAbout'/>
                        <img src={aboutUsMobile} className='mobileAbout'/>
                    </div>
                </div>

                <div className="aboutUsBody">
                    <div className="aboutFounderHeader aboutHeaderDesk">
                        <img src={aboutHeader} />
                    </div>
                    <p>
                        <div className="loveIntro">
                            <p>
                                Loveafrik is a style-forward fashion, lifestyle, and image consulting company dedicated to helping individuals and brands express their most authentic and elevated selves. Rooted in a deep understanding of personality, preferences, and perception, we guide our clients in curating a powerful and polished image that aligns with how they wish to be seen. 
                            </p>   
                        </div>
                        
                         <div className="loveIntro">
                            <p>
                                We specialize in uncovering and refining each client’s unique style identity, whether the goal is confident, elegant, playful, luxurious, or effortlessly classy, while staying true to their originality. 
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
                               We also offer dynamic trainings and workshops tailored for individuals, aspiring stylists, creative professionals, corporate executives, leaders, and organizations, equipping them with the tools to project influence, presence, and purpose through style.
                            </p>  
                         </div> 
                       <div className="abt2">
                        <p>
                            At Loveafrik, style is more than appearance, it’s a statement of identity, intention, and impact.
                        </p>
                       </div>
                    </p>
                </div>

              </div>

              <div className="aboutvmc flex gap-20">

                <div className="visionCon">
                    <div className="circle"></div>
                    <div className="innerCircle">
                        <div className="visionHeader"><img src={vission} /></div>
                    </div>
                     
                     <h2>our vision</h2>
                     <p>
                        Our vision is to build a globally recognized African brand at the forefront of image consulting and affordable luxury, shaping how the world sees style, confidence, and cultural elegance, one client and community at a time.
                     </p>
                </div>

                <div className="visionCon">
                    <div className="circle"></div>
                    <div className="innerCircle">
                       <div className="visionHeader"><img src={mission} /></div> 
                    </div>
                     
                     <h2>our mission</h2>
                     <p>
                        Our mission is to redefine the narrative of luxury fashion and personal image, one client at a time, by delivering value-driven creativity, tailored styling, and innovative apparel that merge quality, individuality, and accessibility.
                     </p>
                </div>

                <div className="visionCon coreCon">
                    <div className="circle"></div>
                    <div className="innerCircle">
                        <div className="visionHeader"><img src={core} /></div>
                    </div>
                     
                     <h2>our core value</h2>
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
               
               <div className="aboutHeaderFlex flex-center justification-center ceo-founder-header">
                    <div className="aboutFounderHeader">
                        <img src={abtHeader}  className='ourfounderdesktop'/>
                        <img src={ourFounder}  className='ourfoundermobile'/>
                    </div>
               </div>
                

            <div className="founderFlex">

                <div className="founderImageCon">
                    <div className="founderImage">
                        <img src={founder} />
                        <div className="founderDetails">
                            <img src={founderDesk} className="founderDesk" />
                            {/* <img src={founderMobile} className="founderMobile" /> */}
                        </div>
                    </div>
                </div>

                
                <div className="founderDescription">
                  
                       
                       <div>
                       Temitope Adesola Owoeye is more than a stylist and image consultant, she’s a storyteller, a transformation guide, and a passionate believer in the power of presence. Through fashion, style, and strategic image-building, she helps individuals and brands show up as their most confident, compelling, and authentic selves.
                       </div>

                       <div>
                        For nearly a decade, Temi as she’s fondly called has worked behind the scenes and in the spotlight, shaping perceptions and refining identities across industries. From one client to another, she brings a rare blend of creative flair and strategic insight that turns “just clothes” into powerful tools for influence and expression.
                       </div>

                       <div>
                        Her portfolio speaks volumes. She’s styled and consulted for respected figures such as Fela Durotoye (former Nigerian presidential candidate), Tara Fela-Durotoye (founder, House of Tara), Tobi Bakre (Big Brother Naija), international basketball star Evelyn Akhator, and tech entrepreneur Nnamdi Ezeigbo (Slot Ltd) for the Tecno Phantom Xtraordinaire Show to mention a few.
                       </div>
                       <div>
                        Temi’s work with multinationals like Diageo, Pernod Ricard, Nestlé, Unilever, MTN, Coca-Cola and numerous Nigerian brands has played a critical role in crafting compelling brand narratives for television commercials, editorial campaigns, and more. Her keen eye and creative direction ensure that every visual tells the right story boldly and beautifully.
                       </div>

                </div>
            </div>
             </div>



        <div className="aboutUsFounderFlex">

        <div className="aboutUsImgCon">
            <div className="aboutImage">
                <img src={ceomixpic} />
            </div>
        </div>

        <div className="aboutUsFounderBody">
            <p>
                <div className="loveFounderIntro">
                    <div className="introFounder1">
                        <p>
                          In the world of fashion and film, she’s no stranger. Temi has contributed to the success of standout fashion brands and worked alongside styling teams on high-profile Nollywood sets, including Kemi Adetiba’s King of Boys and To Kill a Monkey (Netflix). From wardrobe design to full styling direction, her influence is visible in the aesthetics and impact of countless visual projects. 
                        </p>
                    </div>
                    <div className="introFounder2">
                        <p>
                            But beyond the accolades and the brands, what truly defines Temi is her heart. She loves God, thrives in meaningful conversations, and draws inspiration from travel, literature, creativity, and human connection. Every client she works with isn’t just a project, they’re a purpose.
                        </p>
                    </div>
                    <div className="introFounder3">
                        <p>
                            Temi is certified by the South African Image Academy and mentored by Aletté Winckler, Africa’s highest-certified image consultant. These foundations have shaped her unique philosophy: that personal image isn’t just about looking good, it’s about becoming whole. It’s about stepping into the version of yourself that aligns with your purpose, communicates your value, and leaves a lasting impression.
                            
                        </p>
                    </div>
                    <div className="introFounder4">
                        <p>
                            Today, Temi is on a mission to help more people, from emerging leaders to established voices uncover their personal style, refine their public image, and tell stories that move hearts and open doors.
                        </p>
                    </div>
                    <div className="introFounder5">
                        <p>
                            If you’re ready to move beyond surface-level style and unlock the power of intentional image-building, Temi is the partner you’ve been looking for.
                        </p>
                    </div>
                    <div className="introFounder6">
                        <p>
                           She won’t just show you how to look confident, influential, and put-together, she’ll help you become it.
                        </p>
                    </div>
                    <div className="introFounder7">
                        <p>
                            Your transformation begins with one intentional step.
                            Let’s take it together.
                            Book your session today. I can’t wait to walk this journey with you.
                        </p>
                    </div>

                </div>
                
            </p>
        </div>
        </div>


         </div>
       <Footer/>
    </div>
  )
}

export default AboutUs