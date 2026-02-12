import React, { useState } from 'react'
import Header from '../component/Header'
import { FaArrowLeftLong, FaRegCalendarDays } from 'react-icons/fa6'
import { TiWorld } from 'react-icons/ti'
import { FaCalendarAlt } from 'react-icons/fa'
import { CiClock1 } from 'react-icons/ci'
import { IoIosArrowBack, IoMdPricetags } from 'react-icons/io'
import { toast } from 'react-toastify'
import { userAuth } from './context/AuthContext'
import { button } from 'framer-motion/client'
import ButtonPreloader from '../component/ButtonPreloader'
import { useNavigate } from 'react-router-dom'
import AuthComponent from '../component/AuthComponent'

  type TimeSlot = {
    bookingId: string;
    date: string;
    startTime: string;
    endTime: string;
    interval: string;
    currency: string;
    price: number;
    bookingStatus: string;
    bookingDescription : string;
    maxDayBeforeBooking : string;
    maxTimeBeforeBooking : string;
  };

  interface consultantInterface{
  scheduleFunction : () => void;
  bookTime : TimeSlot[];
  }


const ConsultantDetails  = ({bookTime,  scheduleFunction }: consultantInterface) =>  {

  const [loading, setLoading] = useState<boolean>(false)
  const {baseUrl, signin, token, name, email, address1, phoneNumber1} = userAuth();
  const [userEmail, setEmail] = useState<string>(email);
  const [userName, setName] = useState<string>(name);
  const [phoneNumber, setPhoneNumber] = useState<number>(parseInt(phoneNumber1));
  const [orderNote, setOrderNote] = useState<string>('');
  const [authAction, setAuthAction] = useState<boolean>(false);
  const [subNav, setSubNav] = useState<boolean>(false);
          
  const navigate = useNavigate();
  const singleBooking = bookTime[0];

  const validateProductForm = () => {
      if (!name.trim()) {
        toast.error("Name is required");
        return false;
      }
      if (!userEmail.trim()) {
        toast.error("Email is required");
        return false;
      }
      if (!phoneNumber || isNaN(phoneNumber)) {
        toast.error("Phone number is required");
        return false;
      }
      return true;
  }
  const url = window.location.origin;
  const fetchData = async () => {
     if(!validateProductForm()){
       return;
    }
        setLoading(true);
          const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append("Authorization", token);
          const raw = JSON.stringify({
              "email" : userEmail,
              "name" : userName,
              "phoneNumber" : phoneNumber,
              "orderNote" : orderNote,
              "service_type" : "booking",
              "currency" : singleBooking?.currency,
              "amount" : singleBooking?.price,
              "bookingId" : singleBooking?.bookingId,
              "bookingDate" : singleBooking?.date,
              "bookingStartTime" : singleBooking?.startTime,
              "bookingEndTime" : singleBooking?.endTime,
              "callBackUrl" : `${url}/payment/booking/callback`
          });
          const requestOptions: RequestInit = {
              method: "POST",
              headers: myHeaders,
              body: raw,
              redirect: "follow"
          };
          try {
            const response = await fetch(`${baseUrl}/payment`, requestOptions);  
            if (!response.ok) {
              const errorResponse = await response.json();  
              throw new Error(errorResponse.message);
            }
              const result = await response.json();  
              setLoading(false);
              window.location.href = result.authorization_url;
          } catch (error) {
              setLoading(false);
                if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") {
                  toast.error(error.message);
                } else {
                  toast.error('An unknown error occurred.');
                }          
              setLoading(false);
                if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") {
                  toast.error(error.message);
                } else {
                  toast.error('An unknown error occurred.');
                }
          }
      
      };

  const freeBooking = async () => {
    if(!validateProductForm()){
       return;
    }
        setLoading(true);
          const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append("Authorization", token);
          const raw = JSON.stringify({
              "email" : userEmail,
              "name" : userName,
              "phoneNumber" : phoneNumber,
              "orderNote" : orderNote,
              "currency" : singleBooking?.currency,
              "amount" : singleBooking?.price,
              "bookingId" : singleBooking?.bookingId,
              "bookingDate" : singleBooking?.date,
              "bookingStartTime" : singleBooking?.startTime,
              "bookingEndTime" : singleBooking?.endTime
          });
          const requestOptions: RequestInit = {
              method: "POST",
              headers: myHeaders,
              body: raw,
              redirect: "follow"
          };
          try {
            const response = await fetch(`${baseUrl}/freebooking`, requestOptions); 
            // const results = await response.text();
            // console.log(results);
             
            if (!response.ok) {
              const errorResponse = await response.json();  
              throw new Error(errorResponse.message);
            }
              const result = await response.json();  
              setLoading(false);
              toast.success(result.message);
              navigate("/");
          } catch (error) {
              setLoading(false);
                if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") {
                  toast.error(error.message);
                } else {
                  toast.error('An unknown error occurred.');
                }          
              setLoading(false);
                if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") {
                  toast.error(error.message);
                } else {
                  toast.error('An unknown error occurred.');
                }
          }
      };
  
     const authFunction = () => {
        setAuthAction(true);
      }

  return (
  
            <div className="consultant">
              <div className="mobile-back" onClick={scheduleFunction}><IoIosArrowBack /> <p>back</p></div>
                <div className="consultant-detail">
                    <div className="consultant-icon"><FaCalendarAlt /></div>
                    <p className='schedule-name'>schedule a</p>
                    <h2 className='consultant-name'>consultation</h2>
                    <div className="clock flex-center"><CiClock1 /> <h2>{singleBooking?.interval}</h2></div>
                    <div className="consultant-bod">
                      {singleBooking?.bookingDescription}
                    </div>
                </div>

                <div className="consultant-form">
                  <div className="consultant-back"  onClick={scheduleFunction}><FaArrowLeftLong /> <p>back</p></div>
                    <div className="consultant-header">confirm your booking</div>
                    <div className="consultant-details">
                        <div className="flex-center consultant-date gap-10">
                            <FaRegCalendarDays />
                            <p>{singleBooking?.date}</p>
                        </div>
                        <div className="time">{singleBooking?.startTime} - {singleBooking?.endTime}</div>
                        <div className="price-currency flex-center gap-10"><IoMdPricetags /> {singleBooking?.currency}  {singleBooking?.price}</div>
                        {/* <div className="flex-center consultant-time gap-10">
                            <TiWorld />
                            <p>time zone europe</p>
                        </div> */}
                    </div>

                    <div className="form-cons">
                        <div className="admin-input">
                    <label >name </label>
                    <input type="text" placeholder='full name' value={userName} onChange={(e) => setName(e.target.value)} />
                      </div>
                        <div className="admin-input">
                    <label >email</label>
                    <input type="text"  placeholder='email' value={userEmail} onChange={(e) => setEmail(e.target.value)} />
                      </div>
                        <div className="admin-input">
                    <label >phone no</label>
                    <input type="number"  placeholder='phone no'  value={phoneNumber} onChange={(e) => setPhoneNumber(parseInt(e.target.value))}  />
                      </div>
                    <div className="admin-input">
                    <label >note <span>(optional)</span></label>
                     <textarea name="" id="" cols={30} rows={10}  value={orderNote} onChange={(e) => setOrderNote(e.target.value)} ></textarea>
                      </div>
                    </div>

                    <div className="admin-input">
                      {
                        signin ? (
                        loading ? (
                          <ButtonPreloader/>
                        ) : (
                          
                            bookTime[0]?.price === 0 ? (
                              <button onClick={freeBooking}>
                              Confirm
                              </button>
                            ) : (
                                  <button onClick={fetchData}>
                                    Confirm
                                  </button>
                            )
                        ) 
                      ) : (
                                <div className="master-btn" onClick={authFunction}>
                                    confirm
                                </div>
                                )
                      }
                        
                    </div>

                  {
                       !signin && (
                           <AuthComponent authAction={authAction} setAuthAction={setAuthAction} setSubNav={setSubNav}/>
                       )
                   } 

                </div>

            </div>
   
  )
}

export default ConsultantDetails