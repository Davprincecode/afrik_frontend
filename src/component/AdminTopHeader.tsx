import React, { useEffect, useState } from 'react'
import { FaBars, FaRegUserCircle, FaSignOutAlt } from 'react-icons/fa'
import { userAuth } from '../pages/context/AuthContext';
import { IoIosArrowDropdown, IoIosNotificationsOutline, IoMdLogOut } from 'react-icons/io';
import profileImg from '../assets/images/profile.jpg'
import { NavLink } from 'react-router-dom';
import { LuKeyRound } from 'react-icons/lu';
import { MdMessage } from 'react-icons/md';

import { toast } from 'react-toastify';

interface SideNavProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}
interface dataIntern {
  id : string
readStatus: boolean
title : string
userId : string
clickUrl : string
relationId : string
}

const AdminTopHeader: React.FC<SideNavProps> = ({ open, setOpen }) => {
  const {baseUrl, token, role, image} = userAuth(); 
  const [loading, setLoading] = useState<boolean>(false);
  
  const [notificationData, setNotificationData] = useState<dataIntern[]>([]);
  const [notification, setNotification] = useState<boolean>(false);
  const [adminProfile, setAdminProfile] = useState<boolean>(false);

  const handleNotification = () => {
    setAdminProfile(false);
     setNotification(!notification);
  }
  const handleProfile = () => {
    setNotification(false);
    setAdminProfile(!adminProfile);
  }

    useEffect(() => {
      const fetchData = async () => {
          setLoading(true);
          const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append("Authorization", token);
          const requestOptions: RequestInit = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
          try {
            const response = await fetch(`${baseUrl}/readnotification`, requestOptions);
            if (!response.ok) {
              const errorResponse = await response.json();
              throw new Error(errorResponse.message);
            }
            const result = await response.json();
             setNotificationData(result.data);
            setLoading(false);
          } catch (error) {
            
              setLoading(false);
              if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") {
                // toast.error(error.message);
              } else {
                toast.error('An unknown error occurred.');
              }
            }
        
      };
      fetchData();
    }, []);
    

  return (
    <div>
      <div className="topCon">

            <div className="hamburger"  onClick={() => setOpen(!open)}>
            <FaBars />
            </div>
        
     <div className="topBalanceFlex">
            
        <div className="topLevel">
            {/* <p>level <span>:</span> {role}</p> */}
        </div>

        {/*  */}

        {/* <div className="logout" onClick={() => logout()}>
            <div className="icon"><FaSignOutAlt /></div>
            <p>Log out</p>
        </div> */}


{/* ------------------------- */}
   <div className="topNotifyCon">

     <div className="topNotify" onClick={handleNotification}>
     
     {
      notificationData.length > 0 && (
       <div className="notifyDot">
        
      </div> 
      )
     } 

      <div className="notifyIcon">
      <IoIosNotificationsOutline />
      </div>
     </div>

  <div className="profileWrapUp" onClick={handleProfile}>
        <div className="topProfile">
          <img src={image !=='' ? image : profileImg}  />
        </div>
        <p className="role">
          {role}
        </p>
        <div className="topArrow">
          <IoIosArrowDropdown />
        </div>
    </div>
     
   </div>
{/* --------------------- */}
    </div>
      </div>

    
     
    
    

    </div>
  )
}

export default AdminTopHeader
