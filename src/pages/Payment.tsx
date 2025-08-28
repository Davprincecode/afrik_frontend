import React from 'react'
import Header from '../component/Header'
import { FaCcVisa } from 'react-icons/fa'
import Footer from '../component/Footer'


function Payment() {


     const fetchData = async () => {
     
        const tokens: string =  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNjVkZDgxNWU3ZGQ5ODM5YmJkYzRkYWI0YzViODU1NmEyOGZjODFiYjJmNzJhYWQ5NTI2YjU0NTIwN2NjY2U1ODU1NGFlZGE2OGUxYzFmNzkiLCJpYXQiOjE3NTU4Mjc4MDIuNTc0Njk1LCJuYmYiOjE3NTU4Mjc4MDIuNTc0Njk5LCJleHAiOjE3ODczNjM4MDIuNTQ4Mzc3LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.E7DOLsowewxviFAVdgyDmks3WfZo4mbWhALC1FiQoYEEPgYypsne0jo3utFMKhKKOXlb1OJG2RmzJUAnP_PpySuV-YazGssXcyTRYf14FzjTGdAvzClTY8NNPky3R5xo3N3fKL9NTgszoSuvDTMNSMeDixA5sf6BaEmYyGZQAAhGEn3FH-TC8AoDmlrTGZQgALk6rYgAqyMl4q-dKwRG0lQH2aOyTHSpiSZqQVVgWNa5R68V_TlaytyNAEmtJjA-SwULzBIWyCnOKHkZ5DIBjC0u6nJr-Dr5dG7paPVuPFKo7RvEaYnR9xpUrZlA8fNGqqdmCSbFgnqV69L2YK9vMr4tpHJHhUe45nxcjocxlQuvipV9DBLJxuRXKdWNPURRAQG3w5XkyRYOWmu6zB2FZrTJ7E5ykM3w8i0Z_2HKpH650psBe2yCHfhZXkGJ1ttjkmK_x8SPNveyyScKIno-N6WszZdWXUTAMN9Y6EfQzK4ZY9zGkfwFur-GPIbJv62Ec6FLMFwvhFk6GkwdqCL9XvnYaP-7gif35_HE62Ej3BcGrPm-ouIL-RINCkIoGwMXtdZ4agxvtC8M8DhWzF8aoaTQiPFNvnh-O7x_nY5m_TPPxjK4vYp2-OnBeqbvmbRiAoeNqXjXpETk0B09CEuN6jIA9gSppgk-1r9eP4pBXE4';
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", tokens);
        const raw = JSON.stringify({
             
             "email" : "obafemidavprince@gmail.com",
             "address" : "oke ola osun state",
             "phoneNumber" : "08138457885",
             "orderNote" : "hello world",
             "service_type" : "product",
             "amount" : 1000,
             "callBackUrl" : 'http://localhost:5173/payment/callback'
         });
        const requestOptions: RequestInit = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        try {
          const response = await fetch(`http://127.0.0.1:8000/api/v1/payment`, requestOptions);   
          if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message);
          }
            const result = await response.json();  
           
            console.log(result.authorization_url);
            
            window.location.href = result.authorization_url;
        } catch (error) {          
          // if (!isExempted) {
          //   logout();
          // }
        }
     
    };

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
                         
                         <div className="paymentBtn" onClick={fetchData}>
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