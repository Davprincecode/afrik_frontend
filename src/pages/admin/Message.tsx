import React from 'react'
import AdminTopHeader from '../../component/AdminTopHeader'
import SideNavAdmin from '../../component/SideNavAdmin'

function Message() {
  return (
    <div className='admin-dashboard'>
        <AdminTopHeader />

         <div className="flex mainWrapper">
           <SideNavAdmin/> 

           <div className="mainBody">

              <div>Message</div>
              
           </div>
           
           </div>
           </div>
    
  )
}

export default Message