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
              <h4>What our clients say about us.</h4>
         </div>

         <div className="testimoniesCon flex-center  gap-20">
             <div className="arrowLeft">
                <FaChevronLeft />
            </div>
            <div className="testimoniesFlex flex-center gap-20">
                 <div className="testimoniesContainers">
                    <div className="testimoniesImage">
                        <img src={review1} />
                    </div>
                    <div className="testimoniesTitle">
                        James Pattinson
                    </div>
                    <div className="reviewsStar flex-center gap-5">
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
                         <div className="userReviewNotCount">
                          <IoIosStarOutline />  
                         </div>
                    </div>
                    <div className="reviewBody">
                        “Lobortis leo pretium facilisis amet 
                        nisl at nec. Scelerisque risus
                         tortor donec ipsum consequat semper 
                         consequat adipiscing ultrices.”
                    </div>
                 </div>
                 <div className="testimoniesContainers">
                    <div className="testimoniesImage">
                        <img src={review2} />
                    </div>
                    <div className="testimoniesTitle">
                        Greg stuart
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
                    <div className="reviewBody">
                        “Lobortis leo pretium facilisis amet 
                        nisl at nec. Scelerisque risus
                         tortor donec ipsum consequat semper 
                         consequat adipiscing ultrices.”
                    </div>
                 </div>
                 <div className="testimoniesContainers">
                    <div className="testimoniesImage">
                        <img src={review3} />
                    </div>
                    <div className="testimoniesTitle">
                        Trevor Mitchell
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
                    <div className="reviewBody">
                        “Lobortis leo pretium facilisis amet 
                        nisl at nec. Scelerisque risus
                         tortor donec ipsum consequat semper 
                         consequat adipiscing ultrices.”
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