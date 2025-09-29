import React, { useEffect, useState } from 'react'
import { userAuth } from '../../context/AuthContext';
import AddCourse from './AddCourse';
import PurchaseCourse from './PurchaseCourse';
import AllCourse from './AllCourse';
import AdminTopHeader from '../../../component/AdminTopHeader';
import SideNavAdmin from '../../../component/SideNavAdmin';
import ComposeMessage from '../../../component/ComposeMessage';
import MessageInbox from './MessageInbox';
import MessageFavourite from './MessageFavourite';
import MessageUnread from './MessageUnread';
import MessageSent from './MessageSent';
import { FaEnvelope, FaPlus } from 'react-icons/fa';
import { HiOutlineEnvelope, HiOutlinePaperAirplane, HiOutlineStar } from 'react-icons/hi2';
import { FiPlus } from 'react-icons/fi';
import { toast } from 'react-toastify';




const headers = [
  { label: 'inbox', icon: <FaEnvelope /> },
  { label: 'unread', icon: <HiOutlineEnvelope /> },
  { label: 'sent', icon: <HiOutlinePaperAirplane /> },
  { label: 'favourite', icon: <HiOutlineStar /> },
];

function MessageComponent() {
      
     const [activeTab, setActiveTab] = useState('inbox');
      const [isActive, setIsActive] = useState(false);
      const handleToggle = () => {
        setIsActive(!isActive);
      };   
      const [authAction, setAuthAction] = useState<boolean>(false);   
      
  return (
    <div  className='admin-dashboard'>

        <AdminTopHeader />

        <div className="flex mainWrapper">
           <SideNavAdmin/> 

           <div className="mainBody">
        
          <div className="admin-shop-header message-shop-header">

                <div className="create-compose" onClick={() => setAuthAction(!authAction)}>
                  <FiPlus />
                  compose
                </div>

                <div className="message-header-list admin-header-list flex-center gap-10">
                    {headers.map((label, index) => (
                            <div className={`label-flex ${activeTab === label.label ? 'header-list-active' : ''}`}>

                              <div className="label-icon">
                                  {label.icon}
                              </div>

                                <div
                                key={index}
                                className={`header-list`}
                                onClick={() => setActiveTab(label.label)}
                                >
                                {label.label}
                                </div>
                            
                            </div>
                        ))}
                </div>
        </div>

        <div className="course-container">
                {
                 
                    activeTab == 'unread' ? (
                        <MessageUnread />
                    ) : activeTab == 'sent' ? (
                        <MessageSent />
                    ) : activeTab == 'favourite' ? (
                        <MessageFavourite />
                    ) : (
                        <MessageInbox />
                    )
                }
        </div>

</div>


<ComposeMessage  authAction={authAction} setAuthAction={setAuthAction}/>
           
</div>
</div>
  )
}

export default MessageComponent