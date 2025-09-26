import React, { useState } from 'react'
import { userAuth } from '../../context/AuthContext';
import AddCourse from './AddCourse';
import PurchaseCourse from './PurchaseCourse';
import AllCourse from './AllCourse';
import AdminTopHeader from '../../../component/AdminTopHeader';
import SideNavAdmin from '../../../component/SideNavAdmin';
import Message from '../Message';
import ComposeMessage from '../../../component/ComposeMessage';


const headers = ['all', 'add new', 'purchases'];

function MessageComponent() {

     const [activeTab, setActiveTab] = useState('all');
      const [isActive, setIsActive] = useState(false);
     const {baseUrl, token} = userAuth();
      const handleToggle = () => {
        setIsActive(!isActive);
      };   
      const [authAction, setAuthAction] = useState<boolean>(true);   
  return (
    <div  className='admin-dashboard'>

        <AdminTopHeader />

        <div className="flex mainWrapper">
           <SideNavAdmin/> 

           <div className="mainBody">
        
          <div className="admin-shop-header">
                <div className="admin-header-list flex-center gap-10">
                    {headers.map((label) => (
                            <div
                            key={label}
                            className={`header-list ${activeTab === label ? 'header-list-active' : ''}`}
                            onClick={() => setActiveTab(label)}
                            >
                            {label}
                            </div>
                        ))}
                </div>
        </div>

        <div className="course-container">
                {
                    activeTab == 'add new' ? (
                        <AddCourse/>
                    ) : activeTab == 'purchases' ? (

                            <PurchaseCourse/>

                    ) : (
                        <Message/>
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