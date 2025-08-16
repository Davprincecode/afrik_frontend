import React from 'react'
import Header from '../component/Header'
import { FaCcVisa } from 'react-icons/fa'
import Footer from '../component/Footer'

function Payment() {
  return (
    <div className='payment-con-wrapper pageNav'>
      <Header/>

      <div className="payment-con">

         <div className="page-title">
               <span> Cart </span> / shipping / payment
        </div>
         
         <div className="billing-con">

            <div className="billing-form form-con">

                <div className="form-title">Billing Details</div>

                <div className="formInput">
                    <label >name <span>(First name and Last name)</span>  *</label>
                    <input type="text" name="" placeholder='full name' />
                </div>
                <div className="formInput">
                    <label >address</label>
                    <input type="text" name="" placeholder='address' />
                </div>

                <div className="formInput">
                     <label >name <span>(First name and Last name)</span>  *</label>
                    <select name="" id="">
                        <option value="">hello</option>
                    </select>
                </div>

                <div className="formInputFlex">
                       <div className="formInputItem">
                        <label >address</label>
                        <input type="text" name="" id="" />
                        </div>
                       <div className="formInputItem">
                        <label >address</label>
                        <input type="text" name="" id="" />
                        </div>
                </div>

                <div className="formInputFlex">
                       <div className="formInputItem"><input type="text" name="" id="" /></div>
                       <div className="formInputItem"><select name="" id=""><option value="">hello world</option></select></div>
                </div>

            </div>

            <div className="billing-details">
                <div className="billing-header flex-center justification-between">
                    <h1>product</h1>
                    <h1>subtotal</h1>
                </div>

                <div className="billing-body">

                    <div className="billing-product-con">
                        <div className="billing-product flex-center justification-between">
                            <p>Porcelain Dinner Plate (27cm)</p>
                            <p>₦122.00</p>
                         </div>
                        <div className="billing-product flex-center justification-between">
                            <p>Luana Bowl</p>
                            <p>₦2002.00</p>
                        </div>
                        <div className="billing-product flex-center justification-between">
                            <p>Ophelia Matte Natural  Vase</p>
                            <p>₦12122.00</p>
                        </div>
                    </div>
                     
                     <div className="billing-total">
                        <div className="billing-sub flex-center justification-between">
                          <h2>subtotal</h2>
                          <h2>₦100</h2>
                        </div>
                        <div className="billing-sub-total flex-center justification-between">
                          <h2>shipping</h2>
                          <h2>₦100</h2>
                        </div>
                     </div>

                     <div className="billing-ground-total flex-center justification-between">
                        <h1>total</h1>
                        <h1>₦500</h1>
                     </div>

                </div>

                <div className="billing-card form-con">
                    <div className="card-title">payment</div>
                    <div className="card-header flex-center gap-10">
                        <div className="flex-center card-header-title"><input type="radio"/> <p>credit card</p> </div>
                        <div className="flex-center card-header-title"><input type="radio"/> <p>visa card</p> </div>
                        <div className="card-header-title"><FaCcVisa /></div>
                        <div className="card-header-title"><FaCcVisa /></div>
                    </div>
                    <div className="card-body">

                        <div className="formInput">
                            <input type="text" name="" placeholder='Card number' />
                        </div>
                         <div className="formInput">
                            <input type="text" name="" placeholder='Name on card' />
                        </div>

                        <div className="formInputFlex">
                            <div className="formInputItem">
                                <input type="text" name="" placeholder="Exp date (MM/YY)" />
                            </div>
                            <div className="formInputItem">
                                <input type="text" name="" placeholder="security code" />
                            </div>
                        </div>
                         
                         <div className="paymentBtn">
                            place order
                         </div>

                    </div>

                </div>

            </div>


         </div>


     </div>

     <Footer/>
    </div>
  )
}

export default Payment