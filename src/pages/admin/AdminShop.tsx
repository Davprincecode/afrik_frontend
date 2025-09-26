import React, { useState } from 'react'
import AdminTopHeader from '../../component/AdminTopHeader'
import SideNavAdmin from '../../component/SideNavAdmin'

import ShopTransaction from './component/ShopTransaction'
import Banners from './component/Banners';
import AllProduct from './component/AllProduct';
import AddProduct from './component/AddProduct';
import Orders from './component/Orders';
import AddPayment from './component/AddPayment';


const headers = ['orders', 'transactions', 'banners', 'all product', 'add product'];

function AdminShop() {

   const [activeTab, setActiveTab] = useState('orders'); 

   const [paymentActive, setPaymentActive] = useState<boolean>(false);
    
   const paymentFunction = () => {
    setPaymentActive(!paymentActive);
   }

  return (
    <div className='admin-dashboard'>
        <AdminTopHeader />

         <div className="flex mainWrapper">
           <SideNavAdmin/> 

           <div className="mainBody">

                <div className="mainHeader flex-center justification-center">
                    <div className="mainHeaderRouteCon flex-center justification-between">
                        {headers.map((label) => (
                            <div
                            key={label}
                            className={`mainHeaderRoute ${activeTab === label ? 'mainHeaderActive' : ''}`}
                            onClick={() => setActiveTab(label)}
                            >
                            {label}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mainBodyDetails">
                    {
                        
                        activeTab == 'transactions' ? (

                            paymentActive ? (
                                <AddPayment paymentFunction={paymentFunction}/>
                            ) : (
                                <ShopTransaction paymentFunction={paymentFunction}/>
                            )
                              
                        ) : activeTab == 'banners' ? (
                             <Banners />
                        ) : activeTab == 'all product' ? (
                            <AllProduct />
                        ) : activeTab == 'add product' ? (
                             <AddProduct />
                        ) :(
                           <Orders />
                        )
                    }
                   
                </div>

           </div>


         </div>
        

    </div>
  )
}

export default AdminShop