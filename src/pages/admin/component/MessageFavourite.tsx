import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { CiSearch } from 'react-icons/ci'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { IoIosStar } from 'react-icons/io'
import profile from '../../../assets/images/profile.png'
import ButtonPreloader from '../../../component/ButtonPreloader'
import { toast } from 'react-toastify'
import { userAuth } from '../../context/AuthContext'


interface messageIntern {
  address : string;
email : string;
is_favorite : boolean;
message : string;
name : string;
phoneNumber : string;
subject : string;
 }
function MessageFavourite() {
  const {baseUrl, token} = userAuth();
  const [loading, setLoading] = useState<boolean>(false);  
  const [message, setMessage] = useState<messageIntern[]>([])
     useEffect(() => {
        handleEmail();
      }, []);
      const handleEmail = async() => {
          setLoading(true);
          const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append("Authorization", token);
          const requestOptions: RequestInit = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
          };
          try {
            const response = await fetch(`${baseUrl}/message-favorite`, requestOptions);
            if (!response.ok) {
              const errorResponse = await response.json();
              throw new Error(errorResponse.message);
              }
              const result = await response.json(); 
              setMessage(result.data);   
          } catch (error: any) {
            toast.error(error.message || "Something went wrong");
          } finally {
            setLoading(false);
          }
        
       }
  return (
    <div className='admin-dashboard'>

            <div className="admin-header-form  flex-center gap-10 justification-between">
    
                <div className="flex-center gap-10">
                    <div className="header-form-filter">
                        <select name="" id="">
                            <option value="">Filter</option>
                        </select>
                    </div>
                    <div className="header-form-input">
                        <input type="text" placeholder='Search' />
                        <CiSearch />
                    </div>
                </div>
                    <MdDelete className='delete'/>
            </div>

           <div className="admin-message-body">
              {
                loading ? (
                  <ButtonPreloader/>
                )  : (

                  message.map((item, index)=>(

                   <div className="admin-message-con" key={index}>

                 <div className="admin-message-header flex-center justification-between">
                    <h2>{item.subject}</h2>
                    <p>posted at 12pm</p>
                 </div>

                 <div className="admin-message-body">
                    <div className="admin-message-icon flex justification-between">
                        <div className="admin-message-container">
                          {/* <div className="admin-message-title">
                            How to deposit money to my portal?
                          </div> */}
                          <div className="admin-message">
                          {item.message}
                        </div>
                        </div>
                        <BsThreeDotsVertical />
                    </div>
                 </div>

                 <div className="admin-message-footer flex-center justification-between">
                     <div className="admin-message-user flex-center gap-5">
                         <div className="admin-profile">
                           <img src={profile} alt="" />
                         </div>
                        <p>{item.name}</p>
                     </div>

                     <div className="admin-star">
                      <IoIosStar />
                     </div>

                     {/* <div className="starFilled">
                      <IoIosStar />
                     </div> */}

                 </div>

                  </div>

                  ))
                )
              }
             

            </div>


    </div>
    
  )
}

export default MessageFavourite