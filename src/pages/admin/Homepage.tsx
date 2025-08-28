import React from 'react'
import AdminTopHeader from '../../component/AdminTopHeader'
import SideNavAdmin from '../../component/SideNavAdmin'
import Hero from './Hero'
import Testimonial from './Testimonial'
import ShopTransaction from './ShopTransaction'


function Homepage() {

   

  return (
    <div className='admin-dashboard'>
        <AdminTopHeader />

         <div className="flex mainWrapper">
           <SideNavAdmin/> 

           <div className="mainBody">

                <div className="mainHeader flex-center justification-center">
                    <div className="mainHeaderRouteCon flex-center justification-between">

                        <div className="mainHeaderRoute mainHeaderActive">
                            hero sliders
                        </div>
                        <div className="mainHeaderRoute">
                            gallery
                        </div>
                        <div className="mainHeaderRoute">
                            brand logos
                        </div>
                        <div className="mainHeaderRoute">
                            testimonials
                        </div>

                    </div>
                </div>

                <div className="mainBodyDetails">
                   <ShopTransaction/>
                </div>

           </div>


         </div>
        

    </div>
  )
}

export default Homepage