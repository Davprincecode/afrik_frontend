import React, { useEffect, useState } from 'react'
import bookingText from '../assets/images/booktexture.png'
import courseImg from '../assets/images/courseImg.jpg'
import course2 from '../assets/images/blogpic2.png'
import { NavLink } from 'react-router-dom'
import ComingSoon from './ComingSoon';
import Carousel from 'react-multi-carousel';
import { userAuth } from '../pages/context/AuthContext'
import AuthComponent from './AuthComponent'
import { toast } from 'react-toastify'
import ButtonPreloader from './ButtonPreloader'
import { p } from 'framer-motion/client'


interface courseIntern {
    courseDescription : string;
    courseId : string;
    courseImage : string;
    coursePrice : string;
    courseTitle : string;
    courseType : string;
    discountPrice : string;
    earlyBirdEndDate : string;
    earlyBirdPrice : string;
    earlyBirdStartDate : string;
    endDateRaw : string;
    endDate : string;
    startDate : string;
    status : string;
    commingSoon : string;
 }

 

const CourseSection  = () => {

      const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
      }

    const [authAction, setAuthAction] = useState<boolean>(false);
    const [subNav, setSubNav] = useState<boolean>(false);
    const[course, setCourse] = useState<courseIntern[]>([]);
    const {baseUrl, signin}  = userAuth(); 
    const [loading, setLoading] = useState<boolean>(false);
    const queryParams = new URLSearchParams(location.search);
      const token = queryParams.get('token');

    const [waitEmail, setwaitEmail] = useState<string>('');

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
              const response = await fetch(`${baseUrl}/page-course`, requestOptions);
              if (!response.ok) {
              const errorResponse = await response.json();
              throw new Error(errorResponse.message);
              }
              const result = await response.json();
              setCourse(result.data.courseSection);
              setLoading(false);
          } catch (error) {
              
          }
  }

     const subscribed = async (courseId :  string) => {
            setLoading(true);
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                const requestOptions: RequestInit = {
                    method: "GET",
                    headers: myHeaders,
                    redirect: "follow"
                };
                try {
                    const response = await fetch(`${baseUrl}/course-waiting/${courseId}/${waitEmail}`, requestOptions);
                    if (!response.ok) {
                    const errorResponse = await response.json();
                    throw new Error(errorResponse.message);
                    }
                    const result = await response.json(); 
                    setwaitEmail('');
                    toast.success(result.message);
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
  const authFunction = () => {
        setAuthAction(true);
      }

  return (
    <div className="courseSection">
            <div className="courseHeader">
                courses & masterclasses
            </div>
            <Carousel 
                  responsive={responsive}
                  autoPlay={false}
                  swipeable={true}
                  draggable={true}
                  showDots={false}
                  infinite={true}
                  partialVisible={false}
                  autoPlaySpeed={10000}
                  customTransition="all .5"
                  transitionDuration={500}
                 >

        {
          course.map((item, index)=>(

            <div className='bookingSection' key={index}>
            <div className="rightBooking">
                <img src={item.courseImage} />
            </div>
        
            <div className="leftBooking" style={{backgroundImage :  `url(${bookingText})`}}>
                <div className="bookingHeader">
                    <h1> <span className='bookSpace'>{item.courseTitle} </span></h1>
                </div>
                <div className="bookingBody">
                {/* <h4>Transform Your Style with Expert Guidance</h4> */}
                    <p>
                       {item.courseDescription.split(' ').length > 50
                        ? item.courseDescription.split(' ').slice(0, 49).join(' ') + '...' + ' '
                        : item.courseDescription + '...' + ' '}

                        <NavLink to={`/master-course-details/${item.courseId}`}> 
                            Read more..
                        </NavLink>
                    </p>
                </div>
                      {
                        item.commingSoon && (
                            <div className="incomingWrapper">
                            <div className="coming-soon">
                            coming soon
                            </div>

                            <div className="footerNewsList commingsooninput">
                            <p>Get notified when this <span>Masterclass</span> is Live!</p>
                            <div className="footerInput flex-center">
                            <input type="email" placeholder="Enter your email" value={waitEmail} onChange={(e) => setwaitEmail(e.target.value)}/>
                            {
                            loading ? (
                            <div className="footerBtn">
                            <ButtonPreloader/>
                            </div>
                            ) : (
                            <div className="footerBtn" onClick={() => subscribed(item.courseId)}>
                            subscribe
                            </div>
                            )
                            }
                            </div>
                            </div>
                            </div>
                        )
                      }
                        {
                        new Date(item.endDateRaw) > new Date() && (
                        signin ? (
                            <div className="schedule">
                            <NavLink to={`/master-course-payment/${item.courseId}`} className="master-btn">
                            enrol now
                            </NavLink>
                            </div>
                        ) : (
                            <div className="schedule">
                            <div className="master-btn" onClick={authFunction}>
                            enrol now
                            </div>
                            </div>
                        )
                        )
                        }
                <div className="allCourses">
                  <NavLink to="/master-course">all courses/masterclasses</NavLink>  
                </div>
            </div>

        </div>
          ))
        }
        
        </Carousel>

           {
                !signin && (
                    <AuthComponent authAction={authAction} setAuthAction={setAuthAction} setSubNav={setSubNav}/>
                )
            } 
    </div>
  )
}

export default CourseSection