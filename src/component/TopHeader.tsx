import React, { useState } from 'react'
import { FaBars, FaSignOutAlt } from 'react-icons/fa'
import { userAuth } from '../pages/context/AuthContext';
import profileImg from '../assets/images/profile.jpg';
import { IoIosArrowDropdown } from 'react-icons/io';


interface SideNavProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const TopHeader: React.FC<SideNavProps> = ({ open, setOpen }) => {
  const {logout,  balance, role, image} = userAuth();  
  const [userProfile, setUserProfile] = useState<boolean>(false);
  const handleProfile = () => {
    // setNotification(false);
    setUserProfile(!userProfile);
  }
  return (
    <div>
      <div className="topCon">

            <div className="hamburger"  onClick={() => setOpen(!open)}>
            <div className="res-sidebar-open-btn">
              <FaBars />
            </div>
            </div>
        
        <div className="topBalanceFlex">
            
            

            <div className="topBalance">
                <p>balance  : </p>
                <p><span>₦</span> {balance}</p>
            </div>
        
        {/* <div className="topLevel">
            <p>level <span>:</span> {role}</p>
        </div>
        
        <div className="logout" onClick={() => logout()}>
            <div className="icon"><FaSignOutAlt /></div>
            <p>Log out</p>
        </div> */}

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


   


      </div>
    </div>
  )
}

export default TopHeader
