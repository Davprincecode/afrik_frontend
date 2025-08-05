import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'
import review1 from '../assets/images/review1.jpg'
import review2 from '../assets/images/review2.jpg'
import review3 from '../assets/images/review3.jpg'

function Testimonies() {
  return (
    <div className='testimonies'>
         <div className="testimoniesHeader">
              <p>Testimonials</p>
              <h1>What our clients say about us.</h1>
         </div>

         <div className="testimoniesCon flex-center  gap-20">


             <div className="arrowLeft">
                <FaChevronLeft />
            </div>


            <div className="testimoniesFlex">

                 <div className="testimoniesContainers">
                    <div className="reviewBody">
                        It's almost impossible to remember all the projects I've 
                        had Temi and her team work with me on, but one thing is for sure, 
                        everytime they come on my project it's with a touch of excellence. 
                        As long at I know I have Loveafrik 
                        on my team to style any production or photoshoot, 
                        I'm at rest because the result will always be outstanding.
                    </div>

                     
                    <div className="reviewsStar flex-center gap-5">
                         <div className="userReviewCount">
                          <IoIosStar />
                        </div>
                        <div className="userReviewCount">
                          <IoIosStar />
                        </div>
                        <div className="userReviewCount">
                          <IoIosStar />
                        </div>
                        <div className="userReviewCount">
                          <IoIosStar />
                        </div>
                       
                         <div className="userReviewNotCount">
                          <IoIosStarOutline />  
                         </div>
                    </div>
                    <div className="testimoniesTitle">
                        Martindale Heart Ononye 
                    </div>
                    <div className="testimonerPosition">
                      Founder/Ceo, Hearts Entertainment
                    </div>
                 </div>
                 <div className="testimoniesContainers">
                    {/* <div className="testimoniesImage">
                        <img src={review2} />
                    </div> */}
                    
                    <div className="reviewBody">
                        Temi’s professionalism is superb. She is an excellent listener, 
                        patient, and willing to work in any situation. 
                        Maintain your efforts; the sky is only the beginning.
                    </div>
                   
                    <div className="reviewsStar  flex-center gap-5">
                         <div className="userReviewCount">
                          <IoIosStar />
                        </div>
                        <div className="userReviewCount">
                          <IoIosStar />
                        </div>
                        <div className="userReviewCount">
                          <IoIosStar />
                        </div>
                        <div className="userReviewCount">
                          <IoIosStar />
                        </div>
                        <div className="userReviewCount">
                          <IoIosStar />
                        </div>
                    </div>
                     <div className="testimoniesTitle">
                        Anuoluwapo Kabiawu
                    </div>
                 </div>


                 <div className="testimoniesContainers thirdTestimonies">
                    {/* <div className="testimoniesImage">
                        <img src={review3} />
                    </div> */}
                   
                    <div className="reviewBody">
                        My first ever personal brand shoot, I didn't know what to expect. I just knew I wanted nice photos.  
                        Then I got introduced to Temi of LoveAfrik, who was not just nice and professional, she was and is very knowledgeable.
                         I went from complete indifference to understanding what fabrics and colours were great for my skin tone.
                          Every outfit and accessory was deliberately and thoughtfully put together.
                          My conclusion is that Temi knows her onions and I wouldn't hesitate to refer LoveAfrik again and again.
                    </div>
                    
                    <div className="reviewsStar flex-center gap-5">
                        <div className="userReviewCount">
                          <IoIosStar />
                        </div>
                        <div className="userReviewCount">
                          <IoIosStar />
                        </div>
                        <div className="userReviewCount">
                          <IoIosStar />
                        </div>
                         <div className="userReviewNotCount">
                          <IoIosStarOutline />  
                         </div>
                         <div className="userReviewNotCount">
                          <IoIosStarOutline />  
                         </div>
                    </div>

                      <div className="testimoniesTitle">
                        AyeeSha Omadibi
                      </div>
                    <div className="testimonerPosition">
                        Founder, Hustle Africa. Lagos, Nigeria.
                    </div>

                 </div>

            </div>

            <div className="arrowRight">
                <FaChevronRight />
            </div>
         </div>




    </div>
  )
}

export default Testimonies