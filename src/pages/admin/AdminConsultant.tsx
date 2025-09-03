import React from 'react'
import AdminTopHeader from '../../component/AdminTopHeader'
import SideNavAdmin from '../../component/SideNavAdmin'

function AdminConsultant() {
  return (
     <div className='admin-dashboard'>
        <AdminTopHeader />

         <div className="flex mainWrapper">
           <SideNavAdmin/> 

           <div className="mainBody">
              <div>Consultant</div>
           </div>
           </div>
           
           </div>
    
  )
}

export default AdminConsultant