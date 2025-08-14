import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { RxCross2 } from 'react-icons/rx'

function Cart() {
  return (
    <div className='cart-con-wrapper pageNav'>
      <Header/>

      <div className="cart-con">
         <div className="cart-header">

         </div>

         <div className="cart-body-con">

             <div className="flex-center cart-body-item  cart-body-desk">
                 
                 <div className="cart-delete-item">
                    <div className="delete"><RxCross2 /></div>
                 </div>
                 <div className="cart-product-Image">
                    <div className="cart-image"><img src="" alt="" /></div>
                 </div>

                 <div className="cart-product-name">
                    <div className="product-name">Opulence diffuser black</div>
                 </div>
                 <div className="cart-item-color">
                    <div className="size">300ml</div>
                    <div className="cart-color"></div>
                 </div>
                 <div className="cart-item-price">
                    <div className="cart-price">$ <span>56</span></div>
                 </div>
                 <div className="cart-item-qty">
                    <div className="cart-qty">
                        <div className="qty-minus">-</div>
                        <div className="qty-number">20</div>
                        <div className="qty-plus">+</div>

                    </div>
                    <p className="mq">
                        MOQ: <span>20</span>
                    </p>
                 </div>
                 <div className="cart-item-sub-total">
                    <div className="sub-total">$ <span>50</span></div>
                 </div>


             </div>

             <div className="cart-body-mobile">
                <div className="delete-cart"><RxCross2 /></div>
                <div className="flex-center">
                    <div className="cart-image"><img src="" alt="" /></div>
                    <div className="cart-image-details">
                        <h1>opelene nejeje nean</h1>
                        <div className="flex-center cart-size">
                            <h2>size:</h2>
                            <h1>100ml</h1>
                        </div>
                        <div className="flex-center cart-moq">
                            <h2>moq</h2>
                            <h1>10</h1>
                        </div>


                    </div>
                </div>
                <div className="cart-description">
                    <div className="flex-center justification-between unit-price">
                       <h2>unit price</h2> 
                       <h1>$59</h1>
                    </div>
                </div>
             </div>

         </div>

      </div>

      {/* <Footer/> */}
    </div>
  )
}

export default Cart