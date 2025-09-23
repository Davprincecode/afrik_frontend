import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import { NavLink, useParams } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import img from '../assets/images/consultingimages.png'
import { userAuth } from './context/AuthContext'
import ButtonPreloader from '../component/ButtonPreloader'



function MasterCourseDetail() {
    const[courseDescription, setCourseDescription] = useState<string>('');
    const[courseId, setCourseId] = useState<string>('');
    const[courseImage, setCourseImage] = useState<string>('');
    const[coursePrice, setCoursePrice] = useState<number>(0);
    const[courseTitle, setCourseTitle] = useState<string>('');
    const[courseType, setCourseType] = useState<string>('');
    const[discountPrice, setDiscountPrice] = useState<string>('');
    const[earlyBirdEndDate, setEarlyBirdEndDate] = useState<string>('');
    const[earlyBirdPrice, setEarlyBirdPrice] = useState<string>('');
    const[earlyBirdStartDate, setEarlyBirdStartDate] = useState<string>('');
    const[endDate, setEndDate] = useState<string>('');
    const[startDate, setStartDate] = useState<string>('');
    const[pin , setPin] = useState<boolean>(false);
    const[status, setStatus] = useState<string>('');


const {baseUrl, token} = userAuth();
const[loading, setLoading] = useState<boolean>(false);

const { id } = useParams<{ id: string }>();

 useEffect(() => {
            getData()
            }, [id]);
    
      const getData = async () => {
          setLoading(true);
              const myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");
              myHeaders.append("Authorization", token);
              const requestOptions: RequestInit = {
                  method: "GET",
                  headers: myHeaders,
                  redirect: "follow"
              };
              try {
                  const response = await fetch(`${baseUrl}/course/${id}`, requestOptions);
                  if (!response.ok) {
                  const errorResponse = await response.json();
                  throw new Error(errorResponse.message);
                  }
                  const result = await response.json();    
                    setCourseDescription(result.data.courseDescription);
                    setCourseId(result.data.courseId);
                    setCourseImage(result.data.courseImage);
                    setCoursePrice(result.data.coursePrice);
                    setCourseTitle(result.data.courseTitle);
                    setCourseType(result.data.courseType);
                    setDiscountPrice(result.data.discountPrice);
                    setEarlyBirdEndDate(result.data.earlyBirdEndDate);
                    setEarlyBirdPrice(result.data.earlyBirdPrice);
                    setEarlyBirdStartDate(result.data.earlyBirdStartDate);
                    setEndDate(result.data.endDate);
                    setStartDate(result.data.startDate);
                    setPin(result.data.pin);
                    setStatus(result.data.status);
                  setLoading(false);
              } catch (error) {
                  
              }
      }

  return (
    <div className='master-con-wrapper pageNav'>
          <Header/>

          <div className="master-container master-container-details">
            
            <div className="master-back-header">
                    <div className="back-header">
                            <NavLink to="/master-course">
                                <FaArrowLeft /> 
                                <div className="back-title">back</div>
                            </NavLink>
                    </div>
            </div>

            <div className="master-details">  

                  {
                    loading && (
                        <div className="cart-prealoader">
                            <ButtonPreloader/>
                        </div>

                    ) 
                    }
                    
                <div className="master-details-title">
                    {courseTitle}
                </div> 
                
                <div className="master-image-flex">
                    <div className="master-details-image">
                    <img src={courseImage} alt="" />
                    </div>
                </div>
                

                <div className="master-details-body">
                    <p>
                      {courseDescription}
                    </p>
                </div>

                <div className="master-body-footer">
                
                                                <div className="master-body-date flex-center">
                                                    <div className="master-date">date:</div>
                
                                                    <div className="master-date-title flex-center">
                                                        <p>{startDate}</p>
                                                        <span>-</span>
                                                        <p>{endDate}</p>
                                                    </div>
                                                    
                                                </div>
                
                                                <div className="master-body-date flex-center">
                                                    <div className="master-date">venue:</div>
                                                    <div className="master-date-title flex-center">
                                                        <p>{courseType}</p>
                                                    </div>
                                                </div>
                
                                                <div className="master-body-date flex-center">
                                                    <div className="master-date">price:</div>
                                                    <div className="master-date-title flex-center">
                                                        <p><span>₦</span>{coursePrice.toLocaleString()}</p>
                                                    </div>
                                                    
                                                </div>
                
                                                <NavLink to={`/master-course-payment/${courseId}`} className="master-btn">
                                                    enrol now
                                                </NavLink>
                
                
                </div>

            </div>   

             </div>
    </div>
  )
}

export default MasterCourseDetail