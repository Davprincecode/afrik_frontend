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


const LandingPage  = () => {
  const location = useLocation();
  const {baseUrl, loginAuth, logInUser}  = userAuth(); 

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    if (token) {
     
        handleLogin(token);
    
    }else{
      const error = queryParams.get('error');
      toast.error(error);
    }

  });
      


   const handleLogin = async (token : string) => {
      const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", token);
        const requestOptions: RequestInit = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        try {
          const response = await fetch(`${baseUrl}/auth/getuser`, requestOptions);
        // setLoading(false); 
        if (!response.ok) {
          const errorResponse = await response.json();
          throw new Error(errorResponse.message);
        }
        const result = await response.json();
         loginAuth(result.data.userId, result.data.name, result.data.email,  result.data.address1, result.data.address2, result.data.phoneNumber1, result.data.phoneNumber2, result.data.city, result.data.city, result.data.postalCode, result.data.profileImage, result.data.role, token);
        //  setSubNav(false);
         logInUser();
         toast.success("Logged in successfully!");
          // setLoading(false);
      } catch (error) {
        // setLoading(false);
        if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") {
          toast.error(error.message);
        } else {
          toast.error('An unknown error occurred.');
        }
      }
    }

return(
<div>
  <Header />
  <HeroSection />
  <HeroContext/>
  <Services/>
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
