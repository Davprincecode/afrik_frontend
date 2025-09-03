import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import contactImg from '../assets/images/contactus.png'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { FaDiscord, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin,  FaWhatsapp } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { userAuth } from './context/AuthContext'
import ButtonPreloader from '../component/ButtonPreloader'


function ContactUs() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState<boolean>(false);
  const {baseUrl} = userAuth();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

 const handleContact = async() => {
    setLoading(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
    'messageType' : 'word',
        'name' : 'obafemi david',
        'email' : 'obafemidavprince',
        'address' : 'oke ola',
        'phoneNumber' :  '0813857885',
        'message' : 'hello world how are you doing'
    });
    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(`${baseUrl}/contactus`, requestOptions);
      const results = await response.text(); 
      console.log(results);
      
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message);
        }
        const result = await response.json(); 

       console.log(result);
       
      toast.success("Data uploaded successfully");
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  
 }

  return (

    <div className='contactUs pageNav'>
        <Header />
        
       <div className="contactUsCon">
        <div className="contactusHeader">
          <h1>contact us</h1>
          <p>Got question or remarks ? Leave us a message</p>
          
        </div>
           
           <div className="contactBody flex-center gap-20">

                <div className="contactInfo" style={{backgroundImage : `url(${contactImg})`}}>

                    <h1 className='contactTitle'>Contact Information</h1>
                    <p className="contactTitledetails">Here`s how you can reach us</p> 


                    <div className="flex-center gap-10 contact"><div className="contactIcon"><BiSolidPhoneCall /></div> <p>+2347077744145</p></div>
                    <div className="flex-center gap-10 contact"><div className="contactIcon"><FaEnvelope /></div> <p>hello@loveafrikgroup.com </p></div>
                    <div className="flex-center gap-10 contact"><div className="contactIcon"><FaLocationDot /></div> <p>Lagos, Nigeria.</p></div>
                    <div className="dotLine"></div>
                    <div className="businessHour">
                        <div className="hour"><h4>Business Hours</h4></div>
                        <p>monday - friday</p>
                        <p>9am - 5pm</p>
                        <a href="https://wa.me/2347077744145" target='_blank' className="whats-app">
                          <FaWhatsapp />
                          <p>Chat us on whatsapp</p>
                        </a>
                    </div>

                    <div className="socialMedia flex-center gap-20">
                            <div className="social">
                                <a href=""><FaFacebookF /></a>
                            </div>
                            <div className="social">
                                <a href="" className='insta'><FaInstagram /></a>
                            </div>
                            <div className="social">
                                <a href=""><FaLinkedin /></a>
                            </div>
                    </div>
                </div>

                <div className="contactForm">

                  <div className="input inputCon">
                    <label >Message Type</label>
                    <select >
                      <option value="">Select Type</option>
                    </select>
                  </div>

                  <div className="inputFlex flex-center gap-20">
                    <div className='input'> <label>Name <span>(First Name & Last Name)</span></label><input type="text"/></div>
                    <div className='input'> <label>Email</label><input type="email"/></div>
                  </div>  

                  <div className="inputFlex flex-center gap-10">
                    <div className='input'> <label>City/State</label><input type="text"/></div>
                    <div className='input'> <label>Phone Number</label><input type="email"/></div>
                  </div>  

                  <div className="text-area">
                    <div className="input">
                       <label >message</label>
                     <textarea  cols={20} rows={8} ></textarea>
                    </div>   
                    </div>
                     

                     <div className="contactInputBtn">
                      {
                        loading ? (
                            <div className="contactBtn inActive">
                                <ButtonPreloader/>
                            </div>
                        ) : (
                      <div className="contactBtn" onClick={handleContact}>
                          send message
                      </div>
                        )
                      }
                    
                </div>


                </div>
               

           </div>

       </div>

        <Footer/>
    </div>
  )
}

export default ContactUs