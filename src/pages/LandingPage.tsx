import React from 'react'
import { NavLink } from 'react-router-dom'
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



const LandingPage  = () => {
 
return(
<div>
  <Header />
  <HeroSection />
  <HeroContext/>
  <Services/>
  <Product/>
  <Partner/>
  <Testimonies/>
  <BookingSection/>
  <Blog/>
  <Footer/>
</div>
)}

export default LandingPage
