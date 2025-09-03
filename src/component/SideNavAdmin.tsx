import React, { useState } from 'react'
import { MdHome} from 'react-icons/md';
import { NavLink } from 'react-router-dom'
import { userAuth } from '../pages/context/AuthContext';
import { LuChartNoAxesCombined } from 'react-icons/lu';
import { BsShop } from 'react-icons/bs';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { RxEnvelopeClosed } from 'react-icons/rx';


interface MenuItem {
    title: string;
    link?: string;
    icon : JSX.Element;
  }
  
  const menuItems: MenuItem[] = [
    {
      title: 'overview',
      link: '/admin/admin-dashboard',
      icon : <LuChartNoAxesCombined />
    },
    {
      title: 'homepage',
      link: '/admin/home-page',
      icon : <MdHome />
    },
    {
      title: 'shop',
      link: '/admin/admin-shop',
      icon : <BsShop />
    },
    {
      title: 'consultation',
      link: '/admin/admin-consult',
      icon : <MdHome />
    },
    {
      title: 'blog',
      link: '/admin/admin-blog',
      icon : <MdHome />
    },
    {
      title: 'vlog',
      link: '/admin/vlog-page',
      icon : <GoDeviceCameraVideo />
    },
    {
      title: 'message',
      link: '/admin/admin-message',
      icon : <RxEnvelopeClosed />
    },
   
  ];


interface SideNavProps {
    open: boolean;
    setOpen: (open: boolean) => void;
  }
  
  const SideNavAdmin = () => {

    const {role} = userAuth(); 
    
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <>

<div className='sidebar'>

{/* sidebar__inner start */}
<div className="sidebar_inner">

  
    <ul className="sidebar_menu">
{/* -------------------------------- */}

{menuItems.map((menuItem, index) => (
        <li key={index} className='sidebar-menu-item'>
      
            <NavLink to={menuItem.link!} className="flex-center gap-20 nav-link sidebar-parent">
              <div className="menuIcon">
                {menuItem.icon}
              </div> 
              <div className="menu-title">{menuItem.title}</div>        
            </NavLink>
            
        </li>
      ))}

{/* ------------------------------------- */}
      
   </ul>
 

</div> 
{/* sidebar__inner end */}


</div>
</>
  )
}

export default SideNavAdmin
