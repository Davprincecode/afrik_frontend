import React, { useState } from 'react'
import { userAuth } from '../../context/AuthContext';
import AddCourse from './AddCourse';
import PurchaseCourse from './PurchaseCourse';
import AllCourse from './AllCourse';


const headers = ['all', 'add new', 'purchases'];
function Courses() {
     const [activeTab, setActiveTab] = useState('all');
      const [isActive, setIsActive] = useState(false);
     const {baseUrl, token} = userAuth();
      const handleToggle = () => {
        setIsActive(!isActive);
      };
    
  return (
    <div>
        
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
                    ) : activeTab == 'add new' ?(
                            <PurchaseCourse/>
                    ) : (
                        <AllCourse/>
                    )
                }
        </div>


    </div>
  )
}

export default Courses