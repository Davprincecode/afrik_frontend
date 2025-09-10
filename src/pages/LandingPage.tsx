import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Header from '../component/Header'
import HeroSection from '../component/HeroSection'
import HeroContext from '../component/HeroContext'
import Services from '../component/Services'
import Product from '../component/Product'
import Partner from '../component/Partner'
import Testimonies from '../component/Testimonies'
import BookingSection from '../component/BookingSection'
import Blog from '../component/Blog'
import Footer from '../component/Footer'
import Vlog from '../component/Vlog'
import Gallery from '../component/Gallery'
import Youtube from '../component/Youtube'
import { userAuth } from './context/AuthContext'
import { toast } from 'react-toastify'
import CourseSection from '../component/CourseSection'


const LandingPage  = () => {
  const location = useLocation();
  const {baseUrl, loginAuth, setToken, logInUser}  = userAuth(); 

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    // console.log(token);
    
    if (token) {
        handleLogin(token);
    }else{
      const error = queryParams.get('error');
      toast.error(error);
    }

  });
      
   const handleLogin = async (token : string) => {

     localStorage.setItem('myToken', token);
          setToken(token);
          logInUser();
         toast.success("Logged in successfully!");

    }

return(
<div>
  <Header />
  <HeroSection />
  <HeroContext/>
  <Services/>
  <CourseSection/>
  <Product/>
  <Gallery/>
  <Partner/>
  <Testimonies/>
  <BookingSection/>
  <Blog/>
  <Vlog/>
  {/* <Youtube /> */}
  <Footer/>
</div>
)}

export default LandingPage
