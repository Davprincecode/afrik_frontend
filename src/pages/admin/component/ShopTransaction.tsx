import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import invImg from '../../../assets/images/inventoryImg.png'
import { CiSearch } from 'react-icons/ci';
import { IoSettingsOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';




interface PaymentInterface {
  paymentFunction: () => void; 
}


const ShopTransaction: React.FC<PaymentInterface> = ({ paymentFunction }) =>{
  const [isActive, setIsActive] = useState(false);
  
    return (
      <div>
         
  
         <div className="admin-shop-transactions">
            <div className="admin-shop-header">
                          
                            <div className="admin-header-form  flex-center gap-10 justification-between">
            
                                <div className="flex-center gap-10">
                                    <div className="header-form-filter">
                                        <select name="" id="">
                                            <option value="">Filter</option>
                                        </select>
                                    </div>
                                    <div className="header-form-input">
                                        <input type="text" placeholder='Search' />
                                        <CiSearch />
                                    </div>
                                </div>

                                <IoSettingsOutline className='setting-icon' onClick={paymentFunction}/>
                            </div>
            
                        </div>
            <div className="admin-shop-container">
                    <table>

                        <tr>
                        <th>s/n</th>
                        <th>id</th>
                        <th>date</th>
                        <th>Customer</th>
                        <th>total</th>
                        <th>method</th>
                        <th>status</th>
                        <th>action</th>
                        <th></th>

                        </tr>

                        <tr>
                        <td>1</td>
                        <td>#564563</td>
                        <td>21/08/2025</td>
                        <td>joseph welder</td>
                        <td>₦23242</td>
                        <td>
                           cc
                        </td>
                        <td>
                            <div className="order-pending">pending</div>
                        </td>
                        <td className='action'>view details</td>
                        </tr>

                    </table>
            </div>

            <div className="admin-shop-footer flex-center justification-between">
                 
                 <div className="page-con flex-center gap-10">
                       <p>showing</p>
                       <select >
                        <option value="10">10</option>
                       </select>
                       <p>of 50</p>
                 </div>

               <div className="pagination-number flex-center">
                <div className="pagination-num-arrow"><IoIosArrowBack /></div>
                <div className="pagination-num pagination-active">1</div>
                <div className="pagination-num">2</div>
                <div className="pagination-num-arrow"><IoIosArrowForward /></div>
               </div>

            </div>

         </div>
  
      </div>
    )
}

export default ShopTransaction