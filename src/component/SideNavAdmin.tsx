import React, { useState } from 'react'
import { MdHome, MdOutlineHome, MdOutlineMessage, MdOutlineWifiCalling3, MdSettingsInputComponent } from 'react-icons/md';
import { LuCreditCard, LuPhoneCall } from 'react-icons/lu';
import { FaBars, FaLock, FaLockOpen, FaPen, FaRegHandshake, FaTags, FaTimes, FaTv, FaUser, FaUserCog, FaUserFriends, FaWifi } from 'react-icons/fa';
import { IoTicketSharp, IoTvOutline, IoWalletOutline } from 'react-icons/io5';

import { NavLink } from 'react-router-dom'
import { userAuth } from '../pages/context/AuthContext';
import { IoIosArrowDown, IoIosNotifications, IoIosPricetags, IoIosSettings } from 'react-icons/io';
import { GoLightBulb } from 'react-icons/go';
import { FcAdvertising } from 'react-icons/fc';


interface MenuItem {
    title: string;
    link?: string;
    icon : JSX.Element;
    submenu?: { title: string; link: string }[];
  }
  
  const menuItems: MenuItem[] = [
    {
      title: 'Dashboard',
      link: '/admin/admin-dashboard',
      icon : <MdHome />
    },
    {
        title: 'Manage Users',
        icon : <FaUserFriends />,
        submenu: [
          { title: 'All Users', link: '/admin/all-user' },
          { title: 'Active Users', link: '/admin/active-user' },
          { title: 'Banned Users', link: '/admin/banned-user' },
          { title: 'With Balance', link: '/admin/with-balance-user' },
          { title: 'Email to All', link: '/admin/email-all' }
        ],
    },
    {
      title: 'Role',
      icon : <MdSettingsInputComponent />,
      submenu: [
        { title: 'Add Role', link: '/admin/add-role' },
        { title: 'View Role', link: '/admin/role' },
      ],
  },
   
    {
      title: 'Data',
      icon : <FaWifi />,
      submenu: [
        { title: 'Add', link: '/admin/add-data' },
        { title: 'View', link: '/admin/data' },
      ],
    },
    {
      title: 'Airtime',
      icon : <MdOutlineWifiCalling3 />,
      submenu: [
        { title: 'Add', link: '/admin/add-airtime' },
        { title: 'View', link: '/admin/airtime' },
      ],
    },
    {
      title: 'Cable',
      icon : <FaTv />,
      submenu: [
        { title: 'Add', link: '/admin/add-cable' },
        { title: 'View', link: '/admin/cable' },
      ],
    },
    {
      title: 'Bill',
      icon : <GoLightBulb />,
      submenu: [
        { title: 'Add', link: '/admin/add-bill' },
        { title: 'View', link: '/admin/bill' },
      ],
    },
    
    {
      title: 'Notification',
      icon : <IoIosNotifications />,
      submenu: [
        { title: 'Add', link: '/admin/add-notification' },
        { title: 'View', link: '/admin/notification' },
      ],
    },

    {
      title: 'Banner',
      icon : <FaTags />,
      submenu: [
        { title: 'Add', link: '/admin/add-banner' },
        { title: 'View', link: '/admin/banner' },
      ],
    },

    {
      title: 'Manage Referral',
      icon : <FaRegHandshake />,
      submenu: [
        { title: 'Add', link: '/admin/add-referral' },
        { title: 'View', link: '/admin/manage-referral' },
      ],
    },
    {
      title: 'Sms',
      icon : <MdOutlineMessage />,
      link: '/admin/sms',
    },
    {
      title: 'Api Settings',
      icon : <IoIosSettings />,
      link: '/admin/settings',
    },
    {
      title: 'Site Settings',
      icon : <IoIosSettings />,
      link: '/admin/site-settings',
    },
    {
      title: 'Security',
      icon :   <FaLockOpen />,
      link: '/admin/adminsecurity'
    }
  ];


interface SideNavProps {
    open: boolean;
    setOpen: (open: boolean) => void;
  }
  
  const SideNavAdmin: React.FC<SideNavProps> = ({ open, setOpen }) => {

    const {role, webLogo, twoStep} = userAuth(); 
    
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMenuClick = (title: string) => {
    setActiveMenu(activeMenu === title ? null : title);
  };


  return (
    <>

<div className="res-sidebar-close-btn"  onClick={() => setOpen(!open)} style={{ display : open ? "flex" : "none" }} >
       <FaTimes />
    </div>

<div className={`sidebar ${open ? "open" : "close"}`}>

{/* sidebar__inner start */}
<div className="sidebar__inner">

 <div className="sidebar__logo">
<NavLink to="/admin/admin-dashboard" className="sidebar__main-logo">
    <img src={webLogo} alt="image" />
</NavLink>
 </div> 

{/* <p className='level'>
     <strong>  Level  :   {role} </strong> 
</p> */}

<div className="slimScrollDiv" >
    
    <div className="sidebar__menu-wrapper" id="sidebar__menuWrapper">
     <ul className="sidebar__menu">



   {/* <li className="sidebar-menu-item active">
        <NavLink className="" to={ == "admin" ? "/admin/admin-dashboard" : "/user/dashboard"}>
         <MdOutlineHome />
        <span className="menu-title">   Dashboard    </span> 
        </NavLink>
    </li> */}


{/* -------------------------------- */}

{menuItems.map((menuItem, index) => (
        <li key={index} className={`sidebar-menu-item ${menuItem.submenu ? 'sidebar-dropdown' : ''}`}>
          {menuItem.submenu ? (
            <>
              <div className="sidebar-parent" onClick={() => handleMenuClick(menuItem.title)}>
                <div className="parent-title">
                {menuItem.icon}
                <span className="menu-title">{menuItem.title}</span>
                </div>

                <div className="parentIcon">
                  <IoIosArrowDown />
                </div>
              </div>

              <div className={`sidebar-submenu ${activeMenu === menuItem.title ? 'open' : ''}`}>
                <ul>
                  {menuItem.submenu.map((submenuItem, submenuIndex) => (
                    <li key={submenuIndex} className="sidebar-menu-item">

                      <NavLink to={submenuItem.link} className="nav-link">
                        <span className="menu-title">{submenuItem.title}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            menuItem.title == 'Security' ? (
            <NavLink to={menuItem.link!} className="nav-link sidebar-parent">
              <div className="parent-title">
              {twoStep ? <FaLock /> : <FaLockOpen />}
              <span className="menu-title">{menuItem.title}</span>
              </div>         
            </NavLink>
            ) : (
            <NavLink to={menuItem.link!} className="nav-link sidebar-parent">
              <div className="parent-title">
                {menuItem.icon}
              <span className="menu-title">{menuItem.title}</span>
              </div>         
            </NavLink>
            )
            
          )}
        </li>
      ))}








{/* ------------------------------------- */}
      
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

export default SideNavAdmin
