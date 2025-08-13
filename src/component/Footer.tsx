import { NavLink } from "react-router-dom";
import whiteLogo from "../assets/images/logo-scroll.png";



function Footer() {
  return (
    <div className="footer">
     <div className="footerLogo">
        <img src={whiteLogo}  />
     </div>

     <div className="footerCon flex-center">
      <div className="footerItem flex-center">
         <div className="item"> <NavLink to='#'> Home </NavLink> </div>
         <div className="item"> <NavLink to='#'> About Us </NavLink> </div>
         <div className="item"> <NavLink to='#'> Shop </NavLink> </div>
         <div className="item"> <NavLink to='#'> Portfolio </NavLink> </div>
         <div className="item"> <NavLink to='#'> Consultation </NavLink> </div>
         <div className="item"> <NavLink to='#'> blog </NavLink> </div>
         <div className="item"> <NavLink to='#'> Contact us </NavLink> </div>
      </div>

      <div className="footerNewsList footerNews">
        <p>Join our newsletter</p>
        <div className="footerInput flex-center">
          <input type="text" placeholder="Enter your email"/>
          <div className="footerBtn">
            subscribe
          </div>
        </div>
      </div>

     </div>

     {/* ------------------ */}
<div className="footerNewsList footerNewsMobile">
        <p>Join our newsletter</p>
        <div className="footerInput flex-center">
          <input type="text" placeholder="Enter your email"/>
          <div className="footerBtn">
            subscribe
          </div>
        </div>
      </div>
     {/* ------------------ */}

     <div className="footerBottom flex-center">
      <div className="copyright">
          © Loveafrik, All Right Reserved 2025.
      </div>
      <div className="terms flex-center gap-20">
        <div><NavLink to="#">terms</NavLink></div>
        <div><NavLink to="#">privacy</NavLink></div>
        <div><NavLink to="#">cookies</NavLink></div>
      </div>
     </div>
     <div className="copyright" style={{marginTop : "10px"}}>
      © Design: gazadanladi.corp@gmail.com
     </div>

    </div>
  )
}

export default Footer
