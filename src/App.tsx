import { Route, Routes, useLocation} from "react-router-dom";
import { Helmet } from "react-helmet";
import { userAuth } from "./pages/context/AuthContext";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './AppCustom.css'
import './Dashboard.css'
import 'react-multi-carousel/lib/styles.css';
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ConfirmEmail from "./pages/ConfirmEmail";
import RedirectForm from "./pages/Auth/RedirectForm";
// import ForgetPassword from "./pages/Auth/ForgetPassword";
// import ChangePassword from "./pages/Auth/ChangePassword";
// import VerifyOtp from "./pages/Auth/VerifyOtp";
import LandingPage from "./pages/LandingPage";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import Notification from "./component/Notification";

import BlogList from "./pages/BlogList";
import BlogDetails from "./pages/BlogDetails";
import AnimatedShuffleList from "./pages/AnimatedShuffleList";
import ComingSoon from "./component/ComingSoon";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import BookingCalendar from "./pages/BookingCalendar";
import Booking from "./pages/Booking";
import BookingCalendarrs from "./pages/BookingCalendarrs";
import Payment from "./pages/Payment";
import Consultant from "./pages/Consultant";
import ConsultantDetails from "./pages/ConsultantDetails";
import VerifyPayment from "./pages/payment/VerifyPayment";
import Homepage from "./pages/admin/Homepage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Profile from "./pages/user/Profile";
import AdminShop from "./pages/admin/AdminShop";
import Vlog from "./pages/admin/Vlog";
import AdminBlog from "./pages/admin/AdminBlog";
import BlogEditor from "./pages/admin/component/BlogEditor";
import Message from "./pages/admin/Message";
import AdminConsultant from "./pages/admin/AdminConsultant";
import BookingCalendars from "./pages/BookingCalendars";
import MasterCourse from "./pages/MasterCourse";
import MasterCourseDetail from "./pages/MasterCourseDetail";
import MasterCoursePayment from "./pages/MasterCoursePayment";
import MessageComponent from "./pages/admin/component/MessageComponent";
import VerifyCoursePayment from "./pages/payment/VerifyCoursePayment";




function App() {
 

const {baseUrl} = userAuth();

 const location = useLocation();


 
 return (

  <div className="app">
      <ToastContainer 
      position="top-right"
      autoClose={3000} 
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      draggable
      theme="colored"
      />
      <Routes>
        
          {/* <Route path="/test-google" element={<LoginBtn />} /> */}


          <Route path="/" element={<LandingPage />} />
          <Route path="/:token" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/redirectform" element={<RedirectForm />} />
          <Route path="/emailconfirm/:token" element={<ConfirmEmail/>} />
          {/* <Route path="/forgetpassword" element={<ForgetPassword/>} />
          <Route path="/changepassword/:token" element={<ChangePassword/>} /> */}
          {/* <Route path="/verifyotp" element={<VerifyOtp />} /> */}

         
          <Route path="/payment/callback" element={<VerifyPayment />} />
          <Route path="/payment/course/callback" element={<VerifyCoursePayment />} />

          {/* <Route path="/coming-soon" element={<ComingSoon />} /> */}

          <Route path="/shuffle" element={<AnimatedShuffleList />} />

       {/* ============================================== */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/our-services" element={<OurServices/>} />
          <Route path="/our-blog" element={<BlogList/>} />
          <Route path="/blog-details" element={<BlogDetails/>} />
          <Route path="/product" element={<Shop/>} />
          {/* <Route path="/product-details" element={<ProductDetails/>} /> */}
          <Route path="/product-details/:productId" element={<ProductDetails/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/consultant" element={<Consultant/>} />
          <Route path="/consultant-details" element={<ConsultantDetails/>} />
           <Route path="/master-course" element={<MasterCourse/>} />
          <Route path="/master-course-details/:id" element={<MasterCourseDetail/>} />
          <Route path="/master-course-payment/:id" element={<MasterCoursePayment/>} />
          <Route path="/booking-calendar" element={<BookingCalendars/>} />


       {/* =============================================== */}


      {/* ====================== admin ================== */}
      
      <Route path="/admin">
         <Route path="admin-dashboard" element={<AdminDashboard/>} />
         <Route path="home-page" element={<Homepage/>} />
         <Route path="vlog-page" element={<Vlog/>} />
         <Route path="admin-shop" element={<AdminShop />} />
         <Route path="admin-shop/:param" element={<AdminShop />} />
         <Route path="admin-blog" element={< AdminBlog />} />
         {/* <Route path="admin-blogs" element={< BlogEditor />} /> */}
         <Route path="admin-message" element={< MessageComponent />} />
         <Route path="admin-consult" element={< AdminConsultant />} />
      </Route>
      {/* ===================== admin end =================== */}



      </Routes>

  </div>
  )
}

export default App
