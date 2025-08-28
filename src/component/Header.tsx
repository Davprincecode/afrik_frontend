import { useEffect, useState } from 'react'
import logo from "../assets/images/logo.png";
import scrollLogo from "../assets/images/logo-scroll.png";
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import { FaRegCircleUser } from 'react-icons/fa6';
import { IoIosArrowDown, IoMdNotificationsOutline } from 'react-icons/io';
import { BsCart2 } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import ComingSoon from './ComingSoon';
import { GoQuestion, GoSignIn } from 'react-icons/go';
import { PiSignInFill } from 'react-icons/pi';
import AuthComponent from './AuthComponent';


function Header() {
const [navOpen, setNavOpen] = useState(false);
const [signin, setSignin] = useState<boolean>(true);
const [subNav, setSubNav] = useState<boolean>(false);
const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
const navFunction = () =>{
    setNavOpen(!navOpen)
}

const navSub = () =>{
    setSubNav(!subNav)
}
const navSignin = () =>{
    setSignin(!signin)
}


  const [popAction, setPopAction] = useState<boolean>(false);
  const [authAction, setAuthAction] = useState<boolean>(false);
// onClick={() => setPopAction(!popAction)}

  return (
    <div>
      <ComingSoon popAction={popAction} setPopAction={setPopAction} />

              {/* <!-- ========nav section============== --> */}
            <div className={navOpen ? "sideNavOverall sideNavOverallChange":"sideNavOverall"}  onClick={navFunction}>
            </div>

          <div className={`navcontainer ${isScrolled ? 'scrolled' : ''}`} >
              <NavLink to="/">
              <div className="logocontainer logo">
                  <img src={logo} alt="" />
              </div>
              <div className="logocontainer scrollLogo">
                  <img src={scrollLogo} alt="" />
              </div>
              </NavLink>
              <div className="itemscontainer flex-center">
                  <ul className={navOpen ? "openNavBar" : "closeNavBar"}>
                       { signin && (<li className='auth-profile'> <NavLink to="/"> Profile </NavLink> </li>)}
                      <li> <NavLink to="/"> Home </NavLink> </li>
                      <li><NavLink to="/about-us">about us</NavLink></li>
                      <li><NavLink to="/our-services">services</NavLink></li>
                      <li onClick={() => setPopAction(!popAction)}><NavLink to="#">shop</NavLink></li>
                      <li onClick={() => setPopAction(!popAction)}>
                        <NavLink to="#">consultation</NavLink> 
                        {/* <ul>
                          <li><NavLink to="#">book consultation</NavLink></li>
                          <li><NavLink to="#">courses/masterclasses</NavLink></li>
                        </ul>   */}
                      </li>
                      <li onClick={() => setPopAction(!popAction)}><NavLink to="#">blog</NavLink> </li>
                      <li><NavLink to="/contact-us">contact us</NavLink> </li>

                      { signin && ( <li className='auth-notification flex-center justification-center gap-10'><NavLink to="/contact-us">notification</NavLink> <IoMdNotificationsOutline /></li>)}

                     <div className="auth-mobile-con">

                       { signin ? (
                         <li className='auth-mobile-con-sign-out flex-center justification-center gap-10'><GoSignIn /><NavLink to="#">sign out</NavLink></li> 
                       ) : (
                        <li className="flex-center justification-center gap-10"><PiSignInFill /> <NavLink to="#">log in</NavLink> </li>
                       )}
                       
                        <li className="flex-center justification-center gap-10"><GoQuestion /> <NavLink to="#">help</NavLink> </li>
                     </div>

                  </ul>
              </div>

              <div className="userControl flex-center">
                        
                        {
                          signin ? (
                              <div className="userDetails flex-center gap-20">
                                      <div className="cart">
                                        <FiShoppingCart />
                                        <div className="cartCount">
                                          20
                                        </div>
                                      </div>
                                      <div className="flex-center gap-5 userIcon" onClick={navSub}>
                                          <FaRegCircleUser />
                                          <IoIosArrowDown className='userArrow' />
                                      </div>
                              </div>
                          ) : (
                              <div className="signin"  onClick={() => setAuthAction(!authAction)}>
                                  <NavLink to='#' className='flex-center gap-5'>
                                      <p>sign in</p>
                                      <IoIosArrowDown className='signinIcon'/>
                                  </NavLink>
                              </div>
                          )
                        }

                      


                      
          <div className="bar" onClick={navFunction}>
                  <FaBars />
              </div>

                  </div>

          </div>

      {
        subNav && signin && (
            <div className={`signin-container ${isScrolled ? 'scrolled' : ''}`}>
                          <div className="signin-item"><NavLink to="/profile">profile</NavLink></div>
                          <div className="signin-item sign-notification flex-center gap-10"><IoMdNotificationsOutline /><NavLink to="#">notifications</NavLink></div>
                          <div className="signin-item sign-out flex-center gap-10"><GoSignIn /><NavLink to="#">sign out</NavLink></div>
                          <div className="signin-item sign-help flex-center gap-10"><GoQuestion /><NavLink to="#">help</NavLink></div>
                </div>
        )
      }
          
          <AuthComponent authAction={authAction} setAuthAction={setAuthAction}/>

        {/* <!-- ===============Nav end================ --> */}
    </div>
  )
}

export default Header
