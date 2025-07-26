import React from 'react'
import { MdOutlineHome, MdOutlineSettingsInputSvideo, MdOutlineWifiCalling3 } from 'react-icons/md';
import { LuCreditCard, LuPhoneCall } from 'react-icons/lu';
import { FaBars, FaLock, FaLockOpen, FaPen, FaRegHandshake, FaTimes, FaUser, FaUserCog, FaWifi } from 'react-icons/fa';
import { IoTicketSharp, IoTvOutline, IoWalletOutline } from 'react-icons/io5';
import logo from '../assets/images/logo1.png';
import { NavLink } from 'react-router-dom'
import { userAuth } from '../pages/context/AuthContext';
import { GoLightBulb } from 'react-icons/go';
interface SideNavProps {
    open: boolean;
    setOpen: (open: boolean) => void;
  }
  
  const SideNav: React.FC<SideNavProps> = ({ open, setOpen }) => {
    const {role, webLogo, twoStep, trp} = userAuth(); 

  return (
    <>

<div className="res-sidebar-close-btn"  onClick={() => setOpen(!open)} 
style={{ display : open ? "flex" : "none" }} >
       <FaTimes />
</div>

<div className={`sidebar ${open ? "open" : "close"}`}>

{/* sidebar__inner start */}
<div className="sidebar__inner">

 <div className="sidebar__logo">

<NavLink to="/user/dashboard" className="sidebar__main-logo">
    <img src={webLogo} alt="image" />
</NavLink>


</div>

<p className='level'>
     <strong>  Level  :   {role} </strong> 
</p>

<div className="slimScrollDiv" >
    
    <div className="sidebar__menu-wrapper" id="sidebar__menuWrapper">
     <ul className="sidebar__menu">
   <li className="sidebar-menu-item active">
        <NavLink className="" to={role == "admin" ? "/admin/admin-dashboard" : "/user/dashboard"}>
         <MdOutlineHome />
        <span className="menu-title">   Dashboard    </span> 
        </NavLink>
    </li>

    <li className="sidebar-menu-item  ">
        <NavLink  to="/user/deposits">
        <IoWalletOutline />
        <span className="menu-title">
        Fund Wallet
        </span>
        </NavLink>
    </li>

    <li className="sidebar-menu-item">
        <NavLink className="" to="/user/data">
        <FaWifi />
        <span className="menu-title">
        Data
        </span>
        </NavLink>
    </li>

    <li className="sidebar-menu-item  ">
        <NavLink className="" to="/user/airtime">
        <MdOutlineWifiCalling3 />
            <span className="menu-title">
        Airtime
            </span>
        </NavLink>
    </li>
    <li className="sidebar-menu-item">
        <NavLink className="" to="/user/cables">
        <IoTvOutline />
        <span className="menu-title">
         Cable
        </span>
        </NavLink>
    </li>
    <li className="sidebar-menu-item">
        <NavLink className="" to="/user/bills">
        <GoLightBulb />
        <span className="menu-title">     
        electricity
        </span>
        </NavLink>
    </li>

    <li className="sidebar-menu-item ">
            <NavLink className="" to="/user/transactions">
             <LuCreditCard />
                <span className="menu-title">
             Transactions
                </span>
            </NavLink>
    </li>
    <li className="sidebar-menu-item  ">
            <NavLink className="" to="/user/profile-setting">
            <FaUser />
            <span className="menu-title">
                 Profile
            </span>
            </NavLink>
     </li>

   <li className="sidebar-menu-item  ">
        <NavLink className="" to="/user/referral">
        <FaRegHandshake />
        <span className="menu-title">
        My Referral
        </span>
        </NavLink>
    </li>

   <li className="sidebar-menu-item  ">
        <NavLink className="" to="/user/api-doc">
        <MdOutlineSettingsInputSvideo />
        <span className="menu-title">
        Api Documentation
        </span>
        </NavLink>
    </li>

    

    <li className="sidebar-menu-item  ">
            <NavLink className="" to="/user/transactionpin">
          {trp ? <FaLock /> : <FaLockOpen />}  
            <span className="menu-title">
                 Transaction Pin
            </span>
            </NavLink>
     </li>

    <li className="sidebar-menu-item  ">
            <NavLink className="" to="/user/security">
          {twoStep ? <FaLock /> : <FaLockOpen />}  
            <span className="menu-title">
                 Security
            </span>
            </NavLink>
     </li>

      
    {/* <li className="sidebar-menu-item  ">
        <NavLink className="" to="/user/register">
        <FaUserCog />
        <span className="menu-title">
        Register  User
        </span>
        </NavLink>
    </li>

    <li  className="sidebar-menu-item  ">
        <NavLink to="/support">
        <IoTicketSharp />
        <span className="menu-title">
        Support Ticket							
        </span>
        </NavLink>
    </li> */}


   </ul>
   </div>


<div className="slimScrollBar">

</div>

<div className="slimScrollRail">

</div>

</div>


</div> 
{/* sidebar__inner end */}
</div>
</>
  )
}

export default SideNav
