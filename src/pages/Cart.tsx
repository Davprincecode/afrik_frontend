import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import product1 from '../assets/images/product3.jpg'
import { RxCross2 } from 'react-icons/rx'
import { AiOutlineDelete } from 'react-icons/ai'
import { VscDash } from 'react-icons/vsc'
import { FiPlus } from 'react-icons/fi'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { TiMinus, TiPlus } from 'react-icons/ti'
import { GoPlus } from 'react-icons/go'
import { PiMinusThin } from 'react-icons/pi'

function Cart() {
  return (
    <div className='cart-con-wrapper pageNav'>
      <Header/>

      <div className="cart-con">

         <div className="page-title">
               <span> Cart </span> /
            </div>

         <div className="cart-body-con">
             <div className="table-header">
                  <h1>cart (4 items)</h1>
             </div>
             <div className="flex-center cart-body-item cart-body-desk">
                        <table id="customers">
                           <tr>
                              <th><AiOutlineDelete /></th>
                              <th>PHOTO</th>
                              <th>PRODUCT</th>
                              <th>COLOR/SIZE</th>
                              <th>UNIT PRICE</th>
                              <th>QUANTITY</th>
                              <th>SUB TOTAL</th>
                           </tr>
                           <tr>
                              <td><RxCross2 className="cart-delete"/></td>
                              <td><div className="cart-image"><img src={product1} /></div></td>
                              <td><div className="cart-name">opulence diffuser black</div></td>
                              <td>
                                 <div className="cart-size-con">
                                    <div className="cart-color" style={{ color:"black"}}></div>
                                    <div className="cart-size">300ml</div>
                                 </div>
                              </td>
                              <td><div className="cart-price">₦9090</div></td>
                              <td>
                                 <div className="cart-qty flex-center">
                                    <div className="cart-minus"><PiMinusThin /></div>
                                    <div className="cart-qt-num">10</div>
                                    <div className="cart-plus"><FiPlus /></div>
                                 </div>
                              <p className="cart-moq">MOQ : 20</p></td>
                           <td><div className="cart-sub-total">₦3337</div></td>
                           </tr>
                        </table>
             </div>
            
             <div className="cart-body-mobile">
                <div className="delete-cart"><RxCross2 /></div>

                <div className="flex-center gap-20">
                    <div className="cart-image">
                     <img src={product1}/>
                    </div>
                    <div className="cart-image-details">
                        <h1 className='cart-title'>opelene nejeje nean</h1>
                        <div className="flex-center gap-20 cart-size">
                            <h2>size:</h2>
                            <h1>100ml</h1>
                        </div>
                        <div className="flex-center gap-20 cart-moq">
                            <h2>moq:</h2>
                            <h1>10</h1>
                        </div>
                    </div>
                </div>


                <div className="cart-description">
                    <div className="flex-center justification-between unit-price">
                       <h2>unit price</h2> 
                       <h1>₦59</h1>
                       
                    </div>
                    <div className="flex-center justification-between cart-mobile-qty">
                       <h2>quantity</h2> 
                       <div className="flex-center justification-between cart-mobile-qty-item">
                         <div className="qty-minus"><PiMinusThin /></div>
                        <div className="qty-number">20</div>
                        <div className="qty-plus"><GoPlus /></div>
                       </div>
                    </div>
                    <div className="flex-center justification-between cart-mobile-total">
                       <h2>sub total</h2> 
                       <h1>₦59</h1>
                    </div>
                </div>
                
             </div>
         </div>

    <div className="cart-summary-wrapper flex justification-end">
      <div className="cart-summary">
             <h4>cart total</h4>

             <div className="sub-total flex-center justification-between">
               <h2>subtotal</h2>
               <h1>₦5545.00</h1>
             </div>

             <div className="cart-total flex-center justification-between">
               <h2>cart total</h2>
               <h1>₦5545.00</h1>
             </div>

             <div className="proceed-btn">proceed to checkout</div>
      </div>
    </div>
      

      </div>

      {/* <Footer/> */}
    </div>
  )
}

export default Cart