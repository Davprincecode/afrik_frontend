import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
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


const LandingPage  = () => {
//  const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
      
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
