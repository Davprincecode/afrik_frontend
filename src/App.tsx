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
import ForgetPassword from "./pages/Auth/ForgetPassword";
import ChangePassword from "./pages/Auth/ChangePassword";
import VerifyOtp from "./pages/Auth/VerifyOtp";
import LandingPage from "./pages/LandingPage";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import Notification from "./component/Notification";
import LoginBtn from "./pages/LoginBtn";
import BlogList from "./pages/BlogList";
import BlogDetails from "./pages/BlogDetails";
import AnimatedShuffleList from "./pages/AnimatedShuffleList";
import ComingSoon from "./component/ComingSoon";





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
        
          <Route path="/test-google" element={<LoginBtn />} />


          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/redirectform" element={<RedirectForm />} />
          <Route path="/emailconfirm/:token" element={<ConfirmEmail/>} />
          <Route path="/forgetpassword" element={<ForgetPassword/>} />
          <Route path="/changepassword/:token" element={<ChangePassword/>} />
          <Route path="/verifyotp" element={<VerifyOtp />} />

          <Route path="/coming-soon" element={<ComingSoon />} />

          <Route path="/shuffle" element={<AnimatedShuffleList />} />

       {/* ============================================== */}
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/our-services" element={<OurServices/>} />
          <Route path="/our-blog" element={<BlogList/>} />
          <Route path="/blog-details" element={<BlogDetails/>} />

       {/* =============================================== */}


      {/* ====================== admin ================== */}
      <Route path="/admin">
      </Route>
      {/* ===================== admin end =================== */}



      </Routes>

  </div>
  )
}

export default App
