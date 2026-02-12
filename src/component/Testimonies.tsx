import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'
import testimoniesDesk from '../assets/images/testimonialDesk.png'
import testimoniesMobile from '../assets/images/testimonialsMobile.png'

import { AnimatePresence, motion } from 'framer-motion'
import { userAuth } from '../pages/context/AuthContext'
import ButtonPreloader from './ButtonPreloader'
import { toast } from 'react-toastify'


 interface testimoniesIntern {
      'id' :  number;
      'fullname' : string;
      'testimonial' : string;
      'position' : string;
      'rating'  : number;
      'status'  : string;
 }

function Testimonies() {

    const [data, setData] = useState<testimoniesIntern[]>([]);
    const [visibleCount, setVisibleCount] = useState(3);
    const {baseUrl} = userAuth();
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
     getData()
    }, []);

    const getData = async () => {
      setLoading(true);
          const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          const requestOptions: RequestInit = {
              method: "GET",
              headers: myHeaders,
              redirect: "follow"
          };
          try {
              const response = await fetch(`${baseUrl}/page-testimony`, requestOptions); 
            
              if (!response.ok) {
              const errorResponse = await response.json();
              throw new Error(errorResponse.message);
              }
              const result = await response.json();
              setData(result.data); 
              setLoading(false);
          } catch (error) {
                setLoading(false);
                if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") {
                toast.error(error.message);
                } else {
                toast.error('An unknown error occurred.');
                }
              
          }
    }

  useEffect(() => {
    const updateSize = () => {
      setVisibleCount(window.innerWidth < 768 ? 1 : 1);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if (data.length < 1) return;  
            const interval = setInterval(() => {
            shuffleLeft(); 
          }, 9000); 
          return () => clearInterval(interval);
  }, [data]);

  const shuffleLeft = () => {
    setData(prev => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const shuffleRight = () => {
    setData(prev => {
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, -1);
      return [last, ...rest];
    });
  };

  return (
    <div className='testimonies'>
         <div className="testimoniesHeader flex-center ">
               <div className="testimoniesHeaderImg">
                <img src={testimoniesDesk}  className="testimoniesDesk" />
                {/* <img src={testimoniesMobile}  className="testimoniesMobile" /> */}
               </div>
              <h1>What our clients say about us.</h1>
         </div>

            {
            loading && (
            <div className="cart-prealoader">
              <ButtonPreloader/>
            </div>

            ) 
            }

          <div className="testimoniesCon">
              {
                data.length > 0 && (
                    <div className="testimoniesFlex flex gap-6 overflow-hidden w-full">
                    <AnimatePresence initial={false} mode="popLayout">

                      {data.slice(0, visibleCount).map((item, index) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ x: 100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -100, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="testimoniesContainers w-full md:w-[30%] bg-white rounded-lg p-4 flex-shrink-0 shadow"
                        >
                            <div className="arrowContainer arrowTestimonies">
                      <div className="arrowLeft" onClick={shuffleLeft}>
                      <FaChevronLeft />
                    </div>

                    <div className="arrowRight" onClick={shuffleRight}>
                      <FaChevronRight/>
                    </div>
                    </div>
                      <div className="reviewBody text-sm text-gray-800 mb-3">{item.testimonial}</div>
                          <div className="reviewsStar flex gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <span key={i}>
                                {i < item.rating ? (
                                  <IoIosStar className="starFilled" />
                                ) : (
                                  <IoIosStarOutline className="star" />
                                )}
                              </span>
                            ))}
                          </div>

                          <div className="testimoniesTitle font-semibold">{item.fullname}</div>
                          {item.position && (
                            <div className="testimonerPosition text-xs text-gray-500">{item.position}</div>
                          )}
                        </motion.div>
                      ))}
                    </AnimatePresence>
                    </div>
                )
              }
   
            </div>
    </div>
  )
}

export default Testimonies