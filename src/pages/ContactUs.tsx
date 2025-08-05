import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import contactImg from '../assets/images/contactus.png'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { FaDiscord, FaEnvelope, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

function ContactUs() {
  return (
    <div className='contactUs'>
        <Header />
        
       <div className="contactUsCon">
        <div className="contactusHeader">
          <h1>contact us</h1>
          <p>Got question or remarks ? Leave us a message</p>
          
        </div>
           
           <div className="contactBody flex-center gap-20">

                <div className="contactInfo" style={{backgroundImage : `url(${contactImg})`}}>

                    <h1 className='contactTitle'>Contact Information</h1>
                    <p className="contactTitledetails">Here`s how you can reach out</p> 


                    <div className="flex-center gap-10 contact"><div className="contactIcon"><BiSolidPhoneCall /></div> <p>+2347077744145</p></div>
                    <div className="flex-center gap-10 contact"><div className="contactIcon"><FaEnvelope /></div> <p>contact@loveafrikgroup.com</p></div>
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
                                <a href=""><FaTwitter /></a>
                            </div>
                            <div className="social">
                                <a href="" className='insta'><FaInstagram /></a>
                            </div>
                            <div className="social">
                                <a href=""><FaDiscord /></a>
                            </div>
                    </div>
                </div>

                <div className="contactForm">
                  <div className="inputFlex flex-center gap-20">
                    <div className='input'> <label>first Name</label><input type="text"/></div>
                    <div className='input'> <label>email</label><input type="email"/></div>
                  </div>  

                  <div className="inputFlex flex-center gap-10">
                    <div className='input'> <label>city/state</label><input type="text"/></div>
                    <div className='input'> <label>phone number</label><input type="email"/></div>
                  </div>  

                  <div className="text-area">
                    <div className="input">
                       <label >message</label>
                     <textarea  cols={20} rows={8} ></textarea>
                    </div>   
                    </div>
                     

                     <div className="contactInputBtn">
                    <div className="contactBtn">
                        send message
                    </div>
                </div>


                </div>
               

           </div>

       </div>

        <Footer/>
    </div>
  )
}

export default ContactUs